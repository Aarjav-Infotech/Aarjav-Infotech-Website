import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { preferredType, parseAccept } from "./accept.ts";
import { HOME_SSR_COPY } from "./constants.ts";
import { getOrganizationJsonLd } from "./json-ld.ts";
import {
  getLlmsTxt,
  getMarkdownForPath,
  getNotFoundMarkdown,
} from "./markdown-content.ts";
import { getMcpManifest, getMcpServerCard, getOpenApiDocument } from "./mcp.ts";
import { handleMcpJsonRpc } from "./mcp-handler.ts";
import { createMetadata } from "./metadata.ts";

describe("accept negotiation", () => {
  it("prefers markdown when listed first", () => {
    assert.equal(
      preferredType("text/markdown, text/html;q=0.8"),
      "text/markdown",
    );
  });

  it("prefers html for typical browser Accept", () => {
    assert.equal(
      preferredType(
        "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      ),
      "text/html",
    );
  });

  it("returns null when produced types are rejected", () => {
    assert.equal(preferredType("application/pdf"), null);
  });

  it("honors q=0 rejection of html with wildcard", () => {
    assert.equal(preferredType("text/html;q=0, */*;q=1"), "text/markdown");
  });

  it("parses q values", () => {
    const entries = parseAccept("text/markdown;q=0.5, text/html");
    assert.equal(entries[0]?.q, 0.5);
    assert.equal(entries[1]?.q, 1);
  });
});

describe("homepage SSR copy", () => {
  it("includes an H1-ready title and 500+ characters", () => {
    const combined = `${HOME_SSR_COPY.h1} ${HOME_SSR_COPY.lead} ${HOME_SSR_COPY.body}`;
    assert.ok(HOME_SSR_COPY.h1.includes("Aarjav Infotech"));
    assert.ok(combined.length >= 500);
  });
});

describe("markdown pages", () => {
  it("serves homepage markdown with brand and length", () => {
    const page = getMarkdownForPath("/");
    assert.ok(page);
    assert.ok(page.body.startsWith("# "));
    assert.ok(page.body.includes("Aarjav Infotech"));
    assert.ok(page.body.length >= 500);
  });

  it("serves privacy markdown with 500+ chars", () => {
    const page = getMarkdownForPath("/privacy");
    assert.ok(page);
    assert.ok(page.body.length >= 500);
  });

  it("returns agent recovery markdown for unknown paths", () => {
    const body = getNotFoundMarkdown("/no-such-page");
    assert.ok(body.includes("404"));
    assert.ok(body.includes("llms.txt"));
    assert.ok(body.includes("sitemap.xml"));
  });
});

describe("llms.txt", () => {
  it("includes when-to-use guidance and developer resources", () => {
    const txt = getLlmsTxt();
    assert.ok(txt.startsWith("# Aarjav Infotech"));
    assert.ok(txt.includes("## When to use this"));
    assert.ok(txt.includes("OpenAPI"));
    assert.ok(txt.includes("/.well-known/mcp"));
    assert.ok(txt.includes("Aarjav Infotech developer resources"));
  });
});

describe("JSON-LD organization", () => {
  it("includes contactPoint and PostalAddress", () => {
    const org = getOrganizationJsonLd();
    assert.equal(org["@type"], "Organization");
    assert.equal(org.name, "Aarjav Infotech");
    assert.ok(Array.isArray(org.contactPoint));
    assert.ok(org.contactPoint[0]?.email);
    assert.equal(org.address["@type"], "PostalAddress");
    assert.ok(org.address.addressLocality);
  });
});

describe("metadata", () => {
  it("includes canonical, og:type, and og:image", () => {
    const meta = createMetadata({ path: "/" });
    assert.equal(meta.alternates?.canonical, meta.openGraph?.url);
    const og = meta.openGraph as { type?: string; images?: unknown[] };
    assert.equal(og.type, "website");
    assert.ok(Array.isArray(og.images) && og.images.length > 0);
  });
});

describe("MCP discovery", () => {
  it("exposes streamable_http in manifest", () => {
    const manifest = getMcpManifest();
    assert.ok(manifest.endpoints.streamable_http.endsWith("/mcp"));
    assert.equal(manifest.capabilities.tools, true);
  });

  it("server card has ora-required fields", () => {
    const card = getMcpServerCard();
    assert.ok(card.name);
    assert.ok(card.description);
    assert.ok(card.version);
    assert.ok(card.serverUrl);
    assert.ok(Array.isArray(card.tools) && card.tools.length > 0);
  });

  it("handles initialize and tools/list", () => {
    const init = handleMcpJsonRpc({
      jsonrpc: "2.0",
      id: 1,
      method: "initialize",
      params: {},
    });
    assert.ok(init && "result" in init);

    const tools = handleMcpJsonRpc({
      jsonrpc: "2.0",
      id: 2,
      method: "tools/list",
    });
    assert.ok(tools && "result" in tools);
    assert.ok(
      Array.isArray((tools as { result: { tools: unknown[] } }).result.tools),
    );
  });
});

describe("OpenAPI", () => {
  it("is titled for Aarjav Infotech and documents contact + mcp", () => {
    const doc = getOpenApiDocument();
    assert.equal(doc.info.title, "Aarjav Infotech API");
    assert.ok(doc.paths["/api/contact"]);
    assert.ok(doc.paths["/mcp"]);
  });
});

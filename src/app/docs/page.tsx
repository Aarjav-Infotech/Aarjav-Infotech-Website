import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { APP_URL, ROUTES } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Aarjav Infotech Developer Resources",
  description:
    "Aarjav Infotech developer resources — API docs, OpenAPI specification, MCP server, llms.txt, and markdown content negotiation.",
  path: ROUTES.docs,
});

const resources = [
  {
    href: ROUTES.docsApi,
    title: "Aarjav Infotech API documentation",
    body: "Contact intake overview and how agents should call public endpoints.",
  },
  {
    href: ROUTES.openApi,
    title: "Aarjav Infotech OpenAPI specification",
    body: "Machine-readable OpenAPI 3 document for public HTTP surfaces.",
  },
  {
    href: "/.well-known/mcp",
    title: "Aarjav Infotech MCP handshake",
    body: "SEP-1960 manifest for Streamable HTTP discovery at /.well-known/mcp.",
  },
  {
    href: "/.well-known/mcp/server-card.json",
    title: "Aarjav Infotech MCP server card",
    body: "Tool list and transport metadata for pre-connection discovery.",
  },
  {
    href: ROUTES.mcp,
    title: "Aarjav Infotech MCP endpoint",
    body: "Live Streamable HTTP JSON-RPC endpoint for company and docs tools.",
  },
  {
    href: ROUTES.llms,
    title: "llms.txt",
    body: "When-to-use guidance and curated markdown links for agents.",
  },
] as const;

export default function DocsPage() {
  return (
    <main id="main-content" className="section-padding">
      <Container className="max-w-3xl">
        <p className="text-primary text-sm font-semibold tracking-wide">
          Developer resources
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Aarjav Infotech Developer Resources
        </h1>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          Make Aarjav Infotech API docs, OpenAPI, auth notes, webhooks guidance,
          and MCP server endpoints discoverable by name. Prefer{" "}
          <code className="text-sm">Accept: text/markdown</code> on public pages
          or fetch the <code className="text-sm">.md</code> sibling URLs.
        </p>

        <ul className="mt-10 space-y-6">
          {resources.map((item) => (
            <li key={item.href} className="border-border border-b pb-6">
              <h2 className="text-xl font-semibold">
                <Link
                  href={item.href}
                  className="text-primary underline-offset-2 hover:underline"
                >
                  {item.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mt-2 text-base leading-relaxed">
                {item.body}
              </p>
              <p className="text-muted-foreground mt-1 text-sm">
                {APP_URL}
                {item.href}
              </p>
            </li>
          ))}
        </ul>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Auth & webhooks</h2>
          <p className="text-muted-foreground mt-3 text-base leading-relaxed">
            Public marketing endpoints do not require API keys. Customer
            production deployments receive separate Aarjav Infotech auth docs
            and webhook signing secrets under contract. Agents should not invent
            credentials — start at Contact or MCP{" "}
            <code className="text-sm">get_developer_resources</code>.
          </p>
        </section>
      </Container>
    </main>
  );
}

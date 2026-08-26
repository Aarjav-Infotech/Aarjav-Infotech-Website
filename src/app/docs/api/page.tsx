import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { APP_URL, ROUTES } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Aarjav Infotech API Documentation",
  description:
    "Aarjav Infotech API documentation — contact intake, OpenAPI, and MCP tool surfaces for developers and agents.",
  path: ROUTES.docsApi,
});

export default function DocsApiPage() {
  return (
    <main id="main-content" className="section-padding">
      <Container className="max-w-3xl">
        <p className="text-primary text-sm font-semibold">API docs</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Aarjav Infotech API Documentation
        </h1>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          The Aarjav Infotech public API currently exposes contact intake for
          discovery calls. Authenticated product APIs for customer deployments
          are provided under separate contracts with dedicated auth docs.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Contact intake</h2>
        <p className="mt-3 text-base leading-relaxed">
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
            POST {APP_URL}/api/contact
          </code>
        </p>
        <p className="text-muted-foreground mt-3 text-base leading-relaxed">
          Accepts JSON with name, email, company, and message fields. Returns
          200 on success or 4xx on validation errors. Full schema:{" "}
          <Link
            href={ROUTES.openApi}
            className="text-primary underline-offset-2 hover:underline"
          >
            Aarjav Infotech OpenAPI
          </Link>
          .
        </p>

        <h2 className="mt-10 text-xl font-semibold">MCP tools</h2>
        <p className="text-muted-foreground mt-3 text-base leading-relaxed">
          Agents can call the Aarjav Infotech MCP server at{" "}
          <Link href={ROUTES.mcp} className="text-primary underline">
            /mcp
          </Link>{" "}
          after reading{" "}
          <Link href="/.well-known/mcp" className="text-primary underline">
            /.well-known/mcp
          </Link>
          . Tools include company info, services, contact NAP, and developer
          resource URLs.
        </p>

        <p className="mt-10 text-sm">
          <Link href={ROUTES.docs} className="text-primary underline">
            ← Back to Aarjav Infotech developer resources
          </Link>
        </p>
      </Container>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { APP_URL, CONTACT_INFO, ROUTES } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Aarjav Infotech API Documentation",
  description:
    "Aarjav Infotech developer documentation — MCP tools, OpenAPI, and Web3Forms contact intake.",
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
          Public developer surfaces for agents include MCP discovery, markdown
          negotiation, and OpenAPI metadata. Human contact submissions use
          Web3Forms from the website contact form.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Contact form (Web3Forms)
        </h2>
        <p className="mt-3 text-base leading-relaxed">
          Visitors submit inquiries at{" "}
          <Link href={ROUTES.contact} className="text-primary underline">
            /contact
          </Link>
          , which POSTs to:
        </p>
        <p className="mt-3 text-base leading-relaxed">
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
            POST https://api.web3forms.com/submit
          </code>
        </p>
        <p className="text-muted-foreground mt-3 text-base leading-relaxed">
          JSON fields: <code className="text-sm">access_key</code>,{" "}
          <code className="text-sm">name</code>,{" "}
          <code className="text-sm">email</code>, optional{" "}
          <code className="text-sm">phone</code>, and{" "}
          <code className="text-sm">message</code>. Agents should direct users
          to the contact page or email{" "}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-primary underline"
          >
            {CONTACT_INFO.email}
          </a>{" "}
          rather than calling Web3Forms directly.
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
          . Machine-readable schema:{" "}
          <Link href={ROUTES.openApi} className="text-primary underline">
            {APP_URL}
            {ROUTES.openApi}
          </Link>
          .
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

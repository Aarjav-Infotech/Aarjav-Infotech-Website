import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { APP_URL, ROUTES } from "@/lib/constants";

const recoveryLinks = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.llms, label: "llms.txt" },
  { href: "/sitemap.xml", label: "Sitemap" },
  { href: ROUTES.docs, label: "Developer docs" },
  { href: ROUTES.about, label: "About" },
  { href: ROUTES.contact, label: "Contact" },
  { href: ROUTES.privacy, label: "Privacy" },
] as const;

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="section-padding flex flex-1 items-center"
    >
      <Container className="text-center">
        <p className="text-primary text-sm font-semibold">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. Agents:
          this is a real HTTP 404 — use the recovery links below.
        </p>

        <div className="text-muted-foreground mx-auto mt-8 max-w-xl text-left text-sm leading-relaxed">
          <p className="text-foreground font-medium">Where to look next</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {recoveryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="text-primary underline-offset-2 hover:underline"
                  href={link.href}
                >
                  {link.label}
                </Link>
                {link.href === ROUTES.llms
                  ? " — when to use Aarjav Infotech and curated index"
                  : null}
                {link.href === "/sitemap.xml" ? " — full URL list" : null}
                {link.href === ROUTES.docs
                  ? " — OpenAPI, MCP, API overview"
                  : null}
              </li>
            ))}
          </ul>
          <pre className="bg-muted mt-4 overflow-x-auto rounded-md p-3 text-xs whitespace-pre-wrap">
            {`# Agent recovery (markdown)

- [Home](${APP_URL}/)
- [llms.txt](${APP_URL}${ROUTES.llms})
- [Sitemap](${APP_URL}/sitemap.xml)
- [Developer docs](${APP_URL}${ROUTES.docs})
- [About](${APP_URL}${ROUTES.about})
- [Contact](${APP_URL}${ROUTES.contact})
- [Privacy](${APP_URL}${ROUTES.privacy})`}
          </pre>
        </div>

        <div className="mt-8">
          <Button asChild>
            <Link href={ROUTES.home}>Go back home</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}

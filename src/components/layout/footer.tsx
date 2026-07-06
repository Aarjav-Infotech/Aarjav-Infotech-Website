import Link from "next/link";

import { Container } from "@/components/common/container";
import { APP_NAME, CONTACT_INFO, NAV_LINKS, ROUTES } from "@/lib/constants";

/**
 * Site footer with navigation links and contact information.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t" role="contentinfo">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link
              href={ROUTES.home}
              className="text-lg font-bold tracking-tight"
            >
              {APP_NAME}
            </Link>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Building innovative technology solutions for forward-thinking
              businesses.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold">Contact</h2>
            <address className="text-muted-foreground mt-4 space-y-2 text-sm not-italic">
              <p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="hover:text-foreground transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p>{CONTACT_INFO.address}</p>
            </address>
          </div>
        </div>

        <div className="text-muted-foreground mt-10 border-t pt-6 text-center text-sm">
          <p>
            &copy; {currentYear} {APP_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

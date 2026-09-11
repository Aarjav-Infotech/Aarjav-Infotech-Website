import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { CONTACT_INFO, ROUTES } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Aarjav Infotech privacy policy — how we collect, use, and protect personal information from website visitors and clients.",
  path: ROUTES.privacy,
});

export default function PrivacyPage() {
  return (
    <main id="main-content" className="section-padding">
      <Container className="prose prose-slate max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Aarjav Infotech Privacy Policy
        </h1>
        <p className="text-muted-foreground mt-4 text-base leading-relaxed">
          This Privacy Policy explains how Aarjav Infotech collects, uses, and
          protects personal information when you visit our website, submit a
          contact form, or engage us for AI and automation services. We are
          committed to transparent handling of inquiry and client data.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Information we collect</h2>
        <p className="mt-3 text-base leading-relaxed">
          We may collect your name, work email, phone number, company name, and
          project details that you voluntarily submit through our contact forms
          or email. We also receive standard technical logs such as IP address,
          browser type, and pages visited that our hosting provider retains for
          security and reliability. We do not require account registration to
          browse public marketing pages.
        </p>

        <h2 className="mt-10 text-xl font-semibold">How we use information</h2>
        <p className="mt-3 text-base leading-relaxed">
          Aarjav Infotech uses this information to respond to inquiries,
          schedule discovery calls, deliver contracted services, improve our
          website, and meet legal or security obligations. We do not sell
          personal information. We share data only with processors required to
          operate our site and business tools, under appropriate agreements.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Retention and your rights
        </h2>
        <p className="mt-3 text-base leading-relaxed">
          We retain inquiry data as long as needed to complete your request and
          maintain ordinary business records, then delete or anonymize it. You
          may request access, correction, or deletion of your personal data by
          emailing us. Where applicable law grants additional rights, we will
          honor them promptly.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Contact</h2>
        <p className="mt-3 text-base leading-relaxed">
          Privacy requests:{" "}
          <a
            className="text-primary underline"
            href={`mailto:${CONTACT_INFO.email}`}
          >
            {CONTACT_INFO.email}
          </a>
          . Postal address: {CONTACT_INFO.streetAddress},{" "}
          {CONTACT_INFO.addressLocality}, {CONTACT_INFO.addressRegion}{" "}
          {CONTACT_INFO.postalCode}, India. Phone: {CONTACT_INFO.phone}.
        </p>
        <p className="text-muted-foreground mt-6 text-sm">
          Effective date: 1 January 2026 · Organization: Aarjav Infotech ·{" "}
          <Link href={ROUTES.contact} className="text-primary underline">
            Contact page
          </Link>
        </p>
      </Container>
    </main>
  );
}

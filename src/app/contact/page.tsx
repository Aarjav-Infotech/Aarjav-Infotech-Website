import type { Metadata } from "next";

import ContactFeature from "@/features/contact/contect-content";
import { CONTACT_INFO } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { asset } from "@/lib/cdn";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Contact Us",
    description:
      "Get in touch with Aarjav Infotech to discuss your enterprise AI and automation implementation needs.",
    path: "/contact",
  }),
  openGraph: {
    title: "Contact Us | Aarjav Infotech",
    description:
      "Get in touch with Aarjav Infotech to discuss your enterprise AI and automation implementation needs.",
    url: "/contact",
    images: [
      {
        url: asset("/images/contact-us.png"),
        width: 1200,
        height: 630,
        alt: "Contact Us - Aarjav Infotech",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="sr-only" data-agent-content="true">
        <h1>Contact Aarjav Infotech — Talk to solution engineers</h1>
        <p>
          Connect with Aarjav Infotech solution engineers to automate and scale
          enterprise workflows with secure AI agents, document processing, and
          voice AI. Email {CONTACT_INFO.email}, phone {CONTACT_INFO.phone},
          address {CONTACT_INFO.address}. Book a discovery call when you have a
          discovery call when you have a concrete workflow to automate, a
          compliance constraint to satisfy, or an existing AI pilot that needs
          to harden for production. Please include your industry, systems of
          record, and success metrics so we can route you to the right
          engineering pod at Aarjav Infotech.
        </p>
      </section>
      <ContactFeature />
    </main>
  );
}

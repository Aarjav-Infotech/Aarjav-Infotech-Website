import type { Metadata } from "next";

import { ContactSection } from "@/features/contact/components/contact-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Aarjav Infotech. We'd love to hear about your project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content">
      <ContactSection />
    </main>
  );
}

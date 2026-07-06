import type { Metadata } from "next";

import { ServicesContent } from "@/features/services/components/services-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Explore our technology services including web development, cloud solutions, and IT consulting.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main-content">
      <ServicesContent />
    </main>
  );
}

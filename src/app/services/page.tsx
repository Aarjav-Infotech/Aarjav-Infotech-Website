import type { Metadata } from "next";

import AiContent from "@/features/services/ai-workflow-page/ai-workflow-content";
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
      <AiContent />
    </main>
  );
}

import type { Metadata } from "next";

import AiContent from "@/features/services/ai-workflow-page/ai-workflow-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "AI Services",
  description:
    "Aarjav Infotech AI services: workflow automation, support triage, document processing, voice agents, and enterprise AI systems.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main-content">
      <AiContent />
    </main>
  );
}

import type { Metadata } from "next";

import EnterpriseAiContent from "@/features/services/enterprise-ai-page/enterprise-ai-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Enterprise AI Ecosystem",
  description:
    "Aarjav Infotech connects AI agents, ERP, CRM, and data pipelines into a controlled enterprise AI platform.",
  path: "/services/enterprise-ai-page",
});

export default function EnterpriseAiEcosystemPage() {
  return (
    <main id="main-content">
      <EnterpriseAiContent />
    </main>
  );
}

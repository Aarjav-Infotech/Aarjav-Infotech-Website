import type { Metadata } from "next";

import AIContent from "../../../features/services/ai-workflow-page/ai-workflow-content";
import { createMetadata } from "@/lib/metadata";
import { asset } from "@/lib/cdn";

export const metadata: Metadata = {
  ...createMetadata({
    title: "AI Workflow Automation",
    description:
      "Automate complex business processes and scale operations with custom AI workflow integrations.",
    path: "/services/ai-workflow-automation",
  }),
  openGraph: {
    title: "AI Workflow Automation | Aarjav Infotech",
    description:
      "Automate complex business processes and scale operations with custom AI workflow integrations.",
    url: "/services/ai-workflow-automation",
    images: [
      {
        url: asset("/images/ai-workflow-automation.png"),
        width: 1200,
        height: 630,
        alt: "AI Workflow Automation - Aarjav Infotech",
      },
    ],
  },
};

export default function AIWorkflowAutomationPage() {
  return (
    <main id="main-content">
      <AIContent />
    </main>
  );
}

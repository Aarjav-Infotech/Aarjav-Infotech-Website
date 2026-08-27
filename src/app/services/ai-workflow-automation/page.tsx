import type { Metadata } from "next";

import AIContent from "../../../features/services/ai-workflow-page/ai-workflow-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "AI Workflow Automation",
  description:
    "Aarjav Infotech designs and deploys AI workflow automation that turns repetitive enterprise processes into secure, monitored agent pipelines.",
  path: "/services/ai-workflow-automation",
});

export default function AIWorkflowAutomationPage() {
  return (
    <main id="main-content">
      <AIContent />
    </main>
  );
}

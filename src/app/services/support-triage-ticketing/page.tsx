import type { Metadata } from "next";

import TriageContent from "@/features/services/support-triage-page/triage-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Support Triage and AI Ticketing",
  description:
    "Aarjav Infotech connects email, WhatsApp, and web channels to AI support triage and ticketing that classifies, responds, and resolves.",
  path: "/services/AI-Voice-Agent-Deployment",
});

export default function SupportTriagePage() {
  return (
    <main id="main-content">
      <TriageContent />
    </main>
  );
}

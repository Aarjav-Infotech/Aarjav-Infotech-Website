import type { Metadata } from "next";

import AIVoiceContent from "@/features/services/ai-voice-page/ai-voice-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "AI Voice Agents",
  description:
    "Aarjav Infotech deploys enterprise AI voice agents for inbound and outbound calls with guardrails, evaluation, and monitoring.",
  path: "/services/ai-voice-agent",
});

export default function AIVoiceAgentPage() {
  return (
    <main id="main-content">
      <AIVoiceContent />
    </main>
  );
}

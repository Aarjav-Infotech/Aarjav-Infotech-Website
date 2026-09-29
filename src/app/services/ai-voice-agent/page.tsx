import type { Metadata } from "next";

import AIVoiceContent from "@/features/services/ai-voice-page/ai-voice-content";
import { createMetadata } from "@/lib/metadata";
import { asset } from "@/lib/cdn";

export const metadata: Metadata = {
  ...createMetadata({
    title: "AI Voice Agent Deployment",
    description:
      "Deploy intelligent AI voice agents for automated customer interactions and enterprise support.",
    path: "/services/ai-voice-agent",
  }),
  openGraph: {
    title: "AI Voice Agent Deployment | Aarjav Infotech",
    description:
      "Deploy intelligent AI voice agents for automated customer interactions and enterprise support.",
    url: "/services/ai-voice-agent",
    images: [
      {
        url: asset("/images/ai-voice-agent-deployment.png"),
        width: 1200,
        height: 630,
        alt: "AI Voice Agent Deployment - Aarjav Infotech",
      },
    ],
  },
};

export default function AIVoiceAgentPage() {
  return (
    <main id="main-content">
      <AIVoiceContent />
    </main>
  );
}

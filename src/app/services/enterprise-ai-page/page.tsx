import type { Metadata } from "next";

import EnterpriseAiContent from "@/features/services/enterprise-ai-page/enterprise-ai-content";
import { createMetadata } from "@/lib/metadata";
import { asset } from "@/lib/cdn";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Enterprise AI Ecosystem",
    description:
      "Build robust, secure, and production-grade enterprise AI ecosystems with custom integrations.",
    path: "/services/enterprise-ai-ecosystem",
  }),
  openGraph: {
    title: "Enterprise AI Ecosystem | Aarjav Infotech",
    description:
      "Build robust, secure, and production-grade enterprise AI ecosystems with custom integrations.",
    url: "/services/enterprise-ai-ecosystem",
    images: [
      {
        url: asset("/images/enterprise-ai-ecosystem.png"),
        width: 1200,
        height: 630,
        alt: "Enterprise AI Ecosystem - Aarjav Infotech",
      },
    ],
  },
};

export default function EnterpriseAiEcosystemPage() {
  return (
    <main id="main-content">
      <EnterpriseAiContent />
    </main>
  );
}

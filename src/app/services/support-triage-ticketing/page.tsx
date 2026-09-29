import type { Metadata } from "next";

import TriageContent from "@/features/services/support-triage-page/triage-content";
import { createMetadata } from "@/lib/metadata";
import { asset } from "@/lib/cdn";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Support Triage & Ticketing",
    description:
      "Automate support triage and ticketing workflows with intelligent AI categorization and routing.",
    path: "/services/support-triage",
  }),
  openGraph: {
    title: "Support Triage & Ticketing | Aarjav Infotech",
    description:
      "Automate support triage and ticketing workflows with intelligent AI categorization and routing.",
    url: "/services/support-triage",
    images: [
      {
        url: asset("/images/support-triage-and-ticketing.png"),
        width: 1200,
        height: 630,
        alt: "Support Triage & Ticketing - Aarjav Infotech",
      },
    ],
  },
};

export default function SupportTriagePage() {
  return (
    <main id="main-content">
      <TriageContent />
    </main>
  );
}

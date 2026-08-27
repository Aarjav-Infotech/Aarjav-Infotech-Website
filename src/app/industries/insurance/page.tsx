import type { Metadata } from "next";

import InsuranceContent from "@/features/Industry/insurance-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "AI for Insurance",
  description:
    "Aarjav Infotech delivers AI for insurance operations — claims documents, workflow automation, and support triage with enterprise controls.",
  path: "/industries/insurance",
});

export default function InsurancePage() {
  return (
    <main id="main-content">
      <InsuranceContent />
    </main>
  );
}

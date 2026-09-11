import type { Metadata } from "next";

import HealthcareContent from "@/features/Industry/healthcare-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "AI for Healthcare",
  description:
    "Aarjav Infotech connects AI agents and healthcare workflows to automate operations, support care teams, and improve patient experiences.",
  path: "/industries/healthcare",
});

export default function HealthcarePage() {
  return (
    <main id="main-content">
      <HealthcareContent />
    </main>
  );
}

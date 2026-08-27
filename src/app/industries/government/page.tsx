import type { Metadata } from "next";

import GovernmentContent from "@/features/Industry/government-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "AI for Government",
  description:
    "Aarjav Infotech builds AI for public-sector operations: workflow automation, citizen services, and security-minded deployments.",
  path: "/industries/government",
});

export default function GovernmentPage() {
  return (
    <main id="main-content">
      <GovernmentContent />
    </main>
  );
}

import type { Metadata } from "next";

import IndustrialContent from "@/features/Industry/industrial-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "AI for Industrial Operations",
  description:
    "Aarjav Infotech connects AI agents, industrial data, and operational workflows to automate processes and improve productivity.",
  path: "/industries/industrial",
});

export default function IndustrialPage() {
  return (
    <main id="main-content">
      <IndustrialContent />
    </main>
  );
}

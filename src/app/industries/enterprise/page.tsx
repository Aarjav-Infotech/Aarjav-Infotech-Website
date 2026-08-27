import type { Metadata } from "next";

import EnterpriseContent from "@/features/Industry/enterprise-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "AI for Enterprise",
  description:
    "Aarjav Infotech connects AI agents, enterprise applications, and business data to automate operations and improve decision-making.",
  path: "/industries/enterprise",
});

export default function EnterprisePage() {
  return (
    <main id="main-content">
      <EnterpriseContent />
    </main>
  );
}

import type { Metadata } from "next";

import BankingContent from "@/features/Industry/banking-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "AI for Banking",
  description:
    "Aarjav Infotech builds an intelligent AI layer across banking operations — automation, document processing, and secure agents for regulated financial workflows.",
  path: "/industries/banking",
});

export default function BankingPage() {
  return (
    <main id="main-content">
      <BankingContent />
    </main>
  );
}

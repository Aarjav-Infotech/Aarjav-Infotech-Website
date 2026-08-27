import type { Metadata } from "next";

import DocumentContent from "@/features/services/ai-document-page/document-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "AI Document Processing",
  description:
    "Aarjav Infotech AI document processing extracts structured data from invoices, claims, and forms with enterprise security and human-in-the-loop controls.",
  path: "/services/ai-document-processing",
});

export default function AIDocumentProcessingPage() {
  return (
    <main id="main-content">
      <DocumentContent />
    </main>
  );
}

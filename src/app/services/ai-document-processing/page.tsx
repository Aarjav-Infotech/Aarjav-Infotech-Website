import type { Metadata } from "next";

import DocumentContent from "@/features/services/ai-document-page/document-content";
import { createMetadata } from "@/lib/metadata";
import { asset } from "@/lib/cdn"; // 1. Import your asset helper

export const metadata: Metadata = {
  ...createMetadata({
    title: "AI Document Processing",
    description:
      "Aarjav Infotech AI document processing extracts structured data from invoices, claims, and forms with enterprise security and human-in-the-loop controls.",
    path: "/services/ai-document-processing",
  }),
  // 2. Add the custom Open Graph image configuration
  openGraph: {
    title: "AI Document Processing | Aarjav Infotech",
    description:
      "Aarjav Infotech AI document processing extracts structured data from invoices, claims, and forms with enterprise security and human-in-the-loop controls.",
    url: "/services/ai-document-processing",
    images: [
      {
        url: asset("/images/ai-document-processing.png"),
        width: 1200,
        height: 630,
        alt: "AI Document Processing - Aarjav Infotech",
      },
    ],
  },
};

export default function AIDocumentProcessingPage() {
  return (
    <main id="main-content">
      <DocumentContent />
    </main>
  );
}

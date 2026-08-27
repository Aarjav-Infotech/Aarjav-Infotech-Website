import type { Metadata } from "next";

import RealEstateContent from "@/features/Industry/real-estate-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "AI for Real Estate",
  description:
    "Aarjav Infotech connects AI agents, property data, and real-estate workflows to automate operations and accelerate transactions.",
  path: "/industries/real-estate",
});

export default function RealEstatePage() {
  return (
    <main id="main-content">
      <RealEstateContent />
    </main>
  );
}

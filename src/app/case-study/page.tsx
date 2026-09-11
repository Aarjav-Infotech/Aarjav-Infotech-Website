import type { Metadata } from "next";

import CaseStudyFeature from "@/features/case-study/case-study-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Case Studies",
  description:
    "Aarjav Infotech case studies — how we delivered AI and software projects such as Sahaj Construction and Glamora Jewels.",
  path: "/case-study",
});

export default function CaseStudyPage() {
  return (
    <main id="main-content">
      <CaseStudyFeature />
    </main>
  );
}

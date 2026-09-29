import type { Metadata } from "next";

import CaseStudyFeature from "@/features/case-study/case-study-content";
import { createMetadata } from "@/lib/metadata";
import { asset } from "@/lib/cdn";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Case Studies",
    description:
      "Discover how we help enterprises transform workflows and implement scalable AI solutions successfully.",
    path: "/case-studies",
  }),
  openGraph: {
    title: "Case Studies | Aarjav Infotech",
    description:
      "Discover how we help enterprises transform workflows and implement scalable AI solutions successfully.",
    url: "/case-studies",
    images: [
      {
        url: asset("/images/case-study.png"),
        width: 1200,
        height: 630,
        alt: "Case Studies - Aarjav Infotech",
      },
    ],
  },
};

export default function CaseStudyPage() {
  return (
    <main id="main-content">
      <CaseStudyFeature />
    </main>
  );
}

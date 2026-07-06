import type { Metadata } from "next";

import { AboutContent } from "@/features/about/components/about-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about Aarjav Infotech — our mission, vision, and commitment to technology excellence.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutContent />
    </main>
  );
}

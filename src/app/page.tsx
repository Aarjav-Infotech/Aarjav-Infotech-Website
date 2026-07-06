import type { Metadata } from "next";

import { HomeContent } from "@/features/home/components/home-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description:
    "Aarjav Infotech delivers innovative technology solutions for modern businesses.",
  path: "/",
});

export default function HomePage() {
  return (
    <main id="main-content">
      <HomeContent />
    </main>
  );
}

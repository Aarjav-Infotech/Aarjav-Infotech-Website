"use client";

import { useEffect } from "react";
import HomeContent from "@/features/home/components/home-content";
import AboutContent from "@/features/about/components/about-content";
import AiContent from "@/features/services/ai-workflow-page/ai-workflow-content";

export default function HomePage() {
  useEffect(() => {
    // Force active element to blur on mount so no section can pull focus
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      window.scrollTo(0, 0);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main id="main-content" className="w-full">
      <HomeContent />
      <AboutContent />
      <AiContent />
    </main>
  );
}

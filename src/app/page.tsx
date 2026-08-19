"use client";

import { useEffect, useState, useLayoutEffect } from "react";
import HomeContent from "@/features/home/components/home-content";
import { HomeSkeleton } from "@/features/home/components/home-skeleton";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  // Disable browser memory scroll
  if (typeof window !== "undefined") {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }

  useEffect(() => {
    // Force top on load
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    if (!isLoading) {
      // Loop over next few animation frames to kill any delayed scroll-into-view calls
      let count = 0;
      const forceTop = () => {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        count++;
        if (count < 10) {
          requestAnimationFrame(forceTop);
        }
      };

      forceTop();
    }
  }, [isLoading]);

  return (
    <main id="main-content" className="w-full">
      {isLoading ? <HomeSkeleton /> : <HomeContent />}
    </main>
  );
}

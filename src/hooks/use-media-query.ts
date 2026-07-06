"use client";

import { useCallback, useEffect, useState } from "react";

interface UseMediaQueryOptions {
  defaultValue?: boolean;
}

/**
 * Subscribes to a CSS media query and returns whether it currently matches.
 */
export function useMediaQuery(
  query: string,
  { defaultValue = false }: UseMediaQueryOptions = {},
): boolean {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent): void => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

/**
 * Returns true when viewport width is below the md breakpoint (768px).
 */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)", { defaultValue: false });
}

/**
 * Locks body scroll — useful for mobile navigation overlays.
 */
export function useScrollLock(locked: boolean): void {
  const lockScroll = useCallback((): void => {
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = useCallback((): void => {
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (locked) {
      lockScroll();
      return unlockScroll;
    }
    unlockScroll();
  }, [locked, lockScroll, unlockScroll]);
}

"use client";

import { useEffect, useState } from "react";

import { BREAKPOINTS } from "@/lib/theme";

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
 * Returns true when viewport width is below the md breakpoint.
 */
export function useIsMobile(): boolean {
  return useMediaQuery(`(max-width: calc(${BREAKPOINTS.md} - 1px))`, {
    defaultValue: false,
  });
}

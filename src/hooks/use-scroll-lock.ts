"use client";

import { useCallback, useEffect } from "react";

/**
 * Locks body scroll — useful for overlays and mobile navigation.
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

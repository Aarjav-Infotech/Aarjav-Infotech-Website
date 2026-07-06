import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Loading placeholder with pulse animation.
 */
function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-muted animate-pulse rounded-md", className)}
      aria-hidden="true"
      {...props}
    />
  );
}

export { Skeleton };

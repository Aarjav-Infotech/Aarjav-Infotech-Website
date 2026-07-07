import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface SpinnerProps extends ComponentProps<"span"> {
  label?: string;
  size?: "sm" | "default" | "lg";
}

const sizeClasses = {
  sm: "size-4",
  default: "size-5",
  lg: "size-6",
} as const;

/**
 * Minimal loading indicator for async actions.
 */
export function Spinner({
  className,
  label = "Loading",
  size = "default",
  ...props
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          "border-primary animate-spin rounded-full border-2 border-t-transparent",
          sizeClasses[size],
        )}
      />
    </span>
  );
}

import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps extends ComponentProps<"div"> {
  children: ReactNode;
  size?: "default" | "narrow" | "wide" | "ultra" | "full";
}

/**
 * Responsive centered container with consistent horizontal padding.
 */
export function Container({
  children,
  className,
  size = "default",
  style,
  ...props
}: ContainerProps) {
  // Use site-container for responsive behavior requested by user
  return (
    <div
      className={cn(
        "site-container",
        size === "full" && "max-w-none",
        size === "narrow" && "max-w-full", // Keep some overrides if needed
        className,
      )}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

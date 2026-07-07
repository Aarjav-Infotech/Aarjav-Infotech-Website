import type { ComponentProps, ReactNode } from "react";

import { CONTAINERS } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface ContainerProps extends ComponentProps<"div"> {
  children: ReactNode;
  size?: "default" | "narrow" | "wide" | "ultra" | "full";
}

const sizeStyles = {
  default: { maxWidth: CONTAINERS.default },
  narrow: { maxWidth: CONTAINERS.narrow },
  wide: { maxWidth: CONTAINERS.wide },
  ultra: { maxWidth: CONTAINERS.ultra },
  full: { maxWidth: "none" },
} as const;

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
  return (
    <div
      className={cn("container-padding mx-auto w-full", className)}
      style={{ ...sizeStyles[size], ...style }}
      {...props}
    >
      {children}
    </div>
  );
}

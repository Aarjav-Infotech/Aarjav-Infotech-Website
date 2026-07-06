import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps extends ComponentProps<"div"> {
  children: ReactNode;
  size?: "default" | "narrow" | "wide";
}

const sizeClasses = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
  wide: "max-w-[90rem]",
} as const;

/**
 * Responsive centered container with consistent horizontal padding.
 */
export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "container-padding mx-auto w-full",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

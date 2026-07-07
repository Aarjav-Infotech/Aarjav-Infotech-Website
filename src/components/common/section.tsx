import type { ComponentProps, ReactNode } from "react";

import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

interface SectionProps extends ComponentProps<"section"> {
  children: ReactNode;
  containerSize?: "default" | "narrow" | "wide" | "ultra" | "full";
  tone?: "default" | "muted" | "brand" | "gradient";
  noPadding?: boolean;
}

const toneClasses = {
  default: "",
  muted: "bg-muted/30",
  brand: "bg-primary/5",
  gradient: "bg-gradient-to-b from-primary/5 to-background",
} as const;

/**
 * Semantic page section with optional container wrapper.
 */
export function Section({
  children,
  className,
  containerSize = "default",
  tone = "default",
  noPadding = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        !noPadding && "section-padding",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

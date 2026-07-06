import type { ComponentProps, ReactNode } from "react";

import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

interface SectionProps extends ComponentProps<"section"> {
  children: ReactNode;
  containerSize?: "default" | "narrow" | "wide";
  noPadding?: boolean;
}

/**
 * Semantic page section with optional container wrapper.
 */
export function Section({
  children,
  className,
  containerSize = "default",
  noPadding = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(!noPadding && "section-padding", className)}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

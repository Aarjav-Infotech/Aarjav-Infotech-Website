import type { ReactNode } from "react";

import { Heading } from "@/components/common/heading";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  actions?: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  eyebrow?: string;
  subtitle?: string;
  title: string;
}

/**
 * Reusable marketing section heading block.
 */
export function SectionHeader({
  actions,
  align = "center",
  className,
  eyebrow,
  subtitle,
  title,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <Heading as="h2" align={align} eyebrow={eyebrow} subtitle={subtitle}>
        {title}
      </Heading>
      {actions && (
        <div className={cn("flex", align === "center" && "justify-center")}>
          {actions}
        </div>
      )}
    </div>
  );
}

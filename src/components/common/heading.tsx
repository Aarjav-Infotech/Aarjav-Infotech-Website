import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps extends ComponentProps<"h1"> {
  as?: HeadingLevel;
  children: ReactNode;
  subtitle?: string;
}

const headingStyles: Record<HeadingLevel, string> = {
  h1: "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
  h2: "text-3xl font-bold tracking-tight sm:text-4xl",
  h3: "text-2xl font-semibold tracking-tight",
  h4: "text-xl font-semibold",
};

/**
 * Semantic heading with consistent typography scale.
 */
export function Heading({
  as: Component = "h2",
  children,
  subtitle,
  className,
  ...props
}: HeadingProps) {
  return (
    <div className="space-y-3">
      <Component className={cn(headingStyles[Component], className)} {...props}>
        {children}
      </Component>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl text-lg">{subtitle}</p>
      )}
    </div>
  );
}

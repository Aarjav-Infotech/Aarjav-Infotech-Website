import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";
type HeadingAlign = "left" | "center" | "right";

interface HeadingProps extends ComponentProps<"h1"> {
  as?: HeadingLevel;
  children: ReactNode;
  align?: HeadingAlign;
  eyebrow?: string;
  subtitle?: string;
  subtitleClassName?: string;
}

const headingStyles: Record<HeadingLevel, string> = {
  h1: "text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl",
  h2: "text-3xl font-medium tracking-tight sm:text-4xl",
  h3: "text-2xl font-medium tracking-tight",
  h4: "text-xl font-medium",
};

/**
 * Semantic heading with consistent typography scale.
 */
export function Heading({
  as: Component = "h2",
  align = "left",
  eyebrow,
  children,
  subtitle,
  subtitleClassName,
  className,
  ...props
}: HeadingProps) {
  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  } as const;

  return (
    <div className={cn("space-y-3", alignClasses[align])}>
      {eyebrow && (
        <p className="text-muted-foreground font-ui text-sm font-medium tracking-[0.08em] uppercase">
          {eyebrow}
        </p>
      )}
      <Component className={cn(headingStyles[Component], className)} {...props}>
        {children}
      </Component>
      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground max-w-2xl text-lg leading-relaxed",
            subtitleClassName,
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

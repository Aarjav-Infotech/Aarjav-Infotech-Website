import Link from "next/link";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { Heading } from "@/components/common/heading";
import { cn } from "@/lib/utils";

interface HeroAction {
  label: string;
  href: string;
  variant?: "default" | "outline";
}

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  actions?: HeroAction[];
  children?: ReactNode;
  className?: string;
}

/**
 * Full-width hero section for page headers.
 */
export function Hero({
  title,
  subtitle,
  description,
  actions,
  children,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "section-padding from-primary/5 to-background bg-gradient-to-b",
        className,
      )}
      aria-labelledby="hero-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading as="h1" id="hero-heading" subtitle={subtitle}>
            {title}
          </Heading>
          {description && (
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              {description}
            </p>
          )}
          {actions && actions.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {actions.map((action) => (
                <Button
                  key={action.href}
                  variant={action.variant ?? "default"}
                  size="lg"
                  asChild
                >
                  <Link href={action.href}>{action.label}</Link>
                </Button>
              ))}
            </div>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}

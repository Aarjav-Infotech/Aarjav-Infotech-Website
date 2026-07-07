import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";
import { Heading } from "@/components/common/heading";
import { cn } from "@/lib/utils";

interface CtaProps {
  align?: "left" | "center";
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  tone?: "default" | "brand" | "gradient";
}

/**
 * Call-to-action section for driving user engagement.
 */
export function Cta({
  align = "center",
  eyebrow,
  title,
  description,
  buttonLabel,
  buttonHref,
  tone = "brand",
}: CtaProps) {
  return (
    <Section tone={tone}>
      <div
        className={cn(
          "mx-auto max-w-2xl",
          align === "center" && "text-center",
          align === "left" && "text-left",
        )}
      >
        <Heading as="h2" align={align} eyebrow={eyebrow}>
          {title}
        </Heading>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          {description}
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href={buttonHref}>{buttonLabel}</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

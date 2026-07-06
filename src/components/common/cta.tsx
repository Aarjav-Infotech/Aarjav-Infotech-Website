import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";
import { Heading } from "@/components/common/heading";

interface CtaProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

/**
 * Call-to-action section for driving user engagement.
 */
export function Cta({ title, description, buttonLabel, buttonHref }: CtaProps) {
  return (
    <Section className="bg-primary/5">
      <div className="mx-auto max-w-2xl text-center">
        <Heading as="h2">{title}</Heading>
        <p className="text-muted-foreground mt-4 text-lg">{description}</p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href={buttonHref}>{buttonLabel}</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

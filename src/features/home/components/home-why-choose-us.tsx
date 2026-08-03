"use client";

import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/common/section";
import { Heading } from "@/components/common/heading";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface HomeWhyChooseUsProps {
  title: string;
  subtitle?: string;
  features?: FeatureItem[];
}

export function HomeWhyChooseUs({
  title,
  subtitle,
  features = [],
}: HomeWhyChooseUsProps) {
  return (
    <Section className="py-16 md:py-24">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <Heading as="h2" subtitle={subtitle}>
            {title}
          </Heading>
        </div>
      </FadeIn>

      {features.length > 0 && (
        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;

            return (
              <StaggerItem key={feature.title || idx} className="h-full">
                <Card className="group h-full flex flex-col justify-between border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                  <CardHeader className="p-6">
                    {IconComponent && (
                      <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <IconComponent
                          className="size-6 transition-transform duration-300 group-hover:scale-110"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                    <CardTitle className="mt-4 text-xl font-bold tracking-tight text-foreground">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      )}
    </Section>
  );
}
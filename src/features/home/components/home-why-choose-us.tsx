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
import type { LucideIcon } from "lucide-react";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface HomeWhyChooseUsProps {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
}

export function HomeWhyChooseUs({
  title,
  subtitle,
  features,
}: HomeWhyChooseUsProps) {
  return (
    <Section>
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <Heading as="h2" subtitle={subtitle}>
            {title}
          </Heading>
        </div>
      </FadeIn>

      <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <StaggerItem key={feature.title}>
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <feature.icon
                  className="text-primary size-8"
                  aria-hidden="true"
                />
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

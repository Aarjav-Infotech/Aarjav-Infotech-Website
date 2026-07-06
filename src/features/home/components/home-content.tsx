import { Cta } from "@/components/common/cta";
import { Hero } from "@/components/common/hero";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/motion";
import { Section } from "@/components/common/section";
import { Heading } from "@/components/common/heading";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ROUTES } from "@/lib/constants";
import { Code2, Rocket, Shield } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Tailored software solutions built with modern technologies and best practices.",
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description:
      "Accelerate your business growth with strategic technology consulting.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description:
      "Enterprise-grade security and architecture designed to scale with you.",
  },
] as const;

/**
 * Home page feature content with hero, features grid, and CTA.
 */
export function HomeContent() {
  return (
    <>
      <Hero
        title="Innovative Technology Solutions"
        subtitle="Aarjav Infotech"
        description="We help businesses transform through cutting-edge software development, cloud solutions, and digital strategy."
        actions={[
          { label: "Our Services", href: ROUTES.services },
          { label: "Contact Us", href: ROUTES.contact, variant: "outline" },
        ]}
      />

      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <Heading
              as="h2"
              subtitle="We deliver end-to-end technology solutions that drive measurable business outcomes."
            >
              Why Choose Us
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

      <Cta
        title="Ready to Start Your Project?"
        description="Let's discuss how we can help bring your vision to life."
        buttonLabel="Get in Touch"
        buttonHref={ROUTES.contact}
      />
    </>
  );
}

import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/motion";
import { Section } from "@/components/common/section";
import { Heading } from "@/components/common/heading";
import { Cta } from "@/components/common/cta";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ROUTES } from "@/lib/constants";
import {
  Cloud,
  Globe,
  Layout,
  Smartphone,
  Database,
  Settings,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Layout,
    title: "Web Development",
    description:
      "Modern, responsive web applications built with React, Next.js, and TypeScript.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with native performance and seamless user experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure, migration, and DevOps automation on AWS, GCP, and Azure.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Robust data architecture, optimization, and management for high-performance applications.",
  },
  {
    icon: Globe,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs designed for reliability, security, and developer experience.",
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description:
      "Strategic technology guidance to align your digital initiatives with business goals.",
  },
];

/**
 * Services page feature content.
 */
export function ServicesContent() {
  return (
    <>
      <Section className="from-primary/5 to-background bg-gradient-to-b">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <Heading
              as="h1"
              subtitle="Comprehensive technology services to accelerate your digital journey."
            >
              Our Services
            </Heading>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <service.icon
                    className="text-primary size-8"
                    aria-hidden="true"
                  />
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Cta
        title="Need a Custom Solution?"
        description="Tell us about your project and we'll craft a tailored approach."
        buttonLabel="Contact Us"
        buttonHref={ROUTES.contact}
      />
    </>
  );
}

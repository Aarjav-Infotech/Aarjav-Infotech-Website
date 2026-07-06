import { FadeIn } from "@/components/common/motion";
import { Section } from "@/components/common/section";
import { Heading } from "@/components/common/heading";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    title: "Our Mission",
    description:
      "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage.",
  },
  {
    title: "Our Vision",
    description:
      "To be the trusted technology partner for organizations seeking digital excellence and sustainable innovation.",
  },
  {
    title: "Our Values",
    description:
      "Integrity, excellence, collaboration, and continuous learning guide everything we do.",
  },
] as const;

/**
 * About page feature content.
 */
export function AboutContent() {
  return (
    <>
      <Section className="from-primary/5 to-background bg-gradient-to-b">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <Heading
              as="h1"
              subtitle="Learn about our story, mission, and the team behind Aarjav Infotech."
            >
              About Us
            </Heading>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          <FadeIn>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Aarjav Infotech is a technology company dedicated to delivering
              high-quality software solutions for businesses of all sizes. With
              a focus on modern architecture, user experience, and scalable
              systems, we partner with clients to turn complex challenges into
              elegant solutions.
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.1}>
              <Card className="h-full">
                <CardContent className="space-y-3 pt-6">
                  <h2 className="text-lg font-semibold">{value.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}

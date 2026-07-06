import { Section } from "@/components/common/section";
import { Heading } from "@/components/common/heading";
import { Card, CardContent } from "@/components/ui/card";
import { ContactFormLoader } from "@/features/contact/components/contact-form-loader";
import { CONTACT_INFO } from "@/lib/constants";

/**
 * Contact page feature section with form and contact details.
 */
export function ContactSection() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <Heading
          as="h1"
          subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        >
          Contact Us
        </Heading>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardContent className="pt-6">
            <ContactFormLoader />
          </CardContent>
        </Card>

        <aside className="space-y-6" aria-label="Contact information">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <div>
                <h2 className="text-sm font-semibold">Email</h2>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-muted-foreground hover:text-foreground mt-1 block text-sm transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold">Phone</h2>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="text-muted-foreground hover:text-foreground mt-1 block text-sm transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold">Address</h2>
                <p className="text-muted-foreground mt-1 text-sm">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </Section>
  );
}

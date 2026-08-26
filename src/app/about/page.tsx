import type { Metadata } from "next";

import { AboutContent } from "@/features/about/components/about-content";
import { JsonLd } from "@/components/common/json-ld";
import { getOrganizationJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About Aarjav Infotech",
  description:
    "Learn about Aarjav Infotech — our mission, vision, and commitment to enterprise AI automation excellence in Ahmedabad, India.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content">
      <JsonLd data={getOrganizationJsonLd()} />
      <section className="sr-only" data-agent-content="true">
        <h1>About Aarjav Infotech — AI-native enterprise automation partner</h1>
        <p>
          Aarjav Infotech is an AI-native agency based in Ahmedabad, Gujarat,
          India. We build human-centered AI solutions that transform workflows,
          enhance decision-making, and accelerate innovation across banking,
          healthcare, insurance, government, real estate, and industrial
          operations. Our mission is to ship automations that keep running:
          secure agents, evaluated pipelines, and documentation your compliance
          teams can trust. We partner with enterprises that need production
          systems — not prototypes — with clear ownership, monitoring, and
          handoff. Aarjav Infotech teams combine solution engineering, AI
          evaluation, and integration work across ERP, CRM, ticketing, and voice
          channels for regulated and high-stakes rollouts worldwide.
        </p>
      </section>
      <AboutContent />
    </main>
  );
}

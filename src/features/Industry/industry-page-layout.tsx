"use client";

import React from "react";
import Image from "next/image";
import { Hero } from "@/components/common/hero";
import {
  HeroFloatingIcons,
  InlineCapsule,
} from "@/components/common/hero-floating-icons";
import { HomeFaq } from "@/features/home/components/home-faq";
import { ContactSection } from "@/features/home/components/home-contact";

export interface IndustryConfig {
  eyebrow?: string;
  heroTitle?: React.ReactNode;
  heroDescription?: string;
  stats?: { value: string; label: string }[];
  platformSection?: {
    eyebrow?: string;
    title: string;
    description?: string;
    imageSrc: string;
    imageAlt: string;
  };
  strategySection?: {
    eyebrow?: string;
    title: string;
    description?: string;
    cards: { title: string; desc: string }[];
  };
  transformSection?: {
    eyebrow?: string;
    title: string;
    description?: string;
    steps: {
      number: string;
      title: string;
      desc: string;
      highlight?: string;
    }[];
  };
  lifecycleSection?: {
    eyebrow?: string;
    title: string;
    description?: string;
    cards: {
      icon?: React.ReactNode;
      imageSrc?: string;
      imageAlt?: string;
      title: string;
      desc: string;
      capabilities?: string[];
    }[];
  };
}

export function IndustryPageLayout({ config }: { config?: IndustryConfig }) {
  // Safe default fallback object if config is omitted
  const data: IndustryConfig = config || {
    eyebrow: "",
    heroTitle: "AI That Powers Modern Banking",
    heroDescription:
      "One intelligent layer across your banking operations to protect transactions, enhance decision making, and deliver real-time financial insights.",
    stats: [
      { value: "99.5%", label: "ACCURACY RATE" },
      { value: "70%", label: "FASTER TRIAGE" },
      { value: "24/7", label: "AUTOMATED SUPPORT" },
      { value: "45K+", label: "DAILY TRANSACTIONS" },
    ],
    platformSection: {
      eyebrow: "Banking Transformation",
      title: "One Intelligent Layer Across Your Banking Operations",
      description:
        "Connect customers, employees, data, applications, and workflows through a unified AI ecosystem designed to make banking operations faster, smarter, and more efficient.",
      imageSrc: "/images/common-industries.svg",
      imageAlt: "Banking Agentic OS Control Plane Diagram",
    },
    strategySection: {
      eyebrow: "AI Strategy",
      title: "The Right Banking Strategy Changes Everything",
      cards: [
        {
          title: "Adaptive Risk Assessment",
          desc: "Evaluate loan, credit, and mortgage risks continuously using predictive financial modeling.",
        },
        {
          title: "Automated Fraud Detection",
          desc: "Detect suspicious account activities, identity spoofing, and transaction anomalies instantly.",
        },
        {
          title: "Real-time Portfolio Insights",
          desc: "Provide customers and advisors with live investment reporting driven by financial AI models.",
        },
        {
          title: "Compliant Data Governance",
          desc: "Ensure complete adherence to banking regulations, KYC standards, and data security mandates.",
        },
      ],
    },
    transformSection: {
      eyebrow: "Our Approach",
      title: "How We Transform Banking Operations",
      description:
        "We combine AI, automation, enterprise integration, and intelligent workflows to modernize banking processes without disrupting the systems your business already depends on.",
      steps: [
        {
          number: "01",
          title: "Understand Your Banking Ecosystem",
          desc: "We analyze your existing systems, customer journeys, workflows, data sources, and operational challenges to identify the highest-value opportunities for AI transformation.",
          highlight:
            "The Banking OS is not a core banking replacement. It's the intelligence layer that makes every system you already run work together toward your business and compliance objectives.",
        },
        {
          number: "02",
          title: "Build the Right AI Architecture",
          desc: "We design intelligent workflows and AI experiences around your business requirements, security standards, existing technology stack, and long-term transformation goals.",
          highlight:
            "Every execution in the Banking OS traces back to a stated objective and a documented compliance position. Regulators get the audit trail they require. You get the outcomes the business demands.",
        },
        {
          number: "03",
          title: "Connect Your Enterprise Systems",
          desc: "We connect AI agents with core banking platforms, CRMs, ERPs, APIs, databases, and third-party applications to create a unified operational ecosystem.",
          highlight:
            "Regulators in 2026 are not asking whether you use AI. They are asking how you govern it. The OS answers that question with an architecture, not a policy document.",
        },
        {
          number: "04",
          title: "Continuously Improve Performance",
          desc: "We monitor workflows, analyze outcomes, and continuously optimize AI systems to improve efficiency, accuracy, customer experience, and business performance.",
          highlight:
            "The OS builds institutional intelligence that stays in the system credit patterns, fraud typologies, compliance positions so institutional knowledge doesn't walk out the door with any single team.",
        },
      ],
    },
    lifecycleSection: {
      eyebrow: "AI Banking Solutions",
      title: "Intelligent Solutions Across the Banking Lifecycle",
      description:
        "From customer interactions to back-office operations, connect AI and automation across critical banking processes to deliver faster, safer, and more personalized experiences.",
      cards: [
        {
          imageSrc: "/images/solution-1.svg",
          imageAlt: "AI Customer Support Icon",
          title: "AI-powered support for every customer interaction.",
          desc: "Deploy AI voice and chat agents that can handle customer queries, account assistance, service requests, and routine banking interactions 24/7.",
          capabilities: [
            "AI Voice & Chat Agents",
            "Customer Query Resolution",
            "Personalized Assistance",
            "24/7 Support",
          ],
        },
        {
          imageSrc: "/images/solution-2.svg",
          imageAlt: "Workflow Automation Icon",
          title:
            "Turn repetitive banking processes into intelligent workflows.",
          desc: "Automate onboarding, KYC, document verification, approvals, and internal workflows while connecting the systems your teams already use.",
          capabilities: [
            "KYC & Onboarding",
            "Document Processing",
            "Workflow Automation",
            "System Integrations",
          ],
        },
        {
          imageSrc: "/images/solution-3.svg",
          imageAlt: "Security & Risk Icon",
          title: "Make financial operations more secure and proactive.",
          desc: "Use AI to identify unusual activity, support risk assessment, monitor transactions, and streamline compliance processes.",
          capabilities: [
            "Fraud Detection",
            "Risk Analysis",
            "AML Monitoring",
            "Compliance Automation",
          ],
        },
        {
          imageSrc: "/images/solution-4.svg",
          imageAlt: "Analytics & Intelligence Icon",
          title: "Turn banking data into actionable intelligence.",
          desc: "Connect enterprise data and AI models to help teams understand performance, identify patterns, and make faster, data-driven decisions.",
          capabilities: [
            "Real-Time Analytics",
            "Predictive Insights",
            "Credit & Risk Intelligence",
            "Business Dashboards",
          ],
        },
      ],
    },
  };

  return (
    <>
      {/* SECTION 1: HERO */}
      <Hero
        align="center"
        layout="centered"
        eyebrow={data.eyebrow || ""}
        eyebrowClassName="border-slate-200 mb-4 inline-flex items-center gap-1.5 rounded border-b-4 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-sm"
        title={
          <span className="relative inline-block leading-[1.08] tracking-[-2px] whitespace-pre-line md:tracking-[-3px]">
            {data.heroTitle}
            <InlineCapsule />
          </span>
        }
        titleClassName="text-[#000000] text-[38px] md:text-[68px] lg:text-[76px] font-bold max-w-[960px] mx-auto text-center"
        description={data.heroDescription}
        descriptionClassName="text-[#2C3E50] text-[16px] md:text-[19px] font-medium leading-[1.5] max-w-[780px] mx-auto mt-8 md:mt-12"
        bgImage="/images/hero-background.png"
        className="rounded-[36px] border border-white/40 shadow-sm md:rounded-[48px]"
        decoration={<HeroFloatingIcons />}
      />

      {/* SECTION 2: STATS BAR */}
      {data.stats && data.stats.length > 0 && (
        <section className="w-full bg-white py-12">
          <div className="mx-auto max-w-full border-y border-slate-200 px-4 lg:px-12">
            <div className="grid grid-cols-2 divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
              {data.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="text-3xl font-bold text-[#0B0F19] sm:text-4xl md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[10px] font-medium tracking-widest text-[#94A3B8] uppercase sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: PLATFORM OVERVIEW DIAGRAM */}
      {data.platformSection && (
        <section className="w-full bg-white py-12 md:py-12">
          <div className="mx-auto max-w-full px-4 text-center sm:px-6 lg:px-8">
            <div className="mb-4 flex justify-center">
              <div className="inline-flex items-center gap-1.5 rounded border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-bold text-[#2b2bad] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                {data.platformSection.eyebrow || "Banking Transformation"}
              </div>
            </div>

            <h2 className="mx-auto max-w-[960px] text-2xl font-bold tracking-tight text-[#0B0F19] sm:text-3xl md:text-4xl lg:text-[40px] lg:leading-[1.15]">
              {data.platformSection.title}
            </h2>

            {data.platformSection.description && (
              <p className="text-basic mx-auto mt-4 max-w-[800px] leading-relaxed text-[#64748B] sm:text-sm md:text-lg">
                {data.platformSection.description}
              </p>
            )}

            <div className="relative mx-auto mt-10 w-full max-w-full overflow-hidden p-4 sm:p-6 md:p-8">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white p-2">
                <Image
                  src={data.platformSection.imageSrc}
                  alt={data.platformSection.imageAlt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: AI STRATEGY / THE CHALLENGES GRID */}
      {data.strategySection && (
        <section className="w-full bg-white py-12 md:py-12">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
              <div className="mb-4 flex justify-center">
                <div className="inline-flex items-center gap-1.5 rounded border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                  {data.strategySection.eyebrow || "The Challenges"}
                </div>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[#0B0F19] sm:text-4xl md:text-[44px] md:leading-[1.15]">
                {data.strategySection.title}
              </h2>

              {data.strategySection.description && (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#64748B] sm:text-base">
                  {data.strategySection.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {data.strategySection.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-[24px] border border-slate-100 bg-[#F8F9FA] p-8 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                      {card.title}
                    </h3>
                    <div className="my-4 h-[1px] w-full bg-slate-200/80" />
                    <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: TRANSFORMING OPERATIONS (01-04 PROCESS GRID) */}
      {data.transformSection && (
        <section className="w-full bg-white py-12 md:py-12">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
              <div className="mb-4 flex justify-center">
                <div className="inline-flex items-center gap-1.5 rounded border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                  {data.transformSection.eyebrow || "Our Approach"}
                </div>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[#0B0F19] sm:text-4xl md:text-[44px] md:leading-[1.15]">
                {data.transformSection.title}
              </h2>

              {data.transformSection.description && (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#64748B] sm:text-base">
                  {data.transformSection.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {data.transformSection.steps.map((step) => (
                <div
                  key={step.number}
                  className="relative flex flex-col justify-between rounded-[24px] border border-slate-100 bg-[#F8F9FA] p-6 shadow-sm transition-all duration-300 hover:shadow-md md:p-8"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="pr-2 text-lg font-bold text-slate-900 sm:text-xl">
                        {step.title}
                      </h3>
                      <span className="text-4xl leading-none font-extrabold text-[#D6E2FF] sm:text-5xl md:text-6xl">
                        {step.number}
                      </span>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {step.desc}
                    </p>
                  </div>

                  {step.highlight && (
                    <div className="mt-6 rounded-2xl border-b-2 border-[#0053FA] bg-[#EBF2FF] p-4 text-xs leading-relaxed text-[#1E3A8A] sm:text-sm">
                      {step.highlight}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6: INTELLIGENT SOLUTIONS ACROSS THE LIFECYCLE */}
      {data.lifecycleSection && (
        <section className="w-full bg-white py-12 md:py-16">
          <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
              <div className="mb-4 flex justify-center">
                <div className="inline-flex items-center gap-1.5 rounded border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                  {data.lifecycleSection.eyebrow || "AI Banking Solutions"}
                </div>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[#0B0F19] sm:text-4xl md:text-[44px] md:leading-[1.15]">
                {data.lifecycleSection.title}
              </h2>

              {data.lifecycleSection.description && (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#64748B] sm:text-base">
                  {data.lifecycleSection.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {data.lifecycleSection.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-[24px] border border-slate-100 bg-[#F4F4F5] p-6 shadow-sm transition-all duration-300 hover:shadow-md md:p-8"
                >
                  <div>
                    {card.imageSrc && (
                      <div className="mb-6 flex items-center rounded-xl">
                        <Image
                          src={card.imageSrc}
                          alt={card.imageAlt || card.title}
                          width={60}
                          height={60}
                          className="object-cover"
                        />
                      </div>
                    )}

                    <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                      {card.title}
                    </h3>

                    <p className="text-basic sm:text-basic mt-2 leading-relaxed text-slate-600">
                      {card.desc}
                    </p>

                    {card.capabilities && card.capabilities.length > 0 && (
                      <div className="mt-6 border-t border-slate-200/60 pt-4">
                        <h4 className="text-basic sm:text-basic font-bold text-slate-900">
                          Key capabilities
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {card.capabilities.map((cap, capIdx) => (
                            <li
                              key={capIdx}
                              className="text-basic sm:text-basic flex items-center gap-2 text-slate-600"
                            >
                              <span className="size-1 rounded-full bg-slate-900" />
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 7: FAQS & CONTACT CTA */}
      <HomeFaq />
      <ContactSection />
    </>
  );
}

export default IndustryPageLayout;

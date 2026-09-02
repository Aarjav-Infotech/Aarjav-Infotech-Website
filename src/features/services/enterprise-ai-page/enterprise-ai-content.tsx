"use client";

import { Hero } from "@/components/common/hero";
import {
  HeroFloatingIcons,
  InlineCapsule,
} from "@/components/common/hero-floating-icons";
import { ContactSection } from "@/features/home/components/home-contact";
import { HomeFaq } from "@/features/home/components/home-faq";
import { AiStatisticsSection } from "@/features/services/ai-workflow-page/ai-statatics-section";
import EnterpriseCoreCapabilitiesSection from "./enterprise-core-capabilities";
// import WhyEnterprisesChooseUsEcosystem from "./why-enterprises-choose-us-ecosystem";
import WhyItMattersSection from "./enterprice-why-matters";
import EnterpriseImplementationRoadmap from "./enterprise-implementation-roadmap";

const enterpriseHeroProps = {
  align: "center" as const,
  layout: "centered" as const,
  eyebrow: "",
  eyebrowClassName:
    "rounded text-[14px] font-semibold tracking-wide inline-block border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-[#2b2bad] shadow-xl/20",
  title: (
    <span className="relative inline-block leading-[1.08] tracking-[-2px] md:tracking-[-3px]">
      Enterprise AI <br className="hidden md:inline" />
      Ecosystem
      <InlineCapsule />
    </span>
  ),
  titleClassName:
    "text-[#000000] text-[38px] md:text-[68px] lg:text-[76px] font-bold  mx-auto text-center",
  description:
    "Connect disconnected tools so data flows where you need it, when needed.",
  descriptionClassName:
    "text-[#2C3E50] text-[16px] md:text-[19px] font-medium leading-[1.5] max-w-[780px] mx-auto mt-12",
  bgImage: "/images/hero-background.png",
  className:
    "rounded-[36px] border border-white/40 shadow-sm md:rounded-[48px]",
  decoration: <HeroFloatingIcons />,
};

const enterpriseStats = [
  { value: "100+", label: "ENTERPRISE INTEGRATIONS SUPPORTED" },
  { value: "99.9%", label: "PLATFORM AVAILABILITY" },
  { value: "80%", label: "FASTER CROSS-SYSTEM WORKFLOWS" },
  { value: "24/7", label: "INTELLIGENT SYSTEM ORCHESTRATION" },
];

export function EnterpriseAiContent() {
  return (
    <>
      <Hero {...enterpriseHeroProps} />
      <AiStatisticsSection
        eyebrow="Statistics"
        title="Connecting Systems. Powering Intelligent Enterprises."
        description="Integrate your business applications, AI models, and enterprise data into a unified platform that eliminates silos, automates operations, and accelerates business growth."
        stats={enterpriseStats}
      />
      <EnterpriseCoreCapabilitiesSection />
      {/* <WhyEnterprisesChooseUsEcosystem /> */}
      <WhyItMattersSection />
      <EnterpriseImplementationRoadmap />
      <HomeFaq />
      <ContactSection />
    </>
  );
}

export default EnterpriseAiContent;

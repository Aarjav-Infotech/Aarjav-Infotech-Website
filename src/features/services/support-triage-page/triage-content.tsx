"use client";

import { Hero } from "@/components/common/hero";
import {
  HeroFloatingIcons,
  InlineCapsule,
} from "@/components/common/hero-floating-icons";
import { ContactSection } from "@/features/home/components/home-contact";
import { HomeFaq } from "@/features/home/components/home-faq";
import { AiStatisticsSection } from "@/features/services/ai-workflow-page/ai-statatics-section";
import NumberedRoadmapSection from "./numbered-roadmap-section";
import IntelligentTicketManagement from "./intelligent-ticket-management";
import WhySupportAutomation from "./why-support-automation";

const triageHeroProps = {
  align: "center" as const,
  layout: "centered" as const,
  eyebrow: "AI Services",
  eyebrowClassName:
    "rounded text-[14px] font-semibold tracking-wide inline-block border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-[#2b2bad] shadow-xl/20",
  title: (
    <span className="relative inline-block leading-[1.08] tracking-[-2px] md:tracking-[-3px]">
      Support Triage & <br className="hidden md:inline" />
      AI Ticketing
      <InlineCapsule />
    </span>
  ),
  titleClassName:
    "text-[#000000] text-[38px] md:text-[68px] lg:text-[76px] font-bold  mx-auto text-center",
  description:
    "Categorize, prioritize, and resolve incoming customer tickets instantly with intelligent AI triage models. Reduce response times and free your support team for complex inquiries.",
  descriptionClassName:
    "text-[#2C3E50] text-[16px] md:text-[19px] font-medium leading-[1.5] max-w-[780px] mx-auto mt-12",
  bgImage: "/images/hero-background.png",
  className:
    "rounded-[36px] border border-white/40 shadow-sm md:rounded-[48px]",
  decoration: <HeroFloatingIcons />,
};

// Custom statistics tailored specifically for Support Triage & Ticketing
const triageStats = [
  { value: "70%", label: "FASTER FIRST RESPONSE" },
  { value: "85%", label: "ACCURATE CATEGORIZATION" },
  { value: "24/7", label: "AI-Powered Support" },
  { value: "95%", label: "SLA Compliance" },
];

export function TriageContent() {
  return (
    <>
      <Hero {...triageHeroProps} />

      {/* Reusing AiStatisticsSection with customized Support Triage values */}
      <AiStatisticsSection
        eyebrow="Statistics"
        title="Turning Support Into Customer Satisfaction"
        description="Every customer interaction deserves speed and accuracy. Our AI-powered support systems classify requests, prioritize critical issues, automate repetitive tasks, and help your teams resolve tickets faster while improving customer experience."
        stats={triageStats}
      />
      <IntelligentTicketManagement />
      <WhySupportAutomation />
      <NumberedRoadmapSection />
      <HomeFaq />
      <ContactSection />
    </>
  );
}

export default TriageContent;

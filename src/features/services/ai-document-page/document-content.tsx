"use client";

import { Hero } from "@/components/common/hero";
import {
  HeroFloatingIcons,
  InlineCapsule,
} from "@/components/common/hero-floating-icons";
import { ContactSection } from "@/features/home/components/home-contact";
import { HomeFaq } from "@/features/home/components/home-faq";
import { AiStatisticsSection } from "@/features/services/ai-workflow-page/ai-statatics-section";
import AiCapabilities from "@/features/services/ai-document-page/ai-capabilities";
import DocumentProcessSection from "./document-process-section";
import WhyItMattersSection from "./why-it-matters-section";

const documentHeroProps = {
  align: "center" as const,
  layout: "centered" as const,
  eyebrow: "",
  eyebrowClassName:
    "rounded text-[14px] font-semibold tracking-wide inline-block border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-[#2b2bad] shadow-xl/20",
  title: (
    <span className="relative inline-block leading-[1.08] tracking-[-2px] md:tracking-[-3px]">
      AI Document
      <br className="hidden md:inline" />
      Processing <InlineCapsule />
    </span>
  ),
  titleClassName:
    "text-[#000000] text-[38px] md:text-[68px] lg:text-[76px] font-bold max-w-[960px] mx-auto text-center",
  description:
    "Our AI Document Processing solution combines OCR, Natural Language Processing, and machine learning to automate document-heavy workflows with speed.",
  descriptionClassName:
    "text-[#2C3E50] text-[16px] md:text-[19px] font-medium leading-[1.5] max-w-[780px] mx-auto mt-12",
  bgImage: "/images/hero-background.png",
  className:
    "rounded-[36px] border border-white/40 shadow-sm md:rounded-[48px]",
  decoration: <HeroFloatingIcons />,
};

// Custom statistics tailored specifically for Document AI
const documentStats = [
  { value: "95%", label: "Data Extraction Accuracy" },
  { value: "81%", label: "Faster Document Processing" },
  { value: "24/7", label: "Automated Document Processing" },
  { value: "73%", label: "Reduction in Manual Entry" },
];

export function DocumentContent() {
  return (
    <>
      <Hero {...documentHeroProps} />

      {/* Reusing AiStatisticsSection with customized Document AI values */}
      <AiStatisticsSection
        eyebrow="Statistics"
        title="Transforming Documents into Actionable Data"
        description="Accelerate document-intensive workflows with AI-powered extraction, classification, and automation. Process business documents faster, improve accuracy, and eliminate manual data entry at enterprise scale."
        stats={documentStats}
      />
      <AiCapabilities />
      <DocumentProcessSection />
      <WhyItMattersSection />
      <HomeFaq />
      <ContactSection />
    </>
  );
}

export default DocumentContent;

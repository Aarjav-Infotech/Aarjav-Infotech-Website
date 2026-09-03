"use client";

import { Hero } from "@/components/common/hero";
import {
  HeroFloatingIcons,
  InlineCapsule,
} from "@/components/common/hero-floating-icons";
import { ContactSection } from "@/features/home/components/home-contact";
import { HomeFaq } from "@/features/home/components/home-faq";
import HowVaniSahayWorksSection from "./vaani-sahay-process";
import VaniSahayAboutProductSection from "./vaani-sahay-products";
import ComprehensiveAssistanceSection from "./vaani-sahay-features";
import VaniSahayLanguageSupport from "./vaani-sahay-support";
import EnterpriseTrustSection from "./vaani-sahay-security";

const aiVoiceHeroProps = {
  align: "center" as const,
  layout: "centered" as const,
  eyebrow: "",
  eyebrowClassName:
    "rounded text-[14px] font-semibold tracking-wide inline-block border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-[#2b2bad] shadow-xl/20",
  title: (
    <span className="relative inline-block leading-[1.08] tracking-[-2px] md:tracking-[-3px]">
      Your AI Companion for <br className="hidden md:inline" />
      Safer Digital Finance
      <InlineCapsule />
    </span>
  ),
  titleClassName:
    "text-[#000000] text-[38px] md:text-[68px] lg:text-[76px] font-bold mx-auto text-center",
  description:
    "Empower users to identify fraud, navigate complex transactions, and escalate suspicious activities instantly with a highly secure, multilingual AI agent designed for everyday financial protection.",
  descriptionClassName:
    "text-[#2C3E50] text-[16px] md:text-[19px] font-medium leading-[1.5] max-w-[780px] mx-auto mt-12",
  bgImage: "/images/hero-background.png",
  className:
    "rounded-[36px] border border-white/40 shadow-sm md:rounded-[48px]",
  decoration: <HeroFloatingIcons />,
};

export function AIVoiceContent() {
  return (
    <>
      <Hero {...aiVoiceHeroProps} />
      <VaniSahayAboutProductSection />
      <ComprehensiveAssistanceSection />
      <VaniSahayLanguageSupport />
      <HowVaniSahayWorksSection />
      <EnterpriseTrustSection />
      <HomeFaq />
      <ContactSection />
    </>
  );
}

export default AIVoiceContent;

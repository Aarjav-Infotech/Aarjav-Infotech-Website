"use client";

import { Hero } from "@/components/common/hero";
import {
  HeroFloatingIcons,
  InlineCapsule,
} from "@/components/common/hero-floating-icons";
import { ContactSection } from "@/features/home/components/home-contact";
import { HomeFaq } from "@/features/home/components/home-faq";
import { AiStatisticsSection } from "@/features/services/ai-workflow-page/ai-statatics-section";
import AiVoiceCoreCapabilitiesSection from "./ai-voice-core-capabilities";
import WhyEnterprisesChooseUsVoice from "./why-enterprises-choose-us-voice";
import AiVoiceImplementationRoadmap from "./ai-voice-implementation-roadmap";

const aiVoiceHeroProps = {
  align: "center" as const,
  layout: "centered" as const,
  eyebrow: "",
  eyebrowClassName:
    "rounded text-[14px] font-semibold tracking-wide inline-block border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-[#2b2bad] shadow-xl/20",
  title: (
    <span className="relative inline-block leading-[1.08] tracking-[-2px] md:tracking-[-3px]">
      AI Voice Agent <br className="hidden md:inline" />
      Deployment
      <InlineCapsule />
    </span>
  ),
  titleClassName:
    "text-[#000000] text-[38px] md:text-[68px] lg:text-[76px] font-bold  mx-auto text-center",
  description:
    "Deploy AI voice agents that answer calls, understand natural conversations, automate routine interactions, and seamlessly integrate with your business systems.",
  descriptionClassName:
    "text-[#2C3E50] text-[16px] md:text-[19px] font-medium leading-[1.5] max-w-[780px] mx-auto mt-12",
  bgImage: "/images/hero-background.png",
  className:
    "rounded-[36px] border border-white/40 shadow-sm md:rounded-[48px]",
  decoration: <HeroFloatingIcons />,
};

// Custom statistics tailored for AI Voice Agent Deployment
const voiceStats = [
  { value: "93%", label: "Average Call Automation" },
  { value: "67%", label: "Lower Support Costs" },
  { value: "24/7", label: "Voice Availability" },
  { value: "97%", label: "Call Resolution Accuracy" },
];

export function AIVoiceContent() {
  return (
    <>
      <Hero {...aiVoiceHeroProps} />
      <AiStatisticsSection
        eyebrow="Statistics"
        title="Every Conversation, Smarter & Faster"
        description="Empower your business with AI voice agents that handle customer interactions with
speed, accuracy, and consistency while reducing operational costs."
        stats={voiceStats}
      />
      <AiVoiceCoreCapabilitiesSection />
      <WhyEnterprisesChooseUsVoice />
      <AiVoiceImplementationRoadmap />
      <HomeFaq />
      <ContactSection />
    </>
  );
}

export default AIVoiceContent;

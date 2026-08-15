"use client";

import { Hero } from "@/components/common/hero";
import {
  HeroFloatingIcons,
  InlineCapsule,
} from "@/components/common/hero-floating-icons";
import { HomeFaq } from "@/features/home/components/home-faq";
import { ContactSection } from "@/features/home/components/home-contact";
import FeaturedWorksSection from "./featured-works-section";

const caseStudyHeroProps = {
  align: "center" as const,
  layout: "centered" as const,
  eyebrow: "Case Studies",
  eyebrowClassName:
    "rounded text-[14px] font-semibold tracking-wide inline-block border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-[#2b2bad] shadow-xl/20",
  title: (
    <span className="relative inline-block leading-[1.08] tracking-[-2px] md:tracking-[-3px]">
      Success Stories That Drive
      <br className="hidden md:inline" />
      Transformation
      <InlineCapsule />
    </span>
  ),
  titleClassName:
    "text-[#000000] text-[38px] md:text-[68px] lg:text-[76px] font-bold max-w-[960px] mx-auto text-center",
  description:
    "Discover how our AI-powered solutions have helped organizations streamline operations, accelerate decision-making, and solve real business challenges across industries.",
  descriptionClassName:
    "text-[#2C3E50] text-[16px] md:text-[19px] font-medium leading-[1.5] max-w-[780px] mx-auto mt-12",
  bgImage: "/images/hero-background.png",
  className:
    "rounded-[36px] border border-white/40 shadow-sm md:rounded-[48px]",
  decoration: <HeroFloatingIcons />,
};

export function CaseStudyContent() {
  return (
    <>
      <Hero {...caseStudyHeroProps} />
      <FeaturedWorksSection />
      <HomeFaq />
      <ContactSection />
    </>
  );
}

export default CaseStudyContent;

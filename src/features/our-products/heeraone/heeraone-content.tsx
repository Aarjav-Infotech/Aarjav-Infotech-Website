"use client";

import React from "react";
import { Hero } from "@/components/common/hero";
import {
  HeroFloatingIcons,
  InlineCapsule,
} from "@/components/common/hero-floating-icons";
import { ContactSection } from "@/features/home/components/home-contact";
import { HomeFaq } from "@/features/home/components/home-faq";
import HeeraOneAboutSection from "@/features/our-products/heeraone/heeraone-about";

const heeraOneHeroProps = {
  align: "center" as const,
  layout: "centered" as const,
  eyebrow: "",
  eyebrowClassName:
    "rounded text-[14px] font-semibold tracking-wide inline-block border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-[#2b2bad] shadow-xl/20",
  title: (
    <span className="relative inline-block leading-[1.08] tracking-[-2px] md:tracking-[-3px]">
      Platform to Manage <br className="hidden md:inline" />
      Diamond Business
      <InlineCapsule />
    </span>
  ),
  titleClassName:
    "text-[#000000] text-[38px] md:text-[68px] lg:text-[76px] font-bold mx-auto text-center",
  description:
    "Experience precision control over every facet of your operations. From purchase to retail, our multi-tenant architecture provides unparalleled visibility and control in a single, secure environment.",
  descriptionClassName:
    "text-[#2C3E50] text-[16px] md:text-[19px] font-medium leading-[1.5] max-w-[780px] mx-auto mt-12",
  bgImage: "/images/hero-background.png",
  className:
    "rounded-[36px] border border-white/40 shadow-sm md:rounded-[48px]",
  decoration: <HeroFloatingIcons />,
};

export function HeeraOneContent() {
  return (
    <div className="relative w-full bg-white">
      <Hero {...heeraOneHeroProps} />
      <HeeraOneAboutSection />
      <HomeFaq />
      <ContactSection />
    </div>
  );
}

export default HeeraOneContent;

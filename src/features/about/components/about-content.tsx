"use client";

import { Hero } from "@/components/common/hero";
import { AboutStaticSection } from "@/features/about/components/about-static";
import {
  HeroFloatingIcons,
  InlineCapsule,
} from "@/components/common/hero-floating-icons";
import AboutTeamSection from "./about-team";
import AboutWhyChooseUs from "./about-why-choose-us";
import { HomeFaq } from "@/features/home/components/home-faq";
import TrustedBrandsSection from "./TrustedBrandsSection";
import ImageCarouselSection from "./ImageCarouselSection";
import { ContactSection } from "@/features/home/components/home-contact";
import VisionSection from "./VisionSection";

const aboutHeroProps = {
  align: "center" as const,
  layout: "centered" as const,
  eyebrow: "About Us",
  eyebrowClassName:
    "rounded text-[14px] font-semibold tracking-wide inline-block border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-[#2b2bad] shadow-xl/20",
  title: (
    <span className="relative inline-block leading-[1.08] tracking-[-2px] md:tracking-[-3px]">
      Aarjav Infotech Empowering 
      Industries
      <InlineCapsule />
    </span>
  ),
  titleClassName:
    "text-[#000000] text-[38px] md:text-[68px] lg:text-[76px] font-bold  mx-auto text-center",
  description:
    "We build human-centered AI solutions that transform workflows, enhance decision-making, and accelerate innovation across diverse global industries.",
  descriptionClassName:
    "text-[#2C3E50] text-[16px] md:text-[19px] font-medium leading-[1.5] max-w-[780px] mx-auto mt-12",
  bgImage: "/images/hero-background.png",
  className:
    "rounded-[36px] border border-white/40 shadow-sm md:rounded-[48px]",
  // Add this line below:
  decoration: <HeroFloatingIcons />,
};

export function AboutContent() {
  return (
    <>
      <Hero {...aboutHeroProps} />
      <AboutStaticSection />
      <VisionSection />
      <TrustedBrandsSection />
      <AboutTeamSection />
      <AboutWhyChooseUs />
      <ImageCarouselSection />
      <HomeFaq />
      <ContactSection />

      {/* Add your About Page specific sections here */}
    </>
  );
}

export default AboutContent;

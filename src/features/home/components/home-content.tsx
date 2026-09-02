"use client";

import { Hero } from "@/components/common/hero";
import {
  HeroFloatingIcons,
  InlineCapsule,
} from "@/components/common/hero-floating-icons";
import { ROUTES } from "@/lib/constants";
import { HomeProvenResults } from "./home-proven-results";
import { HomeWhatWeDo } from "./home-what-we-do";
import { HomeProducts } from "./home-products";
import { HomeTechnologies } from "./home-technologies";
import { HomeSecurityCompliance } from "./home-security-compliance";
import { HomeIndustries } from "./home-industries";
import { AgenticStackSection } from "./home-agentic-stack";
import { HomeCaseStudies } from "./home-casestudy";
import { HomeTestimonials } from "./home-testimonials";
import { ContactSection } from "./home-contact";
import { HomeFaq } from "./home-faq";
import { HomeArticles } from "./home-articles";

export function HomeContent() {
  return (
    <>
      <Hero
        align="center"
        layout="centered"
        eyebrow="AI-Native Agency"
        eyebrowClassName="rounded text-[14px] font-semibold tracking-wide inline-block border-b-4 boder-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-[#2b2bad] shadow-xl/20"
        title={
          <span className="relative inline-block leading-[1.08] tracking-[-2px] ">
            Power Your Enterprise with 
            Next-Generation AI.
            <InlineCapsule />
          </span>
        }
        titleClassName="text-[#000000] text-[38px] md:text-[68px] lg:text-[76px] font-bold max-w-[960px] mx-auto text-center"
        description="Deliver intelligent automation across every workflow using secure AI agents, advanced document processing, voice AI, and custom enterprise solutions built to scale."
        descriptionClassName="text-[#2C3E50] text-[16px] md:text-[19px] font-medium leading-[1.5] max-w-[780px] mx-auto mt-12"
        bgImage="/images/hero-background.png"
        className="rounded-[36px] border border-white/40 shadow-sm md:rounded-[48px]"
        decoration={<HeroFloatingIcons />}
        actions={[
          {
            label: "Book a discovery call",
            href: ROUTES.services,
            hasArrow: true,
          },
          {
            label: "View automation examples",
            href: ROUTES.contact,
            variant: "outline",
          },
        ]}
      />

      <HomeProvenResults />
      <AgenticStackSection />
      <HomeWhatWeDo />
      <HomeProducts />
      <HomeIndustries />
      <HomeCaseStudies />
      <HomeTechnologies />
      <HomeSecurityCompliance />
      <HomeTestimonials />
      <HomeFaq />
      <ContactSection />
      <HomeArticles />
    </>
  );
}

export default HomeContent;

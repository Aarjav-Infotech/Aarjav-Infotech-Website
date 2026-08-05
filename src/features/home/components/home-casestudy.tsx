"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heading } from "@/components/common/heading";
import { FadeIn } from "@/components/common/motion";
import { Button } from "@/components/ui/button";

export interface CaseStudyItem {
  id: string;
  title: string;
  description: string;
  industry: string;
  image: string;
  link: string;
}

const defaultProjects: CaseStudyItem[] = [
  {
    id: "sahaj-construction",
    title: "Sahaj Construction",
    description:
      "A complete full-stack construction company website built with Vite, React, Tailwind CSS, and Node.js.",
    industry: "SaaS",
    image: "/images/case-study-1.svg",
    link: "/case-studies/sahaj-construction",
  },
  {
    id: "glamora-jewels",
    title: "Glamora Jewels",
    description:
      "A high-converting landing page for a fine jewelry brand focused on showcasing 18K, 14K & 10K gold with lab-grown diamonds.",
    industry: "SaaS",
    image: "/images/case-study-2.svg",
    link: "/case-studies/glamora-jewels",
  },
  {
    id: "delfa-pattern-generator",
    title: "Delfa Pattern Generator",
    description:
      "An AI-powered platform generating production-ready textile patterns using ML models trained on domain-specific datasets.",
    industry: "SaaS",
    image: "/images/case-study-3.svg",
    link: "/case-studies/delfa-pattern-generator",
  },
];

interface HomeCaseStudiesProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  projects?: CaseStudyItem[];
}

export function HomeCaseStudies({
  badge = "Case Study",
  title = "Projects That Inspire Innovation.",
  subtitle = "Real results from real engagements. We measure success by outcomes, not activity.",
  projects = defaultProjects,
}: HomeCaseStudiesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll timeline across sticky track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Card 1: Starts perfectly centered (50%), holds until heading scrolls away, then shifts left (0%)
  const card1Left = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45],
    ["50%", "50%", "0%"],
  );
  const card1X = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45],
    ["-50%", "-50%", "0%"],
  );

  // Card 2: Starts offscreen (100% y), slides UP as Card 1 shifts
  const card2Y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6],
    ["100%", "100%", "0%"],
  );
  const card2Left = useTransform(
    scrollYProgress,
    [0, 0.6, 0.75],
    ["8%", "8%", "8%"],
  );

  // Card 3: Slides UP over Card 2 on further scroll
  const card3Y = useTransform(
    scrollYProgress,
    [0, 0.65, 0.95],
    ["100%", "100%", "0%"],
  );

  return (
    <div className="bg-background w-full">
      {/* 1. HEADER SECTION (Scrolls UP naturally and moves off-screen first) */}
      <div className="mx-auto w-full max-w-[1364px] px-4 pt-12 pb-8 sm:px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            {badge && (
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold text-blue-600 shadow-sm">
                <span className="size-1.5 rounded-full bg-blue-600" />
                {badge}
              </div>
            )}
            <Heading
              as="h2"
              className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              {title}
            </Heading>
            {subtitle && (
              <p className="mt-2 text-center text-sm text-slate-600 sm:text-base">
                {subtitle}
              </p>
            )}
          </div>
        </FadeIn>
      </div>

      {/* 2. STICKY CARDS TRACK (Only the card container stays pinned in screen) */}
      <div ref={containerRef} className="relative w-full lg:h-[350vh]">
        {/* Sticky viewport frame pinned directly below top navbar */}
        <div className="flex min-h-[calc(100vh-100px)] w-full flex-col items-center justify-between overflow-hidden pb-6 lg:sticky lg:top-[100px]">
          {/* --- MOBILE & TABLET LAYOUT --- */}
          <div className="my-6 flex w-full flex-col gap-8 px-4 lg:hidden">
            {projects.map((project, idx) => (
              <CaseStudyCard key={project.id} project={project} index={idx} />
            ))}
          </div>

          {/* --- DESKTOP LAYOUT: ONLY THE CARD IS PINNED & FULLY VISIBLE --- */}
          <div className="relative mx-auto my-auto hidden h-[901px] max-h-[calc(100vh-180px)] w-full max-w-[1200px] overflow-hidden lg:block">
            {/* Card 1 (Initially Centered) */}
            {projects[0] && (
              <motion.div
                style={{ left: card1Left, x: card1X }}
                className="absolute inset-y-0 z-10 flex w-full max-w-[999px] justify-center"
              >
                <CaseStudyCard project={projects[0]} index={0} />
              </motion.div>
            )}

            {/* Card 2 (Slides UP as Card 1 shifts left) */}
            {projects[1] && (
              <motion.div
                style={{ y: card2Y, left: card2Left }}
                className="absolute inset-y-0 z-20 flex w-full max-w-[999px] justify-center"
              >
                <CaseStudyCard project={projects[1]} index={1} />
              </motion.div>
            )}

            {/* Card 3 (Slides UP over Card 2) */}
            {projects[2] && (
              <motion.div
                style={{ y: card3Y }}
                className="absolute inset-y-0 left-[16%] z-30 flex w-full max-w-[999px] justify-center"
              >
                <CaseStudyCard project={projects[2]} index={2} />
              </motion.div>
            )}
          </div>

          {/* Bottom CTA Button */}
          <FadeIn className="flex w-full shrink-0 justify-center py-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[linear-gradient(180deg,#0031a5_0%,#0052e0_100%)] px-8 font-bold text-white shadow-[0_6px_20px_rgba(0,49,165,0.35)] hover:opacity-95"
            >
              <Link href="/case-studies" className="flex items-center gap-2">
                View all Case studies
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

// Card Component with Figma Specs (999px width, 901px height, 959px x 597px image bounds)
function CaseStudyCard({
  project,
  index,
}: {
  project: CaseStudyItem;
  index: number;
}) {
  return (
    <div className="group flex h-full max-h-[901px] w-full max-w-[999px] flex-col justify-between overflow-hidden rounded-[40px] border border-slate-200/80 bg-[#f4f6f8] p-[20px_20px_12px_20px] shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-2xl">
      {/* Website Preview Container (Figma: 959px x 597px) */}
      <div className="relative mx-auto h-[597px] max-h-[62%] w-full max-w-[959px] shrink-0 overflow-hidden rounded-[32px] border border-slate-200/50 bg-white shadow-sm">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </div>

      {/* Slide Dots Indicator */}
      <div className="mt-3 flex shrink-0 items-center justify-start gap-2 px-2">
        {[0, 1, 2].map((dotIndex) => (
          <span
            key={dotIndex}
            className={`size-2.5 rounded-full transition-colors duration-200 ${
              index === dotIndex ? "bg-blue-600" : "bg-slate-300"
            }`}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="mt-2 w-full shrink-0 border-b border-slate-200/80" />

      {/* Card Details Bottom Layout */}
      <div className="mt-3 grid shrink-0 gap-6 px-2 md:grid-cols-12 md:items-end">
        {/* Title & Read More Button */}
        <div className="flex flex-col items-start justify-between gap-3 md:col-span-5">
          <h3 className="line-clamp-1 text-left text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
            {project.title}
          </h3>

          <Link
            href={project.link}
            className="inline-flex items-center gap-2 rounded-full bg-[#003db8] px-6 py-2.5 text-xs font-bold text-white shadow-[0_8px_20px_rgba(0,61,184,0.35)] transition-all hover:bg-[#0031a5] sm:text-sm"
          >
            Read More
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Description & Industry Metadata */}
        <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 md:col-span-7">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              DESCRIPTION
            </span>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed font-medium text-slate-700 sm:text-sm">
              {project.description}
            </p>
          </div>

          <div>
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              INDUSTRY
            </span>
            <p className="mt-1 text-xs font-semibold text-slate-900 sm:text-sm">
              {project.industry}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Heading } from "@/components/common/heading";
import { FadeIn } from "@/components/common/motion";
import { Button } from "@/components/ui/button";

export interface CaseStudyItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  image: string;
  link: string;
}

const defaultProjects: CaseStudyItem[] = [
  {
    id: "sahaj-construction",
    number: "01",
    title: "Sahaj Construction",
    subtitle: "Full-Stack Construction Website",
    description:
      "A complete full-stack construction company website built with Vite, React, Tailwind CSS, and Node.js. Designed to showcase projects, services, and company credentials with a modern, responsive layout optimised for mobile, tablet, and desktop.",
    tags: ["REACT", "NODE.JS", "POSTGRESQL", "TAILWIND CSS", "UI/UX DESIGN"],
    metrics: [
      { value: "On-time", label: "Delivery" },
      { value: "100%", label: "Responsive" },
      { value: "Full", label: "Stack" },
    ],
    image: "/images/case-studys-1.svg",
    link: "/case-studies/sahaj-construction",
  },
  {
    id: "glamora-jewels",
    number: "02",
    title: "Glamora Jewels",
    subtitle: "High-Converting Jewelry Store",
    description:
      "A high-converting landing page for a fine jewelry brand focused on showcasing 18K, 14K & 10K gold with lab-grown diamonds, built with scalable frontend tools.",
    tags: ["REACT", "NODE.JS", "POSTGRESQL", "CONTENT SEO"],
    metrics: [
      { value: "2.4x", label: "Conversion" },
      { value: "100%", label: "Responsive" },
      { value: "Fast", label: "Checkout" },
    ],
    image: "/images/case-studys-2.svg",
    link: "/case-studies/glamora-jewels",
  },
  {
    id: "delfa-pattern-generator",
    number: "03",
    title: "Delfa Pattern Generator",
    subtitle: "AI Textile Pattern Platform",
    description:
      "An AI-powered platform generating production-ready textile patterns using ML models trained on domain-specific datasets. Users customise parameters to create unique designs dynamically. Includes layer separation, image upscaling, and a credit-based system for controlled monetization.",
    tags: ["PYTHON", "REACT", "FASTAPI", "TAILWIND CSS"],
    metrics: [
      { value: "AI-Powered", label: "Generation" },
      { value: "3 Core", label: "Features" },
      { value: "Infinite", label: "Patterns" },
    ],
    image: "/images/case-studys-3.svg",
    link: "/case-studies/delfa-pattern-generator",
  },
];

interface HomeCaseStudiesProps {
  eyebrow?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  projects?: CaseStudyItem[];
}

export function HomeCaseStudies({
  eyebrow = "Case Studies",
  title = "Projects That Inspire Innovation.",
  subtitle = "Real results from real engagements. We measure success by outcomes, not activity.",
  projects = defaultProjects,
}: HomeCaseStudiesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="bg-background relative w-full pt-12 pb-12 sm:pt-16">
      {/* 1. Header Section */}
      <div className="mx-auto w-full max-w-[1364px] px-4 pb-8 sm:px-6 sm:pb-12">
        <FadeIn>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-xs sm:mb-6 sm:border-b-4 sm:text-[14px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                {eyebrow}
              </div>
            )}

            <Heading
              as="h2"
              className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              {title}
            </Heading>
            {subtitle && (
              <p className="mt-3 text-center text-sm font-medium text-slate-600 sm:text-base">
                {subtitle}
              </p>
            )}
          </div>
        </FadeIn>
      </div>

      {/* 2. Scroll Track Container */}
      <div ref={containerRef} className="relative w-full lg:h-[300vh]">
        <div className="flex w-full flex-col items-center justify-start lg:sticky lg:top-[100px] lg:pb-12">
          {/* Mobile & Tablet Layout */}
          <div className="my-4 flex w-full flex-col gap-6 px-4 lg:hidden">
            {projects.map((project) => (
              <CaseStudyCard key={project.id} project={project} />
            ))}
          </div>

          {/* Desktop Fixed Viewport Container (Added overflow-hidden) */}
          <div className="relative mx-auto hidden h-[580px] w-full max-w-[1240px] items-center overflow-hidden px-4 lg:flex">
            {projects.map((project, index) => (
              <StackingCard
                key={project.id}
                project={project}
                index={index}
                total={projects.length}
                scrollYProgress={smoothProgress}
              />
            ))}
          </div>

          {/* Bottom Button */}
          <FadeIn className="relative z-40 flex w-full shrink-0 justify-center pt-6 sm:pt-10">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[linear-gradient(180deg,#0031a5_0%,#0052e0_100%)] px-6 font-bold text-white shadow-[0_6px_20px_rgba(0,49,165,0.35)] hover:opacity-95 sm:px-8"
            >
              <Link href="/case-studies" className="flex items-center gap-2">
                View all Case studies
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

interface StackingCardProps {
  project: CaseStudyItem;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function StackingCard({
  project,
  index,
  total,
  scrollYProgress,
}: StackingCardProps) {
  const leftPeekOffset = index * 80;

  const step = 1 / total;
  const start = index === 0 ? 0 : (index - 1) * step + 0.05;
  const end = index === 0 ? 0 : index * step;

  const y = useTransform(
    scrollYProgress,
    [start, end],
    [index === 0 ? "0%" : "105%", "0%"],
  );

  return (
    <motion.div
      style={{
        left: `${leftPeekOffset}px`,
        width: `calc(100% - ${leftPeekOffset}px)`,
        y: index === 0 ? 0 : y,
        zIndex: index + 10,
      }}
      className="absolute top-0 h-[580px]"
    >
      <CaseStudyCard project={project} />
    </motion.div>
  );
}

function CaseStudyCard({ project }: { project: CaseStudyItem }) {
  return (
    <div className="group relative flex h-auto min-h-[500px] w-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-[#EAEAEA] p-5 shadow-[-10px_0_30px_rgba(0,0,0,0.06)] sm:rounded-[32px] sm:p-8 lg:h-[580px] lg:rounded-[36px] lg:p-10">
      {/* Top Header Row */}
      <div className="relative mb-4 flex shrink-0 items-center justify-between sm:mb-6">
        <span className="text-xs font-semibold text-slate-800 sm:text-sm">
          {project.number}
        </span>
        <h3 className="absolute left-[65%] w-full -translate-x-1/2 text-lg font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
          {project.title}
        </h3>
        <div className="w-6" />
      </div>

      {/* Tech Tags Row */}
      <div className="mb-5 flex shrink-0 flex-wrap items-center gap-1.5 sm:mb-8 sm:gap-2.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200/60 bg-white px-2.5 py-1 text-[9px] font-bold tracking-wider text-slate-800 uppercase shadow-2xs sm:px-3.5 sm:py-1.5 sm:text-[11px]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        {/* Left Column */}
        <div className="flex flex-col justify-between space-y-4 lg:col-span-5 lg:h-full lg:space-y-6">
          <div className="border-l-[4px] border-white pl-4 sm:border-l-[7px] sm:pl-[24px] lg:pl-[30px]">
            <h4 className="text-base font-bold text-slate-900 sm:text-lg lg:text-xl">
              {project.subtitle}
            </h4>
            <p className="mt-2 text-xs leading-relaxed font-normal text-slate-600 sm:text-sm">
              {project.description}
            </p>
          </div>

          {/* Metrics White Card */}
          <div className="grid grid-cols-3 divide-x divide-slate-200/80 rounded-xl border border-slate-100 bg-white px-2 py-3 text-center shadow-2xs sm:rounded-2xl sm:py-4">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="px-1">
                <div className="text-xs font-bold text-slate-900 sm:text-sm lg:text-base">
                  {metric.value}
                </div>
                <div className="mt-0.5 text-[9px] font-medium text-slate-500 sm:text-[11px]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Read More Pill Button */}
          <div>
            <Link
              href={project.link}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-5 py-2 text-xs font-bold text-slate-900 shadow-2xs transition-all hover:bg-slate-50 sm:px-6 sm:py-2.5"
            >
              Read More
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column Image Container */}
        <div className="relative flex items-center justify-center lg:col-span-7">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200/60 bg-white shadow-2xs sm:rounded-4xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCaseStudies;

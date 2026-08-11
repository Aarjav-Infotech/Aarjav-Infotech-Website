"use client";

import React from "react";
import {
  Search,
  Menu,
  ShieldCheck,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface RoadmapStep {
  stepNumber: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AiImplementationRoadmapProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: RoadmapStep[];
  bgImage?: string;
  className?: string;
}

const defaultSteps: RoadmapStep[] = [
  {
    stepNumber: "STEP 01",
    title: "Discovery & Analysis",
    description:
      "We map your current workflows, identify bottlenecks, and define clear metrics for success.",
    icon: Search,
  },
  {
    stepNumber: "STEP 02",
    title: "Architecture Design",
    description:
      "We document every step, identify bottlenecks, and determine what data and systems need to connect. No surprises down the road.",
    icon: Menu,
  },
  {
    stepNumber: "STEP 03",
    title: "AI Integration + Rigorous Testing",
    description:
      "We build incrementally, test thoroughly, and review security at every stage. You see progress weekly and can give feedback early.",
    icon: ShieldCheck,
  },
  {
    stepNumber: "STEP 04",
    title: "Full Deployment",
    description:
      "Go live confidently. We monitor performance, catch issues, and optimise based on data.",
    icon: Cloud,
  },
];

export function AiImplementationRoadmap({
  eyebrow = "The process we follow",
  title = "Our Implementation Roadmap",
  description = "Clear milestones, constant communication, and zero hand-waving. Here’s how we get from idea to impact.",
  steps = defaultSteps,
  bgImage = "/images/process-bg.svg",
  className,
}: AiImplementationRoadmapProps) {
  return (
    <section
      className={cn("w-full bg-white py-8 sm:py-12 lg:py-16", className)}
    >
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        {/* Card Container with Custom Background Image */}
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-[24px] border border-white/60 bg-slate-50 bg-cover bg-center bg-no-repeat py-20 sm:rounded-[36px] sm:p-8 lg:p-20",
          )}
          style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
        >
          {/* Header Block */}
          <div className="flex flex-col items-center text-center">
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-white/80 px-3.5 py-1 text-xs font-bold text-[#2b2bad] shadow-xs backdrop-blur-md sm:mb-6 sm:border-b-4 sm:text-[14px]">
                <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
                {eyebrow}
              </div>
            )}

            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            {description && (
              <p className="mt-2.5 max-w-3xl text-xs leading-relaxed font-medium text-slate-700 sm:mt-4 sm:text-base lg:text-lg">
                {description}
              </p>
            )}
          </div>

          {/* Roadmap Steps Container */}
          <div className="relative mt-8 sm:mt-12 lg:mt-16">
            {/* Horizontal Connecting Dashed Line (Desktop) */}
            <div className="absolute top-8 right-[12%] left-[12%] hidden h-[2px] border-t-2 border-dashed border-[#0053FA] lg:block" />

            {/* Vertical Connecting Dashed Line (Mobile/Tablet) */}
            <div className="absolute top-8 bottom-8 left-1/2 hidden -translate-x-1/2 border-l-2 border-dashed border-blue-600/30" />

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Blue Icon Button */}
                    <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-[linear-gradient(180deg,#002688_0%,#0053FA_100%)] text-white transition-transform hover:scale-105 sm:size-16 lg:size-18">
                      <Icon className="size-6 sm:size-7 lg:size-8" />
                    </div>

                    {/* Step Label */}
                    <span className="mt-4 text-[11px] font-bold tracking-widest text-slate-900 uppercase sm:mt-5 sm:text-xs">
                      {step.stepNumber}
                    </span>

                    {/* Step Title */}
                    <h3 className="mt-1 text-base font-bold tracking-tight text-slate-950 sm:text-lg">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-1.5 text-xs leading-relaxed font-normal text-slate-600 sm:mt-2 sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiImplementationRoadmap;

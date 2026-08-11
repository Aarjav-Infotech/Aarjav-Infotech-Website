"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface NumberedStep {
  number: string;
  title: string;
  description: string;
}

export interface NumberedRoadmapSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: NumberedStep[];
  className?: string;
}

const defaultSteps: NumberedStep[] = [
  {
    number: "01",
    title: "Capture Requests",
    description:
      "Collect support requests from multiple channels including email, chat, WhatsApp, web forms, CRM systems, and helpdesk platforms.",
  },
  {
    number: "02",
    title: "AI Understands the Issue",
    description:
      "AI analyzes the request, identifies customer intent, extracts key information, detects sentiment.",
  },
  {
    number: "03",
    title: "Prioritize & Route",
    description:
      "Tickets are automatically prioritized based on urgency, SLA, customer tier, or business rules and assigned to the support team.",
  },
  {
    number: "04",
    title: "Resolve with AI Assistance",
    description:
      "Support agents receive AI-generated response suggestions, knowledge base recommendations, and contextual insights to resolve issues faster.",
  },
  {
    number: "05",
    title: "Monitor & Optimize",
    description:
      "Track SLAs, resolution times, customer satisfaction, and support performance through real-time analytics while continuously improving workflows.",
  },
];

export function NumberedRoadmapSection({
  eyebrow = "The process we follow",
  title = "Our Implementation Roadmap",
  description = "Clear milestones, constant communication, and zero hand-waving. Here's how we get from idea to impact.",
  steps = defaultSteps,
  className,
}: NumberedRoadmapSectionProps) {
  const topRowSteps = steps.slice(0, 3);
  const bottomRowSteps = steps.slice(3, 5);

  return (
    <section
      className={cn("w-full bg-white py-12 sm:py-16 lg:py-20", className)}
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center">
          {eyebrow && (
            <div className="text-basic mb-4 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 font-bold text-[#2b2bad] shadow-xs sm:mb-6 sm:border-b-4 sm:text-[14px]">
              <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
              {eyebrow}
            </div>
          )}

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="text-basic mt-3 max-w-3xl leading-relaxed font-medium text-slate-600 sm:mt-4 sm:text-base lg:text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Roadmap Grid Container */}
        <div className="mt-12 space-y-12 sm:mt-16 sm:space-y-16">
          {/* Top Row: Steps 01, 02, 03 */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {topRowSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center pt-8 text-center"
              >
                {/* Large Watermark Number */}
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 text-[90px] leading-none font-extrabold text-slate-200/60 select-none sm:text-[110px]">
                  {step.number}
                </span>

                {/* Step Content */}
                <div className="relative z-10 pt-6">
                  <h3 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-basic sm:text-basic mt-3 leading-relaxed font-normal text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: Steps 04, 05 (Centered Layout) */}
          <div className="flex flex-col justify-center gap-10 sm:flex-row sm:gap-12 lg:gap-16">
            {bottomRowSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex max-w-md flex-col items-center pt-8 text-center"
              >
                {/* Large Watermark Number */}
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 text-[90px] leading-none font-bold text-slate-200/60 select-none sm:text-[110px]">
                  {step.number}
                </span>

                {/* Step Content */}
                <div className="relative z-10 pt-6">
                  <h3 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-basic sm:text-basic mt-3 leading-relaxed font-normal text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NumberedRoadmapSection;

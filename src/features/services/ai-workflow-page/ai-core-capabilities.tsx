"use client";

import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

export interface CapabilityCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export interface AiCoreCapabilitiesSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  mainFeature?: CapabilityCard;
  topRightFeature?: CapabilityCard;
  bottomLeftFeature?: CapabilityCard;
  bottomRightFeature?: CapabilityCard;
  className?: string;
}

const defaultMainFeature: CapabilityCard = {
  title: "Intelligent Process Automation",
  description:
    "Automate repetitive business tasks, approvals, notifications, and multi-step workflows with AI-driven decision making. We design AI-powered workflows that seamlessly connect people, applications, and data across your organization.",
  imageSrc: "/images/bento-1.png",
  imageAlt: "Intelligent Process Automation Diagram",
};

const defaultTopRightFeature: CapabilityCard = {
  title: "Document & Data Processing",
  description:
    "Extract, classify, validate, and route information from invoices, contracts, forms, emails, and business documents automatically.",
  imageSrc: "/images/bento-2.png",
  imageAlt: "Document & Data Processing Workflow",
};

const defaultBottomLeftFeature: CapabilityCard = {
  title: "Cross-Platform Integrations",
  description:
    "Extract, classify, validate, and route information from invoices, contracts, forms, emails, and business documents automatically.",
  imageSrc: "/images/bento-3.png",
  imageAlt: "Cross-Platform Integration Diagram",
};

const defaultBottomRightFeature: CapabilityCard = {
  title: "AI Decision Workflows",
  description:
    "Enable workflows that can analyze information, make recommendations, trigger actions, and continuously improve with AI.",
  imageSrc: "/images/bento-4.png",
  imageAlt: "AI Decision Workflows Trigger Diagram",
};

export function AiCoreCapabilitiesSection({
  eyebrow = "Core Capabilities",
  title = "End-to-End Workflow Automation",
  description = "We design AI-powered workflows that seamlessly connect people, applications, and data across your organization. Every workflow is built for speed, scalability, and reliability.",
  mainFeature = defaultMainFeature,
  topRightFeature = defaultTopRightFeature,
  bottomLeftFeature = defaultBottomLeftFeature,
  bottomRightFeature = defaultBottomRightFeature,
  className,
}: AiCoreCapabilitiesSectionProps) {
  return (
    <section
      className={cn("w-full bg-white py-10 sm:py-16 lg:py-20", className)}
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-sm font-bold text-[#2b2bad] shadow-xs sm:mb-8 sm:border-b-4 sm:text-[14px]">
              <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
              {eyebrow}
            </div>
          )}

          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="mt-2.5 max-w-3xl text-sm leading-relaxed font-medium text-slate-600 sm:mt-4 sm:text-base lg:text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Capabilities Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Tall Main Feature Card */}
          <div className="flex flex-col justify-between rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:rounded-[28px] sm:p-8 lg:col-span-5">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl sm:aspect-[4/3] lg:aspect-[4/3.8]">
              <Image
                src={mainFeature.imageSrc}
                alt={mainFeature.imageAlt || mainFeature.title}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-contain p-2"
              />
            </div>
            <div className="mt-5 sm:mt-6">
              <h3 className="text-lg font-bold tracking-tight text-slate-950 sm:text-2xl">
                {mainFeature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-3 sm:text-base">
                {mainFeature.description}
              </p>
            </div>
          </div>

          {/* Right Column: 3 Cards Layout */}
          <div className="flex flex-col gap-5 sm:gap-6 lg:col-span-7">
            {/* Top Right Card (Wide Layout: Text on Left, Image on Right) */}
            <div className="flex flex-col-reverse justify-between rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:flex-row sm:items-center sm:gap-6 sm:rounded-[28px] sm:p-8">
              <div className="mt-4 sm:mt-0 sm:max-w-[48%] lg:max-w-[45%]">
                <h3 className="text-lg font-bold tracking-tight text-slate-950 sm:text-2xl">
                  {topRightFeature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">
                  {topRightFeature.description}
                </p>
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-50/50 sm:aspect-[16/10] sm:w-[50%]">
                <Image
                  src={topRightFeature.imageSrc}
                  alt={topRightFeature.imageAlt || topRightFeature.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* Bottom 2 Columns Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {/* Bottom Left Card */}
              <div className="flex flex-col justify-between rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:rounded-[28px] sm:p-8">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-50/50 sm:aspect-[16/10]">
                  <Image
                    src={bottomLeftFeature.imageSrc}
                    alt={bottomLeftFeature.imageAlt || bottomLeftFeature.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-2"
                  />
                </div>
                <div className="mt-4 sm:mt-6">
                  <h3 className="text-base font-bold tracking-tight text-slate-950 sm:text-xl">
                    {bottomLeftFeature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">
                    {bottomLeftFeature.description}
                  </p>
                </div>
              </div>

              {/* Bottom Right Card */}
              <div className="flex flex-col justify-between rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:rounded-[28px] sm:p-8">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-50/50 sm:aspect-[16/10]">
                  <Image
                    src={bottomRightFeature.imageSrc}
                    alt={
                      bottomRightFeature.imageAlt || bottomRightFeature.title
                    }
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-2"
                  />
                </div>
                <div className="mt-4 sm:mt-6">
                  <h3 className="text-basic font-bold tracking-tight text-slate-950 sm:text-xl">
                    {bottomRightFeature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">
                    {bottomRightFeature.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiCoreCapabilitiesSection;

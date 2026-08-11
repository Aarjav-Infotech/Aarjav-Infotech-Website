"use client";

import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

export interface TicketFeatureCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export interface IntelligentTicketManagementProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  ticketClassification?: TicketFeatureCard;
  prioritySlaManagement?: TicketFeatureCard;
  smartRouting?: TicketFeatureCard;
  responseAssistance?: TicketFeatureCard;
  omnichannelIntegration?: TicketFeatureCard;
  analyticsImprovement?: TicketFeatureCard;
  className?: string;
}

const defaultClassification: TicketFeatureCard = {
  title: "AI Ticket Classification",
  description:
    "Automatically categorize incoming tickets based on intent, urgency, department, product, or issue type using intelligent language understanding.",
  imageSrc: "/images/support-core-1.png",
  imageAlt: "AI Ticket Classification Diagram",
};

const defaultPrioritySla: TicketFeatureCard = {
  title: "Priority & SLA Management",
  description:
    "Identify urgent issues, monitor SLA deadlines, escalate critical cases automatically, and ensure every request receives timely attention.",
  imageSrc: "/images/support-core-4.png",
  imageAlt: "Priority & SLA Management Grid",
};

const defaultSmartRouting: TicketFeatureCard = {
  title: "Smart Ticket Routing",
  description:
    "Route tickets instantly to the right support team based on expertise, workload, customer priority, or historical resolution patterns.",
  imageSrc: "/images/support-core-2.png",
  imageAlt: "Smart Ticket Routing Flow",
};

const defaultResponseAssistance: TicketFeatureCard = {
  title: "AI Response Assistance",
  description:
    "Generate contextual response suggestions, knowledge base recommendations, and automated replies to help support agents respond faster.",
  imageSrc: "/images/support-core-3.png",
  imageAlt: "AI Response Assistance Interface",
};

const defaultOmnichannel: TicketFeatureCard = {
  title: "Omnichannel Support Integration",
  description:
    "Connect email, live chat, WhatsApp, web forms, CRM platforms, and helpdesk systems into one intelligent support workflow.",
  imageSrc: "/images/support-core-5.png",
  imageAlt: "Omnichannel Integration Hub",
};

const defaultAnalytics: TicketFeatureCard = {
  title: "Analytics & Continuous Improvement",
  description:
    "Track ticket trends, response performance, customer satisfaction, agent productivity, and AI accuracy to continuously optimize support operations.",
  imageSrc: "/images/support-core-6.png",
  imageAlt: "Analytics and Growth Metric Card",
};

export function IntelligentTicketManagement({
  eyebrow = "Core Capabilities",
  title = "Intelligent Ticket Management",
  description = "From ticket creation to final resolution, we build AI-powered support systems that reduce manual work.",
  ticketClassification = defaultClassification,
  prioritySlaManagement = defaultPrioritySla,
  smartRouting = defaultSmartRouting,
  responseAssistance = defaultResponseAssistance,
  omnichannelIntegration = defaultOmnichannel,
  analyticsImprovement = defaultAnalytics,
  className,
}: IntelligentTicketManagementProps) {
  return (
    <section
      className={cn("w-full bg-white py-10 sm:py-16 lg:py-20", className)}
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center">
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-bold text-[#2b2bad] shadow-xs sm:mb-8 sm:border-b-4 sm:text-[14px]">
              <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
              {eyebrow}
            </div>
          )}

          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="mt-2.5 max-w-3xl text-xs leading-relaxed font-medium text-slate-600 sm:mt-4 sm:text-base lg:text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-8 space-y-5 sm:mt-12 sm:space-y-6">
          {/* Row 1: Top 2 Cards (Left wide card & Right tall SLA card) */}
          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12">
            {/* Left Column Stack (Classification + Routing/Assistance) */}
            <div className="flex flex-col gap-5 sm:gap-6 lg:col-span-7">
              {/* AI Ticket Classification (Horizontal layout: Text Left, Image Right) */}
              <div className="flex flex-col-reverse justify-between rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:flex-row sm:items-center sm:gap-6 sm:rounded-[28px] sm:p-7">
                <div className="mt-4 sm:mt-0 sm:max-w-[48%] lg:max-w-[46%]">
                  <h3 className="text-lg font-bold tracking-tight text-slate-950 sm:text-xl lg:text-2xl">
                    {ticketClassification.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">
                    {ticketClassification.description}
                  </p>
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-50/50 sm:aspect-[4/3] sm:w-[50%]">
                  <Image
                    src={ticketClassification.imageSrc}
                    alt={
                      ticketClassification.imageAlt ||
                      ticketClassification.title
                    }
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Middle 2 Cards (Smart Routing & AI Response Assistance) */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                {/* Smart Ticket Routing */}
                <div className="flex flex-col justify-between rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:rounded-[28px] sm:p-7">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-50/50 sm:aspect-[16/10]">
                    <Image
                      src={smartRouting.imageSrc}
                      alt={smartRouting.imageAlt || smartRouting.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <h3 className="text-base font-bold tracking-tight text-slate-950 sm:text-xl">
                      {smartRouting.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">
                      {smartRouting.description}
                    </p>
                  </div>
                </div>

                {/* AI Response Assistance */}
                <div className="flex flex-col justify-between rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:rounded-[28px] sm:p-7">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-50/50 sm:aspect-[16/10]">
                    <Image
                      src={responseAssistance.imageSrc}
                      alt={
                        responseAssistance.imageAlt || responseAssistance.title
                      }
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <h3 className="text-base font-bold tracking-tight text-slate-950 sm:text-xl">
                      {responseAssistance.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">
                      {responseAssistance.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Tall Priority & SLA Management Card */}
            <div className="flex flex-col justify-between rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:rounded-[28px] sm:p-7 lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-50/50 sm:aspect-[16/10] lg:aspect-[4/4.5]">
                <Image
                  src={prioritySlaManagement.imageSrc}
                  alt={
                    prioritySlaManagement.imageAlt ||
                    prioritySlaManagement.title
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-contain p-2"
                />
              </div>
              <div className="mt-5 sm:mt-6">
                <h3 className="text-lg font-bold tracking-tight text-slate-950 sm:text-2xl">
                  {prioritySlaManagement.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-base">
                  {prioritySlaManagement.description}
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Bottom 2 Equal Width Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            {/* Omnichannel Support Integration */}
            <div className="flex flex-col-reverse justify-between rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:flex-row sm:items-center sm:gap-6 sm:rounded-[28px] sm:p-7">
              <div className="mt-4 sm:mt-0 sm:max-w-[50%]">
                <h3 className="text-lg font-bold tracking-tight text-slate-950 sm:text-xl lg:text-2xl">
                  {omnichannelIntegration.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">
                  {omnichannelIntegration.description}
                </p>
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-50/50 sm:aspect-[16/10] sm:w-[48%]">
                <Image
                  src={omnichannelIntegration.imageSrc}
                  alt={
                    omnichannelIntegration.imageAlt ||
                    omnichannelIntegration.title
                  }
                  fill
                  sizes="(max-width: 640px) 100vw, 30vw"
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* Analytics & Continuous Improvement */}
            <div className="flex flex-col-reverse justify-between rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:flex-row sm:items-center sm:gap-6 sm:rounded-[28px] sm:p-7">
              <div className="mt-4 sm:mt-0 sm:max-w-[50%]">
                <h3 className="text-lg font-bold tracking-tight text-slate-950 sm:text-xl lg:text-2xl">
                  {analyticsImprovement.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">
                  {analyticsImprovement.description}
                </p>
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-50/50 sm:aspect-[16/10] sm:w-[48%]">
                <Image
                  src={analyticsImprovement.imageSrc}
                  alt={
                    analyticsImprovement.imageAlt || analyticsImprovement.title
                  }
                  fill
                  sizes="(max-width: 640px) 100vw, 30vw"
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntelligentTicketManagement;

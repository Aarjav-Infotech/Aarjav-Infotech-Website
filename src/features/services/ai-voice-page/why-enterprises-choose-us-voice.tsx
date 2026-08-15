"use client";

import React from "react";
import { Award, TrendingUp, DollarSign, Globe } from "lucide-react";

export default function WhyEnterprisesChooseUsVoice() {
  const eyebrow = "Why It Matters";

  const features = [
    {
      icon: Award,
      title: "Years of Expertise",
      description:
        "Never miss a customer call with intelligent AI agents that provide instant assistance anytime.",
      offset: "lg:translate-y-8",
    },
    {
      icon: TrendingUp,
      title: "Faster Response Times",
      description:
        "Reduce customer wait times by answering calls immediately and routing requests intelligently.",
      offset: "lg:-translate-y-2",
    },
    {
      icon: DollarSign,
      title: "Reduced Operational Costs",
      description:
        "Improve customer experiences, automate repetitive conversations, and scale your support operations with enterprise-ready conversational AI.",
      offset: "lg:translate-y-8",
    },
    {
      icon: Globe,
      title: "Personalized Customer Experience",
      description:
        "Deliver contextual, natural conversations using customer history, business data, and AI-driven insights.",
      offset: "lg:-translate-y-2",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-full">
        <div
          className="relative overflow-hidden rounded-[3rem] border border-neutral-100 bg-cover bg-center bg-no-repeat p-8 shadow-sm sm:p-12 md:p-16"
          style={{ backgroundImage: "url('/images/ai-matters-bg.svg')" }}
        >
          {/* Header Block */}
          <div className="mb-20 text-center">
            <div className="flex flex-col items-center text-center">
              {eyebrow && (
                <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-bold text-[#2b2bad] shadow-sm sm:mb-10 sm:border-b-4 sm:text-[14px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                  {eyebrow}
                </div>
              )}
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Why Enterprises Deploy AI Voice Agents
            </h2>
            <p className="text-basic mx-auto max-w-2xl leading-relaxed text-neutral-600 sm:text-base">
              Improve customer experiences, automate repetitive conversations,
              and scale your support operations with enterprise-ready
              conversational AI.
            </p>
          </div>

          {/* Staggered Floating Cards Grid */}
          <div className="grid grid-cols-1 gap-6 pb-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col justify-between rounded-[2.5rem] bg-white p-8 shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-2xl ${item.offset}`}
                >
                  <div>
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50/80 text-[#004ce6]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold tracking-tight text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="text-basic leading-relaxed text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

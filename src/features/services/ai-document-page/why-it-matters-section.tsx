"use client";

import React from "react";
import { Network, TrendingUp, DollarSign } from "lucide-react";

export default function WhyItMattersSection() {
  const eyebrow = "Why It Matters";

  return (
    <section className="overflow-hidden bg-white px-6 py-16 sm:py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="mb-16 text-center">
          <div className="flex flex-col items-center text-center">
            {eyebrow && (
              <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-bold text-[#2b2bad] shadow-sm sm:mb-10 sm:border-b-4 sm:text-[14px]">
                <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
                {eyebrow}
              </div>
            )}
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Why Enterprises Automate Document Processing
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            Improve customer experiences, automate repetitive conversations, and
            scale your support operations with enterprise-ready conversational
            AI.
          </p>
        </div>

        {/* Master Venn-Diagram Layout Container */}
        <div className="relative mx-auto hidden max-w-6xl md:block">
          {/* THE OVERLAP SEAMS (The Background Rings Layout - DO NOT ALTER STRUCTURE) */}
          <div className="pointer-events-none absolute inset-0 z-20 flex">
            {/* Ring 1 */}
            <div className="h-full w-[36%] rounded-[2.5rem] border-[3px] border-[#6b93e6] bg-gradient-to-br from-[#eaf1fe] to-[#f4f8ff]" />
            {/* Ring 2 */}
            <div className="-ml-[4%] h-full w-[36%] rounded-[2.5rem] border-[3px] border-[#6b93e6]" />
            {/* Ring 3 */}
            <div className="-ml-[4%] h-full w-[36%] rounded-[2.5rem] border-[3px] border-[#6b93e6]" />
          </div>

          {/* THE CONTENT LAYER (Restored to your original framework structure to lock design) */}
          <div className="relative z-30 flex w-full items-stretch">
            {/* CARD 1 Content */}
            <div className="group w-[36%] rounded-[2.5rem] py-12 pr-12 pl-10 transition-all duration-300 hover:z-40 hover:bg-gradient-to-br hover:from-[#eaf1fe] hover:to-[#f4f8ff] hover:shadow-2xl hover:ring-[3px] hover:shadow-blue-900/10 hover:ring-[#6b93e6]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4ff] text-[#004ce6] transition-transform duration-300 group-hover:scale-105">
                <Network className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900">
                Faster Processing
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Convert thousands of documents into structured data within
                minutes instead of hours.
              </p>
            </div>

            {/* CARD 2 Content */}
            <div className="group -ml-[4%] w-[36%] rounded-[2.5rem] py-12 pr-12 pl-14 transition-all duration-300 hover:z-40 hover:bg-white hover:shadow-2xl hover:ring-[3px] hover:shadow-blue-900/10 hover:ring-[#6b93e6]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4ff] text-[#004ce6] transition-transform duration-300 group-hover:scale-105">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900">
                Higher Accuracy
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                AI minimizes manual errors through intelligent extraction,
                validation, and continuous learning.
              </p>
            </div>

            {/* CARD 3 Content */}
            <div className="group -ml-[4%] w-[36%] rounded-[2.5rem] py-12 pr-10 pl-14 transition-all duration-300 hover:z-40 hover:bg-white hover:shadow-2xl hover:ring-[3px] hover:shadow-blue-900/10 hover:ring-[#6b93e6]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4ff] text-[#004ce6] transition-transform duration-300 group-hover:scale-105">
                <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900">
                Lower Operational Costs
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Reduce repetitive administrative work while improving team
                productivity and operational efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Responsive Mobile Layout */}
        <div className="flex flex-col gap-6 md:hidden">
          <div className="rounded-[2.5rem] border-[3px] border-[#6b93e6] bg-gradient-to-br from-[#eaf1fe] to-[#f4f8ff] p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
            <Network className="mb-4 h-7 w-7 text-[#004ce6]" />
            <h3 className="mb-2 text-xl font-bold">Faster Processing</h3>
            <p className="text-sm text-neutral-600">
              Convert thousands of documents into structured data within minutes
              instead of hours.
            </p>
          </div>
          <div className="rounded-[2.5rem] border-[3px] border-[#6b93e6] p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
            <TrendingUp className="mb-4 h-6 w-6 text-[#004ce6]" />
            <h3 className="mb-2 text-xl font-bold">Higher Accuracy</h3>
            <p className="text-sm text-neutral-600">
              AI minimizes manual errors through intelligent extraction,
              validation, and continuous learning.
            </p>
          </div>
          <div className="rounded-[2.5rem] border-[3px] border-[#6b93e6] p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
            <DollarSign className="mb-4 h-6 w-6 text-[#004ce6]" />
            <h3 className="mb-2 text-xl font-bold">Lower Operational Costs</h3>
            <p className="text-sm text-neutral-600">
              Reduce repetitive administrative work while improving team
              productivity and operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

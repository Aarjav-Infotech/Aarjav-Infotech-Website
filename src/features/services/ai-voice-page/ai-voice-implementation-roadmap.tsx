"use client";

import React from "react";

export default function AiVoiceImplementationRoadmap() {
  const eyebrow = "The process we follow";

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "Analyze business goals, customer journeys, call flows, and automation opportunities.",
    },
    {
      number: "02",
      title: "Design the Voice Agent",
      description:
        "Create conversation flows, AI prompts, voice personas, and knowledge sources.",
    },
    {
      number: "03",
      title: "Integrate Systems",
      description:
        "Connect telephony providers, CRM, ERP, APIs, calendars, payment gateways, and business applications.",
    },
    {
      number: "04",
      title: "Monitor & Improve",
      description:
        "Continuously track performance, customer satisfaction, call analytics, and optimize AI using real-world conversations.",
    },
    {
      number: "05",
      title: "Test & Launch",
      description:
        "Validate conversation accuracy, optimize workflows, perform production testing, and deploy confidently.",
    },
  ];

  return (
    <section className="bg-white px-6 py-16 sm:py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="mb-16 text-center">
          <div className="flex flex-col items-center text-center">
            {eyebrow && (
              <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-bold text-[#2b2bad] shadow-sm sm:mb-10 sm:border-b-4 sm:text-[14px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                {eyebrow}
              </div>
            )}
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Our AI Voice Deployment Process
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            From planning to continuous optimization, we deploy AI Voice Agents
            that integrate seamlessly into your existing business ecosystem.
          </p>
        </div>

        {/* Process Cards Flow */}
        <div className="relative mx-auto max-w-6xl">
          {/* Top Row: Steps 01, 02, 03 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Step 01 */}
            <div className="relative flex flex-col justify-between rounded-[2rem] bg-[#f4f5f7] p-8 shadow-sm transition-all duration-300 hover:shadow-md">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-base font-bold text-white shadow-md shadow-blue-500/20">
                    {steps[0]?.number}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900">
                    {steps[0]?.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {steps[0]?.description}
                </p>
              </div>

              {/* Arrow Connector to 02 (Desktop Only) */}
              <div className="absolute top-1/2 -right-5 z-10 hidden -translate-y-1/2 items-center justify-center md:flex">
                <div className="h-0.5 w-4 bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%]" />
                <div className="h-2 w-2 rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%]" />
              </div>
            </div>

            {/* Step 02 */}
            <div className="relative flex flex-col justify-between rounded-[2rem] bg-[#f4f5f7] p-8 shadow-sm transition-all duration-300 hover:shadow-md">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-base font-bold text-white shadow-md shadow-blue-500/20">
                    {steps[1]?.number}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900">
                    {steps[1]?.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {steps[1]?.description}
                </p>
              </div>

              {/* Arrow Connector to 03 (Desktop Only) */}
              <div className="absolute top-1/2 -right-5 z-10 hidden -translate-y-1/2 items-center justify-center md:flex">
                <div className="h-0.5 w-4 bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%]" />
                <div className="h-2 w-2 rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%]" />
              </div>
            </div>

            {/* Step 03 */}
            <div className="relative flex flex-col justify-between rounded-[2rem] bg-[#f4f5f7] p-8 shadow-sm transition-all duration-300 hover:shadow-md">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-base font-bold text-white shadow-md shadow-blue-500/20">
                    {steps[2]?.number}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900">
                    {steps[2]?.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {steps[2]?.description}
                </p>
              </div>

              {/* Vertical Connector down to 04 (Desktop Only) */}
              <div className="absolute right-1/2 -bottom-7 z-10 hidden h-8 w-0.5 bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] md:block">
                <div className="absolute -top-1 -left-0.5 h-1.5 w-1.5 rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%]" />
                <div className="absolute -bottom-1 -left-0.5 h-1.5 w-1.5 rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%]" />
              </div>
            </div>
          </div>

          {/* Bottom Row: Steps 05 & 04 (Two Cards Layout) */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Step 05 */}
            <div className="relative flex flex-col justify-between rounded-[2rem] bg-[#f4f5f7] p-8 shadow-sm transition-all duration-300 hover:shadow-md">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-base font-bold text-white shadow-md shadow-blue-500/20">
                    {steps[4]?.number}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900">
                    {steps[4]?.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {steps[4]?.description}
                </p>
              </div>

              {/* Connector to Step 04 */}
              <div className="absolute top-1/2 -right-5 z-10 hidden -translate-y-1/2 items-center justify-center md:flex">
                <div className="h-0.5 w-4 bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%]" />
                <div className="h-2 w-2 rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%]" />
              </div>
            </div>

            {/* Step 04 */}
            <div className="relative flex flex-col justify-between rounded-[2rem] bg-[#f4f5f7] p-8 shadow-sm transition-all duration-300 hover:shadow-md">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-base font-bold text-white shadow-md shadow-blue-500/20">
                    {steps[3]?.number}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900">
                    {steps[3]?.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {steps[3]?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

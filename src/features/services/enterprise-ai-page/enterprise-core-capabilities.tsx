"use client";

import React from "react";
import Image from "next/image";

export default function EnterpriseCoreCapabilitiesSection() {
  const eyebrow = "Core Capabilities";

  return (
    <section className="bg-white px-6 py-16 sm:py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="mb-16 text-center">
          <div className="flex flex-col items-center text-center">
            {eyebrow && (
              <div className="text-basic mb-4 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-white px-3.5 py-1 font-bold text-[#2b2bad] shadow-xs sm:mb-6 sm:border-b-4 sm:text-[14px]">
                <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
                {eyebrow}
              </div>
            )}
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Everything Connected. Everything Intelligent.
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            We create enterprise ecosystems where AI, business applications, and
            data work together as one intelligent platform. Eliminate silos,
            streamline operations, and enable intelligent automation across
            every department.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* ROW 1: 50/50 Split Across Full Container Width */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* CARD 1: AI Agent Orchestration */}
            <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 bg-[#f8fafc] p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5">
              <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900">
                    AI Agent Orchestration
                  </h3>
                  <p className="text-xs leading-relaxed text-neutral-500">
                    Deploy multiple AI agents that collaborate across
                    departments, automate workflows, and execute business
                    processes through a unified intelligence layer.
                  </p>
                </div>
                <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-neutral-100 bg-white">
                  <Image
                    src="/images/ecosystem-1.png"
                    alt="AI Agent Orchestration"
                    fill
                    className="object-contain p-3"
                  />
                </div>
              </div>
            </div>

            {/* CARD 2: Enterprise System Integration */}
            <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 bg-[#f8fafc] p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5">
              <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900">
                    Enterprise System Integration
                  </h3>
                  <p className="text-xs leading-relaxed text-neutral-500">
                    Connect ERP, CRM, HRMS, finance platforms, cloud
                    applications, databases, APIs, and third-party software into
                    a single connected ecosystem.
                  </p>
                </div>
                <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-neutral-100 bg-white">
                  <Image
                    src="/images/ecosystem-2.png"
                    alt="Enterprise System Integration"
                    fill
                    className="object-contain p-3"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* LOWER GRID: 2 Columns Left + 1 Tall Column Right */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left 2 Columns */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              {/* CARD 3: Unified Data Pipelines */}
              <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 bg-[#f8fafc] p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900">
                      Unified Data Pipelines
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-500">
                      Synchronize and process enterprise data from multiple
                      sources in real time, ensuring every AI model and business
                      application works with accurate, up-to-date information.
                    </p>
                  </div>
                  <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-neutral-100 bg-white">
                    <Image
                      src="/images/ecosystem-3.png"
                      alt="Unified Data Pipelines"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Pair */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* CARD 4: Custom ERP */}
                <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 bg-[#f8fafc] p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5">
                  <div className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl border border-neutral-100 bg-white">
                    <Image
                      src="/images/ecosystem-4.png"
                      alt="Custom ERP & Business Platforms"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900">
                      Custom ERP & Business Platforms
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-500">
                      Develop scalable ERP solutions and custom enterprise
                      applications tailored to your business processes while
                      integrating seamlessly with existing systems.
                    </p>
                  </div>
                </div>

                {/* CARD 5: Workflow Automation */}
                <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 bg-[#f8fafc] p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5">
                  <div className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl border border-neutral-100 bg-white">
                    <Image
                      src="/images/ecosystem-5.png"
                      alt="Workflow & Event Automation"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900">
                      Workflow & Event Automation
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-500">
                      Trigger intelligent workflows across departments based on
                      business events, approvals, customer actions, or
                      operational data without manual intervention.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Tall Column */}
            <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 bg-[#f8fafc] p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 lg:col-span-1">
              <div className="relative mb-6 min-h-[380px] w-full flex-1 overflow-hidden rounded-2xl border border-neutral-100 bg-white">
                <Image
                  src="/images/ecosystem-6.png"
                  alt="Security & Governance"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900">
                  Security & Governance
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  Protect enterprise data with role-based access, audit trails,
                  encryption, compliance controls, and centralized governance
                  across the entire AI ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

const BENEFITS_DATA: BenefitItem[] = [
  {
    id: "reduce-manual-work",
    title: "Reduce Manual Work",
    description:
      "Automate repetitive tasks and free teams to focus on strategic initiatives.",
  },
  {
    id: "improve-accuracy",
    title: "Improve Accuracy",
    description:
      "Minimize human errors with AI-powered validation and standardized workflows.",
  },
  {
    id: "faster-operations",
    title: "Faster Operations",
    description:
      "Accelerate approvals, document handling, and business processes from hours to minutes.",
  },
  {
    id: "enterprise-ready",
    title: "Enterprise Ready",
    description:
      "Built with security, scalability, monitoring, and governance for modern organizations.",
  },
];

export function AboutWhyItMatters() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header Badge & Title */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-sm sm:mb-10 sm:border-b-4 sm:text-[14px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
            Why It Matters
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[56px]">
            Why Enterprises chooses Us
          </h2>

          <p className="mt-4 max-w-[760px] text-base leading-relaxed text-slate-600 sm:text-lg">
            We design AI-powered workflows that seamlessly connect people,
            applications, and data across your organization. Every workflow is
            built for speed, scalability, and reliability.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Cards List */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            {BENEFITS_DATA.map((item) => (
              <div
                key={item.id}
                className="w-full rounded-[24px] border border-slate-200/80 bg-white p-6 text-left shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50/50 sm:p-8"
              >
                <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Single Fixed Image Card (#F2F4F7 removed) */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-4 shadow-xl sm:p-6">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[22px]">
                <Image
                  src="/images/why-it-matters.svg"
                  alt="Why Enterprises Choose Us"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutWhyItMatters;

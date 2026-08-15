"use client";

import React from "react";

export default function WhyItMattersSection() {
  const eyebrow = "Why It Matters";

  const cards = [
    {
      title: "Unified Business Operations",
      description:
        "Connect departments, applications, and workflows into a single intelligent environment that improves operational visibility.",
      offset: "lg:-translate-y-2",
    },
    {
      title: "Faster Decision-Making",
      description:
        "Access real-time data and AI-driven insights across your organization for faster, more informed business decisions.",
      offset: "lg:-translate-y-9",
    },
    {
      title: "Greater Automation",
      description:
        "Automate cross-platform processes, reduce manual work, and eliminate repetitive data transfers between disconnected systems.",
      offset: "lg:-translate-y-2",
    },
    {
      title: "Enterprise Scalability",
      description:
        "Build a flexible AI ecosystem that grows with your organization while supporting new applications, integrations, and business requirements.",
      offset: "lg:-translate-y-9",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-12 md:py-12">
      <div className="mx-auto max-w-full">
        {/* Main Background Container */}
        <div className="relative w-full overflow-hidden rounded-[24px] border border-neutral-800 bg-black py-10 text-white sm:rounded-[32px] sm:py-14 md:rounded-[40px] md:py-20">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/matter-bg.svg"
              alt="Background Lightburst"
              className="h-full w-full object-cover object-left"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0" />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Eyebrow Badge */}
            {eyebrow && (
              <div className="text-basic mb-4 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 font-bold text-[#2b2bad] shadow-xs sm:mb-6 sm:border-b-4 sm:text-[14px]">
                <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
                {eyebrow}
              </div>
            )}

            {/* Main Title */}
            <h2 className="mb-3 max-w-4xl text-center text-2xl font-bold tracking-tight text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
              Why Organisations Choose a Connected AI Ecosystem
            </h2>

            {/* Subtitle */}
            <p className="mb-8 max-w-2xl text-center text-xs leading-relaxed text-neutral-300 sm:mb-12 sm:text-sm md:text-base lg:mb-16">
              Break down disconnected systems and create a unified digital
              infrastructure that improves collaboration, accelerates
              decision-making, and scales with your business.
            </p>

            {/* Responsive Card Grid */}
            <div className="grid w-full grid-cols-1 items-start gap-4 pt-4 pb-2 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6 lg:pt-8 lg:pb-8">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className={`group relative flex flex-col justify-start rounded-[20px] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-white/25 hover:bg-white/15 sm:rounded-[24px] sm:p-6 lg:rounded-[28px] lg:p-7 ${card.offset}`}
                >
                  <h3 className="mb-2.5 text-base leading-snug font-bold text-white sm:mb-3 sm:text-lg lg:text-xl">
                    {card.title}
                  </h3>
                  <p className="text-xs leading-relaxed font-normal text-neutral-200 sm:text-sm">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

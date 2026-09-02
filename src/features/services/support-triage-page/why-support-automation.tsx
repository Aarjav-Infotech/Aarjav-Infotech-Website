"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface FeatureCard {
  iconSrc: string;
  title: string;
  description: string;
}

export interface WhySupportAutomationProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  cards?: FeatureCard[];
  bgImage?: string;
  className?: string;
}

const defaultCards: FeatureCard[] = [
  {
    iconSrc: "/images/matter-1.svg",
    title: "Faster Response Times",
    description: "Automatically prioritize and route tickets.",
  },
  {
    iconSrc: "/images/matter-2.svg",
    title: "Higher Resolution Accuracy",
    description: "AI understands context for right routing.",
  },
  {
    iconSrc: "/images/matter-3.svg",
    title: "Reduced Support Costs",
    description: "Automate repetitive tasks effortlessly.",
  },
  {
    iconSrc: "/images/matter-4.svg",
    title: "Scalable Customer Support",
    description: "AI understands context for right routing.",
  },
];

export function WhySupportAutomation({
  eyebrow = "Why It Matters",
  title = "Why Enterprises Choose AI Support Automation",
  description = "Reduce response times, improve customer satisfaction, and empower support teams with intelligent automation that scales effortlessly.",
  cards = defaultCards,
  bgImage = "/images/why-it-matters-bg.svg",
  className,
}: WhySupportAutomationProps) {
  return (
    <section
      className={cn("w-full bg-white py-8 sm:py-12 lg:py-16 " , className)}
    >
      <div className="mx-auto max-w-full">
        {/* Main Section Card Container with Background Image */}
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-[40px] bg-blue bg-cover bg-center bg-no-repeat p-6 shadow-xl sm:rounded-[40px] sm:p-10 lg:p-14 border-b-9 border-[#ffffff]",
          )}
          style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Eyebrow, Heading & Paragraph */}
            <div className="flex flex-col items-start text-left lg:col-span-6">
              {eyebrow && (
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-[#0038d0] shadow-sm sm:text-sm">
                  {eyebrow}
                </div>
              )}

              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                {title}
              </h2>

              {description && (
                <p className="mt-4 max-w-xl text-sm leading-relaxed font-medium  sm:text-basic sm:leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            {/* Right Column: 2x2 Feature Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-6">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-[22px] bg-white/95 p-6 shadow-md backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 sm:rounded-[24px] sm:p-7"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative flex size-12 items-center justify-center rounded-2xl p-2.5">
                      <Image
                        src={card.iconSrc}
                        alt={card.title}
                        fill
                        className="object-contain p-2"
                        priority
                      />
                    </div>

                    {/* Card Heading */}
                    <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-950 sm:text-xl">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="mt-2 text-xs leading-relaxed font-normal text-slate-600 sm:text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySupportAutomation;
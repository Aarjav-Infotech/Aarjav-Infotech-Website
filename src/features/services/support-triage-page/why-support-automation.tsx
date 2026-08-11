"use client";

import React from "react";
import {
  Clock,
  ShieldCheck,
  DollarSign,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureCard {
  icon: LucideIcon;
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
    icon: Clock,
    title: "Faster Response Times",
    description: "Automatically prioritize and route tickets.",
  },
  {
    icon: ShieldCheck,
    title: "Higher Resolution Accuracy",
    description: "AI understands context for right routing.",
  },
  {
    icon: DollarSign,
    title: "Reduced Support Costs",
    description: "Automate repetitive tasks effortlessly.",
  },
  {
    icon: Headphones,
    title: "Scalable Customer Support",
    description: "AI understands context for right routing.",
  },
];

export function WhySupportAutomation({
  eyebrow = "Why It Matters",
  title = "Why Enterprises Choose AI Support Automation",
  description = "Reduce response times, improve customer satisfaction, and empower support teams with intelligent automation that scales effortlessly.",
  cards = defaultCards,
  bgImage = "/images/why-it-matters-bg.svg", // Replace with your image path
  className,
}: WhySupportAutomationProps) {
  return (
    <section
      className={cn("w-full bg-white py-8 sm:py-12 lg:py-16", className)}
    >
      <div className="mx-auto max-w-full">
        {/* Main Section Card Container with Background Image */}
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-[28px] bg-slate-900 bg-cover bg-center bg-no-repeat p-6 shadow-xl sm:rounded-[36px] sm:p-10 lg:p-14",
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

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                {title}
              </h2>

              {description && (
                <p className="mt-4 max-w-xl text-sm leading-relaxed font-medium text-slate-200 sm:text-base sm:leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            {/* Right Column: 2x2 Feature Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-6">
              {cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-[22px] bg-white/95 p-6 shadow-md backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 sm:rounded-[24px] sm:p-7"
                  >
                    <div>
                      {/* Icon Container */}
                      <div className="flex size-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600">
                        <Icon className="size-6" />
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySupportAutomation;

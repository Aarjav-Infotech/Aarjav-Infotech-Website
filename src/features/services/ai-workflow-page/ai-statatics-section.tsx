"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface StatItem {
  value: string;
  label: string;
}

export interface StatisticsSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  stats?: StatItem[];
  className?: string;
}

const defaultStats: StatItem[] = [
  { value: "87%", label: "WORK REDUCED" },
  { value: "3.5x", label: "ROI MULTIPLIER" },
  { value: "97%", label: "DATA ACCURACY" },
  { value: "24/7", label: "OPERATIONS" },
];

export function AiStatisticsSection({
  eyebrow = "Statistics",
  title = "Turning Automation Into Business Value",
  description = "From workflow automation to system integration, we deliver outcomes that move your business forward.",
  stats = defaultStats,
  className,
}: StatisticsSectionProps) {
  return (
    <section
      className={cn("w-full bg-white py-12 sm:py-16 lg:py-20", className)}
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        {(eyebrow || title || description) && (
          <div className="flex flex-col items-center text-center">
            {eyebrow && (
              <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-bold text-[#2b2bad] shadow-sm sm:mb-10 sm:border-b-4 sm:text-[14px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                {eyebrow}
              </div>
            )}

            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-3 max-w-3xl text-sm font-medium text-slate-600 sm:mt-4 sm:text-base lg:text-lg">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Statistics Grid Row */}
        {stats && stats.length > 0 && (
          <div className="mt-12 border-y border-slate-200/80 sm:mt-16">
            <div className="grid grid-cols-2 divide-x divide-y divide-slate-200/80 sm:grid-cols-4 sm:divide-y-0">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-6 text-center sm:p-8 lg:p-10"
                >
                  <div className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs font-semibold tracking-wider text-slate-500 uppercase sm:mt-3 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AiStatisticsSection;

"use client";

import React, { useState } from "react";
import {
  Box,
  ShoppingCart,
  Sparkles,
  BarChart2,
  ChevronDown,
  ArrowUp,
  AlertTriangle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BusinessIntelligenceSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

type TimeRangeKey = "7 Days" | "30 Days" | "90 Days";

interface ChartDataPoint {
  highestValue: string;
  badgeLeft: string;
  path: string;
  xLabels: string[];
}

const chartDataByRange: Record<TimeRangeKey, ChartDataPoint> = {
  "7 Days": {
    highestValue: "620 Diamonds",
    badgeLeft: "72%",
    path: "M 50 175 C 90 170, 130 140, 175 140 C 220 140, 260 160, 310 120 C 355 80, 395 70, 440 70 C 475 70, 495 110, 515 115",
    xLabels: ["Day 01", "Day 03", "Day 05", "Day 07"],
  },
  "30 Days": {
    highestValue: "842 Diamonds",
    badgeLeft: "62%",
    path: "M 50 160 C 70 145, 90 100, 115 100 C 145 100, 160 165, 185 160 C 210 155, 230 85, 255 85 C 280 85, 305 155, 325 150 C 350 145, 370 45, 395 45 C 420 45, 435 90, 450 90 C 465 90, 480 75, 515 85",
    xLabels: ["Day 01", "Day 02", "Day 03", "Day 04"],
  },
  "90 Days": {
    highestValue: "1,180 Diamonds",
    badgeLeft: "42%",
    path: "M 50 150 C 90 135, 140 165, 190 140 C 230 115, 250 35, 280 35 C 310 35, 340 130, 380 130 C 420 130, 460 70, 515 65",
    xLabels: ["Month 01", "Month 02", "Month 03"],
  },
};

const timeRanges: TimeRangeKey[] = ["7 Days", "30 Days", "90 Days"];

export default function BusinessIntelligenceSection({
  eyebrow = "Business Intelligence",
  title = "Business Intelligence & Operational Control",
  subtitle = "Real-time analytics and reporting to drive strategic decisions across your global operations.",
}: BusinessIntelligenceSectionProps) {
  const [selectedRange, setSelectedRange] = useState<TimeRangeKey>("30 Days");

  const currentChart = chartDataByRange[selectedRange];

  return (
    <section className="relative w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow Pill */}
          {eyebrow && (
            <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-base font-semibold text-[#2b2bad] shadow-sm sm:text-[14px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
              {eyebrow}
            </div>
          )}

          <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-xl text-base text-slate-500 sm:text-base">
              {subtitle}
            </p>
          )}
        </div>

        {/* Top 3 KPI Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Total Inventory Value */}
          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_6px_24px_rgba(0,0,0,0.04)] ring-1 ring-slate-100">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eff4fe] text-[#0052e0]">
              <Box className="h-5 w-5 stroke-[2]" />
            </div>
            <div>
              <p className="text-base font-medium text-slate-400">
                Total Inventory Value
              </p>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                $45.2M
              </h3>
              <div className="mt-1 inline-flex items-center gap-1 rounded bg-[#eafaf1] px-1.5 py-0.5 text-[11px] font-medium text-[#1db469]">
                <ArrowUp className="h-3 w-3 stroke-[2.5]" />
                <span>2.4% this month</span>
              </div>
            </div>
          </div>

          {/* Today's Sales */}
          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_6px_24px_rgba(0,0,0,0.04)] ring-1 ring-slate-100">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eff4fe] text-[#0052e0]">
              <ShoppingCart className="h-5 w-5 stroke-[2]" />
            </div>
            <div>
              <p className="text-base font-medium text-slate-400">
                Today's Sales
              </p>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                $1.8M
              </h3>
              <div className="mt-1 inline-flex items-center gap-1 rounded bg-[#eafaf1] px-1.5 py-0.5 text-[11px] font-medium text-[#1db469]">
                <ArrowUp className="h-3 w-3 stroke-[2.5]" />
                <span>5.1% vs yesterday</span>
              </div>
            </div>
          </div>

          {/* Active Diamond Inventory */}
          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_6px_24px_rgba(0,0,0,0.04)] ring-1 ring-slate-100">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eff4fe] text-[#0052e0]">
              <Sparkles className="h-5 w-5 stroke-[2]" />
            </div>
            <div>
              <p className="text-base font-medium text-slate-400">
                Active Diamond inventory
              </p>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                842
              </h3>
              <div className="mt-1 inline-flex items-center gap-1 rounded bg-[#fef0f0] px-1.5 py-0.5 text-[11px] font-medium text-[#f04438]">
                <AlertTriangle className="h-3 w-3 stroke-[2.5]" />
                <span>12 overdue</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Line Chart + Circular Orders Chart */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Stock Movement Chart */}
          <div className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.04)] ring-1 ring-slate-100 lg:col-span-2">
            <div>
              {/* Header with Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eff4fe] text-[#0052e0]">
                    <BarChart2 className="h-4 w-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Stock Movement ({selectedRange})
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Track inventory flow and plan operations more efficiently.
                    </p>
                  </div>
                </div>

                {/* Range Filter */}
                <div className="relative inline-flex rounded-lg bg-[#f1f4f9] p-1 text-sm font-medium">
                  {timeRanges.map((range) => {
                    const isActive = selectedRange === range;
                    return (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setSelectedRange(range)}
                        className={`relative z-10 rounded-md px-3 py-1 transition-colors duration-150 ${
                          isActive
                            ? "font-semibold text-white"
                            : "text-slate-500 hover:text-slate-900"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="stockRangeTab"
                            className="absolute inset-0 rounded-md bg-[#0053fa] shadow-sm"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}
                        <span className="relative z-10">{range}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Chart Graphics */}
              <div className="relative mt-8 h-64 w-full">
                {/* Dynamic Tooltip Badge */}
                <motion.div
                  key={`badge-${selectedRange}`}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ left: currentChart.badgeLeft }}
                  className="absolute top-0 flex -translate-x-1/2 flex-col items-center"
                >
                  <div className="rounded-md bg-[#f8fafc] px-3 py-1 text-center shadow-sm ring-1 ring-slate-200">
                    <p className="text-[10px] text-slate-400">
                      Highest Movement
                    </p>
                    <p className="text-base font-bold text-slate-900">
                      {currentChart.highestValue}
                    </p>
                  </div>
                  <div className="h-2 w-[1px] bg-slate-300" />
                </motion.div>

                <svg
                  viewBox="0 0 540 200"
                  className="h-full w-full overflow-visible"
                  fill="none"
                >
                  {/* Static Grid Lines */}
                  <line
                    x1="45"
                    y1="25"
                    x2="530"
                    y2="25"
                    stroke="#e2e8f0"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="45"
                    y1="68"
                    x2="530"
                    y2="68"
                    stroke="#e2e8f0"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="45"
                    y1="112"
                    x2="530"
                    y2="112"
                    stroke="#e2e8f0"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="45"
                    y1="156"
                    x2="530"
                    y2="156"
                    stroke="#e2e8f0"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="45"
                    y1="198"
                    x2="530"
                    y2="198"
                    stroke="#e2e8f0"
                    strokeWidth="1.2"
                  />

                  {/* Y-Axis Labels */}
                  <text
                    x="0"
                    y="29"
                    className="fill-slate-400 text-[12px] font-normal"
                  >
                    1000
                  </text>
                  <text
                    x="0"
                    y="72"
                    className="fill-slate-400 text-[12px] font-normal"
                  >
                    600
                  </text>
                  <text
                    x="0"
                    y="116"
                    className="fill-slate-400 text-[12px] font-normal"
                  >
                    400
                  </text>
                  <text
                    x="0"
                    y="160"
                    className="fill-slate-400 text-[12px] font-normal"
                  >
                    200
                  </text>
                  <text
                    x="10"
                    y="199"
                    className="fill-slate-400 text-[12px] font-normal"
                  >
                    0
                  </text>

                  {/* Animated Wave Path */}
                  <AnimatePresence mode="wait">
                    <motion.path
                      key={selectedRange}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      d={currentChart.path}
                      stroke="#0053fa"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </AnimatePresence>
                </svg>
              </div>
            </div>

            {/* Dynamic X-Axis Labels */}
            <div className="mt-4 flex justify-between pr-6 pl-12 text-base text-slate-400">
              {currentChart.xLabels.map((label, idx) => (
                <span key={idx}>{label}</span>
              ))}
            </div>
          </div>

          {/* Product Orders Gauge / Concentric Ring Chart */}
          <div className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.04)] ring-1 ring-slate-100">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-slate-900">
                Product Orders
              </h4>
              <button className="inline-flex items-center gap-1 text-base text-slate-400 hover:text-slate-600">
                <span>Last 7 Days</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Concentric Rings Visual */}
            <div className="relative my-6 flex items-center justify-center">
              <svg
                className="h-56 w-56 -rotate-90 transform"
                viewBox="0 0 220 220"
              >
                {/* Outer Ring Background (Finished) */}
                <circle
                  cx="110"
                  cy="110"
                  r="92"
                  fill="transparent"
                  stroke="#f1f5f9"
                  strokeWidth="11"
                />
                <circle
                  cx="110"
                  cy="110"
                  r="92"
                  fill="transparent"
                  stroke="#0053fa"
                  strokeWidth="11"
                  strokeDasharray="578"
                  strokeDashoffset="160"
                  strokeLinecap="round"
                />

                {/* Middle Ring (Pending) */}
                <circle
                  cx="110"
                  cy="110"
                  r="74"
                  fill="transparent"
                  stroke="#f1f5f9"
                  strokeWidth="10"
                />
                <circle
                  cx="110"
                  cy="110"
                  r="74"
                  fill="transparent"
                  stroke="#fb923c"
                  strokeWidth="10"
                  strokeDasharray="465"
                  strokeDashoffset="260"
                  strokeLinecap="round"
                />

                {/* Inner Ring (Rejected) */}
                <circle
                  cx="110"
                  cy="110"
                  r="57"
                  fill="transparent"
                  stroke="#f1f5f9"
                  strokeWidth="9"
                />
                <circle
                  cx="110"
                  cy="110"
                  r="57"
                  fill="transparent"
                  stroke="#ef4444"
                  strokeWidth="9"
                  strokeDasharray="358"
                  strokeDashoffset="220"
                  strokeLinecap="round"
                />
              </svg>

              {/* Center Total Counter */}
              <div className="absolute flex flex-col items-center text-center">
                <span className="text-[11px] font-medium text-slate-400">
                  Total
                </span>
                <span className="text-base font-bold text-slate-800">
                  42,459
                </span>
              </div>
            </div>

            {/* Legend & Breakdown */}
            <div className="space-y-2.5 text-base">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full border-2 border-[#0053fa] bg-transparent" />
                  <span className="font-medium text-slate-700">Finished</span>
                </div>
                <span className="font-semibold text-slate-800">23,043</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full border-2 border-[#fb923c] bg-transparent" />
                  <span className="font-medium text-slate-700">Pending</span>
                </div>
                <span className="font-semibold text-slate-800">14,658</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full border-2 border-[#ef4444] bg-transparent" />
                  <span className="font-medium text-slate-700">Rejected</span>
                </div>
                <span className="font-semibold text-slate-800">4,758</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

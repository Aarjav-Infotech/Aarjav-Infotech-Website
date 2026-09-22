"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/cdn";

export interface DhvaneeLanguageSupportProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

interface LanguagePill {
  label: string;
  className: string;
  floatOffset: number;
  duration: number;
  delay: number;
}

// Mobile viewports (default/xs/sm) me cards tightly grouped around the main box,
// jabki md: aur lg: viewports par original wider layout restore rehta hai.
const languages: LanguagePill[] = [
  {
    label: "English",
    className:
      "top-[10%] left-[6%] xs:left-[10%] sm:top-[12%] sm:left-[22%] md:top-6 md:left-[18%] lg:top-2 lg:left-[12%]",
    floatOffset: 8,
    duration: 3.5,
    delay: 0,
  },
  {
    label: "हिन्दी (Hindi)",
    className:
      "top-[10%] right-[6%] xs:right-[10%] sm:top-[12%] sm:right-[22%] md:top-10 md:right-[10%] lg:top-8 lg:right-[4%]",
    floatOffset: 9,
    duration: 4.2,
    delay: 0.6,
  },
  {
    label: "मराठी (Marathi)",
    className:
      "top-1/2 left-1 xs:left-2 -translate-y-1/2 sm:left-10 md:top-1/2 md:left-4 md:-translate-y-1/2 lg:-left-2",
    floatOffset: 7,
    duration: 4.4,
    delay: 1.5,
  },
  {
    label: "తెలుగు (Telugu)",
    className:
      "top-1/2 right-1 xs:right-2 -translate-y-1/2 sm:right-10 md:top-1/2 md:right-4 md:-translate-y-1/2 lg:-right-2",
    floatOffset: 7,
    duration: 3.8,
    delay: 1.2,
  },
  {
    label: "ગુજરાતી (Gujarati)",
    className:
      "bottom-[10%] left-[6%] xs:left-[10%] sm:bottom-[12%] sm:left-[22%] md:bottom-10 md:left-[16%] lg:bottom-6 lg:left-[8%]",
    floatOffset: 9,
    duration: 3.6,
    delay: 0.9,
  },
  {
    label: "தமிழ் (Tamil)",
    className:
      "bottom-[10%] right-[6%] xs:right-[10%] sm:bottom-[12%] sm:right-[22%] md:bottom-8 md:right-[16%] lg:bottom-4 lg:right-[6%]",
    floatOffset: 8,
    duration: 4.0,
    delay: 0.3,
  },
];

export function DhvaneeLanguageSupport({
  eyebrow = "Language Support",
  title = "Speak Your Language",
  subtitle = "Financial security shouldn't be limited by language barriers. Vani Sahay understands and protects in multiple dialects.",
}: DhvaneeLanguageSupportProps) {
  return (
    <section className="xs:px-4 relative w-full overflow-hidden bg-white px-3 py-14 sm:px-6 sm:py-20 md:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center text-center sm:mb-16">
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-sm sm:mb-8 sm:border-b-4 sm:text-lg">
              <span className="size-1.5 rounded-full bg-[#2b2bad]" />
              {eyebrow}
            </div>
          )}

          <h2 className="xs:text-3xl text-2xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[46px] lg:leading-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2 max-w-[560px] text-xs leading-relaxed text-slate-500 sm:mt-4 sm:text-sm md:text-base">
              {subtitle}
            </p>
          )}
        </div>

        {/* Orbit Area */}
        <div className="xs:h-[400px] relative mx-auto flex h-[360px] w-full max-w-[980px] items-center justify-center sm:h-[480px] md:h-[560px]">
          {/* Radial Light Blue Gradient */}
          <div className="pointer-events-none absolute inset-0 -z-0 flex items-center justify-center">
            <div className="h-[260px] w-[260px] rounded-full bg-blue-100 blur-[30px] sm:h-[400px] sm:w-[650px] sm:blur-[40px] md:h-[460px] md:w-[820px]" />
          </div>

          {/* Floating Language Pills */}
          {languages.map((item, idx) => (
            <motion.div
              key={idx}
              animate={{
                y: [-item.floatOffset, item.floatOffset, -item.floatOffset],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
              className={`xs:px-3.5 xs:py-1.5 xs:text-xs absolute z-30 [transform:translateZ(0)] rounded-full border border-slate-100/90 bg-white/95 px-2.5 py-1 text-[10.5px] font-semibold whitespace-nowrap text-slate-800 shadow-[0_6px_20px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-shadow duration-300 [backface-visibility:hidden] hover:scale-105 hover:shadow-md sm:px-5 sm:py-2.5 sm:text-sm ${item.className}`}
            >
              {item.label}
            </motion.div>
          ))}

          {/* Center Product Card */}
          <motion.div
            animate={{
              y: [-4, 4, -4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="xs:w-[200px] relative z-20 flex min-h-[170px] w-[180px] [transform:translateZ(0)] flex-col items-center justify-center gap-2 rounded-[20px] bg-white/80 p-4 shadow-[0_12px_36px_rgba(0,0,0,0.06)] backdrop-blur-md transition-transform duration-300 [backface-visibility:hidden] hover:scale-[1.01] sm:min-h-[198px] sm:w-[260px] md:w-[320px] md:p-6"
          >
            {/* Mic App Icon */}
            <div className="relative flex size-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] shadow-[0_8px_20px_rgba(0,38,136,0.35)] sm:size-14">
              <Image
                src={asset("/images/mic.svg")}
                alt="Vani Sahay Voice AI"
                width={28}
                height={28}
                className="size-6 object-contain brightness-0 invert sm:size-7"
                priority
              />
            </div>

            {/* Title */}
            <h3 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
              Vani Sahay
            </h3>

            {/* Ready to help pill */}
            <div className="flex h-8 w-full items-center justify-center gap-2 rounded-full border border-slate-200/90 bg-white/60 px-3 text-xs font-medium text-slate-700 sm:h-10 sm:px-4 sm:text-[13px]">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span>Ready to help</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DhvaneeLanguageSupport;

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface LanguagePill {
  label: string;
  className: string;
  floatOffset: number;
  duration: number;
  delay: number;
}

const languages: LanguagePill[] = [
  {
    label: "English",
    className: "top-2 left-[12%] sm:top-4 sm:left-[16%] md:top-6 md:left-[18%]",
    floatOffset: 8,
    duration: 3.5,
    delay: 0,
  },
  {
    label: "हिन्दी (Hindi)",
    className:
      "top-8 right-[4%] sm:top-10 sm:right-[8%] md:top-10 md:right-[10%]",
    floatOffset: 9,
    duration: 4.2,
    delay: 0.6,
  },
  {
    label: "తెలుగు (Telugu)",
    className: "top-1/2 -right-2 -translate-y-1/2 sm:right-1 md:right-4",
    floatOffset: 7,
    duration: 3.8,
    delay: 1.2,
  },
  {
    label: "தமிழ் (Tamil)",
    className:
      "bottom-4 right-[6%] sm:bottom-6 sm:right-[12%] md:bottom-8 md:right-[16%]",
    floatOffset: 8,
    duration: 4.0,
    delay: 0.3,
  },
  {
    label: "ગુજરાતી (Gujarati)",
    className:
      "bottom-6 left-[8%] sm:bottom-8 sm:left-[12%] md:bottom-10 md:left-[16%]",
    floatOffset: 9,
    duration: 3.6,
    delay: 0.9,
  },
  {
    label: "मराठी (Marathi)",
    className: "top-1/2 -left-2 -translate-y-1/2 sm:left-1 md:left-4",
    floatOffset: 7,
    duration: 4.4,
    delay: 1.5,
  },
];

export function VaniSahayLanguageSupport() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/70 px-3.5 py-1 text-xs font-semibold text-[#0053FA]">
            <span className="size-1.5 rounded-full bg-[#0053FA]" />
            Language Support
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[46px] lg:leading-tight">
            Speak Your Language
          </h2>

          <p className="mt-3 max-w-[560px] text-xs leading-relaxed text-slate-500 sm:mt-4 sm:text-sm md:text-base">
            Financial security shouldn&apos;t be limited by language barriers.
            Vani Sahay understands and protects in multiple dialects.
          </p>
        </div>

        {/* Orbit Area with Radial Soft Blue Glow */}
        <div className="relative mx-auto flex h-[480px] w-full max-w-[980px] items-center justify-center sm:h-[520px] md:h-[560px]">
          {/* Radial Light Blue Gradient */}
          <div className="pointer-events-none absolute inset-0 -z-0 flex items-center justify-center">
            <div className="h-[400px] w-[650px] rounded-full bg-blue-100 blur-[40px] sm:h-[460px] sm:w-[820px]" />
          </div>

          {/* Floating Language Pills with Infinite Vertical Float */}
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
              className={`absolute z-10 [transform:translateZ(0)] rounded-full border border-slate-100/90 bg-white/95 px-4 py-2 text-xs font-semibold text-slate-800 shadow-[0_6px_20px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-shadow duration-300 [backface-visibility:hidden] hover:scale-105 hover:shadow-md sm:px-5 sm:py-2.5 sm:text-sm ${item.className}`}
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
            className="relative z-20 flex min-h-[198px] w-[320px] [transform:translateZ(0)] flex-col items-center justify-center gap-2 rounded-[20px] bg-white/80 p-6 shadow-[0_12px_36px_rgba(0,0,0,0.06)] backdrop-blur-md transition-transform duration-300 [backface-visibility:hidden] hover:scale-[1.01]"
          >
            {/* Mic App Icon */}
            <div className="relative flex size-14 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] shadow-[0_8px_20px_rgba(0,38,136,0.35)]">
              <Image
                src="/images/mic.svg"
                alt="Vani Sahay Voice AI"
                width={28}
                height={28}
                className="object-contain brightness-0 invert"
                priority
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold tracking-tight text-slate-900">
              Vani Sahay
            </h3>

            {/* Ready to help pill */}
            <div className="flex h-10 w-full items-center justify-center gap-2 rounded-full border border-slate-200/90 bg-white/60 px-4 text-[13px] font-medium text-slate-700">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span>Ready to help</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VaniSahayLanguageSupport;

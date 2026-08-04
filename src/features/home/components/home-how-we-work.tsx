"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface HomeHowWeWorkProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  leftSteps?: ProcessStep[];
  rightSteps?: ProcessStep[];
  centerImageSrc?: string;
}

export function HomeHowWeWork({
  eyebrow = "OUR PROCESS",
  title = "How We Work",
  subtitle = "End-to-end AI agent deployment built for mission-critical enterprise workloads.",
  leftSteps = [],
  rightSteps = [],
  centerImageSrc = "/images/leyers.png",
}: HomeHowWeWorkProps) {
  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center md:mb-20 md:text-left"
        >
          {eyebrow && (
            <p className="mb-3 text-[11px] font-bold tracking-[0.1em] text-blue-600 uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="mb-4 text-[36px] leading-[1.15] font-bold text-slate-900 md:text-[48px] lg:text-[52px]">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-[720px] text-[16px] leading-relaxed text-slate-600 md:text-[18px]">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Interactive Step Cards Grid */}
        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[340px_1fr_340px] lg:gap-0">
          {/* CENTER IMAGE (Desktop Absolute Placement) */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 hidden h-[680px] w-[880px] -translate-x-1/2 -translate-y-1/2 lg:block">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-full w-full"
            >
              <Image
                src={centerImageSrc}
                alt="Process Layers Illustration"
                fill
                priority
                className="object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>

          {/* LEFT STEPS COLUMN */}
          <div className="z-20 flex flex-col gap-6 lg:gap-12">
            {leftSteps.map((item, idx) => {
              const stepNumber = parseInt(item.step, 10) || idx + 1;
              <span>{stepNumber}</span>;
              return (
                <motion.div
                  key={item.step || idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    opacity: { duration: 0.4, delay: idx * 0.15 },
                    x: {
                      type: "spring",
                      stiffness: 70,
                      damping: 16,
                      delay: idx * 0.15,
                    },
                    y: { type: "spring", stiffness: 350, damping: 22 },
                  }}
                  className="group relative flex w-full cursor-pointer flex-col rounded-[20px] border border-slate-200 bg-white/95 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all duration-300 hover:border-blue-600 hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)]"
                >
                  {/* Dashed connector line pointing right */}
                  <div className="pointer-events-none absolute top-1/2 -right-[70px] hidden h-[1px] w-[70px] border-t-2 border-dashed border-blue-300/80 lg:block">
                    <div className="absolute top-1/2 right-0 h-[8px] w-[8px] -translate-y-1/2 rounded-full bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.15)]" />
                  </div>

                  <div className="mb-3 border-b border-slate-100 pb-3 text-[11px] font-bold tracking-wider text-slate-400 uppercase transition-colors group-hover:text-blue-600">
                    STEP {item.step}
                  </div>
                  <h3 className="mb-2 text-[20px] leading-snug font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER IMAGE (Mobile View) */}
          <div className="pointer-events-none relative z-0 flex h-[350px] w-full items-center justify-center lg:hidden">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-full w-full max-w-[420px]"
            >
              <Image
                src={centerImageSrc}
                alt="Process Layers Illustration"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Spacer for desktop grid layout */}
          <div className="pointer-events-none z-0 hidden w-full lg:block" />

          {/* RIGHT STEPS COLUMN */}
          <div className="z-20 flex flex-col gap-6 lg:gap-12">
            {rightSteps.map((item, idx) => {
              return (
                <motion.div
                  key={item.step || idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    opacity: { duration: 0.4, delay: (idx + 2) * 0.15 },
                    x: {
                      type: "spring",
                      stiffness: 70,
                      damping: 16,
                      delay: (idx + 2) * 0.15,
                    },
                    y: { type: "spring", stiffness: 350, damping: 22 },
                  }}
                  className="group relative flex w-full cursor-pointer flex-col rounded-[20px] border border-slate-200 bg-white/95 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all duration-300 hover:border-blue-600 hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)]"
                >
                  {/* Dashed connector line pointing left */}
                  <div className="pointer-events-none absolute top-1/2 -left-[70px] hidden h-[1px] w-[70px] border-t-2 border-dashed border-blue-300/80 lg:block">
                    <div className="absolute top-1/2 left-0 h-[8px] w-[8px] -translate-y-1/2 rounded-full bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.15)]" />
                  </div>

                  <div className="mb-3 border-b border-slate-100 pb-3 text-[11px] font-bold tracking-wider text-slate-400 uppercase transition-colors group-hover:text-blue-600">
                    STEP {item.step}
                  </div>
                  <h3 className="mb-2 text-[20px] leading-snug font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StatItem {
  id: number;
  description: string;
  label: string;
  value: number;
  suffix: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: 1,
    description:
      "We shipped our first copilot in 7 weeks and cut support tickets by 31%. The eval dashboards made every decision obvious.",
    label: "UPTIME FOR KEY FLOWS",
    value: 97,
    suffix: "%",
  },
  {
    id: 2,
    description:
      "Automated document extraction accelerated invoice processing by 4x across 12 regional branches with zero human intervention.",
    label: "REDUCTION IN MANUAL TASK TIME",
    value: 85,
    suffix: "%",
  },
  {
    id: 3,
    description:
      "Custom RAG pipelines powered our customer care agents to deliver instantaneous responses across multi-lingual channels.",
    label: "CUSTOMER SATISFACTION SCORE",
    value: 99,
    suffix: "%",
  },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

// Sub-component for Animated Number Counting
function CounterNumber({
  targetValue,
  suffix,
}: {
  targetValue: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200; // 1.2s counter animation
    const steps = 60;
    const increment = targetValue / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function AboutStaticSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0); // Forces progress bar re-animation on slide change
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  // Handle Automatic Slide Change
  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % STATS_DATA.length);
      setProgressKey((prev) => prev + 1);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [currentIndex, isInView, progressKey]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % STATS_DATA.length);
    setProgressKey((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + STATS_DATA.length) % STATS_DATA.length,
    );
    setProgressKey((prev) => prev + 1);
  };

  const currentStat = STATS_DATA[currentIndex];

  if (!currentStat) return null;

  return (
    <section ref={containerRef} className="w-full bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Side: Static Section (Does not slide) */}
          <div className="flex flex-col justify-start lg:col-span-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-[#002688]">
              <span className="size-1.5 rounded-full bg-[#002688]" />
              Statistic
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              Building the <br />
              foundation for <br />
              enterprise
            </h2>
          </div>

          {/* Vertical Divider for Large Displays */}
          <div className="hidden lg:col-span-1 lg:block lg:border-r lg:border-slate-100" />

          {/* Right Side: Sliding Carousel Section */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div className="relative min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentStat.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-lg leading-relaxed text-slate-800 sm:text-xl"
                >
                  {currentStat.description}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex flex-col gap-6">
              {/* Progress Bar & Navigation Controls */}
              <div className="flex items-center gap-6">
                <div className="relative h-[4px] w-full rounded-full bg-slate-200">
                  <motion.div
                    key={progressKey}
                    initial={{ width: "0%" }}
                    animate={{ width: isInView ? "100%" : "0%" }}
                    transition={{
                      duration: SLIDE_DURATION / 1000,
                      ease: "linear",
                    }}
                    className="h-full rounded-full bg-[#0053FA] drop-shadow-[0_4px_12px_rgba(0,83,250,0.6)]"
                  />
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="flex size-8 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                    aria-label="Previous Statistic"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex size-8 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                    aria-label="Next Statistic"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>

              {/* Label & Animated Counter */}
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStat.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xs font-bold tracking-wider text-slate-800 uppercase">
                      {currentStat.label}
                    </p>

                    <div className="mt-2 bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-clip-text text-7xl font-extrabold tracking-tight text-transparent sm:text-8xl lg:text-[120px]">
                      <CounterNumber
                        targetValue={currentStat.value}
                        suffix={currentStat.suffix}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStaticSection;

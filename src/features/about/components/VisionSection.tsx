"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Target, Gauge, ShieldCheck, Coins } from "lucide-react";

interface MetricBar {
  label: string;
  icon: React.ElementType;
  value: number; // Percentage (0-100)
  color?: string;
}

interface VisionSectionProps {
  eyebrow?: string;
}

const METRICS: MetricBar[] = [
  {
    label: "Accuracy",
    icon: Target,
    value: 90,
    color: "bg-gradient-to-r from-[#002688] via-[#0053FA] to-[#3BE4FF]",
  },
  {
    label: "Latency",
    icon: Gauge,
    value: 85,
    color: "bg-gradient-to-r from-[#002688] via-[#0053FA] to-[#3BE4FF]",
  },
  {
    label: "Safety",
    icon: ShieldCheck,
    value: 85,
    color: "bg-gradient-to-r from-[#002688] via-[#0053FA] to-[#3BE4FF]",
  },
  {
    label: "Cost",
    icon: Coins,
    value: 50,
    color: "bg-gradient-to-r from-[#002688] via-[#0053FA] to-[#3BE4FF]",
  },
];

export function VisionSection({
  eyebrow = "Vision & Values",
}: VisionSectionProps) {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Safe check with optional chaining to prevent undefined type errors
        if (entry?.isIntersecting) {
          // Animate to target value when in view
          setAnimated(true);
        } else {
          // Reset back to 0% when leaving view
          setAnimated(false);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Eyebrow */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-sm sm:mb-10 sm:border-b-4 sm:text-[14px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
            {eyebrow}
          </div>

          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Human-Centered AI, Built for Production
          </h2>
        </div>

        {/* Content Layout Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Left Card - Background Image */}
          <div className="relative flex min-h-[420px] flex-col items-center justify-between overflow-hidden rounded-[32px] p-8 text-center text-white shadow-xl sm:p-12 lg:col-span-6">
            <Image
              src="/images/vision-bg.svg"
              alt="Vision card background"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Header Content Overlay */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
                <span className="size-2 rounded-full bg-white" />
                Available for worldwide project
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Based in Surat, India
              </h3>

              <button className="mt-6 rounded-full bg-gradient-to-b from-[#0053FA] to-[#002688] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,83,250,0.5)] transition hover:scale-105 active:scale-95">
                Let's Connect
              </button>
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-6">
            {/* Top Card: Our Vision */}
            <div className="rounded-[32px] bg-[#F5F5F7] p-8 shadow-sm sm:p-10">
              <h3 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                Our Vision
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Based in Surat, India, we build human-centered AI for
                production. Our mission is to create intelligent systems that
                empower people and organizations. By uniting research, design,
                and engineering, we deliver scalable and reliable AI
                solutions—technology that's practical, trustworthy, and designed
                to make a meaningful impact in the real world.
              </p>
            </div>

            {/* Bottom Card: Animated Progress Bars */}
            <div className="rounded-[32px] bg-[#F5F5F7] p-8 shadow-sm sm:p-10">
              <h3 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                Outcome over Output
              </h3>

              <div className="mt-8 flex flex-col gap-5">
                {METRICS.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      {/* Track Container */}
                      <div className="relative h-1.5 w-full flex-1 overflow-hidden rounded-full bg-slate-200">
                        {/* Colored Progress Bar */}
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${
                            metric.color || "bg-[#0053fa]"
                          }`}
                          style={{
                            width: animated ? `${metric.value}%` : "0%",
                            transitionDelay: animated
                              ? `${index * 150}ms`
                              : "0ms", // Instant reset when leaving view
                          }}
                        />
                      </div>

                      {/* Label Badge */}
                      <div className="inline-flex min-w-[110px] shrink-0 items-center justify-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-sm">
                        <Icon className="size-4 text-slate-600" />
                        <span>{metric.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionSection;

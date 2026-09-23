"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { asset } from "@/lib/cdn";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface ComingSoonPageProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export default function ComingSoonPage({
  eyebrow = "More Powerful Solutions Are On The Way",
  title = "Something Great",
  subtitle = "We are building more intelligent products to help businesses automate, optimize, and scale with confidence.",
}: ComingSoonPageProps) {
  const [_timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 24,
    hours: 17,
    minutes: 42,
    seconds: 58,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 24);
    targetDate.setHours(targetDate.getHours() + 17);
    targetDate.setMinutes(targetDate.getMinutes() + 42);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const _formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <main className="relative w-full overflow-hidden rounded-[40px] px-4 py-10 md:py-20">
      {/* Background Flow/Wave Image */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={asset("/icons/coming-soon-bg.svg")}
          alt="Background Waves"
          fill
          priority
          className="object-cover object-center opacity-80"
          unoptimized
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, Subtitle & Action Button */}
          <div className="flex flex-col items-start text-left lg:col-span-6">
            {/* Eyebrow */}
            {eyebrow && (
              <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-base font-semibold text-[#2b2bad] shadow-sm sm:text-lg">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                {eyebrow}
              </div>
            )}

            {/* Main Title */}
            <h1 className="text-4xl font-semibold tracking-tight text-[#0B0F19] sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[1.1]">
              {title} <br />
              <span className="text-[#0053FA]">Is Coming Soon!</span>
            </h1>

            {/* Subtitle Description */}
            {subtitle && (
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
                {subtitle}
              </p>
            )}

            {/* Back to Home Button */}
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,38,136,0.35)] transition-transform duration-200 hover:scale-105 active:scale-95 sm:text-base"
              >
                <ArrowLeft className="size-4" />
                <span>Back to home</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Full Graphic */}
          <div className="relative flex items-center justify-center lg:col-span-6">
            <div className="relative mx-auto flex h-[380px] w-full max-w-[620px] items-center justify-center sm:h-[480px] md:h-[540px]">
              <Image
                src={asset("/icons/coming-soon-side-image.svg")}
                alt="New Product Launch"
                fill
                priority
                className="object-contain object-center"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

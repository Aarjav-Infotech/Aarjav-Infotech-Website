"use client";

import React from "react";
import Image from "next/image";
import { asset } from "@/lib/cdn";

interface VaniSahayAboutProductProps {
  bgImageSrc?: string;
  containerImageSrc?: string;
  phishingCardSrc?: string;
  autoTranslateCardSrc?: string;
}

export default function VaniSahayAboutProductSection({
  bgImageSrc = asset("/images/vani-about-bg.svg"),
  containerImageSrc = asset("/images/vani-chat-container.svg"),
  phishingCardSrc = asset("/images/phishing-risk-card.svg"),
  autoTranslateCardSrc = asset("/images/auto-translate-card.svg"),
}: VaniSahayAboutProductProps) {
  const eyebrow = "About Product";

  return (
    <section className="w-full bg-white px-4 py-10 md:px-8 md:py-12">
      <div className="mx-auto max-w-[1320px]">
        {/* Main Outer Container with Figma Radius & Border */}
        <div className="relative w-full overflow-hidden rounded-[32px] border border-neutral-900 bg-black px-6 py-14 text-white shadow-2xl sm:rounded-[40px] sm:px-12 sm:py-16 md:rounded-[48px] md:px-16 md:py-20 lg:px-20">
          {/* Background Glow & Filament Mesh (From Figma Layer: 'glowing-filament-ignites-inspiration') */}
          <div className="pointer-events-none absolute inset-0 z-0 select-none">
            <Image
              src={bgImageSrc}
              alt="Background Mesh Glow"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10">
            {/* Header Block */}
            <div className="mb-12 flex flex-col items-center text-center sm:mb-16 md:mb-20">
              {/* Figma Eyebrow Badge Pill */}
              {eyebrow && (
                <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-sm sm:mb-8 sm:border-b-4 sm:text-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                  {eyebrow}
                </div>
              )}

              {/* Title */}
              <h2 className="text-3xl leading-[1.15] font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px]">
                AI Financial Assistance Agent
              </h2>
            </div>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
              {/* Left Column: Descriptive Content */}
              <div className="space-y-6 text-left sm:space-y-8 lg:col-span-5">
                <p className="text-base leading-[1.65] font-normal text-neutral-100 sm:text-lg md:text-[18px]">
                  “<strong className="font-bold text-white">Vani Sahay</strong>{" "}
                  is an AI-powered financial assistance agent that helps users
                  identify potential fraud, understand financial risks, resolve
                  payment-related concerns, and access the right support-
                  through simple, multilingual conversations.”
                </p>

                <p className="text-xs leading-[1.7] text-neutral-400 sm:text-sm md:text-[15px]">
                  From suspicious messages to payment concerns, Vani Sahay helps
                  users understand financial risks and take the right next step
                  through simple, conversational guidance.
                </p>
              </div>

              {/* Right Column: Layered Chat Window & Floating Cards */}
              <div className="flex items-center justify-center lg:col-span-7 lg:justify-end">
                <div className="relative w-full max-w-[580px]">
                  {/* 1. Main Chat Interface Container */}
                  <div className="relative aspect-[540/460] w-full overflow-hidden rounded-[24px] shadow-2xl sm:rounded-[30px]">
                    <Image
                      src={containerImageSrc}
                      alt="Vani Sahay Chat Container"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  {/* 2. Top-Left Floating Card: Phishing Risk Detected */}
                  <div className="pointer-events-none absolute top-[18%] -left-[6%] z-20 aspect-[220/80] w-[44%] drop-shadow-[0_16px_32px_rgba(0,0,0,0.45)] select-none sm:-left-[10%] sm:w-[46%] md:-left-[12%]">
                    <Image
                      src={phishingCardSrc}
                      alt="Phishing Risk Detected Card"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  {/* 3. Bottom-Right Floating Card: Auto-translating */}
                  <div className="pointer-events-none absolute -right-[4%] bottom-[14%] z-20 aspect-[200/80] w-[40%] drop-shadow-[0_16px_32px_rgba(0,0,0,0.45)] select-none sm:-right-[8%] sm:w-[42%] md:-right-[10%]">
                    <Image
                      src={autoTranslateCardSrc}
                      alt="Auto-translating Card"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

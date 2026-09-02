"use client";

import React from "react";
import Image from "next/image";

interface VaniSahayAboutProductProps {
  bgImageSrc?: string;
  containerImageSrc?: string;
  phishingCardSrc?: string;
  autoTranslateCardSrc?: string;
}

export default function VaniSahayAboutProductSection({
  bgImageSrc = "/images/vani-about-bg.svg",
  containerImageSrc = "/images/vani-chat-container.svg",
  phishingCardSrc = "/images/phishing-risk-card.svg",
  autoTranslateCardSrc = "/images/auto-translate-card.svg",
}: VaniSahayAboutProductProps) {
  const eyebrow = "About Product";

  return (
    <section className="w-full bg-white py-10 md:py-12 px-4 md:px-8 ">
      <div className="mx-auto max-w-[1320px]">
        {/* Main Outer Container with Figma Radius & Border */}
        <div className="relative w-full rounded-[32px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden bg-black text-white px-6 sm:px-12 md:px-16 lg:px-20 py-14 sm:py-16 md:py-20 border border-neutral-900 shadow-2xl">
          
          {/* Background Glow & Filament Mesh (From Figma Layer: 'glowing-filament-ignites-inspiration') */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
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
            <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">
              {/* Figma Eyebrow Badge Pill */}
              {eyebrow && (
                  <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-sm sm:mb-8 sm:border-b-4 sm:text-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                    {eyebrow}
                  </div>
                )}

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-white leading-[1.15]">
                AI Financial Assistance Agent
              </h2>
            </div>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
              
              {/* Left Column: Descriptive Content */}
              <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-left">
                <p className="text-base sm:text-lg md:text-[18px] leading-[1.65] text-neutral-100 font-normal">
                  “<strong className="text-white font-bold">Vani Sahay</strong> is an AI-powered financial assistance agent that helps users identify potential fraud, understand financial risks, resolve payment-related concerns, and access the right support- through simple, multilingual conversations.”
                </p>

                <p className="text-xs sm:text-sm md:text-[15px] leading-[1.7] text-neutral-400">
                  From suspicious messages to payment concerns, Vani Sahay helps users understand financial risks and take the right next step through simple, conversational guidance.
                </p>
              </div>

              {/* Right Column: Layered Chat Window & Floating Cards */}
              <div className="lg:col-span-7 flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[580px]">
                  
                  {/* 1. Main Chat Interface Container */}
                  <div className="relative w-full aspect-[540/460] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-2xl">
                    <Image
                      src={containerImageSrc}
                      alt="Vani Sahay Chat Container"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  {/* 2. Top-Left Floating Card: Phishing Risk Detected */}
                  <div className="absolute top-[18%] -left-[6%] sm:-left-[10%] md:-left-[12%] w-[44%] sm:w-[46%] aspect-[220/80] z-20 select-none pointer-events-none drop-shadow-[0_16px_32px_rgba(0,0,0,0.45)]">
                    <Image
                      src={phishingCardSrc}
                      alt="Phishing Risk Detected Card"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  {/* 3. Bottom-Right Floating Card: Auto-translating */}
                  <div className="absolute bottom-[14%] -right-[4%] sm:-right-[8%] md:-right-[10%] w-[40%] sm:w-[42%] aspect-[200/80] z-20 select-none pointer-events-none drop-shadow-[0_16px_32px_rgba(0,0,0,0.45)]">
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
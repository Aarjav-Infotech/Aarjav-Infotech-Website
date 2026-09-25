"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { asset } from "@/lib/cdn";

interface HeeraOneAboutSectionProps {
  eyebrow?: string;
  bgImageSrc?: string;
  laptopImageSrc?: string;
  stockCardImageSrc?: string;
  updateCardImageSrc?: string;
}

export function HeeraOneAboutSection({
  eyebrow = "About Product",
  bgImageSrc = asset("/images/product-background.svg"),
  laptopImageSrc = asset("/images/leptop-image.svg"),
  stockCardImageSrc,
  updateCardImageSrc,
}: HeeraOneAboutSectionProps) {
  return (
    <section className="relative w-full bg-white px-3 py-6 sm:px-6 sm:py-10 md:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Card with Curved Borders */}
        <div className="relative overflow-hidden rounded-[24px] px-4 pt-8 pb-10 sm:rounded-[32px] sm:px-8 sm:pt-12 sm:pb-14 md:px-12 lg:rounded-[40px] lg:px-16 lg:pt-16 lg:pb-24">
          {/* Background Ambient Graphic */}
          <div className="pointer-events-none absolute inset-0 z-0">
            {bgImageSrc && (
              <Image
                src={bgImageSrc}
                alt="Diamond Business Environment"
                fill
                unoptimized
                priority
                className="object-cover object-center"
              />
            )}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="relative z-10 mx-auto w-full">
            {/* Header / Pill Badge */}
            <div className="mb-8 flex flex-col items-center text-center sm:mb-12">
              {eyebrow && (
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-sm sm:mb-6 sm:border-b-4 sm:text-base">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                  {eyebrow}
                </div>
              )}

              <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-tight">
                Diamond business management platform
              </h2>
            </div>

            {/* Split Content: Descriptions on Left, Laptop on Right */}
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
              {/* Left Column Text */}
              <div className="space-y-4 text-left lg:col-span-5 lg:space-y-6">
                <p className="text-sm leading-relaxed font-medium text-[#D6DCE7] sm:text-base md:text-lg lg:text-[20px] xl:text-[22px]">
                  It is an AI-powered Platform to manage purchasing, assortment,
                  manufacturing, inventory, sales, finance, and daily operations
                  from one powerful platform built specifically for the diamond
                  industry with AI assistance to help your team find information
                  and make faster decisions.
                </p>

                <p className="text-sm leading-relaxed font-medium text-[#D6DCE7] sm:text-base md:text-lg lg:text-[20px] xl:text-[22px]">
                  End-to-end management for the modern diamond trade. From
                  purchase to manufacturing, assortment to sales, powered by
                  intelligent analytics and seamless workflows.
                </p>
              </div>

              {/* Right Column: Laptop with Floating Cards */}
              <div className="relative mt-4 flex items-center justify-center lg:col-span-7 lg:mt-0">
                <div className="relative w-full max-w-[580px] px-2 py-4 sm:px-6 sm:py-6 lg:max-w-none">
                  {/* Top Right: Total Stock Card */}
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-1 right-2 z-20 transform-gpu sm:-top-3 sm:right-4 md:-top-4 md:right-8"
                  >
                    {stockCardImageSrc ? (
                      <div className="relative h-12 w-32 drop-shadow-2xl sm:h-14 sm:w-36">
                        <Image
                          src={stockCardImageSrc}
                          alt="Total Stock Card"
                          fill
                          unoptimized
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="rounded-[14px] border border-slate-100/90 bg-white/95 px-3.5 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:rounded-[18px] sm:px-5 sm:py-3">
                        <span className="block text-[10px] font-semibold text-slate-500 sm:text-[11px]">
                          Total Stock (Carats)
                        </span>
                        <span className="mt-0.5 block text-base font-bold tracking-tight text-slate-900 sm:text-xl">
                          12,486
                        </span>
                      </div>
                    )}
                  </motion.div>

                  {/* Center Laptop Visual */}
                  <div className="relative mx-auto flex w-full items-center justify-center">
                    <Image
                      src={laptopImageSrc}
                      alt="Diamond Management Platform on Laptop"
                      width={700}
                      height={440}
                      unoptimized
                      priority
                      className="h-auto w-full object-contain drop-shadow-[0_16px_35px_rgba(0,0,0,0.5)] sm:drop-shadow-[0_24px_50px_rgba(0,0,0,0.8)]"
                    />
                  </div>

                  {/* Bottom Left: Inventory Updated Badge */}
                  <motion.div
                    animate={{ y: [3, -3, 3] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className="absolute -bottom-2 left-2 z-20 transform-gpu sm:-bottom-4 sm:left-4 md:-bottom-5 md:left-8"
                  >
                    {updateCardImageSrc ? (
                      <div className="relative h-10 w-40 drop-shadow-2xl sm:h-12 sm:w-48">
                        <Image
                          src={updateCardImageSrc}
                          alt="Inventory Updated Card"
                          fill
                          unoptimized
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 rounded-[14px] border border-slate-100/90 bg-white/95 px-3 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:gap-3 sm:rounded-[20px] sm:px-4 sm:py-3">
                        <CheckCircle2 className="size-4 shrink-0 text-[#10B981] sm:size-5" />
                        <div>
                          <p className="text-[11px] leading-tight font-bold text-slate-900 sm:text-xs">
                            Inventory Updated
                          </p>
                          <p className="mt-0.5 text-[9px] leading-tight font-medium text-slate-500 sm:text-[10px]">
                            +128 Diamonds Added
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeeraOneAboutSection;

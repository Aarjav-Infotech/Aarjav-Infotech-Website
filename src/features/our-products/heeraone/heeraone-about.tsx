"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface HeeraOneAboutSectionProps {
  bgImageSrc?: string;
  laptopImageSrc?: string;
  stockCardImageSrc?: string;
  updateCardImageSrc?: string;
}

export function HeeraOneAboutSection({
  bgImageSrc = "/images/product-background.svg",
  laptopImageSrc = "/images/leptop-image.svg",
  stockCardImageSrc,
  updateCardImageSrc,
}: HeeraOneAboutSectionProps) {
  return (
    <section className="relative w-full bg-white px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        {/* Main Card with Curved Borders */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#05070B] px-6 pt-10 pb-12 sm:px-10 sm:pt-14 sm:pb-16 md:px-14 lg:rounded-[40px] lg:pt-16 lg:pb-16">
          {/* Background Ambient Dark Office Graphic */}
          <div className="pointer-events-none absolute inset-0 z-0">
            {bgImageSrc && (
              <Image
                src={bgImageSrc}
                alt="Diamond Business Environment"
                fill
                priority
                className="object-cover object-center opacity-30 mix-blend-screen"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/80 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl">
            {/* Header / Pill Badge */}
            <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/40 bg-white px-4 py-1 text-xs font-semibold text-[#0053FA] shadow-sm">
                <span className="size-1.5 rounded-full bg-[#0053FA]" />
                About Product
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-tight">
                Diamond business management platform
              </h2>
            </div>

            {/* Split Content: Descriptions on Left, Laptop on Right overlapping bottom */}
            <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-8">
              {/* Left Column Text */}
              <div className="space-y-6 pb-4 text-left lg:col-span-5 lg:pb-10">
                <p className="text-sm leading-relaxed font-normal text-[#D6DCE7] sm:text-[15px] sm:leading-[1.7]">
                  It is an AI-powered Platform to manage purchasing, assortment,
                  manufacturing, inventory, sales, finance, and daily operations
                  from one powerful platform built specifically for the diamond
                  industry with AI assistance to help your team find information
                  and make faster decisions.
                </p>

                <p className="text-xs leading-relaxed font-normal text-[#8B98AD] sm:text-[13.5px] sm:leading-[1.7]">
                  End-to-end management for the modern diamond trade. From
                  purchase to manufacturing, assortment to sales, powered by
                  intelligent analytics and seamless workflows.
                </p>
              </div>

              {/* Right Column: Larger Laptop with Pixel-Matched Floating Cards */}
              <div className="relative flex items-end justify-center lg:col-span-7">
                <div className="relative w-full max-w-[620px] lg:max-w-none">
                  {/* Top Right: Total Stock Card */}
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-10 right-2 z-20 sm:-top-12 sm:right-4 md:-top-14 md:right-6"
                  >
                    {stockCardImageSrc ? (
                      <div className="relative h-14 w-36 drop-shadow-2xl">
                        <Image
                          src={stockCardImageSrc}
                          alt="Total Stock Card"
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="rounded-[18px] border border-slate-100 bg-white px-5 py-3 shadow-[0_16px_35px_rgba(0,0,0,0.45)]">
                        <span className="block text-[11px] font-semibold text-slate-500">
                          Total Stock (Carats)
                        </span>
                        <span className="mt-0.5 block text-xl font-bold tracking-tight text-slate-900">
                          12,486
                        </span>
                      </div>
                    )}
                  </motion.div>

                  {/* Center Laptop Visual (Grounded to Bottom Edge) */}
                  <div className="relative mx-auto flex w-full items-end justify-center pt-6 sm:pt-8">
                    <Image
                      src={laptopImageSrc}
                      alt="Diamond Management Platform on Laptop"
                      width={700}
                      height={440}
                      priority
                      className="h-auto w-full object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.9)]"
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
                    className="absolute -bottom-4 left-0 z-20 sm:-bottom-5 sm:left-4 md:-bottom-6 md:left-8"
                  >
                    {updateCardImageSrc ? (
                      <div className="relative h-12 w-48 drop-shadow-2xl">
                        <Image
                          src={updateCardImageSrc}
                          alt="Inventory Updated Card"
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center gap-3 rounded-[20px] border border-slate-100 bg-white px-4 py-3 shadow-[0_16px_35px_rgba(0,0,0,0.45)]">
                        <CheckCircle2 className="size-5 text-[#10B981]" />
                        <div>
                          <p className="text-xs leading-tight font-bold text-slate-900">
                            Inventory Updated
                          </p>
                          <p className="mt-0.5 text-[10px] leading-tight font-medium text-slate-500">
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

"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function HowDhvaneeWorksSection() {
  const eyebrow = "The process we follow";

  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "User shares query or suspicious message",
    },
    {
      num: "02",
      title: "Identify",
      desc: "AI analyzes intent and risk level",
    },
    {
      num: "03",
      title: "Guide",
      desc: "Provides clear, localized instructions",
    },
    {
      num: "04",
      title: "Take Action",
      desc: "Suggests immediate protective steps",
    },
    {
      num: "05",
      title: "Escalate",
      desc: "Connects to human agents if needed",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const, // Fixed with "as const" to satisfy strict Framer Motion types
        stiffness: 120,
        damping: 14,
      },
    },
  };

  return (
    <section className="w-full bg-white px-4 py-10 font-sans sm:px-6 sm:py-14 md:px-8 md:py-16">
      <div className="mx-auto">
        {/* Main Card Container with subtle outer gradient */}
        <div className="relative w-full overflow-hidden rounded-[28px] border border-blue-100/60 bg-gradient-to-b from-[#EFF5FF] via-[#F4F8FF] to-[#E9F1FE] px-5 py-12 shadow-xs sm:rounded-[36px] sm:px-10 sm:py-16 md:rounded-[44px] md:px-14 md:py-20 lg:px-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 flex flex-col items-center text-center sm:mb-16 md:mb-20"
          >
            {eyebrow && (
              <div className="text-basic mb-4 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 font-bold text-[#2b2bad] shadow-xs sm:mb-6 sm:border-b-4 sm:text-lg">
                <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
                {eyebrow}
              </div>
            )}

            <h2 className="mb-3 text-3xl font-bold tracking-tight text-neutral-950 sm:mb-4 sm:text-4xl md:text-5xl lg:text-[46px]">
              How dhvanee Works
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-sm md:text-[15px]">
              A seamless workflow turning complex situations into clear,
              actionable guidance.
            </p>
          </motion.div>

          {/* 5-Step Process Horizontal Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative mb-14 sm:mb-16 md:mb-20"
          >
            {/* Dashed Connector Line (Desktop) */}
            <div className="pointer-events-none absolute top-7 right-[10%] left-[10%] z-0 hidden h-[3px] border-t-2 border-dashed border-[#023EBA] lg:block" />

            <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={stepVariants}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  className="group flex cursor-pointer flex-col items-center text-center"
                >
                  {/* Step Number Square with a bouncy rotation effect on hover */}
                  <motion.div
                    whileHover={{ rotate: [0, -6, 6, 0] }}
                    transition={{ duration: 0.4 }}
                    className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-[32px] font-bold text-white shadow-lg"
                  >
                    {step.num}
                  </motion.div>

                  {/* Title & Desc */}
                  <h3 className="mb-1.5 text-base leading-snug font-bold text-neutral-950 sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="max-w-[190px] text-sm leading-relaxed text-neutral-600 sm:text-[13px]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Case Study Card (White Box with 2 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-[980px] rounded-[24px] border border-neutral-100 bg-[#F7F9FC] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:rounded-[32px] sm:p-8 md:p-10"
          >
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
              {/* Left Column: Case Narrative & Points */}
              <div className="space-y-4 text-left lg:col-span-6">
                {/* Pill */}
                <div className="inline-flex items-center rounded-full bg-[#EBF2FF] px-2.5 py-1 text-[11px] font-bold tracking-wider text-[#0042E6] uppercase">
                  Case Study
                </div>

                <h3 className="text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl">
                  Stopping a UPI Fraud Attempt
                </h3>

                <p className="text-sm leading-relaxed text-neutral-600 sm:text-sm">
                  A user receives a payment request disguised as a refund. Vani
                  Sahay instantly identifies the deceptive intent and prevents
                  the user from entering their PIN.
                </p>

                {/* Bullet List */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0042E6]" />
                    <span className="text-sm leading-tight font-medium text-neutral-700 sm:text-[13px]">
                      Detected malicious &quot;Refund&quot; keyword in receive
                      request
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0042E6]" />
                    <span className="text-sm leading-tight font-medium text-neutral-700 sm:text-[13px]">
                      Warned user in their native language
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0042E6]" />
                    <span className="text-sm leading-tight font-medium text-neutral-700 sm:text-[13px]">
                      Provided immediate action to block the sender
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Chat Warning Frame */}
              <div className="lg:col-span-6">
                <div className="space-y-3.5 rounded-[20px] border border-neutral-200/70 bg-[#ffffff] p-5 shadow-sm sm:p-6">
                  {/* User Question Bubble */}
                  <div className="flex justify-end">
                    <div className="max-w-[92%] rounded-2xl rounded-tr-xs bg-black px-4 py-3 text-sm leading-relaxed font-normal text-white shadow-sm sm:text-[12.5px]">
                      &quot;I got a notification saying I need to enter my UPI
                      PIN to receive my 500 Rs refund. Should I do it?&quot;
                    </div>
                  </div>

                  {/* AI Warning Response Bubble with Red Edge Indicator */}
                  <div className="flex justify-start">
                    <div className="relative max-w-[96%] space-y-1.5 rounded-2xl rounded-tl-xs border-l-[3.5px] border-l-[#D92D20] bg-[#DDE6F1] p-4 text-sm text-neutral-900 shadow-2xs sm:p-4.5">
                      <div className="text-sm font-bold text-[#D92D20] sm:text-[13px]">
                        STOP! Do not enter your PIN.
                      </div>
                      <p className="text-[11px] leading-relaxed text-neutral-700 sm:text-sm">
                        You NEVER need to enter your UPI PIN to receive money.
                        Entering your PIN will send money from your account.
                        Please decline this request immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

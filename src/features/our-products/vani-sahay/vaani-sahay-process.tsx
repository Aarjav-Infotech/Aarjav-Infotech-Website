"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function HowVaniSahayWorksSection() {
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

  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 font-sans">
      <div className="mx-auto max-w-[1320px]">
        {/* Main Card Container with subtle outer gradient */}
        <div className="relative w-full rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-gradient-to-b from-[#EFF5FF] via-[#F4F8FF] to-[#E9F1FE] px-5 sm:px-10 md:px-14 lg:px-16 py-12 sm:py-16 md:py-20 border border-blue-100/60 shadow-xs">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">
            {eyebrow && (
              <div className="text-basic mb-4 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 font-bold text-[#2b2bad] shadow-xs sm:mb-6 sm:border-b-4 sm:text-[14px]">
                <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
                {eyebrow}
              </div>
            )}

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-neutral-950 mb-3 sm:mb-4">
              How Vani Sahay Works
            </h2>

            <p className="text-neutral-600 text-sm sm:text-sm md:text-[15px] max-w-2xl mx-auto leading-relaxed">
              A seamless workflow turning complex situations into clear, actionable guidance.
            </p>
          </div>

          {/* 5-Step Process Horizontal Timeline */}
          <div className="relative mb-14 sm:mb-16 md:mb-20">
            {/* Dashed Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-[3px] border-t-2 border-dashed border-[#023EBA] z-0 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:0 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Step Number Square */}
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-[18px] text-white text-[32px] font-bold bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] mb-4 transition-transform duration-300 group-hover:scale-105">
                    {step.num}
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-[13px] text-neutral-600 leading-relaxed max-w-[190px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Card (White Box with 2 Columns) */}
          <div className="mx-auto max-w-[980px] rounded-[24px] sm:rounded-[32px] bg-white p-6 sm:p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-neutral-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Case Narrative & Points */}
              <div className="lg:col-span-6 space-y-4 text-left">
                {/* Pill */}
                <div className="inline-flex items-center rounded-md bg-[#EBF2FF] px-2.5 py-1 text-[11px] font-bold text-[#0042E6] uppercase tracking-wider">
                  Case Study
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
                  Stopping a UPI Fraud Attempt
                </h3>

                <p className="text-sm sm:text-sm text-neutral-600 leading-relaxed">
                  A user receives a payment request disguised as a refund. Vani Sahay instantly identifies the deceptive intent and prevents the user from entering their PIN.
                </p>

                {/* Bullet List */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0042E6] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-[13px] text-neutral-700 font-medium leading-tight">
                      Detected malicious "Refund" keyword in receive request
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0042E6] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-[13px] text-neutral-700 font-medium leading-tight">
                      Warned user in their native language
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0042E6] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-[13px] text-neutral-700 font-medium leading-tight">
                      Provided immediate action to block the sender
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Chat Warning Frame */}
              <div className="lg:col-span-6">
                <div className="rounded-[20px] bg-[#F7F9FC] border border-neutral-200/70 p-5 sm:p-6 space-y-3.5">
                  
                  {/* User Question Bubble */}
                  <div className="flex justify-end">
                    <div className="max-w-[92%] rounded-2xl rounded-tr-xs bg-black text-white px-4 py-3 text-sm sm:text-[12.5px] leading-relaxed shadow-sm font-normal">
                      "I got a notification saying I need to enter my UPI PIN to receive my 500 Rs refund. Should I do it?"
                    </div>
                  </div>

                  {/* AI Warning Response Bubble with Red Edge Indicator */}
                  <div className="flex justify-start">
                    <div className="relative max-w-[96%] rounded-2xl rounded-tl-xs bg-[#DDE6F1] border-l-[3.5px] border-l-[#D92D20] p-4 sm:p-4.5 text-sm text-neutral-900 shadow-2xs space-y-1.5">
                      <div className="font-bold text-[#D92D20] text-sm sm:text-[13px]">
                        STOP! Do not enter your PIN.
                      </div>
                      <p className="text-neutral-700 text-[11px] sm:text-sm leading-relaxed">
                        You NEVER need to enter your UPI PIN to receive money. Entering your PIN will send money from your account. Please decline this request immediately.
                      </p>
                    </div>
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
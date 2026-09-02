"use client";

import React from "react";
import Image from "next/image";

interface AssistanceCard {
  iconSrc: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  colSpan?: string;
  imagePosition?: "right" | "bottom-right" | "right-wide";
}

const assistanceCards: AssistanceCard[] = [
  {
    iconSrc: "/icons/shield-alert.svg",
    title: "Fraud & Scam Assistance",
    description:
      "Real-time detection and guidance against phishing links, suspicious UPI requests, and social engineering scams.",
    imageSrc: "/images/vaani-sahay/fraud-scam.png",
    imageAlt: "Fraud and Scam Shield Visualization",
    colSpan: "lg:col-span-6",
    imagePosition: "right",
  },
  {
    iconSrc: "/icons/credit-card.svg",
    title: "Transaction Support",
    description:
      "Step-by-step help for complex digital payments and understanding transaction statuses.",
    imageSrc: "/images/vaani-sahay/transaction-support.png",
    imageAlt: "Digital Payment and Card Status",
    colSpan: "lg:col-span-6",
    imagePosition: "bottom-right",
  },
  {
    iconSrc: "/icons/lightbulb.svg",
    title: "Financial Awareness",
    description:
      "Educating users on safe digital banking practices and identifying common financial risks.",
    imageSrc: "/images/vaani-sahay/financial-awareness.png",
    imageAlt: "Financial Growth and Literacy Chart",
    colSpan: "lg:col-span-5",
    imagePosition: "bottom-right",
  },
  {
    iconSrc: "/icons/headphones.svg",
    title: "Guided Assistance & Escalation",
    description:
      "Interactive workflows that help users report issues and seamlessly escalate to human agents when necessary.",
    imageSrc: "/images/vaani-sahay/guided-assistance.png",
    imageAlt: "Interactive Support Escalation Flow",
    colSpan: "lg:col-span-7",
    imagePosition: "right",
  },
  {
    iconSrc: "/icons/languages.svg",
    title: "Multilingual AI",
    description:
      "Communicate naturally in over 12 Indian languages, breaking down language barriers for financial safety across the nation.",
    imageSrc: "/images/vaani-sahay/multilingual-globe.png",
    imageAlt: "Multilingual AI Supported Languages Globe",
    colSpan: "lg:col-span-12",
    imagePosition: "right-wide",
  },
];

export function ComprehensiveAssistanceSection() {
  return (
    <section className="relative w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#002688] shadow-xs sm:border-b-4 sm:text-[13px]">
            <span className="size-1.5 rounded-full bg-[#002688]" />
            AI Assistance
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-950 sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.18]">
            Comprehensive AI Financial Assistance
          </h2>

          <p className="mt-3 max-w-[580px] text-xs leading-relaxed text-neutral-500 sm:mt-4 sm:text-sm md:text-base">
            Intelligent capabilities designed to protect, guide, and empower
            users in their digital financial journey.
          </p>
        </div>

        {/* 5-Card Bento Grid */}
        <div className="grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-12">
          {assistanceCards.map((card, idx) => (
            <div
              key={idx}
              className={`group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[24px] border border-[#E0E3E5] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] sm:min-h-[280px] sm:p-8 ${
                card.colSpan || "lg:col-span-6"
              }`}
            >
              {/* Left Column: Icon & Typography */}
              <div className="relative z-10 max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
                {/* Blue Icon Capsule */}
                <div className="mb-4 flex size-10 items-center justify-center rounded-[12px] bg-[#002688] shadow-[0_4px_12px_rgba(0,38,136,0.3)] transition-transform duration-300 group-hover:scale-105 sm:mb-5 sm:size-11">
                  <Image
                    src={card.iconSrc}
                    alt={card.title}
                    width={22}
                    height={22}
                    className="brightness-0 invert"
                  />
                </div>

                <h3 className="text-lg font-bold tracking-tight text-neutral-950 sm:text-xl md:text-[22px]">
                  {card.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                  {card.description}
                </p>
              </div>

              {/* Right Side / Background 3D Graphic */}
              <div
                className={`pointer-events-none absolute transition-transform duration-500 ease-out group-hover:scale-105 ${
                  card.imagePosition === "bottom-right"
                    ? "right-0 bottom-0 h-[65%] w-[45%] max-w-[220px]"
                    : card.imagePosition === "right-wide"
                      ? "top-1/2 right-4 h-[90%] w-[50%] max-w-[420px] -translate-y-1/2 md:right-8"
                      : "top-1/2 right-2 h-[80%] w-[45%] max-w-[240px] -translate-y-1/2 sm:right-4"
                }`}
              >
                <div className="relative size-full">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 35vw, 400px"
                    className="object-contain object-right"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
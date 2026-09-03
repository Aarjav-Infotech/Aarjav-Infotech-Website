"use client";

import React from "react";
import Image from "next/image";

interface AssistanceCard {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  imageSrc: string;
  imageAlt: string;
  colSpan: string;
  mobileWrapperClass: string;
  desktopWrapperClass: string;
  imgClass: string;
}

const assistanceCards: AssistanceCard[] = [
  {
    title: "Fraud & Scam Assistance",
    description:
      "Real-time detection, alerts, and guidance to protect you from fraud and scams.",
    iconSrc: "/images/assistances-1p.svg",
    iconAlt: "Fraud and Scam Shield Icon",
    imageSrc: "/images/feacture-1.svg",
    imageAlt: "Fraud and Scam Shield Visualization",
    colSpan: "lg:col-span-7",
    mobileWrapperClass: "right-0 bottom-3 h-[58%] w-[48%] max-w-[170px]",
    desktopWrapperClass:
      "lg:top-1/2 lg:-translate-y-1/2 lg:right-6 lg:bottom-auto lg:h-[80%] lg:w-[48%] lg:max-w-[270px]",
    imgClass: "object-contain object-right-bottom lg:object-right",
  },
  {
    title: "Transaction Support",
    description:
      "Get help with your transactions, failed payments, refunds, and more.",
    iconSrc: "/images/assistances-2.svg",
    iconAlt: "Transaction Support Icon",
    imageSrc: "/images/feacture-2.svg",
    imageAlt: "Digital Payment and Card Status",
    colSpan: "lg:col-span-5",
    mobileWrapperClass: "right-0 bottom-0 h-[62%] w-[52%] max-w-[190px]",
    desktopWrapperClass:
      "lg:right-2 lg:bottom-0 lg:h-[76%] lg:w-[50%] lg:max-w-[240px]",
    imgClass: "object-contain object-right-bottom",
  },
  {
    title: "Financial Awareness",
    description:
      "Learn, plan, and make smarter financial decisions with AI insights.",
    iconSrc: "/images/assistances-3.svg",
    iconAlt: "Financial Awareness Icon",
    imageSrc: "/images/feacture-3.svg",
    imageAlt: "Financial Growth and Literacy Chart",
    colSpan: "lg:col-span-5",
    mobileWrapperClass: "right-0 bottom-0 h-[56%] w-[50%] max-w-[180px]",
    desktopWrapperClass:
      "lg:right-4 lg:bottom-0 lg:h-[68%] lg:w-[48%] lg:max-w-[220px]",
    imgClass: "object-contain object-right-bottom",
  },
  {
    title: "Guided Assistance & Escalation",
    description:
      "Step-by-step assistance and easy escalation to human experts when needed.",
    iconSrc: "/images/assistances-4.svg",
    iconAlt: "Guided Assistance & Escalation Icon",
    imageSrc: "/images/feacture-4.svg",
    imageAlt: "Interactive Support Escalation Flow",
    colSpan: "lg:col-span-7",
    mobileWrapperClass: "right-0 bottom-2 h-[54%] w-[50%] max-w-[190px]",
    desktopWrapperClass:
      "lg:top-1/2 lg:-translate-y-1/2 lg:right-6 lg:bottom-auto lg:h-[82%] lg:w-[48%] lg:max-w-[300px]",
    imgClass: "object-contain object-right-bottom lg:object-right",
  },
  {
    title: "Multilingual AI",
    description:
      "Communicate in your preferred language. Vani Sahay speaks multiple languages fluently.",
    iconSrc: "/images/assistances-5.svg",
    iconAlt: "Multilingual AI Icon",
    imageSrc: "/images/feacture-5.svg",
    imageAlt: "Multilingual AI Supported Languages Globe",
    colSpan: "lg:col-span-12",
    mobileWrapperClass:
      "left-1/2 -translate-x-1/2 bottom-0 h-[175px] w-full max-w-[290px]",
    desktopWrapperClass:
      "lg:left-auto lg:translate-x-0 lg:top-1/2 lg:-translate-y-1/2 lg:right-8 lg:bottom-auto lg:h-[90%] lg:w-[52%] lg:max-w-[500px]",
    imgClass: "object-contain object-bottom lg:object-right",
  },
];

export function ComprehensiveAssistanceSection() {
  return (
    <section className="relative w-full bg-white px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mx-auto mb-8 flex max-w-2xl flex-col items-center text-center sm:mb-12 md:mb-14">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/70 px-3.5 py-1 text-base font-semibold text-[#0053FA] sm:mb-4 sm:text-base">
            <span className="size-1.5 rounded-full bg-[#0053FA]" />
            All-in-one Support
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.18]">
            Comprehensive AI Financial Assistance
          </h2>

          <p className="mt-2.5 max-w-[520px] text-base leading-relaxed text-slate-500 sm:mt-4 sm:text-base md:text-base">
            Intelligent support for every financial need, all in one secure
            place.
          </p>
        </div>

        {/* 5-Card Bento Grid */}
        <div className="flex flex-col gap-4 sm:gap-5 lg:grid lg:grid-cols-12 lg:gap-6">
          {assistanceCards.map((card, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col justify-start overflow-hidden rounded-[24px] border border-slate-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] sm:p-7 md:p-8 ${
                idx === 4
                  ? "min-h-[310px] sm:min-h-[330px] lg:min-h-[290px]"
                  : "min-h-[210px] sm:min-h-[240px] lg:min-h-[290px]"
              } ${card.colSpan}`}
            >
              {/* Left Side: Content & Interactive Text */}
              <div
                className={`relative z-10 w-full text-left ${
                  idx === 4
                    ? "max-w-full sm:max-w-[420px] lg:max-w-[380px]"
                    : "max-w-[62%] sm:max-w-[55%] md:max-w-[50%] lg:max-w-[340px]"
                }`}
              >
                {/* Blue Icon Capsule */}
                <div className="mb-3.5 flex size-10 items-center justify-center rounded-[14px] bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-white shadow-[0_6px_16px_rgba(0,83,250,0.3)] transition-transform duration-300 group-hover:scale-105 sm:mb-5 sm:size-11 md:size-12 md:rounded-2xl">
                  <Image
                    src={card.iconSrc}
                    alt={card.iconAlt}
                    width={22}
                    height={22}
                    className="size-5 object-contain brightness-0 invert sm:size-5.5 md:size-6"
                  />
                </div>

                <h3 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg md:text-xl lg:text-[22px]">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-base leading-relaxed text-slate-500 sm:mt-2 sm:text-base">
                  {card.description}
                </p>
              </div>

              {/* Responsive Graphic Placement */}
              <div
                className={`pointer-events-none absolute z-0 transition-transform duration-300 group-hover:scale-[1.02] ${card.mobileWrapperClass} ${card.desktopWrapperClass}`}
              >
                <div className="relative size-full">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    priority={idx < 2}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 500px"
                    className={card.imgClass}
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

export default ComprehensiveAssistanceSection;

"use client";

import React from "react";
import Image from "next/image";

interface SecurityFeature {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

const securityFeaturesRow1: SecurityFeature[] = [
  {
    title: "Secure Conversations",
    description:
      "End-to-end encryption for all chat data. Personally Identifiable Information (PII) is automatically redacted before AI processing.",
    iconSrc: "/images/security-icons-1.svg",
    iconAlt: "Secure Conversations Lock Icon",
  },
  {
    title: "Responsible AI",
    description:
      "Strict adherence to financial advisory guidelines. The AI is constrained to provide support and education, not financial advice.",
    iconSrc: "/images/security-icons-2.svg",
    iconAlt: "Responsible AI Icon",
  },
  {
    title: "Human-in-the-Loop",
    description:
      "Seamless handoff to human support agents when high-risk scenarios are detected or user frustration is identified.",
    iconSrc: "/images/security-icon-3.svg",
    iconAlt: "Human-in-the-Loop Support Icon",
  },
];

const securityFeaturesRow2: SecurityFeature[] = [
  {
    title: "Continuous Intelligence",
    description:
      "Regularly updated threat models informed by the latest regional fraud patterns and banking advisories.",
    iconSrc: "/images/security-icons-4.svg",
    iconAlt: "Continuous Intelligence Threat Model Icon",
  },
  {
    title: "Enterprise Integration",
    description:
      "Deployable within existing banking apps via SDKs or as a standalone WhatsApp integration. Fully compatible with major core banking and CRM systems.",
    iconSrc: "/images/security-icons-5.svg",
    iconAlt: "Enterprise Integration Code Icon",
  },
];

export function EnterpriseTrustSection() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-12 lg:px-8">
      <div className="mx-auto max-w-full">
        {/* Dark Container Wrapper */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#0D1C32] px-6 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:rounded-[40px]">
          {/* Section Header */}
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[44px] lg:leading-tight">
              Enterprise-Grade Trust &amp; Security
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-400 sm:text-sm md:text-base">
              Built on robust architectural principles to ensure every
              interaction is private, secure, and compliant.
            </p>
          </div>

          {/* Grid Container */}
          <div className="space-y-4 sm:space-y-5">
            {/* Top Row: 3 Equal Cards */}
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
              {securityFeaturesRow1.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-start overflow-hidden rounded-[24px] border border-blue-500/20 bg-[#030B21] p-6 transition-all duration-300 hover:border-blue-400/40 sm:p-8"
                >
                  {/* Top-Right Vivid Cyan/Blue Radial Glow */}
                  <div
                    className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#0057FF]/35 blur-[55px] transition-opacity duration-300 group-hover:bg-[#0066FF]/50"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 mb-6 flex size-10 items-center justify-start">
                    <Image
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      width={28}
                      height={28}
                      className="object-contain brightness-0 invert"
                    />
                  </div>

                  <h3 className="relative z-10 text-base font-semibold tracking-tight text-white sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="relative z-10 mt-2.5 text-xs leading-relaxed text-slate-400 sm:text-[13px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Row: 2 Wider Cards */}
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
              {securityFeaturesRow2.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-start overflow-hidden rounded-[24px] border border-blue-500/20 bg-[#030B21] p-6 transition-all duration-300 hover:border-blue-400/40 sm:p-8"
                >
                  {/* Top-Right Vivid Cyan/Blue Radial Glow */}
                  <div
                    className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#0057FF]/35 blur-[65px] transition-opacity duration-300 group-hover:bg-[#0066FF]/50"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 mb-6 flex size-10 items-center justify-start">
                    <Image
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      width={28}
                      height={28}
                      className="object-contain brightness-0 invert"
                    />
                  </div>

                  <h3 className="relative z-10 text-base font-semibold tracking-tight text-white sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="relative z-10 mt-2.5 text-xs leading-relaxed text-slate-400 sm:text-[13px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnterpriseTrustSection;

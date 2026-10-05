"use client";

import React from "react";
import Image from "next/image";
import { asset } from "@/lib/cdn";
import { motion } from "framer-motion";

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
    iconSrc: asset("/icons/security-icons-1.svg"),
    iconAlt: "Secure Conversations Lock Icon",
  },
  {
    title: "Responsible AI",
    description:
      "Strict adherence to financial advisory guidelines. The AI is constrained to provide support and education, not financial advice.",
    iconSrc: asset("/icons/security-icons-2.svg"),
    iconAlt: "Responsible AI Icon",
  },
  {
    title: "Human-in-the-Loop",
    description:
      "Seamless handoff to human support agents when high-risk scenarios are detected or user frustration is identified.",
    iconSrc: asset("/icons/security-icons-3.svg"),
    iconAlt: "Human-in-the-Loop Support Icon",
  },
];

const securityFeaturesRow2: SecurityFeature[] = [
  {
    title: "Continuous Intelligence",
    description:
      "Regularly updated threat models informed by the latest regional fraud patterns and banking advisories.",
    iconSrc: asset("/icons/security-icons-4.svg"),
    iconAlt: "Continuous Intelligence Threat Model Icon",
  },
  {
    title: "Enterprise Integration",
    description:
      "Deployable within existing banking apps via SDKs or as a standalone WhatsApp integration. Fully compatible with major core banking and CRM systems.",
    iconSrc: asset("/icons/security-icons-5.svg"),
    iconAlt: "Enterprise Integration Code Icon",
  },
];

// Playful stagger container
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

// Bouncy card entry & hover variants
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 14,
    },
  },
};

export function EnterpriseTrustSection() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-12 lg:px-8">
      <div className="mx-auto max-w-full">
        {/* Dark Container Wrapper */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#0D1C32] px-6 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:rounded-[40px]">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
          >
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[44px] lg:leading-tight">
              Enterprise-Grade Trust &amp; Security
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-400 sm:text-sm md:text-base">
              Built on robust architectural principles to ensure every
              interaction is private, secure, and compliant.
            </p>
          </motion.div>

          {/* Grid Container */}
          <motion.div
            className="space-y-4 sm:space-y-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Top Row: 3 Equal Cards */}
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
              {securityFeaturesRow1.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  className="group relative flex cursor-pointer flex-col justify-start overflow-hidden rounded-[24px] border border-blue-500/20 bg-[#030B21] p-6 shadow-xl transition-colors duration-300 hover:border-blue-400/50 sm:p-8"
                >
                  {/* Top-Right Vivid Cyan/Blue Radial Glow */}
                  <div
                    className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#0057FF]/35 blur-[55px] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0066FF]/60"
                    aria-hidden="true"
                  />

                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 mb-6 flex size-10 items-center justify-start"
                  >
                    <Image
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      width={28}
                      height={28}
                      className="object-contain brightness-0 invert"
                    />
                  </motion.div>

                  <h3 className="relative z-10 text-base font-semibold tracking-tight text-white sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="relative z-10 mt-2.5 text-xs leading-relaxed text-slate-400 sm:text-[13px]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row: 2 Wider Cards */}
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
              {securityFeaturesRow2.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  className="group relative flex cursor-pointer flex-col justify-start overflow-hidden rounded-[24px] border border-blue-500/20 bg-[#030B21] p-6 shadow-xl transition-colors duration-300 hover:border-blue-400/50 sm:p-8"
                >
                  {/* Top-Right Vivid Cyan/Blue Radial Glow */}
                  <div
                    className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#0057FF]/35 blur-[65px] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0066FF]/60"
                    aria-hidden="true"
                  />

                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 mb-6 flex size-10 items-center justify-start"
                  >
                    <Image
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      width={28}
                      height={28}
                      className="object-contain brightness-0 invert"
                    />
                  </motion.div>

                  <h3 className="relative z-10 text-base font-semibold tracking-tight text-white sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="relative z-10 mt-2.5 text-xs leading-relaxed text-slate-400 sm:text-[13px]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default EnterpriseTrustSection;

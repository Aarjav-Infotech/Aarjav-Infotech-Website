"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  {
    badgeGroup: "ISO",
    badgeLabel: "27001",
    title: "ISO 27001",
    desc: "Information Security Management",
  },
  {
    badgeGroup: "ISO",
    badgeLabel: "9001",
    title: "ISO 9001",
    desc: "Quality Management System",
  },
  {
    badgeGroup: "SOC 2",
    badgeLabel: "TYPE II",
    title: "SOC 2",
    desc: "Type II Certified",
  },
  {
    badgeGroup: "HIPAA",
    badgeLabel: "BAA",
    title: "HIPAA",
    desc: "Business Associate Agreement",
  },
  {
    badgeGroup: "GDPR",
    badgeLabel: "DPA",
    title: "GDPR",
    desc: "Data Protection Agreement",
  },
  {
    badgeGroup: "PCI DSS",
    badgeLabel: "V4.0",
    title: "PCI DSS",
    desc: "Payment Card Industry Data Security Standard",
  },
];

export function HomeSecurity() {
  return (
    <section className="w-full px-4 pt-16 md:px-[80px] md:pt-24">
      {/* Header */}
      <div className="mb-[40px] flex flex-col gap-4 md:mb-[40px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[12px] font-medium tracking-[0.1em] uppercase"
        >
          TRUSTED & CERTIFIED
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground font-sans text-[32px] leading-[1.2] font-medium tracking-normal md:text-[46px]"
        >
          Security. Compliance. Built In.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-auto text-[16px] leading-[1.5]"
        >
          Our processes, infrastructure, and controls are backed by
          internationally recognized certifications so you can build with
          confidence.
        </motion.p>
      </div>

      {/* Grid container */}
      <div className="flex max-w-[1280px] flex-col gap-4 md:gap-[16px]">
        {/* Top Row: Certifications */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-[16px] lg:grid-cols-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="relative flex h-[244px] flex-col items-center overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-gradient-to-b from-[#FFFFFF] to-[#DBEAFE] pt-[24px] pb-[24px] shadow-sm"
            >
              {/* Ribbon Badge */}
              <div className="relative mb-[16px] flex h-[112px] w-[96px] flex-col items-center justify-start pt-4">
                <Image
                  src="/svg/banner.svg"
                  fill
                  alt="Badge Ribbon"
                  className="pointer-events-none z-0"
                />
                <span className="relative z-10 mb-1 bg-[linear-gradient(90deg,#091E46_1%,#075FF3_100%)] bg-clip-text text-[10px] font-bold tracking-widest text-transparent uppercase">
                  AUDITED
                </span>
                <span className="relative z-10 mt-1 mb-1 text-[20px] leading-none font-bold text-blue-950">
                  {cert.badgeGroup}
                </span>
                <span className="relative z-10 mt-1 bg-[linear-gradient(90deg,#091E46_1%,#075FF3_100%)] bg-clip-text text-[12px] font-semibold text-transparent">
                  {cert.badgeLabel}
                </span>
              </div>

              <div className="flex flex-col items-center gap-[4px] px-4 text-center">
                <span className="font-sans text-[16px] leading-[24px] font-semibold text-[#0F172A]">
                  {cert.title}
                </span>
                <span className="max-w-[130px] font-sans text-[12px] leading-[19.5px] font-medium text-black/60">
                  {cert.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

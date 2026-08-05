"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface ComplianceItem {
  iconSrc: string;
}

interface HomeSecurityComplianceProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: ComplianceItem[];
  bgImage?: string;
}

const defaultCertifications: ComplianceItem[] = [
  { iconSrc: "/icons/gdpr.svg" },
  { iconSrc: "/icons/soc2.svg" },
  { iconSrc: "/icons/iso27001.svg" },
  { iconSrc: "/icons/hippa.svg" },
  { iconSrc: "/icons/pci.svg" },
  { iconSrc: "/icons/iso9001.svg" },
];

export function HomeSecurityCompliance({
  eyebrow = "TRUSTED & CERTIFIED",
  title = "Security. Compliance. Built In.",
  subtitle = "Our processes, infrastructure, and controls are backed by internationally recognized certifications so you can build with confidence.",
  items = defaultCertifications,
  bgImage = "/images/home-security-bg.svg",
}: HomeSecurityComplianceProps) {
  return (
    <section className="w-full px-0 py-10">
      {/* Outer Card */}
      <div className="relative mx-auto max-w-full overflow-hidden rounded-[40px] px-6 py-16 shadow-2xl sm:px-12 md:py-20">
        {/* Next.js Background Image Layer */}
        {bgImage && (
          <Image
            src={bgImage}
            alt="Security Background"
            fill
            priority
            quality={90}
            className="pointer-events-none object-cover object-center"
          />
        )}

        {/* Top & Bottom Slot Pill Cutouts */}
        <div className="absolute top-0 left-1/2 z-10 h-4 w-[240px] -translate-x-1/2 rounded-b-2xl bg-[#e2e8f0]/90 shadow-inner sm:w-[320px]" />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 inline-flex items-center gap-1.5 rounded bg-[#18181B] px-3.5 py-1 text-[14px] font-semibold text-[#FFFFFF] shadow-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFFFFF]" />
            {eyebrow}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[720px] text-lg leading-relaxed text-slate-300 md:text-lg"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Compliance Icons Grid */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid w-full grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group flex cursor-pointer items-center justify-center p-2 text-center"
              >
                {/* Expanded container size to 100px width/height */}
                <div className="relative flex h-[150px] w-[150px] items-center justify-center transition-all duration-300">
                  <Image
                    src={item.iconSrc}
                    alt="Compliance Icon"
                    width={100}
                    height={100}
                    className="h-full w-full object-contain opacity-90 transition-opacity group-hover:opacity-100"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
    <section className="w-full px-2 py-6 sm:px-6 sm:py-8 md:px-8 lg:py-10">
      {/* Outer Card */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] px-4 py-20 shadow-2xl sm:rounded-[36px] sm:px-8 sm:py-16 md:rounded-[40px] md:px-12 md:py-20">
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

        {/* Top Slot Pill Cutout */}
        <div className="absolute top-0 left-1/2 z-10 h-3.5 w-[180px] -translate-x-1/2 rounded-b-xl bg-[#e2e8f0]/90 shadow-inner sm:h-4 sm:w-[280px] sm:rounded-b-2xl md:w-[320px]" />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-1.5 rounded bg-[#18181B] px-3.5 py-1 text-xs font-semibold text-white shadow-md sm:mb-8 sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            {eyebrow}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-3 text-3xl font-bold tracking-tight text-white sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[720px] text-sm leading-relaxed text-slate-300 sm:text-lg"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Compliance Icons Grid: 1 column on mobile, 3 on tablet, 6 on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 grid w-full grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-8 md:mt-16 lg:grid-cols-6 lg:gap-6"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group flex cursor-pointer items-center justify-center p-1 text-center sm:p-2"
              >
                <div className="relative flex h-[110px] w-full max-w-[200px] items-center justify-center transition-all duration-300 sm:h-[150px] sm:w-[150px] lg:h-[110px] lg:w-[150px]">
                  <Image
                    src={item.iconSrc}
                    alt="Compliance Icon"
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 30vw, 15vw"
                    className="object-contain opacity-95 transition-opacity group-hover:opacity-100"
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
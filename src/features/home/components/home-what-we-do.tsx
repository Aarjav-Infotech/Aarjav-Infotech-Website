"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export interface BentoItem {
  imageSrc: string;
  title: string;
  description: string;
  features?: string[];
}

export interface HomeWhatWeDoProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: {
    workflow: BentoItem;
    triage: BentoItem;
    tools: BentoItem;
    orchestration: BentoItem;
    voice: BentoItem;
    document: BentoItem;
  };
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

const cardHoverProps = {
  whileHover: { y: -8, boxShadow: "0px 15px 30px rgba(0,0,0,0.08)" },
  transition: { duration: 0.3, ease: "easeOut" as const },
};

export function HomeWhatWeDo({
  eyebrow,
  title,
  subtitle,
  items,
}: HomeWhatWeDoProps) {
  return (
    <section className="mx-auto w-full max-w-[1440px] overflow-hidden px-8 pt-24 pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto mb-16 flex max-w-[1280px] flex-col items-start space-y-4"
      >
        {eyebrow && (
          <p className="text-foreground text-sm font-semibold tracking-wider uppercase">
            {eyebrow}
          </p>
        )}
        <h2 className="text-foreground text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        )}
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto flex max-w-[1280px] flex-col gap-6"
      >
        {/* Top Section: 2 columns */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Column: AI Workflow Automation */}
          <motion.div
            variants={itemVariants}
            {...cardHoverProps}
            className="group flex h-full flex-col overflow-hidden rounded-[32px] border bg-white p-[30px] shadow-sm"
          >
            <div className="relative mb-8 min-h-[280px] w-full shrink-0 overflow-hidden rounded-2xl bg-[#f4f7fb]">
              <Image
                src={items.workflow.imageSrc}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                alt={items.workflow.title}
                unoptimized
              />
            </div>
            <h3 className="mb-3 text-2xl font-semibold">
              {items.workflow.title}
            </h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              {items.workflow.description}
            </p>
            {items.workflow.features && items.workflow.features.length > 0 && (
              <ul className="mt-auto space-y-3">
                {items.workflow.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <CheckCircle2 className="text-primary h-5 w-5" /> {feature}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* Right Column: Stack of Triage + (Tools & Data) */}
          <div className="flex flex-col gap-6">
            {/* Support Triage (Top) */}
            <motion.div
              variants={itemVariants}
              {...cardHoverProps}
              className="group flex flex-col gap-[32px] overflow-hidden rounded-[32px] border bg-white p-[30px] shadow-sm sm:flex-row lg:h-[237px]"
            >
              <div className="flex flex-1 flex-col justify-center">
                <h3 className="mb-3 text-xl font-semibold">
                  {items.triage.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {items.triage.description}
                </p>
              </div>
              <div className="relative min-h-[140px] w-full shrink-0 overflow-hidden rounded-xl bg-[#f4f7fb] sm:h-full sm:w-[240px]">
                <Image
                  src={items.triage.imageSrc}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={items.triage.title}
                  unoptimized
                />
              </div>
            </motion.div>

            {/* 2-col subgrid (Bottom) */}
            <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:h-[336px]">
              {/* AI Tools & Agents */}
              <motion.div
                variants={itemVariants}
                {...cardHoverProps}
                className="group flex h-full flex-col overflow-hidden rounded-[32px] border bg-white p-[30px] shadow-sm"
              >
                <div className="relative mb-6 min-h-[140px] w-full shrink-0 overflow-hidden rounded-xl bg-[#f4f7fb]">
                  <Image
                    src={items.tools.imageSrc}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={items.tools.title}
                    unoptimized
                  />
                </div>
                <div className="flex flex-1 flex-col justify-end">
                  <h3 className="mb-2 text-xl font-semibold">
                    {items.tools.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {items.tools.description}
                  </p>
                </div>
              </motion.div>

              {/* Data Orchestration */}
              <motion.div
                variants={itemVariants}
                {...cardHoverProps}
                className="group flex h-full flex-col overflow-hidden rounded-[32px] border bg-white p-[30px] shadow-sm"
              >
                <div className="relative mb-6 min-h-[140px] w-full shrink-0 overflow-hidden rounded-xl bg-[#f4f7fb]">
                  <Image
                    src={items.orchestration.imageSrc}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={items.orchestration.title}
                    unoptimized
                  />
                </div>
                <div className="flex flex-1 flex-col justify-end">
                  <h3 className="mb-2 text-xl font-semibold">
                    {items.orchestration.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {items.orchestration.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section: 2 columns */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* AI Voice Agent */}
          <motion.div
            variants={itemVariants}
            {...cardHoverProps}
            className="group flex flex-col items-center gap-[32px] overflow-hidden rounded-[32px] border bg-white p-[30px] shadow-sm sm:flex-row lg:h-[237px]"
          >
            <div className="flex flex-1 flex-col justify-center">
              <h3 className="mb-3 text-xl font-semibold">
                {items.voice.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {items.voice.description}
              </p>
            </div>
            <div className="relative min-h-[140px] w-full shrink-0 overflow-hidden rounded-xl bg-[#f4f7fb] sm:h-full sm:w-[240px]">
              <Image
                src={items.voice.imageSrc}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                alt={items.voice.title}
                unoptimized
              />
            </div>
          </motion.div>

          {/* AI Document Processing */}
          <motion.div
            variants={itemVariants}
            {...cardHoverProps}
            className="group flex flex-col items-center gap-[32px] overflow-hidden rounded-[32px] border bg-white p-[30px] shadow-sm sm:flex-row lg:h-[237px]"
          >
            <div className="relative min-h-[140px] w-full shrink-0 overflow-hidden rounded-xl bg-[#f4f7fb] sm:h-full sm:w-[240px]">
              <Image
                src={items.document.imageSrc}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                alt={items.document.title}
                unoptimized
              />
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <h3 className="mb-3 text-xl font-semibold">
                {items.document.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {items.document.description}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

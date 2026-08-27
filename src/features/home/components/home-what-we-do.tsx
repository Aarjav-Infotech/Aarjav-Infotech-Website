"use client";

import { useRef } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion, useInView, type Variants } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

export interface BentoItem {
  videoSrc: string;
  title: string;
  description: string;
  features?: string[];
}

export interface HomeWhatWeDoProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  bgImage?: string;
  items?: {
    workflow?: BentoItem;
    triage?: BentoItem;
    ecosystem?: BentoItem;
    voice?: BentoItem;
    document?: BentoItem;
  };
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 16 },
  },
};

interface BentoVideoProps {
  src: string;
  label: string;
  className?: string;
}

function BentoVideo({ src, label, className }: BentoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  // Section sits below the fold, so hold off fetching until it is nearly visible.
  const isNearView = useInView(ref, { once: true, margin: "300px" });

  return (
    <video
      ref={ref}
      src={isNearView ? src : undefined}
      // A still frame is enough when the user has asked for less motion.
      preload={prefersReducedMotion ? "metadata" : "none"}
      autoPlay={!prefersReducedMotion}
      loop
      muted
      playsInline
      aria-label={label}
      className={cn(
        "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]",
        className,
      )}
    />
  );
}

export function HomeWhatWeDo({
  eyebrow = "Services",
  title = "End-to-End AI Services",
  subtitle = "From workflow automation to system integration, we deliver outcomes that move your business forward.",
  bgImage = "/images/what-we-do-bg.svg",
  items = {},
}: HomeWhatWeDoProps) {
  const workflow = items.workflow || {
    videoSrc: "/Animation/1.webm",
    title: "AI Workflow Automation",
    description:
      "Transform repetitive business processes into intelligent AI-powered workflows that eliminate bottlenecks and drive exponential efficiency.",
    features: [
      "Autonomous AI Agents",
      "Advanced Workflow Orchestration",
      "Real-time Process Optimization",
    ],
  };

  const triage = items.triage || {
    videoSrc: "/Animation/2.webm",
    title: "Support Triage & AI Ticketing",
    description:
      "Connect emails, WhatsApp, and websites to a unified AI system that triages, responds, and resolves customer inquiries instantly.",
  };

  const ecosystem = items.ecosystem || {
    videoSrc: "/Animation/4.webm",
    title: "Enterprise AI Ecosystem",
    description:
      "Connect AI agents, enterprise applications, data pipelines, and custom ERP solutions into one intelligent business ecosystem.",
  };

  const voice = items.voice || {
    videoSrc: "/Animation/5.webm",
    title: "AI Voice Agent Deployment",
    description:
      "Deploy multilingual AI voice agents that handle high-volume calls with human-like natural language processing and zero latency.",
  };

  const documentItem = items.document || {
    videoSrc: "/Animation/6.webm",
    title: "AI Document Processing",
    description:
      "Automatically extract, classify, and validate data from invoices, contracts, and IDs with 99% accuracy using proprietary OCR models.",
  };

  return (
    <section className="relative w-full p-5 px-2 py-12 sm:px-6 lg:px-0">
      {/* Outer Elevated Canvas Frame */}
      <div className="relative mx-auto max-w-full overflow-hidden rounded-[40px] border-b-[12px] border-b-transparent sm:rounded-[40px] sm:p-10 lg:p-12">
        {/* SVG Background Layer */}
        <div className="pointer-events-none absolute inset-0 -z-10 select-none">
          <Image
            src={bgImage}
            alt="Background pattern"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mb-10 flex flex-col items-center space-y-3.5 text-center sm:mb-12"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 rounded border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-[14px] font-semibold text-[#2b2bad] shadow-xl/20">
            <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
            {eyebrow}
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>

          {subtitle && (
            <p className="max-w-full text-base leading-relaxed text-black sm:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Bento Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 flex flex-col gap-5"
        >
          {/* TOP SECTION: Left Big Feature + Right Stack */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* 1. AI Workflow Automation (Left Big Card) */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-col justify-between rounded-[28px] border border-white/90 bg-white/90 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md sm:p-8 lg:col-span-6"
            >
              <div>
                <div className="relative mb-6 h-[220px] w-full overflow-hidden rounded-[14px] sm:h-[280px]">
                  <BentoVideo src={workflow.videoSrc} label={workflow.title} />
                </div>

                <h3 className="mb-2.5 text-2xl font-bold text-slate-900 sm:text-3xl">
                  {workflow.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {workflow.description}
                </p>
              </div>

              {workflow.features && workflow.features.length > 0 && (
                <ul className="space-y-2.5 border-t border-slate-100 pt-4">
                  {workflow.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>

            {/* Right Stack (Top: Support Triage | Bottom: Enterprise AI Ecosystem) */}
            <div className="flex flex-col gap-5 lg:col-span-6">
              {/* 2. Support Triage & AI Ticketing */}
              <motion.div
                variants={itemVariants}
                className="group flex flex-col justify-between rounded-[28px] border border-white/90 bg-white/90 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md sm:p-7"
              >
                <div className="relative mb-5 h-[190px] w-full overflow-hidden rounded-[14px] sm:h-[210px]">
                  <BentoVideo src={triage.videoSrc} label={triage.title} />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">
                    {triage.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {triage.description}
                  </p>
                </div>
              </motion.div>

              {/* 3. Enterprise AI Ecosystem (Exact Horizontal Alignment Match) */}
              <motion.div
                variants={itemVariants}
                className="group flex flex-col items-center justify-between gap-6 rounded-[28px] border border-white/90 bg-white/90 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md sm:flex-row sm:p-7"
              >
                <div className="relative h-[150px] w-full shrink-0 overflow-hidden rounded-[14px] sm:w-[220px] lg:w-[240px]">
                  <BentoVideo
                    src={ecosystem.videoSrc}
                    label={ecosystem.title}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">
                    {ecosystem.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {ecosystem.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* BOTTOM SECTION: 2 Equal Horizontal Split Cards */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* 4. AI Voice Agent Deployment */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-col items-center justify-between gap-6 rounded-[28px] border border-white/90 bg-white/90 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md sm:flex-row sm:p-7"
            >
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">
                  {voice.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {voice.description}
                </p>
              </div>
              <div className="relative h-[150px] w-full shrink-0 overflow-hidden rounded-[14px] sm:w-[200px]">
                <BentoVideo src={voice.videoSrc} label={voice.title} />
              </div>
            </motion.div>

            {/* 5. AI Document Processing */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-col items-center justify-between gap-6 rounded-[28px] border border-white/90 bg-white/90 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md sm:flex-row sm:p-7"
            >
              <div className="relative order-2 h-[150px] w-full shrink-0 overflow-hidden rounded-[14px] sm:order-1 sm:w-[200px]">
                <BentoVideo
                  src={documentItem.videoSrc}
                  label={documentItem.title}
                />
              </div>
              <div className="order-1 flex-1 sm:order-2">
                <h3 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">
                  {documentItem.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {documentItem.description}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

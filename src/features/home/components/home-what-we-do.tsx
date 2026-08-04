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
  title?: string;
  subtitle?: string;
  bgImage?: string;
  items?: {
    workflow?: BentoItem;
    triage?: BentoItem;
    tools?: BentoItem;
    orchestration?: BentoItem;
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

export function HomeWhatWeDo({
  eyebrow = "Services",
  title = "End-to-End AI Services",
  subtitle = "From workflow automation to system integration, we deliver outcomes that move your business forward.",
  bgImage = "/images/what-we-do-bg.svg",
  items = {},
}: HomeWhatWeDoProps) {
  const workflow = items.workflow || {
    imageSrc: "/Animation/1.gif",
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
    imageSrc: "/Animation/2.gif",
    title: "Support Triage & AI Ticketing",
    description:
      "Connect emails, WhatsApp, and websites to a unified AI system that triages, responds, and resolves customer inquiries instantly.",
  };

  const tools = items.tools || {
    imageSrc: "/Animation/3.gif",
    title: "AI Tools & Agents",
    description: "Build custom AI assistants tailored to your data.",
  };

  const orchestration = items.orchestration || {
    imageSrc: "/Animation/4.gif",
    title: "Data Orchestration",
    description: "Synchronize ERP, CRM, and APIs effortlessly.",
  };

  const voice = items.voice || {
    imageSrc: "/Animation/5.gif",
    title: "AI Voice Agent Deployment",
    description:
      "Deploy multilingual AI voice agents that handle high-volume calls with human-like natural language processing and zero latency.",
  };

  const documentItem = items.document || {
    imageSrc: "/Animation/6.gif",
    title: "AI Document Processing",
    description:
      "Automatically extract, classify, and validate data from invoices, contracts, and IDs with 99% accuracy using proprietary OCR models.",
  };

  return (
    <section className="relative w-full px-0 py-16 sm:px-6 lg:px-0">
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
          <div className="inline-flex items-center gap-1.5 rounded border bg-[#F5F5F5] px-3.5 py-1 text-[14px] font-semibold text-[#2b2bad] shadow-xl/20">
            <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
            {eyebrow}
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>

          {subtitle && (
            <p className="max-w-full text-lg leading-relaxed text-black sm:text-lg md:text-lg">
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
            {/* 1. AI Workflow Automation */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-col justify-between rounded-[28px] border border-white/90 bg-white/90 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md sm:p-8 lg:col-span-6"
            >
              <div>
                <div className="relative mb-6 h-[220px] w-full overflow-hidden rounded-[10px] sm:h-[260px]">
                  <Image
                    src={workflow.imageSrc}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover p-0 transition-transform duration-500 group-hover:scale-[1.02]"
                    alt={workflow.title}
                    unoptimized
                  />
                </div>

                <h3 className="mb-2.5 text-2xl font-extrabold text-black sm:text-3xl">
                  {workflow.title}
                </h3>

                <p className="mb-6 text-base leading-relaxed text-slate-600">
                  {workflow.description}
                </p>
              </div>

              {workflow.features && workflow.features.length > 0 && (
                <ul className="space-y-2.5 border-t border-slate-200 pt-1">
                  {workflow.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm font-medium text-slate-800"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>

            {/* Right Stack (Triage + Subgrid) */}
            <div className="flex flex-col gap-5 lg:col-span-6">
              {/* 2. Support Triage & AI Ticketing */}
              <motion.div
                variants={itemVariants}
                className="group flex flex-col items-center justify-between gap-5 rounded-[28px] border border-white/90 bg-white/90 p-7.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md sm:flex-row sm:p-7"
              >
                <div className="w-40 flex-1">
                  <h3 className="mb-2 w-60 text-xl font-bold text-black sm:text-xl">
                    {triage.title}
                  </h3>
                  <p className="w-75 text-base leading-relaxed text-slate-600">
                    {triage.description}
                  </p>
                </div>
                <div className="relative h-[150px] w-full shrink-0 overflow-hidden rounded-[10px] sm:w-[170px] md:w-[260px]">
                  <Image
                    src={triage.imageSrc}
                    fill
                    sizes="(max-width: 640px) 100vw, 260px"
                    className="object-cover p-0 transition-transform duration-500 group-hover:scale-[1.02]"
                    alt={triage.title}
                    unoptimized
                  />
                </div>
              </motion.div>

              {/* 3. Subgrid: AI Tools + Data Orchestration */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* AI Tools & Agents */}
                <motion.div
                  variants={itemVariants}
                  className="group flex flex-col justify-between rounded-[28px] border border-white/90 bg-white/90 p-7.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md"
                >
                  <div className="relative mb-4 h-[120px] w-full overflow-hidden rounded-[10px]">
                    <Image
                      src={tools.imageSrc}
                      fill
                      sizes="(max-width: 640px) 100vw, 220px"
                      className="object-cover p-0 transition-transform duration-500 group-hover:scale-[1.02]"
                      alt={tools.title}
                      unoptimized
                    />
                  </div>
                  <div className="px-2 pb-7">
                    <h3 className="mb-1 text-xl font-bold text-black sm:text-lg">
                      {tools.title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-600">
                      {tools.description}
                    </p>
                  </div>
                </motion.div>

                {/* Data Orchestration */}
                <motion.div
                  variants={itemVariants}
                  className="group flex flex-col justify-between rounded-[28px] border border-white/90 bg-white/90 p-7.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md"
                >
                  <div className="relative mb-4 h-[120px] w-full overflow-hidden rounded-[10px]">
                    <Image
                      src={orchestration.imageSrc}
                      fill
                      sizes="(max-width: 640px) 100vw, 220px"
                      className="object-cover p-0 transition-transform duration-500 group-hover:scale-[1.02]"
                      alt={orchestration.title}
                      unoptimized
                    />
                  </div>
                  <div className="px-2 pb-7">
                    <h3 className="mt-1 mb-1 text-xl font-bold text-black sm:text-lg">
                      {orchestration.title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-600">
                      {orchestration.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION: 2 Equal Horizontal Split Cards */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* 4. AI Voice Agent Deployment */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-col items-center justify-between gap-11 rounded-[28px] border border-white/90 bg-white/90 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md sm:flex-row sm:p-7"
            >
              <div className="flex-1 px-2 pb-8">
                <h3 className="mb-2 text-xl font-bold text-black sm:text-xl">
                  {voice.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {voice.description}
                </p>
              </div>
              <div className="relative h-[135px] w-full shrink-0 overflow-hidden rounded-[10px] sm:w-[190px]">
                <Image
                  src={voice.imageSrc}
                  fill
                  sizes="(max-width: 640px) 100vw, 190px"
                  className="object-cover p-0 transition-transform duration-500 group-hover:scale-[1.02]"
                  alt={voice.title}
                  unoptimized
                />
              </div>
            </motion.div>

            {/* 5. AI Document Processing */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-col items-center justify-between gap-9 rounded-[28px] border border-white/90 bg-white/90 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md sm:flex-row sm:p-7"
            >
              <div className="relative order-2 h-[135px] w-full shrink-0 overflow-hidden rounded-[10px] sm:order-1 sm:w-[190px]">
                <Image
                  src={documentItem.imageSrc}
                  fill
                  sizes="(max-width: 640px) 100vw, 190px"
                  className="object-cover p-0 transition-transform duration-500 group-hover:scale-[1.02]"
                  alt={documentItem.title}
                  unoptimized
                />
              </div>
              <div className="order-1 flex-1 sm:order-2">
                <h3 className="mb-2 text-xl font-bold text-black sm:text-xl">
                  {documentItem.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
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

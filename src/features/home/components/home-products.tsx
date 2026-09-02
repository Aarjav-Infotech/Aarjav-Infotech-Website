"use client";

import Image from "next/image";
import { MoveRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export interface Product {
  imageSrc: string;
  tags: string[];
  title: string;
  workflow: string;
  result: string;
}

interface HomeProductsProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  products?: Product[];
  bgImageSrc?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const defaultProducts: Product[] = [
  {
    imageSrc: "/images/product-1.svg",
    tags: ["VOICE", "AI"],
    title: "AI Voice Agent Deployment",
    workflow: "Listen → Understand → Respond → Log",
    result: "24/7 customer support with faster resolution and higher CSAT.",
  },
  {
    imageSrc: "/images/product-2.svg",
    tags: ["DIAMOND", "ERP"],
    title: "AI Diamond Stock Market Management",
    workflow: "Analyze → Forecast → Trade → Report",
    result: "Smarter trading decisions with real-time insights and accuracy.",
  },
  {
    imageSrc: "/images/product-3.svg",
    tags: ["TEXTILE", "ERP"],
    title: "AI Textile Management",
    workflow: "Plan → Produce → Track → Optimise",
    result: "Smarter trading decisions with real-time insights and accuracy.",
  },
  {
    imageSrc: "/images/product-4.svg",
    tags: ["CONSTRUCTION", "ERP"],
    title: "AI Construction",
    workflow: "Plan → Allocate → Track → Report",
    result: "On-time project delivery with better resource utilisation.",
  },
  {
    imageSrc: "/images/product-5.svg",
    tags: ["ESTIMATION", "AI AGENT"],
    title: "AI BOQ Estimation Agent",
    workflow: "Extract → Calculate → Estimate → Export",
    result: "Accurate BOQs in minutes, reducing manual effort by 80%.",
  },
  {
    imageSrc: "/images/product-6.svg",
    tags: ["DOCUMENT", "ERP"],
    title: "AI Document Processing",
    workflow: "Extract → Validate → Classify → Store",
    result: "99% data accuracy with zero manual data entry.",
  },
];

export function HomeProducts({
  eyebrow = "Our Products",
  title = "Built for Real-World Impact",
  subtitle = "Explore our suite of AI-powered products designed to automate operations, improve accuracy, and drive growth across industries.",
  products = defaultProducts,
  bgImageSrc = "/images/home-product-bg.svg",
}: HomeProductsProps) {
  return (
    <section className="relative w-full px-3 py-4 sm:px-6 lg:px-8">
      {/* Container Frame with SVG Background */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[24px] border border-white/30 p-5 shadow-sm sm:rounded-[36px] sm:p-8 md:p-10 lg:rounded-[44px] lg:p-12">
        {/* Background Overlay */}
        <div className="pointer-events-none absolute inset-0 -z-10 border border-white/80 select-none">
          <Image
            src={bgImageSrc}
            alt="Section background"
            fill
            priority
            className="border border-white/80 object-cover object-center"
          />
        </div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10 mb-8 flex flex-col items-center space-y-3 text-center sm:mb-12 sm:space-y-4 lg:mb-16"
        >
          {/* Eyebrow Pill Badge */}
          {eyebrow && (
            <div className="inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3 py-1 text-xs font-semibold text-[#2b2bad] shadow-md sm:border-b-4 sm:px-3.5 sm:text-[14px]">
              <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
              {eyebrow}
            </div>
          )}

          {/* Title */}
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-[48px] lg:text-[58px] lg:leading-[1.1]">
            {title}
          </h2>

          {/* Subtitle */}
          {subtitle && (
            <p className="max-w-[640px] text-sm leading-relaxed font-medium text-slate-600 sm:text-base md:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* 6-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {products?.map((product, idx) => (
            <motion.div
              key={product.title || idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col justify-between rounded-[20px] border border-slate-200/80 bg-white/80 p-4 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-md sm:p-5"
            >
              {/* TOP CONTAINER */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  {/* Image Display Area */}
                  <div className="relative mb-4 h-[180px] w-full overflow-hidden rounded-[18px] border border-slate-100 bg-gradient-to-b from-white to-slate-50 sm:mb-5 sm:h-[220px] lg:h-[260px]">
                    <Image
                      src={product.imageSrc}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.0]"
                      alt={product.title}
                      unoptimized
                    />
                  </div>

                  {/* Tags & Action Arrow Row */}
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {product.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200/90 bg-white px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-slate-700 uppercase shadow-2xs sm:px-3 sm:py-1 sm:text-[11px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      aria-label="View product details"
                      className="flex h-8 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-600 transition-colors duration-200 hover:border-blue-600 hover:bg-[#2b2bad] hover:text-white sm:w-12"
                    >
                      <MoveRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Card Title */}
                <div className="mb-3 flex min-h-[28px] items-start sm:h-[30px]">
                  <h3 className="line-clamp-2 text-base font-bold text-slate-900 sm:text-[18px] sm:leading-[1.3]">
                    {product.title}
                  </h3>
                </div>
              </div>

              {/* FOOTER CONTAINER */}
              <div className="space-y-2 border-t-2 border-slate-200 pt-3 sm:pt-4">
                {/* Workflow Line */}
                <div className="flex min-h-[36px] items-start text-xs sm:min-h-[40px] sm:text-[16px]">
                  <p className="leading-relaxed">
                    <span className="font-bold text-slate-900">Workflow: </span>
                    <span className="font-medium text-slate-700">
                      {product.workflow}
                    </span>
                  </p>
                </div>

                {/* Result Text */}
             <p className="line-clamp-2 text-[#183ecf] text-sm font-semibold tracking-[0.5px] sm:text-[16px] sm:leading-[1.45] sm:tracking-[0.7px]">
  {product.result}
</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

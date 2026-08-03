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
    <section className="relative w-full px-4 py-16 sm:px-6 lg:px-0">
      {/* Container Frame with SVG Background */}
      <div className="relative mx-auto max-w-full overflow-hidden rounded-[36px] border border-white/30 p-6 sm:rounded-[44px] sm:p-10 lg:p-12 shadow-sm">

        {/* Background Overlay */}
        <div className="absolute inset-0 -z-10 pointer-events-none select-none border border-white/80">
          <Image
            src={bgImageSrc}
            alt="Section background"
            fill
            priority
            className="object-cover object-center border border-white/80 "
          />
        </div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10 mb-10 flex flex-col items-center space-y-4 text-center sm:mb-16"
        >
          {/* Eyebrow Pill Badge */}
          {eyebrow && (
              <div className="inline-flex items-center gap-1.5 rounded border bg-[#F5F5F5] px-3.5 py-1 text-[14px] font-semibold text-[#2b2bad] shadow-xl/20 ">
            <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
            {eyebrow}
          </div>
          )}

          {/* Title */}
          <h2 className="text-[36px] font-bold tracking-tight text-slate-900 sm:text-[48px] lg:text-[58px] lg:leading-[1.1]">
            {title}
          </h2>

          {/* Subtitle */}
          {subtitle && (
            <p className="max-w-[640px] text-xs font-medium leading-relaxed text-slate-600 sm:text-sm">
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
          className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {products?.map((product, idx) => (
            <motion.div
              key={product.title || idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col justify-between rounded-[20px] border border-slate-200/80 bg-white/80 p-5 backdrop-blur-sm shadow-xs backdrop-blur-md transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-md"
            >
              {/* TOP CONTAINER */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  {/* Image Display Area */}
                  <div className="relative mb-5 h-[260px] w-full overflow-hidden rounded-[18px] border border-slate-100 bg-gradient-to-b from-white to-slate-50">
                    <Image
                      src={product.imageSrc}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.0]"
                      alt={product.title}
                      unoptimized
                    />
                  </div>

                  {/* Tags & Action Arrow Row */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {product.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200/90 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-700 shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      aria-label="View product details"
                      className="flex h-8 w-12 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-600 transition-colors duration-200 hover:border-blue-600 hover:bg-[#2b2bad] hover:text-white"
                    >
                      <MoveRight className="h-4 w-12" />
                    </button>
                  </div>
                </div>

                {/* Card Title (Fixed height keeps rows perfectly aligned) */}
                <div className="mb-3 flex items-start h-[52px]">
                  <h3 className="text-[18px] font-bold leading-[1.3] text-slate-900 line-clamp-2">
                    {product.title}
                  </h3>
                </div>
              </div>

              {/* FOOTER CONTAINER */}
              <div className="border-t border-slate-100/90 pt-4 space-y-2">
                {/* Workflow Line (Locked height so lines match horizontally) */}
                <div className="text-[16px] flex items-start min-h-[40px]">
                  <p className="leading-relaxed">
                    <span className="font-bold text-slate-900">Workflow: </span>
                    <span className="font-medium text-slate-700 ">{product.workflow}</span>
                  </p>
                </div>

                {/* Result Text */}
                <p className="text-[16px] font-bold leading-[1.45] text-[#2b2bad] line-clamp-2 tracking-[0.7px]">
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
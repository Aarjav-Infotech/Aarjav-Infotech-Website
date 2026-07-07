"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export interface Product {
  tags: string[];
  title: string;
  inputs: string;
  workflow: string;
  result: string;
}

interface HomeProductsProps {
  title: string;
  subtitle?: string;
  products: Product[];
  bgImageSrc?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

const cardHoverProps = {
  whileHover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0px 15px 30px rgba(0,0,0,0.08)",
  },
  transition: { duration: 0.3, ease: "easeOut" as const },
};

export function HomeProducts({
  title,
  subtitle,
  products,
  bgImageSrc = "/images/mask_group.png",
}: HomeProductsProps) {
  return (
    <section className="relative mx-auto w-full max-w-[1440px] px-8 pt-24 pb-24">
      <div className="absolute inset-0 z-0 m-4 overflow-hidden rounded-[48px]">
        <Image
          src={bgImageSrc}
          fill
          className="object-cover"
          alt="Background pattern"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 flex flex-col items-start space-y-4"
        >
          <h2 className="text-foreground text-4xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg">{subtitle}</p>
          )}
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              {...cardHoverProps}
              className="group flex h-full flex-col rounded-[32px] border border-transparent bg-white/70 p-8 shadow-sm backdrop-blur-[4px] transition-colors duration-300 hover:border-gray-100 hover:bg-white"
            >
              <div className="mb-4 flex items-center gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-border text-muted-foreground rounded-full border px-3 py-1 text-[10px] font-semibold tracking-wider uppercase transition-colors group-hover:border-blue-600 group-hover:text-blue-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mb-8 text-[20px] leading-[28px] font-medium">
                {product.title}
              </h3>

              <div className="mt-auto grid grid-cols-[80px_1fr] gap-y-4 text-sm">
                <div className="text-muted-foreground flex items-center text-[10px] font-bold tracking-wider uppercase">
                  INPUTS
                </div>
                <div className="text-foreground text-sm font-medium">
                  {product.inputs}
                </div>

                <div className="text-muted-foreground flex items-center text-[10px] font-bold tracking-wider uppercase">
                  WORKFLOW
                </div>
                <div className="text-foreground text-sm font-medium">
                  {product.workflow}
                </div>

                <div className="text-muted-foreground mt-1 text-[10px] font-bold tracking-wider uppercase">
                  RESULT
                </div>
                <div className="flex items-start gap-2 text-sm font-medium text-blue-600">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
                  <span>{product.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

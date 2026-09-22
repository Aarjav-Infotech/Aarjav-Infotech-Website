"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { asset } from "@/lib/cdn";

export interface BusinessOperationsProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

interface OperationCard {
  iconSrc: string;
  title: string;
  description: string;
  badge: React.ReactNode;
}

const operations: OperationCard[] = [
  {
    iconSrc: asset("/icons/purchase.svg"),
    title: "Purchase",
    description:
      "Manage rough and polished sourcing with multi-currency vendor ledgers.",
    badge: (
      <div className="inline-flex w-fit items-center rounded-[8px] border border-[#2b2bad] bg-[#CADEFF] px-3 py-1 text-[14px] font-medium text-blue-900">
        PO-2024-089 • Approved
      </div>
    ),
  },
  {
    iconSrc: asset("/icons/assortment.svg"),
    title: "Assortment",
    description:
      "Grade, sort, and mix parcels with complete traceability and cost allocation.",
    badge: (
      <div className="flex items-center gap-1.5">
        {["VVS1", "D", "EX"].map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-[#2b2bad] bg-[#CADEFF] px-2 py-0.5 text-[14px] font-semibold text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>
    ),
  },
  {
    iconSrc: asset("/icons/Manufacturing.svg"),
    title: "Manufacturing",
    description:
      "Track yield, labor costs, and stages from rough planning to final polish.",
    badge: (
      <div className="w-full max-w-[140px]">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-3/5 rounded-full bg-[#2b2bad]" />
        </div>
      </div>
    ),
  },
  {
    iconSrc: asset("/icons/stock.svg"),
    title: "Stock Management",
    description:
      "Real-time vault control, memo tracking, and automated Rapaport pricing.",
    badge: (
      <div className="flex w-full items-center justify-between text-[14px]">
        <span className="text-black">Total Carats</span>
        <span className="font-semibold text-[#2b2bad]">4,521.80 ct</span>
      </div>
    ),
  },
  {
    iconSrc: asset("/icons/sales.svg"),
    title: "Sales",
    description:
      "B2B portal, retail POS, invoicing, and customer relationship management.",
    badge: (
      <span className="inline-flex items-center rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[14px] font-medium text-emerald-600">
        Invoice Paid
      </span>
    ),
  },
  {
    iconSrc: asset("/icons/finance.svg"),
    title: "Finance",
    description:
      "Integrated accounting, P&L reporting, and multi-currency exchange handling.",
    badge: (
      <div className="inline-flex items-center gap-1 text-[14px] font-semibold text-[#2b2bad]">
        <span>+12.5%</span>
      </div>
    ),
  },
  {
    iconSrc: asset("/icons/teams.svg"),
    title: "Team & Permissions",
    description:
      "Granular role-based access control for branches, departments, and external partners.",
    badge: (
      <div className="flex -space-x-1.5 overflow-hidden">
        {["A", "B"].map((initial, i) => (
          <div
            key={i}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2b2bad] bg-blue-100 text-[12px] font-semibold text-blue-700"
          >
            {initial}
          </div>
        ))}
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2b2bad] bg-blue-600 text-[12px] font-medium text-white">
          +3
        </div>
      </div>
    ),
  },
  {
    iconSrc: asset("/icons/audit.svg"),
    title: "Activity Audit",
    description:
      "Immutable logs of every transaction, stone movement, and price change.",
    badge: (
      <div className="flex items-center gap-2 border-l-[2.5px] border-[#2b2bad] pl-2 text-[14px] text-slate-600">
        <span>Modified price on Stone #1204</span>
      </div>
    ),
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 85, damping: 14 },
  },
};

export function BusinessOperations({
  eyebrow = "Operations",
  title = "Complete Business Operations",
  subtitle = "A unified digital operating system covering every aspect of your diamond enterprise.",
}: BusinessOperationsProps) {
  return (
    <section className="relative w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          {/* Eyebrow Pill */}
          {eyebrow && (
            <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-sm sm:mb-8 sm:border-b-4 sm:text-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
              {eyebrow}
            </div>
          )}

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-3 text-sm text-slate-500 sm:text-base">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* 4-Column Operations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {operations.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group flex min-h-[220px] flex-col justify-between rounded-[24px] border border-slate-200/70 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-slate-300 hover:shadow-md"
            >
              <div>
                {/* Square Blue Icon Button with Image */}
                <div className="relative mb-4 flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] p-2 shadow-sm transition-transform duration-200 group-hover:scale-105">
                  <Image
                    src={item.iconSrc}
                    alt={item.title}
                    width={20}
                    height={20}
                    className="h-full w-full object-contain brightness-0 invert"
                    unoptimized
                  />
                </div>

                {/* Title & Description */}
                <h3 className="mb-2 text-[20px] font-bold text-[#2b2bad]">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-black">
                  {item.description}
                </p>
              </div>

              {/* Card-Specific Micro Badge / Footer UI */}
              <div className="pt-5">{item.badge}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

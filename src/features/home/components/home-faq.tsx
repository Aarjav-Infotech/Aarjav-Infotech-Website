"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export interface HomeFaqProps {
  eyebrow?: string;
}

const faqs = [
  {
    question: "Why should we trust our mission-critical data with you?",
    answer:
      "We treat security as a foundational architecture, not an afterthought. For government and enterprise projects, we deploy air-gapped ready systems and sovereign data environments that ensure your proprietary intelligence never touches the public internet. Our code is built to be audited, and our infrastructure is built to be impenetrable.",
  },
  {
    question:
      "How does your engineering approach differ from standard agencies?",
    answer:
      "We don't just build software — we engineer systems designed for longevity, compliance, and scale. Every project follows a structured methodology rooted in enterprise-grade architecture, rigorous testing, and future-proof design principles.",
  },
  {
    question:
      "Can you handle projects at government or global enterprise scale?",
    answer:
      "Absolutely. We've built and deployed solutions for government bodies, defense-adjacent programs, and multinational enterprises. Our team understands procurement cycles, regulatory compliance, and the operational rigor these environments demand.",
  },
  {
    question: "How do you ensure long-term system evolution?",
    answer:
      "We design modular, well-documented systems that evolve with your needs. Our architecture supports iterative upgrades, version-controlled deployments, and seamless integration of emerging technologies without costly rewrites.",
  },
];

export function HomeFaq({ eyebrow = "FAQs" }: HomeFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-white px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="relative z-20 mx-auto mb-8 flex max-w-xl flex-col items-center text-center sm:mb-12 lg:mb-14">
          {eyebrow && (
            <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-sm sm:mb-10 sm:border-b-4 sm:text-[14px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
              {eyebrow}
            </div>
          )}
          <h2 className="xs:text-3xl text-2xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Frequently Asked <br /> Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3.5 sm:gap-5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[20px] border border-slate-200/50 bg-[#f3f4f6] p-4 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] transition-all duration-300 sm:rounded-[24px] sm:p-5"
              >
                {/* Accordion Row */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 text-left sm:gap-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 sm:text-xl">
                    {faq.question}
                  </span>

                  {/* Plus/Minus Button */}
                  <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_10%,#0053FA_100%,#3BE4FF_100%)] text-white shadow-[0_8px_16px_rgba(0,0,0,0.35)] transition-all duration-200 hover:scale-105 active:scale-95 sm:h-11 sm:w-11">
                    {isOpen ? (
                      <Minus className="h-4 w-4 stroke-[2.5] sm:h-5 sm:w-5" />
                    ) : (
                      <Plus className="h-4 w-4 stroke-[2.5] sm:h-5 sm:w-5" />
                    )}
                  </div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      {/* Tapered Gradient Line */}
                      <div className="my-3.5 h-[1.5px] w-full bg-gradient-to-r from-transparent via-slate-300/80 to-transparent sm:my-5" />

                      <p className="pr-2 text-sm leading-relaxed text-slate-700 sm:pr-12 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

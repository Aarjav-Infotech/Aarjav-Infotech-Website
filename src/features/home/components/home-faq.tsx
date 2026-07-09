"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

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
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes. We offer tailored SLA support packages for continuous monitoring, optimization, and updates as your business scales. Our team stays engaged post-launch to ensure your systems run at peak performance.",
  },
  {
    question: "What if we're not sure what to automate first?",
    answer:
      "That's exactly what our discovery process is for. We audit your current workflows, identify inefficiencies, and recommend the highest-ROI automation opportunities to tackle first — so you see value fast.",
  },
];

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat pt-[80px]">
      <div className="relative w-full px-4 md:px-[80px]">
        <div className="flex flex-col items-stretch justify-center gap-12 lg:flex-row lg:gap-[20px]">
          {/* Left Column */}
          <div className="flex w-full shrink-0 flex-col justify-between lg:w-[630px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <p
                className="mb-4 text-[12px] leading-[15.6px] font-normal tracking-[1px] text-black uppercase"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                FAQ
              </p>
              <h2 className="mb-4 text-[46px] leading-[46px] font-medium text-black">
                Common questions
              </h2>
              <p className="mb-[40px] text-[16px] leading-[22.4px] font-normal text-black">
                Everything you need to know before we start working together.
              </p>

              <div className="relative mb-[60px] h-[300px] w-full sm:h-[400px]">
                <Image
                  src="/svg/comman_que.svg"
                  alt="Common Questions Illustration"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <Link
                href={ROUTES.contact}
                className="flex h-[54px] w-max items-center justify-center gap-[19px] rounded-[60px] border border-transparent bg-black px-[25px] text-[16px] leading-[17.6px] font-medium text-white transition-all duration-300 hover:border-transparent hover:bg-[linear-gradient(90deg,#091E46_1%,#075FF3_100%)]"
              >
                Book a discovery call
                <Image
                  src="/svg/right_arrow.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="text-white"
                />
              </Link>
            </motion.div>
          </div>

          {/* Right Column — FAQ Accordion */}
          <div className="w-full shrink-0 lg:w-[630px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col overflow-hidden rounded-[20px] border border-black/10 bg-white"
            >
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-black/10">
                  {/* Question row */}
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="group flex w-full items-center justify-between px-[25px] py-[26px] text-left transition-colors"
                    aria-expanded={openIndex === i}
                  >
                    <span className="pr-4 text-[20px] leading-[28px] font-semibold text-black transition-colors duration-200">
                      {faq.question}
                    </span>
                    <svg
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Answer panel */}
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-[25px] pb-[26px] text-[20px] leading-[28px] font-medium text-black/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

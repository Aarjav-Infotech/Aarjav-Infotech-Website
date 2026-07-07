"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

const faqs = [
  {
    question: "How long does a typical automation project take?",
    answer:
      "Projects typically range from 2-6 weeks depending on complexity. We start with a quick discovery phase and provide a clear timeline before any work begins.",
  },
  {
    question: "What access do you need to our systems?",
    answer:
      "We require temporary administrative or API access to the specific platforms involved in the automation. All access is handled securely.",
  },
  {
    question: "Who owns the automations you build?",
    answer:
      "You have 100% full ownership of all workflows, scripts, and automations upon project completion.",
  },
  {
    question: "What happens if something breaks after launch?",
    answer:
      "We offer a 30-day warranty period for any bug fixes, and we also provide optional ongoing maintenance plans for continued peace of mind.",
  },
  {
    question: "How do you handle data security?",
    answer:
      "We follow strict industry best practices. We never store your sensitive data on our servers and strictly use secure API connections and encrypted credentials.",
  },
  {
    question: "Can you work with our existing tools and vendors?",
    answer:
      "Yes, we specialize in integrating disparate systems. Whether it's via native APIs, custom webhooks, or RPA, we make your tools talk to each other.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Absolutely. We offer tailored SLA support packages for continuous monitoring, optimization, and updates as your business scales.",
  },
  {
    question: "What if we're not sure what to automate first?",
    answer:
      "That's exactly what our discovery process is for! We audit your current workflows and identify the highest ROI opportunities to tackle first.",
  },
];

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative mx-auto w-full max-w-[1440px] bg-white py-[80px] lg:py-[120px]">
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
                className="flex w-max items-center justify-center gap-2 rounded-[60px] bg-black px-[25px] py-[17px] font-medium text-white transition-colors hover:bg-black/80"
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

          {/* Right Column */}
          <div className="w-full shrink-0 lg:w-[630px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex h-full flex-col overflow-hidden rounded-[20px] border border-black/10 bg-white shadow-sm"
            >
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="flex flex-1 flex-col justify-center border-b border-black/10 last:border-b-0"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex w-full items-center justify-between bg-white px-6 py-5 text-left transition-colors hover:bg-black/5 sm:px-8 sm:py-[28px]"
                  >
                    <span className="pr-4 text-[16px] font-normal text-black">
                      {faq.question}
                    </span>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pt-0 pb-5 text-[15px] leading-relaxed text-black/60 sm:px-8 sm:pb-[28px]">
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

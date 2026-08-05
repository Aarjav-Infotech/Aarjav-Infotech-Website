"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "Integrating AI agents into our pipeline cut operational costs dramatically. The system processes thousands of incoming tasks daily without missing a beat.",
    author: "Sarah Jenkins",
    role: "VP of Product",
    company: "FinScale",
    image: "/images/testimonial-image.svg",
  },
  {
    id: "2",
    quote:
      "We deal with a huge volume of sales data. This dashboard is fast, reliable, and handles real-time metrics across a million records without any lag. The S3 integration is seamless.",
    author: "Marcus Tan",
    role: "CTO",
    company: "VectorPay",
    image: "/images/testimonial-image.svg",
  },
  {
    id: "3",
    quote:
      "The custom AI models transformed our document review workflows completely. What used to take days now finishes in minutes with near-perfect accuracy.",
    author: "Elena Rostova",
    role: "Head of Operations",
    company: "AeroData",
    image: "/images/testimonial-image.svg",
  },
];

interface TestimonialsProps {
  eyebrow?: string;
  title?: string;
  testimonials?: TestimonialItem[];
}

export function HomeTestimonials({
  eyebrow = "Testimonials",
  title = "What Our Clients Says",
  testimonials = defaultTestimonials,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(1); // Default to index 1 (2/3) to match screenshot

  const current = (testimonials[currentIndex] ??
    testimonials[0] ??
    defaultTestimonials[0]) as TestimonialItem;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="relative w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px] rounded-[32px] bg-white p-6 sm:p-10 lg:p-14">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Content & Navigation */}
          <div className="flex min-h-[420px] flex-col justify-between py-2 lg:col-span-6">
            <div>
              {/* Pill Badge */}
              <div className="boder-slate-200 mb-10 inline-flex items-center gap-1.5 rounded border-b-4 bg-[#F5F5F5] px-3.5 py-1 text-[14px] font-semibold text-[#2b2bad] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                {eyebrow}
              </div>

              {/* Section Heading */}
              <h2 className="text-3xl leading-[1.15] font-bold tracking-tight text-slate-900 sm:text-7xl lg:text-[72px]">
                {title}
              </h2>

              {/* Dynamic Animated Quote Card */}
              <div className="mt-8 min-h-[160px] sm:mt-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Blue Double Quote Icon */}
                    <Quote className="mb-3 size-6 rotate-180 fill-blue-700 text-blue-700" />

                    {/* Quote Text */}
                    <p className="text-sm leading-relaxed font-medium text-slate-800 sm:text-base">
                      {current.quote}
                    </p>

                    {/* Author Metadata with Vertical Accent Line */}
                    <div className="mt-6 flex items-center gap-3 border-l-2 border-slate-300 pl-3">
                      <p className="text-xs font-medium text-slate-500 sm:text-sm">
                        <span className="font-semibold text-slate-700">
                          {current.author}
                        </span>
                        {" | "}
                        {"current.company"}'s {"current.role"}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Controls Row: Arrows & Pagination counter */}
            <div className="mt-10 flex items-center justify-between pt-4">
              {/* Blue Pill Arrow Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="flex size-11 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_100%)] text-white shadow-[0_6px_16px_rgba(0,56,255,0.35)] transition-transform hover:scale-105 active:scale-95"
                >
                  <ChevronLeft className="size-5" />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="flex size-11 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_100%)] text-white shadow-[0_6px_16px_rgba(0,56,255,0.35)] transition-transform hover:scale-105 active:scale-95"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>

              {/* Number Pagination Counter (e.g., 2 / 3) */}
              <div className="text-xl font-bold tracking-tight text-slate-400">
                <span className="text-slate-800">{currentIndex + 1}</span>
                <span className="mx-0.5 text-slate-300">/</span>
                <span>{testimonials.length}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Rounded Image Frame */}
          <div className="relative lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative h-[360px] w-full overflow-hidden rounded-[40px] border-[14px] border-slate-100 shadow-xl sm:h-[460px] lg:h-[500px]"
              >
                <Image
                  src={current.image}
                  alt={current.author}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

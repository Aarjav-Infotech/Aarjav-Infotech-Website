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
  const [currentIndex, setCurrentIndex] = useState(1);

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
    <section className="relative w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-[1280px] rounded-[24px] bg-white p-5 sm:rounded-[32px] sm:p-10 lg:p-14">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Content & Navigation */}
          <div className="flex min-h-0 flex-col justify-between py-2 lg:col-span-6 lg:min-h-[420px]">
            <div>
              {/* Pill Badge */}
              <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-sm sm:text-[14px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                {eyebrow}
              </div>

              {/* Responsive Section Heading */}
              <h2 className="w-40 text-2xl leading-tight font-bold tracking-tight text-slate-900 sm:w-100 sm:text-5xl lg:text-[64px]">
                {title}
              </h2>

              {/* Dynamic Animated Quote Card */}
              <div className="mt-6 min-h-[140px] sm:mt-8 sm:min-h-[160px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Blue Double Quote Icon */}
                    <Quote className="mb-3 size-5 rotate-180 fill-[#2b2bad] stroke-none sm:size-6" />
                    {/* Quote Text */}
                    <p className="text-basic sm:text-basic leading-relaxed font-medium text-slate-800">
                      {current.quote}
                    </p>

                    {/* Author Metadata */}
                    <div className="mt-6 flex items-center gap-3 border-l-2 border-slate-300 pl-3">
                      <p className="text-basic sm:text-basic font-medium text-slate-500">
                        <span className="font-semibold text-slate-700">
                          {current.author}
                        </span>
                        {" | "}
                        {current.company}'s {current.role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Controls Row */}
            <div className="mt-8 flex items-center justify-between pt-4 sm:mt-10">
              {/* Arrow Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="flex size-10 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_100%)] text-white shadow-[0_6px_16px_rgba(0,56,255,0.35)] transition-transform hover:scale-105 active:scale-95 sm:size-11 sm:w-15"
                >
                  <ChevronLeft className="size-5" />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="flex size-10 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_100%)] text-white shadow-[0_6px_16px_rgba(0,56,255,0.35)] transition-transform hover:scale-105 active:scale-95 sm:size-11 sm:w-15"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>

              {/* Number Counter */}
              <div className="text-lg font-bold tracking-tight text-slate-400 sm:text-xl">
                <span className="text-slate-800">{currentIndex + 1}</span>
                <span className="mx-0.5 text-slate-300">/</span>
                <span>{testimonials.length}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Responsive Image Frame */}
          <div className="relative w-full lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative h-[280px] w-full overflow-hidden rounded-[24px] border-4 border-slate-100 shadow-xl sm:h-[400px] sm:rounded-[40px] sm:border-[14px] lg:h-[500px]"
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

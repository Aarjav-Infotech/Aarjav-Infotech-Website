"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  review: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "01",
    name: "Alex Rivera",
    title: "COO, HAUS",
    review:
      "The team didn't just build an automation; they re-engineered our entire operations workflow. We're moving twice as fast now.",
    avatar: "/images/testimonial-avatar.png",
  },
  {
    id: "02",
    name: "Sarah Jenkins",
    title: "VP ENGINEERING, DATACORP",
    review:
      '"Finally, an automation partner who actually understands enterprise security requirements. No hand-waving, just solid execution."',
    avatar: "/images/testimonial-avatar.png",
  },
  {
    id: "03",
    name: "Michael Chen",
    title: "VP OF SALES, TECHFLOW",
    review:
      '"The team understands our complex requirements perfectly. They delivered an automation system that scales effortlessly. Worth every penny."',
    avatar: "/images/testimonial-avatar.png",
  },
  {
    id: "04",
    name: "Emily Watson",
    title: "FOUNDER, GROWTH AI",
    review:
      '"Working with them has been a game-changer for our business. The custom integrations saved us hundreds of hours each month."',
    avatar: "/images/testimonial-avatar.png",
  },
];

export function HomeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2); // Default to 2 for tablet/desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(2.4); // Show 2 full cards and part of the third to hint scrolling
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < Math.ceil(testimonials.length - cardsToShow)) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 pt-16 pb-16 md:px-[80px] md:pt-[80px] md:pb-[80px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-[40px] text-center text-[34px] leading-[44.2px] font-medium tracking-tight text-black md:mb-[60px]">
          What clients say
        </h2>
      </motion.div>

      <div className="relative w-full overflow-hidden pb-4">
        {/* Track */}
        <div
          className="flex gap-[30px] transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / cardsToShow)}%))`,
          }}
        >
          {testimonials.map((testimonial, _idx) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0"
              style={{ width: `calc(${100 / cardsToShow}% - 30px)` }}
            >
              <div className="flex h-full min-h-[213px] w-full flex-col gap-[20px] rounded-[20px] border border-black/5 bg-[#f9f9f9] p-8 md:p-[30px]">
                <div className="flex h-[44px] items-center gap-[15px]">
                  <div className="relative h-[44px] w-[44px] shrink-0 overflow-hidden rounded-[4px] bg-black/10">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-[20px] leading-[28px] font-medium text-black">
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-[12px] leading-[15.6px] font-normal tracking-[1px] text-black uppercase"
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    >
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="text-[18px] leading-[28.8px] font-normal text-black">
                  {testimonial.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="mt-[40px] flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition-colors hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={handleNext}
          disabled={
            currentIndex >= Math.ceil(testimonials.length - cardsToShow)
          }
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition-colors hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Next testimonial"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

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
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "01",
    name: "Kevin W.",
    title: "Delfa Innovators",
    review:
      '"We deal with a huge volume of sales data. This dashboard is fast, reliable, and handles real-time metrics across a million records without any lag. The S3 integration is seamless."',
    avatar: "/images/testimonial-avatar.png",
    rating: 5,
  },
  {
    id: "02",
    name: "Ted S.",
    title: "Project Manager",
    review:
      '"Construction finance is complex, but this ERP handles audits, approvals, and reporting in one place. It has brought a new level of control and clarity to our financials."',
    avatar: "/images/testimonial-avatar.png",
    rating: 4,
  },
  {
    id: "03",
    name: "Ralph D.",
    title: "Grade Construction",
    review:
      '"The role-based flow means the right people see the right documents at the right time. It\'s reduced delays and added massive accountability across departments."',
    avatar: "/images/testimonial-avatar.png",
    rating: 3,
  },
  {
    id: "04",
    name: "Emily Watson",
    title: "FOUNDER, GROWTH AI",
    review:
      '"Working with them has been a game-changer for our business. The custom integrations saved us hundreds of hours each month."',
    avatar: "/images/testimonial-avatar.png",
    rating: 5,
  },
];

export function HomeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2); // Default to 2 for tablet/desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
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
    <section className="mx-auto w-full max-w-[1440px] px-4 pt-16 md:px-[80px]">
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
            transform: `translateX(calc(-${currentIndex} * (100% / ${cardsToShow} + ${30 / cardsToShow}px)))`,
          }}
        >
          {testimonials.map((testimonial, _idx) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0"
              style={{
                width: `calc(${100 / cardsToShow}% - ${(30 * (cardsToShow - 1)) / cardsToShow}px)`,
              }}
            >
              <div className="flex h-[307px] flex-col">
                <div className="relative h-[237px] w-full overflow-hidden rounded-[28px] bg-[#F0F6FF] px-[30px] pt-[30px] pb-[35px]">
                  {/* 66 Watermark */}
                  <div className="absolute top-0 right-0 z-0 opacity-80 mix-blend-multiply">
                    <Image
                      src="/svg/66.svg"
                      alt="Quote watermark"
                      width={191}
                      height={192}
                      className="object-contain"
                    />
                  </div>

                  <div className="relative z-10 flex flex-col gap-[16px]">
                    {/* Stars */}
                    <div className="flex gap-[4px]">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="relative h-[16px] w-[16px]">
                          <Image
                            src="/svg/star.svg"
                            alt="Star"
                            fill
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-[16px] leading-[28px] font-medium text-black">
                      {testimonial.review}
                    </p>
                  </div>
                </div>

                {/* Avatar and Name */}
                <div className="relative flex h-[70px] items-center px-[30px]">
                  <div className="absolute top-[-20px] left-[30px] h-[70px] w-[70px] shrink-0 overflow-hidden rounded-[24px] bg-black/10">
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
                  <div className="ml-[90px] flex flex-col justify-center gap-[2px]">
                    <h4 className="text-[16px] leading-[24px] font-bold text-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-[14px] leading-[20px] font-normal text-black/70">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
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

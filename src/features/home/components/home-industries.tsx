"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IndustryCard {
  title: string;
  description: string;
  imageSrc: string;
}

const industries: IndustryCard[] = [
  {
    title: "FinTech",
    description:
      "In the rapidly evolving world of financial technology, staying competitive means embracing cutting-edge innovation. From payment solutions to data security, our Salesforce development capabilities ensure secure, scalable, and seamless operations for your financial services.",
    imageSrc: "/images/fintech_card.png",
  },
  {
    title: "Pharmaceuticals",
    description:
      "Accelerate drug discovery, manage clinical trial data, and maintain strict regulatory compliance. Our tailor-made IT solutions enable secure data tracking and smooth workflow orchestration for pharmaceutical enterprises.",
    imageSrc: "/images/pharma_card.png",
  },
  {
    title: "Manufacturing",
    description:
      "Optimize factory production, schedule predictive maintenance, and automate inventory management. We deploy custom smart factory integrations that connect legacy ERP systems with modern IoT platforms.",
    imageSrc: "/images/manufacturing_card.png",
  },
  {
    title: "Insurance Automation",
    description:
      "Transform claims processing, automate policy underwriting, and improve customer satisfaction. Our AI-driven OCR document extraction and workflow tools reduce manual processing time by up to 80%.",
    imageSrc: "/images/sec_6_1.png",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Engage customers with personalized shopping experiences, synchronize stock across multiple marketplaces, and leverage predictive logistics. Our automated sales pipelines drive higher conversions.",
    imageSrc: "/images/retail_card.png",
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Track fleets in real-time, optimize warehouse space utilization, and streamline vendor communication. Our custom-built routing algorithms ensure on-time delivery while reducing operation costs.",
    imageSrc: "/images/logistics_card.png",
  },
];

export function HomeIndustries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isDesktop, setIsDesktop] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  // Responsive breakpoints
  useEffect(() => {
    const checkResponsive = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleCount(4);
        setIsDesktop(true);
      } else if (width >= 768) {
        setVisibleCount(2);
        setIsDesktop(false);
      } else {
        setVisibleCount(1);
        setIsDesktop(false);
      }
    };

    // Initial check
    checkResponsive();

    window.addEventListener("resize", checkResponsive);
    return () => window.removeEventListener("resize", checkResponsive);
  }, []);

  // Measure container width for precise pixel math
  useEffect(() => {
    if (!viewportRef.current) return;
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setContainerWidth(entries[0].contentRect.width);
      }
    });
    observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, []);

  const totalCards = industries.length;
  const maxIndex = Math.max(0, totalCards - visibleCount);

  // Ensure currentIndex stays within bounds on resize (e.g. going from mobile to desktop)
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  // Math for exact translation to prevent track shifting on hover
  const gap = 24; // 24px gap based on gap-6
  const baseWidthPx =
    containerWidth > 0
      ? (containerWidth - (visibleCount - 1) * gap) / visibleCount
      : 0;
  const stepPx = baseWidthPx + gap;
  const trackTranslateX = containerWidth > 0 ? -(currentIndex * stepPx) : 0;

  return (
    <section className="relative mx-auto w-full max-w-[1440px] px-4 pt-16 pb-20 md:px-8">
      {/* Background Graphic Box */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/section_6.png"
          fill
          className="object-cover"
          alt="Built for your industry background grid"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1380px] flex-col justify-between pt-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 px-4 md:px-0"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Built for your industry
          </h2>
          <p className="mt-3 text-sm font-normal text-white/60 md:text-base">
            We tailor to your data + compliance needs
          </p>
        </motion.div>

        {/* Carousel Viewport */}
        <div className="relative h-[513px] w-full overflow-hidden px-4 md:px-0">
          <div ref={viewportRef} className="h-full w-full">
            <div
              className="flex h-full gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform:
                  containerWidth > 0
                    ? `translateX(${trackTranslateX}px)`
                    : `translateX(0px)`,
              }}
            >
              {industries.map((card, index) => {
                const isHovered = hoveredIndex === index;

                // Calculate precise widths based on hover math
                let widthStyle = {};
                if (containerWidth > 0) {
                  if (!isDesktop || hoveredIndex === null) {
                    widthStyle = { width: `${baseWidthPx}px` };
                  } else if (hoveredIndex === index) {
                    // Hovered card takes up 60% more width
                    widthStyle = { width: `${baseWidthPx * 1.6}px` };
                  } else {
                    const isVisible =
                      index >= currentIndex &&
                      index < currentIndex + visibleCount;
                    if (isVisible) {
                      // Other visible cards shrink by exact proportion (0.6 / 3 = 0.2 -> 0.8)
                      widthStyle = { width: `${baseWidthPx * 0.8}px` };
                    } else {
                      // Invisible cards maintain base width
                      widthStyle = { width: `${baseWidthPx}px` };
                    }
                  }
                }

                return (
                  <div
                    key={card.title}
                    onMouseEnter={() => isDesktop && setHoveredIndex(index)}
                    onMouseLeave={() => isDesktop && setHoveredIndex(null)}
                    className={cn(
                      "group relative h-full shrink-0 cursor-pointer overflow-hidden rounded-[24px] border border-white/10 shadow-lg transition-all duration-400 ease-in-out",
                      containerWidth === 0 &&
                        "w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-72px)/4)]",
                    )}
                    style={widthStyle}
                  >
                    {/* Background image */}
                    <Image
                      src={card.imageSrc}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      alt={`${card.title} Background image`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Dark gradient overlay for typography readability */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                    {/* Card Content Panel */}
                    <div
                      className={cn(
                        "absolute bottom-0 left-0 z-20 flex flex-col justify-end overflow-hidden bg-white text-black transition-all duration-400 ease-in-out",
                        isDesktop
                          ? isHovered
                            ? "h-[240px] w-full rounded-t-[24px] p-6"
                            : "h-[56px] w-[80%] max-w-[220px] rounded-tr-[24px] px-5 py-4"
                          : "h-[210px] w-full rounded-t-[24px] p-5",
                      )}
                    >
                      {/* Category Title */}
                      <h3
                        className={cn(
                          "font-bold whitespace-nowrap text-black transition-all duration-300",
                          isDesktop
                            ? isHovered
                              ? "mb-2 text-left text-lg whitespace-normal md:text-xl"
                              : "w-full truncate text-left text-sm leading-none md:text-base"
                            : "mb-2 text-left text-base whitespace-normal",
                        )}
                      >
                        {card.title}
                      </h3>

                      {/* Description & Read More details */}
                      <div
                        className={cn(
                          "flex flex-col justify-start transition-all duration-400 ease-in-out",
                          isDesktop
                            ? isHovered
                              ? "max-h-[200px] opacity-100"
                              : "pointer-events-none max-h-0 opacity-0"
                            : "max-h-[200px] opacity-100",
                        )}
                      >
                        <p className="mt-1 line-clamp-4 text-xs leading-relaxed text-neutral-600 md:text-sm">
                          {card.description}
                        </p>
                        <span className="mt-3 inline-block text-xs font-semibold text-blue-600 hover:underline md:text-sm">
                          Read More
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Arrow Controls */}
        <div className="mt-8 flex items-center justify-end gap-4 px-4 md:px-0">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full border border-white/20 backdrop-blur-md transition-all duration-300",
              currentIndex === 0
                ? "cursor-not-allowed bg-black/30 text-white opacity-30"
                : "cursor-pointer bg-black/50 text-white opacity-100 hover:scale-105 hover:bg-white hover:text-black",
            )}
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full border border-white/20 backdrop-blur-md transition-all duration-300",
              currentIndex >= maxIndex
                ? "cursor-not-allowed bg-black/30 text-white opacity-30"
                : "cursor-pointer bg-black/50 text-white opacity-100 hover:scale-105 hover:bg-white hover:text-black",
            )}
            aria-label="Next slide"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

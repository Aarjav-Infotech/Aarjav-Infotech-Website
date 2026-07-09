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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [containerWidth, setContainerWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Responsive breakpoints
  useEffect(() => {
    const checkResponsive = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleCount(4);
      } else if (width >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
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
  const gap = 30; // 30px gap

  const getCardWidth = (index: number) => {
    if (visibleCount === 1) return containerWidth;

    const W = containerWidth - (visibleCount - 1) * gap;
    if (hoveredIndex === null) return W / visibleCount;

    if (visibleCount === 4) {
      if (index === hoveredIndex) return W * 0.45;
      return W * (0.55 / 3);
    }

    if (visibleCount === 2) {
      if (index === hoveredIndex) return W * 0.65;
      return W * 0.35;
    }

    return W / visibleCount;
  };

  const getTrackTranslateX = () => {
    if (containerWidth === 0) return 0;
    let translate = 0;
    for (let i = 0; i < currentIndex; i++) {
      translate += getCardWidth(i) + gap;
    }
    return -translate;
  };

  return (
    <section className="relative flex w-full flex-col justify-center px-4 py-20 md:h-[971px] md:px-8">
      {/* Background Graphic Box */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/section_6.png"
          fill
          // className="object-cover"
          alt="Built for your industry background grid"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1380px] flex-col px-4 md:px-0">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-[30px] flex flex-col gap-[10px] px-4 md:px-[50px]"
        >
          <h2 className="text-[48px] leading-[49px] font-normal tracking-tight text-white">
            Built for your industry
          </h2>
          <p className="text-[16px] leading-[22.4px] font-normal text-white">
            We tailor to your data + compliance needs
          </p>
        </motion.div>

        {/* Carousel Viewport */}
        <div className="relative h-[513px] w-full overflow-hidden">
          <div
            ref={viewportRef}
            className="h-full w-full"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="flex h-full gap-[30px] transition-transform duration-500 ease-in-out"
              style={{
                transform:
                  containerWidth > 0
                    ? `translateX(${getTrackTranslateX()}px)`
                    : `translateX(0px)`,
              }}
            >
              {industries.map((card, index) => {
                // Calculate precise widths based on hover math
                let widthStyle = {};
                if (containerWidth > 0) {
                  widthStyle = { width: `${getCardWidth(index)}px` };
                }

                return (
                  <div
                    key={card.title}
                    onMouseEnter={() => setHoveredIndex(index)}
                    className={cn(
                      "group relative h-full shrink-0 cursor-pointer overflow-hidden rounded-[20px] border border-white/10 shadow-lg transition-all duration-500 ease-in-out",
                      containerWidth === 0 &&
                        "w-full md:w-[calc((100%-30px)/2)] lg:w-[calc((100%-90px)/4)]",
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

                    {/* Card Content Panel */}
                    <div
                      className={cn(
                        "absolute bottom-0 left-0 z-20 flex flex-col overflow-hidden rounded-tr-[20px] bg-white transition-all duration-500 ease-in-out",
                        hoveredIndex === index
                          ? "w-full p-[20px]"
                          : "w-max p-[20px]",
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center transition-all duration-500",
                          hoveredIndex === index ? "mb-[14px]" : "mb-0",
                        )}
                      >
                        <h3
                          className={cn(
                            "leading-none whitespace-nowrap text-black transition-all duration-500",
                            hoveredIndex === index
                              ? "text-[24px] font-bold"
                              : "text-[16px] font-medium",
                          )}
                        >
                          {card.title}
                        </h3>
                      </div>
                      <div
                        className={cn(
                          "grid w-full transition-all duration-500 ease-in-out",
                          hoveredIndex === index
                            ? "relative grid-rows-[1fr] opacity-100"
                            : "absolute grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="flex min-w-[200px] flex-col gap-[14px] overflow-hidden">
                          <p className="line-clamp-4 text-[14px] leading-relaxed text-[#475467]">
                            {card.description}
                          </p>
                          <a
                            href="#read-more"
                            className="text-[14px] font-semibold text-[#08388D] hover:underline"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Arrow Controls */}
        <div className="mt-[45px] flex items-center justify-end gap-4 px-4 md:px-[50px]">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={cn(
              "flex h-[44px] w-[44px] items-center justify-center rounded-[50px] transition-all duration-300",
              currentIndex === 0
                ? "cursor-not-allowed bg-white/5 text-white/30"
                : "cursor-pointer bg-white/20 text-white hover:scale-105 hover:bg-white hover:text-black",
            )}
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-[14px] w-[14px]" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={cn(
              "flex h-[44px] w-[44px] items-center justify-center rounded-[50px] transition-all duration-300",
              currentIndex >= maxIndex
                ? "cursor-not-allowed bg-white/5 text-white/30"
                : "cursor-pointer bg-white/20 text-white hover:scale-105 hover:bg-white hover:text-black",
            )}
            aria-label="Next slide"
          >
            <ArrowRight className="h-[14px] w-[14px]" />
          </button>
        </div>
      </div>
    </section>
  );
}

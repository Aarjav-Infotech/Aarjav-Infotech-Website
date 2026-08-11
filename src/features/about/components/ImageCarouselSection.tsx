"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallary-1.svg",
    alt: "Server room equipment",
  },
  {
    id: 2,
    src: "/images/gallary-2.svg",
    alt: "Team members collaborating in modern office",
  },
  {
    id: 3,
    src: "/images/gallary-3.svg",
    alt: "Person working in bright office workspace",
  },
];

export function ImageCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(1); // Default center image

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1,
    );
  };

  // Function to determine positioning and scaling relative to active slide
  const getCardStyle = (index: number) => {
    const total = GALLERY_IMAGES.length;
    const diff = (index - currentIndex + total) % total;

    if (diff === 0) {
      // Active center card - Full size
      return "z-20 w-[80%] sm:w-[55%] lg:w-[48%] opacity-100 scale-100 translate-x-0";
    }
    if (diff === 1 || diff === -(total - 1)) {
      // Right peek card - Reduced width, height (scale-75), and scaled down
      return "z-10 w-[60%] sm:w-[40%] lg:w-[35%] opacity-70 scale-75 translate-x-[65%] sm:translate-x-[75%]";
    }
    // Left peek card - Reduced width, height (scale-75), and scaled down
    return "z-10 w-[60%] sm:w-[40%] lg:w-[35%] opacity-70 scale-75 -translate-x-[65%] sm:-translate-x-[75%]";
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center">
        {/* Carousel Container */}
        <div className="relative flex h-[350px] w-full items-center justify-center sm:h-[420px] md:h-[480px]">
          {GALLERY_IMAGES.map((img, index) => {
            const isCenter = index === currentIndex;

            return (
              <div
                key={img.id}
                className={`absolute flex h-full items-center justify-center transition-all duration-500 ease-out ${getCardStyle(
                  index,
                )}`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[24px] shadow-lg sm:rounded-[32px]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={isCenter}
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 85vw, 50vw"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="flex size-11 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-white shadow-[0_8px_20px_rgba(0,56,208,0.4)] transition hover:scale-105 hover:bg-[#002cb0] active:scale-95"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="flex size-11 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-white shadow-[0_8px_20px_rgba(0,38,208,0.4)] transition hover:scale-105 hover:bg-[#002cb0] active:scale-95"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ImageCarouselSection;

"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { asset } from "@/lib/cdn";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: asset("/images/gallary-1.svg"),
    alt: "Server room equipment",
  },
  {
    id: 2,
    src: asset("/images/gallary-2.svg"),
    alt: "Team members collaborating in modern office",
  },
  {
    id: 3,
    src: asset("/images/gallary-3.svg"),
    alt: "Person working in bright office workspace",
  },
];

export function ImageCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(1); // Default center image

  // State for touch/swipe gestures
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50;

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

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Function to determine positioning and scaling relative to active slide
  const getCardStyle = (index: number) => {
    const total = GALLERY_IMAGES.length;
    const diff = (index - currentIndex + total) % total;

    if (diff === 0) {
      // Active center card - Full size
      return "z-20 w-[80%] sm:w-[55%] lg:w-[48%] opacity-100 scale-100 translate-x-0 cursor-default pointer-events-auto";
    }
    if (diff === 1 || diff === -(total - 1)) {
      // Right peek card (Responsive & Big Screen adjustments)
      return "z-10 w-[60%] sm:w-[40%] lg:w-[35%] opacity-70 scale-75 translate-x-[65%] sm:translate-x-[75%] cursor-pointer hover:opacity-90 pointer-events-auto";
    }
    // Left peek card (Responsive & Big Screen adjustments)
    return "z-10 w-[60%] sm:w-[40%] lg:w-[35%] opacity-70 scale-75 -translate-x-[65%] sm:-translate-x-[75%] cursor-pointer hover:opacity-90 pointer-events-auto";
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center">
        {/* Carousel Container with Touch Handlers */}
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative flex h-[350px] w-full items-center justify-center select-none sm:h-[420px] md:h-[480px]"
        >
          {GALLERY_IMAGES.map((img, index) => {
            const isCenter = index === currentIndex;

            return (
              <div
                key={img.id}
                onClick={() => setCurrentIndex(index)}
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
                    className="pointer-events-none object-cover object-center"
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
            className="flex size-11 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-white shadow-[0_8px_20px_rgba(0,56,208,0.4)] transition hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="flex size-11 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-white shadow-[0_8px_20px_rgba(0,38,208,0.4)] transition hover:scale-105 active:scale-95"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ImageCarouselSection;

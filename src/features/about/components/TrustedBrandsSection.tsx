"use client";

import Image from "next/image";

interface Logo {
  name: string;
  src: string;
}

const LOGOS: Logo[] = [
  { name: "Brand 1", src: "/images/partner-1.svg" },
  { name: "Brand 2", src: "/images/partner-2.svg" },
  { name: "Brand 3", src: "/images/partner-3.svg" },
  { name: "Brand 4", src: "/images/partner-4.svg" },
  { name: "Brand 5", src: "/images/partner-5.svg" },
  { name: "Brand 6", src: "/images/partner-6.svg" },
];

export function TrustedBrandsSection() {
  return (
    <div className="w-full border-y border-slate-100 bg-white py-12 sm:py-12">
      {/* Inline Keyframes style to ensure smooth infinite loop without Tailwind config requirements */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: marquee 25s linear infinite;
        }
      `}</style>

      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-4 md:flex-row md:gap-25 lg:px-12">
        {/* Static Left Label */}
        <div className="shrink-0 text-center md:text-left">
          <p className="text-sm leading-tight font-semibold text-slate-500 sm:text-lg">
            Trusted by 100+
            <br className="hidden sm:inline" /> top-tier brands
          </p>
        </div>

        {/* Infinite Logo Slider Container */}
        <div className="relative flex w-full overflow-hidden">
          {/* Gradient Masks (Left & Right Fades) */}
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent" />

          {/* First Marquee Track */}
          <div className="animate-infinite-scroll flex shrink-0 items-center gap-12 pr-12">
            {LOGOS.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="relative h-10 w-32 shrink-0 transition-opacity duration-300 hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  priority={index < 3}
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            ))}
          </div>

          {/* Duplicate Marquee Track for Seamless Loop */}
          <div
            aria-hidden="true"
            className="animate-infinite-scroll flex shrink-0 items-center gap-12 pr-12"
          >
            {LOGOS.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="relative h-10 w-32 shrink-0 transition-opacity duration-300 hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedBrandsSection;

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ICONS = {
  icon1: "/icons/icon-1.svg",
  icon2: "/icons/icon-2.svg",
  icon3: "/icons/icon-3.svg",
  icon4: "/icons/icon-4.svg",
  icon5: "/icons/icon-5.svg",
  icon6: "/icons/icon-6.svg",
  icon7: "/icons/icon-7.svg",
  icon8: "/icons/icon-8.svg",
  icon9: "/icons/icon-9.svg",
  icon10: "/icons/icon-10.svg",
  icon11: "/icons/icon-11.svg",
  icon12: "/icons/icon-12.svg",
};

function TechImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={70}
      height={70}
      className="relative z-10 h-full w-full object-contain"
    />
  );
}

const techCards = [
  // Left Side Icons (1 to 6)
  {
    icon: <TechImage src={ICONS.icon1} alt="Icon 1" />,
    position:
      "top-[12%] left-[4%] sm:top-[16%] sm:left-[8%] md:top-[18%] md:left-[12%] lg:top-[20%] lg:left-[14%] xl:left-[16%]",
    rotate: "-rotate-[12deg]",
    delay: 0,
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon2} alt="Icon 2" />,
    position:
      "top-[12%] left-[22%] sm:top-[16%] sm:left-[22%] md:top-[18%] md:left-[24%] lg:top-[20%] lg:left-[26%] xl:left-[28%]",
    rotate: "rotate-[8deg]",
    delay: 0.8,
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon3} alt="Icon 3" />,
    position:
      "top-[38%] left-[2%] sm:top-[40%] sm:left-[4%] md:left-[6%] lg:left-[6%] xl:left-[8%]",
    rotate: "-rotate-[8deg]",
    delay: 1.2,
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon4} alt="Icon 4" />,
    position:
      "top-[38%] left-[20%] sm:top-[40%] sm:left-[18%] md:left-[18%] lg:left-[18%] xl:left-[20%]",
    rotate: "rotate-[10deg]",
    delay: 0.4,
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon5} alt="Icon 5" />,
    position: "top-[64%] left-[4%] sm:top-[65%] sm:left-[6%] md:left-[8%]",
    rotate: "rotate-[12deg]",
    delay: 1.6,
    hasBox: true,
  },
  {
    icon: <TechImage src={ICONS.icon6} alt="Icon 6" />,
    position: "top-[60%] left-[20%] sm:top-[60%] sm:left-[18%] md:left-[20%]",
    rotate: "-rotate-[6deg]",
    delay: 0.2,
    hasBox: true,
  },

  // Right Side Icons (7 to 12)
  {
    icon: <TechImage src={ICONS.icon7} alt="Icon 7" />,
    position:
      "top-[12%] right-[22%] sm:top-[16%] sm:right-[22%] md:top-[18%] md:right-[24%] lg:top-[20%] lg:right-[26%] xl:right-[28%]",
    rotate: "-rotate-[10deg]",
    delay: 0.3,
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon8} alt="Icon 8" />,
    position:
      "top-[12%] right-[4%] sm:top-[16%] sm:right-[8%] md:top-[18%] md:right-[12%] lg:top-[20%] lg:right-[14%] xl:right-[16%]",
    rotate: "rotate-[12deg]",
    delay: 1.1,
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon9} alt="Icon 9" />,
    position:
      "top-[38%] right-[20%] sm:top-[40%] sm:right-[18%] md:right-[18%] lg:right-[20%]",
    rotate: "rotate-[6deg]",
    delay: 0.7,
    hasBox: true,
  },
  {
    icon: <TechImage src={ICONS.icon10} alt="Icon 10" />,
    position:
      "top-[38%] right-[2%] sm:top-[40%] sm:right-[4%] md:right-[6%] lg:right-[8%]",
    rotate: "-rotate-[12deg]",
    delay: 1.5,
    hasBox: true,
  },
  {
    icon: <TechImage src={ICONS.icon11} alt="Icon 11" />,
    position:
      "top-[60%] right-[20%] sm:top-[60%] sm:right-[18%] md:right-[20%]",
    rotate: "-rotate-[8deg]",
    delay: 0.5,
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon12} alt="Icon 12" />,
    position:
      "top-[64%] right-[4%] sm:top-[65%] sm:right-[6%] md:right-[8%] lg:right-[9%]",
    rotate: "rotate-[10deg]",
    delay: 1.3,
    hasBox: false,
  },
];

function IconCard({
  icon,
  position,
  rotate,
  delay,
  hasBox,
}: {
  icon: React.ReactNode;
  position: string;
  rotate: string;
  delay: number;
  hasBox?: boolean;
}) {
  return (
    <div
      className={`absolute ${position} ${rotate} z-10 transition-all duration-500 ease-out`}
    >
      <motion.div
        animate={{
          y: [0, -14, 0],
          x: [0, 3, 0, -3, 0],
          rotate: [0, 1.5, 0, -1.5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
          delay: delay,
        }}
        className="pointer-events-auto relative flex h-[50px] w-[50px] transform-gpu cursor-pointer items-center justify-center overflow-hidden rounded-xl !p-0 transition-transform duration-300 [will-change:transform] hover:scale-110 sm:h-[65px] sm:w-[65px] sm:rounded-2xl md:h-[85px] md:w-[85px] lg:h-[100px] lg:w-[100px]"
      >
        {hasBox && (
          <div className="absolute inset-0 z-0 rounded-xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.12)] sm:rounded-2xl" />
        )}

        <div className="flex h-full w-full items-center justify-center !p-0 p-1.5 sm:p-2">
          {icon}
        </div>
      </motion.div>
    </div>
  );
}

interface HomeTechnologiesProps {
  eyebrow?: string;
  contactHref?: string;
}

export function HomeTechnologies({
  eyebrow = "Core Technology",
  contactHref = "/contact",
}: HomeTechnologiesProps) {
  return (
    <section className="relative isolate flex min-h-[550px] w-full flex-col items-center justify-center overflow-hidden bg-white px-4 py-12 sm:min-h-[620px] sm:py-16 md:min-h-[680px] lg:px-8">
      {/* Top Blur Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      {/* Floating Icon Cards (Visible across all screens, responsive positioning) */}
      <div className="xs:block absolute inset-0 hidden">
        {techCards.map((card, i) => (
          <IconCard key={i} {...card} />
        ))}
      </div>

      {/* Main Hero / Center Content */}
      <div className="relative z-20 mx-auto flex max-w-xl flex-col items-center text-center">
        {eyebrow && (
          <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-sm sm:mb-8 sm:border-b-4 sm:text-[14px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
            {eyebrow}
          </div>
        )}

        <h2 className="mb-4 text-2xl leading-[1.15] font-bold tracking-tight text-slate-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          Services Built on <br />
          Leading Technologies.
        </h2>

        <p className="mt-2 mb-6 max-w-md text-sm leading-relaxed text-slate-500 sm:mt-4 sm:mb-8 sm:max-w-xl sm:text-base md:text-lg">
          Combining AI innovation with modern development frameworks to create
          reliable, future-ready digital solutions.
        </p>

        {/* CTA Button */}
        <div>
          <Button
            asChild
            className="gap-3 rounded-full border-b-4 border-black bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] px-5 py-5 text-sm text-white shadow-md transition-all duration-500 ease-in-out hover:bg-[linear-gradient(180deg,#091E46_0%,#0053FA_50%,#075FF3_100%)] hover:px-6 sm:px-7 sm:py-6 sm:text-base sm:hover:px-7.5"
          >
            <Link href={contactHref}>Book a discovery call</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Grid Fallback for very small screens (< 480px / xs breakpoint) */}
      <div className="xs:hidden relative z-20 mx-auto mt-8 grid max-w-xs grid-cols-3 gap-3">
        {[
          {
            icon: <TechImage key="m1" src={ICONS.icon1} alt="Icon 1" />,
            hasBox: false,
          },
          {
            icon: <TechImage key="m2" src={ICONS.icon3} alt="Icon 3" />,
            hasBox: false,
          },
          {
            icon: <TechImage key="m3" src={ICONS.icon5} alt="Icon 5" />,
            hasBox: true,
          },
          {
            icon: <TechImage key="m4" src={ICONS.icon7} alt="Icon 7" />,
            hasBox: false,
          },
          {
            icon: <TechImage key="m5" src={ICONS.icon9} alt="Icon 9" />,
            hasBox: true,
          },
          {
            icon: <TechImage key="m6" src={ICONS.icon11} alt="Icon 11" />,
            hasBox: false,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="relative flex h-14 w-14 cursor-pointer items-center justify-center overflow-hidden rounded-xl !p-0"
          >
            {item.hasBox && <div className="absolute inset-0 z-0 shadow-md" />}
            <div className="relative z-10 flex h-full w-full items-center justify-center p-1">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

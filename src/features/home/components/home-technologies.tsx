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
    position: "top-[20%] left-[14%] lg:left-[16%]",
    rotate: "-rotate-[12deg]",
    delay: 0,
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon2} alt="Icon 2" />,
    position: "top-[20%] left-[26%] lg:left-[28%]",
    rotate: "rotate-[8deg]",
    delay: 0.8,
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon3} alt="Icon 3" />,
    position: "top-[40%] left-[6%] lg:left-[8%]",
    rotate: "-rotate-[8deg]",
    delay: 1.2,
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon4} alt="Icon 4" />,
    position: "top-[40%] left-[18%] lg:left-[20%]",
    rotate: "rotate-[10deg]",
    delay: 0.4,
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon5} alt="Icon 5" />,
    position: "top-[65%] left-[8%] lg:left-[8%]",
    rotate: "rotate-[12deg]",
    delay: 1.6,
    hasBox: true,
  },
  {
    icon: <TechImage src={ICONS.icon6} alt="Icon 6" />,
    position: "top-[60%] left-[20%] lg:left-[20%]",
    rotate: "-rotate-[6deg]",
    delay: 0.2,
    hasBox: true,
  },

  // Right Side Icons (7 to 12)
  {
    icon: <TechImage src={ICONS.icon7} alt="Icon 7" />,
    position: "top-[20%] right-[26%] lg:right-[28%]",
    rotate: "-rotate-[10deg]",
    delay: 0.3,
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon8} alt="Icon 8" />,
    position: "top-[20%] right-[14%] lg:right-[16%]",
    rotate: "rotate-[12deg]",
    delay: 1.1,
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon9} alt="Icon 9" />,
    position: "top-[40%] right-[20%] lg:right-[20%]",
    rotate: "rotate-[6deg]",
    delay: 0.7,
    hasBox: true,
  },
  {
    icon: <TechImage src={ICONS.icon10} alt="Icon 10" />,
    position: "top-[40%] right-[8%] lg:right-[8%]",
    rotate: "-rotate-[12deg]",
    delay: 1.5,
    hasBox: true,
  },
  {
    icon: <TechImage src={ICONS.icon11} alt="Icon 11" />,
    position: "top-[60%] right-[20%] lg:right-[20%]",
    rotate: "-rotate-[8deg]",
    delay: 0.5,
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon12} alt="Icon 12" />,
    position: "top-[65%] right-[9%] lg:right-[9%]",
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
      className={`absolute ${position} ${rotate} z-10 transition-transform duration-500 ease-out`}
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
        className="pointer-events-auto relative flex h-[80px] w-[80px] transform-gpu cursor-pointer items-center justify-center overflow-hidden rounded-2xl !p-0 transition-transform duration-300 [will-change:transform] hover:scale-110 lg:h-[100px] lg:w-[100px]"
      >
        {hasBox && (
          <div className="absolute inset-0 z-0 rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.12)]" />
        )}

        <div className="flex h-full w-full items-center justify-center !p-0">
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
    <section className="relative isolate flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-white py-10 lg:min-h-[680px]">
      {/* Top Blur Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      {/* Floating Icon Cards (Visible ONLY on large screens: lg and above) */}
      <div className="absolute inset-0 hidden lg:block">
        {techCards.map((card, i) => (
          <IconCard key={i} {...card} />
        ))}
      </div>

      {/* Main Hero / Center Content */}
      <div className="relative z-20 mx-auto flex max-w-xl flex-col items-center px-4 text-center">
        {eyebrow && (
          <div className="mb-8 inline-flex items-center gap-1.5 rounded border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-[14px] font-semibold text-[#2b2bad] shadow-sm sm:mb-10">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
            {eyebrow}
          </div>
        )}

        <h2 className="mb-6 text-3xl leading-[1.15] font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
          Services Built on <br />
          Leading Technologies.
        </h2>

        <p className="max-w-auto mt-2 mb-8 leading-relaxed text-slate-500 sm:text-lg">
          Combining AI innovation with modern development frameworks to create
          reliable, future-ready digital solutions.
        </p>

        {/* CTA Button */}
        <div>
          <Button
            asChild
            className="gap-3 rounded-full border-b-4 border-black bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] px-7 py-6 text-white shadow-md transition-all duration-500 ease-in-out hover:bg-[linear-gradient(180deg,#091E46_0%,#0053FA_50%,#075FF3_100%)] hover:px-7.5"
          >
            <Link href={contactHref}>Book a discovery call</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

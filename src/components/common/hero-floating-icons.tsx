"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function InlineCapsule() {
  const capsuleRef = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: capsuleRef,
    offset: ["start end", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [10, -25]);
  const translateY = useTransform(scrollYProgress, [0, 1], [10, -25]);

  return (
    <span
      ref={capsuleRef}
      className="relative mx-3 my-1 inline-flex items-center align-middle"
    >
      {/* 3D Slot Pill Base Container */}
      <span className="relative inline-flex h-[56px] w-[140px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#00144D_0%,#003BB3_50%,#0055FF_100%)] shadow-[inset_0_6px_12px_rgba(0,0,0,0.85)] md:h-[68px] md:w-[175px]">
        {/* Dark Rim Depth Overlay */}
        <span className="pointer-events-none absolute inset-0 z-20 rounded-full shadow-[inset_0_4px_8px_rgba(0,0,0,0.7)]" />

        {/* --- 1. TOP-LEFT ICON --- */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <motion.div
            className="absolute -top-[18px] left-[30px] z-10 w-[30px] md:w-[50px]"
            style={{ x: translateX, y: translateY }}
          >
            <Image
              src="/icons/icon_1.svg"
              alt="Top Icon"
              width={50}
              height={50}
              className="h-auto w-full rotate-[10deg] object-contain drop-shadow-md"
            />
          </motion.div>
        </span>

        {/* --- 2. CENTER-RIGHT ICON --- */}
        <motion.div
          className="absolute top-[40px] right-[25px] z-30 w-[50px] md:w-[60px]"
          style={{ x: translateX, y: translateY }}
        >
          <Image
            src="/icons/icon_2.svg"
            alt="Center Right Icon"
            width={60}
            height={60}
            className="h-auto w-full rotate-[20deg] object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* --- 3. DOWNSIDE OUTSIDE ICON --- */}
        <motion.div
          className="absolute -bottom-[70px] left-[24px] z-30 w-[50px] md:w-[60px]"
          style={{ x: translateX, y: translateY }}
        >
          <Image
            src="/icons/icon_1.svg"
            alt="Bottom Icon"
            width={60}
            height={60}
            className="h-auto w-full -rotate-[45deg] object-contain drop-shadow-2xl"
          />
        </motion.div>
      </span>
    </span>
  );
}

/**
 * HeroFloatingIcons
 * -------------------------------------------------------------
 * Background decorative assets (Cylinder & Pinwheel).
 * Hidden on small mobile screens and visible starting from medium (md) screens.
 */
export function HeroFloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const tubeY = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const pinwheelY = useTransform(scrollYProgress, [0, 1], [0, -35]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-hidden"
    >
      {/* Left Tube / Cylinder Asset */}
      <motion.div
        className="absolute bottom-[25%] left-[10%] z-30 hidden w-[65px] transform-gpu [will-change:transform] md:bottom-[28%] md:left-[16%] md:block md:w-[90px]"
        style={{ y: tubeY }}
      >
        <Image
          src="/icons/cylinder.svg"
          alt="Cylinder Icon"
          width={70}
          height={70}
          className="h-full w-full object-contain"
          style={{ height: "auto", width: "auto" }}
        />
      </motion.div>

      {/* Right Pinwheel Asset */}
      <motion.div
        className="absolute right-[8%] bottom-[10%] z-30 hidden w-[120px] md:right-[12%] md:bottom-[15%] md:block md:w-[170px]"
        style={{ y: pinwheelY }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/icons/Visual.svg"
            alt="Decoration Pinwheel"
            width={170}
            height={170}
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

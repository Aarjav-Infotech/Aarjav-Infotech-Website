"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HomeTechnologies() {
  return (
    <section className="relative w-full bg-transparent">
      <div className="relative flex min-h-[1200px] w-full flex-col justify-center overflow-visible">
        <Image
          src="/images/technologies_bg_image.png"
          fill
          className="pointer-events-none z-0"
          alt="Background pattern"
          priority
        />

        <div className="relative z-10 mx-auto flex w-full flex-col gap-[45px] px-4 pt-[120px] pb-[120px] md:px-[80px]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-start gap-[10px]"
          >
            <h2 className="font-sans text-[32px] leading-[1.2] font-medium tracking-normal text-white md:text-[46px] md:leading-[46px]">
              Services Built on Leading Technologies.
            </h2>
            <p className="max-w-[817px] font-sans text-[16px] leading-[22.4px] font-normal tracking-normal text-white">
              Combining AI innovation with modern development frameworks to
              create reliable, future-ready digital solutions.
            </p>
          </motion.div>

          {/* Logos Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex w-full flex-col gap-[16px] rounded-[20px] border border-white/5 bg-[#F3F7FF]/20 p-4 backdrop-blur-sm md:gap-[26px] md:p-[20px]"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="flex w-full justify-center">
                <Image
                  src={`/svg/logo_line_${num}.svg`}
                  alt={`Technology stack line ${num}`}
                  width={1240}
                  height={82}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

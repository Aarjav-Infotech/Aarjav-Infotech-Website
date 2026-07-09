"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface HomeHowWeWorkProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  leftSteps: ProcessStep[];
  rightSteps: ProcessStep[];
  centerImageSrc?: string;
}

export function HomeHowWeWork({
  eyebrow,
  title,
  subtitle,
  leftSteps,
  rightSteps,
  centerImageSrc = "/images/leyers.png",
}: HomeHowWeWorkProps) {
  return (
    <section className="overflow-hidden bg-white py-10">
      <div className="w-full rounded-b-[48px] bg-white px-8">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-16"
          >
            {eyebrow && (
              <p className="text-muted-foreground mb-4 text-[10px] font-bold tracking-wider uppercase">
                {eyebrow}
              </p>
            )}
            <h2 className="text-foreground mb-4 text-[40px] leading-tight font-medium md:text-[50px]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground max-w-[800px] text-lg">
                {subtitle}
              </p>
            )}
          </motion.div>

          <div className="relative mt-16 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[320px_1fr_320px] lg:gap-0">
            {/* Center Image (Absolute for Desktop) */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 hidden h-[770px] w-[1032px] -translate-x-1/2 -translate-y-1/2 lg:block">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-full w-full"
              >
                <Image
                  src={centerImageSrc}
                  alt="Process Layers"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Left Column */}
            <div className="z-10 flex flex-col justify-between gap-8 py-8 lg:gap-[64px]">
              {leftSteps.map((item) => {
                const stepNumber = parseInt(item.step, 10);
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ y: -6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      opacity: { duration: 0.5, delay: stepNumber * 0.15 },
                      x: {
                        type: "spring",
                        stiffness: 60,
                        damping: 15,
                        delay: stepNumber * 0.15,
                      },
                      y: { type: "spring", stiffness: 400, damping: 25 },
                    }}
                    className="border-border relative flex w-full cursor-default flex-col rounded-[16px] border bg-white p-6 shadow-[0_4px_0_0_#e5e7eb] transition-all duration-300 hover:border-blue-600 hover:shadow-[0_4px_0_0_#2563eb]"
                  >
                    <div className="pointer-events-none absolute top-[40px] right-[-120px] hidden h-[1px] w-[120px] border-t border-dashed border-blue-200 lg:block">
                      <div className="absolute top-1/2 right-0 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-blue-600 shadow-[0_0_0_3px_rgba(37,99,235,0.1)]" />
                    </div>
                    <div className="text-muted-foreground mb-4 border-b pb-4 text-[12px] font-medium tracking-wider uppercase">
                      STEP {item.step}
                    </div>
                    <h4 className="mb-3 text-[20px] leading-[28px] font-medium">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-[14px] leading-[20px]">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Center Image (Mobile) */}
            <div className="pointer-events-none relative z-0 -my-10 flex h-[400px] w-full items-center justify-center lg:hidden">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-full w-full"
              >
                <Image
                  src={centerImageSrc}
                  alt="Process Layers"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
            <div className="z-0 hidden w-full lg:block"></div>

            {/* Right Column */}
            <div className="z-10 flex flex-col justify-evenly gap-8 py-16 lg:gap-[64px]">
              {rightSteps.map((item) => {
                const stepNumber = parseInt(item.step, 10);
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ y: -6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      opacity: { duration: 0.5, delay: stepNumber * 0.15 },
                      x: {
                        type: "spring",
                        stiffness: 60,
                        damping: 15,
                        delay: stepNumber * 0.15,
                      },
                      y: { type: "spring", stiffness: 400, damping: 25 },
                    }}
                    className="border-border relative flex w-full cursor-default flex-col rounded-[16px] border bg-white p-6 shadow-[0_4px_0_0_#e5e7eb] transition-all duration-300 hover:border-blue-600 hover:shadow-[0_4px_0_0_#2563eb]"
                  >
                    <div className="pointer-events-none absolute top-[40px] left-[-120px] hidden h-[1px] w-[120px] border-t border-dashed border-blue-200 lg:block">
                      <div className="absolute top-1/2 left-0 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-blue-600 shadow-[0_0_0_3px_rgba(37,99,235,0.1)]" />
                    </div>
                    <div className="text-muted-foreground mb-4 border-b pb-4 text-[12px] font-medium tracking-wider uppercase">
                      STEP {item.step}
                    </div>
                    <h4 className="mb-3 text-[20px] leading-[28px] font-medium">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-[14px] leading-[20px]">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

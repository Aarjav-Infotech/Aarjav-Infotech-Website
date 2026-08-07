"use client";

import {
  AnimatePresence,
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { MOTION } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const directionOffset = {
  up: { y: 12 }, // Reduced transform offset from 24 to 12 for smoother mobile rendering
  down: { y: -12 },
  left: { x: 12 },
  right: { x: -12 },
  none: {},
} as const;

/**
 * Fade and slide entrance animation optimized for mobile hardware acceleration.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: FadeInProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const variants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, ...directionOffset[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: MOTION.duration.fast || 0.3, // Faster duration prevents lag
            delay,
            ease: MOTION.easing.standard,
          },
        },
      };

  return (
    <motion.div
      className={cn("will-change-[opacity,transform]", className)}
      initial="hidden"
      whileInView="visible"
      // margin: "0px" triggers animations immediately as elements touch the mobile screen
      viewport={{ once: true, margin: "0px", amount: 0.1 }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

/**
 * Staggers child animations for list and grid layouts.
 */
export function StaggerContainer({
  children,
  className,
  staggerDelay = MOTION.stagger,
}: StaggerContainerProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={cn("will-change-[opacity,transform]", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px", amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={cn("will-change-[opacity,transform]", className)}
      variants={{
        hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: MOTION.duration.fast || 0.3,
            ease: MOTION.easing.standard,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Smooth page-level transition wrapper for client layouts.
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        className={cn(className)}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={prefersReducedMotion ? undefined : { opacity: 0, y: -4 }}
        transition={{
          duration: MOTION.duration.fast,
          ease: MOTION.easing.standard,
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

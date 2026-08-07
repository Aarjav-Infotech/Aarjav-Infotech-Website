"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { Heading } from "@/components/common/heading";
import { cn } from "@/lib/utils";

interface HeroAction {
  label: string;
  href: string;
  variant?: "default" | "outline";
  hasArrow?: boolean;
}

interface HeroProps {
  align?: "left" | "center";
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  description?: string;
  actions?: HeroAction[];
  layout?: "centered" | "split";
  media?: ReactNode;
  decoration?: ReactNode;
  tone?: "default" | "muted" | "gradient" | "transparent";
  bgImage?: string;
  bgVideo?: string;
  children?: ReactNode;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const toneClasses = {
  default: "from-primary/5 to-background",
  muted: "from-muted/60 to-background",
  gradient: "from-primary/5 via-background to-primary/10",
} as const;

export function Hero({
  align = "center",
  eyebrow,
  title,
  subtitle,
  description,
  actions,
  layout = "centered",
  media,
  decoration,
  tone = "default",
  bgImage,
  bgVideo,
  children,
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: HeroProps) {
  return (
    <section
      className={cn(
        "section-padding relative flex min-h-[80vh] w-full flex-col justify-center overflow-hidden sm:min-h-screen",
        (bgImage || bgVideo) && "rounded-b-[40px] pt-28 lg:h-[724px] lg:pt-24",
        !(bgImage || bgVideo) && "bg-gradient-to-b",
        !(bgImage || bgVideo) && (toneClasses as Record<string, string>)[tone],
        bgImage && "bg-cover bg-center bg-no-repeat",
        className,
      )}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
      aria-labelledby="hero-heading"
    >
      {bgVideo && (
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-[-1] h-full w-full object-cover object-right lg:object-center"
        />
      )}
      <Container>
        <div
          className={cn(
            "relative z-10 w-full",
            layout === "split"
              ? "site-container grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
              : cn("max-w-[953px]", align === "center" && "mx-auto"),
          )}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            // FIX 1: Set once: true so the animation doesn't collapse the layout on refresh
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className={cn(
              "mt-6 flex flex-col space-y-4 sm:mt-12 sm:space-y-6",
              layout === "centered" && "items-center text-center",
              align === "left" && "items-start text-left",
              align === "center" && "items-center text-center",
            )}
          >
            {eyebrow && (
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className={cn(
                  "mb-2 text-[14px] font-medium text-[#08388D] sm:text-[18px]",
                  eyebrowClassName,
                )}
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                {eyebrow}
              </motion.p>
            )}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <Heading
                as="h1"
                align={align}
                id="hero-heading"
                subtitle={subtitle}
                // FIX 2: Added responsive text sizing (text-3xl -> sm:text-5xl -> lg:text-[74px])
                className={cn(
                  "text-3xl leading-tight font-medium tracking-tight text-[#000000] sm:text-5xl lg:text-[74px] lg:leading-[81.4px]",
                  titleClassName,
                )}
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                {title}
              </Heading>
            </motion.div>
            {description && (
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className={cn(
                  "text-base leading-relaxed font-medium text-[#000000] sm:text-[20px]",
                  descriptionClassName,
                )}
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                {description}
              </motion.p>
            )}
            {actions && actions.length > 0 && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className={cn(
                  "flex flex-wrap gap-4 pt-2",
                  align === "center" ? "justify-center" : "justify-start",
                )}
              >
                {actions.map((action) => (
                  <Button
                    key={action.href}
                    variant={action.variant ?? "default"}
                    size="lg"
                    asChild
                    className={cn(
                      (action.variant ?? "default") === "outline" &&
                        "border border-transparent bg-white text-black [background:linear-gradient(white,white)_padding-box,linear-gradient(90deg,#091E46_1%,#075FF3_100%)_border-box] hover:text-white hover:[background:linear-gradient(90deg,#091E46_1%,#075FF3_100%)_padding-box,linear-gradient(90deg,#091E46_1%,#075FF3_100%)_border-box]",
                      "flex h-[48px] items-center justify-center gap-[19px] rounded-[60px] px-[20px] text-[15px] font-medium transition-all duration-300 sm:h-[52px] sm:px-[25px] sm:text-[16px]",
                    )}
                  >
                    <Link href={action.href}>{action.label}</Link>
                  </Button>
                ))}
              </motion.div>
            )}
            {children && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
              >
                {children}
              </motion.div>
            )}
          </motion.div>
          {layout === "split" && media && (
            <div className="flex justify-center lg:justify-end">{media}</div>
          )}
        </div>
      </Container>

      {decoration && (
        <div className="pointer-events-none absolute inset-0 z-0">
          {decoration}
        </div>
      )}
    </section>
  );
}

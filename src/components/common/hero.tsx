"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

/**
 * Full-width hero section for page headers.
 */
export function Hero({
  align = "center",
  eyebrow,
  title,
  subtitle,
  description,
  actions,
  layout = "centered",
  media,
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
        "section-padding relative w-full overflow-hidden",
        (bgImage || bgVideo) &&
          "flex flex-col justify-center rounded-b-[40px] pt-32 lg:h-[724px] lg:pt-24",
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
            layout === "split"
              ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
              : cn("max-w-[953px]", align === "center" && "mx-auto"),
          )}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className={cn(
              "flex flex-col space-y-6",
              layout === "centered" && "items-center text-center",
              align === "left" && "items-start text-left",
              align === "center" && "items-center text-center",
            )}
          >
            {eyebrow && (
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.2, ease: "easeOut" },
                  },
                }}
                className={cn(
                  "mb-4 text-[18px] font-medium text-[#08388D]",
                  eyebrowClassName,
                )}
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                {eyebrow}
              </motion.p>
            )}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.2, ease: "easeOut" },
                },
              }}
            >
              <Heading
                as="h1"
                align={align}
                id="hero-heading"
                subtitle={subtitle}
                className={cn(
                  "text-[74px] leading-[81.4px] font-medium tracking-[-3px] text-[#000000]",
                  titleClassName,
                )}
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                {title}
              </Heading>
            </motion.div>
            {description && (
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.2, ease: "easeOut" },
                  },
                }}
                className={cn(
                  "text-[20px] leading-[1.4] font-medium text-[#000000]",
                  descriptionClassName,
                )}
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                {description}
              </motion.p>
            )}
            {actions && actions.length > 0 && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.2, ease: "easeOut" },
                  },
                }}
                className={cn(
                  "flex flex-wrap gap-4",
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
                      action.variant !== "outline" &&
                        "border border-transparent bg-black text-white hover:bg-[linear-gradient(90deg,#091E46_1%,#075FF3_100%)]",
                      action.variant === "outline" &&
                        "border border-transparent bg-white text-black [background:linear-gradient(white,white)_padding-box,linear-gradient(90deg,#091E46_1%,#075FF3_100%)_border-box] hover:text-white hover:[background:linear-gradient(90deg,#091E46_1%,#075FF3_100%)_padding-box,linear-gradient(90deg,#091E46_1%,#075FF3_100%)_border-box]",
                      "flex h-[52px] items-center justify-center gap-[19px] rounded-[60px] px-[25px] text-[16px] leading-[17.6px] font-medium transition-all duration-300",
                    )}
                  >
                    <Link
                      href={action.href}
                      className="flex items-center gap-[19px]"
                    >
                      {action.label}
                      {action.hasArrow && (
                        <ArrowRight
                          className="h-[19px] w-[19px]"
                          strokeWidth={2}
                        />
                      )}
                    </Link>
                  </Button>
                ))}
              </motion.div>
            )}
            {children && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
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
    </section>
  );
}

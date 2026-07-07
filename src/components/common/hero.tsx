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
  title: string;
  subtitle?: string;
  description?: string;
  actions?: HeroAction[];
  layout?: "centered" | "split";
  media?: ReactNode;
  tone?: "default" | "muted" | "gradient" | "transparent";
  bgImage?: string;
  children?: ReactNode;
  className?: string;
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
  children,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "section-padding relative w-full overflow-hidden",
        bgImage && "flex flex-col justify-center pt-32 lg:h-[725px] lg:pt-24",
        !bgImage && "bg-gradient-to-b",
        !bgImage && (toneClasses as Record<string, string>)[tone],
        bgImage && "bg-cover bg-center bg-no-repeat",
        className,
      )}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
      aria-labelledby="hero-heading"
    >
      <Container>
        <div
          className={cn(
            layout === "split"
              ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
              : cn("max-w-4xl", align === "center" && "mx-auto"),
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
                className="text-muted-foreground font-ui mb-4 text-sm font-medium tracking-[0.08em] uppercase"
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
                className="text-[74px] leading-[81.4px] font-medium tracking-[-3px]"
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
                className="text-muted-foreground text-lg leading-relaxed"
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
                        "bg-black text-white hover:bg-black/90",
                      action.variant === "outline" &&
                        "border-gray-300 bg-white text-black hover:bg-gray-50",
                      "rounded-full",
                    )}
                  >
                    <Link href={action.href}>
                      {action.label}
                      {action.hasArrow && <span className="ml-1">➔</span>}
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

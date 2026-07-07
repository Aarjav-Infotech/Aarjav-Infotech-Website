import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "bg-card text-card-foreground flex flex-col border border-border shadow-sm transition-[transform,box-shadow,border-color] duration-fast ease-standard",
  {
    variants: {
      tone: {
        default: "rounded-[20px]",
        muted: "rounded-[20px] bg-muted/30",
        brand: "rounded-[20px] bg-primary/5",
      },
      padding: {
        default: "gap-6 py-6",
        compact: "gap-4 py-4",
        none: "gap-0 py-0",
      },
      interactive: {
        true: "hover:-translate-y-0.5 hover:shadow-md",
        false: "",
      },
    },
    defaultVariants: {
      tone: "default",
      padding: "default",
      interactive: false,
    },
  },
);

interface CardProps
  extends ComponentProps<"div">, VariantProps<typeof cardVariants> {}

/**
 * Card container with consistent border, radius, and elevation styling.
 */
function Card({ className, tone, padding, interactive, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ tone, padding, interactive }), className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-lg font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm leading-relaxed", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};

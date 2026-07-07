import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-ui text-xs font-medium leading-none transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "border border-input bg-background text-foreground",
        success: "bg-success/15 text-success",
        warning: "bg-warning/20 text-warning",
        info: "bg-info/15 text-info",
        destructive: "bg-destructive/15 text-destructive",
      },
      size: {
        default: "h-6 px-2.5",
        sm: "h-5 px-2 text-xs",
        lg: "h-7 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface BadgeProps
  extends ComponentProps<"span">, VariantProps<typeof badgeVariants> {}

/**
 * Compact reusable label for status, category, and metadata chips.
 */
export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-ui text-sm font-medium tracking-tight duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Default 3D Pill Gradient
        default:
          "border-b-4 boder-slate-200 bg-primary hover:bg-primary/90 h-10 px-7 py-6 rounded-full text-white shadow-md border-b-4 border-black bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] gap-3 hover:bg-[linear-gradient(180deg,#091E46_0%,#0053FA_50%,#075FF3_100%)] bg-[length:200%_200%] hover:px-7.5 transition-all ease-in-out duration-500",
        // White Pill with Border
        outline:
          "h-10 px-7 py-6 rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm hover:bg-slate-50 border-b-4 border-slate-400 gap-3 transition-all duration-300 active:translate-y-[2px]",
        destructive:
          "bg-destructive text-white shadow-sm hover:bg-destructive/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

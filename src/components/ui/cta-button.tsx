import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "read-full-case";
}

export const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const isSecondary = variant === "secondary";
    const isPrimary = variant === "primary" || variant === "read-full-case";

    return (
      <button
        ref={ref}
        className={cn(
          "group relative flex w-fit items-center justify-center",
          "h-[52px] rounded-[60px] px-[25px] pt-[16px] pb-[17px]",
          "text-[16px] leading-[19px] font-medium tracking-normal",
          "outline-none",
          isSecondary
            ? "text-[#000000] hover:text-[#FFFFFF]"
            : "text-[#FFFFFF]",
          isSecondary
            ? "shadow-none hover:shadow-[0_12px_32px_rgba(7,95,243,0.22)]"
            : "shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_32px_rgba(7,95,243,0.22)]",
          className,
        )}
        style={{
          transition:
            "background 450ms cubic-bezier(.22,1,.36,1), background-position 450ms cubic-bezier(.22,1,.36,1), color 450ms cubic-bezier(.22,1,.36,1), border-color 450ms cubic-bezier(.22,1,.36,1), box-shadow 450ms cubic-bezier(.22,1,.36,1), transform 450ms cubic-bezier(.22,1,.36,1)",
        }}
        {...props}
      >
        {/* PRIMARY & READ FULL CASE DEFAULT */}
        {isPrimary && (
          <div className="pointer-events-none absolute inset-0 z-0 rounded-[60px] bg-[#000000] transition-opacity duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:opacity-0">
            <div className="absolute inset-0 rounded-[60px] border border-[#000000]" />
          </div>
        )}

        {/* SECONDARY DEFAULT */}
        {isSecondary && (
          <div className="pointer-events-none absolute inset-0 z-0 rounded-[60px] bg-[#FFFFFF] transition-opacity duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:opacity-0">
            {/* Gradient Border via mask */}
            <div
              className="absolute inset-0 rounded-[60px] p-[1px]"
              style={{
                background: "linear-gradient(90deg, #091E46 1%, #075FF3 100%)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
          </div>
        )}

        {/* HOVER STATE GRADIENT FILL */}
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-[60px] opacity-0 transition-opacity duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:opacity-100"
          style={{
            background: "linear-gradient(90deg, #091E46 1%, #075FF3 100%)",
          }}
        />

        {/* CONTENT */}
        <span className="relative z-10 flex items-center justify-center gap-[8px]">
          {children}
          <ArrowRight
            className="h-[19px] w-[19px] transition-transform duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-[2px]"
            strokeWidth={2}
          />
        </span>
      </button>
    );
  },
);

CTAButton.displayName = "CTAButton";

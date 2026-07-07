import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Styled text input with focus ring and disabled states.
 */
function Input({ className, type, ...props }: ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring font-ui duration-fast [aria-invalid=true]:border-destructive [aria-invalid=true]:focus-visible:ring-destructive/20 flex h-11 w-full rounded-[20px] border px-4 py-2.5 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };

import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Styled multi-line text input.
 */
function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring font-ui duration-fast [aria-invalid=true]:border-destructive [aria-invalid=true]:focus-visible:ring-destructive/20 flex min-h-[120px] w-full rounded-[20px] border px-4 py-3 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };

import { Skeleton } from "@/components/ui/skeleton";
import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  variant?: "page" | "card" | "form";
  className?: string;
}

/**
 * Reusable loading skeleton for different layout patterns.
 */
export function LoadingSkeleton({
  variant = "page",
  className,
}: LoadingSkeletonProps) {
  if (variant === "card") {
    return (
      <div
        className={cn("space-y-4", className)}
        aria-busy="true"
        aria-label="Loading"
      >
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    );
  }

  if (variant === "form") {
    return (
      <div
        className={cn("space-y-6", className)}
        aria-busy="true"
        aria-label="Loading form"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
        <Skeleton className="h-10 w-32" />
      </div>
    );
  }

  return (
    <div
      className={cn("section-padding", className)}
      aria-busy="true"
      aria-label="Loading page"
    >
      <Container className="space-y-8">
        <Skeleton className="mx-auto h-12 w-2/3" />
        <Skeleton className="mx-auto h-6 w-1/2" />
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="h-48 w-full rounded-xl" />
          ))}
        </div>
      </Container>
    </div>
  );
}

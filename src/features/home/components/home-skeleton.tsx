// src/features/home/components/home-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export function HomeSkeleton() {
  return (
    <div className="container mx-auto w-full space-y-16 px-4 py-10">
      {/* 1. Hero Section Skeleton */}
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-2/3" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-10 w-32 rounded-md" />
            <Skeleton className="h-10 w-32 rounded-md" />
          </div>
        </div>
        {/* Hero Video/Photo Placeholder */}
        <Skeleton className="aspect-video w-full rounded-2xl" />
      </div>

      {/* 2. Photo/Video Showcase Grid Skeleton */}
      <div className="space-y-6">
        <Skeleton className="mx-auto h-8 w-48" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="space-y-3 rounded-xl border border-slate-200 p-4 dark:border-slate-800"
            >
              <Skeleton className="aspect-video w-full rounded-lg" />
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

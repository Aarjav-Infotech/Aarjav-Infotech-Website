import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  className?: string;
  description: string;
  icon?: LucideIcon;
  title: string;
}

/**
 * Shared feature card pattern for service and capability highlights.
 */
export function FeatureCard({
  className,
  description,
  icon: Icon,
  title,
}: FeatureCardProps) {
  return (
    <Card className={cn("h-full", className)} interactive>
      <CardHeader>
        {Icon && <Icon className="text-primary size-8" aria-hidden="true" />}
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

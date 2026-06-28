import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Rating
 *
 * Generic 0–max rating. Today it renders stars. The component is intentionally
 * the single place that owns the visual — swapping stars for bars or dots
 * later requires no changes to call sites or to the data model. Every consumer
 * passes only { value, max }.
 */
export interface RatingProps {
  value: number;
  max?: number;
  label?: string;
  className?: string;
  size?: "sm" | "md";
}

export function Rating({ value, max = 5, label, className, size = "md" }: RatingProps) {
  const clamped = Math.max(0, Math.min(value, max));
  const stars = Array.from({ length: max }, (_, i) => i < clamped);
  const dim = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <div
      className={cn("nums-tabular inline-flex items-center gap-1", className)}
      role="img"
      aria-label={label ?? `${clamped} av ${max}`}
    >
      {stars.map((filled, i) => (
        <Star
          key={i}
          className={cn(
            dim,
            filled ? "fill-primary stroke-primary" : "fill-transparent stroke-muted-foreground/40",
          )}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

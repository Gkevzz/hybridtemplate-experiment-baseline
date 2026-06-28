import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InfoBoxProps {
  icon?: LucideIcon;
  label: string;
  value: string;
  className?: string;
}

export function InfoBox({ icon: Icon, label, value, className }: InfoBoxProps) {
  return (
    <div
      className={cn(
        "flex min-w-0 items-start gap-3 rounded-xl border border-border/70 bg-surface/60 p-4",
        className,
      )}
    >
      {Icon && (
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </span>
      )}
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 truncate text-sm font-semibold text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
}

export function InfoBoxGrid({
  items,
  className,
}: {
  items: InfoBoxProps[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((it) => (
        <InfoBox key={it.label} {...it} />
      ))}
    </div>
  );
}

import { ShieldCheck } from "lucide-react";
import { VERIFICATION_PLACEHOLDER } from "@/data/casinos";
import { cn } from "@/lib/utils";

export function VerifiedStamp({
  date,
  className,
}: {
  date?: string | null;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/60 px-3 py-1 text-xs text-muted-foreground",
        className,
      )}
    >
      <ShieldCheck className="h-3.5 w-3.5 text-primary" />
      <span>
        Senast verifierad:{" "}
        <span className="nums-tabular font-medium text-foreground/90">
          {date ?? VERIFICATION_PLACEHOLDER}
        </span>
      </span>
    </p>
  );
}

import { cn } from "@/lib/utils";

export type Verdict =
  | "utmarkt"
  | "mycket-bra"
  | "bra"
  | "medel"
  | "rekommenderas-inte";

const LABEL: Record<Verdict, string> = {
  "utmarkt": "Utmärkt",
  "mycket-bra": "Mycket bra",
  "bra": "Bra",
  "medel": "Medel",
  "rekommenderas-inte": "Rekommenderas inte",
};

const TONE: Record<Verdict, string> = {
  "utmarkt": "bg-success/15 text-success border-success/30",
  "mycket-bra": "bg-success/10 text-success border-success/25",
  "bra": "bg-primary/12 text-primary border-primary/30",
  "medel": "bg-warning/15 text-warning border-warning/30",
  "rekommenderas-inte": "bg-destructive/15 text-destructive border-destructive/30",
};

export function VerdictPill({
  verdict,
  className,
}: {
  verdict: Verdict;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-tight",
        TONE[verdict],
        className,
      )}
    >
      {LABEL[verdict]}
    </span>
  );
}

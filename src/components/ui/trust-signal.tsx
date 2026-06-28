import { BadgeCheck, Smartphone, ShieldCheck, Banknote } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  { icon: ShieldCheck, label: "Svensk licens" },
  { icon: BadgeCheck, label: "BankID" },
  { icon: Banknote, label: "Trustly & Swish" },
  { icon: Smartphone, label: "Mobilanpassad" },
];

export function TrustSignalRow({ className }: { className?: string }) {
  return (
    <ul
      className={cn("flex flex-wrap items-center gap-2 text-xs text-muted-foreground", className)}
    >
      {ITEMS.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/60 px-2.5 py-1"
        >
          <Icon className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}

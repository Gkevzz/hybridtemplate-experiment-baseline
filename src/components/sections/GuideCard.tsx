import { ArrowUpRight } from "lucide-react";
import type { Guide } from "@/data/casinos";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <a
      href="#"
      className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-card transition-colors hover:border-primary/40"
    >
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
        Guide
      </p>
      <h3 className="mt-3 text-lg font-semibold leading-snug">{guide.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {guide.excerpt}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90">
        Läs guiden
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}

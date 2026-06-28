import { ArrowUpRight } from "lucide-react";

export interface RelatedLink {
  title: string;
  description?: string;
  href?: string;
  eyebrow?: string;
}

export function RelatedLinks({
  items,
  columns = 3,
}: {
  items: RelatedLink[];
  columns?: 2 | 3;
}) {
  const grid =
    columns === 2
      ? "grid gap-4 sm:grid-cols-2"
      : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={grid}>
      {items.map((it) => (
        <a
          key={it.title}
          href={it.href ?? "#"}
          className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-5 shadow-card transition-colors hover:border-primary/40"
        >
          {it.eyebrow && (
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
              {it.eyebrow}
            </p>
          )}
          <h3 className="mt-2 text-base font-semibold leading-snug">
            {it.title}
          </h3>
          {it.description && (
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              {it.description}
            </p>
          )}
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90">
            Öppna
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>
      ))}
    </div>
  );
}

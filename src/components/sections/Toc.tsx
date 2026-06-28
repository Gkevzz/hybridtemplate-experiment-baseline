export interface TocItem {
  id: string;
  label: string;
}

export function Toc({ items }: { items: TocItem[] }) {
  return (
    <nav
      aria-label="Innehållsförteckning"
      className="rounded-2xl border border-border/70 bg-surface/50 p-5"
    >
      <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Innehåll
      </p>
      <ol className="mt-3 space-y-2 text-sm">
        {items.map((it, i) => (
          <li key={it.id} className="flex gap-3">
            <span className="w-5 shrink-0 text-muted-foreground/70 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${it.id}`}
              className="text-foreground/90 underline-offset-4 hover:underline"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

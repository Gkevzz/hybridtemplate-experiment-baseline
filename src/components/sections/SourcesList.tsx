export interface Source {
  label: string;
  href?: string;
}

export function SourcesList({ items }: { items: Source[] }) {
  return (
    <ol className="space-y-2 text-sm text-muted-foreground [counter-reset:src]">
      {items.map((s, i) => (
        <li key={`${s.label}-${i}`} className="flex gap-3 [counter-increment:src]">
          <span className="w-6 shrink-0 tabular-nums text-muted-foreground/70">[{i + 1}]</span>
          {s.href ? (
            <a
              href={s.href}
              className="text-foreground/90 underline-offset-4 hover:underline"
              rel="nofollow noopener"
            >
              {s.label}
            </a>
          ) : (
            <span>{s.label}</span>
          )}
        </li>
      ))}
    </ol>
  );
}

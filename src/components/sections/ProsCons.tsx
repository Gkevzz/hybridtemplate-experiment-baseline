import { Check, Minus } from "lucide-react";

export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <List title="Fördelar" tone="success" items={pros} Icon={Check} />
      <List title="Nackdelar" tone="destructive" items={cons} Icon={Minus} />
    </div>
  );
}

function List({
  title,
  items,
  Icon,
  tone,
}: {
  title: string;
  items: string[];
  Icon: typeof Check;
  tone: "success" | "destructive";
}) {
  const ring =
    tone === "success" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive";
  return (
    <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
      <h3 className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-3 text-sm">
            <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${ring}`}>
              <Icon className="h-3 w-3" strokeWidth={2.5} />
            </span>
            <span className="text-foreground/90">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

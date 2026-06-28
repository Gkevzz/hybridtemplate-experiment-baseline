import type { Casino, PaymentMethod } from "@/data/casinos";

function Column({ title, items }: { title: string; items: PaymentMethod[] }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
      <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </h4>
      <ul className="mt-4 divide-y divide-border/60">
        {items.map((p) => (
          <li key={p.name} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 py-3 text-sm">
            <span className="font-medium text-foreground">{p.name}</span>
            <span className="text-right text-muted-foreground">
              {[p.minAmount, p.maxAmount].filter(Boolean).join(" – ")}
            </span>
            {p.notes && <span className="col-span-2 text-xs text-muted-foreground">{p.notes}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ReviewPaymentsBlock({ payments }: { payments: NonNullable<Casino["payments"]> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Column title="Insättning" items={payments.deposits} />
      <Column title="Uttag" items={payments.withdrawals} />
    </div>
  );
}

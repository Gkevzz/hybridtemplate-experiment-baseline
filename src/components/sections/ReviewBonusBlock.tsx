import type { WelcomeBonus } from "@/data/casinos";

/**
 * Structured welcome-bonus table. Always render with mandatory
 * 18+/RG disclaimer. Source URL renders as a plain text link, never
 * as a button — no commercial CTA verbs.
 */
export function ReviewBonusBlock({ bonus }: { bonus: WelcomeBonus }) {
  const rows: { label: string; value?: string | number }[] = [
    { label: "Bonus", value: bonus.amount },
    { label: "Typ", value: bonus.type },
    { label: "Min. insättning", value: bonus.minDeposit },
    {
      label: "Omsättningskrav",
      value: bonus.wageringX ? `${bonus.wageringX}x` : undefined,
    },
    { label: "Max insats under bonus", value: bonus.maxBetDuringBonus },
    { label: "Tidsgräns", value: bonus.timeLimit },
  ].filter((r) => r.value !== undefined && r.value !== "");

  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
      <dl className="divide-y divide-border/60">
        {rows.map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 px-5 py-3 sm:px-6"
          >
            <dt className="text-sm text-muted-foreground">{r.label}</dt>
            <dd className="text-sm font-medium text-foreground">{String(r.value)}</dd>
          </div>
        ))}
      </dl>
      <div className="border-t border-border/60 bg-surface/40 px-5 py-4 text-xs leading-relaxed text-muted-foreground sm:px-6">
        <p>
          18+. Spela ansvarsfullt. Omsättningskrav gäller. Se fullständiga villkor hos operatören.
        </p>
        <p className="mt-2">
          Källa:{" "}
          <a
            href={bonus.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            {bonus.sourceUrl}
          </a>
        </p>
      </div>
    </div>
  );
}

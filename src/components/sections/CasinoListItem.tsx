import { InfoBoxGrid } from "@/components/ui/info-box";
import { Rating } from "@/components/ui/rating";
import { VerdictPill } from "@/components/ui/verdict-pill";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Gift,
  Coins,
  Percent,
  Clock,
  Headphones,
} from "lucide-react";
import type { Casino } from "@/data/casinos";
import { VERIFICATION_PLACEHOLDER } from "@/data/casinos";

const ICONS = [ShieldCheck, Gift, Coins, Percent, Clock, Headphones];

export function CasinoListItem({
  casino,
  index,
}: {
  casino: Casino;
  index: number;
}) {
  const enriched = casino.info.map((item, i) => ({
    ...item,
    icon: ICONS[i % ICONS.length],
  }));

  return (
    <article className="rounded-2xl border border-border/70 bg-card p-5 shadow-card sm:p-7">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-4">
          <div
            className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border/70 bg-surface/70 font-display text-sm font-bold text-muted-foreground"
            aria-hidden
          >
            #{index + 1}
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold sm:text-xl">
              {casino.name}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {casino.tagline}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2">
          <VerdictPill verdict={casino.verdict} />
          <Rating value={casino.trust.helhetsvarde} size="sm" />
        </div>
      </header>

      <div className="mt-6">
        <InfoBoxGrid items={enriched} />
      </div>

      <footer className="mt-6 grid grid-cols-1 items-center gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <p className="text-xs text-muted-foreground">
          Senast verifierad:{" "}
          <span className="font-medium text-foreground/80">
            {casino.verifiedAt ?? VERIFICATION_PLACEHOLDER}
          </span>
        </p>
        <div className="flex gap-2 sm:justify-end">
          <Button variant="outline" className="flex-1 sm:flex-none">
            Läs granskning
          </Button>
          <Button className="flex-1 sm:flex-none">Till casinot</Button>
        </div>
      </footer>
    </article>
  );
}

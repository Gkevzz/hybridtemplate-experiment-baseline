import { ShieldCheck, ExternalLink } from "lucide-react";

/**
 * Operator-agnostic responsible gambling block.
 *
 * Renders general Swedish guidance plus outbound links to Spelpaus and
 * Stödlinjen. Safe to render on any review or guide page — contains no
 * operator-specific claims.
 */
export function ResponsibleGamblingBlock() {
  return (
    <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
        <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Ansvarsfullt spelande
        </h3>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Spel ska vara underhållning. Sätt alltid insättnings-, förlust- och tidsgränser innan du
        börjar spela, och pausa om spelandet inte längre känns roligt. Casinon med svensk licens är
        skyldiga att erbjuda verktyg för självkontroll och att hänvisa till oberoende stöd.
      </p>

      <ul className="mt-5 space-y-2 text-sm">
        <li>
          <a
            href="https://www.spelpaus.se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary"
          >
            Spelpaus.se
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
          <span className="ml-2 text-muted-foreground">
            – stäng av dig själv från allt spel på svenska licensierade sajter.
          </span>
        </li>
        <li>
          <a
            href="https://www.stodlinjen.se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary"
          >
            Stödlinjen.se
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
          <span className="ml-2 text-muted-foreground">
            – kostnadsfri och anonym hjälp vid spelproblem.
          </span>
        </li>
      </ul>

      <p className="mt-5 text-xs text-muted-foreground">18+. Spela ansvarsfullt.</p>
    </div>
  );
}

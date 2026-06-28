import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  Filter,
  Info,
  Landmark,
  LifeBuoy,
  ListChecks,
  Scale,
  Shield,
  Wallet,
} from "lucide-react";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs, breadcrumbsJsonLd } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { script } from "@/lib/seo/jsonld";
import { buildCanonical, buildMeta } from "@/lib/seo/meta";
import { cn } from "@/lib/utils";

const PATH = "/experiment/redaktionell-precision";

const CRUMBS = [{ label: "Experiment", to: "/" }, { label: "Redaktionell precision" }];

export const Route = createFileRoute("/experiment/redaktionell-precision")({
  head: () => ({
    meta: buildMeta({
      title: "Redaktionell precision (experiment) | HybridBonus",
      description:
        "Isolerad prototyp: en redaktionell jämförelsebänk för licensierade casinon utan ranking, poäng eller säljhype. Endast platshållardata.",
      path: PATH,
      noindex: true,
    }),
    links: [buildCanonical(PATH)],
    scripts: [script(breadcrumbsJsonLd(CRUMBS))],
  }),
  component: RedaktionellPrecision,
});

/* -------------------------------------------------------------------------- */
/*  Local placeholder data (prototype only – no real operator facts)          */
/* -------------------------------------------------------------------------- */

type FilterKey = "licens" | "bonus" | "uttag" | "ansvar" | "kalla";

interface FieldRow {
  key: string;
  label: string;
  group: FilterKey;
  values: [string, string, string];
}

const OPERATORS = ["Operatör A (exempel)", "Operatör B (exempel)", "Operatör C (exempel)"] as const;

const FIELD_ROWS: FieldRow[] = [
  {
    key: "licens",
    label: "Licensstatus",
    group: "licens",
    values: ["Spelinspektionslicens", "Spelinspektionslicens", "Spelinspektionslicens"],
  },
  {
    key: "bonusvillkor",
    label: "Bonusvillkor",
    group: "bonus",
    values: ["Verifiering tillkommer", "Verifiering tillkommer", "Verifiering tillkommer"],
  },
  {
    key: "omsattning",
    label: "Omsättningskrav",
    group: "bonus",
    values: ["Uppgift saknas", "Uppgift saknas", "Uppgift saknas"],
  },
  {
    key: "maxinsats",
    label: "Maxinsats under bonus",
    group: "bonus",
    values: ["Uppgift saknas", "Uppgift saknas", "Uppgift saknas"],
  },
  {
    key: "uttag",
    label: "Uttagsinformation",
    group: "uttag",
    values: [
      "Kontrollera alltid operatörens webbplats",
      "Kontrollera alltid operatörens webbplats",
      "Kontrollera alltid operatörens webbplats",
    ],
  },
  {
    key: "ansvar",
    label: "Ansvarsspel",
    group: "ansvar",
    values: [
      "Spelpaus.se · gränser · självtest",
      "Spelpaus.se · gränser · självtest",
      "Spelpaus.se · gränser · självtest",
    ],
  },
  {
    key: "kalla",
    label: "Källstatus",
    group: "kalla",
    values: ["Ej verifierad i denna prototyp", "Ej verifierad i denna prototyp", "Ej verifierad i denna prototyp"],
  },
  {
    key: "granskad",
    label: "Senast granskad",
    group: "kalla",
    values: ["Verifiering tillkommer", "Verifiering tillkommer", "Verifiering tillkommer"],
  },
];

interface RailItem {
  key: FilterKey;
  label: string;
  hint: string;
  icon: typeof Shield;
}

const RAIL_ITEMS: RailItem[] = [
  { key: "licens", label: "Licens", hint: "Spelinspektionen", icon: Shield },
  { key: "bonus", label: "Bonusvillkor", hint: "Villkor & krav", icon: FileText },
  { key: "uttag", label: "Uttag", hint: "Utbetalningar", icon: Wallet },
  { key: "ansvar", label: "Ansvarsspel", hint: "Spelarskydd", icon: LifeBuoy },
  { key: "kalla", label: "Källstatus", hint: "Transparens", icon: ListChecks },
];

interface FilterChip {
  key: FilterKey;
  label: string;
}

const FILTER_CHIPS: FilterChip[] = [
  { key: "licens", label: "Visa licensstatus" },
  { key: "bonus", label: "Visa bonusvillkor" },
  { key: "uttag", label: "Visa uttagsvillkor" },
  { key: "ansvar", label: "Visa ansvarsspel" },
  { key: "kalla", label: "Visa källstatus" },
];

interface TermCard {
  title: string;
  body: string;
  icon: typeof Scale;
}

const TERM_CARDS: TermCard[] = [
  {
    title: "Omsättningskrav",
    body: "Hur många gånger ett bonusbelopp måste spelas innan eventuella vinster kan tas ut. Står alltid i operatörens fullständiga villkor.",
    icon: Scale,
  },
  {
    title: "Maxinsats",
    body: "Högsta tillåtna insats per spelomgång medan en bonus är aktiv. Överskrids gränsen kan bonusen förverkas.",
    icon: Wallet,
  },
  {
    title: "Giltighetstid",
    body: "Den tid du har på dig att uppfylla villkoren. Efter datumet förfaller ofta både bonus och kopplade vinster.",
    icon: Clock,
  },
  {
    title: "Spelbidrag",
    body: "Hur mycket olika speltyper räknas mot omsättningskravet. Vissa spel bidrar helt, andra delvis eller inte alls.",
    icon: FileText,
  },
  {
    title: "Uttagsgränser",
    body: "Begränsningar för hur mycket som kan tas ut från bonusvinster, samt vilka betalmetoder som är tillåtna.",
    icon: Landmark,
  },
];

interface TimelineStep {
  title: string;
  body: string;
  status: "process" | "pending";
}

const TIMELINE: TimelineStep[] = [
  {
    title: "Licenskontroll",
    body: "Bekräfta att operatören har giltig licens hos Spelinspektionen innan något annat granskas.",
    status: "process",
  },
  {
    title: "Villkorsgranskning",
    body: "Läs igenom bonusvillkor, omsättningskrav, maxinsats och giltighetstid i sin helhet.",
    status: "process",
  },
  {
    title: "Ansvarsspelkontroll",
    body: "Verifiera verktyg för gränser, paus och självtest samt koppling till Spelpaus.se.",
    status: "pending",
  },
  {
    title: "Källstatus",
    body: "Dokumentera varje uppgift mot sin källa. Saknas källa markeras fältet som ej verifierat.",
    status: "pending",
  },
  {
    title: "Uppdatering",
    body: "Granskningen dateras om vid förändringar. I denna prototyp gäller: Verifiering tillkommer.",
    status: "pending",
  },
];

interface SourceRow {
  title: string;
  scope: string;
  status: string;
  href?: string;
}

const SOURCE_LEDGER: SourceRow[] = [
  {
    title: "Spelinspektionen",
    scope: "Licensregister och tillsyn",
    status: "Ej verifierad i denna prototyp",
  },
  {
    title: "Operatörens villkor",
    scope: "Bonus- och uttagsvillkor",
    status: "Verifiering tillkommer",
  },
  {
    title: "Ansvarsspelssidor",
    scope: "Spelpaus.se · Stödlinjen.se",
    status: "Offentliga stödresurser",
    href: "https://www.spelpaus.se",
  },
  {
    title: "Betalnings- och uttagsinformation",
    scope: "Metoder och handläggningstid",
    status: "Uppgift saknas",
  },
];

interface RgCard {
  title: string;
  body: string;
}

const RG_CARDS: RgCard[] = [
  { title: "Sätt gränser", body: "Bestäm insättnings-, förlust- och tidsgränser innan du börjar spela." },
  { title: "Ta paus", body: "Planera in regelbundna pauser och stäng av dig via Spelpaus.se vid behov." },
  { title: "Jaga inte förluster", body: "Se spel som underhållning – inte som ett sätt att tjäna pengar." },
  { title: "Sök stöd tidigt", body: "Stödlinjen.se erbjuder kostnadsfritt och anonymt stöd om spelandet känns fel." },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

function RedaktionellPrecision() {
  const [active, setActive] = useState<Record<FilterKey, boolean>>({
    licens: true,
    bonus: true,
    uttag: true,
    ansvar: true,
    kalla: true,
  });

  const toggle = (key: FilterKey) =>
    setActive((prev) => ({ ...prev, [key]: !prev[key] }));

  const visibleRows = useMemo(
    () => FIELD_ROWS.filter((row) => active[row.group]),
    [active],
  );

  const activeCount = Object.values(active).filter(Boolean).length;

  return (
    <SiteLayout>
      <Breadcrumbs items={CRUMBS} />

      <ExperimentBand />
      <ResponsibleGamblingBand />

      <EditorialHeader />
      <TrustStance />

      <DecisionWorkbench
        active={active}
        toggle={toggle}
        visibleRows={visibleRows}
        activeCount={activeCount}
      />

      <BonusMicroscope />
      <MethodologyTimeline />
      <SourceLedger />
      <ResponsibleGamblingDeep />
      <ClosingStatus />
    </SiteLayout>
  );
}

/* -------------------------------------------------------------------------- */
/*  1. Experiment band                                                        */
/* -------------------------------------------------------------------------- */

function ExperimentBand() {
  return (
    <div className="border-b border-warning/25 bg-warning/10">
      <Container className="flex flex-wrap items-center gap-x-2 gap-y-1 py-2.5 text-xs text-warning">
        <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden />
        <span className="font-medium tracking-wide">
          Experiment · isolerad prototyp · ej produktion · endast platshållardata
        </span>
      </Container>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Responsible gambling band (before any commercial/action content)         */
/* -------------------------------------------------------------------------- */

function ResponsibleGamblingBand() {
  return (
    <div className="border-b border-border/60 bg-surface/40">
      <Container className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-foreground/30 text-[11px] font-semibold text-foreground">
            18+
          </span>
          <p className="text-sm text-muted-foreground">
            Spela ansvarsfullt. Spel kan vara beroendeframkallande.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <a
            href="https://www.spelpaus.se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            Spelpaus.se <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
          <a
            href="https://www.stodlinjen.se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            Stödlinjen.se <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </Container>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  2. Compact editorial header                                               */
/* -------------------------------------------------------------------------- */

function EditorialHeader() {
  return (
    <header className="border-b border-border/60 bg-ambient">
      <Container className="py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Redaktionell precision
            </p>
            <h1 className="text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Jämför licensierade casinon utan ranking, poäng eller säljhype.
            </h1>
            <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
              HybridBonus hjälper dig att jämföra fakta, bonusvillkor, källor och
              risksignaler hos casinon med svensk licens. Ingen aktör utses till bäst –
              underlaget presenteras likvärdigt så att du kan fatta ett eget, informerat
              beslut.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border/70 bg-border/70 text-sm">
            {[
              { k: "Licenskrav", v: "Svensk licens" },
              { k: "Ranking", v: "Ingen" },
              { k: "Datakälla", v: "Platshållardata" },
              { k: "Senast granskad", v: "Verifiering tillkommer" },
            ].map((item) => (
              <div key={item.k} className="bg-card p-4">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  {item.k}
                </dt>
                <dd className="mt-1 font-medium text-foreground">{item.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  3. Trust stance / anti-ranking declaration                                */
/* -------------------------------------------------------------------------- */

function TrustStance() {
  const points = [
    {
      title: "Faktabaserat",
      body: "Varje fält pekar mot en kontrollerbar uppgift. Saknas källa markeras det öppet.",
    },
    {
      title: "Likvärdig vikt",
      body: "Alla operatörer visas i samma format. Inget fält viktas för att lyfta en aktör.",
    },
    {
      title: "Du bestämmer",
      body: "Du väljer vilka fält som visas. Verktyget sorterar aldrig efter ”bäst”.",
    },
  ];

  return (
    <Section className="border-b border-border/60 py-10 sm:py-12">
      <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <Scale className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">Vi rankar ingenting — du bestämmer.</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Jämförelsen är faktabaserad, likvärdig och användarstyrd. Ingen operatör
              presenteras som vinnare, rekommendation eller topplista. Du styr vilka
              uppgifter du vill väga mot varandra.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="bg-card p-5">
              <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  4 + 5. Decision workbench with rail + filters                             */
/* -------------------------------------------------------------------------- */

function DecisionWorkbench({
  active,
  toggle,
  visibleRows,
  activeCount,
}: {
  active: Record<FilterKey, boolean>;
  toggle: (key: FilterKey) => void;
  visibleRows: FieldRow[];
  activeCount: number;
}) {
  return (
    <Section id="arbetsbank" className="bg-surface/20">
      <SectionHeading
        eyebrow="Jämförelsebänk"
        title="Likvärdig jämförelse av exempeloperatörer"
        lead="Välj vilka fält du vill granska. Raderna nedan visar identiskt format för varje operatör – ingen rad är rankad eller poängsatt."
      />

      <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:items-start">
        {/* Context rail */}
        <ContextRail active={active} toggle={toggle} />

        <div className="min-w-0">
          {/* Filter chips */}
          <div className="mb-5 rounded-xl border border-border/70 bg-card p-4">
            <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              <Filter className="h-3.5 w-3.5" aria-hidden />
              Användarstyrda filter · {activeCount}/{FILTER_CHIPS.length} fältgrupper synliga
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrera synliga fält">
              {FILTER_CHIPS.map((chip) => {
                const on = active[chip.key];
                return (
                  <button
                    key={chip.key}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(chip.key)}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                      on
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-border bg-background text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        on ? "bg-primary" : "bg-muted-foreground/40",
                      )}
                      aria-hidden
                    />
                    {chip.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop table */}
          <ComparisonTableDesktop rows={visibleRows} />

          {/* Mobile stacked fact cards */}
          <ComparisonCardsMobile rows={visibleRows} />

          {visibleRows.length === 0 && (
            <div className="rounded-xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground">
              Inga fältgrupper valda. Aktivera minst ett filter för att visa jämförelsen.
            </div>
          )}

          <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
            Kontrollera alltid operatörens webbplats innan du fattar beslut. Samtliga
            värden är platshållare i denna prototyp.
          </p>
        </div>
      </div>
    </Section>
  );
}

function ContextRail({
  active,
  toggle,
}: {
  active: Record<FilterKey, boolean>;
  toggle: (key: FilterKey) => void;
}) {
  return (
    <aside className="lg:sticky lg:top-6">
      <div className="rounded-xl border border-border/70 bg-card">
        <div className="border-b border-border/60 px-4 py-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Kontextrail
        </div>
        <nav aria-label="Granskningsområden" className="flex gap-2 overflow-x-auto p-2 lg:flex-col lg:overflow-visible">
          {RAIL_ITEMS.map((item) => {
            const Icon = item.icon;
            const on = active[item.key];
            return (
              <button
                key={item.key}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(item.key)}
                className={cn(
                  "group flex min-w-[140px] items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors cursor-pointer lg:min-w-0",
                  on
                    ? "border-border bg-surface/60"
                    : "border-transparent opacity-60 hover:opacity-100",
                )}
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {item.hint}
                  </span>
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mt-4 rounded-xl border border-warning/25 bg-warning/10 p-4">
        <div className="flex items-center gap-2 text-sm font-medium text-warning">
          <Clock className="h-4 w-4" aria-hidden />
          Källstatus
        </div>
        <p className="mt-1.5 text-xs text-warning/90">
          Verifiering tillkommer. Inga uppgifter är granskade mot officiella källor i
          denna prototyp.
        </p>
      </div>
    </aside>
  );
}

function ComparisonTableDesktop({ rows }: { rows: FieldRow[] }) {
  if (rows.length === 0) return null;
  return (
    <div className="hidden overflow-hidden rounded-xl border border-border/70 lg:block">
      <table className="w-full border-collapse text-sm">
        <caption className="sr-only">
          Likvärdig jämförelse av exempeloperatörer. Inga rankningar eller betyg.
        </caption>
        <thead>
          <tr className="bg-surface/60">
            <th
              scope="col"
              className="w-[200px] border-b border-border/60 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              Fält
            </th>
            {OPERATORS.map((op) => (
              <th
                key={op}
                scope="col"
                className="border-b border-l border-border/60 px-4 py-3 text-left text-sm font-semibold text-foreground"
              >
                {op}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.key} className={i % 2 === 1 ? "bg-surface/20" : "bg-card"}>
              <th
                scope="row"
                className="border-b border-border/50 px-4 py-3 text-left align-top text-sm font-medium text-foreground"
              >
                {row.label}
              </th>
              {row.values.map((val, idx) => (
                <td
                  key={idx}
                  className="border-b border-l border-border/50 px-4 py-3 align-top text-sm text-muted-foreground"
                >
                  <FieldValue value={val} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ComparisonCardsMobile({ rows }: { rows: FieldRow[] }) {
  if (rows.length === 0) return null;
  return (
    <div className="flex flex-col gap-4 lg:hidden">
      {OPERATORS.map((op, opIdx) => (
        <div key={op} className="overflow-hidden rounded-xl border border-border/70 bg-card">
          <div className="border-b border-border/60 bg-surface/50 px-4 py-3">
            <span className="text-sm font-semibold text-foreground">{op}</span>
          </div>
          <dl className="divide-y divide-border/50">
            {rows.map((row) => (
              <div key={row.key} className="px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  {row.label}
                </dt>
                <dd className="mt-1 text-sm text-foreground">
                  <FieldValue value={row.values[opIdx]} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}

function FieldValue({ value }: { value: string }) {
  if (value === "Spelinspektionslicens") {
    return (
      <span className="inline-flex items-center gap-1.5 text-foreground">
        <CheckCircle2 className="h-4 w-4 text-success" aria-hidden />
        {value}
      </span>
    );
  }
  if (value === "Uppgift saknas" || value === "Ej verifierad i denna prototyp") {
    return <span className="text-muted-foreground/80 italic">{value}</span>;
  }
  if (value === "Verifiering tillkommer") {
    return (
      <span className="inline-flex items-center gap-1.5 text-warning">
        <Clock className="h-4 w-4" aria-hidden />
        {value}
      </span>
    );
  }
  return <span>{value}</span>;
}

/* -------------------------------------------------------------------------- */
/*  6. Bonusvillkor microscope                                                */
/* -------------------------------------------------------------------------- */

function BonusMicroscope() {
  return (
    <Section id="villkor" className="border-t border-border/60">
      <SectionHeading
        eyebrow="Bonusvillkor under lupp"
        title="Förstå villkoren innan du bestämmer dig"
        lead="Begreppen förklarade på vanlig svenska. Faktiska värden skiljer sig mellan operatörer och står alltid i det fullständiga bonusvillkoret."
      />

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="grid gap-4 sm:grid-cols-2">
          {TERM_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="rounded-xl border border-border/70 bg-card p-5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4.5 w-4.5" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{card.body}</p>
              </article>
            );
          })}
        </div>

        <div className="rounded-xl border border-border/70 bg-card p-2 sm:p-4">
          <div className="px-2 pb-2 pt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Vanliga frågor om villkor
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1" className="border-border/60">
              <AccordionTrigger>Gäller omsättningskravet bonusen eller insättningen?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Det varierar. Vissa operatörer räknar enbart på bonusbeloppet, andra på
                bonus plus insättning. Det står alltid i villkoret – läs noggrant. Uppgift
                saknas i denna prototyp.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="border-border/60">
              <AccordionTrigger>Vad händer om jag överskrider maxinsatsen?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                En överskriden maxinsats kan leda till att bonusen och tillhörande vinster
                förverkas. Kontrollera alltid operatörens webbplats för exakta gränser.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3" className="border-b-0 border-border/60">
              <AccordionTrigger>Bidrar alla spel lika mycket?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Nej. Spelbidraget skiljer sig mellan speltyper. Vissa bidrar fullt mot
                omsättningskravet, andra delvis eller inte alls. Verifiering tillkommer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  7. Methodology / verification timeline                                    */
/* -------------------------------------------------------------------------- */

function MethodologyTimeline() {
  return (
    <Section id="metod" className="bg-surface/20">
      <SectionHeading
        eyebrow="Metodik"
        title="Så arbetar redaktionen – steg för steg"
        lead="Varje granskning följer samma ordning. Ofullständiga steg markeras öppet med status istället för att gissas."
      />

      <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {TIMELINE.map((step, i) => (
          <li
            key={step.title}
            className="rounded-xl border border-border/70 bg-card p-5"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface/60 text-xs font-semibold text-foreground nums-tabular">
                {i + 1}
              </span>
              <StatusTag status={step.status} />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-foreground">{step.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function StatusTag({ status }: { status: "process" | "pending" }) {
  if (status === "process") {
    return (
      <Badge variant="outline" className="gap-1 border-primary/30 text-primary">
        <CheckCircle2 className="h-3 w-3" aria-hidden />
        Pågående metod
      </Badge>
    );
  }
  return (
    <Badge variant="outline" className="gap-1 border-warning/30 text-warning">
      <Clock className="h-3 w-3" aria-hidden />
      Verifiering tillkommer
    </Badge>
  );
}

/* -------------------------------------------------------------------------- */
/*  8. Source transparency ledger                                             */
/* -------------------------------------------------------------------------- */

function SourceLedger() {
  return (
    <Section id="kallor" className="border-t border-border/60">
      <SectionHeading
        eyebrow="Källtransparens"
        title="Källregister"
        lead="Varje uppgiftskategori knyts till sin källtyp. I denna prototyp är inga operatörsuppgifter verifierade."
      />

      <div className="overflow-hidden rounded-xl border border-border/70">
        <div className="hidden grid-cols-[1.2fr_1.4fr_1fr] gap-px bg-surface/60 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:grid">
          <span>Källa</span>
          <span>Omfattning</span>
          <span>Status</span>
        </div>
        <ul className="divide-y divide-border/50">
          {SOURCE_LEDGER.map((src) => (
            <li
              key={src.title}
              className="grid gap-1 bg-card px-4 py-4 sm:grid-cols-[1.2fr_1.4fr_1fr] sm:items-center sm:gap-px"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <BookOpen className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                {src.href ? (
                  <a
                    href={src.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    {src.title}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                ) : (
                  src.title
                )}
              </div>
              <div className="text-sm text-muted-foreground">{src.scope}</div>
              <div className="text-sm">
                <FieldValue value={src.status} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-4 flex items-start gap-2 rounded-lg border border-border/60 bg-surface/30 p-4 text-sm text-muted-foreground">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
        Kontrollera alltid operatörens webbplats innan du fattar beslut. Endast
        offentliga stödresurser som Spelpaus.se och Stödlinjen.se länkas i denna prototyp.
      </p>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  9. Responsible gambling – deeper section                                  */
/* -------------------------------------------------------------------------- */

function ResponsibleGamblingDeep() {
  return (
    <Section id="ansvarsspel" className="bg-surface/20">
      <div className="rounded-2xl border border-border/70 bg-card p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <div className="flex items-center gap-2">
              <LifeBuoy className="h-5 w-5 text-primary" aria-hidden />
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Ansvarsfullt spelande
              </p>
            </div>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Spel ska vara underhållning – inte ett sätt att tjäna pengar
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Sätt gränser, ta pauser och spela aldrig för mer än du har råd att förlora.
              Stöd finns alltid tillgängligt, dygnet runt och anonymt.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="default" size="sm">
                <a href="https://www.spelpaus.se" target="_blank" rel="noopener noreferrer">
                  Spelpaus.se
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href="https://www.stodlinjen.se" target="_blank" rel="noopener noreferrer">
                  Stödlinjen.se
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-2">
            {RG_CARDS.map((card) => (
              <div key={card.title} className="bg-card p-5">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Shield className="h-4 w-4 text-primary" aria-hidden />
                  {card.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  10. Closing editorial status panel                                        */
/* -------------------------------------------------------------------------- */

function ClosingStatus() {
  const rows = [
    { k: "Status", v: "Prototyp" },
    { k: "Datakälla", v: "Platshållardata" },
    { k: "Senast granskad", v: "Verifiering tillkommer" },
    { k: "Nästa steg", v: "Ersätt platshållardata med verifierade källor" },
  ];

  return (
    <Section className="border-t border-border/60 py-10 sm:py-12">
      <div className="rounded-2xl border border-border/70 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <FileText className="h-4 w-4" aria-hidden />
          Redaktionell status
        </div>
        <Separator className="my-5" />
        <dl className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {rows.map((row) => (
            <div key={row.k} className="bg-card p-4">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">{row.k}</dt>
              <dd className="mt-1 text-sm font-medium text-foreground">{row.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

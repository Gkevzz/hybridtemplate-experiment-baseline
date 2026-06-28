import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  ExternalLink,
  ClipboardList,
  FileText,
  Scale,
  Clock3,
  CircleHelp,
  Wallet,
  CalendarClock,
  Layers,
  CheckCircle2,
} from "lucide-react";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/layout/Container";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ResponsibleGamblingBlock } from "@/components/sections/ResponsibleGamblingBlock";
import { SourcesList } from "@/components/sections/SourcesList";
import { buildCanonical, buildMeta } from "@/lib/seo/meta";

export const Route = createFileRoute("/hybridbonus-2")({
  head: () => ({
    meta: buildMeta({
      title: "HybridBonus 2.0 – Redaktionell precision (prototyp)",
      description:
        "Visuell prototyp för HybridBonus 2.0. Redaktionell precision utan rangordning – ansvarsfullt spelande, jämförelse, bonusvillkor, metodik och källtransparens.",
      path: "/hybridbonus-2",
      noindex: true,
    }),
    links: [buildCanonical("/hybridbonus-2")],
  }),
  component: HybridBonusTwo,
});

/* -------------------------------------------------------------------------- */
/* Tidig banner om ansvarsfullt spelande                                      */
/* -------------------------------------------------------------------------- */

function ResponsibleGamblingBand() {
  return (
    <div className="border-b border-border/60 bg-surface/50">
      <Container className="flex flex-col gap-3 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-muted-foreground">
          <ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden />
          <span>
            <span className="font-medium text-foreground">18+.</span> Spel ska vara underhållning –
            sätt gränser innan du börjar.
          </span>
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <a
            href="https://www.spelpaus.se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary"
          >
            Spelpaus.se
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
          <a
            href="https://www.stodlinjen.se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary"
          >
            Stödlinjen.se
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </Container>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Redaktionell hero                                                          */
/* -------------------------------------------------------------------------- */

function EditorialHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div aria-hidden className="bg-ambient pointer-events-none absolute inset-0 -z-10 opacity-50" />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            HybridBonus 2.0 · Redaktionell precision
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Faktagranskad information om casinon med svensk licens – utan rangordning.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Vi beskriver hur villkor, betalningar och trygghet fungerar, så att du kan dra egna
            slutsatser. Inga topplistor, inga betyg och inga uppblåsta erbjudanden – endast
            redaktionellt granskat innehåll.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="xl" asChild>
              <a href="#jamforelse">Till jämförelsen</a>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <a href="#metodik">Så arbetar redaktionen</a>
            </Button>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-card">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Redaktionella principer
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              {[
                "Endast operatörer med licens från Spelinspektionen beskrivs.",
                "Ingen rangordning, inga poäng och inga stjärnor.",
                "Affiliatesamarbeten påverkar inte det redaktionella innehållet.",
                "Varje uppgift märks med källa och granskningsstatus.",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span className="text-muted-foreground">{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg border border-dashed border-border/70 bg-surface/50 px-3 py-2 text-xs text-muted-foreground">
              Status: Verifiering tillkommer
            </p>
          </div>
        </aside>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Icke-rangordnande jämförelsemodul                                          */
/* -------------------------------------------------------------------------- */

interface CompareEntry {
  name: string;
  licens: string;
  insattning: string;
  uttag: string;
  granskad: string;
}

// Platshållardata. Neutrala exempelnamn i bokstavsordning – ingen rangordning.
const COMPARE: CompareEntry[] = [
  {
    name: "Operatör A (exempel)",
    licens: "Verifiering tillkommer",
    insattning: "Verifiering tillkommer",
    uttag: "Verifiering tillkommer",
    granskad: "Verifiering tillkommer",
  },
  {
    name: "Operatör B (exempel)",
    licens: "Verifiering tillkommer",
    insattning: "Verifiering tillkommer",
    uttag: "Verifiering tillkommer",
    granskad: "Verifiering tillkommer",
  },
  {
    name: "Operatör C (exempel)",
    licens: "Verifiering tillkommer",
    insattning: "Verifiering tillkommer",
    uttag: "Verifiering tillkommer",
    granskad: "Verifiering tillkommer",
  },
];

const COMPARE_COLUMNS: { key: keyof Omit<CompareEntry, "name">; label: string }[] = [
  { key: "licens", label: "Licens" },
  { key: "insattning", label: "Insättningsmetoder" },
  { key: "uttag", label: "Uttagsrutiner" },
  { key: "granskad", label: "Senast granskad" },
];

function ComparisonModule() {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-dashed border-border/70 bg-surface/40 px-4 py-3 text-sm text-muted-foreground">
        <Layers className="h-4 w-4 shrink-0 text-primary" aria-hidden />
        <span>
          Urvalet visas i bokstavsordning och är{" "}
          <span className="font-medium text-foreground">inte en rangordning</span>. Kolumnerna
          beskriver egenskaper sida vid sida så att du kan jämföra på dina egna villkor.
        </span>
      </div>

      <div className="rounded-2xl border border-border/70 bg-card shadow-card">
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border/70 bg-surface/40 text-left">
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Operatör
                </th>
                {COMPARE_COLUMNS.map((col) => (
                  <th
                    key={col.key}
                    className="whitespace-nowrap px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((entry) => (
                <tr
                  key={entry.name}
                  className="border-b border-border/50 last:border-0 hover:bg-surface/30"
                >
                  <td className="px-5 py-4 font-semibold text-foreground">{entry.name}</td>
                  {COMPARE_COLUMNS.map((col) => (
                    <td key={col.key} className="px-5 py-4 text-muted-foreground">
                      {entry[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        Tabellen innehåller platshållare. Faktiska uppgifter fylls i efter redaktionell granskning.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Bonusvillkor förklarade                                                    */
/* -------------------------------------------------------------------------- */

const BONUS_TERMS: { icon: typeof Scale; term: string; body: string }[] = [
  {
    icon: Scale,
    term: "Omsättningskrav",
    body: "Anger hur många gånger ett bonusbelopp måste spelas innan eventuella vinster kan tas ut. Ett lägre tal innebär färre spelrundor innan uttag är möjligt. Exakt nivå anges per erbjudande – Verifiering tillkommer.",
  },
  {
    icon: Wallet,
    term: "Maximal insats under aktiv bonus",
    body: "Många villkor begränsar hur mycket du får satsa per spelomgång medan en bonus är aktiv. Att överskrida gränsen kan innebära att bonusen dras tillbaka.",
  },
  {
    icon: CalendarClock,
    term: "Giltighetstid",
    body: "Bonusar och free spins gäller ofta under en begränsad period. När tiden löpt ut tas vanligtvis kvarvarande bonusmedel bort.",
  },
  {
    icon: Layers,
    term: "Spelbidrag per kategori",
    body: "Olika speltyper bidrar olika mycket till omsättningskravet. Det är vanligt att vissa kategorier räknas till en lägre andel än andra. Specifika andelar anges i respektive villkor.",
  },
  {
    icon: Wallet,
    term: "Uttagsregler",
    body: "Uttag kan kräva slutförd identitetskontroll och att omsättningskravet är uppfyllt. Handläggningstider varierar mellan operatörer och betalningsmetoder.",
  },
];

function BonusTermsExplainer() {
  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="rounded-2xl border border-border/70 bg-card p-6">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
            <FileText className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </span>
          <h3 className="mt-4 text-lg font-semibold">Läs villkoren innan du tackar ja</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Ett bonuserbjudande är inte bättre än sina villkor. Nedan förklarar vi de begrepp som
            oftast avgör vad ett erbjudande faktiskt innebär – neutralt och utan att lyfta fram
            någon enskild operatör.
          </p>
          <p className="mt-5 rounded-lg border border-dashed border-border/70 bg-surface/50 px-3 py-2 text-xs text-muted-foreground">
            Operatörsspecifika villkor: Verifiering tillkommer
          </p>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="rounded-2xl border border-border/70 bg-card px-5 sm:px-6">
          <Accordion type="single" collapsible className="w-full">
            {BONUS_TERMS.map(({ icon: Icon, term, body }) => (
              <AccordionItem key={term} value={term} className="border-border/60 last:border-b-0">
                <AccordionTrigger className="hover:no-underline">
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {term}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {body}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Metodik                                                                    */
/* -------------------------------------------------------------------------- */

const METHOD_STEPS: { icon: typeof ClipboardList; title: string; body: string }[] = [
  {
    icon: ShieldCheck,
    title: "1. Licenskontroll",
    body: "Vi bekräftar att operatören har giltig licens hos Spelinspektionen innan något beskrivs.",
  },
  {
    icon: ClipboardList,
    title: "2. Faktainsamling",
    body: "Villkor, betalningsmetoder och rutiner dokumenteras från operatörens egna sidor och officiella källor.",
  },
  {
    icon: CircleHelp,
    title: "3. Redaktionell granskning",
    body: "En redaktör läser igenom underlaget, kontrollerar formuleringar och markerar oklarheter.",
  },
  {
    icon: Clock3,
    title: "4. Uppdatering",
    body: "Uppgifter ses över löpande. Ändringar dateras så att du ser hur aktuell informationen är.",
  },
];

function MethodologySection() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {METHOD_STEPS.map(({ icon: Icon, title, body }) => (
        <div
          key={title}
          className="flex min-w-0 flex-col gap-3 rounded-2xl border border-border/70 bg-card p-6"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </span>
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Källor & uppdateringstransparens                                           */
/* -------------------------------------------------------------------------- */

const TRANSPARENCY_META = [
  { label: "Senast granskad", value: "Verifiering tillkommer" },
  { label: "Granskad av", value: "Verifiering tillkommer" },
  { label: "Nästa översyn", value: "Verifiering tillkommer" },
];

const SOURCES = [
  { label: "Spelinspektionen – licensregister (officiell källa)", href: "https://www.spelinspektionen.se" },
  { label: "Spelpaus.se – nationell självavstängning", href: "https://www.spelpaus.se" },
  { label: "Stödlinjen.se – stöd vid spelproblem", href: "https://www.stodlinjen.se" },
  { label: "Operatörens publicerade villkor – Verifiering tillkommer" },
];

function TransparencySection() {
  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="rounded-2xl border border-border/70 bg-card p-6">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Källor
          </h3>
          <div className="mt-5">
            <SourcesList items={SOURCES} />
          </div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="rounded-2xl border border-border/70 bg-card p-6">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Uppdateringsstatus
          </h3>
          <dl className="mt-5 space-y-4">
            {TRANSPARENCY_META.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-4 border-b border-border/50 pb-4 last:border-0 last:pb-0"
              >
                <dt className="text-sm text-muted-foreground">{row.label}</dt>
                <dd className="text-sm font-medium text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Datum och ansvarig redaktör publiceras när granskningen är slutförd. Prototypen visar
            var dessa uppgifter kommer att stå.
          </p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Sida                                                                       */
/* -------------------------------------------------------------------------- */

function HybridBonusTwo() {
  return (
    <SiteLayout>
      <ResponsibleGamblingBand />

      <EditorialHero />

      <Section id="jamforelse">
        <SectionHeading
          eyebrow="Jämförelse"
          title="Egenskaper sida vid sida"
          lead="En neutral översikt utan rangordning. Jämför licens, betalningar och rutiner och bilda dig en egen uppfattning."
        />
        <ComparisonModule />
      </Section>

      <Section id="bonusvillkor" className="bg-surface/30">
        <SectionHeading
          eyebrow="Bonusvillkor"
          title="Bonusvillkor förklarade"
          lead="Begreppen som avgör vad ett erbjudande faktiskt innebär – förklarade neutralt."
        />
        <BonusTermsExplainer />
      </Section>

      <Section id="metodik">
        <SectionHeading
          eyebrow="Metodik"
          title="Så arbetar redaktionen"
          lead="Fyra steg från licenskontroll till löpande uppdatering. Inga betyg, ingen rangordning."
        />
        <MethodologySection />
      </Section>

      <Section id="ansvar" className="bg-surface/30">
        <SectionHeading
          eyebrow="Ansvarsfullt spelande"
          title="Stöd och självkontroll"
          lead="Verktyg och oberoende hjälp finns alltid tillgängliga – oavsett vilket casino du väljer."
        />
        <div className="max-w-3xl">
          <ResponsibleGamblingBlock />
        </div>
      </Section>

      <Section id="transparens">
        <SectionHeading
          eyebrow="Transparens"
          title="Källor och uppdateringar"
          lead="Vi visar varifrån uppgifterna kommer och när de senast granskades."
        />
        <TransparencySection />
      </Section>
    </SiteLayout>
  );
}

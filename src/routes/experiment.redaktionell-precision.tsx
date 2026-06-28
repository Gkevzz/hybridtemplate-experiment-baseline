import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, ExternalLink } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs, breadcrumbsJsonLd } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { script } from "@/lib/seo/jsonld";
import { buildCanonical, buildMeta } from "@/lib/seo/meta";

const PATH = "/experiment/redaktionell-precision";
const CRUMBS = [{ label: "Experiment", to: "/" }, { label: "Redaktionell precision" }];

export const Route = createFileRoute("/experiment/redaktionell-precision")({
  head: () => ({
    meta: buildMeta({
      title: "Redaktionell precision (experiment) | HybridBonus",
      description:
        "Isolerad prototyp för redaktionell jämförelse utan ranking, poäng eller säljhype. Endast platshållardata.",
      path: PATH,
      noindex: true,
    }),
    links: [buildCanonical(PATH)],
    scripts: [script(breadcrumbsJsonLd(CRUMBS))],
  }),
  component: RedaktionellPrecision,
});

type FieldRow = {
  key: string;
  label: string;
  values: [string, string, string];
};

type SourceRow = {
  title: string;
  scope: string;
  status: string;
  href?: string;
};

const OPERATORS = ["Operatör A (exempel)", "Operatör B (exempel)", "Operatör C (exempel)"] as const;

const FIELD_ROWS: FieldRow[] = [
  {
    key: "licens",
    label: "Licensstatus",
    values: ["Verifiering tillkommer", "Verifiering tillkommer", "Verifiering tillkommer"],
  },
  {
    key: "bonusvillkor",
    label: "Bonusvillkor",
    values: ["Verifiering tillkommer", "Verifiering tillkommer", "Verifiering tillkommer"],
  },
  {
    key: "uttag",
    label: "Uttagsinformation",
    values: [
      "Kontrollera alltid operatörens webbplats",
      "Kontrollera alltid operatörens webbplats",
      "Kontrollera alltid operatörens webbplats",
    ],
  },
  {
    key: "kalla",
    label: "Källstatus",
    values: [
      "Ej verifierad i denna prototyp",
      "Ej verifierad i denna prototyp",
      "Ej verifierad i denna prototyp",
    ],
  },
];

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
    title: "Spelpaus.se",
    scope: "Självavstängning",
    status: "Offentlig stödresurs",
    href: "https://www.spelpaus.se",
  },
  {
    title: "Stödlinjen.se",
    scope: "Stöd vid spelproblem",
    status: "Offentlig stödresurs",
    href: "https://www.stodlinjen.se",
  },
];

function RedaktionellPrecision() {
  return (
    <SiteLayout>
      <Breadcrumbs items={CRUMBS} />
      <Section className="!pt-10 sm:!pt-14">
        <Container>
          <Badge variant="outline">Experiment · isolerad prototyp · endast platshållardata</Badge>
          <div className="mt-6 max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Redaktionell precision
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Jämför licensierade casinon utan ranking, poäng eller säljhype. Ingen aktör utses till
              bäst och alla operatörsfält är platshållare tills verifiering tillkommer.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="!pt-0">
        <Container>
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5 text-sm">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 text-destructive" aria-hidden="true" />
              <div>
                <p className="font-semibold">
                  Spela ansvarsfullt. Spel kan vara beroendeframkallande.
                </p>
                <p className="mt-1 text-muted-foreground">
                  Stöd finns via etablerade hjälpresurser som Spelpaus.se och Stödlinjen.se.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="Jämförelse" title="Likvärdiga placeholder-fält" />
          <div className="overflow-x-auto rounded-2xl border border-border/70">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-surface/50">
                <tr>
                  <th className="p-4 font-medium">Fält</th>
                  {OPERATORS.map((operator) => (
                    <th key={operator} className="p-4 font-medium">
                      {operator}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FIELD_ROWS.map((row) => (
                  <tr key={row.key} className="border-t border-border/70">
                    <th className="p-4 font-medium">{row.label}</th>
                    {row.values.map((value, index) => (
                      <td key={`${row.key}-${index}`} className="p-4">
                        <FieldValue value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/30">
        <Container>
          <SectionHeading eyebrow="Källor" title="Källstatus i prototypen" />
          <div className="grid gap-3 md:grid-cols-2">
            {SOURCE_LEDGER.map((source) => (
              <div key={source.title} className="rounded-2xl border border-border/70 bg-card p-5">
                <h3 className="font-semibold">
                  {source.href ? (
                    <a
                      className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
                      href={source.href}
                    >
                      {source.title}
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    source.title
                  )}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{source.scope}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                  {source.status}
                </p>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-8" asChild>
            <a href="/">Till startsidan</a>
          </Button>
        </Container>
      </Section>
    </SiteLayout>
  );
}

function FieldValue({ value }: { value: string }) {
  if (value === "Uppgift saknas" || value === "Ej verifierad i denna prototyp") {
    return <span className="text-muted-foreground">{value}</span>;
  }

  if (value === "Verifiering tillkommer") {
    return (
      <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
        {value}
      </span>
    );
  }

  return <span>{value}</span>;
}

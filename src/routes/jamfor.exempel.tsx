import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { breadcrumbsJsonLd, script } from "@/lib/seo/jsonld";
import { buildCanonical, buildMeta } from "@/lib/seo/meta";
import { Section, SectionHeading } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { CasinoListItem } from "@/components/sections/CasinoListItem";
import { Faq } from "@/components/sections/Faq";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { Button } from "@/components/ui/button";
import { CASINOS, GUIDES } from "@/data/casinos";

const CRUMBS = [
  { label: "Jämför", to: "/" },
  { label: "Exempeljämförelse" },
];

const FILTERS = [
  "Alla",
  "Svensk licens",
  "Snabba uttag",
  "Trustly",
  "Swish",
  "Live Casino",
];

export const Route = createFileRoute("/jamfor/exempel")({
  head: () => ({
    meta: buildMeta({
      title: "Jämför casinon (mall) | HybridBonus",
      description:
        "Mall för jämförelsesidor på HybridBonus. Filter, jämförelsetabell och sammanfattningar – innehållet är platshållare.",
      path: "/jamfor/exempel",
      noindex: true,
    }),
    links: [buildCanonical("/jamfor/exempel")],
    scripts: [script(breadcrumbsJsonLd(CRUMBS))],
  }),
  component: CompareTemplate,
});

function CompareTemplate() {
  return (
    <SiteLayout>
      <Breadcrumbs items={CRUMBS} />

      <PageHero
        eyebrow="Jämför"
        title="Jämför casinon sida vid sida"
        lead="Mallsida. Filterraden nedan är visuell – funktionalitet och riktigt urval kommer i nästa fas."
      />

      <Section>
        <div className="-mx-1 mb-6 overflow-x-auto">
          <div className="flex gap-2 px-1">
            {FILTERS.map((f, i) => (
              <Button
                key={f}
                size="sm"
                variant={i === 0 ? "default" : "outline"}
                className="shrink-0"
              >
                {f}
              </Button>
            ))}
          </div>
        </div>

        <ComparisonTable casinos={CASINOS} />
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Sammanfattningar"
          title="Kort om varje casino"
        />
        <div className="flex flex-col gap-5">
          {CASINOS.slice(0, 3).map((c, i) => (
            <CasinoListItem key={c.id} casino={c} index={i} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Vanliga frågor" title="FAQ" />
        <div className="rounded-2xl border border-border/70 bg-card p-2 sm:p-4">
          <Faq />
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading eyebrow="Relaterat" title="Relaterade guider" />
        <RelatedLinks
          items={GUIDES.map((g) => ({
            eyebrow: "Guide",
            title: g.title,
            description: g.excerpt,
          }))}
        />
      </Section>
    </SiteLayout>
  );
}

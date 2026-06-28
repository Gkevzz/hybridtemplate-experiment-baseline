import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Hero } from "@/components/sections/Hero";
import { CasinoListItem } from "@/components/sections/CasinoListItem";
import { GuideCard } from "@/components/sections/GuideCard";
import { EditorialBand } from "@/components/sections/EditorialBand";
import { CategoryGrid } from "@/components/sections/CategoryCard";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { Faq } from "@/components/sections/Faq";
import { CASINOS, GUIDES } from "@/data/casinos";

import { buildCanonical, buildMeta } from "@/lib/seo/meta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMeta({
      title: "HybridBonus – Jämförelse av svenska licensierade casinon",
      description:
        "Hitta rätt casino utifrån dina behov. Oberoende granskningar, Trust Profile och redaktionella guider – endast casinon med svensk licens.",
      path: "/",
    }),
    links: [buildCanonical("/")],
  }),
  component: Index,
});

function Index() {
  const top = CASINOS.slice(0, 5);

  return (
    <SiteLayout>
      <Hero />

      <Section id="kategorier">
        <SectionHeading
          eyebrow="Vad letar du efter?"
          title="Populära kategorier"
          lead="Välj en ingång – vi guidar dig vidare till granskningar och guider."
        />
        <CategoryGrid />
      </Section>

      <Section id="jamforelse">
        <SectionHeading
          eyebrow="Jämförelse"
          title="Granskade casinon"
          lead="Begränsat urval. Redaktionellt utvalda och regelbundet uppdaterade."
        />
        <div className="flex flex-col gap-5">
          {top.map((casino, i) => (
            <CasinoListItem key={casino.id} casino={casino} index={i} />
          ))}
        </div>
      </Section>

      <Section id="senaste-recensioner">
        <SectionHeading eyebrow="Senaste recensioner" title="Nya redaktionella granskningar" />
        <RelatedLinks
          items={top.slice(0, 3).map((c) => ({
            eyebrow: "Recension",
            title: c.name,
            description: c.tagline,
          }))}
        />
      </Section>

      <Section id="guider">
        <SectionHeading
          eyebrow="Senaste guider"
          title="Redaktionella guider"
          lead="Korta, sakliga guider för att fatta bättre beslut."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((g) => (
            <GuideCard key={g.id} guide={g} />
          ))}
        </div>
      </Section>

      <EditorialBand />

      <Section id="faq">
        <SectionHeading
          eyebrow="Vanliga frågor"
          title="FAQ"
          lead="Platshållarinnehåll – ersätts med redaktionella svar i nästa fas."
        />
        <div className="rounded-2xl border border-border/70 bg-card p-2 sm:p-4">
          <Faq />
        </div>
      </Section>
    </SiteLayout>
  );
}

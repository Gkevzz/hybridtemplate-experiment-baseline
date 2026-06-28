import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { breadcrumbsJsonLd, script } from "@/lib/seo/jsonld";
import { buildCanonical, buildMeta } from "@/lib/seo/meta";
import { Section, SectionHeading } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { TrustProfile } from "@/components/trust-profile/TrustProfile";
import { ProsCons } from "@/components/sections/ProsCons";
import { InfoBoxGrid } from "@/components/ui/info-box";
import { TrustSignalRow } from "@/components/ui/trust-signal";
import { VerdictPill } from "@/components/ui/verdict-pill";
import { VerifiedStamp } from "@/components/ui/verified-stamp";
import { Faq } from "@/components/sections/Faq";
import { SourcesList } from "@/components/sections/SourcesList";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { CASINOS } from "@/data/casinos";
import { ShieldCheck, Gift, Coins, Percent, Clock, Headphones } from "lucide-react";

const CRUMBS = [{ label: "Recensioner", to: "/" }, { label: "Exempelcasino" }];

export const Route = createFileRoute("/recensioner/exempel")({
  head: () => ({
    meta: buildMeta({
      title: "Recension – Exempelcasino (mall) | HybridBonus",
      description:
        "Mall för casino-recensioner på HybridBonus. Innehållet är neutrala platshållare tills redaktionell granskning publiceras.",
      path: "/recensioner/exempel",
      ogType: "article",
      noindex: true,
    }),
    links: [buildCanonical("/recensioner/exempel")],
    scripts: [script(breadcrumbsJsonLd(CRUMBS))],
  }),
  component: ReviewTemplate,
});

function ReviewTemplate() {
  const casino = CASINOS[0];
  const enriched = casino.info.map((it, i) => ({
    ...it,
    icon: [ShieldCheck, Gift, Coins, Percent, Clock, Headphones][i % 6],
  }));

  return (
    <SiteLayout>
      <Breadcrumbs items={CRUMBS} />

      <PageHero
        eyebrow="Recension"
        title={casino.name}
        lead={casino.tagline}
        meta={
          <>
            <VerdictPill verdict={casino.verdict} />
            <VerifiedStamp />
          </>
        }
      />

      <Section className="!pt-12 sm:!pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="space-y-10">
            <div>
              <SectionHeading title="Snabb sammanfattning" />
              <p className="text-base leading-relaxed text-muted-foreground">
                Detta är en platshållare. Sammanfattningen av {casino.name} kommer att innehålla
                redaktionens kortfattade omdöme om bonusvärde, uttagstid, spelutbud och övergripande
                användarupplevelse.
              </p>
            </div>

            <div>
              <SectionHeading title="Fördelar och nackdelar" />
              <ProsCons
                pros={["Platshållare", "Platshållare", "Platshållare"]}
                cons={["Platshållare", "Platshållare"]}
              />
            </div>

            <div>
              <SectionHeading title="Snabbfakta" />
              <InfoBoxGrid items={enriched} />
            </div>

            <div>
              <SectionHeading title="Betalningsmetoder" />
              <TrustSignalRow />
            </div>

            <div>
              <SectionHeading title="Vårt omdöme" />
              <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <VerdictPill verdict={casino.verdict} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {casino.comment}
                </p>
              </div>
            </div>

            <div>
              <SectionHeading title="Vanliga frågor" />
              <div className="rounded-2xl border border-border/70 bg-card p-2 sm:p-4">
                <Faq />
              </div>
            </div>

            <div>
              <SectionHeading title="Källor" />
              <SourcesList
                items={[
                  { label: "Källhänvisning tillkommer" },
                  { label: "Källhänvisning tillkommer" },
                ]}
              />
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <TrustProfile data={casino.trust} verdict={casino.verdict} comment={casino.comment} />
            <VerifiedStamp />
          </aside>
        </div>
      </Section>

      <Section id="relaterat" className="bg-surface/30">
        <SectionHeading eyebrow="Relaterat" title="Liknande recensioner" />
        <RelatedLinks
          items={CASINOS.slice(1, 4).map((c) => ({
            eyebrow: "Recension",
            title: c.name,
            description: c.tagline,
          }))}
        />
      </Section>
    </SiteLayout>
  );
}

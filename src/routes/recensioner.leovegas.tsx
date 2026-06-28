import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { breadcrumbsJsonLd, script } from "@/lib/seo/jsonld";
import { buildCanonical, buildMeta } from "@/lib/seo/meta";
import { Section, SectionHeading } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { TrustProfile } from "@/components/trust-profile/TrustProfile";
import { ProsCons } from "@/components/sections/ProsCons";
import { ResponsibleGamblingBlock } from "@/components/sections/ResponsibleGamblingBlock";
import { ReviewBonusBlock } from "@/components/sections/ReviewBonusBlock";
import { ReviewPaymentsBlock } from "@/components/sections/ReviewPaymentsBlock";
import { SourcesList } from "@/components/sections/SourcesList";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { VerifiedStamp } from "@/components/ui/verified-stamp";
import { GUIDES } from "@/data/casinos";
import { LEOVEGAS } from "@/data/leovegas";

/**
 * LeoVegas review — internal draft (noindex,follow).
 *
 * This route is the reusable gold-standard review template. Every
 * fact-bearing section is wired up conditionally and only renders when
 * the corresponding data field is populated. Until LeoVegas has been
 * verified against official sources, the page renders only the
 * structural shell, a neutral pending TrustProfile, and an
 * operator-agnostic responsible-gambling block.
 *
 * Hard rules for this page:
 * - noindex,follow; NOT in sitemap; NOT in robots Disallow.
 * - NOT linked from any public listing (header, footer, home, related).
 * - NO unsourced facts about LeoVegas.
 * - NO Trust Profile scores until research is complete.
 * - NO commercial / affiliate CTAs.
 * - NO Review / FAQPage / Article / Product / SearchAction schema.
 */

const CRUMBS = [
  { label: "Recensioner", to: "/" },
  { label: "LeoVegas" },
];

export const Route = createFileRoute("/recensioner/leovegas")({
  head: () => ({
    meta: buildMeta({
      title: "LeoVegas recension – HybridBonus",
      description:
        "HybridBonus recension av LeoVegas. Sidan är under arbete och publiceras när fakta verifierats mot officiella källor.",
      path: "/recensioner/leovegas",
      ogType: "article",
      noindex: true,
    }),
    links: [buildCanonical("/recensioner/leovegas")],
    scripts: [script(breadcrumbsJsonLd(CRUMBS))],
  }),
  component: LeoVegasReview,
});

function LeoVegasReview() {
  const c = LEOVEGAS;

  return (
    <SiteLayout>
      <Breadcrumbs items={CRUMBS} />

      <PageHero eyebrow="Recension" title={c.name} lead={c.tagline} />

      <Section className="!pt-12 sm:!pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="space-y-10">
            <div>
              <SectionHeading title="Snabb sammanfattning" />
              <p className="text-base leading-relaxed text-muted-foreground">
                Den här recensionen är under arbete. När redaktionen har
                verifierat licens, bonusvillkor, betalningsmetoder,
                uttagstider, spelutbud, mobilupplevelse och kundsupport mot
                officiella källor publiceras innehållet här tillsammans med
                en transparent Trust Profile och fullständig källista.
              </p>
            </div>

            {c.bestFor && c.bestFor.length > 0 && (
              <div>
                <SectionHeading title="Passar bäst för" />
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {c.bestFor.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

            {c.notIdealFor && c.notIdealFor.length > 0 && (
              <div>
                <SectionHeading title="Mindre lämpligt för" />
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {c.notIdealFor.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

            {c.prosCons && (
              <div>
                <SectionHeading title="Fördelar och nackdelar" />
                <ProsCons pros={c.prosCons.pros} cons={c.prosCons.cons} />
              </div>
            )}

            {c.welcomeBonus && (
              <div>
                <SectionHeading title="Välkomstbonus" />
                <ReviewBonusBlock bonus={c.welcomeBonus} />
              </div>
            )}

            {c.welcomeBonus?.wageringX !== undefined && (
              <div>
                <SectionHeading title="Omsättningsvillkor" />
                <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Omsättningskrav: {c.welcomeBonus.wageringX}x. Se
                    fullständiga villkor hos operatören.
                  </p>
                </div>
              </div>
            )}

            {c.payments && (
              <div>
                <SectionHeading title="Betalningsmetoder" />
                <ReviewPaymentsBlock payments={c.payments} />
              </div>
            )}

            {c.withdrawalTime && (
              <div>
                <SectionHeading title="Uttag" />
                <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6 text-sm text-muted-foreground">
                  <p>
                    Typisk uttagstid:{" "}
                    <span className="font-medium text-foreground">
                      {c.withdrawalTime.typical}
                    </span>
                    {c.withdrawalTime.range
                      ? ` (intervall: ${c.withdrawalTime.range})`
                      : ""}
                    .
                  </p>
                </div>
              </div>
            )}

            {c.games && (
              <div>
                <SectionHeading title="Spelutbud" />
                <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6 text-sm text-muted-foreground">
                  {c.games.totalApprox !== undefined && (
                    <p>
                      Antal spel (cirka):{" "}
                      <span className="font-medium text-foreground">
                        {c.games.totalApprox}
                      </span>
                    </p>
                  )}
                  {c.games.providers.length > 0 && (
                    <p className="mt-2">
                      Leverantörer: {c.games.providers.join(", ")}
                    </p>
                  )}
                  {c.games.categories.length > 0 && (
                    <p className="mt-2">
                      Kategorier: {c.games.categories.join(", ")}
                    </p>
                  )}
                </div>
              </div>
            )}

            {c.mobile && (
              <div>
                <SectionHeading title="Mobilupplevelse" />
                <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6 text-sm text-muted-foreground">
                  <ul className="space-y-1">
                    <li>iOS-app: {c.mobile.iosApp ? "Ja" : "Nej"}</li>
                    <li>
                      Android-app: {c.mobile.androidApp ? "Ja" : "Nej"}
                    </li>
                    <li>
                      Webboptimerad:{" "}
                      {c.mobile.browserOptimised ? "Ja" : "Nej"}
                    </li>
                  </ul>
                  {c.mobile.notes && (
                    <p className="mt-3">{c.mobile.notes}</p>
                  )}
                </div>
              </div>
            )}

            {c.support && (
              <div>
                <SectionHeading title="Kundsupport" />
                <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6 text-sm text-muted-foreground">
                  <p>Kanaler: {c.support.channels.join(", ")}</p>
                  <p className="mt-2">Öppettider: {c.support.hours}</p>
                  <p className="mt-2">
                    Svensk support: {c.support.swedish ? "Ja" : "Nej"}
                  </p>
                </div>
              </div>
            )}

            <div>
              <SectionHeading title="Ansvarsfullt spelande" />
              <ResponsibleGamblingBlock />
            </div>

            {c.verdictComment && (
              <div>
                <SectionHeading title="Vårt omdöme" />
                <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {c.verdictComment}
                  </p>
                </div>
              </div>
            )}

            {c.sources && c.sources.length > 0 && (
              <div>
                <SectionHeading title="Källor" />
                <SourcesList
                  items={c.sources.map((s) => ({
                    label: s.label,
                    href: s.url,
                  }))}
                />
              </div>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <TrustProfile state="pending" />
            {c.verifiedAt && <VerifiedStamp date={c.verifiedAt} />}
          </aside>
        </div>
      </Section>

      <Section id="relaterat">
        <SectionHeading eyebrow="Guide" title="Relaterade guider" />
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

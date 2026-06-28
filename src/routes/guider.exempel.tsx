import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { breadcrumbsJsonLd, script } from "@/lib/seo/jsonld";
import { buildCanonical, buildMeta } from "@/lib/seo/meta";
import { Section, SectionHeading } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Toc } from "@/components/sections/Toc";
import { Faq } from "@/components/sections/Faq";
import { SourcesList } from "@/components/sections/SourcesList";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { VerifiedStamp } from "@/components/ui/verified-stamp";
import { GUIDES } from "@/data/casinos";

const CRUMBS = [{ label: "Guider", to: "/" }, { label: "Exempelguide" }];

const TOC = [
  { id: "introduktion", label: "Introduktion" },
  { id: "forklaringar", label: "Förklaringar" },
  { id: "exempel", label: "Exempel" },
  { id: "vanliga-fragor", label: "Vanliga frågor" },
  { id: "kallor", label: "Källor" },
];

export const Route = createFileRoute("/guider/exempel")({
  head: () => ({
    meta: buildMeta({
      title: "Guide – Exempelguide (mall) | HybridBonus",
      description:
        "Mall för guider på HybridBonus. Innehållet är neutrala platshållare tills redaktionellt material publiceras.",
      path: "/guider/exempel",
      ogType: "article",
      noindex: true,
    }),
    links: [buildCanonical("/guider/exempel")],
    scripts: [script(breadcrumbsJsonLd(CRUMBS))],
  }),
  component: GuideTemplate,
});

function GuideTemplate() {
  return (
    <SiteLayout>
      <Breadcrumbs items={CRUMBS} />

      <PageHero
        eyebrow="Guide"
        title="Exempelguide – så fungerar mallen"
        lead="Detta är en mall. Riktiga guider följer samma struktur: introduktion, innehållsförteckning, förklaringar, exempel, FAQ och källor."
        meta={<VerifiedStamp />}
      />

      <Section className="!pt-12 sm:!pt-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-start">
          <aside className="lg:sticky lg:top-24">
            <Toc items={TOC} />
          </aside>

          <article className="space-y-12">
            <section id="introduktion" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold sm:text-3xl">Introduktion</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Detta är en platshållare. Det riktiga innehållet läggs till senare. Introduktionen
                ska sätta kontext, förklara varför ämnet är viktigt och ge läsaren en tydlig
                förväntan om vad guiden kommer att gå igenom.
              </p>
            </section>

            <section id="forklaringar" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold sm:text-3xl">Förklaringar</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Detta är en platshållare. Förklaringar bryts ner i tydliga underrubriker med
                kortfattad brödtext.
              </p>
            </section>

            <section id="exempel" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold sm:text-3xl">Exempel</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Detta är en platshållare. Konkreta exempel placeras här för att göra abstrakta
                begrepp greppbara.
              </p>
            </section>

            <section id="vanliga-fragor" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold sm:text-3xl">Vanliga frågor</h2>
              <div className="mt-4 rounded-2xl border border-border/70 bg-card p-2 sm:p-4">
                <Faq />
              </div>
            </section>

            <section id="kallor" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold sm:text-3xl">Källor</h2>
              <div className="mt-4">
                <SourcesList
                  items={[
                    { label: "Källhänvisning tillkommer" },
                    { label: "Källhänvisning tillkommer" },
                  ]}
                />
              </div>
            </section>
          </article>
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

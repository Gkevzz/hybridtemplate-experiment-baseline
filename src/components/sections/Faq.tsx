import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Neutral placeholder set. Replace via the `items` prop once real editorial
 * answers exist. Until then, FAQ schema emission should stay off in
 * production — see `faqJsonLd()` below.
 */
export const PLACEHOLDER_FAQ: FaqItem[] = [
  {
    q: "Fråga 1",
    a: "Detta är en platshållare. Det riktiga innehållet läggs till senare.",
  },
  {
    q: "Fråga 2",
    a: "Detta är en platshållare. Det riktiga innehållet läggs till senare.",
  },
  {
    q: "Fråga 3",
    a: "Detta är en platshållare. Det riktiga innehållet läggs till senare.",
  },
];

export function Faq({
  items = PLACEHOLDER_FAQ,
  className,
}: {
  items?: FaqItem[];
  className?: string;
}) {
  return (
    <div className={className}>
      <Accordion type="single" collapsible className="w-full">
        {items.map((it, i) => (
          <AccordionItem key={`${it.q}-${i}`} value={`item-${i}`} className="border-border/60">
            <AccordionTrigger className="text-left text-base font-medium">{it.q}</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {it.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

/**
 * Build FAQPage JSON-LD for a route's head().scripts entry.
 *
 * ⚠️ This is acceptable for *generic placeholder* FAQ during development.
 * Before production, either pass real FAQ content here OR remove the
 * `scripts` entry from the route's head() to disable the schema entirely.
 * Do NOT ship placeholder FAQ schema with real public content.
 */
export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

import { Container } from "@/components/layout/Container";
import {
  ShieldCheck,
  ClipboardCheck,
  BookOpenCheck,
  HeartHandshake,
} from "lucide-react";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Endast svensk licens",
    body: "Vi listar enbart casinon som har giltig licens från Spelinspektionen.",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent metodik",
    body: "Trust Profile bygger på sex kriterier som granskas av vår redaktion.",
  },
  {
    icon: BookOpenCheck,
    title: "Redaktionellt oberoende",
    body: "Affiliatesamarbeten påverkar inte våra omdömen eller rangordning.",
  },
  {
    icon: HeartHandshake,
    title: "Ansvarsfullt spelande",
    body: "Vi lyfter alltid verktyg för gränser, paus och självavstängning.",
  },
];

export function EditorialBand() {
  return (
    <section className="border-y border-border/60 bg-surface/40 py-16 sm:py-20">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex min-w-0 flex-col gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { ShieldCheck } from "lucide-react";
import { Container } from "./Container";

const COLUMNS = [
  {
    title: "Casinon",
    links: ["Alla casinon", "Bästa casinon", "Nya casinon", "Svensk licens"],
  },
  {
    title: "Bonusar",
    links: ["Bästa bonusar", "Free Spins", "Cashback", "Kampanjer"],
  },
  {
    title: "Betalningsmetoder",
    links: ["Trustly", "Swish", "BankID", "Visa"],
  },
  {
    title: "Guider",
    links: ["Omsättningskrav", "RTP", "Ansvarsfullt spelande", "Spelpaus"],
  },
];

const BRAND_LINKS = ["Hur vi testar", "Redaktionell policy", "Integritet", "Kontakt"];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <span className="font-display text-base font-bold">HybridBonus</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Oberoende jämförelsetjänst för casinon med svensk licens.
            </p>
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/90">
              Om HybridBonus
            </h3>
            <ul className="mt-4 space-y-3">
              {BRAND_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/90">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border/60 bg-surface/60 px-4 py-4 text-xs text-muted-foreground">
          <p>
            Spela ansvarsfullt. 18+. Stödlinjen:{" "}
            <a href="https://stodlinjen.se" className="underline">
              stodlinjen.se
            </a>
            .
          </p>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} HybridBonus. Alla rättigheter förbehållna.
        </p>
      </Container>
    </footer>
  );
}

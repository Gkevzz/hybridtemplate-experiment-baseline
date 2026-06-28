import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { TrustSignalRow } from "@/components/ui/trust-signal";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      {/* Subtle ambient backdrop — token-based, no casino aesthetic */}
      <div
        aria-hidden
        className="bg-ambient pointer-events-none absolute inset-0 -z-10 opacity-60"
      />
      <Container className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Oberoende jämförelsetjänst
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Sveriges mest transparenta jämförelse av casinon med svensk licens.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            HybridBonus granskar svenska casinon med fokus på trygghet, villkor
            och faktisk användarupplevelse. Inga falska erbjudanden, inga
            uppblåsta omdömen.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="xl">
              Se topplistan
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="xl" variant="outline">
              Läs vår metodik
            </Button>
          </div>

          <TrustSignalRow className="mt-10" />
        </div>
      </Container>
    </section>
  );
}

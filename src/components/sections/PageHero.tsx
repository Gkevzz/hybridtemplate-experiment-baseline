import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  meta?: ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  lead,
  meta,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("border-b border-border/60", className)}>
      <Container className="py-10 sm:py-14 lg:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lead}
            </p>
          )}
          {meta && (
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              {meta}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

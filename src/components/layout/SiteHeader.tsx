import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ShieldCheck } from "lucide-react";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

/**
 * Navigation follows the HybridBonus IA. Until the corresponding routes exist
 * every entry points at "/" so we never register dead links. When a route is
 * added, only the `to` value here needs to change.
 */
const NAV = [
  { label: "Casinon", to: "/" as const },
  { label: "Bonusar", to: "/" as const },
  { label: "Betalningsmetoder", to: "/" as const },
  { label: "Spel", to: "/" as const },
  { label: "Guider", to: "/guider/exempel" as const },
  { label: "Nyheter", to: "/" as const },
  { label: "Om HybridBonus", to: "/" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/75 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-background/55">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
            <ShieldCheck className="h-4 w-4" />
          </span>
          <span className="truncate font-display text-base font-bold tracking-tight">
            HybridBonus
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button size="sm" variant="ghost" asChild>
            <Link to="/jamfor/exempel">Jämför casinon</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Öppna meny"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-foreground lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="font-display text-base">Meny</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3.5 text-base font-medium text-foreground/90 hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button asChild className="mt-6 w-full" variant="outline">
              <Link to="/jamfor/exempel" onClick={() => setOpen(false)}>
                Jämför casinon
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}

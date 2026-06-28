import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "./Container";

export interface Crumb {
  label: string;
  /** Relative path; omit on the current page. */
  to?: string;
}

/**
 * Breadcrumbs.
 *
 * Rendered on every undersida (never on startsidan). Uses semantic
 * BreadcrumbList microdata for SEO. The trail itself scrolls horizontally
 * inside the component on very narrow screens so the page never gains a
 * horizontal scrollbar.
 *
 * Pair with `breadcrumbsJsonLd(items)` to emit BreadcrumbList JSON-LD via
 * the route's head() scripts.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ label: "Hem", to: "/" }, ...items];

  return (
    <div className="border-b border-border/60 bg-surface/20">
      <Container className="py-3">
        <nav aria-label="Brödsmulor" className="-mx-1 overflow-x-auto">
          <ol
            itemScope
            itemType="https://schema.org/BreadcrumbList"
            className="flex items-center gap-1 whitespace-nowrap px-1 text-xs text-muted-foreground"
          >
            {trail.map((c, i) => {
              const isLast = i === trail.length - 1;
              return (
                <li
                  key={`${c.label}-${i}`}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                  className="inline-flex items-center gap-1"
                >
                  {c.to && !isLast ? (
                    <Link
                      to={c.to}
                      itemProp="item"
                      className="inline-flex items-center gap-1 rounded px-1 py-0.5 hover:text-foreground"
                    >
                      {i === 0 && <Home className="h-3.5 w-3.5" aria-hidden />}
                      <span itemProp="name">{c.label}</span>
                    </Link>
                  ) : (
                    <span
                      itemProp="item"
                      className="inline-flex items-center gap-1 px-1 py-0.5 font-medium text-foreground"
                      aria-current={isLast ? "page" : undefined}
                    >
                      <span itemProp="name">{c.label}</span>
                    </span>
                  )}
                  <meta itemProp="position" content={String(i + 1)} />
                  {!isLast && (
                    <ChevronRight
                      className="h-3.5 w-3.5 text-muted-foreground/60"
                      aria-hidden
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
}

/**
 * Build BreadcrumbList JSON-LD for a route's head().scripts entry.
 * Pass the same items array used by <Breadcrumbs />.
 */
export function breadcrumbsJsonLd(items: Crumb[]) {
  const trail: Crumb[] = [{ label: "Hem", to: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.to ? { item: c.to } : {}),
    })),
  };
}

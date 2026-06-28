/**
 * JSON-LD builders for sitewide and per-route structured data.
 *
 * Organization and WebSite are emitted sitewide from __root.tsx.
 * Breadcrumbs are re-exported from the Breadcrumbs component so all
 * SEO imports can flow through this module.
 *
 * Do not add Review, Article, FAQPage, or SearchAction schemas with
 * placeholder content — emit only schemas backed by real, verified data.
 */

import { BASE_URL, ORGANIZATION, SITE_INLANGUAGE, SITE_NAME } from "./site";
export { breadcrumbsJsonLd } from "@/components/layout/Breadcrumbs";

/** Wrap a JSON-LD object in the head().scripts entry shape. */
export function script(obj: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(obj),
  };
}

/**
 * Organization JSON-LD. Emits `name` only while BASE_URL is empty —
 * schema.org / Google reject empty or relative `url` values, so we
 * omit the field until a real origin is set. Once BASE_URL is
 * populated, `url` is added automatically.
 */
export function organizationJsonLd() {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORGANIZATION.name,
  };
  if (BASE_URL) {
    base.url = BASE_URL;
  }
  return base;
}

/**
 * WebSite JSON-LD. Same BASE_URL rule as organizationJsonLd().
 * No SearchAction — emit only when a real site search exists.
 */
export function websiteJsonLd() {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    inLanguage: SITE_INLANGUAGE,
  };
  if (BASE_URL) {
    base.url = BASE_URL;
  }
  return base;
}

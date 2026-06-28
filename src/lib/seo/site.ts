/**
 * Sitewide SEO configuration.
 *
 * Single source of truth for site name, locale, description, and base URL.
 * Keep visitor-facing strings in idiomatic Swedish.
 */

export const SITE_NAME = "HybridBonus";
export const SITE_LOCALE = "sv_SE";
export const SITE_INLANGUAGE = "sv-SE";

/**
 * Default site description. Used by buildMeta() when a route does not
 * provide its own. Matches the root description byte-for-byte.
 */
export const SITE_DESCRIPTION =
  "HybridBonus är en oberoende jämförelsetjänst för casinon med svensk licens. Granskningar, Trust Profile och guider – utan reklamkänsla.";

/**
 * Absolute origin of the site (e.g. "https://hybridbonus.se").
 *
 * TODO: set once a project URL or custom domain is assigned. While empty,
 *  - canonical and og:url stay relative ("/foo"), which crawlers resolve
 *    against the request host;
 *  - Organization / WebSite JSON-LD omit the `url` field (an empty or
 *    relative URL is invalid per schema.org / Google's structured data
 *    guidance);
 *  - sitemap.xml emits relative <loc> entries with a matching TODO.
 */
export const BASE_URL = "";

export const DEFAULT_OG_TYPE = "website";

/**
 * Brand-level Organization facts safe to emit publicly.
 *
 * Only the name is set today. Do not invent founder, address, phone,
 * email, sameAs, or logo until verified brand assets exist.
 */
export const ORGANIZATION = {
  name: SITE_NAME,
} as const;

/**
 * TODO favicon: a neutral minimal SVG mark ships at /favicon.svg.
 * Replace with the real brand mark once available.
 */

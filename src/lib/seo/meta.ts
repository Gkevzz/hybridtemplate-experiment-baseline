/**
 * Per-route metadata helpers.
 *
 * `buildMeta` returns the meta entry array used by a route's head().
 * `buildCanonical` returns the canonical link entry for a leaf route.
 * Both keep URLs relative while BASE_URL is empty.
 */

import {
  BASE_URL,
  DEFAULT_OG_TYPE,
  SITE_LOCALE,
  SITE_NAME,
} from "./site";

export interface BuildMetaInput {
  title: string;
  description: string;
  /** Absolute path beginning with "/" (e.g. "/guider/exempel"). */
  path: string;
  ogType?: string;
  /** Absolute image URL or app-absolute path. Optional. */
  image?: string;
  /** When true, emit robots: noindex,follow. */
  noindex?: boolean;
}

/** Resolve an app-absolute path against BASE_URL (relative while empty). */
export function buildOgUrl(path: string): string {
  return `${BASE_URL}${path}`;
}

/** Canonical link entry for a leaf route. */
export function buildCanonical(path: string) {
  return { rel: "canonical", href: `${BASE_URL}${path}` };
}

/**
 * Build the per-route meta entry array. Caller is responsible for
 * adding the canonical link separately via `buildCanonical(path)`.
 */
export function buildMeta(input: BuildMetaInput) {
  const {
    title,
    description,
    path,
    ogType = DEFAULT_OG_TYPE,
    image,
    noindex = false,
  } = input;

  const url = buildOgUrl(path);

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: SITE_LOCALE },
    {
      name: "twitter:card",
      content: image ? "summary_large_image" : "summary",
    },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }

  if (noindex) {
    meta.push({ name: "robots", content: "noindex,follow" });
  }

  return meta;
}

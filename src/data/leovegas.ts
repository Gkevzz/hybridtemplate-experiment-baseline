/**
 * LeoVegas — internal draft review data.
 *
 * The page at /recensioner/leovegas is an unverified internal draft.
 * Every factual field (operator, license, bonus, payments, withdrawal,
 * games, mobile, support, established year, sources, verifiedAt) MUST
 * stay omitted until verified against official sources.
 *
 * This row is intentionally NOT pushed into CASINOS[] so it cannot
 * appear in topplistor, ComparisonTable, RelatedLinks-from-CASINOS,
 * or any future loop over CASINOS.
 */

import type { DraftCasino } from "./casinos";

export const LEOVEGAS: DraftCasino = {
  id: "leovegas",
  slug: "leovegas",
  name: "LeoVegas",
  tagline:
    "Recensionen är under arbete. Innehållet publiceras när redaktionen har verifierat fakta mot officiella källor.",
};

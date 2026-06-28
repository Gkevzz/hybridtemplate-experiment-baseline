# Experiment: Non-Ranking Comparison Module Concept

- **Status:** Experiment-only concept note. Non-production.
- **Date:** 2026-06-28
- **Author:** v0 (design exploration)
- **Scope:** Docs-only. This note creates no code, no routes, and no components.

> This document is an illustrative design exploration. It does **not** amend, replace,
> or redefine E2, E2.1, the component registry, the constitutional docs, the handoff
> docs, or the Visual Bible. It has no governance authority. Any actual implementation
> would require the separately-defined approval process described in the handoff docs
> and is explicitly out of scope here.

---

## 1. Purpose

Explore, in prose and structural mockup only, how a casino comparison module could present
operator information as **neutral, factual decision-support** rather than as a ranked list.
The goal is to align with the project's trust-first positioning ("trust is always more
important than conversion") by removing competitive-ranking signals from the comparison
surface.

This note exists so the design thinking is captured and reviewable before anyone decides
whether — and through which approved process — to pursue code.

## 2. Non-goals (what this concept deliberately avoids)

- No numeric scores, ratings, or "Helhetsvärde"-style aggregate values.
- No rank numbers, position badges, ordinal `#1 / #2` markers, or leaderboards.
- No verdict pills ("Bra", "Bäst", "Vinnare") or any "best/top" superlatives.
- No urgency, scarcity, countdowns, or FOMO mechanics.
- No casino aesthetics (no neon, coins, jackpots, celebratory imagery).
- No invented operator, bonus, or compliance facts of any kind.

## 3. Neutral decision-support structure (concept)

A single comparison surface where **every operator row carries equal visual weight** and the
list is presented as explicitly unsorted. The user filters and reads facts; the page expresses
no preference.

Suggested factual fields (labels are visitor-facing Swedish):

- Licens
- Min. insättning
- Omsättningskrav
- Uttagstid
- Insättningsmetoder
- Support

Structural sketch (illustrative only — not importable code):

```text
[ 18+ · Spela ansvarsfullt — Stödlinjen · Spelpaus.se ]      <- responsible gambling, first

Rubrik:  Faktabaserad översikt av casinon med svensk spellicens
Stance:  "Vi rankar ingenting — du bestämmer." (osorterad lista)

Filter:  [ Alla ] [ Swish ] [ Snabb uttagshantering ] [ Live-support ] [ BankID ]

| Operatör          | Licens          | Min. ins. | Oms.krav | Uttagstid | Support |
|-------------------|-----------------|-----------|----------|-----------|---------|
| Exempeloperatör A | Spelinspektionen| (pending) | (pending)| (pending) | (pending)|
| Exempeloperatör B | Spelinspektionen| (pending) | (pending)| (pending) | (pending)|
| Exempeloperatör C | Spelinspektionen| (pending) | (pending)| (pending) | (pending)|

Disclaimer: "Kontrollera alltid operatörens webbplats — villkor kan ändras."
[ 18+ · Spel kan vara beroendeframkallande — Spelpaus.se / Stödlinjen ]  <- persistent RG
```

## 4. Placeholder values only

No operator-specific facts are asserted. The concept uses only neutral placeholders:

- Unknown fact value: `Verifiering tillkommer`
- License authority: `Spelinspektionslicens` / `Spelinspektionen`
- Persistent caution: `Kontrollera alltid operatörens webbplats — villkor kan ändras.`
- Stance line: `Vi rankar ingenting — du bestämmer.`

## 5. Responsible-gambling placement

Responsible-gambling messaging appears **before any commercial CTA** and remains present
throughout the page:

- A calm `18+` strip is the first element on the surface (above the hero).
- A second persistent responsible-gambling band sits below the comparison, before the footer.
- Tone is supportive, not alarming or legalistic, with references to Stödlinjen and Spelpaus.se.

## 6. Mobile readability notes

- Mobile-first; the page itself must not scroll horizontally.
- If a wide table is used, only the table scrolls internally — never the page.
- On narrow widths, each operator row collapses into clearly divided, labeled key/value lines
  with strong-enough contrast and a comfortable value text size.
- Filters and any links stack to full width rather than shrinking side-by-side.

## 7. Swedish copy deck (illustrative)

- Eyebrow: `Redaktionell jämförelse`
- Rubrik: `Faktabaserad översikt av casinon med svensk spellicens`
- Ingress: `Vi sammanställer verifierbara uppgifter — licens, villkor och hanteringstider — så att du kan jämföra på egna premisser. Inga betyg. Inga placeringar.`
- Stance: `Vi rankar ingenting — du bestämmer. Listan nedan är osorterad och presenterar enbart fakta.`
- Metodlänk: `Så här granskar vi`
- Radlänkar: `Läs genomgång` · `Visa villkor`
- Disclaimer: `Kontrollera alltid operatörens webbplats — villkor kan ändras utan att den här sidan hunnit uppdateras.`

## 8. Relationship to current surfaces (descriptive only)

The current comparison surface and related list item present ranking/score/verdict signals
(an aggregate value column, an ordinal index badge, and a verdict pill). This concept
describes a *different* presentation that omits those signals.

This note does not propose editing those files, does not define a new contracted component,
and does not assert any change to the registry or governance docs. Whether a non-ranking
presentation is ever adopted — and through which approved path — is intentionally left open
and out of scope for this experiment.

## 9. Out of scope here

- Any code, component, or route.
- Any edit under `src/`, including `routeTree.gen.ts`.
- Any edit to config, package files, lockfiles, global styles, data files, SEO files,
  `docs/constitution`, `docs/handoff`, public assets, `README`, or `AGENTS.md`.
- Opening a pull request or rewriting git history.

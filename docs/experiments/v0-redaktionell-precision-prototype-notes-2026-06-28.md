# v0 "Redaktionell Precision" prototype — experiment notes (2026-06-28)

> Docs-only experiment note. No production code, routes, components, tokens, or
> config were created or changed by this note. The v0 prototype referenced here
> is an external standalone HTML mockup used for reference only — it does **not**
> exist in this repository and must not be assumed to.

## 1. Purpose

This experiment used v0 to produce a throwaway visual prototype of the
HybridBonus comparison landing page in order to pressure-test the
"Redaktionell Precision" direction (trust-first, editorial decision-support
rather than conversion-first casino marketing). The goal was to surface concrete
layout and tone improvements we could later evaluate as small, isolated patches
against production — not to deliver shippable UI.

## 2. What the v0 prototype improved

- **Removed rankings, scores, and verdicts.** The `#1`/`#2` rank badges, 5-star
  rating rows, and "Bra"-style verdict pills were eliminated. The list is
  presented as explicitly unsorted, with a stated "we rank nothing" position.
- **Moved responsible gambling first.** A calm 18+ responsible-gambling strip
  became the very first element on the page (above the hero), with a second
  persistent responsible-gambling band before the footer. Tone is supportive,
  not alarmist or legalistic.
- **Replaced the casino-card layout with an editorial data-table structure.**
  Operator information is shown as rule-based rows with a shared column header
  and equal visual weight per operator — no "winner" card emphasis, no
  jackpot/casino-card styling. On narrow screens rows collapse into clearly
  labeled key/value lines.
- **Used a restrained amber signal color.** Green "success" status dots were
  removed in favor of a single restrained amber signal for licence/verification
  markers, consistent with the warm-neutral editorial palette and the single
  calm-blue link accent.
- **Removed invented dates.** All concrete "last reviewed" / month-year values
  were replaced with neutral placeholders ("verifiering tillkommer").
- **Replaced the commercial CTA button with calm text links.** The
  "to operator website" button was replaced with low-key editorial links
  ("Läs genomgång", "Visa villkor").

## 3. Remaining implementation cautions

- **Placeholder operators must not imply verified licence facts.** Example
  operators ("Exempeloperatör A/B/C") and any "Spelinspektionen" labeling in a
  prototype are illustrative only. Production must never present an unverified
  operator as licensed.
- **No hardcoded phone numbers unless verified.** The prototype contained a
  sample support-line number; do not ship any phone number, helpline, or contact
  detail that has not been independently verified.
- **No outbound commercial links before responsible gambling.** Responsible
  gambling must appear before any commercial/outbound operator link in document
  and visual order.
- **No new global design tokens yet.** The prototype introduced ad-hoc color and
  radius values (e.g. an amber signal token, reduced radius). These must not be
  promoted into the production token system as part of this experiment.

## 4. Recommended safe implementation path

1. **First**, remove rank/star/verdict signals from the production comparison
   cards only — the smallest, highest-value, lowest-risk change.
2. **Then**, add a responsible-gambling band above the commercial sections
   (and confirm it precedes any outbound operator links).
3. **Then**, evaluate the table-like comparison module as a separate, narrow
   patch, reviewed on its own rather than bundled with the above.

Each step should be a discrete, independently reviewable change.

## 5. Required post-change audit checklist

- [ ] Run `git status --short`.
- [ ] Run `git diff --name-only`.
- [ ] Confirm no forbidden paths changed (`src/`, `docs/constitution/*`,
      `docs/handoff/*`, `public/*`, `package.json`, `bun.lock`, `bunfig.toml`,
      `vite.config.ts`, `tsconfig.json`, `eslint.config.js`, `components.json`,
      `src/routeTree.gen.ts`).
- [ ] Confirm no new routes or components were created by the experiment.
- [ ] Confirm no packages were installed.
- [ ] Confirm visitor-facing copy is Swedish unless explicitly approved otherwise.
- [ ] Confirm no invented casino/compliance facts (licences, dates, numbers).
- [ ] Confirm no rankings, scores, verdicts, or winner framing reintroduced.
- [ ] Confirm responsible gambling precedes any commercial/outbound links.
- [ ] Confirm no hype/conversion-first language or imagery.

# AI Agent Instructions — HybridBonus

Read this first if you are an AI coding tool (Cursor, Claude Code, Codex, Aider, etc.) opening this repo outside Lovable.

## What this project is

HybridBonus is a Swedish editorial decision platform for licensed online casinos. It is not an affiliate landing page, not a "Top 10" SEO site, and not a bonus portal. Trust is always more important than conversion.

## Stack pointers

- TanStack Start v1 (React 19) — file-based routing under `src/routes/`.
- Vite 7 build, Tailwind v4 styling, shadcn/ui primitives under `src/components/ui/`.
- Bun for install/run: `bun install`, `bun run dev` (port 8080).
- `src/routeTree.gen.ts` is **auto-generated** by the TanStack Router plugin — do not edit it.

## Reading order

Before changing anything substantive, read the constitution snapshots in this order:

1. `docs/constitution/00-operating-system.md` — highest priority. Overrides everything below.
2. `docs/constitution/10-editorial-constitution.md`
3. `docs/constitution/20-e0-ux-principles.md`
4. `docs/constitution/21-e1-design-language.md`
5. `docs/constitution/22-e2-component-library.md`
6. `docs/constitution/23-e2.1-batch-*-contracts.md` — the 22 contracted editorial components.
7. `docs/constitution/24-e3-implementation-roadmap.md` — phases and gates.
8. `docs/constitution/25-e3-status.md` — operational progress.
9. `docs/constitution/30-editorial-review-framework.md` — 17-section review methodology.
10. `docs/constitution/90-constitutional-architecture.md` — governance map.

Governance priority: **Operating System > Engineering > Editorial > Design.**

## Non-negotiable rules (surfaced inline)

- **Swedish for everything visitor-facing.** Code, comments, types, variables: English.
- **Trust > Conversion.** Always show both strengths and weaknesses.
- **Never invent** casinos, ratings, sources, license numbers, payment methods, verification dates, or operator facts. Use `"Verifiering tillkommer"` placeholders.
- **No total scores, no rankings, no "best overall", no leaderboards, no winner badges.**
- **No urgency, FOMO, countdowns, or scarcity styling.**
- **No casino aesthetics:** no slots, dice, jackpots, neon, gold coins, celebratory animations on commercial actions.
- **Responsible-gambling block must precede the first commercial CTA on every page that has one.**
- **Mobile-first.** No horizontal page scroll. Tables scroll internally.

## Files to leave alone

- `.lovable/` — Lovable workspace state.
- `AGENTS.md` — template-safe git history guidance for Lovable-originated snapshots; don't force-push or rewrite published history.
- `src/routeTree.gen.ts` — generated.
- Anything under `docs/constitution/` — read-only template snapshots; see `implementation-boundaries.md`.

## When in doubt

Default to the smallest correct change that follows the existing patterns. Prefer extending an existing component over creating a new one. If a request would require creating a new editorial component, stop — that needs a deliberate E2 governance amendment first; if this repo is explicitly connected to Lovable, make that amendment in Lovable memory as configured.

See `implementation-boundaries.md` for the explicit allow/forbid list.

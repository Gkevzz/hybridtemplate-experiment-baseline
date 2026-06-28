# Constitution Snapshots

Repo-local template snapshots of HybridBonus constitutional documents.

**Source-project origin:** Exported from Lovable memory at `mem://...`.
**Template status:** These checked-in files are repo-local snapshots and are not actively synced with Lovable unless explicitly configured.
**Template usage:** When working outside Lovable, treat these files as the best available local reference. Do not make governance-changing edits casually.
**Snapshot date:** 2026-06-28.

These snapshots exist so that external AI coding tools (Cursor, Claude Code, Codex, Aider, etc.) and human contributors working outside Lovable can read the constitution without access to `mem://`.

## Reading order

| # | File | Layer |
|---|---|---|
| 00 | `00-operating-system.md` | Operating System (highest priority) |
| 10 | `10-editorial-constitution.md` | Editorial Constitution |
| 20 | `20-e0-ux-principles.md` | E0 — Editorial UX Principles |
| 21 | `21-e1-design-language.md` | E1 — Editorial Design Language |
| 22 | `22-e2-component-library.md` | E2 — Editorial Component Library |
| 23 | `23-e2.1-batch-1-contracts.md` | E2.1 — Trust / Disclosure / Responsibility (10) |
| 23 | `23-e2.1-batch-2-contracts.md` | E2.1 — Structural / Page Architecture (5) |
| 23 | `23-e2.1-batch-3-contracts.md` | E2.1 — Bonus Explanation (2) |
| 23 | `23-e2.1-batch-4-5-contracts.md` | E2.1 — Decision Support + Comparison & Navigation (5) |
| 24 | `24-e3-implementation-roadmap.md` | E3 — Editorial Implementation Roadmap |
| 25 | `25-e3-status.md` | E3 — Operational Status Register |
| 30 | `30-editorial-review-framework.md` | Editorial Review Framework (methodology) |
| 31 | `31-editorial-structures.md` | Content structures (recension/guide/jämförelse) |
| 90 | `90-constitutional-architecture.md` | Constitutional Architecture (governance map) |

## Governance priority

Operating System > Engineering > Editorial > Design.

## Not included in this snapshot set

The following entries are referenced in the Lovable Constitutional Index but do not exist as standalone `mem://` documents at the snapshot date, so no snapshot file was created:

- `mem://engineering/principles`
- `mem://engineering/url-structure`
- `mem://engineering/seo`
- `mem://engineering/accessibility-performance`
- `mem://engineering/components-data`
- `mem://design/system`

Their content currently lives only as Core rules inside `mem://index.md` and inline within the engineering and design surfaces of other documents. Treat the Core rules in this directory's parent documentation (`docs/handoff/`) as the working summary until the canonical files exist.

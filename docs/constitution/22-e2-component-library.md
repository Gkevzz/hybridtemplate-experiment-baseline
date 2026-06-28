> Source-project origin: Exported from Lovable memory at `mem://editorial/e2-component-library`.
> Template status: This checked-in file is a repo-local snapshot and is not actively synced with Lovable unless explicitly configured.
> Template usage: When working outside Lovable, treat this file as the best available local reference. Do not make governance-changing edits casually.
> Snapshot date: 2026-06-28.

---

# HybridBonus — E2: Editorial Component Library

**Status:** Approved — Immutable except by formal constitutional amendment
**Parent:** Editorial Constitution → E0 → E1
**Children:** E3 — Editorial Implementation Roadmap

---

## 1. Purpose

E2 is the constitutional definition of HybridBonus's reusable editorial component system. It translates the principles of E0 and the visual language of E1 into a permanent library of reusable editorial building blocks.

E2 defines, for every editorial component:
- what it is,
- why it exists,
- what it communicates,
- when it is used,
- how it relates to other components,
- and what it must never do.

E2 does not define implementation, code, CSS, frameworks, design tokens, typography, spacing, color, animation, or engineering architecture. E2 defines component meaning and governance only; concrete visual and technical specifications belong to downstream visual or engineering systems.

E2 is the stable layer between the editorial philosophy of E0, the visual language of E1, and the engineering work of E3. It exists so that HybridBonus can grow from a handful of pages to hundreds of reviews and comparisons without losing editorial coherence.

---

## 2. Relationship to Other Constitutions

Per the locked Constitutional Architecture:

```
Operating System
  ↓ Editorial Constitution
    ↓ E0 — Editorial UX Principles
      ↓ E1 — Editorial Design Language
        ↓ E2 — Editorial Component Library   ← this document
          ↓ E3 — Editorial Implementation Roadmap
            ↓ HybridBonus Visual Bible (Future)
```

**Dependency rules specific to E2:**
1. E2 inherits all philosophy from E0 and all visual semantics from E1. It restates neither.
2. E2 may reference E0 and E1 by name and role only; it never redefines them.
3. E2 governs what components exist and what they mean. It does not govern when they are built (E3) or how they are coded (engineering).
4. Lower layers (E3, Visual Bible, engineering) may not introduce editorial components outside the families and contracts defined in E2. New components require an E2 amendment.
5. Silence is not permission: a component that has no E2 entry has no editorial standing.

---

## 3. Component Philosophy

1. **Components express editorial meaning.** Every component exists to communicate something a reader needs in order to decide, understand, or trust.
2. **Components solve recurring editorial problems.** A new component is justified only by a recurring reader problem that no existing component can solve.
3. **Components are semantic, not decorative.** Visual distinction without editorial meaning is forbidden.
4. **Components inherit meaning from E0 and E1.** They do not invent philosophy, hierarchy, or visual semantics.
5. **Components exist to reduce editorial inconsistency at scale.** A library of well-defined components is what makes ten reviews and a thousand reviews equally trustworthy.

---

## 4. Component Design Principles

1. **Single editorial purpose.** Each component owns exactly one editorial job. Two purposes = two components.
2. **Lowest responsible component.** A reader problem is solved by the smallest component that fully solves it; do not promote into a heavier component for prestige.
3. **No duplicated meaning.** Two components may not communicate the same editorial signal. If they appear to, one is canonical and the other is removed.
4. **Composition over invention.** New needs are first met by composing existing components; a new component is the last resort.
5. **Stability over novelty.** Components are added rarely and removed reluctantly. The library is an asset, not a sketchpad.

---

## 5. Component Families

Components are organized into permanent families, not a flat catalog. The final taxonomy — nine families:

1. **Identity** — who or what is being described.
2. **Trust** — verifiable trust signals and their attribution.
3. **Educational** — explains a concept the reader must understand to decide.
4. **Comparison** — supports side-by-side evaluation and trade-off reasoning.
5. **Decision Support** — helps the reader convert understanding into a choice.
6. **Disclosure** — surfaces what the reader is entitled to know (methodology, affiliation, verification recency, conflicts).
7. **Navigation** — moves the reader through the editorial system.
8. **Structural** — organizes the page itself where the structure carries editorial meaning.
9. **Feedback & Responsibility** — responsible-gambling, warnings, outdated-content notices, reader-safety blocks.

**Excluded families:**
- **Commercial** — HybridBonus has no commercial components; calls to action are editorial Decision Support. Naming a Commercial family would invite engagement-optimized components, which E0 forbids.
- **Utility** — "utility" is an engineering concept, not an editorial one. A component without editorial meaning has no place in E2.

---

## 6. Component Catalog Registry

The registry is a permanent, governance-only canonical list. Its schema is:

**Family | Component Name | One-line purpose | Status**

Status values: Approved / Draft / Planned / Deprecated.

The registry records constitutional standing only. Meaning lives in Component Contracts; visual treatment lives in E1; implementation lives in engineering memory.

**Architectural rules of the registry:**
1. Every component recognized by the constitutional system appears in the registry; nothing recognized by E2 lives outside it.
2. Every registry entry is governed by a Component Contract (§7). No entry without a contract.
3. Every entry belongs to exactly one family (§5).
4. Status transitions are by amendment only; entries are never silently added, renamed, or removed.
5. The registry records constitutional standing only — not visual treatment (E1) and not implementation (engineering).

Initial registry population occurs only during E2 approval or later amendment. Components present in the product without E2 registry standing have no constitutional standing until admitted by E2.

---

## 7. Component Contracts

Every component is defined through a single canonical contract. No ad hoc descriptions. The contract template — eight fields, in this fixed order:

1. **Purpose** — the one editorial job this component owns.
2. **Editorial meaning** — what the reader is meant to understand when they see it.
3. **Reader problem solved** — the recurring decision/comprehension/trust problem it answers.
4. **Usage conditions** — when this component must, may, or must not appear.
5. **Required relationships** — components it must accompany or be accompanied by.
6. **Supported states** — the subset of editorial states the component supports, and the editorial condition that triggers each. E1 owns the vocabulary of states; E2 declares only which states a component supports.
7. **Forbidden uses** — explicit misuses, including any decorative or engagement-driven use.
8. **Related components** — siblings in the same family and cross-family pairings.

The contract template is itself constitutional. Components may not add, remove, or reorder fields; if a component needs to say something the template cannot express, the template is amended — not the component.

---

## 8. Component Composition Rules

Permanent rules governing how components combine:

1. **Containment.** A component declares in its contract which components it may contain; nothing else may be nested inside it.
2. **Ordering.** Where one component must precede another, the requirement is declared in both contracts.
3. **Prohibited combinations.** Combinations that produce misleading editorial signals are forbidden by explicit declaration in the relevant contracts.
4. **Hierarchy.** When multiple components could carry the same signal, the higher-authority component governs; the lower one defers or is omitted.
5. **Trust-signal interaction.** Any component that neighbours a Trust-family component inherits a higher standard of factual accuracy; decorative neighbours of Trust components are forbidden.

---

## 9. Cross-Component Consistency & Scalability

Consistency and scalability are two sides of the same rule: the system stays coherent as it grows only if components stay reusable.

1. **Reuse before invention.** New editorial surfaces must be assembled from existing components first.
2. **One meaning, one component.** When two surfaces need the same editorial signal, they use the same component — even if the visual context differs.
3. **Family discipline.** Components stay inside their family's purpose; cross-family responsibilities require an explicit relationship in both contracts.
4. **Growth is by amendment, not accretion.** New components enter the library through the amendment process in §11, not by appearing in a new page.

---

## 10. Component Anti-Patterns

A permanent blacklist. The following component types are forbidden:

1. **Decorative components** — purpose is visual interest with no editorial meaning.
2. **Duplicated purpose** — two components solving the same reader problem.
3. **One-off components** — built for a single page or surface.
4. **Meaning duplication** — a component that re-expresses what an adjacent component already communicates.
5. **Engagement-optimized components** — designed to increase clicks, time-on-page, or conversion rather than comprehension or trust.
6. **Trust mimicry** — components that adopt the visual language of Trust components without inheriting their evidentiary requirements.
7. **Hidden-trade-off components** — components that present a recommendation without exposing the trade-off behind it.
8. **Total-score components** — any component implying a single aggregate score; forbidden by the Operating System.

---

## 11. Future Compatibility & Amendment Rules

How E2 evolves without encouraging proliferation.

1. New components are admitted only by amendment, only into an existing family, and only when no existing component or composition can solve the reader problem.
2. New families require a constitutional amendment justified by a recurring editorial need that no existing family can host.
3. Deprecation is explicit: a component moves to *Deprecated* in the registry with the amendment that replaces or retires it; it is never silently removed.
4. The contract template (§7) may be amended only to add expressive power required by an admitted component. Fields are never added speculatively.
5. Every amendment must state which higher document, if any, triggered it, per the amendment rules of the Constitutional Architecture.
6. E2 itself does not legislate timing — when components are built is E3's responsibility.

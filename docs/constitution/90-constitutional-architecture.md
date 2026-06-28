> Snapshot originally exported from Lovable memory: `mem://constitutional/architecture`.
> This template copy is not actively synced with Lovable unless explicitly configured.
> Treat this checked-in file as the best available repo-local reference for this template.
> Snapshot date: 2026-06-28.

---

# HybridBonus — Constitutional Architecture

Canonical architectural blueprint of the HybridBonus constitutional system. Descriptive, not authoritative. References other constitutions by name and role only — never restates their content.

---

## 1. Purpose

The Constitutional Architecture is a permanent architectural map of the constitutional system. It describes *how* the constitutions relate, govern, and evolve — never *what* they say.

**In scope:** hierarchy of constitutional documents, ownership boundaries between layers, authority and dependency flow, amendment and governance rules, status of each layer, reading order for new contributors.

**Out of scope:** editorial philosophy (E0), visual language (E1), components (E2), roadmap (E3), Operating System rules, design tokens, tone, copy, code conventions, or any first-order content.

This document references other constitutions by name and role only. It never restates their content. If a sentence here could be moved into OS / Editorial Constitution / E0 / E1 / E2 / E3 / Visual Bible without loss, it belongs there, not here.

---

## 2. Constitutional Hierarchy Diagram

```
Operating System
        ↓
Editorial Constitution
        ↓
E0 — Editorial UX Principles
        ↓
E1 — Editorial Design Language
        ↓
E2 — Editorial Component Library
   (E2.1 — Component Registry & Contracts: registry layer under E2)
        ↓
E3 — Editorial Implementation Roadmap
        ↓
HybridBonus Visual Bible
```

The Editorial Constitution is the single editorial-branch parent. It sits directly under the Operating System and directly above E0. E0 is not the top of the editorial branch; it is the first principle-level layer beneath the Editorial Constitution.

Additional constitutional branches (e.g. engineering, brand, product) may be added to this architecture only after they are formally established and approved as constitutions. Topic areas, working notes, and implicit conventions do not qualify.

---

## 3. Constitutional Design Principles

1. **Separation of responsibilities.** Each constitutional layer owns a distinct concern. Overlap is a defect, not a feature.
2. **Single source of truth.** Every rule lives in exactly one constitution. If a rule appears in two places, one is canonical and the other is a defect to be removed.
3. **Upward stability, downward implementation.** Higher layers change rarely and govern broadly; lower layers change more often and implement concretely.
4. **Lowest responsible constitutional layer.** A rule belongs in the lowest layer that can fully govern it without leaking into implementation. Rules are not promoted upward for prestige, nor pushed downward to avoid amendment.
5. **No duplicated governance.** No two constitutions may legislate the same decision. When jurisdictions appear to collide, the higher layer's wording governs and the lower layer is amended to align.

---

## 4. Responsibility Matrix

| Layer | Owns | Must never own |
|---|---|---|
| Operating System | Highest-priority rules: decision priority, language convention, source of truth, change philosophy, quality gates, performance targets | Editorial philosophy, visual language, component definitions, roadmap |
| Editorial Constitution | The mandate, scope, and governance of the editorial branch; what editorial is for and how its sub-constitutions relate | Concrete UX principles, visual tokens, component specs, implementation steps |
| E0 — Editorial UX Principles | Master editorial philosophy: how HybridBonus communicates, reduces cognitive load, supports decisions, earns trust | Visual tokens, component specs, code, roadmap |
| E1 — Editorial Design Language | Visual language: hierarchy, semantics, trust visualization, rhythm, density, patterns, anti-patterns | UX philosophy, component implementation, roadmap |
| E2 — Editorial Component Library | Component-level specifications expressing E0 + E1 | UX philosophy, visual language redefinition, roadmap |
| E3 — Editorial Implementation Roadmap | Sequencing, milestones, rollout of editorial work | New principles, new visual rules, new components |
| HybridBonus Visual Bible (Future) | End-state visual reference assembled from upstream layers | Any new governance |

---

## 5. Authority & Dependency Rules

1. Authority flows downward.
2. Dependency flows downward.
3. Examples flow downward.
4. Nothing below may redefine anything above.
5. Silence is not permission. A higher amendment overrides any lower rule it later contradicts.

---

## 6. Amendment & Governance Rules

1. Approved constitutions are immutable except through formal amendment.
2. Higher constitutions may require cascading amendments to lower constitutions.
3. Lower constitutions may never redefine higher constitutions.
4. The Constitutional Architecture document is **descriptive**, not authoritative over the constitutions it maps.
5. Every amendment must state which higher document, if any, triggered it.
6. The Architecture itself may be revised only to reflect (a) a newly approved or planned constitution, (b) a change in hierarchy, or (c) a clarification of governance — never to introduce new constitutional content.

---

## 7. Status Registry

This table records constitutional governance state only. For descriptions and links, see the Constitutional Index.

| Layer | Document | Status | Immutable? |
|---|---|---|---|
| OS | Operating System | Approved | Immutable |
| Editorial | Editorial Constitution | Approved | Immutable |
| E0 | Editorial UX Principles | Approved | Immutable |
| E1 | Editorial Design Language | Approved | Immutable |
| E2 | Editorial Component Library | Approved | Immutable |
| E3 | Editorial Implementation Roadmap | Approved | Immutable except by amendment |
| Visual Bible | HybridBonus Visual Bible | Future | n/a |

---

## 8. Reading Order for New Contributors

Each constitutional layer assumes understanding of every layer above it. The system must therefore be read from highest authority to lowest, in the order listed. Skipping upward layers produces incorrect interpretation of lower ones.

1. Operating System
2. Editorial Constitution
3. E0 — Editorial UX Principles
4. E1 — Editorial Design Language
5. E2 — Editorial Component Library
6. E3 — Editorial Implementation Roadmap
7. HybridBonus Visual Bible, once available

---

## 9. Relationship to the Constitutional Index

- **Constitutional Index** = inventory and navigation.
- **Constitutional Architecture** = blueprint and governance map.

If a change affects only what exists, update the Index. If a change affects how the system is structured or governed, update the Architecture.

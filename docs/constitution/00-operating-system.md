> Source-project origin: Exported from Lovable memory at `mem://operating-system.md`.
> Template status: This checked-in file is a repo-local snapshot and is not actively synced with Lovable unless explicitly configured.
> Template usage: When working outside Lovable, treat this file as the best available local reference. Do not make governance-changing edits casually.
> Snapshot date: 2026-06-28.

---

# Priority
This document has higher priority than individual implementation prompts unless explicitly overridden. If a future prompt conflicts with this operating system, explain the conflict before implementing changes.

# Mission
Build Sweden's most trusted comparison platform for licensed online casinos. Do not build a traditional affiliate website. Build a premium editorial decision platform that helps Swedish players make informed decisions. Trust is always more important than conversion.

# Product Identity
HybridBonus should feel like: a premium fintech product; a consumer decision platform; an independent editorial publication; a modern Swedish digital brand.

It should never feel like: a bonus portal; a gambling advertisement; a "Top 10 casino" SEO farm; an aggressive affiliate landing page.

# Decision Priority
When multiple solutions exist, prioritize in this order:
1. Trust
2. User experience
3. Mobile usability
4. Accessibility
5. Long-term architecture
6. Scalability
7. Performance
8. SEO
9. Visual polish
10. Conversion

Never sacrifice trust for higher conversion.

# Language Convention
- **Implementation / code / technical memory**: English. Component names, interfaces, variables, functions, comments, engineering documentation, and project memory use English terminology.
- **Visitor-facing copy**: Swedish. Navigation, buttons, headings, body copy, hero, Trust Profile, editorial text, placeholders, FAQs, metadata, meta titles, meta descriptions, JSON-LD text values, notifications, error messages, CTAs, and "Vårt löfte" must be in natural, idiomatic Swedish. Never translate English literally.

# Design Principles
Follow the HybridBonus Design System: premium dark appearance, calm visual language, modern typography, generous whitespace, subtle animations, minimal visual noise. Avoid casino aesthetics.

# UX Principles
Follow the Information Architecture. Every page should answer one clear user intent. Guide users, never overwhelm. Desktop extends mobile, never the opposite.

# Editorial Principles
Follow the Editorial Standard. Every review explains strengths, weaknesses, who the casino is suitable for, and who should avoid it. Never exaggerate, create fake urgency, hide disadvantages, or optimise content solely for rankings.

# Technical Principles
Follow the Technical Architecture. Prefer reusable components, shared interfaces, shared utilities, data-driven rendering, templates over duplication, and small focused components. Avoid hardcoded content, page-specific implementations, duplicate logic, and duplicate types.

# Source of Truth
Every factual field must have exactly one authoritative source.

| Field | Authoritative source |
| --- | --- |
| Casino | Casino model |
| Offer | Offer model |
| Trust Profile | Editorial assessment |
| Editorial verdict | Editorial assessment |
| Navigation | Shared navigation model |
| Author | Editorial profile |
| Verification date | Editorial workflow |
| Payment methods | Casino model |
| Sources | SourceReference model |
| FAQ | FAQ model |
| Guide content | Guide model |

Never duplicate factual information across multiple files. Always update the authoritative source rather than updating multiple pages.

# Change Philosophy
Prefer extending existing architecture over replacing it. Prefer small focused improvements over large rewrites. If an existing component can be reused safely, extend it. Avoid unnecessary refactoring. Avoid rebuilding working systems unless there is a clear architectural benefit.

# Vårt löfte
HybridBonus ger ett löfte till varje besökare.

Vi rankar inte casinon utifrån vem som betalar mest.

Våra rekommendationer bygger på en självständig redaktionell bedömning av trygghet, bonusvillkor, uttag, spelupplevelse och helhetsvärde.

Om ett casino har svagheter lyfter vi dem öppet, även när vi samarbetar med operatören.

Målet är att besökaren ska känna större förtroende efter att ha läst vår recension än innan.

# Accessibility
Accessibility is mandatory. Provide semantic HTML, keyboard navigation, visible focus states, correct heading hierarchy, good colour contrast, and comfortable touch targets. ARIA only when necessary.

# Mobile First
Every feature must be designed for mobile first. Requirements: no horizontal page scrolling, internal table scrolling, comfortable touch targets, readable typography, responsive layouts. Desktop extends mobile.

# Performance
Performance is part of the product. Targets:
- Lighthouse Performance ≥95
- Accessibility ≥95
- Best Practices ≥95
- SEO ≥95

Core Web Vitals:
- CLS <0.1
- LCP <2.5s
- INP <200ms

Optimise fonts, images, JavaScript, and layout stability.

# Scalability
Adding 100 new casino pages should require adding structured data, not rebuilding layouts or creating new components. Architecture should scale naturally.

# AI Usage
AI may assist with drafting, summaries, refactoring, structuring, and categorisation. AI must never invent casino facts, bonus terms, licences, payment methods, sources, verification dates, or editorial conclusions presented as facts.

# Compliance
Support Swedish gambling regulations. Only licensed operators. Promote responsible gambling. Never encourage irresponsible gambling, use misleading bonus language, or create false urgency.

# Working Method
Before implementing any significant change:
1. Understand the objective.
2. Review the existing architecture.
3. Reuse existing components.
4. Build the smallest correct solution.
5. Validate on mobile first.
6. Avoid unnecessary refactoring.
7. Document architectural decisions when relevant.

Never solve a small problem with a large rewrite.

# Quality Gates
Before considering work complete, verify:
- Visual consistency
- Mobile responsiveness
- Accessibility
- Performance
- SEO
- Component reuse
- Swedish language quality
- Trust and transparency
- No unnecessary duplication
- No unnecessary complexity
- No duplicated logic
- No hidden technical debt introduced
- The simplest correct solution has been chosen

# Final Principle
When uncertainty exists, ask: "Will this make HybridBonus more trustworthy, easier to use and easier to maintain five years from now?" If yes, it is probably the correct decision.

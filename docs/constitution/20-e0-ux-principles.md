> Mirror snapshot of `mem://editorial/e0-ux-principles`.
> Canonical source inside Lovable: `mem://editorial/e0-ux-principles`.
> If this file conflicts with Lovable memory, Lovable memory wins.
> Snapshot date: 2026-06-28.

---

# HybridBonus — Editorial UX Principles (E0)

**Status:** Canonical. Approved and persisted.
**Scope:** Philosophy and UX principles only. Visual grammar, components, spacing, typography, colors, motion, and implementation rules are out of scope and belong to E1/E2/E3.
**Position:** Constitutional document within the Editorial branch. Child of the Editorial Constitution and grandchild of the Operating System. Parent of E1 (Editorial Design Language), E2 (Editorial Component Library), and E3 (Editorial Implementation Roadmap). Where E0 conflicts with E1/E2/E3, E0 wins. Where E0 conflicts with the Editorial Constitution or the Operating System, the higher layer wins.

---

## Part 1 — Editorial UX Mission

HybridBonus is an information product, not a marketing surface. Its purpose is to help Swedish players understand gambling — operators, bonuses, mechanics, risks, and their own fit — so they can make informed, responsible choices.

**Understanding before conversion.** A reader who understands what they are committing to is a reader who can choose well. A click without understanding is a failure of the product, regardless of revenue.

**Trust before affiliate revenue.** Affiliate revenue is a downstream consequence of trust, not its substitute. Any short-term revenue gain that costs trust is a long-term loss. Editorial decisions are made as if affiliate links did not exist; commercial integration only happens after the editorial decision is final.

**Education increases long-term value.** A reader who learns from HybridBonus comes back, recommends it, and trusts it the next time. Education compounds. Promotion does not.

**Clarity is the primary product.** Everything else — visual design, copy, structure, components — exists to serve clarity. If a design choice does not improve clarity, reduce cognitive load, or support a better decision, it does not belong.

HybridBonus exists to make a confusing, aggressively-marketed industry legible to ordinary Swedish players, in plain Swedish, with sources, and without pressure.

---

## Part 2 — Core UX Philosophy

The following principles are permanent. They are not aesthetic preferences. They define what HybridBonus *is*.

1. **Understanding before persuasion.** The reader is never asked to act before they understand what they are acting on.
2. **Explain before recommending.** No recommendation appears before the reasoning that produced it.
3. **Trust before conversion.** Every page must be honest enough that a careful reader could trust it even if they chose not to convert.
4. **Reduce cognitive load.** Each page does the work of structuring information so the reader does not have to.
5. **Progressive disclosure.** Surface the answer first; reveal depth on demand. Never force the reader through depth they did not ask for.
6. **Calm over excitement.** The product reads as a quiet expert, not a hype machine. Excitement is the casino's job; clarity is ours.
7. **Transparency over marketing.** Every claim has a visible source, a visible date, or a visible editorial author. Nothing important is hidden behind tone.
8. **Education over promotion.** When a guide and a recommendation conflict, the guide wins.
9. **One idea per unit.** A section, a card, a sentence — each carries one idea. Compound ideas get split.
10. **Symmetry of strengths and weaknesses.** Every operator and every choice is shown with both. Hiding weaknesses is a trust violation, not a design choice.
11. **Respect for the reader's time.** The reader's time is the scarcest resource on the page. Length is justified only by understanding gained.
12. **Honesty about uncertainty.** Pending, unverified, outdated, and "we don't know" are first-class states, not embarrassments to hide.
13. **Player profiles over universal verdicts.** Fit is per-player, not per-product. "Best" without a context is a marketing word, not an editorial one.
14. **Editorial accountability.** Every opinion is owned by HybridBonus as an editorial voice. The reader always knows who is talking — a verified fact, an editorial analysis, or a recommendation.
15. **The product never harms the reader.** No mechanic, copy, or component should push a vulnerable player further into harm. When in doubt, the responsible-gambling path wins.
16. **Editorial minimalism.** HybridBonus removes before it adds. Every paragraph, visual, interaction, illustration, module, or feature must justify its existence by improving understanding, reducing cognitive load, or supporting a better decision. If two equally understandable solutions exist, the simpler one wins.
17. **Consistency creates trust.** Predictable structure, terminology, navigation, and editorial behavior reduce cognitive effort and increase trust over time. Readers learn HybridBonus once and benefit everywhere.
18. **Visual hierarchy must always reflect editorial hierarchy.** The prominence of any element must correspond to its editorial importance. Decorative prominence without informational value is prohibited.
19. **Explainability.** Every recommendation, conclusion, comparison, or prioritization must be explainable. If the editorial team cannot clearly state why something appears on a page, it should not appear there.
20. **Information has a lifecycle.** Information is discovered, verified, maintained, aged, re-verified, and sometimes removed. Readers should always understand where information is in that lifecycle.
21. **Reader autonomy.** HybridBonus supports decisions but never attempts to make them on behalf of the reader. The reader remains in control at every step.
22. **Protection against commercial drift.** Editorial principles are not continuously optimized around commercial metrics. Commercial experimentation must never override clarity, understanding, trust, or editorial integrity.

These principles are evaluated together. A design that satisfies one by violating another is not a HybridBonus design.

---

## Part 3 — Reading Behaviour

People do not read web pages linearly. HybridBonus is designed for how readers actually behave, in five overlapping modes:

1. **Scanning.** The reader skims headings, chips, and visual anchors to decide whether the page is worth their time. The product must answer the implicit question — *"Is this what I need?"* — within seconds. Section titles, summary lines, and verdict chips carry this load.

2. **Reading.** Once committed, the reader reads in short bursts, not long passes. Prose must be chunked, scannable mid-paragraph, and continuously rewarding. Long uninterrupted prose is a failure of structure.

3. **Comparing.** The reader frequently arrives wanting to compare two or more options. The product must let comparison happen across pages (consistent structure, consistent terms) and within pages (side-by-side, head-to-head, per-dimension trade-offs). Comparing across pages requires editorial consistency to be a UX feature, not a style preference.

4. **Validating.** The reader checks claims. They look for sources, dates, license numbers, and the author's reasoning. The product must make validation cheap — sources visible inline, freshness visible at a glance, reasoning visible next to the claim.

5. **Deciding.** Eventually the reader chooses: to play, to skip, to read more, or to come back later. The product supports the decision by surfacing fit, trade-offs, and anti-fit honestly — and by making "not now" an acceptable outcome.

HybridBonus must serve all five modes on every content page. A page optimized only for reading fails scanners; a page optimized only for scanning fails validators. The architecture supports all of them simultaneously.

---

## Part 4 — Information Hierarchy

Information is always layered, in this canonical order:

```text
Question the reader actually has
    ↓
Short, honest answer
    ↓
Visual or structured explanation
    ↓
Reasoning (why this answer, not another)
    ↓
Examples or scenarios
    ↓
Sources, dates, verification
    ↓
Optional deep dive (for the reader who wants it)
```

**Why this order.** It mirrors the reader's path: scan → read → validate → decide → learn more. It puts the answer where the reader is looking, the reasoning where the reader's trust is built, and the depth where only the committed reader goes.

**What must never happen.**
- The recommendation appears before the reasoning.
- The bonus headline appears before its conditions.
- The verdict appears before the analysis.
- The source disappears below the fold of an unrelated section.
- A "deep dive" is required to understand the answer.
- The short answer contradicts the deep dive.
- An important caveat is buried in a footnote.
- The reader has to scroll back up to remember what claim is being justified.

The hierarchy is enforced at three scales: the page, the section, and the individual module. A single fact card follows it as faithfully as a 17-section review.

---

## Part 5 — Cognitive Load

The reader's working memory is finite and contested. HybridBonus actively spends design effort to reduce mental load.

- **Chunking.** Information is broken into units small enough to hold in one glance. Long lists become grouped lists; long paragraphs become sequenced cards; long comparisons become per-dimension blocks.
- **Progressive disclosure.** Detail is available, not imposed. Defaults show the answer; expansions show the depth.
- **One idea per section.** A section that tries to teach two things teaches neither. When two ideas appear, the section splits.
- **Visual grouping.** Related information is grouped spatially before it is grouped semantically — proximity does the first explaining.
- **Whitespace as structure.** Empty space tells the reader where one idea ends and another begins. Density without whitespace reads as noise.
- **Predictable layouts.** The same kind of information lives in the same place on every page. Predictability is a cognitive subsidy: the reader stops learning the page and starts learning the content.
- **Repetition of structure.** Reviews share an architecture; comparisons share an architecture; guides share an architecture. The reader learns the shape once and reuses it everywhere.
- **Consistent vocabulary.** The same concept always uses the same word — *omsättningskrav*, *uttag*, *insättning*, *licens* — never substituted for variety.
- **No surprise.** Tone, structure, and behaviour are stable. The reader is never punished for trusting the page.

Cognitive load is a budget. Every decorative flourish, every clever variant, every "delight" element spends some of it. HybridBonus spends the budget on understanding.

---

## Part 6 — Mobile Reading Principles

Mobile is the primary experience. Desktop is a progressive enhancement of the mobile experience, not the other way around. Every page is designed for the small screen first and degrades gracefully — upward.

- **Thumb reach.** Anything the reader needs to act on lives within natural thumb reach. Critical actions never sit in corners the thumb does not reach.
- **Scrolling rhythm.** Vertical scrolling is the natural mobile motion and is welcomed. Horizontal scrolling is fatigue and is forbidden at the page level. Internal horizontal scroll (a comparison table, a long matrix) is acceptable when clearly contained.
- **Reading rhythm.** Sections are short enough to feel like progress. Long sections divide into sub-units the reader can finish in one breath.
- **Spacing.** Mobile spacing is generous, not compressed. Small screens are not an excuse for cramped layouts — they are a reason for tighter editorial discipline.
- **Section length.** No section runs so long that the reader loses the heading. If the reader cannot remember what the current section is about, the section is too long.
- **No horizontal page scroll.** Ever. Any module that would force it must be redesigned, scoped to internal scroll, or split.
- **Reducing fatigue.** Mobile sessions are short and interruptible. Every section should be re-enterable: the reader should be able to come back after a phone call and find their place.
- **Touch over hover.** Every hover-only affordance is a desktop-only feature. Mobile must reach the same information without hover.
- **Network honesty.** Mobile readers are often on poor connections. Heavy decoration that delays content delays understanding.

Treat mobile as the editorial constraint. If an idea cannot be explained well on a 360px screen, it has not been explained well at all.

---

## Part 7 — Educational UX

HybridBonus teaches. Teaching is not a section of the product — it is a mode the product is always in.

- **Visual explanations.** Concepts that can be shown as a diagram, flow, or structured comparison should be — visuals teach faster than prose for procedural or relational ideas.
- **Concrete examples.** Every abstract rule is paired with at least one concrete example using realistic Swedish amounts, scenarios, and outcomes.
- **Analogies, used carefully.** Analogies make new concepts familiar but distort details. Use them to open a topic; never use them to close one.
- **Decision support, not decision replacement.** Teaching tells the reader how to think about a choice, not what to choose. The reader remains the decision-maker.
- **Layered learning.** The same concept is taught at multiple depths across the product: a one-line definition on a review page, a paragraph on a comparison page, a full guide on its own page. The reader meets the concept at the depth that fits their context.
- **Contextual education.** Definitions appear where confusion happens. A reader encountering *omsättningskrav* in a bonus block can learn it there, without leaving the page.
- **No assumed expertise.** The product assumes the reader is intelligent but new to the topic. Jargon is defined the first time it appears in a context.
- **Errors are teaching moments.** When a reader is about to misunderstand (a bonus that looks generous but isn't, a payment method that looks fast but isn't), the product corrects gently and explains why.

Teaching well is the highest form of editorial work HybridBonus does. It is also the most durable: facts go stale, but a reader who learned a concept on HybridBonus carries that understanding forward.

---

## Part 8 — Decision Support

HybridBonus does not answer *"What is the best casino?"* — that question has no honest answer. It answers *"What is best for this player, given these priorities?"*

- **Trade-offs are made visible.** Every recommendation comes with what the reader gives up to get it. Strength on one dimension is shown alongside cost on another.
- **Transparency about the recommendation.** The reader can see why the recommendation was made — which facts, which weights, which player profile it assumes.
- **Anti-fit recommendations.** The product states clearly who an operator is *not* for. *"Passar mindre bra för …"* is as important as *"Passar för …"*.
- **Confidence without false certainty.** When the answer is clear, the product says so plainly. When it is not, the product says that too.
- **Uncertainty is named.** "We don't have verified data on X yet" is preferable to filling a gap with a guess.
- **No total scores.** A single number hides every trade-off it averages. HybridBonus never reduces a multi-dimensional choice to a scalar.
- **Player profiles, not personas.** A small number of honest profiles (e.g., nybörjare, bonusjägare, högroller, ansvarsmedveten spelare) help readers locate themselves without pretending the product knows them personally.
- **Reader autonomy.** HybridBonus supports the reader's decision but never attempts to make it on their behalf. The reader remains in control at every step. The product offers clarity, not commands.
- **"Not now" is a valid outcome.** A reader who leaves without clicking an affiliate link has been served well if they leave better informed. The product is designed to make that outcome acceptable, even encouraged when appropriate.
- **No pressure mechanics.** Countdowns, scarcity language, urgency cues, and "limited offer" framing are forbidden — even when the underlying offer is genuinely time-limited.

Decision support is the most commercially sensitive part of the product. It is exactly where editorial discipline matters most.

---

## Part 9 — Transparency Principles

Trust is not claimed. It is earned, transaction by transaction, by being visibly honest.

- **Visible reasoning.** The reader can always see *why* a claim is being made, not only *that* it is being made. Analysis appears next to the fact it analyzes.
- **Visible sources.** Every factual claim cites a source the reader can open. Sources are not hidden in a sources page detached from the claim.
- **Visible dates.** Every fact carries the date it was verified. Freshness is part of the fact, not metadata.
- **Visible authorship.** The reader knows the editorial voice is HybridBonus's, not an algorithm's, not an operator's, and not a freelance writer's.
- **Visible uncertainty.** Pending data is shown as pending. Outdated data is shown as outdated. Missing data is shown as missing.
- **Visible verification status.** The reader can always tell whether the page has been editorially verified or is still a draft.
- **Visible commercial relationships.** Affiliate relationships are disclosed plainly, where they are relevant, not buried in a footer.
- **Visible corrections.** When the product is wrong, the correction is visible — not silently overwritten.
- **No invisible scoring.** If a score exists, the rubric is open. If the rubric cannot be opened, the score does not exist.
- **No hidden conditions.** Bonus terms, wagering requirements, withdrawal limits, and exclusions appear with the bonus they apply to, not in fine print elsewhere.
- **Information has a lifecycle.** Information is discovered, verified, maintained, aged, re-verified, and sometimes removed. Readers should always understand where information is in that lifecycle. A fresh fact is not an eternal fact; a removed fact is not a hidden fact.

Trust is earned by giving the reader everything they need to disagree with us. A reader who disagrees with HybridBonus on an informed basis is a reader who trusts the product.

---

## Part 10 — Emotional Design

HybridBonus has a feeling. That feeling is part of the editorial contract.

**The product should feel:**
- **Calm.** The reader is not being pushed.
- **Confident.** The voice knows what it is talking about and is willing to be wrong out loud.
- **Professional.** The product reads as adult, careful, and serious about the subject.
- **Premium.** Quiet, considered, well-made. Premium is not luxury; it is care.
- **Educational.** The reader leaves smarter than they arrived.
- **Objective.** The voice is not on the operator's side or the reader's side — it is on the side of the truth.
- **Helpful.** Every screen actively tries to be useful.
- **Trustworthy.** The reader feels they can rely on what they read here without checking elsewhere — and the product invites them to check anyway.

**The product must never create:**
- Urgency.
- FOMO.
- Casino excitement — flashing, jackpot energy, near-win simulations, celebratory animations on commercial outcomes.
- Pressure to act.
- Guilt for not acting.
- Anxiety about missing out.
- The sensation of being marketed to.
- A sense that the page is hiding something.
- A sense that the page is performing for the reader rather than informing them.

Emotional restraint is editorial discipline. The industry HybridBonus covers leans on excitement; the product's job is to be the quiet counterweight.

---

## Part 11 — Accessibility

Accessibility is broader than WCAG compliance. WCAG is the floor, not the ceiling.

- **Reading accessibility.** Plain Swedish, short sentences, defined jargon, predictable structure. A reader with low confidence in the topic — not only a reader with a disability — must be able to follow.
- **Comprehension accessibility.** Information is structured so it can be understood, not only perceived. A screen reader that reads out a wall of numbers serves no one; a structured table with proper headers serves both screen readers and sighted scanners.
- **Information density accessibility.** Density must match the reader's capacity, not the designer's ambition. Dense by default is inaccessible by default.
- **Predictable layouts.** A reader who learns one review can navigate any review. Predictability serves cognitive accessibility as much as it serves scanning.
- **Language clarity.** Avoid idioms, avoid metaphors that assume cultural fluency, avoid English loanwords where Swedish exists.
- **Icon support, not icon dependence.** Icons reinforce labels; they do not replace them. An icon-only control is a failure.
- **Mobile accessibility.** Touch targets are generous. Zooming is allowed. Pinch and rotation are not hijacked.
- **No motion that excludes.** Anything that moves respects reduced-motion preferences.
- **No colour-only meaning.** Colour reinforces meaning carried elsewhere; it never carries meaning alone.
- **Time-independent reading.** Nothing important disappears on a timer. The reader controls the pace.
- **Vulnerable-reader accessibility.** Readers in or near gambling harm must never be made worse by the product. Responsible-gambling routes are always visible and never demoted.

Accessibility, like trust, is a property of the whole product or it is absent from the whole product.

---

## Part 12 — Information Density

The default form of information is prose. Prose is escalated to a richer form when the form serves understanding better.

A piece of information becomes a **card** when it is a self-contained fact the reader may want to scan or return to independently.

A piece of information becomes a **diagram** when its meaning is relational or procedural and harder to follow as a sentence than as a picture.

A piece of information becomes a **timeline** when sequence or duration is the point.

A piece of information becomes a **comparison** when the reader's question is "which" or "how do they differ".

A piece of information becomes a **table** when readers need to look up values by row and column, or scan many similar items.

A piece of information becomes a **callout** when it changes how the reader should read what surrounds it — a caveat, a definition, an editorial note.

A piece of information becomes a **warning** when ignoring it could cause real harm — a misleading bonus, a slow withdrawal, a responsible-gambling concern.

A piece of information becomes a **chip or badge** when it is a small categorical signal the reader needs to spot at a glance — verified, pending, licensed, source.

**General rule.** When a paragraph runs longer than the reader can hold in working memory, or when the paragraph repeats a structure the reader has seen before, the paragraph becomes a structured module. Density is not the goal; *legibility at density* is the goal.

**Inverse rule.** When a structured module carries only one fact and that fact is better said in a sentence, the module becomes a sentence. Structure for the sake of structure is noise.

---

## Part 13 — Editorial Consistency

Every page on HybridBonus must follow the same editorial standards — regardless of author, production method, or content type.

- **One voice.** Reviews, guides, comparisons, and the homepage share tone, vocabulary, and posture. Voice is not adjusted to genre.
- **One vocabulary.** Concepts are named once and named the same way everywhere.
- **One structure family.** Reviews share a structure; comparisons share a structure; guides share a structure. A reader who learns one page learns the type.
- **One standard of evidence.** A claim that requires a source on one page requires a source on every page.
- **One standard of recommendation.** The bar for recommending is the same on a guide as on a comparison as on a review.
- **One responsible-gambling posture.** Responsible-gambling references appear with the same weight, in the same spirit, on every relevant page.
- **One stance on uncertainty.** Pending is pending everywhere. Stale is stale everywhere.
- **One commercial posture.** Affiliate disclosures, CTA language, and the relationship to operators are uniform across the site.
- **Future-proof consistency.** The same editorial standards apply whether the page was written by one editor, multiple editors, or an AI-assisted workflow. Authorship and production method do not change the standard the reader receives.

Consistency is what allows the reader to trust the second page after trusting the first. Inconsistency forces the reader to re-evaluate the source on every page, which is the opposite of building trust.

---

## Part 14 — UX Success Metrics

Success is measured by understanding, not by clicks.

**Primary metrics — comprehension and trust.**
- The reader understood what they came to understand.
- The reader can articulate the trade-offs they faced.
- The reader knows the source of the facts they read.
- The reader returns when they have another question.

**Secondary metrics — engagement quality.**
- Reading completion on long pages.
- Source-link interaction (readers actually checking).
- Comparison usage (readers actually comparing, not just landing).
- Internal navigation between related pages.
- Return visits to guides (a learning signal).
- Time-to-answer on pages designed to answer fast.

**Commercial metrics — necessary but never primary.**
- Affiliate conversion is tracked, but never optimized against editorial integrity.
- A drop in conversion that follows a gain in trust is acceptable.
- A gain in conversion that follows a loss in trust is a regression, regardless of revenue.

**Anti-metrics — things HybridBonus refuses to optimize.**
- Raw clicks.
- CTR on affiliate links as a standalone goal.
- Time on page without comprehension.
- Bounce rate when bounce means "got the answer and left satisfied".
- Pageviews per session as a goal of its own.
- Anything that rewards confusing or trapping the reader.

A successful HybridBonus reader is one who arrived confused, left informed, and trusted the product enough to come back.

---

## Part 15 — Things HybridBonus Never Does

A permanent blacklist. These are not preferences. They are violations.

- Never hide important conditions of a bonus, offer, or product.
- Never use dark patterns of any kind.
- Never overload a page with information the reader did not ask for.
- Never prioritize SEO over clarity.
- Never prioritize affiliate revenue over editorial integrity.
- Never recommend without explaining the reasoning.
- Never use decorative visuals that carry no informational value.
- Never use casino-style visual or emotional cues — slots, coins, jackpot energy, celebratory animations on commercial actions.
- Never encourage gambling.
- Never frame gambling as income, investment, or strategy.
- Never minimize gambling risk.
- Never imply guaranteed wins.
- Never use scarcity, urgency, countdowns, or FOMO mechanics.
- Never use fake user counts, fake reviews, fake testimonials, or fabricated social proof.
- Never invent facts, casinos, ratings, sources, license numbers, payment methods, or verification dates.
- Never present an unverified fact as verified.
- Never present a stale fact as fresh.
- Never present an opinion as a fact, or a fact as an opinion.
- Never present a recommendation before its reasoning.
- Never use total scores, aggregated rankings, or "best overall" claims.
- Never rank by a single number a multi-dimensional choice deserves.
- Never bury responsible-gambling information.
- Never demote Spelpaus or Stödlinjen for layout reasons.
- Never use English where natural Swedish exists.
- Never use English casino jargon ("rollover", "match bonus", "high roller") when Swedish editorial terms exist.
- Never substitute a clearer word with a fancier one.
- Never write copy designed to manipulate rather than inform.
- Never style affiliate CTAs to mimic system controls or non-commercial actions.
- Never auto-play motion, sound, or commercial content.
- Never use modal interruptions to push affiliate actions.
- Never collect data that does not serve the reader.
- Never publish a page that fails the verification gate as if it had passed it.
- Never silently fix an error — corrections are visible.
- Never let a designer, developer, or stakeholder override an editorial principle for visual or commercial reasons. The Operating System and the Editorial Constitution outrank visual polish and conversion.
- Never optimize a metric in a way that weakens clarity, understanding, or trust.
- Never remove information without explanation if readers previously relied on it.

This list grows over time. It never shrinks.

---

## Editorial UX Manifesto

The permanent north star for every future design, content, and product decision at HybridBonus.

1. **We exist to help Swedish players understand gambling — not to sell it to them.**
2. **Clarity is the product. Beauty never outranks clarity. Trust is non-negotiable.**
3. **We explain before we recommend. We reason before we conclude. We cite before we claim.**
4. **We earn trust by being visibly honest — with sources, with dates, with uncertainty, with our reasoning, and with our limits.**
5. **We never reduce a multi-dimensional choice to a single number. We never recommend without showing the trade-off. We never pretend to know more than we do.**
6. **We are calm. The industry is loud; we are not.**
7. **We are mobile-first because our readers are. We are accessible because our readers are everyone.**
8. **We teach. A reader who learns from us is the reader we want.**
9. **We answer the question the reader actually asked — and we answer it where the reader is looking.**
10. **We never manipulate. We never pressure. We never hide. We never harm.**
11. **The responsible-gambling path is always visible. The reader's wellbeing always outranks the reader's conversion.**
12. **Affiliate revenue is a downstream consequence of trust, never a substitute for it.**
13. **Editorial integrity outranks design ambition, engineering preference, and commercial pressure — always.**
14. **Every page follows the same editorial standards, regardless of who wrote it or how it was produced.**
15. **If a design choice does not improve understanding, reduce cognitive load, or support a better decision, it does not belong on HybridBonus.**

# Experiment safety guide

This directory is for template-only experiments, not real HybridBonus production work. External builder experiments should use a throwaway branch or a separate throwaway repo.

First experiments should prefer docs-only mockups, design notes, screenshots, or isolated prototype notes. Visitor-facing HybridBonus copy should be Swedish unless explicitly approved otherwise.

Experiments must preserve trust-first editorial positioning. Avoid casino hype, countdowns, FOMO, fake urgency, jackpot imagery, bonus-explosion graphics, invented casino facts, rankings, winner framing, total scores, and fake authority.

Experiments must not edit `docs/constitution/*`, `src/`, package files, lockfiles, config files, generated files, route-tree files, component contracts, or roadmap substance unless separately approved.

## Post-experiment checklist

- Run `git status --short`.
- Run `git diff --name-only`.
- Check no forbidden files changed.
- Check Swedish visitor-facing copy.
- Check no invented casino/compliance facts.
- Check no hype/conversion-first language.

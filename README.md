# HybridBonus

Sweden's most trusted comparison platform for licensed online casinos — a premium editorial decision platform, not an affiliate site. Trust is always more important than conversion.

## Stack

- TanStack Start v1 (React 19, file-based routing, server functions)
- Vite 7
- Tailwind CSS v4
- shadcn/ui components
- Bun (package manager + runtime)

## Local development

```bash
bun install
bun run dev
```

Vite serves on `http://localhost:8080`.

## Where to start (humans + AI tools)

1. `docs/handoff/ai-agent-instructions.md` — orientation for any AI tool opening this repo.
2. `docs/handoff/implementation-boundaries.md` — what is allowed and forbidden to change.
3. `docs/constitution/README.md` — reading order for the constitutional documents.

## Lovable origin

This repository was created from a [Lovable](https://lovable.dev)-originated project snapshot. It is not assumed to be actively connected to Lovable unless explicitly configured. See `AGENTS.md` for template-safe git history guidance.

The checked-in documentation and constitution files are repo-local template snapshots originally exported from Lovable project memory (`mem://...`). They are not actively synced with Lovable unless explicitly configured.

When working outside Lovable, treat the files under `docs/constitution/` as the best available local reference. Do not make governance-changing edits casually.

## Environment

See `.env.example`. No environment variables are required for local dev today. If this template is connected to Lovable, real values should be managed in Lovable's environment and never committed.

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

## Lovable sync

This project is bidirectionally synced with [Lovable](https://lovable.dev). Commits pushed to the connected branch appear in the Lovable editor; edits made in Lovable push back to this repo. See `AGENTS.md` for git history rules.

The authoritative version of every constitutional document lives in **Lovable project memory (`mem://...`)**. Files under `docs/constitution/` are read-only snapshots taken on the date shown in each file header — they may drift from the canonical `mem://` source over time.

## Environment

See `.env.example`. No environment variables are required for local dev today. Real values are managed in Lovable's environment and are never committed.

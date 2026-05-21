# Academic Website for Senior Researchers

Most academic website templates are built for simplicity — a single page, a short bio, and a list of papers. That works for early-career researchers, but falls short for senior researchers who need to present a full body of work: multiple research directions, a growing publication record, an active team, ongoing courses, and project portfolios with rich media.

This template is built specifically for that audience.

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Fonts | Playfair Display · Inter via `next/font/google` |
| Deployment | Any static host — Vercel, Netlify, GitHub Pages |

## What's included

- **8 pages** — About, News, Portfolio, Publications, Projects, Team, Courses, Opportunities
- **Dynamic project pages** — routes auto-generated from your content, no config needed
- **Dark mode** — system-aware, persisted in localStorage
- **Fully static export** — no server required at runtime

## Performance

- Zero layout shift — fonts are self-hosted at build time via `next/font/google`
- `loading="lazy"` on all non-critical images, GIFs, and embedded videos
- GIFs only download when scrolled into view
- Pre-rendered HTML for every page — no client-side data fetching

---
## Documentation（in chinese）
HLD: https://clever-pelican-46a.notion.site/35f35604bb16805d9779e24a1c7150a3?source=copy_link

LLD: https://clever-pelican-46a.notion.site/36135604bb1680b49e3eec3e45ce9ec3?source=copy_link

Conducted interviews with a NUS professor to gather and summarize project requirements.

---

## Getting Started

**Option 1 — One-click deploy**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lwwywang/AW4SR-academic-website-4-senior-researcher)

Vercel will clone this repo into your GitHub account and deploy it automatically. Every `git push` to `main` triggers a new deployment.

**Option 2 — Fork and deploy manually**

1. Fork this repository
2. Clone it locally and run `npm install && npm run dev`
3. Edit the files in `content/` to add your own information
4. Connect your fork to [Vercel](https://vercel.com) for automatic deployment

---

## Editing Content

All user-facing content lives in the `content/` directory. **No component or page files need to be touched for routine edits.**

| File | What it controls |
|---|---|
| `content/site.ts` | Site title, meta description |
| `content/about.tsx` | Bio, photo, research directions, contact |
| `content/news.tsx` | News items |
| `content/portfolio.tsx` | Portfolio hero, project cards |
| `content/publications.tsx` | Publications grouped by year |
| `content/projectDetails.tsx` | Project detail pages |
| `content/team.tsx` | Team members |
| `content/courses.tsx` | Courses |
| `content/opportunities.tsx` | Recruitment information |

Full documentation is in [`docs/en/`](./docs/en/) (English) and [`docs/zh/`](./docs/zh/) (中文).

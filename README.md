# Kapil Yadav — Developer Portfolio

A single-page developer portfolio built with Next.js (App Router) and TypeScript. Built partly as a showcase, partly as the project I used to actually learn both.

## Live Portfolio
https://kapilyadav.dev

## Overview

One scrolling page — hero, about, skills, projects, experience, education, contact — plus a small AI chat widget that answers common recruiter questions from a local knowledge base, falling back to an OpenAI call for anything else.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4** — palette defined as CSS variables in `global.css`
- **Framer Motion** — scroll-triggered fade-ins
- **OpenAI API** (`gpt-4o-mini`) — fallback for the chat widget
- **Vercel** — hosting, analytics

## Project Structure

```
src/
 ├─ app/            layout, page, global.css, sitemap.ts, api/chat/route.ts
 ├─ components/     one file per page section
 │   └─ ui/         SectionHeading, BrowserFrame, Divider
 ├─ data/           projects.ts, aiKnowledge.ts
 └─ lib/            ui.ts (shared class-name tokens)
```

Content (project descriptions, skills, experience) lives as typed TypeScript data in `src/data/`, not a CMS or database — there's no database or authentication anywhere in this repo.

## Running Locally

```bash
git clone https://github.com/Noobod/portfolio
cd portfolio
npm install
npm run dev
```

Requires an `OPENAI_API_KEY` in `.env.local` for the chat widget's fallback to work; the widget still answers common questions without it, since those are served locally first.

## Contact

Kapil Yadav — Sydney, Australia
Email: ykapil086@gmail.com
Portfolio: https://kapilyadav.dev
LinkedIn: https://linkedin.com/in/yadav-kapil

## License

MIT License — free to use and adapt.

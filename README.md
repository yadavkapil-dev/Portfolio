# Kapil Yadav — Developer Portfolio

A single-page developer portfolio built with Next.js (App Router) and TypeScript. Built partly as a showcase, partly as the project I used to actually learn both.

## Live Portfolio
https://kapilyadav.dev

## Overview

One scrolling page — hero, about, skills, projects, experience, education, contact — plus a small chat widget that answers common recruiter questions from a local knowledge base. It originally fell back to an OpenAI call for anything the keyword router didn't match; that fallback was removed since the per-call cost wasn't justified for a portfolio widget, so unmatched questions now get a fixed reply pointing to my contact details instead.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4** — palette defined as CSS variables in `global.css`
- **Framer Motion** — scroll-triggered fade-ins
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
git clone https://github.com/yadavkapil-dev/Portfolio
cd Portfolio
npm install
npm run dev
```

No environment variables are required — the chat widget runs entirely on the local keyword-matched knowledge base.

## Contact

Kapil Yadav — Sydney, Australia
Email: ykapil086@gmail.com
Portfolio: https://kapilyadav.dev
LinkedIn: https://linkedin.com/in/yadav-kapil

## License

MIT License — free to use and adapt.

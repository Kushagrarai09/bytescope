# ByteScope

**Technology, Beyond the Surface.**

ByteScope is a personal technology publication built with Next.js App Router, TypeScript and MDX. Articles live in the repository and deploy automatically through Vercel's Git integration.

## Stack
- Next.js 15 App Router and React
- TypeScript
- MDX with frontmatter (Gray Matter + next-mdx-remote)
- Editorial CSS design system with light/dark themes
- Browser storage for bookmarks and reading history
- Vercel hosting and GitHub-based deployments

## Local development
Requirements: Node.js 22.x and npm.
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Quality checks
```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Publish an article
Create a file in `content/articles/my-new-article.mdx`:
```md
---
title: "A clear article title"
description: "A concise summary for listings and search engines."
category: "Backend Engineering"
categorySlug: "backend-engineering"
date: "2026-11-10"
updatedAt: "2026-11-10"
author: "Kushagra Rai"
readTime: "7 min read"
cover: "/images/my-article-cover.webp"
featured: false
tags: [Backend, APIs, Architecture]
draft: false
---

## First section

Write your article in Markdown. Fenced code blocks, tables, lists and blockquotes are supported.
```
Commit and push to `main`. Vercel automatically builds and deploys the new article. Set `draft: true` to exclude a post from public listings and static article routes. Never put secrets in MDX frontmatter.

### Frontmatter fields
| Field | Required | Purpose |
| --- | --- | --- |
| title | Yes | Article heading and SEO title |
| description | Yes | Summary for cards and metadata |
| category | Yes | Display category |
| categorySlug | Yes | Category route |
| date | Yes | Publication date, YYYY-MM-DD |
| author | Yes | Article byline |
| readTime | Yes | Estimated reading time |
| cover | Recommended | Cover image URL or public path |
| tags | Recommended | Related topics |
| featured | No | Feature on homepage |
| updatedAt | No | Last meaningful update |
| draft | No | Exclude from public content when true |

## Routes
- `/` — editorial homepage
- `/blog` and `/explore` — article discovery
- `/articles/[slug]` — long-form article
- `/categories/[slug]` — category archive
- `/tags` and `/tags/[slug]` — tag discovery
- `/archive`, `/archive/[year]`, `/archive/[year]/[month]` — date archives
- `/bookmarks` — saved articles (this browser)
- `/reading-history` — recently read articles (this browser)
- `/author/kushagra-rai` — author profile
- `/projects` — selected projects
- `/contact` — contact information
- `/rss.xml` — RSS feed
- `/sitemap.xml` — sitemap

## Vercel
Import `Kushagrarai09/bytescope` with the Next.js preset, root directory `./`, install command `npm install`, build command `npm run build`, and Node.js 22.x. Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin if using a custom domain. MDX publishing requires no database or environment secret.

## Browser storage and future features
Bookmarks and reading history are local to the visitor's browser/device; they are not synchronised between devices and are not account-backed. Newsletter delivery and server-side contact submissions are intentionally not enabled until a provider and privacy workflow are configured. Comments are deferred until moderation, spam protection and privacy controls are ready.

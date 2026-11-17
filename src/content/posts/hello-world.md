---
title: Hello, world
description: Why this blog exists and what you can expect from it.
date: 2026-11-10
---

Welcome. This is the first article, and it lives in a single Markdown file:
`src/content/posts/hello-world.md`.

## How publishing works

1. Create a new `.md` file in `src/content/posts/`.
2. Add the front matter (title, description, date) at the top.
3. Commit and push to `main`. GitHub Actions builds and deploys the site.

The file name becomes the URL, so `my-first-idea.md` is published at `/blog/my-first-idea/`.

> Keep it simple. Write the thing, push the thing.

## Drafts

Add `draft: true` to the front matter and the article stays off the site until you remove it.

# Astro blog

Static blog built with [Astro](https://astro.build), deployed to GitHub Pages with GitHub Actions.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Write an article

Add one `.md` file to `src/content/posts/`. The file name becomes the URL.

```md
---
title: My new article
description: One sentence summary.
date: 2026-11-20
draft: false   # optional, true hides it
---

Your content here.
```

## Personalise

- `src/config.ts`: name, logo, hero text, social links
- `public/images/me.svg`: replace with your photo (update the path in `config.ts` if you use a .jpg)
- `src/styles/global.css`: colours and fonts (CSS variables at the top)

## Deploy to GitHub Pages

1. Push this project to a GitHub repo on the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.

`site` and `base` are derived from the repository name automatically (see `astro.config.mjs`).
For a custom domain, set `site` to your domain and `base` to `'/'`.

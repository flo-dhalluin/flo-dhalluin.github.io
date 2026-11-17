import { defineConfig } from 'astro/config';

// On GitHub Actions, derive `site` and `base` from the repository automatically.
//  - repo "you/blog"          -> https://you.github.io/blog/
//  - repo "you/you.github.io" -> https://you.github.io/
// Locally (npm run dev) base is "/".
// Using a custom domain? Set site to your domain and base to '/'.
const inActions = !!process.env.GITHUB_ACTIONS;
const [owner = 'you', repo = 'blog'] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
  site: inActions ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: inActions && !isUserSite ? `/${repo}` : '/',
});

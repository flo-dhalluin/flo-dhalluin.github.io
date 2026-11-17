import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One flat folder: every article is a single .md file in src/content/posts/
const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };

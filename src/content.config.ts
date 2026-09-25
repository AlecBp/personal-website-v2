import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Hero, route summary, experience extras and contact copy. Everything lives in the frontmatter. */
const profile = defineCollection({
  loader: glob({ pattern: 'profile.md', base: './src/content' }),
  schema: z.object({
    name: z.string(),
    jobTitle: z.string(),
    employer: z.string(),
    location: z.string(),
    workLocation: z.string(),
    description: z.string().max(160),
    intro: z.string(),
    portrait: z.object({ alt: z.string(), caption: z.string() }),
    asides: z.boolean().default(true),
    routeSummary: z.string(),
    earlier: z.object({ summary: z.string(), years: z.string() }),
    talks: z.string(),
    contact: z.string(),
    resume: z.string(),
    email: z.email(),
    links: z.object({ linkedin: z.url(), github: z.url(), source: z.url().optional() }),
  }),
});

/** One file per role. The body holds résumé-style highlights; the homepage shows only the frontmatter. */
const experience = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    team: z.string().optional(),
    title: z.string(),
    start: z.string(),
    end: z.string(),
    location: z.string(),
    order: z.number(),
  }),
});

const expertise = defineCollection({
  loader: file('src/content/expertise.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    summary: z.string(),
    tech: z.array(z.string()).optional(),
    meta: z.string().optional(),
    aside: z.string().optional(),
  }),
});

/** The route timeline, oldest first. */
const route = defineCollection({
  loader: file('src/content/route.yaml'),
  schema: z.object({
    order: z.number(),
    year: z.string(),
    title: z.string(),
    detail: z.string(),
    status: z.enum(['current', 'next']).optional(),
  }),
});

export const collections = { profile, experience, expertise, route };

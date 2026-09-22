import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), href: z.string() });

/** Hero, about, contact and footer copy. Frontmatter holds short fields; the body is the About prose. */
const profile = defineCollection({
  loader: glob({ pattern: 'profile.md', base: './src/content' }),
  schema: z.object({
    name: z.string(),
    jobTitle: z.string(),
    employer: z.string(),
    tagline: z.string(),
    location: z.string(),
    description: z.string().max(160),
    resume: z.string(),
    email: z.email(),
    links: z.object({ linkedin: z.url(), github: z.url(), source: z.url().optional() }),
    earlier: z.string(),
    education: z.string(),
    beyond: z.string(),
    contact: z.string(),
  }),
});

/** One file per role. The body is the highlight list. */
const experience = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    team: z.string().optional(),
    title: z.string(),
    start: z.string(),
    end: z.string(),
    location: z.string(),
    note: z.string().optional(),
    order: z.number(),
  }),
});

const work = defineCollection({
  loader: file('src/content/work.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    summary: z.string(),
  }),
});

const projects = defineCollection({
  loader: file('src/content/projects.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    summary: z.string(),
    stack: z.string(),
    year: z.number(),
    links: z.array(link),
  }),
});

/** Talks now; posts can join later with kind: post and an href. */
const writing = defineCollection({
  loader: file('src/content/writing.yaml'),
  schema: z.object({
    order: z.number(),
    kind: z.enum(['talk', 'post']),
    title: z.string(),
    venue: z.string(),
    date: z.coerce.date().optional(),
    href: z.string().optional(),
  }),
});

export const collections = { profile, experience, work, projects, writing };

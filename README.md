# alecpagliarussi.me

Personal site of Alec Pagliarussi. A single static page built with [Astro](https://astro.build/),
hand-written CSS and no client-side framework. The only scripts are the theme toggle and the
email-link decoder.

## Run locally

Uses Node.js 24 LTS; the exact version is pinned in `.nvmrc` (`nvm use`), which Netlify also reads.

```bash
nvm use
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + static build into dist/
npm run preview   # serve dist/ locally
```

## Editing content

All copy lives in `src/content/`, so you can edit it without touching components:

| File | What it controls |
| --- | --- |
| `profile.md` | Hero, meta description, contact, "Earlier", education, "Beyond work". The Markdown body is the About section. |
| `experience/*.md` | One file per role. Frontmatter holds the dates and title; the body is the bullet list. `order` sets position. |
| `work.yaml` | Selected work: broad areas of focus. Keep it high level, with no internal names or metrics. |
| `writing.yaml` | Talks, and later posts (`kind: post`, `href`, `date`). |
| `projects.yaml` | Side projects. Only list links that are live. |

Schemas are in `src/content.config.ts`. `npm run build` fails if a field is missing or mistyped.

The resume is served from `public/resume.pdf`. Replace the file to update it.

## Dependencies

- `allowScripts` in `package.json` lists which dependency install scripts npm may run
  (npm 11.19+ blocks unreviewed ones). Review new prompts with `npm install-scripts ls`.
- `overrides` pins `fflate` to 0.7.5, the patched release for GHSA-px8p-9vwx-vf98. It comes in through
  `satori`, which pins 0.7.3. Remove the override once `satori` updates.
- TypeScript stays on 6.x until `@astrojs/check` supports TypeScript 7.

## Content Security Policy

`security.csp` in `astro.config.mjs` makes Astro emit a per-page CSP `<meta>` with hashes for every
script and style it processes. `<script is:inline>` blocks are **not** hashed and will be blocked, so
use normal `<script>` tags. The one exception is the theme bootstrap in `src/scripts/theme-init.js`,
which has to run synchronously: the layout inlines it and the config hashes the same file. Avoid
inline `style="…"` attributes too; CSP blocks them.

CSP only takes effect in `npm run build` + `npm run preview`, not in `npm run dev`.

## Images, Open Graph card and favicons

- The hero photo is `src/assets/profile.jpeg`. Astro generates AVIF, WebP and JPEG variants at build time.
- `npm run og` regenerates `public/og.png` (1200×630) and the favicon set (`favicon.svg`, `favicon.ico`,
  `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`) from the photo and the Geist font.
  Run it after changing the photo, name or role, and commit the output.

## Deploy

The site is hosted on Netlify, which builds it from this repo. `netlify.toml` sets the build command
(`npm run build`), the output folder (`dist`), cache headers and security headers,
and it takes precedence over the settings in the Netlify dashboard. The custom domain and the
`www` → apex redirect are configured in the Netlify dashboard, so DNS doesn't change.

A push to `main` triggers a production deploy. Other branches get deploy previews if they're enabled
in Netlify.

`public/sw.js` replaces the service worker the old Gatsby site installed. It clears the old caches and
unregisters itself so returning visitors get the current site. It can be removed once old installs
have aged out.

## Legacy

`content/legacy/` archives the copy, data and images from the 2021 Gatsby site.

## Licence

See `LICENSE.md` for the code. Geist is licensed under the SIL Open Font License (`public/fonts/Geist-OFL.txt`).

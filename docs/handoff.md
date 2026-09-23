# Handoff — alecpagliarussi.me rebuild

Working notes so the project can be picked up without the original conversation.
Last updated 2026-09-23. Read together with [`content-brief.md`](content-brief.md) (what the site says and how).

## Where things stand

| Branch | What's on it | State |
| --- | --- | --- |
| `main` | Old Gatsby 2 site (2021). Netlify deploys production from here. | Untouched. |
| `redesign/astro` | The new Astro site: clean "marginalia" design, personal-voice copy, new résumé, content brief. **This is the real work.** | Committed, **not pushed**. |
| `design/explorations` | `redesign/astro` + lab pages at `/lab/{blueprint,swiss,literary,blueprint-v2}` (noindex, not linked). | Committed, not pushed. Merge `redesign/astro` into it before new explorations. |

**Nothing has been pushed or deployed.** Pushing a branch may create a Netlify deploy preview; merging to `main` deploys production. Both need Alec's explicit OK.

### Next step

A new design round against the brief: **between "simple and clean, with photos" and "bold and minimal"** — type-led, lots of space, one portrait, the route timeline kept (line continues past 2025 into "growing the career: new challenges, bigger projects, at work and personally"). Show options on `design/explorations` first; port the winner into `redesign/astro`; rerun the quality gate.

Rejected so far (don't repeat): Blueprint (busy, costume, impersonal), Swiss poster, Literary, parts-list hobbies, the interactive outage simulator, and the original clean design as "too generic".

## Original requirements (still binding)

From Alec's initial brief:

- **Hosting:** Netlify, same domain, no DNS changes. Build config lives in `netlify.toml` (overrides the dashboard). Custom domain and `www` → apex redirect are set in the Netlify dashboard.
- **Stack:** Astro (latest), static output, TypeScript, content in typed collections; hand-written CSS; no component libraries or UI kits; zero client JS except small essentials; `astro:assets` with explicit width/height.
- **Design:** light and dark mode (respect `prefers-color-scheme`, small toggle); one accent colour; no gradients-everywhere, glassmorphism or template look; self-hosted fonts only; ~65–75 character measure; mobile-first and intentional at 360px; subtle motion, reduced under `prefers-reduced-motion`.
- **Accessibility:** semantic landmarks, visible focus, 4.5:1 contrast in both themes, alt text, skip link.
- **Performance:** Lighthouse 95+ on mobile in every category; under ~500 KB first load.
- **SEO:** title "Alec Pagliarussi — Staff Software Engineer"; meta description under 160 characters; Open Graph and Twitter cards with a 1200×630 image (no Twitter handle; none existed); JSON-LD `Person` (name, jobTitle, worksFor ServiceTitan, sameAs LinkedIn/GitHub, url); canonical `https://alecpagliarussi.me/`; `robots.txt`; sitemap.
- **Content rules:** no phone number anywhere; résumé served at `/resume.pdf`; email obfuscated; no invented facts. See the brief.
- **Quality gate before hand-back:** `astro check` + build clean; Lighthouse mobile scores; crawl every link for 200s; screenshots at 360/768/1280 in both themes; redirects for old routes (none needed: old site only had `/` and `/404`).
- **Git:** conventional commits on a branch; never push to `main` or deploy without confirmation; README explains run and deploy.

## What's built (`redesign/astro`)

- `src/content/` — all copy. `profile.md` (hero, About body, Beyond work, contact, Earlier, education), `experience/*.md`, `work.yaml`, `projects.yaml`, `writing.yaml`. Schemas in `src/content.config.ts`.
- `src/components/`, `src/layouts/Base.astro`, `src/pages/{index,404}.astro`, `src/styles/global.css` — the current design.
- `public/resume.pdf` — `Alec_Pagliarussi_Resume_2026_1.pdf` (checked: no phone number).
- `public/sw.js` — self-unregistering replacement for the old Gatsby service worker. Keep until old installs have aged out.
- `scripts/og.mjs` (`npm run og`) — regenerates `public/og.png` and the favicon set. Run after changing the photo, name, role or OG line, and commit the output.
- `content/legacy/` — archive of the old Gatsby site's copy, data and images.
- `docs/content-brief.md` — content and voice source of truth.

Last full quality gate (commit `45f5f39`, before the copy rewrites): Lighthouse mobile 100/100/100/100, 49 KiB, LCP 1.2 s, CLS 0; 41 links all 200 except LinkedIn (999 = bot wall, profile exists); no CSP violations; no horizontal overflow at 360/768/1280. Rerun after the next design lands.

## Technical decisions worth knowing

- **Node 24.21.0 LTS**, pinned in `.nvmrc` (Netlify reads it). Node 26 becomes LTS on 2026-10-28.
- **TypeScript stays 6.x** — `@astrojs/check` peer range is `^5 || ^6`; TS 7 dropped the JS API it uses.
- **npm 11.19 install-script approvals:** `allowScripts` in `package.json` (`esbuild: true`, `fsevents: false`). Check new prompts with `npm install-scripts ls`.
- **`overrides.fflate = 0.7.5`** fixes GHSA-px8p-9vwx-vf98 via `satori` (dev-only). Remove once satori updates.
- **CSP** via Astro `security.csp` (per-page `<meta>` with hashes):
  - `<script is:inline>` is **not** hashed and gets blocked; use normal `<script>` tags.
  - Exception: the synchronous theme bootstrap `src/scripts/theme-init.js`, inlined by `Base.astro` and hashed in `astro.config.mjs`. It sits in `<body>` so the CSP meta covers it.
  - No inline `style="…"` attributes (blocked).
  - Markdown highlighting is Prism, because Shiki's inline styles break CSP.
  - CSP doesn't apply in `astro dev`; test with build + preview.
- **Theme colours** use CSS `light-dark()` with `color-scheme`; the toggle sets `data-theme` and syncs `theme-color`.
- **YAML gotcha:** quote frontmatter values that contain `: ` (e.g. `description: "…: …"`).
- **Email** is base64-encoded in data attributes and decoded by a small script; never plain text in HTML.

## Environment quirks (this machine)

- An **`rtk` hook rewrites commands**: `npx astro …` breaks, and `grep -o` / `curl` output can get mangled or truncated. Use `./node_modules/.bin/astro …` and `rtk proxy <cmd>` for raw `grep`, `npm`, `curl` or `git log --graph`.
- Run `source ~/.nvm/nvm.sh && nvm use` first (the default shell has Node 24.13).
- `astro dev` / `astro preview` **daemonize**. Stop with `./node_modules/.bin/astro dev stop` / `preview stop`. Switching branches kills the dev server; restart it after.
- Playwright MCP can only write files inside the repo: use `.playwright-mcp/` (gitignored). `setTimeout` isn't available in `browser_run_code_unsafe`; use `page.waitForTimeout`.
- Read PDF text with `swift scripts/pdftext.swift file.pdf` (PDFKit); `pdftotext` isn't installed. `qlmanage -t -o <dir> file.pdf` renders page 1 as a PNG.
- Untracked `proxmox-jobs.sqlite3*` in the repo root belong to something else; they're gitignored. Leave them alone.

## Facts found during the rebuild

- Old demos (checked 2026-09-22): `messenger.alecpagliarussi.me` and `weatherapp.alecpagliarussi.me` are live; `dogbreed` is dead (its CloudFront distribution no longer resolves). Repos for messenger, weather-react and react-spring-simple-crud exist.
- The old site had no analytics, no OG tags and no Twitter handle.

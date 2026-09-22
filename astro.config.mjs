// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

// The theme bootstrap is inlined verbatim (see src/layouts/Base.astro), so Astro can't hash it for us.
const themeInit = readFileSync(new URL('./src/scripts/theme-init.js', import.meta.url), 'utf8');
/** @type {`sha256-${string}`} */
const themeInitHash = `sha256-${createHash('sha256').update(themeInit).digest('base64')}`;

export default defineConfig({
  site: 'https://alecpagliarussi.me',
  trailingSlash: 'ignore',
  // The whole stylesheet is a few KB, so inlining it removes the only render-blocking request.
  build: { format: 'directory', inlineStylesheets: 'always' },
  // Shiki emits inline styles, which the CSP below would block; Prism uses classes instead.
  markdown: { syntaxHighlight: 'prism' },
  // Astro hashes the scripts and styles it processes into a per-page CSP <meta>.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
      ],
      scriptDirective: { hashes: [themeInitHash] },
    },
  },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});

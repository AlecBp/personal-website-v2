// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alecpagliarussi.me',
  trailingSlash: 'ignore',
  // The whole stylesheet is a few KB, so inlining it removes the only render-blocking request.
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});

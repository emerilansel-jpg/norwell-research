import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://norwellresearch.com',
  output: 'static',
  integrations: [
    sitemap({
    filter: (page) => !page.includes('/admin/'),
  }),
  ],
});

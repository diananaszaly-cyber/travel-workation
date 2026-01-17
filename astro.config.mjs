import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const repoName = 'travel-workation';
const isProd = process.env.GITHUB_ACTIONS === 'true' || process.env.CI === 'true';

export default defineConfig({
  // deine GitHub Pages Domain
  site: 'https://diananaszaly-cyber.github.io',

  // Lokal: '/'  |  GitHub Pages: '/travel-workation'
  base: isProd ? `/${repoName}` : '/',

  integrations: [mdx(), sitemap()],
});

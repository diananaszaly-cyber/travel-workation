// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const repoName = 'travel-workation';

// https://astro.build/config
export default defineConfig({
	// deine GitHub Pages Domain
	site: 'https://diananaszaly-cyber.github.io',

	// lokal soll alles normal laufen (ohne /travel-workation),
	// auf GitHub Pages braucht es den Repo-Pfad
	base: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',

	integrations: [mdx(), sitemap()],
});

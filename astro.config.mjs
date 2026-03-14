import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/web-son-xuyen',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

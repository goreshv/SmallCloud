import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Generates static folder index.html files (dist/docs/index.html, dist/cli/index.html)
 * and dist/404.html so that refreshing on any static host or web server (GitHub Pages,
 * Nginx, Apache, Netlify, Vercel, S3) never returns 404.
 */
function spaFallbackPlugin(): Plugin {
  return {
    name: 'spa-fallback-plugin',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexPath)) return;

      const html = fs.readFileSync(indexPath, 'utf-8');

      // 1. Create dist/404.html (for GitHub Pages, GitLab, S3, static hosts)
      fs.writeFileSync(path.join(distDir, '404.html'), html);

      // 2. Create dist/docs/index.html
      const docsDir = path.join(distDir, 'docs');
      if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });
      fs.writeFileSync(path.join(docsDir, 'index.html'), html);

      // 3. Create dist/cli/index.html
      const cliDir = path.join(distDir, 'cli');
      if (!fs.existsSync(cliDir)) fs.mkdirSync(cliDir, { recursive: true });
      fs.writeFileSync(path.join(cliDir, 'index.html'), html);

      // 4. Create dist/guide/index.html
      const guideDir = path.join(distDir, 'guide');
      if (!fs.existsSync(guideDir)) fs.mkdirSync(guideDir, { recursive: true });
      fs.writeFileSync(path.join(guideDir, 'index.html'), html);

      // 5. Create dist/_redirects for Netlify / Cloudflare Pages
      fs.writeFileSync(path.join(distDir, '_redirects'), '/* /index.html 200\n');
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), spaFallbackPlugin()],
  appType: 'spa',
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
});

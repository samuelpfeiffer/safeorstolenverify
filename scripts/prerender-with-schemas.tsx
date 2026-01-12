/**
 * Comprehensive Prerender Script (Bot-Friendly)
 *
 * Generates static HTML for routes in prerender.config.ts by:
 * - Server-rendering the React app into #root (unique HTML per route)
 * - Extracting Helmet tags (title/meta/link/script)
 * - Writing files that match the on-server rewrite convention:
 *     /_prerendered/<request-path>.html
 *   Example:
 *     /blog/complete-vin-guide -> dist/_prerendered/blog/complete-vin-guide.html
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';

import { prerenderRoutes } from '../prerender.config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function routeToOutputPath(prerenderDir: string, route: string) {
  if (route === '/') return path.join(prerenderDir, 'index.html');

  // Preserve nested paths so .htaccess can map /foo/bar -> /_prerendered/foo/bar.html
  const safeRoute = route.replace(/^\//, '');
  return path.join(prerenderDir, `${safeRoute}.html`);
}

function injectIntoRoot(baseHtml: string, appHtml: string) {
  // Replace the entire #root contents with the server-rendered HTML.
  // Works for both:
  //   <div id="root"></div>
  //   <div id="root">...</div>
  return baseHtml.replace(
    /<div\s+id="root"[^>]*>[\s\S]*?<\/div>/,
    `<div id="root">${appHtml}</div>`
  );
}

function stripDuplicateHelmet(baseHtml: string) {
  // Keep the original head as a baseline, but remove the most common duplicates.
  // Helmet output will be injected back in after cleanup.
  return baseHtml
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name="description"[^>]*>/i, '')
    .replace(/<link\s+rel="canonical"[^>]*>/i, '');
}

function injectHelmetIntoHead(baseHtml: string, helmet: any) {
  const title = helmet?.title?.toString?.() ?? '';
  const meta = helmet?.meta?.toString?.() ?? '';
  const link = helmet?.link?.toString?.() ?? '';
  const script = helmet?.script?.toString?.() ?? '';

  const headInjection = `${title}\n${meta}\n${link}\n${script}`.trim();
  if (!headInjection) return baseHtml;

  const cleaned = stripDuplicateHelmet(baseHtml);
  return cleaned.replace(/<\/head>/i, `${headInjection}\n</head>`);
}

async function renderRoute(route: string) {
  const { default: App } = await import('../src/App');

  const helmetContext: { helmet?: any } = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={route}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  return { appHtml, helmet: helmetContext.helmet };
}

async function prerenderAllPages() {
  console.log('🚀 Starting bot prerender (SSR HTML + Helmet)…\n');

  const distDir = path.resolve(__dirname, '../dist');
  const indexPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('❌ Error: dist/index.html not found. Run build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf-8');

  const prerenderDir = path.join(distDir, '_prerendered');
  ensureDir(prerenderDir);

  let successCount = 0;

  for (const route of prerenderRoutes) {
    try {
      const { appHtml, helmet } = await renderRoute(route);

      let html = baseHtml;
      html = injectIntoRoot(html, appHtml);
      html = injectHelmetIntoHead(html, helmet);

      // Add markers for debugging + bot validation
      html = html.replace(
        '<body>',
        `<body>\n    <!-- ✅ BOT PRERENDER: ${route} (${new Date().toISOString()}) -->`
      );

      const outPath = routeToOutputPath(prerenderDir, route);
      ensureDir(path.dirname(outPath));
      fs.writeFileSync(outPath, html);

      successCount += 1;
      console.log(`✅ ${route} → ${path.relative(distDir, outPath)}`);
    } catch (err) {
      console.error(`❌ Failed to prerender ${route}:`, err);
    }
  }

  console.log(`\n🎉 Done. Prerendered ${successCount}/${prerenderRoutes.length} routes.`);
  console.log(`📁 Output: ${path.join(distDir, '_prerendered')}`);
}

prerenderAllPages().catch((error) => {
  console.error('❌ Prerender failed:', error);
  process.exit(1);
});

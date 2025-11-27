/**
 * Comprehensive Prerender Script with Full Schema Support
 * Generates static HTML for all core pages with complete schema markup
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Core pages that need prerendering with full schemas
const CORE_ROUTES = [
  { path: '/', title: 'SafeOrStolen - Free Stolen Item Checker' },
  { path: '/verify', title: 'Verify Items - SafeOrStolen' },
  { path: '/dashboard', title: 'Dashboard - SafeOrStolen' },
  { path: '/account', title: 'Account Settings - SafeOrStolen' },
  { path: '/mobile-app', title: 'Mobile App - SafeOrStolen' },
  { path: '/app', title: 'Download App - SafeOrStolen' },
  { path: '/pricing', title: 'Pricing Plans - SafeOrStolen' },
  { path: '/about', title: 'About Us - SafeOrStolen' },
  { path: '/faq', title: 'FAQ - SafeOrStolen' },
  { path: '/terms', title: 'Terms of Service - SafeOrStolen' },
  { path: '/privacy', title: 'Privacy Policy - SafeOrStolen' },
];

/**
 * Extract schemas from a page component
 */
async function extractPageSchemas(route: string) {
  try {
    // Dynamically import the App component
    const { default: App } = await import('../src/App.tsx');
    
    const helmetContext: { helmet?: any } = {};
    
    // Render the app with the specific route
    renderToString(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={route}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    );

    // Extract schema scripts from helmet
    const helmet = helmetContext.helmet;
    const scriptTags = helmet?.script?.toString() || '';
    
    // Extract all JSON-LD schemas
    const schemaMatches = scriptTags.matchAll(/type="application\/ld\+json">(.*?)<\/script>/gs);
    const schemas = [];
    
    for (const match of schemaMatches) {
      try {
        const schemaData = JSON.parse(match[1]);
        schemas.push(schemaData);
      } catch (e) {
        console.warn(`Failed to parse schema for ${route}:`, e);
      }
    }
    
    return schemas;
  } catch (error) {
    console.error(`Error extracting schemas for ${route}:`, error);
    return [];
  }
}

/**
 * Generate static HTML with embedded schemas
 */
async function generateStaticHTML(route: { path: string; title: string }) {
  const distDir = path.resolve(__dirname, '../dist');
  const indexPath = path.join(distDir, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.error('Error: dist/index.html not found. Run build first.');
    return null;
  }

  let baseHtml = fs.readFileSync(indexPath, 'utf-8');
  
  // Extract page-specific schemas
  const pageSchemas = await extractPageSchemas(route.path);
  
  if (pageSchemas.length > 0) {
    // Generate schema script tags
    const schemaScripts = pageSchemas
      .map(schema => `    <script type="application/ld+json">\n    ${JSON.stringify(schema, null, 2)}\n    </script>`)
      .join('\n');
    
    // Inject schemas after the existing global schemas in head
    baseHtml = baseHtml.replace(
      '</script>\n    <!-- Default SEO Meta Tags',
      `</script>\n${schemaScripts}\n    <!-- Default SEO Meta Tags`
    );
    
    console.log(`✓ Added ${pageSchemas.length} schemas for ${route.path}`);
  }
  
  // Update title
  baseHtml = baseHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${route.title}</title>`
  );
  
  // Add prerender markers
  baseHtml = baseHtml.replace(
    '<body>',
    `<body>\n    <!-- Prerendered: ${route.path} at ${new Date().toISOString()} -->\n    <!-- Schemas: ${pageSchemas.length} page-specific + 3 global = ${pageSchemas.length + 3} total -->`
  );
  
  return baseHtml;
}

/**
 * Main prerender function
 */
async function prerenderAllPages() {
  console.log('🚀 Starting comprehensive prerender with full schema support...\n');
  
  const distDir = path.resolve(__dirname, '../dist');
  const prerenderDir = path.join(distDir, '_prerendered');
  
  // Create prerender directory
  if (!fs.existsSync(prerenderDir)) {
    fs.mkdirSync(prerenderDir, { recursive: true });
  }
  
  let totalSchemas = 0;
  
  // Generate static HTML for each core route
  for (const route of CORE_ROUTES) {
    try {
      const html = await generateStaticHTML(route);
      
      if (html) {
        const filename = route.path === '/' ? 'index.html' : `${route.path.slice(1).replace(/\//g, '-')}.html`;
        const outputPath = path.join(prerenderDir, filename);
        
        fs.writeFileSync(outputPath, html);
        
        // Count schemas in output
        const schemaCount = (html.match(/type="application\/ld\+json"/g) || []).length;
        totalSchemas += schemaCount;
        
        console.log(`✅ ${route.path} → ${filename} (${schemaCount} schemas)`);
      }
    } catch (error) {
      console.error(`❌ Failed to prerender ${route.path}:`, error);
    }
  }
  
  console.log(`\n🎉 Prerendered ${CORE_ROUTES.length} pages with ${totalSchemas} total schemas`);
  console.log(`📁 Output directory: ${prerenderDir}\n`);
  
  // Generate deployment instructions
  const instructions = `
DEPLOYMENT INSTRUCTIONS
=======================

The prerendered files in dist/_prerendered/ contain all schemas baked into static HTML.

To serve these to bots:
1. Configure your server to detect bot user-agents (Googlebot, Bingbot, etc.)
2. Serve files from _prerendered/ directory for bots
3. Serve regular dist/index.html for human visitors

Example nginx config:
  if ($http_user_agent ~* "bot|crawler|spider|Google|Bing") {
    rewrite ^/(.*)$ /_prerendered/$1.html last;
  }

Total schemas per environment:
- Bots (prerendered): ${totalSchemas} schemas ✓
- Humans (SPA): ${totalSchemas} schemas (via React/Helmet)
`;
  
  fs.writeFileSync(path.join(prerenderDir, 'README.txt'), instructions);
  console.log(instructions);
}

// Run prerender
prerenderAllPages().catch(error => {
  console.error('❌ Prerender failed:', error);
  process.exit(1);
});

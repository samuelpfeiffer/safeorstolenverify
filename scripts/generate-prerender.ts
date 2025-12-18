import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes to prerender - ONLY valid routes from AppRoutes.tsx
const routes = [
  '/',
  '/verify',
  '/app',
  '/download',
  '/pricing',
  '/how-it-works',
  '/about',
  '/faq',
  
  // High-value landing pages
  '/imei-checker',
  '/vin-checker',
  '/serial-number-checker',
  '/check-phone',
  '/check-car',
  '/check-bike',
  '/check-laptop',
  '/check-electronics',
  '/firearms-check',
  '/license-plate-lookup',
  
  // Business pages
  '/for-businesses',
  '/for-pawn-shops',
  '/for-dealers',
  
  // Comparison pages
  '/compare',
  '/vs-checkmend',
  '/vs-imeiinfo',
  '/vs-swappa',
  '/vs-carfax',
  '/vs-autocheck',
  
  // Top state VIN pages
  '/california-vin-lookup',
  '/texas-vin-lookup',
  '/florida-vin-lookup',
  '/new-york-vin-lookup',
  '/washington-vin-lookup',
  
  // Blog
  '/blog',
  '/blog/how-to-check-if-phone-stolen',
  '/blog/complete-vin-guide',
  
  // Legal Pages
  '/terms',
  '/privacy',
];

async function generatePrerenderPlaceholders() {
  const distDir = path.resolve(__dirname, '../dist');
  const prerenderDir = path.join(distDir, '_prerendered');

  // Create _prerendered directory
  if (!fs.existsSync(prerenderDir)) {
    fs.mkdirSync(prerenderDir, { recursive: true });
  }

  // Read the built index.html as template
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('Error: dist/index.html not found. Run build first.');
    process.exit(1);
  }

  const indexHtml = fs.readFileSync(indexPath, 'utf-8');

  // Generate prerendered HTML for each route
  routes.forEach(route => {
    const routePath = route === '/' ? 'index' : route.slice(1).replace(/\//g, '-');
    const outputPath = path.join(prerenderDir, `${routePath}.html`);

    // Enhanced HTML with route-specific meta (basic version)
    let prerenderHtml = indexHtml
      .replace('<title>SafeOrStolen', `<title>SafeOrStolen - ${route}`)
      .replace(
        '<meta name="prerender-status-code" content="200">',
        `<meta name="prerender-status-code" content="200">\n    <meta name="prerender-route" content="${route}">`
      );

    // Add a comment for debugging
    prerenderHtml = prerenderHtml.replace(
      '<body>',
      `<body>\n    <!-- Prerendered for bots: ${route} at ${new Date().toISOString()} -->`
    );

    fs.writeFileSync(outputPath, prerenderHtml);
    console.log(`✓ Generated prerender: ${route} → ${outputPath}`);
  });

  console.log(`\n✅ Prerendered ${routes.length} routes to ${prerenderDir}`);
}

generatePrerenderPlaceholders().catch(console.error);

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  images?: Array<{
    loc: string;
    caption?: string;
    title?: string;
  }>;
}

const generateStaticSitemapEntries = (): SitemapEntry[] => [
  // Core Homepage - Maximum Priority
  {
    url: 'https://safeorstolen.com/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: 1.0,
    images: [
      {
        loc: 'https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
        caption: 'Safe Or Stolen - Global IMEI, Serial & VIN Verification Service',
        title: 'Safe Or Stolen Global Verification Service'
      }
    ]
  },

  // PRIMARY VERIFICATION SERVICES
  { url: 'https://safeorstolen.com/stolen-item-checker', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.95 },
  { url: 'https://safeorstolen.com/imei-check', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.95 },
  { url: 'https://safeorstolen.com/vin-verification', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.95 },
  { url: 'https://safeorstolen.com/check-phone', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.9 },
  { url: 'https://safeorstolen.com/check-car', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.9 },
  { url: 'https://safeorstolen.com/check-electronics', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.9 },
  { url: 'https://safeorstolen.com/check-bike', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.9 },
  { url: 'https://safeorstolen.com/firearms-check', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.9 },

  // DEVICE-SPECIFIC PAGES
  { url: 'https://safeorstolen.com/check-iphone-15', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.85 },
  { url: 'https://safeorstolen.com/check-iphone-14', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.85 },
  { url: 'https://safeorstolen.com/check-android-phone', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.85 },
  { url: 'https://safeorstolen.com/check-macbook', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.85 },
  { url: 'https://safeorstolen.com/check-laptop', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.85 },
  { url: 'https://safeorstolen.com/check-camera', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.85 },
  { url: 'https://safeorstolen.com/check-apple-watch', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.85 },
  { url: 'https://safeorstolen.com/check-xbox', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.85 },
  { url: 'https://safeorstolen.com/check-playstation', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.85 },

  // VEHICLE BRANDS
  { url: 'https://safeorstolen.com/check-tesla', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.85 },
  { url: 'https://safeorstolen.com/check-toyota', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.85 },
  { url: 'https://safeorstolen.com/check-honda', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.85 },
  { url: 'https://safeorstolen.com/check-mercedes', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.85 },

  // HOW-TO & GUIDES
  { url: 'https://safeorstolen.com/how-to-check-if-iphone-is-stolen', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.85 },
  { url: 'https://safeorstolen.com/how-to-avoid-buying-stolen-iphone', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.85 },
  { url: 'https://safeorstolen.com/how-to-check-if-car-is-stolen-before-buying', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.85 },
  { url: 'https://safeorstolen.com/how-do-i-check-if-stolen', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.85 },
  { url: 'https://safeorstolen.com/how-to-verify-phone-not-stolen', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.85 },
  { url: 'https://safeorstolen.com/avoid-buying-stolen-goods', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.85 },
  { url: 'https://safeorstolen.com/guides/imei-blacklist-guide', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: 'https://safeorstolen.com/guides/imei-blacklist-explained', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },

  // MAJOR CITIES
  { url: 'https://safeorstolen.com/city/new-york-ny/imei-check', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: 'https://safeorstolen.com/city/new-york-ny/vin-verification', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: 'https://safeorstolen.com/city/new-york-ny/stolen-item-checker', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: 'https://safeorstolen.com/city/los-angeles-ca/imei-check', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: 'https://safeorstolen.com/city/los-angeles-ca/vin-verification', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: 'https://safeorstolen.com/city/los-angeles-ca/stolen-item-checker', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: 'https://safeorstolen.com/city/chicago-il/imei-check', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: 'https://safeorstolen.com/city/chicago-il/vin-verification', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: 'https://safeorstolen.com/city/chicago-il/stolen-item-checker', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: 'https://safeorstolen.com/city/phoenix', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.75 },

  // STATES
  { url: 'https://safeorstolen.com/state/california/stolen-item-checker', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.75 },
  { url: 'https://safeorstolen.com/state/texas/stolen-item-checker', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.75 },
  { url: 'https://safeorstolen.com/state/florida/stolen-item-checker', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.75 },

  // MARKETPLACE INTEGRATIONS
  { url: 'https://safeorstolen.com/offerup-safety-verification', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: 'https://safeorstolen.com/resellers', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },

  // BUSINESS PAGES
  { url: 'https://safeorstolen.com/for-pawn-shops', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: 'https://safeorstolen.com/for-phone-repair-shops', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: 'https://safeorstolen.com/for-used-car-dealers', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },

  // COMPARISONS
  { url: 'https://safeorstolen.com/vs-carfax', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.75 },
  { url: 'https://safeorstolen.com/cheaper-than-carfax', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.75 },

  // CORE BUSINESS PAGES
  { url: 'https://safeorstolen.com/how-it-works', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.9 },
  { url: 'https://safeorstolen.com/pricing', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.9 },
  { url: 'https://safeorstolen.com/for-consumers', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: 'https://safeorstolen.com/for-brands', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },

  // CONTENT & BLOG
  { url: 'https://safeorstolen.com/blog', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: 0.8 },
  { url: 'https://safeorstolen.com/blog/complete-imei-guide-protect-yourself', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: 'https://safeorstolen.com/blog/marketplace-red-flags-protection-guide', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: 'https://safeorstolen.com/blog/safeorstolen-firearms-marketplace-verification', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: 'https://safeorstolen.com/blog/safer-buying-workflow', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: 'https://safeorstolen.com/blog/verification-data-privacy', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: 'https://safeorstolen.com/blog/vin-verification-checklist', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: 'https://safeorstolen.com/blog/what-to-do-if-you-bought-stolen', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: 'https://safeorstolen.com/blog/business-guide-preventing-stolen-goods', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: 'https://safeorstolen.com/blog/complete-verification-guide', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: 'https://safeorstolen.com/blog/industry-insights-2024', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: 'https://safeorstolen.com/blog/enterprise-security', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: 'https://safeorstolen.com/blog/2025-stolen-goods-statistics', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },

  // COMPANY & TRUST PAGES
  { url: 'https://safeorstolen.com/about', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: 'https://safeorstolen.com/contact', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.6 },
  { url: 'https://safeorstolen.com/faq', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.6 },

  // DATABASE PAGES  
  { url: 'https://safeorstolen.com/stolen-items-database', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: 'https://safeorstolen.com/imei-checker', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: 'https://safeorstolen.com/item-categories', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },

  // LEGAL PAGES
  { url: 'https://safeorstolen.com/terms', lastmod: new Date().toISOString().split('T')[0], changefreq: 'yearly', priority: 0.3 },
  { url: 'https://safeorstolen.com/privacy', lastmod: new Date().toISOString().split('T')[0], changefreq: 'yearly', priority: 0.3 },
];

const generateSitemapXML = (entries: SitemapEntry[]): string => {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  const footer = `</urlset>`;

  const urls = entries.map(entry => {
    let urlXml = `  <url>
    <loc>${entry.url}</loc>`;
    
    if (entry.lastmod) {
      urlXml += `
    <lastmod>${entry.lastmod}</lastmod>`;
    }
    
    if (entry.changefreq) {
      urlXml += `
    <changefreq>${entry.changefreq}</changefreq>`;
    }
    
    if (entry.priority) {
      urlXml += `
    <priority>${entry.priority}</priority>`;
    }

    if (entry.images && entry.images.length > 0) {
      entry.images.forEach(image => {
        urlXml += `
    <image:image>
      <image:loc>${image.loc}</image:loc>`;
        if (image.caption) {
          urlXml += `
      <image:caption>${image.caption}</image:caption>`;
        }
        if (image.title) {
          urlXml += `
      <image:title>${image.title}</image:title>`;
        }
        urlXml += `
    </image:image>`;
      });
    }

    urlXml += `
  </url>`;
    
    return urlXml;
  }).join('\n');

  return `${header}\n${urls}\n${footer}`;
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const entries = generateStaticSitemapEntries();
    const xml = generateSitemapXML(entries);

    return new Response(xml, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
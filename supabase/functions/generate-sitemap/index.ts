import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const baseUrl = "https://safeorstolen.com";
    const currentDate = new Date().toISOString().split('T')[0];

    // Define all pages with priority and change frequency
    const pages = [
      { url: '', priority: '1.0', changefreq: 'daily' }, // Homepage
      { url: '/pricing', priority: '0.9', changefreq: 'weekly' },
      { url: '/how-it-works', priority: '0.8', changefreq: 'monthly' },
      { url: '/about', priority: '0.7', changefreq: 'monthly' },
      { url: '/faq', priority: '0.8', changefreq: 'monthly' },
      { url: '/contact', priority: '0.6', changefreq: 'monthly' },
      { url: '/blog', priority: '0.8', changefreq: 'daily' },
      { url: '/for-brands', priority: '0.8', changefreq: 'monthly' },
      { url: '/resource-center', priority: '0.8', changefreq: 'weekly' },
      { url: '/database', priority: '0.7', changefreq: 'monthly' },
      { url: '/terms', priority: '0.5', changefreq: 'yearly' },
      { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
      { url: '/cookies', priority: '0.4', changefreq: 'yearly' },
    ];

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate sitemap" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { action } = await req.json();

    console.log(`Automated Sitemap Generator - Action: ${action}`);

    switch (action) {
      case 'generate_sitemap':
        return await generateCompleteSitemap(supabase);
      case 'update_static_pages':
        return await updateStaticPages(supabase);
      case 'add_dynamic_routes':
        return await addDynamicRoutes(supabase);
      default:
        return await generateCompleteSitemap(supabase);
    }
  } catch (error) {
    console.error('Sitemap generator error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

async function generateCompleteSitemap(supabase: any) {
  console.log('Generating complete sitemap');

  const baseUrl = 'https://safeorstolen.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // Static high-priority pages
  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/stolen-item-checker', priority: 0.9, changefreq: 'weekly' },
    { url: '/check-phone', priority: 0.9, changefreq: 'weekly' },
    { url: '/check-car', priority: 0.9, changefreq: 'weekly' },
    { url: '/imei-checker', priority: 0.9, changefreq: 'weekly' },
    { url: '/vin-verification', priority: 0.9, changefreq: 'weekly' },
    { url: '/serial-number-checker', priority: 0.9, changefreq: 'weekly' },
    { url: '/how-it-works', priority: 0.8, changefreq: 'monthly' },
    { url: '/for-brands', priority: 0.8, changefreq: 'monthly' },
    { url: '/about', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog', priority: 0.7, changefreq: 'weekly' },
    { url: '/faq', priority: 0.6, changefreq: 'monthly' },
    { url: '/contact', priority: 0.6, changefreq: 'monthly' },
  ];

  // Get dynamic blog posts
  const { data: blogPosts } = await supabase
    .from('blog_posts')
    .select('slug, updated_at, created_at')
    .eq('status', 'published');

  // Get dynamic city pages
  const { data: cityPages } = await supabase
    .from('city_pages')
    .select('slug, updated_at')
    .eq('status', 'active');

  // Get verification tools
  const { data: tools } = await supabase
    .from('verification_tools')
    .select('slug, updated_at')
    .eq('active', true);

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach(page => {
    sitemapXml += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Add blog posts
  if (blogPosts) {
    blogPosts.forEach(post => {
      const lastmod = post.updated_at 
        ? new Date(post.updated_at).toISOString().split('T')[0]
        : new Date(post.created_at).toISOString().split('T')[0];
      
      sitemapXml += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });
  }

  // Add city pages
  if (cityPages) {
    cityPages.forEach(city => {
      const lastmod = city.updated_at 
        ? new Date(city.updated_at).toISOString().split('T')[0]
        : currentDate;
      
      sitemapXml += `
  <url>
    <loc>${baseUrl}/city/${city.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });
  }

  // Add verification tools
  if (tools) {
    tools.forEach(tool => {
      const lastmod = tool.updated_at 
        ? new Date(tool.updated_at).toISOString().split('T')[0]
        : currentDate;
      
      sitemapXml += `
  <url>
    <loc>${baseUrl}/tools/${tool.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });
  }

  // Add high-value keyword pages
  const keywordPages = [
    '/check-if-stolen',
    '/stolen-goods-checker',
    '/avoid-buying-stolen-goods',
    '/stolen-property-lookup',
    '/how-to-check-if-item-stolen',
    '/ultimate-guide-not-buying-stolen-goods',
    '/how-to-check-if-anything-is-stolen-before-you-buy'
  ];

  keywordPages.forEach(page => {
    sitemapXml += `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
  });

  sitemapXml += `
</urlset>`;

  // Store sitemap in database for caching
  const { error } = await supabase
    .from('generated_sitemaps')
    .insert({
      sitemap_xml: sitemapXml,
      generated_at: new Date().toISOString(),
      page_count: (sitemapXml.match(/<url>/g) || []).length
    });

  if (error) {
    console.error('Error storing sitemap:', error);
  }

  return new Response(
    sitemapXml,
    { 
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      } 
    }
  );
}

async function updateStaticPages(supabase: any) {
  console.log('Updating static pages in sitemap database');

  const staticPages = [
    {
      url: '/',
      title: 'SafeOrStolen - Free Stolen Item Verification',
      description: 'Check if items are stolen before you buy. Free IMEI, VIN, and serial number verification.',
      priority: 1.0,
      changefreq: 'daily',
      page_type: 'homepage'
    },
    {
      url: '/stolen-item-checker',
      title: 'Free Stolen Item Checker - Verify Before You Buy',
      description: 'Free online tool to check if phones, cars, electronics are stolen. Protect yourself from buying stolen goods.',
      priority: 0.9,
      changefreq: 'weekly',
      page_type: 'tool'
    },
    {
      url: '/check-phone',
      title: 'Check If Phone Is Stolen - Free IMEI Checker',
      description: 'Instantly verify if a phone is stolen using IMEI number. Free stolen phone checker database.',
      priority: 0.9,
      changefreq: 'weekly',
      page_type: 'tool'
    },
    {
      url: '/check-car',
      title: 'Check If Car Is Stolen - Free VIN Verification',
      description: 'Verify car history and check if vehicle is stolen using VIN number. Free stolen car database lookup.',
      priority: 0.9,
      changefreq: 'weekly',
      page_type: 'tool'
    }
  ];

  for (const page of staticPages) {
    await supabase
      .from('site_pages')
      .upsert({
        url: page.url,
        title: page.title,
        description: page.description,
        priority: page.priority,
        change_frequency: page.changefreq,
        page_type: page.page_type,
        status: 'published',
        updated_at: new Date().toISOString()
      }, { onConflict: 'url' });
  }

  return new Response(
    JSON.stringify({ success: true, updated_pages: staticPages.length }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
}

async function addDynamicRoutes(supabase: any) {
  console.log('Adding dynamic routes to sitemap');

  // Generate city-specific pages for major US cities
  const majorCities = [
    'new-york', 'los-angeles', 'chicago', 'houston', 'phoenix', 
    'philadelphia', 'san-antonio', 'san-diego', 'dallas', 'san-jose',
    'austin', 'jacksonville', 'fort-worth', 'columbus', 'charlotte',
    'san-francisco', 'indianapolis', 'seattle', 'denver', 'washington',
    'boston', 'el-paso', 'detroit', 'nashville', 'portland',
    'memphis', 'oklahoma-city', 'las-vegas', 'louisville', 'baltimore',
    'milwaukee', 'albuquerque', 'tucson', 'fresno', 'mesa',
    'sacramento', 'atlanta', 'kansas-city', 'colorado-springs', 'omaha',
    'raleigh', 'miami', 'long-beach', 'virginia-beach', 'oakland',
    'minneapolis', 'tulsa', 'tampa', 'arlington', 'new-orleans'
  ];

  for (const city of majorCities) {
    const cityName = city.replace('-', ' ').split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    await supabase
      .from('city_pages')
      .upsert({
        slug: city,
        city_name: cityName,
        title: `Stolen Item Checker ${cityName} - Free Verification`,
        description: `Check if items are stolen in ${cityName}. Free IMEI, VIN, serial number verification for ${cityName} residents.`,
        status: 'active',
        updated_at: new Date().toISOString()
      }, { onConflict: 'slug' });
  }

  // Add verification tool pages
  const tools = [
    {
      slug: 'imei-checker',
      name: 'IMEI Checker',
      description: 'Check if phone is stolen using IMEI number'
    },
    {
      slug: 'vin-checker', 
      name: 'VIN Checker',
      description: 'Verify vehicle history and check if car is stolen'
    },
    {
      slug: 'serial-checker',
      name: 'Serial Number Checker', 
      description: 'Check if electronics are stolen using serial numbers'
    }
  ];

  for (const tool of tools) {
    await supabase
      .from('verification_tools')
      .upsert({
        slug: tool.slug,
        name: tool.name,
        description: tool.description,
        active: true,
        updated_at: new Date().toISOString()
      }, { onConflict: 'slug' });
  }

  return new Response(
    JSON.stringify({ 
      success: true, 
      cities_added: majorCities.length,
      tools_added: tools.length 
    }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
}
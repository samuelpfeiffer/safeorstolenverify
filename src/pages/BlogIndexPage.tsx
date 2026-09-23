import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Clock, Tag, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

// Static articles for SEO (always shown as fallback + featured)
const staticArticles = [
  {
    title: 'Best Stolen Item Checkers 2026: Complete Comparison Guide',
    slug: 'best-stolen-item-checkers-2026',
    excerpt: 'Compare popular item verification services. SafeOrStolen offers a unique approach to checking phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place.',
    category: '2026 Guides',
    readTime: '12 min',
    keywords: ['stolen item checker', 'verification service comparison', 'SafeOrStolen alternative'],
    featured: true
  },
  {
    title: 'Carfax and Free VIN Alternatives: Complete 2026 Guide',
    slug: 'carfax-vs-free-vin-alternatives',
    excerpt: 'Compare Carfax ($44.99) to free VIN check alternatives in 2026. Learn which vehicle history service is best for checking if a car is stolen.',
    category: 'Vehicle Safety',
    readTime: '10 min',
    keywords: ['carfax alternative', 'free vin check 2026', 'carfax safeorstolen comparison']
  },
  {
    title: 'How to Check if a Phone is Stolen Before Buying in 2026',
    slug: 'how-to-check-if-phone-stolen',
    excerpt: 'Complete 2026 guide to verifying smartphone legitimacy with IMEI checks, carrier blacklist verification, and red flags when buying used phones.',
    category: 'Buying Guides',
    readTime: '8 min',
    keywords: ['phone verification 2026', 'IMEI check', 'stolen phone checker']
  },
  {
    title: 'Verify Stolen Items From Your Phone (2026)',
    slug: 'checkmend-has-no-app',
    excerpt: 'Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place.',
    category: 'Mobile App',
    readTime: '6 min',
    keywords: ['stolen item app', 'checkmend alternative', 'mobile verification']
  },
  {
    title: 'How AI is Transforming Stolen Item Detection in 2026',
    slug: 'ai-stolen-item-detection-2026',
    excerpt: 'How ChatGPT, Claude, and LLMs are revolutionizing stolen goods verification. Learn how AI-powered verification catches what humans miss.',
    category: 'AI & Technology',
    readTime: '9 min',
    keywords: ['AI verification', 'ChatGPT stolen items', 'machine learning detection']
  },
  {
    title: 'Complete VIN Guide: Everything You Need to Know',
    slug: 'complete-vin-guide',
    excerpt: 'Comprehensive guide to Vehicle Identification Numbers - what they reveal, how to decode them, and why they\'re critical for avoiding stolen vehicles.',
    category: 'Vehicle Safety',
    readTime: '12 min',
    keywords: ['VIN decoder', 'vehicle history', 'car verification']
  },
  {
    title: 'Facebook Marketplace Safety Guide 2026',
    slug: 'facebook-marketplace-scams',
    excerpt: 'How to avoid scams and stolen goods on Facebook Marketplace in 2026. Verification tips, red flags, and how to use SafeOrStolen before buying.',
    category: 'Marketplace Safety',
    readTime: '10 min',
    keywords: ['facebook marketplace safety', 'avoid scams', 'verify items']
  },
  {
    title: 'Ultimate Marketplace Buyer\'s Guide',
    slug: 'ultimate-marketplace-buyers-guide',
    excerpt: 'Protect yourself on eBay, Facebook Marketplace, OfferUp, and Craigslist with this comprehensive safety guide for secondhand purchases.',
    category: 'Marketplace Safety',
    readTime: '15 min',
    keywords: ['marketplace safety', 'buying guide', 'secondhand items']
  },
  {
    title: 'Complete IMEI Guide: Protect Yourself',
    slug: 'complete-imei-guide-protect-yourself',
    excerpt: 'Everything you need to know about IMEI numbers, blacklist checks, and protecting yourself from buying stolen or blacklisted smartphones.',
    category: 'Phone Security',
    readTime: '10 min',
    keywords: ['IMEI lookup', 'phone blacklist', 'mobile security']
  },
  {
    title: 'Firearm Serial Number Verification Guide',
    slug: 'firearm-serial-number-verification',
    excerpt: 'How to verify firearm serial numbers legally and safely. Check if guns are stolen before purchasing from private sellers.',
    category: 'Firearms Safety',
    readTime: '8 min',
    keywords: ['firearm verification', 'gun serial check', 'stolen firearm']
  },
  {
    title: 'Bicycle Stolen Serial Number Check Guide',
    slug: 'bicycle-stolen-serial-number-check',
    excerpt: 'Complete guide to finding and checking bicycle serial numbers. Verify if a bike is stolen before buying from Craigslist or marketplace.',
    category: 'Buying Guides',
    readTime: '7 min',
    keywords: ['bicycle serial number', 'bike stolen check', 'verify bike']
  },
  {
    title: 'Pawn Shop Stolen Item Verification',
    slug: 'pawn-shop-stolen-item-verification',
    excerpt: 'How pawn shops use SafeOrStolen to verify items aren\'t stolen. Compliance guide for resale businesses and secondhand stores.',
    category: 'Business',
    readTime: '9 min',
    keywords: ['pawn shop compliance', 'resale verification', 'business tools']
  },
  {
    title: 'PS5 Stolen Check Guide: Verify Gaming Consoles',
    slug: 'ps5-stolen-check-guide',
    excerpt: 'How to check if a PS5, Xbox, or Nintendo Switch is stolen before buying. Serial number verification for gaming consoles.',
    category: 'Electronics Safety',
    readTime: '6 min',
    keywords: ['PS5 stolen check', 'gaming console verification', 'Xbox check']
  },
  {
    title: 'How to Check if iPhone is Stolen',
    slug: 'how-to-check-if-iphone-stolen',
    excerpt: 'Step-by-step guide to verify any iPhone isn\'t stolen or blacklisted. IMEI check, Activation Lock, and SafeOrStolen verification.',
    category: 'Phone Security',
    readTime: '7 min',
    keywords: ['iPhone stolen check', 'IMEI verification', 'Apple verification']
  },
  {
    title: 'Scammer Tactics Exposed: Protect Yourself',
    slug: 'scammer-tactics-exposed',
    excerpt: 'Learn the most common scammer tactics used in secondhand marketplaces and how to protect yourself from fraud and stolen goods.',
    category: 'Fraud Prevention',
    readTime: '10 min',
    keywords: ['scam prevention', 'fraud tactics', 'marketplace scams']
  },
  {
    title: 'Theft Trends Report 2024',
    slug: 'theft-trends-report-2024',
    excerpt: 'Comprehensive analysis of stolen goods trends, most targeted items, theft statistics, and what it means for secondhand buyers.',
    category: 'Industry Insights',
    readTime: '9 min',
    keywords: ['theft statistics', 'stolen goods trends', 'crime data']
  },
  {
    title: 'Real User Stories: How SafeOrStolen Helped',
    slug: 'real-user-stories',
    excerpt: 'True stories from buyers and sellers who avoided scams, financial loss, and legal trouble using SafeOrStolen verification.',
    category: 'Case Studies',
    readTime: '8 min',
    keywords: ['success stories', 'testimonials', 'user experiences']
  }
];

const categories = [
  'All Articles',
  'Buying Guides',
  'Vehicle Safety',
  'Phone Security',
  'Marketplace Safety',
  'Fraud Prevention',
  'Technology',
  'Industry Insights',
  'Case Studies',
  'Electronics Safety',
  'Verification'
];

// Strip HTML tags from content for clean text display
function stripHtml(html: string | null): string {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim();
}

// Calculate reading time from content length
function calculateReadTime(content: string | null): string {
  if (!content) return '5 min';
  const words = stripHtml(content).split(/\s+/).length;
  const minutes = Math.max(3, Math.ceil(words / 200));
  return `${minutes} min`;
}

export default function BlogIndexPage() {
  // Fetch dynamic blog posts from database
  const { data: dbArticles, isLoading } = useQuery({
    queryKey: ['blog-posts-index'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, meta_keywords, content, reading_time, published_at')
        .eq('status', 'published')
        .order('published_at', { ascending: false })
        .limit(50);
      
      if (error) {
        console.error('Error fetching blog posts:', error);
        return [];
      }
      return data || [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });

  // Combine static and dynamic articles, removing duplicates by slug
  const staticSlugs = new Set(staticArticles.map(a => a.slug));
  const dynamicArticles = (dbArticles || [])
    .filter(a => !staticSlugs.has(a.slug))
    .map(article => ({
      title: article.title,
      slug: article.slug,
      excerpt: stripHtml(article.excerpt) || stripHtml(article.content)?.substring(0, 200) || article.title,
      category: 'Latest Articles',
      readTime: article.reading_time ? `${article.reading_time} min` : calculateReadTime(article.content),
      keywords: article.meta_keywords?.split(',').map((k: string) => k.trim()).slice(0, 3) || ['verification', 'safety'],
      fromDb: true
    }));

  // Show static articles first, then dynamic ones
  const allArticles = [...staticArticles, ...dynamicArticles];
  const featuredArticle = staticArticles[2]; // "How to check if phone stolen"

  return (
    <>
      <PageSEO
        title="Blog - Stolen Item Guides & Safety Tips"
        description="Expert guides on verifying secondhand items before buying. Avoid stolen goods on marketplaces. IMEI, VIN, serial number tips from SafeOrStolen."
        keywords="stolen item checker, verification guides, marketplace safety, IMEI lookup, VIN checks, buying guides, SafeOrStolen alternative, vehicle history alternative, mobile app verification"
        canonical="/blog"
        type="website"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'SafeOrStolen Blog - Stolen Item Verification Guides 2026',
          description: 'Expert 2026 guides on verifying secondhand items and avoiding stolen goods. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place.',
          url: 'https://safeorstolen.com/blog',
          publisher: {
            '@type': 'Organization',
            name: 'SafeOrStolen',
            logo: {
              '@type': 'ImageObject',
              url: 'https://safeorstolen.com/sos-logo.png'
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://safeorstolen.com/blog'
          }
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10 pt-20">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              SafeOrStolen Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expert guides, safety tips, and industry insights to help you verify secondhand items and avoid stolen goods
            </p>
            {dbArticles && dbArticles.length > 0 && (
              <p className="text-sm text-muted-foreground mt-4">
                {allArticles.length} articles available
              </p>
            )}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-secondary/10 hover:bg-secondary/20 text-foreground transition-colors border border-secondary/20"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          <Card className="mb-12 overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background to-muted/10">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">
                  FEATURED
                </span>
                <span className="text-sm text-muted-foreground">{featuredArticle.category}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors">
                <Link to={`/blog/${featuredArticle.slug}`}>
                  {featuredArticle.title}
                </Link>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredArticle.readTime} read
                  </span>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    {featuredArticle.keywords.slice(0, 2).join(', ')}
                  </div>
                </div>
                <Link
                  to={`/blog/${featuredArticle.slug}`}
                  className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Loading State */}
          {isLoading && (
            <div className="flex items-center justify-center py-8 gap-2 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Loading more articles...</span>
            </div>
          )}

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles.map((article) => (
              <Card key={article.slug} className="overflow-hidden hover:border-primary/40 transition-all hover:shadow-lg group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 rounded-[0.25rem] bg-secondary/10 text-secondary text-xs font-bold">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-1">
                      {article.keywords.slice(0, 2).map((keyword) => (
                        <span key={keyword} className="text-xs px-2 py-1 rounded-[0.25rem] bg-muted/50 text-muted-foreground">
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Start Verifying Items Today</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Use SafeOrStolen's powerful verification tools to check any secondhand item in seconds
                </p>
                <Link to="/verify">
                  <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity text-lg">
                    Verify an Item Now
                  </button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

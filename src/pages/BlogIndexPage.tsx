import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const blogArticles = [
  {
    title: 'How to Check if a Phone is Stolen Before Buying',
    slug: 'how-to-check-if-phone-is-stolen',
    excerpt: 'Complete guide to verifying smartphone legitimacy with IMEI checks, carrier blacklist verification, and red flags to watch for when buying used phones.',
    category: 'Buying Guides',
    readTime: '8 min',
    keywords: ['phone verification', 'IMEI check', 'stolen phone']
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
    title: 'Complete Verification Guide',
    slug: 'complete-verification-guide',
    excerpt: 'Master guide to verifying any secondhand item - from phones to vehicles to electronics. Learn our comprehensive verification methodology.',
    category: 'Verification',
    readTime: '20 min',
    keywords: ['item verification', 'stolen goods check', 'authentication']
  },
  {
    title: 'Protect Yourself Buying Used Electronics',
    slug: 'protect-yourself-buying-used-electronics',
    excerpt: 'Essential tips for safely buying secondhand laptops, tablets, gaming consoles, and other electronics without getting scammed.',
    category: 'Electronics Safety',
    readTime: '8 min',
    keywords: ['electronics verification', 'used tech', 'buyer protection']
  },
  {
    title: 'Data Source Credibility in Stolen Goods Verification',
    slug: 'data-source-credibility-stolen-goods-verification',
    excerpt: 'How SafeOrStolen verifies data sources, ensures accuracy, and maintains the most comprehensive stolen items database globally.',
    category: 'Technology',
    readTime: '7 min',
    keywords: ['data accuracy', 'verification sources', 'database reliability']
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
    title: 'Phone Verification Guide: Step-by-Step',
    slug: 'phone-verification-guide',
    excerpt: 'Step-by-step walkthrough for verifying any smartphone before purchase using IMEI, carrier checks, and SafeOrStolen verification.',
    category: 'Buying Guides',
    readTime: '6 min',
    keywords: ['phone authentication', 'smartphone verification', 'mobile check']
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
    title: 'Our Verification Methodology',
    slug: 'verification-methodology',
    excerpt: 'Detailed breakdown of SafeOrStolen\'s multi-layered verification process, AI analysis, and how we achieve 95%+ accuracy rates.',
    category: 'Technology',
    readTime: '11 min',
    keywords: ['verification process', 'AI verification', 'methodology']
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

export default function BlogIndexPage() {
  return (
    <>
      <PageSEO
        title="SafeOrStolen Blog - Verification Guides, Safety Tips & Industry Insights"
        description="Expert guides on verifying secondhand items, avoiding stolen goods, marketplace safety tips, and theft prevention strategies. Learn how to protect yourself when buying used items."
        keywords="verification guides, stolen goods prevention, marketplace safety, IMEI verification, VIN checks, buying guides, fraud prevention"
        canonical="https://safeorstolen.com/blog"
        type="website"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'SafeOrStolen Blog',
          description: 'Expert guides on verifying secondhand items and avoiding stolen goods',
          publisher: {
            '@type': 'Organization',
            name: 'SafeOrStolen',
            logo: {
              '@type': 'ImageObject',
              url: 'https://safeorstolen.com/sos-logo.png'
            }
          }
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-background via-background to-sos-dark/5">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              SafeOrStolen Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expert guides, safety tips, and industry insights to help you verify secondhand items and avoid stolen goods
            </p>
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
          <Card className="mb-12 overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background to-sos-dark/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">
                  FEATURED
                </span>
                <span className="text-sm text-muted-foreground">{blogArticles[2].category}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors">
                <Link to={`/blog/${blogArticles[2].slug}`}>
                  {blogArticles[2].title}
                </Link>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {blogArticles[2].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blogArticles[2].readTime} read
                  </span>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    {blogArticles[2].keywords.slice(0, 2).join(', ')}
                  </div>
                </div>
                <Link
                  to={`/blog/${blogArticles[2].slug}`}
                  className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((article) => (
              <Card key={article.slug} className="overflow-hidden hover:border-primary/40 transition-all hover:shadow-lg group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 rounded bg-secondary/10 text-secondary text-xs font-bold">
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
                        <span key={keyword} className="text-xs px-2 py-1 rounded bg-muted/50 text-muted-foreground">
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
                  <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-lg">
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
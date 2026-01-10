import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const blogArticles = [
  // HIGH-PRIORITY: Gun Serial Number Content (Top GSC queries)
  {
    title: 'Gun Serial Number Lookup Free: Complete 2026 Guide',
    slug: 'gun-serial-number-lookup-free',
    excerpt: 'Free gun serial number lookup tools and databases. Check if a firearm is stolen using NCIC, ATF, and state databases. Verify before buying from private sellers.',
    category: 'Firearm Verification',
    readTime: '12 min',
    keywords: ['gun serial number lookup', 'gun serial number lookup free', 'firearm verification']
  },
  {
    title: 'FBI Lost and Stolen Gun Serial Number Database: How to Check',
    slug: 'fbi-lost-stolen-gun-database',
    excerpt: 'Access the FBI NCIC stolen gun database. Learn how to check if a firearm is stolen, what the NCIC contains, and free alternatives for private gun sales.',
    category: 'Firearm Verification',
    readTime: '10 min',
    keywords: ['fbi stolen gun database', 'national stolen gun database', 'ncic gun check']
  },
  {
    title: 'How to Check if a Gun is Stolen: Serial Number Verification Guide',
    slug: 'how-to-check-if-gun-stolen',
    excerpt: 'Step-by-step guide to verify if a firearm is stolen before buying. Check gun serial numbers against stolen databases, state records, and law enforcement systems.',
    category: 'Firearm Verification',
    readTime: '15 min',
    keywords: ['check if gun stolen', 'stolen gun check', 'verify gun serial number']
  },
  {
    title: 'Stolen Gun Database Search: Free Tools and Methods',
    slug: 'stolen-gun-database-search',
    excerpt: 'How to search stolen gun databases for free. Compare NCIC, state databases, and third-party services. Protect yourself from buying stolen firearms.',
    category: 'Firearm Verification',
    readTime: '11 min',
    keywords: ['stolen gun database', 'search stolen firearms', 'gun theft check']
  },
  // Existing high-performing articles
  {
    title: 'Carfax vs Free VIN Alternatives: Complete 2026 Guide',
    slug: 'carfax-vs-free-vin-alternatives',
    excerpt: 'Compare Carfax ($44.99) to free VIN check alternatives. Learn which vehicle history service is best for checking if a car is stolen. Free VIN theft checks available.',
    category: 'Vehicle Safety',
    readTime: '10 min',
    keywords: ['carfax alternative', 'free vin check', 'carfax vs safeorstolen']
  },
  {
    title: 'Arizona TheftAZ: Official Stolen Vehicle Database Guide',
    slug: 'arizona-theftaz-guide',
    excerpt: 'Complete guide to using Arizona TheftAZ (theftaz.gov) for stolen vehicle checks. How it compares to SafeOrStolen for AZ car buyers.',
    category: 'Vehicle Safety',
    readTime: '8 min',
    keywords: ['theftaz', 'arizona stolen vehicle', 'theftaz.gov']
  },
  {
    title: 'How to Check if a Phone is Stolen Before Buying',
    slug: 'how-to-check-if-phone-stolen',
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
    title: 'Free Stolen Vehicle Check: How to Verify Before Buying',
    slug: 'free-stolen-vehicle-check',
    excerpt: 'Free ways to check if a car is stolen. Compare VIN lookup tools, police databases, and when to use paid services for comprehensive vehicle history.',
    category: 'Vehicle Safety',
    readTime: '9 min',
    keywords: ['free stolen vehicle check', 'stolen car lookup', 'vin check free']
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
    title: 'Firearm Serial Number Checker: Free Online Tools',
    slug: 'firearm-serial-number-checker',
    excerpt: 'Free firearm serial number checker tools. Verify guns before buying from private sellers. Access stolen weapon databases and avoid legal trouble.',
    category: 'Firearm Verification',
    readTime: '10 min',
    keywords: ['firearm serial number checker', 'gun check online', 'weapon verification']
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
    title: 'PS5 Stolen Check: How to Verify PlayStation Serial Numbers',
    slug: 'ps5-stolen-check-guide',
    excerpt: 'How to check if a PS5 is stolen before buying. Sony serial number verification, what to look for, and protecting yourself from stolen gaming consoles.',
    category: 'Electronics Safety',
    readTime: '7 min',
    keywords: ['ps5 stolen check', 'playstation serial number', 'sony verification']
  },
  {
    title: 'Stolen Bike Serial Number Check: Protect Your Purchase',
    slug: 'stolen-bike-serial-number-check',
    excerpt: 'How to check if a bicycle is stolen using serial numbers. Bike Index, police databases, and verification tools for used bike purchases.',
    category: 'Verification',
    readTime: '8 min',
    keywords: ['stolen bike check', 'bicycle serial number', 'bike theft verification']
  },
  {
    title: 'Rolex Serial Number Check: Avoid Stolen Luxury Watches',
    slug: 'rolex-serial-number-check-stolen',
    excerpt: 'How to verify Rolex serial numbers and check if a watch is stolen. Authentication tips for buying luxury watches from private sellers.',
    category: 'Luxury Goods',
    readTime: '9 min',
    keywords: ['rolex serial number check', 'stolen watch check', 'luxury watch verification']
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
  'Firearm Verification',
  'Vehicle Safety',
  'Phone Security',
  'Buying Guides',
  'Marketplace Safety',
  'Electronics Safety',
  'Luxury Goods',
  'Fraud Prevention',
  'Technology',
  'Verification',
  'Industry Insights',
  'Case Studies'
];

export default function BlogIndexPage() {
  return (
    <>
      <PageSEO
        title="Gun Serial Number Lookup, IMEI Check, VIN Verification Guides | SafeOrStolen Blog"
        description="Free gun serial number lookup guides, IMEI checker tutorials, VIN verification tips. Learn how to check if items are stolen before buying. Expert guides for firearms, phones, vehicles."
        keywords="gun serial number lookup free, stolen gun database, IMEI check, VIN verification, firearm serial number checker, stolen vehicle check, stolen phone check"
        canonical="/blog"
        type="website"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'SafeOrStolen Blog - Verification Guides',
          description: 'Free gun serial number lookup guides, IMEI checker tutorials, VIN verification tips, and stolen item prevention guides',
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
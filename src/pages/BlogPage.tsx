import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const articles = [
    {
      slug: 'how-to-check-if-phone-stolen-imei',
      title: 'How to Check if a Phone is Stolen Using IMEI Number',
      excerpt: 'Complete guide to verifying if a smartphone is stolen before buying. Learn the step-by-step process to check IMEI numbers and protect yourself from buying stolen devices.',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'IMEI Verification',
      keywords: ['IMEI check', 'stolen phone', 'buy used phone', 'phone verification']
    },
    {
      slug: 'vin-number-verification-guide',
      title: 'VIN Number Verification: Complete Buyer\'s Guide 2025',
      excerpt: 'Everything you need to know about checking VIN numbers when buying used cars, motorcycles, or vehicles. Avoid buying stolen or salvaged vehicles.',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'VIN Verification',
      keywords: ['VIN check', 'stolen car', 'vehicle history', 'used car buying']
    },
    {
      slug: 'marketplace-scam-prevention',
      title: '10 Red Flags When Buying on Facebook Marketplace & Craigslist',
      excerpt: 'Protect yourself from marketplace scams. Learn the warning signs of stolen goods and how to verify items before purchasing.',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'Marketplace Safety',
      keywords: ['marketplace scams', 'Facebook marketplace safety', 'Craigslist tips', 'avoid scams']
    },
    {
      slug: 'serial-number-verification-guide',
      title: 'Serial Number Verification for Electronics & Tools',
      excerpt: 'Learn how to verify serial numbers on laptops, cameras, power tools, and other expensive items to ensure they\'re not stolen.',
      date: '2024-12-28',
      readTime: '5 min read',
      category: 'Serial Verification',
      keywords: ['serial number check', 'stolen electronics', 'tool verification', 'laptop check']
    },
    {
      slug: 'cost-of-buying-stolen-goods',
      title: 'The Hidden Costs of Buying Stolen Goods: What You Need to Know',
      excerpt: 'Buying stolen goods isn\'t just illegal - it can cost you thousands. Learn about the legal and financial risks.',
      date: '2024-12-20',
      readTime: '8 min read',
      category: 'Legal Guide',
      keywords: ['buying stolen goods', 'legal consequences', 'receiving stolen property', 'buyer beware']
    },
    {
      slug: 'best-imei-checker-tools',
      title: 'Best IMEI Checker Tools Compared: Free vs Paid Services',
      excerpt: 'Comprehensive comparison of IMEI verification services. Find out which tool offers the best protection for your budget.',
      date: '2024-12-15',
      readTime: '10 min read',
      category: 'Tool Comparison',
      keywords: ['IMEI checker comparison', 'best IMEI tool', 'phone verification service', 'IMEI lookup']
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Safe or Stolen Blog",
    "description": "Expert guides on verifying IMEI, VIN, and serial numbers to avoid buying stolen goods",
    "url": "https://safeorstolen.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Safe or Stolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/logo.png"
      }
    },
    "blogPost": articles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt,
      "datePublished": article.date,
      "url": `https://safeorstolen.com/blog/${article.slug}`,
      "author": {
        "@type": "Organization",
        "name": "Safe or Stolen"
      },
      "keywords": article.keywords.join(', ')
    }))
  };

  return (
    <>
      <PageSEO
        title="Expert Guides on Avoiding Stolen Goods | Safe or Stolen Blog"
        description="Learn how to verify IMEI, VIN, and serial numbers. Expert guides on marketplace safety, scam prevention, and buying used items securely."
        keywords="IMEI verification guide, VIN check tutorial, avoid stolen goods, marketplace safety tips, serial number verification"
        canonical="/blog"
        structuredData={[structuredData]}
      />

      <div className="min-h-screen bg-gradient-to-b from-black via-[#3D2817] to-[#FF8C00] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Safe or Stolen Blog
            </h1>
            <p className="text-xl text-white/80">
              Expert guides to protect yourself from buying stolen goods and marketplace scams
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {articles.map((article) => (
              <Card key={article.slug} className="hover:shadow-lg transition-shadow bg-card border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-2 text-foreground">{article.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button asChild variant="outline" className="group border-primary/20">
                    <Link to={`/blog/${article.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto border-primary/20 bg-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Stay Protected</h2>
                <p className="text-muted-foreground mb-6">
                  Subscribe to get the latest guides on verifying items and staying safe in online marketplaces
                </p>
                <Button size="lg" asChild>
                  <Link to="/auth?tab=signup">Get Started Free</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

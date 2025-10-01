import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageSEO } from '@/components/seo/PageSEO';
import { ComparisonSchema } from '@/components/seo/ComparisonSchema';
import { Link } from 'react-router-dom';
import { Check, X, Star, TrendingUp, Shield, Zap, DollarSign } from 'lucide-react';

const VsCheckMendPage = () => {
  const comparisonData = [
    {
      category: 'Pricing',
      safeorstolen: { text: '$1.00 per check or $7.99/month unlimited', icon: Check, highlight: true },
      checkmend: { text: '$2.99+ per check', icon: X }
    },
    {
      category: 'Free Checks',
      safeorstolen: { text: '4 free verifications', icon: Check, highlight: true },
      checkmend: { text: 'No free checks', icon: X }
    },
    {
      category: 'Database Coverage',
      safeorstolen: { text: '50M+ global records', icon: Check, highlight: true },
      checkmend: { text: '30M+ records (UK focused)', icon: Check }
    },
    {
      category: 'Check Speed',
      safeorstolen: { text: '<30 seconds', icon: Check, highlight: true },
      checkmend: { text: '1-2 minutes', icon: Check }
    },
    {
      category: 'Mobile App',
      safeorstolen: { text: 'iOS & Android available', icon: Check, highlight: true },
      checkmend: { text: 'Web only', icon: X }
    },
    {
      category: 'Item Types',
      safeorstolen: { text: 'Phones, cars, electronics, tools, bikes, more', icon: Check, highlight: true },
      checkmend: { text: 'Phones, tablets, some electronics', icon: Check }
    },
    {
      category: 'API Access',
      safeorstolen: { text: 'Available on Business plan', icon: Check, highlight: true },
      checkmend: { text: 'Enterprise only', icon: X }
    },
    {
      category: 'Bulk Checking',
      safeorstolen: { text: 'Up to 50 items at once', icon: Check, highlight: true },
      checkmend: { text: 'Limited', icon: X }
    },
    {
      category: 'Customer Support',
      safeorstolen: { text: '24/7 email + priority support', icon: Check, highlight: true },
      checkmend: { text: 'Business hours only', icon: Check }
    },
    {
      category: 'Money-Back Guarantee',
      safeorstolen: { text: '30-day guarantee', icon: Check, highlight: true },
      checkmend: { text: 'No refunds', icon: X }
    }
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Safe or Stolen vs CheckMend: Which Verification Service is Better?",
      "description": "Comprehensive comparison of Safe or Stolen and CheckMend for IMEI and stolen goods verification",
      "author": {
        "@type": "Organization",
        "name": "Safe or Stolen"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Safe or Stolen",
        "logo": {
          "@type": "ImageObject",
          "url": "https://safeorstolen.com/logo.png"
        }
      },
      "datePublished": "2025-01-01"
    }
  ];

  return (
    <>
      <PageSEO
        title="Safe or Stolen vs CheckMend: Comparison 2025 | Which is Better?"
        description="Compare Safe or Stolen and CheckMend for IMEI verification. See pricing, features, and why 25,000+ users chose Safe or Stolen over CheckMend."
        keywords="safe or stolen vs checkmend, checkmend alternative, imei checker comparison, best stolen goods verifier, checkmend vs safe or stolen"
        canonical="/vs-checkmend"
        structuredData={structuredData}
      />
      <ComparisonSchema
        competitorName="CheckMend"
        ourProduct={{
          name: "Safe or Stolen",
          price: "1.00",
          features: ["4 Free Checks", "50M+ Records", "<30s Speed", "Mobile App", "API Access", "Bulk Checking"],
          rating: 4.9,
          reviewCount: 1250
        }}
        theirProduct={{
          name: "CheckMend",
          price: "2.99",
          features: ["30M+ Records", "Web Only", "UK Focused"],
          rating: 4.2
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4" variant="outline">Updated for 2025</Badge>
            <h1 className="text-5xl font-bold mb-6">
              Safe or Stolen vs CheckMend
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Independent comparison of features, pricing, and accuracy. See why thousands 
              of buyers switched from CheckMend to Safe or Stolen.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/auth?tab=signup">Try Safe or Stolen Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <DollarSign className="h-12 w-12 mx-auto mb-4 text-green-500" />
                  <h3 className="font-bold text-2xl mb-2">50% Cheaper</h3>
                  <p className="text-muted-foreground">Save money with lower per-check costs</p>
                </CardContent>
              </Card>
              <Card className="text-center border-primary border-2">
                <CardContent className="pt-6">
                  <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-2xl mb-2">2x Faster</h3>
                  <p className="text-muted-foreground">Results in {"<"}30 seconds vs 1-2 minutes</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="font-bold text-2xl mb-2">More Coverage</h3>
                  <p className="text-muted-foreground">20M+ more records globally</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Feature-by-Feature Comparison</h2>
              
              <Card>
                <CardHeader>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div></div>
                    <div>
                      <Badge className="bg-primary">Recommended</Badge>
                      <h3 className="text-xl font-bold mt-2">Safe or Stolen</h3>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-muted-foreground ml-1">(4.9/5)</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mt-6">CheckMend</h3>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        {[1,2,3,4].map(i => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                        <span className="text-sm text-muted-foreground ml-1">(4.2/5)</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {comparisonData.map((row, index) => (
                    <div key={index} className={`grid grid-cols-3 gap-4 py-4 ${index !== comparisonData.length - 1 ? 'border-b' : ''}`}>
                      <div className="font-semibold flex items-center">{row.category}</div>
                      <div className={`flex items-center gap-2 ${row.safeorstolen.highlight ? 'bg-green-50 dark:bg-green-950/20 p-2 rounded' : ''}`}>
                        <row.safeorstolen.icon className={`h-5 w-5 flex-shrink-0 ${row.safeorstolen.icon === Check ? 'text-green-500' : 'text-red-500'}`} />
                        <span className="text-sm">{row.safeorstolen.text}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <row.checkmend.icon className={`h-5 w-5 flex-shrink-0 ${row.checkmend.icon === Check ? 'text-green-500' : 'text-red-500'}`} />
                        <span className="text-sm">{row.checkmend.text}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* User Reviews */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What Switchers Say</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      "Switched from CheckMend after they charged me $3 per check. Safe or Stolen 
                      gives me unlimited checks for $7.99/month. Saved hundreds already!"
                    </p>
                    <p className="font-semibold">- Sarah M., eBay Seller</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      "CheckMend's UK focus didn't help me buying phones in the US. Safe or Stolen 
                      checks global databases and found stolen devices CheckMend missed."
                    </p>
                    <p className="font-semibold">- Mike T., Phone Flipper</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-orange-500/10">
          <div className="container mx-auto px-4 text-center">
            <TrendingUp className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">
              Join 25,000+ Smart Buyers Who Switched
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start with 4 free verifications. No credit card required. 
              See why Safe or Stolen is rated higher than CheckMend.
            </p>
            <Button size="lg" asChild>
              <Link to="/auth?tab=signup">Try Safe or Stolen Free</Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              4 free checks • No credit card • 30-day money-back guarantee
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default VsCheckMendPage;

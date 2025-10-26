import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Check, ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const CompetitorAlternativesHubPage = () => {
  const navigate = useNavigate();

  const competitors = [
    {
      name: 'CheckMend',
      category: 'IMEI Checker',
      weaknesses: ['Paid-only service', 'No mobile app', 'Phone verification only'],
      advantages: ['4 FREE searches', 'iOS & Android apps', 'Multi-item verification'],
      slug: '/safeorstolen-vs-checkmend'
    },
    {
      name: 'IMEIinfo',
      category: 'IMEI Checker',
      weaknesses: ['Website only', 'Limited free searches', 'No camera scanning'],
      advantages: ['Mobile app with barcode scanner', 'Offline mode', 'More item types'],
      slug: '/safeorstolen-vs-imeiinfo'
    },
    {
      name: 'Carfax',
      category: 'Vehicle History',
      weaknesses: ['$44.99 per report', 'No stolen status check', 'History only'],
      advantages: ['FREE stolen checks', 'Real-time police databases', 'Complementary service'],
      slug: '/safeorstolen-vs-carfax'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Best CheckMend, IMEIinfo, and Carfax Alternatives",
    "description": "Compare SafeOrStolen with leading competitors for stolen item verification"
  };

  return (
    <>
      <PageSEO
        title="Best CheckMend, IMEIinfo, Carfax Alternatives - Free Stolen Item Verification"
        description="Compare SafeOrStolen with CheckMend, IMEIinfo, and Carfax. Get 4 FREE searches, mobile app, and multi-item verification. See why SafeOrStolen is the better choice."
        keywords="CheckMend alternative, IMEIinfo alternative, Carfax alternative, free IMEI check, best stolen item checker"
        canonical="/competitor-alternatives"
        structuredData={structuredData}
      />
      <AISearchOptimizer 
        page="alternatives-hub" 
        context="competitor-comparison"
        primaryKeywords={['CheckMend alternative', 'IMEIinfo alternative', 'Carfax alternative', 'stolen item checker']}
      />

      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-sos-dark to-sos">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4 border-sos-orange text-sos-orange">
                <TrendingUp className="mr-2 h-4 w-4" />
                Complete Comparison Guide
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Best Alternatives to CheckMend, IMEIinfo & Carfax
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Why thousands are switching to SafeOrStolen for stolen item verification. Compare features, pricing, and see the difference.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button onClick={() => navigate('/check-phone')} size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
                  Try SafeOrStolen Free
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  See All Comparisons
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why People Switch */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-sos-orange/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Star className="h-6 w-6 text-sos-orange fill-sos-orange" />
                  Why 10,000+ Users Switched to SafeOrStolen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg">✓ With SafeOrStolen</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span><strong>4 FREE searches</strong> every month (competitors: $0)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span><strong>Mobile app</strong> for iOS & Android (competitors: web-only)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span><strong>Multi-item verification:</strong> phones, cars, bikes, electronics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span><strong>$9.99/month unlimited</strong> plan (vs $2-5 per check)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span><strong>30-second results</strong> (vs 1-3 minutes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span><strong>50M+ database records</strong> (vs 10-15M)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <h3 className="font-bold text-lg">✗ With Competitors</h3>
                    <ul className="space-y-3">
                      <li>• CheckMend: Paid-only, no free searches</li>
                      <li>• IMEIinfo: Website-only, no mobile app</li>
                      <li>• Carfax: $44.99 per report, no stolen check</li>
                      <li>• Limited to one item type (IMEI or VIN)</li>
                      <li>• Manual entry required (no barcode scanning)</li>
                      <li>• Smaller databases with older data</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Competitor Comparisons */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Competitor Comparisons</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {competitors.map((competitor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{competitor.name}</CardTitle>
                    <Badge variant="outline">{competitor.category}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-sm text-red-500 mb-2">Their Weaknesses:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {competitor.weaknesses.map((w, i) => (
                          <li key={i}>• {w}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-green-600 mb-2">Our Advantages:</h4>
                      <ul className="space-y-1 text-sm">
                        {competitor.advantages.map((a, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <Check className="h-4 w-4 text-green-600 mt-0.5" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full" 
                      variant="outline"
                      onClick={() => navigate(competitor.slug)}
                    >
                      See Full Comparison
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Savings Calculator */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Annual Savings with SafeOrStolen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">vs CheckMend</p>
                    <p className="text-3xl font-bold text-sos-orange">$240/year</p>
                    <p className="text-xs text-muted-foreground mt-2">Based on 2 checks/month at $2/check</p>
                  </div>
                  <div className="p-6 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">vs IMEIinfo</p>
                    <p className="text-3xl font-bold text-sos-orange">$180/year</p>
                    <p className="text-xs text-muted-foreground mt-2">Based on 2 checks/month at $1.50/check</p>
                  </div>
                  <div className="p-6 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">vs Carfax</p>
                    <p className="text-3xl font-bold text-sos-orange">$420/year</p>
                    <p className="text-xs text-muted-foreground mt-2">Based on 1 report/month at $44.99/report</p>
                  </div>
                </div>
                <p className="text-center mt-6 text-muted-foreground">
                  SafeOrStolen: 4 FREE searches + $9.99/month unlimited = $120/year total
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto text-center bg-gradient-to-br from-sos-dark to-sos text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Switch?</h2>
                <p className="text-xl mb-8 text-gray-300">
                  Join 10,000+ users who switched from CheckMend, IMEIinfo, and Carfax. Get 4 FREE searches now.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button onClick={() => navigate('/check-phone')} size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/pricing')}>
                    View Pricing
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompetitorAlternativesHubPage;

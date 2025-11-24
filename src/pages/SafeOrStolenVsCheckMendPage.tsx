import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, Star, TrendingUp, Smartphone, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const SafeOrStolenVsCheckMendPage = () => {
  const navigate = useNavigate();

  const comparisonData = [
    { feature: 'Free Searches', safeorstolen: '2 free (14-day trial)', checkmend: 'None - All paid', winner: 'safeorstolen' },
    { feature: 'Mobile App', safeorstolen: 'iOS & Android', checkmend: 'No app available', winner: 'safeorstolen' },
    { feature: 'Items Supported', safeorstolen: 'Phones, Cars, Electronics, Bikes, Jewelry', checkmend: 'Phones only (IMEI)', winner: 'safeorstolen' },
    { feature: 'Database Size', safeorstolen: '50M+ records', checkmend: '~10M records', winner: 'safeorstolen' },
    { feature: 'Verification Speed', safeorstolen: '30 seconds', checkmend: '1-2 minutes', winner: 'safeorstolen' },
    { feature: 'Pricing (Monthly)', safeorstolen: '$9.99/month unlimited', checkmend: 'Pay per check ($2-5 each)', winner: 'safeorstolen' },
    { feature: 'VIN Verification', safeorstolen: 'Yes', checkmend: 'No', winner: 'safeorstolen' },
    { feature: 'Serial Number Check', safeorstolen: 'Yes', checkmend: 'Limited', winner: 'safeorstolen' },
    { feature: 'Real-time Results', safeorstolen: 'Yes', checkmend: 'Yes', winner: 'tie' },
    { feature: 'API Access', safeorstolen: 'Available', checkmend: 'Limited', winner: 'safeorstolen' }
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SafeOrStolen vs CheckMend Comparison",
      "description": "Detailed comparison between SafeOrStolen and CheckMend stolen phone verification services",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": comparisonData.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Thing",
            "name": item.feature,
            "description": `SafeOrStolen: ${item.safeorstolen}, CheckMend: ${item.checkmend}`
          }
        }))
      }
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs CheckMend: Which IMEI Checker is Better?"
        description="Compare SafeOrStolen and CheckMend stolen phone checkers. SafeOrStolen offers 4 FREE searches, mobile app, and multi-item verification vs CheckMend's paid-only IMEI service."
        keywords="SafeOrStolen vs CheckMend, CheckMend alternative, free IMEI check, better than CheckMend, phone verification comparison"
        canonical="/safeorstolen-vs-checkmend"
        structuredData={structuredData}
      />
      <AISearchOptimizer 
        page="comparison" 
        context="stolen-phone-verification-comparison"
        primaryKeywords={['CheckMend alternative', 'free IMEI checker', 'SafeOrStolen vs CheckMend']}
      />

      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[
            { name: 'Comparisons', href: '/comparisons' },
            { name: 'vs CheckMEND', href: '/safeorstolen-vs-checkmend' }
          ]} />
        </div>
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sos-dark to-sos">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4 border-sos-orange text-sos-orange">
                <TrendingUp className="mr-2 h-4 w-4" />
                Unbiased Comparison
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                SafeOrStolen vs CheckMend
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Which stolen phone verification service is best for you? Compare features, pricing, and capabilities side-by-side.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button onClick={() => navigate('/check-phone')} size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
                  Try SafeOrStolen Free
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  See Full Comparison
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Winner Summary */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-sos-orange/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Star className="h-6 w-6 text-sos-orange fill-sos-orange" />
                  Winner: SafeOrStolen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg mb-4">
                  SafeOrStolen wins in 9 out of 10 categories with superior features, free searches, mobile app, and multi-item verification capabilities.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="font-semibold">4 Free Searches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="font-semibold">Mobile App</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="font-semibold">Multi-Item Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Feature-by-Feature Comparison</h2>
            <Card className="max-w-5xl mx-auto">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 px-4">Feature</th>
                        <th className="text-center py-4 px-4">
                          <div className="flex flex-col items-center gap-2">
                            <span className="font-bold text-sos-orange">SafeOrStolen</span>
                            <Badge variant="default" className="bg-sos-orange">Recommended</Badge>
                          </div>
                        </th>
                        <th className="text-center py-4 px-4">CheckMend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="py-4 px-4 font-medium">{row.feature}</td>
                          <td className="py-4 px-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              {row.winner === 'safeorstolen' && <Check className="h-5 w-5 text-green-600" />}
                              {row.safeorstolen}
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center text-muted-foreground">
                            <div className="flex items-center justify-center gap-2">
                              {row.winner === 'safeorstolen' && <X className="h-5 w-5 text-red-500" />}
                              {row.checkmend}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose SafeOrStolen */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why SafeOrStolen Beats CheckMend</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <DollarSign className="h-10 w-10 text-sos-orange mb-2" />
                  <CardTitle>Better Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    4 FREE searches every month vs CheckMend's pay-per-check model. Save hundreds annually with unlimited $9.99/month plan.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Smartphone className="h-10 w-10 text-sos-orange mb-2" />
                  <CardTitle>Mobile App</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Verify items on-the-go with iOS and Android apps. CheckMend only offers web access. Perfect for marketplace meetups.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Check className="h-10 w-10 text-sos-orange mb-2" />
                  <CardTitle>More Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Verify phones, cars, bikes, electronics, and jewelry. CheckMend only supports phone IMEI checks. One platform for everything.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto text-center bg-gradient-to-br from-sos-dark to-sos text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Switch from CheckMend?</h2>
                <p className="text-xl mb-8 text-gray-300">
                  Get 4 FREE searches now. No credit card required. Upgrade to unlimited for just $9.99/month.
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

export default SafeOrStolenVsCheckMendPage;

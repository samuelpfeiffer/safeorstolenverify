import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Car, DollarSign, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const SafeOrStolenVsCarfaxPage = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "SafeOrStolen vs Carfax: Stolen Vehicle Verification Comparison",
    "description": "Compare SafeOrStolen and Carfax for stolen vehicle checks"
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs Carfax: Free Stolen VIN Check vs $44.99 Vehicle History"
        description="SafeOrStolen focuses on stolen vehicle verification (FREE) while Carfax provides vehicle history for $44.99. Use both for complete protection when buying used cars."
        keywords="SafeOrStolen vs Carfax, Carfax alternative stolen check, free VIN stolen check, vehicle verification comparison"
        canonical="/safeorstolen-vs-carfax"
        structuredData={structuredData}
      />
      <AISearchOptimizer 
        page="comparison" 
        context="vehicle-verification"
        primaryKeywords={['Carfax alternative', 'free stolen VIN check', 'vehicle verification']}
      />

      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[
            { name: 'Comparisons', href: '/comparisons' },
            { name: 'vs Carfax', href: '/safeorstolen-vs-carfax' }
          ]} />
        </div>
        
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-sos-dark to-sos">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4 border-sos-orange text-sos-orange">
                <Car className="mr-2 h-4 w-4" />
                Vehicle Verification Comparison
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                SafeOrStolen vs Carfax
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Different services for different needs. SafeOrStolen checks if vehicles are stolen (FREE). Carfax shows vehicle history ($44.99).
              </p>
              <Button onClick={() => navigate('/check-car')} size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
                Check VIN Free Now
              </Button>
            </div>
          </div>
        </section>

        {/* Key Difference */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-sos-orange/50">
              <CardHeader>
                <CardTitle className="text-2xl">The Key Difference</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-bold text-xl text-sos-orange flex items-center gap-2">
                      <Shield className="h-6 w-6" />
                      SafeOrStolen
                    </h3>
                    <p className="text-lg font-semibold">Stolen Status Verification</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Checks if vehicle is reported stolen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Searches global police databases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>2 FREE searches (14-day trial)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Instant 30-second results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>$9.99/month unlimited plan</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-bold text-xl flex items-center gap-2">
                      <Car className="h-6 w-6" />
                      Carfax
                    </h3>
                    <p className="text-lg font-semibold">Vehicle History Reports</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Shows accident history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Displays service records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>Shows ownership history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>$44.99 per single report</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">✗ Does NOT check stolen status</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-sos-orange/10 rounded-lg border border-sos-orange/30">
                  <p className="text-lg font-semibold text-center">
                    <strong>Pro Tip:</strong> Use BOTH services for complete protection. SafeOrStolen for stolen checks (FREE), then Carfax for vehicle history if car passes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing Comparison</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-sos-orange/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">SafeOrStolen</CardTitle>
                    <Badge className="bg-sos-orange">Best Value</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold text-sos-orange">FREE</div>
                  <p className="text-sm text-muted-foreground">4 stolen checks per month</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Unlimited $9.99/month plan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Mobile app included</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>No per-report fees</span>
                    </div>
                  </div>
                  <Button className="w-full bg-sos-orange hover:bg-sos-orange/90" onClick={() => navigate('/check-car')}>
                    Check VIN Free
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Carfax</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold">$44.99</div>
                  <p className="text-sm text-muted-foreground">Per single vehicle report</p>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>$99.99 for 5 reports</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Vehicle history included</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500">✗ No stolen status check</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" disabled>
                    External Service
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Complementary Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">These Are Complementary Services</h2>
              <p className="text-xl text-muted-foreground mb-8">
                SafeOrStolen and Carfax serve different purposes. For maximum protection when buying a used car:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2 text-sos-orange">1</div>
                    <h3 className="font-bold mb-2">Check Stolen Status</h3>
                    <p className="text-sm text-muted-foreground">Use SafeOrStolen first (FREE) to ensure the vehicle isn't stolen</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2 text-sos-orange">2</div>
                    <h3 className="font-bold mb-2">Get Vehicle History</h3>
                    <p className="text-sm text-muted-foreground">If it passes, get Carfax report for accident/service history</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2 text-sos-orange">3</div>
                    <h3 className="font-bold mb-2">Buy with Confidence</h3>
                    <p className="text-sm text-muted-foreground">Complete verification = protected purchase</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto text-center bg-gradient-to-br from-sos-dark to-sos text-white">
              <CardContent className="p-12">
                <DollarSign className="h-16 w-16 mx-auto mb-4 text-sos-orange" />
                <h2 className="text-3xl font-bold mb-4">Start with FREE Stolen Verification</h2>
                <p className="text-xl mb-8 text-gray-300">
                  Check if the vehicle is stolen first (FREE) before spending $44.99 on Carfax. Smart buyers verify both.
                </p>
                <Button onClick={() => navigate('/check-car')} size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
                  Check VIN Free Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default SafeOrStolenVsCarfaxPage;

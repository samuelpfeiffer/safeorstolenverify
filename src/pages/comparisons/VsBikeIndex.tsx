import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, Smartphone, Bike, Car, Shield, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

const VsBikeIndex = () => {
  const comparisonData = [
    { feature: 'Mobile App', sos: true, bikeindex: false },
    { feature: 'Bicycle Verification', sos: true, bikeindex: true },
    { feature: 'Phone/IMEI Verification', sos: true, bikeindex: false },
    { feature: 'Car/VIN Verification', sos: true, bikeindex: false },
    { feature: 'Electronics Verification', sos: true, bikeindex: false },
    { feature: 'Firearms Verification', sos: true, bikeindex: false },
    { feature: 'License Plate Lookup', sos: true, bikeindex: false },
    { feature: 'Marketplace URL Paste', sos: true, bikeindex: false },
    { feature: 'Police Partnerships', sos: true, bikeindex: true },
    { feature: 'Free Searches', sos: '2 free', bikeindex: 'Unlimited' },
    { feature: 'Real-Time Databases', sos: '100+ sources', bikeindex: 'User reports' },
    { feature: 'API Access', sos: true, bikeindex: true },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen vs Bike Index - Bicycle Theft Verification Comparison",
    "description": "Compare SafeOrStolen and Bike Index for stolen bicycle verification. See why SafeOrStolen's all-in-one mobile app and multi-item coverage is the better choice for secondhand buyers.",
    "url": "https://safeorstolen.com/vs-bikeindex"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the difference between SafeOrStolen and Bike Index?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bike Index is a free bicycle-only registry with 1.5M+ bikes and police partnerships. SafeOrStolen is an all-in-one verification platform checking bikes, phones, cars, electronics, and more from 100+ databases. SafeOrStolen also has a mobile app for on-the-spot verification."
        }
      },
      {
        "@type": "Question",
        "name": "Is Bike Index really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Bike Index is 100% free and open source. However, it only covers bicycles. SafeOrStolen offers 2 free searches across all item types (bikes, phones, cars, electronics, firearms) with paid plans for unlimited access."
        }
      },
      {
        "@type": "Question",
        "name": "Does SafeOrStolen check Bike Index data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SafeOrStolen integrates with Bike Index's API to include their stolen bicycle registry in our verification results. When you check a bicycle serial number on SafeOrStolen, we query Bike Index along with other databases for comprehensive coverage."
        }
      },
      {
        "@type": "Question",
        "name": "Which service should I use for stolen bike checks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you only buy used bicycles, Bike Index is free and excellent. If you buy multiple item types (phones, cars, bikes, electronics), SafeOrStolen is better because it verifies everything in one place. SafeOrStolen also has a mobile app for checking items before meetups."
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs Bike Index - Bicycle Theft Verification Comparison 2026"
        description="Compare SafeOrStolen and Bike Index for stolen bicycle verification. SafeOrStolen offers multi-item checking (bikes, phones, cars) with a mobile app. See the full comparison."
        keywords="SafeOrStolen vs Bike Index, bicycle theft verification, stolen bike checker, bike serial number lookup, Bike Index alternative, bicycle registry comparison"
        canonical="/vs-bikeindex"
        structuredData={[structuredData, faqSchema]}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <Bike className="h-4 w-4" />
                <span className="text-sm font-medium">Bicycle Verification Comparison</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold">
                SafeOrStolen vs Bike Index
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Both platforms help verify stolen bicycles - but SafeOrStolen does much more. 
                Compare features to choose the right tool for your needs.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button asChild size="lg">
                  <Link to="/verify">
                    Try SafeOrStolen Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/check-bike">Check Bicycle</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-primary/50 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      SafeOrStolen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        All-in-one platform (bikes, phones, cars, more)
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Mobile app for on-the-spot verification
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        100+ database sources
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Marketplace URL paste feature
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        2 free searches included
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">
                      <strong>Best for:</strong> Users who buy multiple item types (not just bikes)
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bike className="h-5 w-5" />
                      Bike Index
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        100% free, unlimited searches
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        1.5M+ registered bicycles
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Police department partnerships
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        Open source
                      </li>
                      <li className="flex items-center gap-2">
                        <X className="h-4 w-4 text-red-500" />
                        Bicycles only - no other items
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">
                      <strong>Best for:</strong> Users who only buy/sell bicycles
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Feature-by-Feature Comparison
              </h2>
              
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left p-4 font-medium">Feature</th>
                        <th className="p-4 text-center">
                          <div className="flex flex-col items-center gap-1">
                            <span className="font-bold text-primary">SafeOrStolen</span>
                            <span className="text-xs text-muted-foreground">All-in-One</span>
                          </div>
                        </th>
                        <th className="p-4 text-center">
                          <div className="flex flex-col items-center gap-1">
                            <span className="font-bold">Bike Index</span>
                            <span className="text-xs text-muted-foreground">Bikes Only</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-border last:border-0">
                          <td className="p-4 font-medium">
                            {row.feature === 'Mobile App' && (
                              <div className="flex items-center gap-2">
                                <Smartphone className="h-4 w-4 text-primary" />
                                <span>{row.feature}</span>
                              </div>
                            )}
                            {row.feature !== 'Mobile App' && row.feature}
                          </td>
                          <td className="p-4 text-center bg-primary/5">
                            {typeof row.sos === 'boolean' ? (
                              row.sos ? (
                                <Check className="h-5 w-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="font-medium text-primary">{row.sos}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof row.bikeindex === 'boolean' ? (
                              row.bikeindex ? (
                                <Check className="h-5 w-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-muted-foreground">{row.bikeindex}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Differentiators */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose SafeOrStolen Over Bike Index?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Smartphone className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Mobile App</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      SafeOrStolen has iOS and Android apps for on-the-spot verification. 
                      Check items before meetups without a laptop. Bike Index has no mobile app.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Zap className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>All Item Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      One platform for bikes, phones, cars, electronics, firearms, and more. 
                      Stop using 5 different websites. Bike Index only covers bicycles.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Car className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>100+ Databases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We query NICB, GSMA, law enforcement, carrier blacklists, and more. 
                      Bike Index relies on user-submitted reports only.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use Bike Index */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                When Is Bike Index Better?
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                We believe in honesty. Here's when Bike Index might be the better choice:
              </p>
              
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>You only buy/sell bicycles:</strong> If bicycles are your only 
                        secondhand purchases, Bike Index is 100% free with unlimited searches.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>You want to register your own bike:</strong> Bike Index lets you 
                        register your bicycle for free, creating a recovery record if it's ever stolen.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Budget is critical:</strong> Bike Index is 100% free forever. 
                        SafeOrStolen offers 2 free searches, then requires a paid plan.
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Does SafeOrStolen use Bike Index data?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes! When you check a bicycle serial number on SafeOrStolen, we query the Bike Index 
                      API along with other databases. You get Bike Index coverage plus additional sources 
                      like police reports and insurance databases.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Is Bike Index really 100% free?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, Bike Index is a nonprofit open-source project that's completely free. They're 
                      funded by grants and donations. The tradeoff is they only cover bicycles - no phones, 
                      cars, or other items.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Which should I use for buying a used bike?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Use both! Check Bike Index (free, unlimited) and SafeOrStolen (comprehensive coverage). 
                      If you also buy phones, cars, or electronics, SafeOrStolen's all-in-one platform saves 
                      time. If you only buy bikes, Bike Index alone may suffice.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Verify Your Next Purchase?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get 2 free searches to check bikes, phones, cars, and more. One platform for everything.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/verify">
                  <Shield className="mr-2 h-4 w-4" />
                  Try SafeOrStolen Free
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/check-bike">
                  <Bike className="mr-2 h-4 w-4" />
                  Check a Bicycle
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <RelatedPagesSection currentPage="/vs-bikeindex" />
      </div>
    </>
  );
};

export default VsBikeIndex;

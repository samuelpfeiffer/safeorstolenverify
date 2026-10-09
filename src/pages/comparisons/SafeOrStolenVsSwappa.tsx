/**
 * Oct 8 2026: copy fixed by hand. Removed "AI analysis" as a source, the AI-powered fraud analysis claim,
 * law-enforcement and insurance data claims for phones, the iOS/Android app claim, "2 free checks without an
 * account" (an account is required), "comprehensive", and exclamation marks.
 */
import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Crown, Shield, ShoppingBag, Database, Smartphone, Car } from 'lucide-react';
import { Link } from '@/lib/router-compat';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

const SafeOrStolenVsSwappa = () => {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen and Swappa IMEI Checker Comparison 2026",
    "description": "Compare SafeOrStolen and Swappa IMEI checking services for buying used phones in 2026",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "SafeOrStolen",
            "description": "Free stolen item verification platform"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "Swappa",
            "description": "Used device marketplace with ESN checks"
          }
        }
      ]
    }
  };

  const comparisonData = [
    { feature: 'Primary Purpose', safeOrStolen: 'Stolen item verification', swappa: 'Device marketplace', winner: 'tie' },
    { feature: 'Free Searches', safeOrStolen: '2 free (standalone)', swappa: 'Only for listings', winner: 'sos' },
    { feature: 'What a phone check searches', safeOrStolen: 'SafeOrStolen theft reports and web results; paid carrier blacklist check', swappa: 'Phone-focused checks', winner: 'tie' },
    { feature: 'Check Without Buying', safeOrStolen: 'Yes', swappa: 'No', winner: 'sos' },
    { feature: 'VIN Check (Cars)', safeOrStolen: 'Yes', swappa: 'No', winner: 'sos' },
    { feature: 'Serial Numbers', safeOrStolen: 'All item types', swappa: 'Phones only', winner: 'sos' },
    { feature: 'On your phone', safeOrStolen: 'Free installable web app', swappa: 'Website and app', winner: 'tie' },
    { feature: 'Buy/Sell Platform', safeOrStolen: 'No (verification only)', swappa: 'Yes', winner: 'swappa' },
    { feature: 'Buyer Protection', safeOrStolen: 'Dated record of your check', swappa: 'Payment protection', winner: 'tie' },
    { feature: 'Price Comparison', safeOrStolen: 'No', swappa: 'Yes', winner: 'swappa' },
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen and Swappa IMEI Comparison 2026"
        description="SafeOrStolen vs Swappa for used phone IMEI checks: what each one searches, where each works, and when to use both before you buy a phone."
        keywords="safeorstolen swappa comparison, swappa imei checker, swappa esn check, stolen phone verification, swappa alternative"
        canonical="/comparisons/safeorstolen-vs-swappa"
        structuredData={comparisonSchema}
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                2026 Comparison
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                SafeOrStolen and Swappa IMEI Checker Comparison
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Swappa is a marketplace with its own ESN check for the phones listed there. SafeOrStolen is a
                stolen check you can run on any phone, car, bike or other item, wherever you found it.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="font-semibold">
                  <Link to="/verify">Try SafeOrStolen Free</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#comparison">See Full Comparison</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Verdict */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Crown className="w-8 h-8 text-yellow-500" />
                <h2 className="text-2xl font-bold">Quick Verdict</h2>
              </div>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-lg text-center">
                    <strong>Different tools for different needs.</strong> <span className="text-primary font-semibold">SafeOrStolen</span> is 
                    fits when you're buying <strong>somewhere other than Swappa</strong>: Facebook Marketplace, Craigslist, OfferUp or in person. 
                    <strong> Swappa</strong> is great if you're buying <strong>exclusively on their marketplace</strong> and want built-in buyer protection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Difference Banner */}
        <section className="py-8 bg-amber-500/10 border-b border-amber-500/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg">
                <strong className="text-amber-600">Key Difference:</strong> Swappa's ESN check only works for devices listed on Swappa. 
                SafeOrStolen works <strong>anywhere</strong> - check items from Facebook Marketplace, Craigslist, OfferUp, or in-person sales.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section id="comparison" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Feature-by-Feature Comparison</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-4 text-left font-semibold border-b border-border">Feature</th>
                      <th className="p-4 text-center font-semibold border-b border-border bg-primary/10">
                        <div className="flex items-center justify-center gap-2">
                          <Shield className="w-5 h-5 text-primary" />
                          SafeOrStolen
                        </div>
                      </th>
                      <th className="p-4 text-center font-semibold border-b border-border">
                        <div className="flex items-center justify-center gap-2">
                          <ShoppingBag className="w-5 h-5" />
                          Swappa
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/50'}>
                        <td className="p-4 border-b border-border font-medium">{row.feature}</td>
                        <td className={`p-4 text-center border-b border-border ${row.winner === 'sos' ? 'bg-green-500/10' : ''}`}>
                          <div className="flex items-center justify-center gap-2">
                            {row.safeOrStolen}
                            {row.winner === 'sos' && <Check className="w-5 h-5 text-green-500" />}
                          </div>
                        </td>
                        <td className={`p-4 text-center border-b border-border ${row.winner === 'swappa' ? 'bg-green-500/10' : ''}`}>
                          <div className="flex items-center justify-center gap-2">
                            {row.swappa}
                            {row.winner === 'swappa' && <Check className="w-5 h-5 text-green-500" />}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Pros & Cons</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* SafeOrStolen */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-6 h-6 text-primary" />
                      SafeOrStolen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                        <Check className="w-4 h-4" /> Pros
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Works anywhere - not limited to one platform
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Searches SafeOrStolen theft reports and public web results
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Checks phones, cars, bikes, tools, and more
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          2 free checks with a free account, no credit card
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Paid carrier blacklist check for phones (up to 20 a month on the $10 plan)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                        <X className="w-4 h-4" /> Cons
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          Verification only - not a marketplace
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          No built-in payment protection
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Swappa */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingBag className="w-6 h-6 text-muted-foreground" />
                      Swappa
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                        <Check className="w-4 h-4" /> Pros
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          All-in-one marketplace and verification
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Built-in buyer protection program
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Price comparison tools
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Seller verification for listings
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                        <X className="w-4 h-4" /> Cons
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          ESN check only works on Swappa listings
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          Phones and tablets only - no cars, bikes, tools
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          Can't verify items from other marketplaces
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Scenarios */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">When to Use Each Service</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-primary border-2">
                  <CardHeader>
                    <CardTitle className="text-primary">Use SafeOrStolen When...</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Smartphone className="w-5 h-5 text-primary mt-0.5" />
                        Buying from Facebook Marketplace, Craigslist, or OfferUp
                      </li>
                      <li className="flex items-start gap-2">
                        <Car className="w-5 h-5 text-primary mt-0.5" />
                        Checking a used car, motorcycle, or bike VIN
                      </li>
                      <li className="flex items-start gap-2">
                        <Database className="w-5 h-5 text-primary mt-0.5" />
                        Buying a gun or an Arizona car, where police theft records are also searched
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5" />
                        Meeting someone in person to buy an item
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5" />
                        Checking any serial number (tools, electronics, etc.)
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Use Swappa When...</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-muted-foreground mt-0.5" />
                        Buying exclusively on the Swappa marketplace
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-muted-foreground mt-0.5" />
                        You want integrated payment protection
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-muted-foreground mt-0.5" />
                        Looking for price comparison tools
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-muted-foreground mt-0.5" />
                        Selling devices on a dedicated platform
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-center text-lg">
                    <strong>Tip:</strong> Use both. Buy on Swappa when you want its marketplace protection,
                    and use SafeOrStolen to check phones and other items you find anywhere else.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Verify Any Item, Anywhere</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              SafeOrStolen works wherever you found the item: Facebook Marketplace, Craigslist,
              OfferUp or an in-person sale. Your first 2 checks are free.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/verify">Check Item Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/app">Get the free web app</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Can I use Swappa's ESN check for Facebook Marketplace items?</h3>
                    <p className="text-muted-foreground">
                      Swappa's ESN check is built around devices listed on Swappa. For a phone from Facebook Marketplace,
                      enter its IMEI on SafeOrStolen (safeorstolen.com/comparisons/safeorstolen-vs-swappa) to see the make and
                      model and search SafeOrStolen's theft reports and public web results. Dial *#06# on the phone to get the IMEI.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Does SafeOrStolen check more than just phones?</h3>
                    <p className="text-muted-foreground">
                      Yes. SafeOrStolen checks phones (IMEI), cars and motorcycles (VIN), and items with a serial
                      number such as bikes, tools, laptops and cameras. Bike checks also search a national stolen-bicycle
                      registry, and gun checks also search police theft reports from 33 states and Washington, DC.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">What does each one actually search?</h3>
                    <p className="text-muted-foreground">
                      A SafeOrStolen phone check searches SafeOrStolen's own theft reports and public web results, and shows the
                      make and model from the IMEI. A paid carrier blacklist check is also available. Swappa's checks serve its
                      own marketplace, so check Swappa's site for exactly what it covers.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Should I use both services?</h3>
                    <p className="text-muted-foreground">
                      Yes, they do different jobs. Use Swappa's marketplace when you want to buy or sell with payment protection,
                      and use SafeOrStolen to check a phone or other item from any other platform before you pay.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <RelatedPagesSection 
          currentPage="/comparisons/safeorstolen-vs-swappa" 
          currentCategory="comparison" 
          maxLinks={6}
        />
      </div>
    </>
  );
};

export default SafeOrStolenVsSwappa;

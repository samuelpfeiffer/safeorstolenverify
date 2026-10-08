import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Crown, Shield, Smartphone, Database, Clock, DollarSign } from 'lucide-react';
import { Link } from '@/lib/router-compat';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

const SafeOrStolenVsIMEIInfo = () => {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen and IMEI.info Comparison",
    "description": "Side-by-side look at SafeOrStolen and IMEI.info for checking a used phone before you buy it",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "SafeOrStolen",
            "description": "Stolen item check for phones, vehicles, bikes, guns and other serial-numbered items. 2 free checks, then $0.99 a check or $10 a month.",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "IMEI.info",
            "description": "IMEI lookup and phone information service"
          }
        }
      ]
    }
  };

  const comparisonData = [
    { feature: 'Pricing', safeOrStolen: '2 free checks, then $0.99 a check or $10 a month unlimited', imeiInfo: 'Free basic lookup; paid extra checks', winner: 'tie' },
    { feature: 'What it searches', safeOrStolen: 'SafeOrStolen theft reports and public web results', imeiInfo: 'Device information', winner: 'tie' },
    { feature: 'Item types', safeOrStolen: 'Phones, vehicles, bikes, guns, tools, electronics', imeiInfo: 'Phones only', winner: 'sos' },
    { feature: 'Phone blacklist check', safeOrStolen: 'Paid add-on; up to 20 a month on the $10 plan', imeiInfo: 'Paid', winner: 'tie' },
    { feature: 'VIN check', safeOrStolen: 'Yes', imeiInfo: 'No', winner: 'sos' },
    { feature: 'Serial number check', safeOrStolen: 'Yes', imeiInfo: 'No', winner: 'sos' },
    { feature: 'Make and model from IMEI', safeOrStolen: 'Yes', imeiInfo: 'Yes', winner: 'tie' },
    { feature: 'App', safeOrStolen: 'Free installable web app at safeorstolen.com/app', imeiInfo: 'Website', winner: 'tie' },
    { feature: 'Dated proof of your check', safeOrStolen: 'Optional $1.99 certificate', imeiInfo: 'No', winner: 'sos' },
  ];

  return (
    <>
      <PageSEO
        title="Best IMEI.info Alternative - IMEI Checker Comparison"
        description="Looking for an IMEI.info alternative? Compare SafeOrStolen and IMEI.info side by side: what each one checks, what it costs, and which fits a used-phone purchase."
        keywords="imei.info alternative, best imei.info alternative, free imei checker, stolen phone checker comparison, best imei lookup"
        canonical="/comparisons/safeorstolen-vs-imei-info"
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
                Best IMEI.info Alternative: SafeOrStolen
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                IMEI.info tells you about the phone. SafeOrStolen tells you whether anyone has reported it stolen,
                and it works for cars, bikes, guns and tools too. Here's how they differ.
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

        {/* Quick Winner Section */}
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
                    If you're buying a used phone and want to know if it was reported stolen, use{' '}
                    <strong className="text-primary">SafeOrStolen</strong>: 2 free checks, it searches SafeOrStolen
                    theft reports and public web results, and it also handles VINs and serial numbers. IMEI.info is
                    fine if you only want to look up a phone's model and specs.
                  </p>
                </CardContent>
              </Card>
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
                      <th className="p-4 text-center font-semibold border-b border-border">IMEI.info</th>
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
                        <td className={`p-4 text-center border-b border-border ${row.winner === 'imei' ? 'bg-green-500/10' : ''}`}>
                          <div className="flex items-center justify-center gap-2">
                            {row.imeiInfo}
                            {row.winner === 'imei' && <Check className="w-5 h-5 text-green-500" />}
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
                          2 completely free searches, no credit card required
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Searches SafeOrStolen theft reports and public web results
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Checks phones, cars, bikes, tools, electronics & more
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Free installable web app at safeorstolen.com/app
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Optional paid phone blacklist check (up to 20 a month on the $10 plan)
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
                          Limited to 2 free searches per account
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          After the free checks, $0.99 a check or $10 a month
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* IMEI.info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="w-6 h-6 text-muted-foreground" />
                      IMEI.info
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
                          Basic device specs available for free
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Detailed carrier information
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Simple, straightforward interface
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
                          Blacklist checks are a paid extra
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          Phones only - no cars, bikes, or other items
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Which Should You Choose?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-primary border-2">
                  <CardHeader>
                    <CardTitle className="text-primary">Choose SafeOrStolen If...</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5" />
                        You want to check if an item is stolen (free)
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5" />
                        You're buying/selling cars, bikes, or other items
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5" />
                        You want a dated record that you checked before buying
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5" />
                        You want to check from your phone with the free web app
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5" />
                        You want every source listed with the result
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Choose IMEI.info If...</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-muted-foreground mt-0.5" />
                        You only need phone specifications
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-muted-foreground mt-0.5" />
                        You're looking up carrier information
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-muted-foreground mt-0.5" />
                        You don't mind paying for blacklist checks
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Try SafeOrStolen Free Today</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get 2 free stolen item checks with no credit card required. 
              Protect yourself when buying secondhand items.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/verify">Check Item Now - Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/app">Get the Free Web App</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Is SafeOrStolen really free?</h3>
                    <p className="text-muted-foreground">
                      You get 2 free checks with a free account and no credit card. After that it's $0.99 a check
                      or $10 a month for unlimited checks, cancel anytime. The phone blacklist check is a paid extra;
                      monthly members get up to 20 a month.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Which service has more accurate data?</h3>
                    <p className="text-muted-foreground">
                      They answer different questions. IMEI.info gives phone device details. A SafeOrStolen check searches
                      SafeOrStolen theft reports and public web results, shows the phone's make and model, and lists every
                      source with the result. Carrier blacklist status comes only from the paid blacklist check.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Can I check car VINs on IMEI.info?</h3>
                    <p className="text-muted-foreground">
                      No, IMEI.info only supports phone IMEI lookups. SafeOrStolen supports IMEI, VIN, 
                      and serial numbers for phones, cars, bikes, tools, electronics, and more.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Is there a mobile app?</h3>
                    <p className="text-muted-foreground">
                      SafeOrStolen has no App Store or Google Play app. It has a free installable web app at
                      safeorstolen.com/app that you add to your home screen from the browser.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <RelatedPagesSection 
          currentPage="/comparisons/safeorstolen-vs-imeiinfo" 
          currentCategory="comparison" 
          maxLinks={6}
        />
      </div>
    </>
  );
};

export default SafeOrStolenVsIMEIInfo;

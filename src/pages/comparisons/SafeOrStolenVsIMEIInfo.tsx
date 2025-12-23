import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Crown, Shield, Smartphone, Database, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

const SafeOrStolenVsIMEIInfo = () => {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen vs IMEI.info Comparison",
    "description": "Detailed comparison between SafeOrStolen and IMEI.info stolen phone checker services",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "SafeOrStolen",
            "description": "Free stolen item verification platform with 50M+ database",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "IMEI.info",
            "description": "IMEI lookup and phone information service",
            "offers": { "@type": "Offer", "price": "2.99", "priceCurrency": "USD" }
          }
        }
      ]
    }
  };

  const comparisonData = [
    { feature: 'Free Searches', safeOrStolen: '2 free (no card)', imeiInfo: 'Limited basic info', winner: 'sos' },
    { feature: 'Stolen Database Size', safeOrStolen: '50M+ items', imeiInfo: 'Not disclosed', winner: 'sos' },
    { feature: 'Item Types Supported', safeOrStolen: 'Phones, cars, bikes, tools, etc.', imeiInfo: 'Phones only', winner: 'sos' },
    { feature: 'Blacklist Check', safeOrStolen: 'Included free', imeiInfo: '$2.99 per check', winner: 'sos' },
    { feature: 'VIN Check', safeOrStolen: 'Yes', imeiInfo: 'No', winner: 'sos' },
    { feature: 'Serial Number Check', safeOrStolen: 'Yes', imeiInfo: 'No', winner: 'sos' },
    { feature: 'Carrier Info', safeOrStolen: 'Yes', imeiInfo: 'Yes', winner: 'tie' },
    { feature: 'Device Specs', safeOrStolen: 'Yes', imeiInfo: 'Yes', winner: 'tie' },
    { feature: 'Mobile App', safeOrStolen: 'iOS & Android', imeiInfo: 'No', winner: 'sos' },
    { feature: 'Law Enforcement Backed', safeOrStolen: 'Yes', imeiInfo: 'No', winner: 'sos' },
    { feature: 'Insurance Partner', safeOrStolen: 'Yes', imeiInfo: 'No', winner: 'sos' },
    { feature: 'AI-Powered Analysis', safeOrStolen: 'Yes', imeiInfo: 'No', winner: 'sos' },
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen vs IMEI.info - Which Stolen Phone Checker is Better? (2025)"
        description="Compare SafeOrStolen and IMEI.info for stolen phone verification. See features, pricing, database size, and which IMEI checker is best for your needs."
        keywords="safeorstolen vs imei.info, imei.info alternative, free imei checker, stolen phone checker comparison, best imei lookup"
        canonical="/comparisons/safeorstolen-vs-imei-info"
        structuredData={comparisonSchema}
      />
      <TopNavigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                2025 Comparison
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                SafeOrStolen vs IMEI.info
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Which stolen phone checker should you use? We compare features, pricing, and reliability 
                to help you make the right choice.
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
                    <strong className="text-primary">SafeOrStolen wins</strong> for most users. It offers 
                    <strong> free stolen checks</strong>, supports <strong>multiple item types</strong> (not just phones), 
                    and has a <strong>larger verified database</strong>. IMEI.info is better if you only need 
                    basic device specifications.
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
                          50M+ stolen item database from law enforcement & insurers
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Checks phones, cars, bikes, tools, electronics & more
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Mobile apps for iOS and Android
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          AI-powered risk analysis and fraud detection
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
                          Premium features require subscription
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
                          Blacklist check costs $2.99+ per search
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          Phones only - no cars, bikes, or other items
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          No mobile app available
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          Database size not disclosed
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          No law enforcement partnerships
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
                        You want verified law enforcement data
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5" />
                        You prefer using a mobile app
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5" />
                        You need comprehensive risk analysis
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
                <Link to="/app">Download Mobile App</Link>
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
                      Yes! SafeOrStolen offers 2 completely free stolen item checks with no credit card required. 
                      IMEI.info charges $2.99+ for blacklist checks.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Which service has more accurate data?</h3>
                    <p className="text-muted-foreground">
                      SafeOrStolen partners directly with law enforcement agencies and insurance companies, 
                      giving access to 50M+ verified stolen items. IMEI.info doesn't disclose their data sources or database size.
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
                      SafeOrStolen offers mobile apps for both iOS and Android. IMEI.info is web-only 
                      with no mobile app available.
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
      </main>
      
      <Footer />
    </>
  );
};

export default SafeOrStolenVsIMEIInfo;

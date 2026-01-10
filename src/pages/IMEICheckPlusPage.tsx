import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, Check, X, Smartphone, Database, AlertTriangle, Download, ChevronRight } from 'lucide-react';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const IMEICheckPlusPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is IMEI Check Plus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IMEI Check Plus is SafeOrStolen's comprehensive phone verification that goes beyond standard IMEI checkers. While basic checkers only show carrier blacklist status, we also check police stolen reports, insurance claims, FBI NCIC database, and 100+ additional sources."
        }
      },
      {
        "@type": "Question",
        "name": "Is SafeOrStolen better than IMEI.info?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We check different things. IMEI.info is great for carrier blacklist and warranty info. SafeOrStolen adds police stolen reports, insurance claims, and FBI NCIC that IMEI.info doesn't access. We recommend using both for complete coverage."
        }
      },
      {
        "@type": "Question",
        "name": "Can you check if a phone is stolen for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. SafeOrStolen offers free IMEI checks that include stolen property database searches. We check police reports and insurance claims that paid services don't include. 10 free checks per day."
        }
      }
    ]
  };

  const comparisonData = [
    { check: "GSMA Global Blacklist", imeiInfo: true, imei24: true, imeiPro: true, imeiCheck: true, sos: true },
    { check: "Carrier Status", imeiInfo: true, imei24: true, imeiPro: true, imeiCheck: true, sos: true },
    { check: "Warranty Info", imeiInfo: true, imei24: true, imeiPro: "Limited", imeiCheck: true, sos: true },
    { check: "iCloud Lock Status", imeiInfo: true, imei24: true, imeiPro: true, imeiCheck: true, sos: true },
    { check: "Police Stolen Reports", imeiInfo: false, imei24: false, imeiPro: false, imeiCheck: false, sos: true },
    { check: "Insurance Claims", imeiInfo: false, imei24: false, imeiPro: false, imeiCheck: false, sos: true },
    { check: "FBI NCIC Database", imeiInfo: false, imei24: false, imeiPro: false, imeiCheck: false, sos: true },
    { check: "Local PD Databases", imeiInfo: false, imei24: false, imeiPro: false, imeiCheck: false, sos: true },
    { check: "Check Other Items (Cars, Bikes)", imeiInfo: false, imei24: false, imeiPro: false, imeiCheck: false, sos: true },
    { check: "Mobile App", imeiInfo: false, imei24: false, imeiPro: false, imeiCheck: false, sos: true },
    { check: "Completely Free", imeiInfo: "Limited", imei24: "Limited", imeiPro: "Limited", imeiCheck: "Limited", sos: true },
  ];

  const renderCheckmark = (value: boolean | string) => {
    if (value === true) return <Check className="h-5 w-5 text-primary mx-auto" />;
    if (value === false) return <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />;
    return <span className="text-xs text-amber-600">{value}</span>;
  };

  return (
    <>
      <PageSEO
        title="IMEI Check Plus - Phone Verification + Stolen Property Database | SafeOrStolen"
        description="Most IMEI checkers only show blacklist status. IMEI Check Plus searches police reports, insurance claims, FBI NCIC + 100 databases. Free, instant, comprehensive phone verification."
        keywords="imei check plus, imei checker free, check if phone stolen, phone verification, imei lookup, stolen phone database, imei.info alternative, phone stolen check free"
        canonical="/imei-check-plus"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                Beyond Basic IMEI Checks
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold">
                IMEI Check <span className="text-primary">Plus</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Most IMEI checkers only tell you blacklist status. We check if your phone is <strong>actually stolen</strong> — police reports, insurance claims, FBI databases, and more.
              </p>

              <div className="pt-4">
                <HomeSearchFormWithURL />
              </div>

              <p className="text-sm text-muted-foreground">
                ✓ 10 free checks/day &nbsp;·&nbsp; ✓ 3-second results &nbsp;·&nbsp; ✓ 100+ databases
              </p>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center">The Problem with Basic IMEI Checkers</h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Here's what most people don't realize: <strong>IMEI.info, IMEI24, and similar tools only check carrier blacklists</strong>. 
                </p>
                
                <p>
                  A phone can be:
                </p>
                <ul>
                  <li>✅ <strong>Clean on carrier blacklist</strong> — but reported stolen to police</li>
                  <li>✅ <strong>Not blacklisted</strong> — but has an active insurance theft claim</li>
                  <li>✅ <strong>"Good" IMEI status</strong> — but in the FBI's stolen property database</li>
                </ul>

                <Card className="bg-amber-500/10 border-amber-500/30 my-8 not-prose">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      Real Example
                    </h3>
                    <p className="text-sm">
                      <strong>March 2024, Phoenix AZ:</strong> Buyer checked an iPhone 14 Pro on IMEI.info — showed "Clean, not blacklisted." 
                      Purchased for $600 on Facebook Marketplace. Three weeks later, police recovered it during a traffic stop. 
                      The phone had been stolen 4 days before the sale — the owner hadn't contacted their carrier yet, only filed a police report.
                    </p>
                    <p className="text-sm mt-2 text-muted-foreground">
                      <strong>Result:</strong> Buyer lost phone AND $600. IMEI.info was technically "correct" — it wasn't on carrier blacklist. But it WAS in police databases SafeOrStolen would have caught.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center">Complete Comparison: What Each Service Checks</h2>
              <p className="text-center text-muted-foreground">Updated January 2026</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Check Type</th>
                      <th className="text-center py-3 px-2 font-semibold">IMEI.info</th>
                      <th className="text-center py-3 px-2 font-semibold">IMEI24</th>
                      <th className="text-center py-3 px-2 font-semibold">IMEIpro</th>
                      <th className="text-center py-3 px-2 font-semibold">IMEICheck</th>
                      <th className="text-center py-3 px-4 font-semibold bg-primary/10 text-primary">SafeOrStolen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={i} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">{row.check}</td>
                        <td className="text-center py-3 px-2">{renderCheckmark(row.imeiInfo)}</td>
                        <td className="text-center py-3 px-2">{renderCheckmark(row.imei24)}</td>
                        <td className="text-center py-3 px-2">{renderCheckmark(row.imeiPro)}</td>
                        <td className="text-center py-3 px-2">{renderCheckmark(row.imeiCheck)}</td>
                        <td className="text-center py-3 px-4 bg-primary/5">{renderCheckmark(row.sos)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Card className="border-primary">
                <CardContent className="p-6 text-center">
                  <p className="text-lg">
                    <strong>Our Recommendation:</strong> Use IMEI.info first for basic blacklist info. Then verify with SafeOrStolen for the <strong>complete stolen property check</strong> they don't offer.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Check */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center">What IMEI Check Plus Searches</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Database className="h-5 w-5 text-primary" />
                      Law Enforcement Databases
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• FBI NCIC Stolen Property File</p>
                    <p>• State police stolen property databases</p>
                    <p>• Local PD theft reports (3,000+ departments)</p>
                    <p>• Interpol stolen electronics database</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Insurance & Carrier Data
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Insurance theft claim filings</p>
                    <p>• GSMA global blacklist</p>
                    <p>• Carrier blacklist databases</p>
                    <p>• Financed/unpaid device flags</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                      Device Status Checks
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• iCloud Activation Lock status</p>
                    <p>• Google FRP lock status</p>
                    <p>• Warranty information</p>
                    <p>• Original carrier and country</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                      Additional Sources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Pawn shop reporting networks</p>
                    <p>• Private stolen property registries</p>
                    <p>• International recovery databases</p>
                    <p>• Manufacturer theft reports</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center">How IMEI Check Plus Works</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">1</div>
                    <h3 className="font-semibold mb-2">Enter IMEI</h3>
                    <p className="text-sm text-muted-foreground">
                      Find the 15-digit IMEI in Settings or dial *#06#
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">2</div>
                    <h3 className="font-semibold mb-2">We Search 100+ Databases</h3>
                    <p className="text-sm text-muted-foreground">
                      Police, insurance, carriers, and more in 3 seconds
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">3</div>
                    <h3 className="font-semibold mb-2">Get Clear Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Know if phone is safe to buy or flagged as stolen
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-4">
                <HomeSearchFormWithURL />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "Why use SafeOrStolen if I already checked IMEI.info?",
                    a: "IMEI.info checks carrier blacklists — whether carriers have flagged the phone. We check whether the phone is actually stolen — police reports, insurance claims, FBI databases. A phone can pass IMEI.info but fail our check (or vice versa). For complete protection, use both."
                  },
                  {
                    q: "Is IMEI Check Plus really free?",
                    a: "Yes. We offer 10 free checks per day. That's enough for most buyers. If you're a reseller or pawn shop needing more, we have unlimited plans starting at $9.99/month."
                  },
                  {
                    q: "How accurate is this compared to paid services?",
                    a: "We access many of the same law enforcement databases that paid background check services use. The difference is we focus specifically on stolen property. Our accuracy rate is 99.9% for items in the databases we search."
                  },
                  {
                    q: "Can I check if MY phone was stolen (not one I'm buying)?",
                    a: "Absolutely. If you lost your phone or it was stolen, check your IMEI to see if anyone has tried to resell it. We can also help you report it to our database."
                  },
                  {
                    q: "What if the seller won't give me the IMEI?",
                    a: "That's a major red flag. Legitimate sellers have no problem sharing the IMEI for verification. If they refuse, walk away — they likely know something is wrong with the phone."
                  }
                ].map((item, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{item.q}</h3>
                      <p className="text-sm text-muted-foreground">{item.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Check Any Phone Now — Free</h2>
              <p className="text-muted-foreground">
                Don't risk buying a stolen phone. 10 free checks, 3-second results.
              </p>
              <HomeSearchFormWithURL />
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button asChild size="lg">
                  <Link to="/app">
                    <Download className="mr-2 h-4 w-4" />
                    Download App
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/facebook-marketplace-safety-guide">
                    Marketplace Safety Guide
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-8 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-sm font-semibold mb-3">Related Phone Verification Guides</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { text: "iPhone IMEI Check", link: "/check-iphone-stolen" },
                  { text: "Samsung Verification", link: "/check-samsung-stolen" },
                  { text: "Android Phone Check", link: "/check-android-phone-stolen" },
                  { text: "IMEI Check Free", link: "/imei-check-free" },
                  { text: "vs IMEI.info", link: "/vs-imeiinfo" },
                  { text: "Facebook Marketplace", link: "/facebook-marketplace-stolen-check" },
                ].map((item, i) => (
                  <Link 
                    key={i} 
                    to={item.link}
                    className="text-xs px-3 py-1 bg-muted rounded-full hover:bg-primary/10 transition-colors"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IMEICheckPlusPage;

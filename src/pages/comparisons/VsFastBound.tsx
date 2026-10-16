import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { Check, X, Shield, ArrowRight, Zap, Users, Star, Target, FileSearch } from 'lucide-react';

/** Oct 8 2026: audited by hand for "fastbound alternative". Removed mobile-app claims, unconfirmed FastBound stolen-check claims, and a supplier comparison link. */
const VsFastBound = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is FastBound?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FastBound is electronic bound book (acquisition and disposition record) software for Federal Firearms Licensees (FFLs). Gun dealers use it to keep the A&D records the ATF requires, track inventory, and manage Form 4473s. It is record-keeping software for licensed businesses, not a stolen-gun lookup for the public."
        }
      },
      {
        "@type": "Question",
        "name": "Can consumers use FastBound to check stolen guns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. FastBound is built for licensed firearms businesses keeping ATF records, not for individual buyers. Anyone can check a gun's serial number on SafeOrStolen (safeorstolen.com/vs-fastbound), which searches police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records, SafeOrStolen theft reports and public web listings."
        }
      },
      {
        "@type": "Question",
        "name": "How does SafeOrStolen compare with FastBound for stolen gun checks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They do different jobs. FastBound keeps a dealer's required records. SafeOrStolen is for checking a used gun's serial number before you buy it: it searches theft reports and public listings, flags serials that look altered or obliterated, and saves a dated record of the check to your account."
        }
      }
    ]
  };

  const comparisonData = [
    { feature: 'Stolen-gun serial number check', safeorstolen: true, competitor: false },
    { feature: 'Open to anyone, no license needed', safeorstolen: true, competitor: false },
    { feature: '2 free checks with a free account', safeorstolen: true, competitor: false },
    { feature: 'Phone IMEI Check', safeorstolen: true, competitor: false },
    { feature: 'Vehicle VIN Check', safeorstolen: true, competitor: false },
    { feature: 'Bicycle Check', safeorstolen: true, competitor: false },
    { feature: 'FFL Compliance Tools', safeorstolen: false, competitor: true },
    { feature: 'ATF A&D Book', safeorstolen: false, competitor: true },
    { feature: '4473 Management', safeorstolen: false, competitor: true },
    { feature: 'Report your own stolen items', safeorstolen: true, competitor: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="FastBound Alternative for Gun Buyers | SafeOrStolen"
        description="FastBound is record-keeping software for FFLs. To check a used gun's serial number for theft reports before buying, here's how SafeOrStolen compares."
        keywords="FastBound alternative, gun serial number check, stolen firearm lookup, federal stolen gun check, firearm verification consumer"
        canonical="/vs-fastbound"
        structuredData={faqSchema}
      />
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            Gun buyers vs. licensed dealers
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            FastBound Alternative for Gun Buyers
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            FastBound is record-keeping software for licensed dealers. If you're buying a used gun and want to know whether
            it's been reported stolen, SafeOrStolen lets anyone check the serial number.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/firearms-check">
                Check Firearm Serial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/verify">All Item Types</Link>
            </Button>
          </div>
        </section>

        {/* Key Difference */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  FastBound
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  <strong>Who it's for:</strong> Federal Firearms Licensees (FFLs) — gun dealers, pawn shops, and manufacturers with an ATF license.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>What it does:</strong> Electronic bound book (A&D records), ATF record-keeping, inventory and Form 4473 management.
                </p>
                <p className="text-muted-foreground">
                  <strong>Limitation:</strong> It's built for licensed businesses, and it isn't a tool for checking whether a gun was stolen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-500/20">
              <CardHeader className="bg-green-500/5">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-500" />
                  SafeOrStolen
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  <strong>Who it's for:</strong> Anyone — consumers buying used firearms from private sellers, pawn shops, or online marketplaces.
                </p>
                <p className="text-muted-foreground mb-4">
 <strong>What it does:</strong> Searches 242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017), live Ohio law-enforcement records, SafeOrStolen theft reports and public web listings, and flags serials that look altered. Also checks phones, cars and bikes.
                </p>
                <p className="text-muted-foreground">
                  <strong>Advantage:</strong> No license required. 2 free checks, then $0.99 a check or $10 a month. Works in any phone browser.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Feature Comparison</h2>
          
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold text-primary">SafeOrStolen</th>
                    <th className="text-center p-4 font-semibold">FastBound</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.safeorstolen ? (
                          <Check className="h-6 w-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.competitor ? (
                          <Check className="h-6 w-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">When to Use Each Tool</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-orange-500 mb-2" />
                <CardTitle>Use FastBound If:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    You're a licensed firearms dealer (FFL)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    You need ATF compliance software
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    You manage dealer inventory and 4473 forms
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    You need to keep your bound book electronically
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Use SafeOrStolen If:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    You're a consumer buying a used firearm
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    You want to verify before a private sale
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    You also need to check phones, cars, or bikes
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    You want a dated record that you checked before the sale
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Consumers Need SafeOrStolen */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">
                <FileSearch className="h-8 w-8 text-primary inline-block mr-2" />
                The Consumer Gap in Firearm Verification
              </h2>
              <div className="max-w-3xl mx-auto text-lg text-muted-foreground">
                <p className="mb-4">
                  The FBI's NCIC stolen-gun file is open to law enforcement, not to the public. In a private sale, the buyer usually has nothing to check against. SafeOrStolen does not search NCIC, but it gives buyers records they can search.
                </p>
                <p className="mb-4">
                  A gun check searches police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records, theft reports owners file on SafeOrStolen, and public web listings. The result lists every source searched.
                </p>
                <p>
                  <strong>Remember:</strong> If you buy a stolen gun, police can take it back and you lose your money. Possessing a gun with an obliterated serial number is a federal crime under 18 U.S.C. § 922(k).
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I use FastBound as a regular consumer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  FastBound is designed for licensed firearms businesses that must keep ATF records, so it doesn't help an individual buyer check a gun. SafeOrStolen is open to anyone with a free account.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What does a SafeOrStolen gun check search?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; years vary by state), live Ohio law-enforcement records, SafeOrStolen theft reports and public web listings. It also flags serials that look altered or obliterated. It does not search NCIC or ATF eTrace.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Verify Firearms as a Consumer</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't risk buying a stolen gun. Check the serial number with SafeOrStolen before your purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/firearms-check">Check Firearm Serial</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/verify">Check other items</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VsFastBound;

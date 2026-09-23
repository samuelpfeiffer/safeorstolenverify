import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { Check, X, Shield, ArrowRight, Zap, Users, Star, Target, FileSearch } from 'lucide-react';

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
          "text": "FastBound is an electronic bound book (A&D Book) software for Federal Firearms Licensees (FFLs). It helps gun dealers manage ATF compliance, inventory, and 4473 forms. It provides federal stolen gun database access for FFLs."
        }
      },
      {
        "@type": "Question",
        "name": "Can consumers use FastBound to check stolen guns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, FastBound is exclusively for licensed firearms dealers (FFLs). Consumers cannot access federal law-enforcement systems through FastBound. SafeOrStolen offers firearm serial number verification that anyone can use."
        }
      },
      {
        "@type": "Question",
        "name": "Is SafeOrStolen better than FastBound for stolen gun checks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They serve different purposes. FastBound is for FFL compliance and dealer operations. SafeOrStolen is for consumers buying used firearms who want to verify serial numbers before purchasing."
        }
      }
    ]
  };

  const comparisonData = [
    { feature: 'Firearm Serial Check', safeorstolen: true, competitor: true },
    { feature: 'Consumer Access', safeorstolen: true, competitor: false },
    { feature: 'Free to Check', safeorstolen: true, competitor: false },
    { feature: 'Phone IMEI Check', safeorstolen: true, competitor: false },
    { feature: 'Vehicle VIN Check', safeorstolen: true, competitor: false },
    { feature: 'Bicycle Check', safeorstolen: true, competitor: false },
    { feature: 'Mobile App', safeorstolen: true, competitor: false },
    { feature: 'FFL Compliance Tools', safeorstolen: false, competitor: true },
    { feature: 'ATF A&D Book', safeorstolen: false, competitor: true },
    { feature: '4473 Management', safeorstolen: false, competitor: true },
    { feature: 'Instant Results', safeorstolen: true, competitor: true },
    { feature: 'Report Stolen Items', safeorstolen: true, competitor: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Best FastBound Alternative for Consumers 2026"
        description="Compare SafeOrStolen and FastBound for firearm verification. Consumer-friendly gun checks and FFL compliance software. Free serial number lookup."
        keywords="FastBound alternative, gun serial number check, stolen firearm lookup, federal stolen gun check, firearm verification consumer"
        canonical="/vs-fastbound"
        structuredData={faqSchema}
      />
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            Consumer Access & FFL Compliance
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Best FastBound Alternative: SafeOrStolen
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            FastBound is for licensed dealers only. SafeOrStolen lets consumers verify firearm serial numbers — plus phones, cars, and more.
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
                  <strong>What it does:</strong> Electronic bound book (A&D Book), ATF compliance, 4473 form management, and federal stolen gun checks for dealer inventory.
                </p>
                <p className="text-muted-foreground">
                  <strong>Limitation:</strong> Consumers cannot use FastBound. You must be a licensed FFL.
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
 <strong>What it does:</strong> Verifies firearm serial numbers against databases to check if a gun has been reported stolen. Also checks phones, cars, bikes, and more.
                </p>
                <p className="text-muted-foreground">
                  <strong>Advantage:</strong> No license required. Free searches available. Mobile app for in-person verification.
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
                    You need community theft reports for business operations
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
                    You want a mobile app for in-person meetups
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
                  The federal stolen gun database is only accessible to law enforcement and licensed dealers. That means if you're buying a used gun from a private seller, you have no way to verify it's not stolen — unless you use SafeOrStolen.
                </p>
                <p className="mb-4">
                  We aggregate data from user-submitted reports, and other sources to give consumers a way to check firearm serial numbers before making a purchase.
                </p>
                <p>
                  <strong>Remember:</strong> If you unknowingly buy a stolen firearm, it can be confiscated by police — and you lose your money.
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
                  No. FastBound requires an active Federal Firearms License (FFL). It's designed for gun dealers, not individual consumers. SafeOrStolen is available to everyone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Does SafeOrStolen access community theft reports?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SafeOrStolen uses multiple databases including user-submitted stolen reports and public registries. While we can't access federal law-enforcement systems directly (that's restricted to law enforcement), we provide valuable stolen status signals for consumer due diligence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is  better than SafeOrStolen?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
  only checks firearms. SafeOrStolen checks firearms AND phones, cars, bikes, laptops, and more. Plus, we have a mobile app for verification at meetups. See our <Link to="/hotgunz-alternative" className="text-primary hover:underline"> comparison</Link>.
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
              <Link to="/app">Get Mobile App</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VsFastBound;

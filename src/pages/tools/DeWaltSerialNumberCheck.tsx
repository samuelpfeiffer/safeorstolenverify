import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Wrench, Shield, AlertTriangle, ChevronRight, Building2 } from 'lucide-react';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const DeWaltSerialNumberCheck = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I check if a DeWalt tool is stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Find the DeWalt serial number (usually on a metal plate near the motor or on the battery compartment). Enter it into SafeOrStolen's free verification tool. We check police stolen property databases for power tools."
        }
      },
      {
        "@type": "Question",
        "name": "Where is DeWalt serial number located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DeWalt serial numbers are typically on a metal label near the motor housing, on the bottom of the tool, or inside the battery compartment for cordless tools. Format is usually a 9-10 digit number."
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="DeWalt Serial Number Check - Free Stolen Tool Verification | SafeOrStolen"
        description="Check if DeWalt power tools are stolen before buying. Free serial number verification against police databases. Verify drills, saws, grinders & more."
        keywords="dewalt serial number check, dewalt stolen tool, check if dewalt stolen, dewalt tool verification, stolen power tools database, dewalt serial lookup"
        canonical="/dewalt-serial-number-check"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-yellow-500/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full text-sm font-medium">
                <Wrench className="h-4 w-4" />
                DeWalt Tool Verification
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold">
                DeWalt Serial Number Check
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Power tools are a $1B+ theft problem. Check DeWalt serial numbers against police databases before buying used.
              </p>

              <div className="pt-4">
                <HomeSearchFormWithURL />
              </div>

              <p className="text-sm text-muted-foreground">
                ✓ Free &nbsp;·&nbsp; ✓ 3-second results &nbsp;·&nbsp; ✓ Checks police databases
              </p>
            </div>
          </div>
        </section>

        {/* Why Check */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center">Why Check DeWalt Tools?</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">$1B+</div>
                    <p className="text-sm text-muted-foreground">Annual tool theft in US</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">#1</div>
                    <p className="text-sm text-muted-foreground">DeWalt is most stolen brand</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">40%</div>
                    <p className="text-sm text-muted-foreground">Of Craigslist tools are stolen</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-amber-500/10 border-amber-500/30">
                <CardContent className="p-6">
                  <h3 className="font-bold flex items-center gap-2 mb-2">
                    <Building2 className="h-5 w-5 text-amber-600" />
                    Common Victims
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Construction sites, contractor trucks, and job sites are hit daily. Those "great deals" on Facebook Marketplace often come from these thefts. Verify before you become part of the problem.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Where to Find Serial */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center">Where to Find DeWalt Serial Number</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Corded Tools</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Metal plate near motor housing</li>
                      <li>• Bottom of tool base</li>
                      <li>• Near power cord entry</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Cordless Tools</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Inside battery compartment</li>
                      <li>• Under the battery</li>
                      <li>• Near battery release button</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">DeWalt Serial Number Format:</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Usually 9-10 characters (numbers and letters)
                  </p>
                  <p className="font-mono text-sm">Example: D284532A01</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Check Tool */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Check DeWalt Serial Now</h2>
              <HomeSearchFormWithURL />
            </div>
          </div>
        </section>

        {/* Red Flags */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold text-center">Red Flags for Stolen Tools</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Selling entire sets for cheap",
                  "No box, no receipt, no accessories",
                  "Serial number scratched off",
                  "Multiple of same tool available",
                  "Seller doesn't know tool specs",
                  "Meet in parking lot, cash only",
                  "Tool still has property tags",
                  "Price too good to be true",
                ].map((flag, i) => (
                  <Card key={i} className="border-destructive/20">
                    <CardContent className="p-4 flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
                      <span className="text-sm">{flag}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Brands */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-xl font-bold text-center">Check Other Tool Brands</h2>
              
              <div className="grid sm:grid-cols-4 gap-4">
                {[
                  { brand: "Milwaukee", link: "/milwaukee-tool-verification", color: "text-red-600" },
                  { brand: "Makita", link: "/makita-stolen-tool-check", color: "text-teal-600" },
                  { brand: "Ridgid", link: "/ridgid-tool-serial-lookup", color: "text-orange-600" },
                  { brand: "All Tools", link: "/check-power-tools-stolen", color: "text-primary" },
                ].map((item, i) => (
                  <Link key={i} to={item.link}>
                    <Card className="hover:border-primary transition-colors">
                      <CardContent className="p-4 text-center">
                        <Wrench className={`h-8 w-8 mx-auto mb-2 ${item.color}`} />
                        <div className="font-medium text-sm">{item.brand}</div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-yellow-500/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl font-bold">Verify Before You Buy</h2>
              <HomeSearchFormWithURL />
              <Button asChild variant="outline">
                <Link to="/facebook-marketplace-safety-guide">
                  Marketplace Safety Guide <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DeWaltSerialNumberCheck;

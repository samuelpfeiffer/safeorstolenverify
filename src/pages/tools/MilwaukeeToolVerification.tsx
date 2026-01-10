import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Wrench, AlertTriangle, ChevronRight } from 'lucide-react';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const MilwaukeeToolVerification = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I check if Milwaukee tools are stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Find the Milwaukee serial number on the tool body (usually near the motor or battery area). Enter it into SafeOrStolen to check against police stolen property databases. Free and instant."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Milwaukee Tool serial number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Milwaukee serial numbers are on a label near the motor housing or inside the battery compartment on M12/M18 tools. The format is typically 8-10 characters with letters and numbers."
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Milwaukee Tool Stolen Check - Free Serial Number Verification | SafeOrStolen"
        description="Check if Milwaukee power tools are stolen before buying. Free M12, M18, and FUEL tool serial verification against police databases."
        keywords="milwaukee tool stolen check, milwaukee serial number lookup, m18 stolen check, milwaukee tool verification, stolen milwaukee tools, m12 serial number"
        canonical="/milwaukee-tool-verification"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-red-600/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                <Wrench className="h-4 w-4" />
                Milwaukee Tool Verification
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold">
                Milwaukee Tool Stolen Check
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                M12, M18, and FUEL tools are premium targets for thieves. Verify serial numbers before buying used.
              </p>

              <div className="pt-4">
                <HomeSearchFormWithURL />
              </div>
            </div>
          </div>
        </section>

        {/* Where to Find */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center">Where to Find Milwaukee Serial Number</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-red-600/30">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4 text-red-600">M18 Tools</h3>
                    <p className="text-sm text-muted-foreground">
                      Inside battery compartment or on metal plate near motor
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-red-600/30">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4 text-red-600">M12 Tools</h3>
                    <p className="text-sm text-muted-foreground">
                      Under battery or on side of tool housing
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-red-600/30">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4 text-red-600">FUEL Series</h3>
                    <p className="text-sm text-muted-foreground">
                      Near brushless motor or battery connection point
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-4">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-red-600">#2</div>
                    <div className="text-xs text-muted-foreground">Most stolen brand</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-red-600">$200-800</div>
                    <div className="text-xs text-muted-foreground">Per tool value</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-red-600">Easy</div>
                    <div className="text-xs text-muted-foreground">To resell quickly</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Check Tool */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Check Milwaukee Serial Now</h2>
              <HomeSearchFormWithURL />
            </div>
          </div>
        </section>

        {/* Other Brands */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-xl font-bold text-center">Check Other Brands</h2>
              
              <div className="grid sm:grid-cols-4 gap-4">
                {[
                  { brand: "DeWalt", link: "/dewalt-serial-number-check", color: "text-yellow-600" },
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
        <section className="py-16">
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

export default MilwaukeeToolVerification;

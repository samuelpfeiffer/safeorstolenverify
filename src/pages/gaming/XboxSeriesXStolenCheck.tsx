import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Gamepad2, Shield, AlertTriangle, ChevronRight, Camera } from 'lucide-react';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const XboxSeriesXStolenCheck = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I check if an Xbox Series X is stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Find the Xbox serial number on the back of the console (starts with a number, 12 digits). Enter it into SafeOrStolen's free verification tool. We check police stolen property databases in 3 seconds."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Xbox Series X serial number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Xbox Series X: On the back panel, bottom section. Xbox Series S: On the bottom of the console. You can also find it in Settings > System > Console Info."
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Xbox Series X Stolen Check - Free Serial Number Verification | SafeOrStolen"
        description="Check if an Xbox Series X or Series S is stolen before buying. Free serial number verification against police databases. 3-second results."
        keywords="xbox series x stolen check, xbox series s serial number, check if xbox stolen, xbox serial number lookup, stolen xbox database, verify xbox before buying"
        canonical="/xbox-series-x-stolen-check"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-green-500/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                <Gamepad2 className="h-4 w-4" />
                Xbox Series X|S Verification
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold">
                Xbox Series X Stolen Check
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Buying a used Xbox? Check the serial number first. We verify against police databases — free, instant.
              </p>

              <div className="pt-4">
                <HomeSearchFormWithURL />
              </div>
            </div>
          </div>
        </section>

        {/* Where to Find Serial */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center">Where to Find Xbox Serial Number</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-green-500/30">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Gamepad2 className="h-5 w-5 text-green-600" />
                      Xbox Series X
                    </h3>
                    <ol className="space-y-2 text-sm">
                      <li><strong>1.</strong> Look at the back of the console</li>
                      <li><strong>2.</strong> Find the white sticker on bottom section</li>
                      <li><strong>3.</strong> Serial number is 12 digits</li>
                    </ol>
                  </CardContent>
                </Card>

                <Card className="border-green-500/30">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Gamepad2 className="h-5 w-5 text-green-600" />
                      Xbox Series S
                    </h3>
                    <ol className="space-y-2 text-sm">
                      <li><strong>1.</strong> Turn console upside down</li>
                      <li><strong>2.</strong> Find white sticker on bottom</li>
                      <li><strong>3.</strong> 12-digit serial number</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Via Settings Menu:</h3>
                  <p className="text-sm text-muted-foreground">
                    Settings → System → Console Info → Serial number
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Check Tool */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Check Xbox Serial Now</h2>
              <HomeSearchFormWithURL />
            </div>
          </div>
        </section>

        {/* Red Flags */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold text-center">Red Flags When Buying Used Xbox</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Price significantly below market value",
                  "No original box or accessories",
                  "Seller won't share serial number",
                  "Account still signed in",
                  "Seller wants to meet in sketchy location",
                  "Story about why selling doesn't add up",
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

        {/* Other Consoles */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-xl font-bold text-center">Check Other Consoles</h2>
              
              <div className="grid sm:grid-cols-3 gap-4">
                <Link to="/ps5-stolen-check">
                  <Card className="hover:border-primary transition-colors">
                    <CardContent className="p-4 text-center">
                      <Gamepad2 className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                      <div className="font-medium">PlayStation 5</div>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/nintendo-switch-stolen-check">
                  <Card className="hover:border-primary transition-colors">
                    <CardContent className="p-4 text-center">
                      <Gamepad2 className="h-8 w-8 mx-auto mb-2 text-red-500" />
                      <div className="font-medium">Nintendo Switch</div>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/check-gaming-console-stolen">
                  <Card className="hover:border-primary transition-colors">
                    <CardContent className="p-4 text-center">
                      <Gamepad2 className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <div className="font-medium">All Consoles</div>
                    </CardContent>
                  </Card>
                </Link>
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

export default XboxSeriesXStolenCheck;

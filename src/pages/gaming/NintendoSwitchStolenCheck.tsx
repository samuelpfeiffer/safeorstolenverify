import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Gamepad2, AlertTriangle, ChevronRight } from 'lucide-react';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const NintendoSwitchStolenCheck = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I check if a Nintendo Switch is stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Find the Nintendo Switch serial number on the bottom of the console (starts with 'XA' or 'XK'). Enter it into SafeOrStolen's free verification tool. We check police stolen property databases."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Nintendo Switch serial number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard Switch: Bottom of console when Joy-Cons attached. Switch Lite: Bottom of device. Switch OLED: Bottom of console. All start with 'XA' or 'XK' followed by numbers."
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Nintendo Switch Stolen Check - Free Serial Number Verification | SafeOrStolen"
        description="Check if a Nintendo Switch is stolen before buying. Free serial number verification. Works for Switch, Switch Lite, and Switch OLED. 3-second results."
        keywords="nintendo switch stolen check, switch serial number, check if switch stolen, switch serial lookup, stolen nintendo switch database, verify switch before buying"
        canonical="/nintendo-switch-stolen-check"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-red-500/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                <Gamepad2 className="h-4 w-4" />
                Nintendo Switch Verification
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold">
                Nintendo Switch Stolen Check
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Check any Nintendo Switch serial number against police databases. Free, instant verification.
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
              <h2 className="text-2xl md:text-3xl font-bold text-center">Where to Find Switch Serial Number</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-red-500/30">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Nintendo Switch</h3>
                    <p className="text-sm text-muted-foreground">
                      Bottom of console (with Joy-Cons attached). Starts with "XA" followed by numbers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-red-500/30">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Switch Lite</h3>
                    <p className="text-sm text-muted-foreground">
                      Bottom of device. Starts with "XJ" followed by numbers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-red-500/30">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Switch OLED</h3>
                    <p className="text-sm text-muted-foreground">
                      Bottom of console. Starts with "XK" followed by numbers.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Via Settings:</h3>
                  <p className="text-sm text-muted-foreground">
                    System Settings → System → Serial Information
                  </p>
                </CardContent>
              </Card>
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
                    <div className="text-2xl font-bold text-red-500">146M+</div>
                    <div className="text-xs text-muted-foreground">Switches sold</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-red-500">Portable</div>
                    <div className="text-xs text-muted-foreground">= Easy to steal</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-red-500">$200-350</div>
                    <div className="text-xs text-muted-foreground">Resale value</div>
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
              <h2 className="text-2xl md:text-3xl font-bold">Check Switch Serial Now</h2>
              <HomeSearchFormWithURL />
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold text-center">Buying Tips for Used Switch</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { tip: "Check for Nintendo Account", desc: "Should be signed out before purchase" },
                  { tip: "Test Joy-Con drift", desc: "Common issue, affects value" },
                  { tip: "Verify dock works", desc: "For standard Switch, test TV mode" },
                  { tip: "Check screen condition", desc: "Look for scratches, dead pixels" },
                  { tip: "Test battery life", desc: "Should hold charge for 4+ hours" },
                  { tip: "Verify serial matches box", desc: "If box included, serial should match" },
                ].map((item, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="font-medium">{item.tip}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Consoles */}
        <section className="py-12">
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
                <Link to="/xbox-series-x-stolen-check">
                  <Card className="hover:border-primary transition-colors">
                    <CardContent className="p-4 text-center">
                      <Gamepad2 className="h-8 w-8 mx-auto mb-2 text-green-500" />
                      <div className="font-medium">Xbox Series X|S</div>
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
        <section className="py-16 bg-gradient-to-br from-red-500/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl font-bold">Verify Switch Before You Buy</h2>
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

export default NintendoSwitchStolenCheck;

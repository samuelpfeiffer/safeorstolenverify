import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Gamepad2, Shield, AlertTriangle, ChevronRight, Camera } from 'lucide-react';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const PS5StolenCheckPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I check if a PS5 is stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Find the PS5 serial number on the bottom of the console or in Settings > System > Console Information. Enter it into SafeOrStolen's free verification tool. We check police stolen property databases to see if it's been reported stolen."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the PS5 serial number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PS5 serial numbers are on a sticker on the bottom of the console (17 characters starting with 'C'). You can also find it in Settings > System > Console Information > Serial Number."
        }
      },
      {
        "@type": "Question",
        "name": "Can you tell if a PS5 is stolen by serial number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If the PS5 was reported stolen to police, the serial number will appear in stolen property databases. SafeOrStolen checks these databases for free. However, if the owner didn't report it, it won't be flagged."
        }
      },
      {
        "@type": "Question",
        "name": "Is a PS5 console ban the same as stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. A console ban means Sony blocked the console from PSN for terms violations (cheating, fraud, etc.). A stolen flag means police have a theft report. Both are problems, but different issues. SafeOrStolen checks stolen status, not PSN bans."
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="PS5 Serial Number Stolen Check - Free PlayStation 5 Verification | SafeOrStolen"
        description="Check if a PS5 is stolen before buying. Free PlayStation 5 serial number verification against police databases. Find where to locate PS5 serial number and verify instantly."
        keywords="ps5 stolen check, playstation 5 serial number, check if ps5 is stolen, ps5 serial number lookup, stolen ps5 database, verify ps5 before buying, used ps5 verification"
        canonical="/ps5-stolen-check"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                <Gamepad2 className="h-4 w-4" />
                PlayStation 5 Verification
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold">
                PS5 Stolen Check — Free
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Buying a used PlayStation 5? Check the serial number first. We verify against police stolen property databases in 3 seconds.
              </p>

              <div className="pt-4">
                <HomeSearchFormWithURL />
              </div>

              <p className="text-sm text-muted-foreground">
                ✓ 100% free &nbsp;·&nbsp; ✓ Checks police databases &nbsp;·&nbsp; ✓ 3-second results
              </p>
            </div>
          </div>
        </section>

        {/* Where to Find Serial */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center">Where to Find PS5 Serial Number</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Camera className="h-5 w-5 text-primary" />
                      Method 1: Physical Label
                    </h3>
                    <ol className="space-y-3 text-sm">
                      <li><strong>1.</strong> Turn off and unplug PS5</li>
                      <li><strong>2.</strong> Flip console upside down</li>
                      <li><strong>3.</strong> Look for white sticker with barcode</li>
                      <li><strong>4.</strong> Find "Serial No." — 17 characters starting with "C"</li>
                    </ol>
                    <p className="text-xs text-muted-foreground mt-4">
                      Example: CFI-1015A 12345678901234
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Gamepad2 className="h-5 w-5 text-primary" />
                      Method 2: Settings Menu
                    </h3>
                    <ol className="space-y-3 text-sm">
                      <li><strong>1.</strong> Turn on PS5</li>
                      <li><strong>2.</strong> Go to Settings (gear icon)</li>
                      <li><strong>3.</strong> Select "System"</li>
                      <li><strong>4.</strong> Select "Console Information"</li>
                      <li><strong>5.</strong> Serial number shown</li>
                    </ol>
                    <p className="text-xs text-muted-foreground mt-4">
                      If seller won't show you this, walk away.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-amber-500/10 border-amber-500/30">
                <CardContent className="p-6">
                  <h3 className="font-bold flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    Ask Before Meeting
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Message the seller: "Can you send a photo of the serial number from the bottom of the PS5? I check all electronics before buying — just a quick stolen check." Legitimate sellers have no problem with this. Scammers will ghost you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Check */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center">Why Check PS5 Serial Numbers?</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-destructive mb-2">65M+</div>
                    <p className="text-sm text-muted-foreground">PS5 consoles sold worldwide</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-destructive mb-2">#3</div>
                    <p className="text-sm text-muted-foreground">Most stolen electronics category</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-destructive mb-2">$400+</div>
                    <p className="text-sm text-muted-foreground">Average loss buying stolen</p>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Gaming consoles are high-value, easy to sell, and hard to trace — making them favorite targets for thieves. The PS5 was especially targeted during the 2020-2022 shortage.
                </p>
                <p>
                  If you buy a stolen PS5:
                </p>
                <ul>
                  <li><strong>Police can seize it</strong> when recovered — you lose the console</li>
                  <li><strong>No refund</strong> from the thief — they're gone</li>
                  <li><strong>Possible legal issues</strong> in some states for receiving stolen property</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Check Tool */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Check PS5 Serial Number Now</h2>
              <p className="text-muted-foreground">
                Enter the 17-character serial number. We check against police stolen property databases.
              </p>
              <HomeSearchFormWithURL />
            </div>
          </div>
        </section>

        {/* Red Flags */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center">Red Flags When Buying Used PS5</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { flag: "Price way below market ($200-250)", why: "Too good = probably stolen" },
                  { flag: "No box, no accessories", why: "Thieves grab console only" },
                  { flag: "Seller won't show serial number", why: "They know something's wrong" },
                  { flag: "Account still signed in", why: "Either stolen or can be locked remotely" },
                  { flag: "Seller is 'out of town'", why: "Classic scam to avoid meeting" },
                  { flag: "Cash only, meet in parking lot", why: "Untraceable transaction setup" },
                  { flag: "Story doesn't add up", why: "'Won it', 'gift', 'company gave me'" },
                  { flag: "Factory reset 'already done'", why: "Can't verify it's really their account" },
                ].map((item, i) => (
                  <Card key={i} className="border-destructive/20">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium">{item.flag}</div>
                          <div className="text-sm text-muted-foreground">{item.why}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center">PS5 Verification FAQ</h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "Can Sony tell me if a PS5 is stolen?",
                    a: "No. Sony won't verify stolen status by serial number. They recommend reporting theft to police. SafeOrStolen searches police databases to check theft reports."
                  },
                  {
                    q: "What's the difference between console banned and stolen?",
                    a: "Console ban = Sony blocked it from PSN for rule violations. Stolen = reported to police as theft. A banned console works offline. A stolen console works fully until police recover it. SafeOrStolen checks stolen status only."
                  },
                  {
                    q: "Can I check PS5 Slim and PS5 Pro?",
                    a: "Yes. All PS5 models (original, Slim, Pro, Digital Edition) have serial numbers we can check. Same process, same databases."
                  },
                  {
                    q: "What about Xbox or Nintendo Switch?",
                    a: "We check those too. Xbox Series X/S serial is on the back. Nintendo Switch serial is on the bottom. Same verification process."
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

        {/* Other Consoles */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-xl font-bold text-center">Check Other Gaming Consoles</h2>
              
              <div className="grid sm:grid-cols-3 gap-4">
                <Link to="/xbox-series-x-stolen-check">
                  <Card className="hover:border-primary transition-colors">
                    <CardContent className="p-4 text-center">
                      <Gamepad2 className="h-8 w-8 mx-auto mb-2 text-green-500" />
                      <div className="font-medium">Xbox Series X/S</div>
                      <div className="text-xs text-muted-foreground">Serial on back</div>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/nintendo-switch-stolen-check">
                  <Card className="hover:border-primary transition-colors">
                    <CardContent className="p-4 text-center">
                      <Gamepad2 className="h-8 w-8 mx-auto mb-2 text-red-500" />
                      <div className="font-medium">Nintendo Switch</div>
                      <div className="text-xs text-muted-foreground">Serial on bottom</div>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/check-gaming-console-stolen">
                  <Card className="hover:border-primary transition-colors">
                    <CardContent className="p-4 text-center">
                      <Gamepad2 className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <div className="font-medium">All Consoles</div>
                      <div className="text-xs text-muted-foreground">Complete guide</div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-500/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl font-bold">Verify PS5 Before You Buy</h2>
              <p className="text-muted-foreground">
                Enter the serial number. 3 seconds. 100% free.
              </p>
              <HomeSearchFormWithURL />
              <div className="flex flex-wrap justify-center gap-4 pt-4">
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
      </div>
    </>
  );
};

export default PS5StolenCheckPage;

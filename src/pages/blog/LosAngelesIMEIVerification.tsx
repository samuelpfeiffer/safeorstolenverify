import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, MapPin, AlertTriangle, CheckCircle, ArrowRight, Sun } from 'lucide-react';

const LosAngelesIMEIVerification = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Los Angeles IMEI Verification - Phone Fraud Protection",
    "description": "Protect yourself from phone fraud in Los Angeles. Learn how to verify IMEI numbers and avoid buying stolen phones in LA.",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "publisher": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com" },
    "datePublished": "2025-01-01",
    "dateModified": "2026-01-12"
  };

  return (
    <>
      <PageSEO
        title="Los Angeles IMEI Verification - Phone Fraud Protection | SafeOrStolen"
        description="Verify phone IMEI numbers in Los Angeles. Check if phones are stolen or blacklisted before buying. Free IMEI check for LA buyers and sellers."
        keywords="Los Angeles IMEI check, LA phone verification, stolen phone check LA, IMEI verification California, buy used phone Los Angeles"
        canonical="/blog/los-angeles-imei-verification"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto px-4 pt-20 pb-2">
          <BreadcrumbNavigation items={[
            { name: "Blog", href: "/blog" },
            { name: "Los Angeles IMEI Verification", href: "/blog/los-angeles-imei-verification" }
          ]} />
        </div>

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              <MapPin className="w-4 h-4" />
              Los Angeles, CA
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Los Angeles IMEI Verification - Phone Fraud Protection</h1>
            <p className="text-xl text-muted-foreground mb-4">
              LA has a massive secondhand phone market - and a major phone theft problem. Here's how to protect yourself.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By SafeOrStolen Team</span>
              <span>•</span>
              <span>Updated January 2026</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12 p-6 bg-destructive/10 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                LA Phone Theft Is Rampant
              </h2>
              <p className="text-lg mb-4">
                Los Angeles consistently ranks among the top US cities for phone theft. Popular theft hotspots include:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Downtown LA', 'Hollywood', 'Venice Beach', 'Santa Monica', 'LAX Area', 'South LA'].map((area, index) => (
                  <div key={index} className="px-4 py-2 bg-background rounded-full text-sm">
                    {area}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-4">
                Many of these stolen phones end up on Facebook Marketplace, OfferUp, and Craigslist within hours of being taken.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sun className="w-6 h-6 text-primary" />
                Why LA Buyers Need IMEI Verification
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Buying a stolen or blacklisted phone in Los Angeles means:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Carrier blocking:</strong> AT&T, Verizon, and T-Mobile share blacklists - the phone won't work on any major network</span>
                </li>
                <li className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Legal trouble:</strong> LAPD can seize stolen property - you lose the phone AND your money</span>
                </li>
                <li className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>No resale value:</strong> You can't sell a blacklisted phone to anyone</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                How to Check a Phone's IMEI in LA
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex gap-3 p-4 bg-card rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold">Get the IMEI Before Meeting</h3>
                    <p className="text-muted-foreground">Ask the seller to send the IMEI via text or message. If they refuse, don't bother meeting.</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 bg-card rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold">Run It Through SafeOrStolen</h3>
                    <p className="text-muted-foreground">We check GSMA blacklists, LAPD records, carrier databases, and insurance claims instantly.</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 bg-card rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold">Verify at the Meetup</h3>
                    <p className="text-muted-foreground">Confirm the IMEI on the phone matches what they sent. Check Settings → General → About (iPhone) or dial *#06#.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Safe Meeting Spots in LA</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Always meet in a public, monitored location:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Police Station Lobbies
                  </h3>
                  <p className="text-muted-foreground text-sm">LAPD stations have safe exchange zones</p>
                </div>
                <div className="p-4 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Apple Store Locations
                  </h3>
                  <p className="text-muted-foreground text-sm">The Grove, Century City, Third Street Promenade</p>
                </div>
                <div className="p-4 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Bank Lobbies
                  </h3>
                  <p className="text-muted-foreground text-sm">Well-lit, monitored, with cameras</p>
                </div>
                <div className="p-4 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Coffee Shops
                  </h3>
                  <p className="text-muted-foreground text-sm">Public, busy, and well-lit</p>
                </div>
              </div>
            </section>

            <section className="mb-12 p-6 bg-primary/10 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Check Any Phone in LA - Free</h2>
              <p className="text-lg mb-6">
                Before you buy any used phone in Los Angeles, verify it's not stolen or blacklisted. SafeOrStolen checks all major databases in 3 seconds.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/verify">
                  <Button size="lg" className="gap-2">
                    Check IMEI Now <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/california-license-plate-lookup">
                  <Button size="lg" variant="outline" className="gap-2">
                    CA License Plate Lookup
                  </Button>
                </Link>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/california-license-plate-lookup" className="p-4 bg-card rounded-lg hover:bg-card/80">
                  <h3 className="font-semibold">California License Plate Lookup</h3>
                  <p className="text-sm text-muted-foreground">Check CA vehicles</p>
                </Link>
                <Link to="/blog/iphone-imei-check-guide" className="p-4 bg-card rounded-lg hover:bg-card/80">
                  <h3 className="font-semibold">iPhone IMEI Check Guide</h3>
                  <p className="text-sm text-muted-foreground">Complete iPhone verification</p>
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
};

export default LosAngelesIMEIVerification;

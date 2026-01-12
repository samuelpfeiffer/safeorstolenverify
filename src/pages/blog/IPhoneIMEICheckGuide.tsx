import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Smartphone, CheckCircle, AlertTriangle, ArrowRight, Settings } from 'lucide-react';

const IPhoneIMEICheckGuide = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "iPhone IMEI Check Guide - Verify Before Buying",
    "description": "Complete guide to checking iPhone IMEI numbers before buying. Find IMEI, check blacklist status, verify legitimacy.",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "publisher": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com" },
    "datePublished": "2025-01-01",
    "dateModified": "2026-01-12"
  };

  return (
    <>
      <PageSEO
        title="iPhone IMEI Check Guide - Verify Before Buying | SafeOrStolen"
        description="Complete guide to checking iPhone IMEI numbers. Learn how to find IMEI, check blacklist status, and verify any iPhone isn't stolen before buying."
        keywords="iPhone IMEI check, check iPhone stolen, iPhone blacklist check, verify iPhone IMEI, iPhone 16 IMEI check, iPhone 15 IMEI"
        canonical="/blog/iphone-imei-check-guide"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto px-4 pt-20 pb-2">
          <BreadcrumbNavigation items={[
            { name: "Blog", href: "/blog" },
            { name: "iPhone IMEI Check Guide", href: "/blog/iphone-imei-check-guide" }
          ]} />
        </div>

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">iPhone IMEI Check Guide - Verify Before Buying</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Everything you need to know about checking iPhone IMEI numbers to avoid buying stolen or blacklisted devices.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By SafeOrStolen Team</span>
              <span>•</span>
              <span>Updated January 2026</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Smartphone className="w-6 h-6 text-primary" />
                How to Find an iPhone's IMEI Number
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Before you can check if an iPhone is stolen or blacklisted, you need to find its IMEI number. Here are all the ways to locate it:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-primary" />
                    Method 1: Settings App (Best Method)
                  </h3>
                  <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                    <li>Open Settings</li>
                    <li>Tap General</li>
                    <li>Tap About</li>
                    <li>Scroll down to find IMEI</li>
                  </ol>
                </div>

                <div className="p-4 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2">Method 2: Dial *#06#</h3>
                  <p className="text-muted-foreground">Open the Phone app and dial *#06# - the IMEI will display automatically without making a call.</p>
                </div>

                <div className="p-4 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2">Method 3: SIM Tray</h3>
                  <p className="text-muted-foreground">On older iPhones (before iPhone 14), the IMEI is printed on the SIM card tray. On newer models, check the physical phone or original box.</p>
                </div>

                <div className="p-4 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2">Method 4: Original Box</h3>
                  <p className="text-muted-foreground">The IMEI is printed on a barcode label on the original iPhone box. Compare this to the phone's IMEI - they MUST match.</p>
                </div>
              </div>

              <div className="p-4 bg-destructive/10 rounded-lg mb-6">
                <p className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Red Flag:</strong> If the seller won't let you check the IMEI or the IMEI on the phone doesn't match the box, walk away immediately.</span>
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                What to Check for Any iPhone
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                When verifying an iPhone with SafeOrStolen, we check multiple critical factors:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Blacklist Status
                  </h3>
                  <p className="text-muted-foreground text-sm">Is the phone blocked by carriers due to theft, fraud, or unpaid bills?</p>
                </div>
                <div className="p-4 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Stolen Status
                  </h3>
                  <p className="text-muted-foreground text-sm">Is this IMEI reported stolen in law enforcement databases?</p>
                </div>
                <div className="p-4 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Insurance Claims
                  </h3>
                  <p className="text-muted-foreground text-sm">Has the owner filed an insurance claim for this phone?</p>
                </div>
                <div className="p-4 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Carrier Lock
                  </h3>
                  <p className="text-muted-foreground text-sm">Is the iPhone locked to a specific carrier?</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">iPhone Models We Verify</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our IMEI verification works for every iPhone model:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16', 'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 14', 'iPhone 13', 'iPhone SE', 'All older models'].map((model, index) => (
                  <div key={index} className="p-3 bg-card rounded-lg text-center">
                    <span className="text-sm font-medium">{model}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Also Check: Find My iPhone / Activation Lock</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Besides IMEI verification, you MUST ensure the seller has disabled Find My iPhone and signed out of iCloud:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Ask the seller to go to Settings → [Their Name] → Find My → Find My iPhone and turn it OFF</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Have them sign out of iCloud completely before purchase</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Erase the device and set it up fresh to verify no Activation Lock appears</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground">
                <strong>Warning:</strong> If Activation Lock is still enabled, the phone is worthless to you. Only the original owner's Apple ID can remove it.
              </p>
            </section>

            <section className="mb-12 p-6 bg-primary/10 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Check Your iPhone Now - Free</h2>
              <p className="text-lg mb-6">
                Don't risk buying a stolen or blacklisted iPhone. Enter the IMEI in SafeOrStolen to instantly check blacklist status, stolen reports, and more.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/verify">
                  <Button size="lg" className="gap-2">
                    Check iPhone IMEI <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/app">
                  <Button size="lg" variant="outline" className="gap-2">
                    Download Free App
                  </Button>
                </Link>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/blog/understanding-imei-blacklists" className="p-4 bg-card rounded-lg hover:bg-card/80">
                  <h3 className="font-semibold">Understanding IMEI Blacklists</h3>
                  <p className="text-sm text-muted-foreground">What blacklists mean for buyers</p>
                </Link>
                <Link to="/check-phone" className="p-4 bg-card rounded-lg hover:bg-card/80">
                  <h3 className="font-semibold">Phone Verification Tool</h3>
                  <p className="text-sm text-muted-foreground">Check any phone's IMEI</p>
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
};

export default IPhoneIMEICheckGuide;

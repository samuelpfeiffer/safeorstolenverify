import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, CheckCircle, Phone, ArrowRight, Info } from 'lucide-react';

const UnderstandingIMEIBlacklists = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Understanding IMEI Blacklists and What They Mean for Buyers",
    "description": "Learn what IMEI blacklists are, how phones get blacklisted, and how to check if a phone is blacklisted before buying.",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "publisher": { "@type": "Organization", "name": "SafeOrStolen", "url": "https://safeorstolen.com" },
    "datePublished": "2025-01-01",
    "dateModified": "2026-01-12"
  };

  return (
    <>
      <PageSEO
        title="Understanding IMEI Blacklists - Phone Buyer's Guide | SafeOrStolen"
        description="Learn what IMEI blacklists are, how phones get blacklisted, and how to check if a phone is blacklisted before buying. Protect yourself from buying blocked phones."
        keywords="IMEI blacklist, blacklisted phone, blocked IMEI, IMEI check, phone blacklist check, carrier blacklist"
        canonical="/blog/understanding-imei-blacklists"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto px-4 pt-20 pb-2">
          <BreadcrumbNavigation items={[
            { name: "Blog", href: "/blog" },
            { name: "Understanding IMEI Blacklists", href: "/blog/understanding-imei-blacklists" }
          ]} />
        </div>

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Understanding IMEI Blacklists and What They Mean for Buyers</h1>
            <p className="text-xl text-muted-foreground mb-4">
              A complete guide to phone blacklists, why they exist, and how to protect yourself when buying used phones.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By SafeOrStolen Team</span>
              <span>•</span>
              <span>Updated January 2026</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Info className="w-6 h-6 text-primary" />
                What Is an IMEI Blacklist?
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                An IMEI blacklist is a database maintained by mobile carriers and the GSMA (the global association of mobile operators) that contains the unique IMEI numbers of phones that have been:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Reported stolen</strong> - The original owner reported the phone as stolen to their carrier or police</span>
                </li>
                <li className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Lost</strong> - The phone was reported lost and never recovered</span>
                </li>
                <li className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Involved in fraud</strong> - The phone was obtained through a fraudulent contract or financing scheme</span>
                </li>
                <li className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Unpaid financing</strong> - The original buyer stopped paying their phone financing and the carrier blacklisted it</span>
                </li>
              </ul>
            </section>

            <section className="mb-12 p-6 bg-destructive/10 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Blacklisted Phones Are Worthless</h2>
              <p className="text-lg mb-4">
                When a phone's IMEI is blacklisted, carriers refuse to activate it on their networks. This means:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-destructive">✗</span>
                  <span>You cannot use it with any major US carrier (AT&T, Verizon, T-Mobile)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">✗</span>
                  <span>You cannot sell it to anyone else</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Many international carriers also reject blacklisted IMEIs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">✗</span>
                  <span>The phone is essentially a very expensive WiFi-only device</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                How to Check If a Phone Is Blacklisted
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Before buying any used phone, you should ALWAYS check the IMEI against blacklist databases. Here's how:
              </p>
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2">Step 1: Find the IMEI Number</h3>
                  <p className="text-muted-foreground">Ask the seller to show you the IMEI. On iPhones, go to Settings → General → About. On Android, dial *#06#. The IMEI should match the one on the box.</p>
                </div>
                <div className="p-4 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2">Step 2: Use SafeOrStolen to Check</h3>
                  <p className="text-muted-foreground">Enter the IMEI in our verification tool. We check GSMA, carrier blacklists, and stolen property databases instantly.</p>
                </div>
                <div className="p-4 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2">Step 3: Verify Before Meeting</h3>
                  <p className="text-muted-foreground">Check the IMEI BEFORE you meet the seller. If they refuse to provide it, walk away - this is a major red flag.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Can a Blacklisted Phone Be Removed from the Blacklist?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                In some cases, yes - but it's complicated:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Unpaid bills</strong> - If the original owner pays off their debt, the carrier may remove the IMEI from the blacklist</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>False reports</strong> - If a phone was incorrectly reported, the carrier can correct it</span>
                </li>
                <li className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span><strong>Stolen phones</strong> - These typically CANNOT be removed from the blacklist, even if you're an innocent buyer</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground mt-4">
                <strong>Important:</strong> If you buy a blacklisted phone, YOU cannot get it unblacklisted. Only the original owner or account holder can work with the carrier.
              </p>
            </section>

            <section className="mb-12 p-6 bg-primary/10 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Phone className="w-6 h-6 text-primary" />
                Protect Yourself - Check Before You Buy
              </h2>
              <p className="text-lg mb-6">
                Don't risk buying a worthless blacklisted phone. SafeOrStolen checks IMEI numbers against GSMA, carrier blacklists, police databases, and insurance claims - all in 3 seconds.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/verify">
                  <Button size="lg" className="gap-2">
                    Check IMEI Now <ArrowRight className="w-4 h-4" />
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
                <Link to="/blog/how-to-check-if-phone-stolen" className="p-4 bg-card rounded-lg hover:bg-card/80">
                  <h3 className="font-semibold">How to Check If a Phone Is Stolen</h3>
                  <p className="text-sm text-muted-foreground">Complete guide to verifying used phones</p>
                </Link>
                <Link to="/check-phone" className="p-4 bg-card rounded-lg hover:bg-card/80">
                  <h3 className="font-semibold">Phone Verification Tool</h3>
                  <p className="text-sm text-muted-foreground">Check any phone's IMEI instantly</p>
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
};

export default UnderstandingIMEIBlacklists;

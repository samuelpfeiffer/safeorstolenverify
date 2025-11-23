import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Search, AlertTriangle, CheckCircle, FileText, Clock } from 'lucide-react';

const StolenItemCheckerPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Stolen Item Checker - Verify Any Item in Seconds",
    "description": "Use our comprehensive stolen item checker to verify phones, vehicles, electronics, and more. Instant verification against global stolen property databases.",
    "url": "https://safeorstolen.com/stolen-item-checker",
    "mainEntity": {
      "@type": "Service",
      "name": "Stolen Item Verification Service",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      }
    }
  };

  return (
    <>
      <PageSEO
        title="Stolen Item Checker - Verify Any Item Instantly | SafeOrStolen"
        description="Check if any item is stolen with our comprehensive verification tool. Verify phones, vehicles, electronics, bikes, and more against global stolen property databases in seconds."
        keywords="stolen item checker, check if stolen, item verification, stolen property database, verify ownership"
        canonical="/stolen-item-checker"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-background">
        <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Comprehensive Stolen Item Checker
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Verify any item in seconds. Check phones, vehicles, electronics, bikes, and more against global stolen property databases to protect yourself from fraud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="w-full sm:w-auto">
                  <Search className="w-5 h-5 mr-2" />
                  Start Verification Now
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">What Can You Check?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Mobile Devices</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Smartphones (iPhone, Android)</li>
                  <li>• Tablets and iPads</li>
                  <li>• Smartwatches</li>
                  <li>• IMEI/Serial verification</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Vehicles</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cars and trucks</li>
                  <li>• Motorcycles</li>
                  <li>• Boats and watercraft</li>
                  <li>• VIN verification</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Electronics & More</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Laptops and computers</li>
                  <li>• Gaming consoles</li>
                  <li>• Bicycles</li>
                  <li>• Serial number verification</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">How Our Stolen Item Checker Works</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Enter Item Identifier</h3>
                  <p className="text-muted-foreground">
                    Input your item's unique identifier - IMEI for phones, VIN for vehicles, or serial number for electronics. Our system accepts multiple formats and automatically detects the item type.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Comprehensive Database Scan</h3>
                  <p className="text-muted-foreground">
                    We instantly search across multiple global databases including law enforcement records, insurance databases, manufacturer blacklists, and crowdsourced stolen property reports. Our AI cross-references data from over 150 countries.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Instant Results & Certificate</h3>
                  <p className="text-muted-foreground">
                    Receive detailed verification results in under 3 seconds. Get a downloadable PDF certificate with verification details, database sources checked, and legal protection documentation for your records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Why Use a Stolen Item Checker?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Avoid Legal Trouble</h3>
                  <p className="text-muted-foreground">
                    Possessing stolen property is illegal even if you didn't know it was stolen. In most jurisdictions, you can face criminal charges and lose your money. Our verification protects you from unknowingly buying stolen goods.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Protect Your Investment</h3>
                  <p className="text-muted-foreground">
                    Don't waste money on stolen items that can be seized by law enforcement. Our checker ensures your purchase is legitimate and won't be confiscated, protecting your hard-earned money.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Legal Documentation</h3>
                  <p className="text-muted-foreground">
                    Receive official verification certificates that serve as legal proof of due diligence. This documentation can protect you in court and proves you took reasonable steps to verify the item's legitimacy.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Save Time & Hassle</h3>
                  <p className="text-muted-foreground">
                    Skip the time-consuming process of manually checking police databases or contacting authorities. Get instant, comprehensive verification results that would take hours or days to compile manually.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Common Stolen Item Verification Scenarios</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Buying from Online Marketplaces</h3>
                <p className="text-muted-foreground mb-3">
                  Online marketplaces like Facebook Marketplace, OfferUp, Craigslist, and eBay are common sources of stolen goods. Sellers often list stolen items at prices "too good to be true" to quickly convert them to cash.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">What to check:</strong> Always verify the IMEI, serial number, or VIN before meeting the seller. Request the identifier in advance and run it through our checker. If the seller refuses to provide it, walk away immediately.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Purchasing Used Vehicles</h3>
                <p className="text-muted-foreground mb-3">
                  Used cars, motorcycles, and boats can be stolen or have hidden theft history. Stolen vehicles may have altered VINs, fake titles, or be listed as "salvage" to hide their criminal past.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">What to check:</strong> Verify the VIN on the dashboard, door jamb, and title match. Check for signs of VIN tampering. Our system cross-references the VIN with insurance records, police databases, and DMV records across all 50 states.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Buying Electronics & Phones</h3>
                <p className="text-muted-foreground mb-3">
                  Smartphones, laptops, and gaming consoles are among the most frequently stolen items. These devices are easy to steal, hard to trace, and retain significant resale value.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">What to check:</strong> For phones, verify the IMEI is not blacklisted by carriers or reported stolen. For laptops and consoles, check the serial number against manufacturer theft databases. Stolen electronics may be locked or remotely wiped by the original owner.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Receiving Items as Gifts or Trade</h3>
                <p className="text-muted-foreground mb-3">
                  Even if you're not buying an item, you can still face legal consequences for possessing stolen property. Friends, family, or trading partners may unknowingly pass stolen goods to you.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">What to check:</strong> Politely verify any valuable item's history before accepting it. Our free verification can save you from future legal headaches and protect your relationships by ensuring everything is legitimate.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">How accurate is the stolen item checker?</h3>
                <p className="text-muted-foreground">
                  Our system maintains 99.7% accuracy by cross-referencing multiple authoritative databases including law enforcement records, insurance claims, manufacturer registries, and crowdsourced reports. We update our databases in real-time to ensure the most current information.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">What if an item shows as stolen?</h3>
                <p className="text-muted-foreground">
                  If our system identifies an item as stolen, do not complete the purchase or take possession. Report the finding to local law enforcement with the verification certificate we provide. You may be helping return someone's stolen property and preventing crime.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Is my search confidential?</h3>
                <p className="text-muted-foreground">
                  Yes, all verification searches are completely confidential and encrypted. We do not share your search history or personal information with third parties. Your privacy is our priority.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">How long does verification take?</h3>
                <p className="text-muted-foreground">
                  Most verifications complete in under 3 seconds. Our system instantly queries multiple databases simultaneously, providing you with comprehensive results faster than any competitor.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Do I need to create an account?</h3>
                <p className="text-muted-foreground">
                  You can perform limited free searches without an account. Creating a free account gives you access to more comprehensive verification features, search history, and the ability to save verification certificates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Verify Your Item?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Protect yourself from fraud and legal trouble. Verify any item in seconds with our comprehensive stolen item checker.
            </p>
            <Link to="/verify">
              <Button size="lg">
                <Search className="w-5 h-5 mr-2" />
                Start Free Verification
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default StolenItemCheckerPage;

import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Smartphone, Shield, AlertCircle, CheckCircle, Search, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

export default function PhoneVerificationGuide() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Phone Verification Guide: IMEI Check & Stolen Phone Lookup",
    "description": "Learn how to verify if a phone is stolen using IMEI checks. Comprehensive guide to phone verification before buying secondhand smartphones.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/logo.png"
      }
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-15"
  };

  return (
    <>
      <PageSEO
        title="Phone Verification Guide: IMEI Check & Stolen Phone Lookup | SafeOrStolen"
        description="Complete guide to verifying phones before purchase. Learn how to check IMEI numbers, identify stolen smartphones, and protect yourself from phone fraud."
        keywords="phone verification, IMEI check, stolen phone lookup, verify phone, check IMEI number, phone fraud protection"
        canonical="/blog/phone-verification-guide"
        structuredData={structuredData}
      />

      <TopNavigation />
      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-6">Complete Phone Verification Guide: IMEI Check & Stolen Phone Lookup</h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <time dateTime="2026-01-15">January 15, 2026</time>
              <span>•</span>
              <span>15 min read</span>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Phone Verification Matters</h2>
              <p className="text-lg mb-4">
                Over 2 million smartphones are stolen in the United States every year, with many ending up for sale on secondhand marketplaces. Buying a stolen phone isn't just financially risky—it's potentially illegal and can lead to your device being remotely locked or seized by authorities.
              </p>
              <p className="text-lg mb-4">
                Whether you're buying from eBay, Facebook Marketplace, OfferUp, or Craigslist, verifying a phone's IMEI number is your most powerful protection against fraud. This comprehensive guide teaches you everything you need to know about phone verification.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">What Is an IMEI Number?</h2>
              
              <div className="bg-muted p-6 rounded-lg mb-6">
                <p className="text-lg mb-4">
                  <strong>IMEI (International Mobile Equipment Identity)</strong> is a unique 15-digit code assigned to every mobile phone. Think of it as your phone's fingerprint—no two devices share the same IMEI.
                </p>
                <p className="text-lg">
                  Format: <code className="bg-background px-2 py-1 rounded">123456789012345</code>
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-3">How to Find Your IMEI Number</h3>
              <div className="grid gap-4 mb-6">
                <Card className="p-4">
                  <h4 className="font-bold mb-2">Method 1: Dial Code (Works on All Phones)</h4>
                  <p>Dial <code className="bg-muted px-2 py-1 rounded">*#06#</code> on your phone's keypad. The IMEI will display instantly.</p>
                </Card>

                <Card className="p-4">
                  <h4 className="font-bold mb-2">Method 2: Settings Menu</h4>
                  <p><strong>iPhone:</strong> Settings → General → About → IMEI</p>
                  <p><strong>Android:</strong> Settings → About Phone → Status → IMEI</p>
                </Card>

                <Card className="p-4">
                  <h4 className="font-bold mb-2">Method 3: Physical Label</h4>
                  <p>Check the SIM card tray or under the battery (older models). Also printed on original packaging.</p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">How to Verify a Phone Before Buying</h2>
              
              <div className="bg-primary/10 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  SafeOrStolen 3-Second Verification Process
                </h3>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>Ask the seller for the IMEI number before meeting in person</li>
                  <li>Enter the IMEI into SafeOrStolen's instant verification tool</li>
                  <li>Receive immediate SAFE or STOLEN status with confidence score</li>
                  <li>View detailed theft reports if the device is flagged</li>
                  <li>Only proceed with purchase if verification shows SAFE</li>
                </ol>
                <Button asChild size="lg" className="w-full">
                  <Link to="/verify">Verify Phone IMEI Now</Link>
                </Button>
              </div>

              <h3 className="text-2xl font-bold mb-3">What SafeOrStolen Checks:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li><strong>Stolen Phone Databases:</strong> Cross-references 50+ global databases including carrier and manufacturer blacklists, police reports, and insurance claims</li>
                <li><strong>Carrier Blacklist:</strong> Checks if the device is blacklisted by AT&T, Verizon, T-Mobile, Sprint</li>
                <li><strong>Find My iPhone/Android Lock Status:</strong> Verifies if device is locked to previous owner</li>
                <li><strong>Activation Lock Status:</strong> Confirms if you can activate the device</li>
                <li><strong>Outstanding Finance Balance:</strong> Checks if seller still owes money on the phone</li>
                <li><strong>International Blacklist:</strong> Verifies phone isn't blacklisted globally</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Red Flags When Buying Used Phones</h2>
              
              <div className="grid gap-4">
                <Card className="p-6 border-destructive">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Seller Refuses to Provide IMEI</h3>
                      <p>Legitimate sellers have no reason to hide IMEI numbers. Refusal indicates the phone is likely stolen or blacklisted.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-destructive">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Price Significantly Below Market Value</h3>
                      <p>A brand new iPhone for 50% off retail is almost certainly stolen. Check current market prices before buying.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-destructive">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Find My iPhone Still Enabled</h3>
                      <p>If Find My iPhone or Android Device Protection is active, the previous owner can remotely lock or erase the phone at any time.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-destructive">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">No Original Packaging or Receipt</h3>
                      <p>Stolen phones rarely come with boxes or proof of purchase. Ask for documentation before buying.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-destructive">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Seller Has Multiple Identical Phones</h3>
                      <p>Multiple iPhones or Samsung phones for sale simultaneously suggests organized theft operations.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-destructive">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Cash Only, Quick Sale Pressure</h3>
                      <p>Scammers demand cash and create urgency to prevent verification. Take your time and verify before paying.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Step-by-Step: Buying a Safe Used Phone</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Request IMEI Number Before Meeting</h3>
                    <p>Ask the seller to provide the IMEI via message. Run it through SafeOrStolen's verification tool before scheduling a meetup.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Meet in Public, Bring SafeOrStolen App</h3>
                    <p>Meet at a police station, bank, or busy public place. Use the SafeOrStolen mobile app to scan the IMEI barcode during the transaction.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Verify Find My iPhone Is Disabled</h3>
                    <p><strong>iPhone:</strong> Settings → [Your Name] → Find My → Find My iPhone should be OFF<br/>
                    <strong>Android:</strong> Settings → Security → Find My Device should be OFF</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Factory Reset and Test</h3>
                    <p>Have the seller factory reset the phone in front of you. Test that you can activate it with your SIM card before paying.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Get a Written Receipt</h3>
                    <p>Create a bill of sale with IMEI, date, seller's name, and price. This provides legal protection if issues arise later.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">What Happens If You Buy a Stolen Phone?</h2>
              <p className="text-lg mb-4">
                If you unknowingly purchase a stolen phone, you face multiple serious consequences:
              </p>
              
              <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded mb-6">
                <ul className="space-y-3">
                  <li><strong>Criminal Charges:</strong> You can be charged with possession of stolen property even if you purchased it unknowingly</li>
                  <li><strong>Device Blacklisting:</strong> Carriers will blacklist the IMEI, making the phone unusable on any network</li>
                  <li><strong>Remote Lock/Erase:</strong> The original owner can use Find My iPhone to lock or wipe your device</li>
                  <li><strong>Financial Loss:</strong> You lose both the phone and your money with no legal recourse against the seller</li>
                  <li><strong>Seizure by Police:</strong> Authorities can confiscate the device as evidence</li>
                </ul>
              </div>

              <p className="text-lg font-bold mb-3">If SafeOrStolen identifies your phone as stolen:</p>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>Stop using the device immediately</li>
                <li>Document all communication with the seller</li>
                <li>Contact local police and file a report</li>
                <li>Report the seller to the marketplace</li>
                <li>Contact SafeOrStolen for legal protection guidance</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">SafeOrStolen Mobile App: Instant Phone Verification</h2>
              
              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Why Use the SafeOrStolen Mobile App?</h3>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Barcode Scanner for Instant IMEI Lookup</p>
                      <p className="text-muted-foreground">Scan the IMEI barcode during transactions - no manual typing required</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Offline Mode for Verification History</p>
                      <p className="text-muted-foreground">Access previously verified IMEIs even without internet connection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">3-Second Results</p>
                      <p className="text-muted-foreground">Get instant SAFE or STOLEN status while standing in front of the seller</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Free Initial Checks</p>
                      <p className="text-muted-foreground">Verify your first 2 phones completely free with no credit card required</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link to="/app">Download SafeOrStolen App</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/verify">Verify IMEI on Web</Link>
                </Button>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">Can a stolen phone's IMEI be changed?</h3>
                  <p>Technically yes, but it's illegal and extremely difficult. Most thieves don't have the technical expertise. SafeOrStolen's AI detection identifies suspicious IMEI modifications.</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">Are free IMEI checkers reliable?</h3>
                  <p>Free checkers often only verify carrier blacklists, missing 90% of stolen phone databases. SafeOrStolen checks 100+ databases including international theft reports that free tools don't access.</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">How long does verification take?</h3>
                  <p>SafeOrStolen provides instant results in 3 seconds or less. Our AI processes 100+ database queries simultaneously while you're completing the transaction.</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">What if the seller won't provide the IMEI?</h3>
                  <p>Walk away immediately. Legitimate sellers have no reason to hide IMEI numbers. Refusal is the #1 red flag that a phone is stolen or blacklisted.</p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Conclusion: Always Verify Before You Buy</h2>
              <p className="text-lg mb-4">
                Phone theft is a billion-dollar criminal industry, and secondhand marketplaces are the primary resale channel. By verifying IMEI numbers before purchase, you protect yourself from financial loss, legal trouble, and supporting criminal activity.
              </p>
              <p className="text-lg mb-6">
                SafeOrStolen makes phone verification instant, affordable, and accessible. Whether you're buying from eBay, Facebook Marketplace, or Craigslist, our 3-second verification gives you confidence that your purchase is legitimate.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg">
                <p className="text-lg font-bold mb-4">Protect yourself today:</p>
                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <Link to="/verify">Verify Phone Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/app">Download Mobile App</Link>
                  </Button>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
      <RelatedPagesSection currentPage="/blog/phone-verification-guide" currentCategory="blog" maxLinks={5} />
      <Footer />
    </>
  );
}
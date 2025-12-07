import { PageSEO } from '@/components/seo/PageSEO';
import { TrustHeaderBar } from '@/components/trust/TrustHeaderBar';
import { PressMediaSection } from '@/components/home/PressMediaSection';
import { WhatYouCanVerify } from '@/components/home/WhatYouCanVerify';
import { WhyChooseSafeOrStolen } from '@/components/home/WhyChooseSafeOrStolen';
import { CompactTestimonials } from '@/components/home/CompactTestimonials';
import { CompactMobileAppCTA } from '@/components/home/CompactMobileAppCTA';
import { TrustSignals } from '@/components/seo/TrustSignals';
// ExitIntentPopup is now global in AppRoot
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Download, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/good_photo_for_sos-8.png';
import { LiveStatsCounter } from '@/components/conversion/LiveStatsCounter';
import { HomeSearchForm } from '@/components/home/HomeSearchForm';
import { EmailCapture } from '@/components/marketing/EmailCapture';

const Index = () => {
  return (
    <>
        <PageSEO
        title="Stolen Item Checker for Buyers, Sellers & Businesses | Free IMEI VIN Serial Verification | SafeOrStolen"
        description="Protect buyers, sellers & businesses from stolen goods. Buyers verify before purchasing. Sellers prove legitimacy. Businesses reduce risk. Free IMEI, VIN, serial number verification in 3 seconds. The only mobile app available."
        keywords="stolen item checker, verify before buying, prove item not stolen, pawn shop verification, business stolen goods check, IMEI checker free, VIN lookup, serial number verification, secondhand verification, reseller protection"
        canonical="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SafeOrStolen Stolen Item Verification Service",
            "description": "Protects BOTH buyers AND sellers from stolen goods. Every search makes stolen items harder to sell - reducing crime globally. Mobile app exclusively available from SafeOrStolen.com.",
            "serviceType": "Stolen Item Verification Service",
            "provider": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "2 free verification checks, 14-day trial"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SafeOrStolen Mobile App",
            "applicationCategory": "SecurityApplication",
            "operatingSystem": ["iOS", "Android"],
            "description": "ONLY mobile app for stolen item verification - exclusively available from SafeOrStolen.com. Protect buyers AND sellers. Every search makes stolen items harder to sell.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Protects BOTH buyers AND sellers",
              "Reduces crime globally",
              "Barcode scanning",
              "Offline mode",
              "Exclusive to SafeOrStolen.com",
              "3-second verification"
            ]
          }
        ]}
      />
      
      {/* Bot-visible SEO content - comprehensive for indexing */}
      <div className="sr-only" aria-hidden="false">
        <article itemScope itemType="https://schema.org/Article">
          <header>
            <h1 itemProp="headline">Stolen Item Checker - Free IMEI, VIN & Serial Number Verification</h1>
            <p itemProp="description">SafeOrStolen is the #1 stolen item verification platform trusted by buyers, sellers, and businesses. Check if any secondhand item is stolen before you buy or sell. Free instant verification with results in 3 seconds.</p>
          </header>
          
          <section itemProp="articleBody">
            <h2>Why Use a Stolen Item Checker?</h2>
            <p>Every year, millions of stolen items are resold on marketplaces like Facebook Marketplace, eBay, Craigslist, and OfferUp. Buyers unknowingly purchase stolen goods and face financial loss when items are seized by police. Sellers who cannot prove legitimacy lose deals and trust. SafeOrStolen solves this problem by providing instant verification against 50+ databases.</p>
            
            <h2>What is SafeOrStolen?</h2>
            <p>SafeOrStolen is a stolen item verification service that checks IMEI numbers, VIN numbers, serial numbers, and more against law enforcement databases, insurance records, and carrier blacklists. Unlike competitors like CheckMEND or IMEI.info, SafeOrStolen offers the only mobile app with barcode scanning, making verification instant and convenient.</p>
            
            <h2>How Does IMEI Verification Work?</h2>
            <p>IMEI (International Mobile Equipment Identity) is a unique 15-digit number assigned to every mobile phone. When a phone is reported stolen, carriers add its IMEI to blacklists. SafeOrStolen checks IMEI numbers against AT&T, Verizon, T-Mobile blacklists plus international databases. A blacklisted IMEI means the phone may be stolen and could be blocked from network use.</p>
            
            <h2>How Does VIN Lookup Work?</h2>
            <p>VIN (Vehicle Identification Number) is a unique 17-character code for every vehicle. SafeOrStolen checks VINs against NCIC (FBI's National Crime Information Center), NICB (National Insurance Crime Bureau), and NHTSA records. We verify vehicles in all 50 US states plus international databases. A flagged VIN indicates the vehicle may be stolen, salvaged, or have title issues.</p>
            
            <h2>Database Sources We Check</h2>
            <ul>
              <li>NCIC - FBI's National Crime Information Center with 15+ million stolen property records</li>
              <li>NICB - National Insurance Crime Bureau VINCheck and theft records</li>
              <li>IMEI.info - Global IMEI database covering 1 billion+ devices</li>
              <li>Carrier Blacklists - AT&T, Verizon, T-Mobile, Sprint device blacklists</li>
              <li>BikeIndex - 1.4 million registered bicycles with theft alerts</li>
              <li>Hotgunz - Stolen firearms registry with 100,000+ firearms</li>
              <li>StolenRegister - International stolen property database</li>
              <li>NHTSA - US government vehicle records and recalls</li>
              <li>Insurance Networks - Aggregated theft claims from major insurers</li>
            </ul>
            
            <h2>Who Uses SafeOrStolen?</h2>
            <h3>For Buyers</h3>
            <p>Before purchasing any secondhand item on Facebook Marketplace, eBay, Craigslist, OfferUp, or from private sellers, use SafeOrStolen to verify the item isn't stolen. Protect yourself from financial loss and potential legal trouble. If police recover a stolen item you purchased, you lose both the item and your money.</p>
            
            <h3>For Sellers</h3>
            <p>Prove your items are legitimate by sharing SafeOrStolen verification results with potential buyers. Build trust, close deals faster, and command better prices. A verified clean history gives buyers confidence to purchase from you.</p>
            
            <h3>For Businesses</h3>
            <p>Pawn shops, secondhand dealers, auction houses, and resellers use SafeOrStolen for due diligence. Protect your business from receiving stolen goods. Business plans include bulk verification, API access, and compliance documentation.</p>
            
            <h2>SafeOrStolen vs Competitors</h2>
            <h3>SafeOrStolen vs CheckMEND</h3>
            <p>CheckMEND charges per report and has no mobile app. SafeOrStolen offers 2 free checks, unlimited subscription plans, and the only mobile app with barcode scanning.</p>
            
            <h3>SafeOrStolen vs IMEI.info</h3>
            <p>IMEI.info only checks phones. SafeOrStolen verifies phones, vehicles, boats, firearms, electronics, and more - all in one platform.</p>
            
            <h3>SafeOrStolen vs Carfax</h3>
            <p>Carfax only checks vehicles. SafeOrStolen is like Carfax for everything - phones, cars, boats, firearms, electronics, and any item with a serial number.</p>
            
            <h2>The Only Mobile App for Stolen Item Verification</h2>
            <p>SafeOrStolen is the only platform offering a mobile app for stolen item verification. Our app features barcode scanning for instant IMEI and serial number capture, offline verification queue, 3-second results, and cross-platform sync. Download the SafeOrStolen app at safeorstolen.com/app.</p>
            
            <h2>Pricing Plans</h2>
            <ul>
              <li>Free Trial - 2 free verifications, 14-day period, no credit card required</li>
              <li>Starter Plan - $4.99/month for 15 checks per month</li>
              <li>Personal Plan - $9.99/month for 50 checks per month</li>
              <li>Professional Plan - $29.99/month for unlimited checks</li>
              <li>Pay Per Use - $0.50 per verification, no subscription required</li>
            </ul>
            
            <h2>How to Check if an Item is Stolen</h2>
            <ol>
              <li>Go to SafeOrStolen.com or download the mobile app</li>
              <li>Enter the IMEI, VIN, or serial number</li>
              <li>Select the item type (phone, vehicle, firearm, etc.)</li>
              <li>Get instant results in 3 seconds</li>
              <li>Share verification results with buyers or sellers</li>
            </ol>
            
            <h2>Trust & Security</h2>
            <p>SafeOrStolen uses 256-bit SSL encryption, never stores your payment data, and processes all verifications securely. We're backed by FasterCapital and featured in multiple press releases. Join thousands of users protecting themselves from stolen goods.</p>
          </section>
          
          <footer>
            <p>© 2024 SafeOrStolen. The #1 stolen item verification platform. Check IMEI, VIN, serial numbers free.</p>
          </footer>
        </article>
      </div>
      
      {/* Noscript fallback */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Stolen Item Checker - Free IMEI, VIN & Serial Number Verification</h1>
          <p>SafeOrStolen verifies if secondhand items are stolen. Check IMEI numbers, VIN numbers, and serial numbers against 50+ databases. Results in 3 seconds. The only mobile app available.</p>
        </div>
      </noscript>

      <TrustHeaderBar />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Stolen Item Checker for Buyers, Sellers & Businesses
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Verify IMEI, VIN & Serial Numbers - Free in 3 Seconds
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                <strong>Buyers:</strong> Don't get stuck with stolen goods. <strong>Sellers:</strong> Prove your items are legitimate. <strong>Businesses:</strong> Protect your reputation and reduce risk. The only mobile app for verification.
              </p>
              
              {/* Search Form */}
              <div className="pt-6">
                <HomeSearchForm />
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <LiveStatsCounter />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  For Buyers
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  For Sellers
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  For Businesses
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button asChild variant="outline" size="sm">
                  <Link to="/app">
                    <Download className="mr-2 h-4 w-4" />
                    Download App
                  </Link>
                </Button>
              </div>

              {/* Hero Image - Performance Optimized */}
              <div className="mt-12 max-w-4xl mx-auto">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={heroImage} 
                    alt="SafeOrStolen - the only stolen verification app with barcode scanning - IMEI checker, VIN checker, stolen item scanner app showing instant verification results in 3 seconds" 
                    className="relative w-full h-auto rounded-2xl shadow-2xl border border-primary/30"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width={1200}
                    height={675}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Section */}
        <PressMediaSection />

        {/* What You Can Verify */}
        <WhatYouCanVerify />

        {/* Like Carfax Comparison */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Like Carfax, But For Everything</h2>
                <p className="text-lg text-muted-foreground">
                  Carfax checks car history. We check ANY item's history.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-4">Carfax</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ Vehicles only</li>
                      <li>✓ VIN checks</li>
                      <li>✓ Charges per report</li>
                      <li>✗ No mobile app</li>
                      <li>✗ Limited item types</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-primary border-2">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-4">SafeOrStolen</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ Phones, vehicles, boats, firearms, electronics</li>
                      <li>✓ IMEI, VIN, Serial, License Plates</li>
                      <li>✓ 2 free checks + unlimited plans</li>
                      <li>✓ Mobile app with barcode scanning</li>
                      <li>✓ All 50 states + international</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link to="/compare">
                    See Full Comparison vs CheckMEND, IMEI.info, Swappa & More →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseSafeOrStolen />

        {/* Email Capture - List Building */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <EmailCapture />
          </div>
        </section>

        {/* Testimonials */}
        <CompactTestimonials />

        {/* Mobile App CTA */}
        <CompactMobileAppCTA />

        {/* Trust Signals */}
        <TrustSignals />
      </div>
      
      {/* ExitIntentPopup is now rendered globally in AppRoot */}
    </>
  );
};

export default Index;

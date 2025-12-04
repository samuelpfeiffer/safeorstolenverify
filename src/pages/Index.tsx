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
      
      {/* Bot-visible content */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Stolen Item Checker for Buyers, Sellers & Businesses</h1>
          <p>SafeOrStolen protects buyers, sellers, and businesses from stolen goods. We crawl and aggregate data from 50+ partner databases including NCIC (FBI), NICB (National Insurance Crime Bureau), Hotgunz, IMEI.info, BikeIndex, StolenRegister, carrier blacklists, and insurance networks. Verify IMEI numbers, VIN numbers, and serial numbers in 3 seconds. The only mobile app for stolen item verification.</p>
          
          <h2>Our Data Partners - We Crawl & Aggregate 50+ Databases</h2>
          <ul>
            <li>NCIC (National Crime Information Center) - FBI's federal stolen property database</li>
            <li>NICB (National Insurance Crime Bureau) - VINCheck and vehicle theft records</li>
            <li>Hotgunz.com - Stolen firearms registry partner</li>
            <li>IMEI.info - Global IMEI database and phone blacklist verification</li>
            <li>BikeIndex.org - 1.4M bikes cataloged, direct API integration</li>
            <li>StolenRegister.com - Global stolen property, we scrape their listings</li>
            <li>Stolen911 - Police detective-founded service, data sharing partner</li>
            <li>NHTSA Database - Official government VIN records</li>
            <li>Carrier Blacklists - AT&T, Verizon, T-Mobile IMEI databases</li>
            <li>Insurance Networks - Aggregated theft claims from major insurers</li>
          </ul>
          
          <h2>For Buyers - Don't Get Stuck with Stolen Goods</h2>
          <p>Check any secondhand item before you buy on Facebook Marketplace, eBay, Craigslist, or OfferUp. Avoid financial loss and legal trouble by verifying the item isn't stolen.</p>
          
          <h2>For Sellers - Prove Your Items Are Legitimate</h2>
          <p>Build trust with buyers by showing your items are verified safe. Share verification results to close deals faster and command better prices.</p>
          
          <h2>For Businesses - Reduce Risk & Protect Your Reputation</h2>
          <p>Pawn shops, dealers, auctions, and resellers use SafeOrStolen for due diligence. Avoid receiving stolen goods and the legal consequences. Business plans available.</p>
          
          <h2>What You Can Verify</h2>
          <ul>
            <li>Phone IMEI Checker - Verify iPhones, Android phones, tablets against carrier blacklists</li>
            <li>VIN Lookup - Cars, trucks, motorcycles, RVs (all 50 states) against NCIC and NHTSA</li>
            <li>Serial Numbers - Laptops, electronics, power tools, appliances</li>
            <li>Firearms - Verified against Hotgunz and law enforcement databases</li>
            <li>Bicycles - BikeIndex API integration plus StolenRegister data</li>
            <li>Boats & Marine Equipment</li>
          </ul>
          
          <h2>Free to Start - 2 Free Verifications</h2>
          <p>No credit card required. Results in 3 seconds. We crawl all 50+ partner databases simultaneously. The only mobile app available - download from SafeOrStolen.com.</p>
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

              {/* Hero Image */}
              <div className="mt-12 max-w-4xl mx-auto">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={heroImage} 
                    alt="SafeOrStolen - the only stolen verification app with barcode scanning - IMEI checker, VIN checker, stolen item scanner app showing instant verification results in 3 seconds" 
                    className="relative w-full h-auto rounded-2xl shadow-2xl border border-primary/30"
                    loading="eager"
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

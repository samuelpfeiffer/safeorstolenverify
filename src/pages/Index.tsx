import { PageSEO } from '@/components/seo/PageSEO';
import { TrustHeaderBar } from '@/components/trust/TrustHeaderBar';
import { PressMediaSection } from '@/components/home/PressMediaSection';
import { WhatYouCanVerify } from '@/components/home/WhatYouCanVerify';
import { WhyChooseSafeOrStolen } from '@/components/home/WhyChooseSafeOrStolen';
import { CompactTestimonials } from '@/components/home/CompactTestimonials';
import { CompactMobileAppCTA } from '@/components/home/CompactMobileAppCTA';
import { TrustSignals } from '@/components/seo/TrustSignals';
import { ExitIntentPopup } from '@/components/conversion/ExitIntentPopup';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Download, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/good_photo_for_sos-8.png';
import { LiveStatsCounter } from '@/components/conversion/LiveStatsCounter';
import { HomeSearchForm } from '@/components/home/HomeSearchForm';

const Index = () => {
  return (
    <>
        <PageSEO
        title="Stolen Item Checker - Free IMEI, VIN & Serial Number Verification | SafeOrStolen"
        description="Check if secondhand items are safe or stolen in 3 seconds. Free IMEI checker, VIN lookup, serial number verification. The only mobile app for stolen goods verification. 2 free checks - protect yourself before buying."
        keywords="stolen item checker, check if stolen, IMEI checker free, VIN lookup stolen, serial number verification, is this phone stolen, check stolen before buying, secondhand verification, Facebook Marketplace safety, stolen goods database"
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
          <h1>Stolen Item Checker - Free IMEI, VIN & Serial Number Verification</h1>
          <p>Check if secondhand items are safe or stolen before you buy. SafeOrStolen is a free stolen item checker that verifies IMEI numbers, VIN numbers, and serial numbers in just 3 seconds. Protect yourself from buying stolen goods on Facebook Marketplace, eBay, Craigslist, and OfferUp.</p>
          
          <h2>How to Check If Something Is Stolen</h2>
          <p>Enter the IMEI number (for phones), VIN number (for vehicles), or serial number (for electronics) into our free checker. We search multiple databases to verify if the item has been reported stolen, lost, or has any other issues. Get results in 3 seconds.</p>
          
          <h2>The Only Mobile App for Stolen Item Verification</h2>
          <p>SafeOrStolen is the only stolen verification app available. CheckMEND has no app. IMEI.info has no app. Swappa has no app. Download our app exclusively from SafeOrStolen.com for instant barcode scanning and offline mode.</p>
          
          <h2>What You Can Verify</h2>
          <ul>
            <li>Phone IMEI Checker - Check if iPhone or Android is stolen</li>
            <li>VIN Lookup - Stolen vehicle check for cars, trucks, motorcycles</li>
            <li>Serial Number Verification - Laptops, electronics, power tools</li>
            <li>Boat & Marine Equipment verification</li>
            <li>Firearms verification</li>
          </ul>
          
          <h2>Free Stolen Item Check - 2 Free Verifications</h2>
          <p>Start with 2 free verification checks. No credit card required. Results in 3 seconds. Protect yourself before buying used items.</p>
        </div>
      </noscript>

      <TrustHeaderBar />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Stolen Item Checker - Is It Safe to Buy?
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Free IMEI, VIN & Serial Number Verification in 3 Seconds
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Check if secondhand items are safe or stolen before you buy. The only mobile app for stolen goods verification - exclusively available from SafeOrStolen.com.
              </p>
              
              {/* Search Form */}
              <div className="pt-6">
                <HomeSearchForm />
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <LiveStatsCounter />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Protects Buyers & Sellers
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Results in 3 Seconds
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Only Mobile App Available
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
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseSafeOrStolen />

        {/* Testimonials */}
        <CompactTestimonials />

        {/* Mobile App CTA */}
        <CompactMobileAppCTA />

        {/* Trust Signals */}
        <TrustSignals />
      </div>
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup />
    </>
  );
};

export default Index;

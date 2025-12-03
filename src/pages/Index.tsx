import Hero from '@/components/Hero';
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
import { Smartphone, Car, Laptop, Shield, Zap, Globe, Download, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/good_photo_for_sos-8.png';
import { LiveStatsCounter } from '@/components/conversion/LiveStatsCounter';

const Index = () => {
  return (
    <>
      <PageSEO
        title="Protect Buyers & Sellers - Stop Stolen Goods | Free IMEI VIN Serial Checker - SafeOrStolen"
        description="SafeOrStolen protects BOTH buyers AND sellers from stolen goods. Every search makes stolen items harder to sell - reduce crime globally. Free IMEI, VIN, serial verification. Our mobile app is ONLY available from SafeOrStolen.com. 2 free checks included."
        keywords="protect buyers sellers stolen goods, stop stolen items, reduce crime stolen goods, free stolen goods checker, verify used items, IMEI VIN serial lookup free, stolen property database, secondhand verification, Facebook Marketplace safety"
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
          <h1>Protect Buyers & Sellers - Stop Stolen Goods at the Source</h1>
          <p>SafeOrStolen protects BOTH buyers AND sellers from stolen goods. Every search makes stolen items harder to sell - helping reduce crime globally. Our mobile app is ONLY available from SafeOrStolen.com, making the website the exclusive gateway to instant IMEI, VIN, serial verification.</p>
          
          <h2>Our Mission: Build a Safer Secondhand Ecosystem</h2>
          <p>We don't just check serial numbers - we're shrinking the market for stolen goods globally. Buyers avoid unknowingly purchasing stolen items and the financial/legal nightmare. Sellers prove legitimacy and build trust. Criminals think twice because more buyers check first.</p>
          
          <h2>Golden Ticket: The Only Mobile App (Exclusive to SafeOrStolen.com)</h2>
          <p>CheckMEND has NO app. IMEI.info has NO app. Swappa has NO app. Our mobile app is exclusively available from SafeOrStolen.com with instant barcode scanning, 3-second verification, and offline mode.</p>
          
          <h2>What You Can Verify</h2>
          <ul>
            <li>Phones & Tablets (IMEI verification)</li>
            <li>Vehicles (VIN lookup - all 50 states)</li>
            <li>Boats & Marine Equipment</li>
            <li>Firearms</li>
            <li>Electronics & Appliances</li>
            <li>Power Tools & Equipment</li>
          </ul>
          
          <h2>Start Free Trial - Protect Yourself Today</h2>
          <p>2 free verification checks. Protect yourself as a buyer OR seller. Download from SafeOrStolen.com to check items anywhere.</p>
        </div>
      </noscript>

      <TrustHeaderBar />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Protect Buyers & Sellers - Stop Stolen Goods
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Every Search Makes Stolen Items Harder to Sell
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our mobile app is only available from SafeOrStolen.com - the exclusive gateway to instant IMEI, VIN & serial verification. 
                Protect yourself from financial loss & legal risk. Help reduce crime globally.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <Button asChild size="lg" className="px-8">
                  <Link to="/app">
                    <Download className="mr-2 h-5 w-5" />
                    Download App - Exclusive to SafeOrStolen.com
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8">
                  <Link to="/verify">
                    <Shield className="mr-2 h-5 w-5" />
                    Protect Yourself Now
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <LiveStatsCounter />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Protects Buyers & Sellers
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Reduces Crime Globally
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  App Only on SafeOrStolen.com
                </div>
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

import Hero from '@/components/Hero';
import { PageSEO } from '@/components/seo/PageSEO';
import { TrustHeaderBar } from '@/components/trust/TrustHeaderBar';
import { PressMediaSection } from '@/components/home/PressMediaSection';
import { WhatYouCanVerify } from '@/components/home/WhatYouCanVerify';
import { WhyChooseSafeOrStolen } from '@/components/home/WhyChooseSafeOrStolen';
import { CompactTestimonials } from '@/components/home/CompactTestimonials';
import { CompactMobileAppCTA } from '@/components/home/CompactMobileAppCTA';
import { TrustSignals } from '@/components/seo/TrustSignals';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Smartphone, Car, Laptop, Shield, Zap, Globe, Download, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/good_photo_for_sos-8.png';

const Index = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com",
      "logo": "https://safeorstolen.com/logo.png",
      "description": "Like Carfax for everything. Verify serial numbers, IMEI, VIN, license plates globally across all 50 US states + international. Protect buyers and sellers.",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "support@safeorstolen.com",
        "contactType": "Customer Support"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://safeorstolen.com/verify?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen: Carfax for Everything | Verify IMEI VIN Serial Numbers Globally"
        description="Like Carfax but for phones, vehicles, boats, firearms, electronics. Verify serial numbers, IMEI, VIN, license plates in all 50 states + international coverage. Protect buyers and sellers. 2 free checks."
        keywords="like carfax for everything, verify serial numbers, IMEI checker all 50 states, VIN verification global, license plate check all states, stolen item verification worldwide, protect buyers and sellers"
        canonical="/"
        structuredData={structuredData}
      />
      
      {/* Bot-visible content */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>SafeOrStolen: Carfax for Everything - Verify Serial Numbers Globally</h1>
          <p>Like Carfax but for phones, vehicles, boats, firearms, electronics, appliances, jewelry, tools, equipment. Verify serial numbers, IMEI, VIN, license plates in all 50 US states + international coverage. Protect buyers and sellers.</p>
          
          <h2>The Only Mobile App with Barcode Scanning</h2>
          <p>SafeOrStolen is the only global verification service with a mobile app. CheckMEND, IMEI.info, IMEIPro, LeadsOnline - none have apps. Download for iOS and Android.</p>
          
          <h2>Coverage: All 50 US States + International</h2>
          <p>We verify items across all 50 US states plus international databases. Processing 5,000+ checks daily. Partnered with FasterCapital (selected from 5,000+ applicants). Featured in 3 press releases.</p>
          
          <h2>What You Can Verify</h2>
          <ul>
            <li>Phones & Tablets (IMEI, serial numbers)</li>
            <li>Vehicles (VIN, license plates - all 50 states)</li>
            <li>Boats & Marine Equipment</li>
            <li>Firearms</li>
            <li>Electronics (laptops, cameras, TVs, appliances)</li>
            <li>Jewelry & Watches</li>
            <li>Power Tools & Equipment</li>
            <li>Musical Instruments</li>
            <li>RC Vehicles & E-bikes</li>
          </ul>
          
          <h2>Start Free Trial - 2 Checks</h2>
          <p>Get 2 free verification checks (14 days). No credit card required. Like Carfax for everything.</p>
        </div>
      </noscript>

      <TrustHeaderBar />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Check If Secondhand Items are Stolen in 3 Seconds
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Verify Any Item Before You Buy and Sell
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Serial numbers, IMEI, VIN, license plates - all 50 US states + international coverage
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <Button asChild size="lg" className="px-8">
                  <Link to="/verify">Start Free Trial - 2 Checks</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8">
                  <Link to="/app">
                    <Download className="mr-2 h-5 w-5" />
                    The Only Mobile App
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Processing 5,000+ Checks
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  FasterCapital Partner
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  All 50 States + International
                </div>
              </div>

              {/* Hero Image */}
              <div className="mt-12 max-w-4xl mx-auto">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={heroImage} 
                    alt="SafeOrStolen verification app showing item verified status" 
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
    </>
  );
};

export default Index;

import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { Smartphone, Camera, Zap, Shield, Download, CheckCircle, Star, Wifi } from 'lucide-react';
import { AppStoreBadges } from '@/components/app/AppStoreBadges';

export default function MobilePage() {
  return (
    <>
      <PageSEO
        title="SafeOrStolen Mobile App - Verify Items On-The-Go | Download Free"
        description="Get the SafeOrStolen AI mobile app. Scan barcodes and verify IMEI, VIN, and serial numbers with AI before you buy. Works offline. Free to install."
        keywords="mobile app, stolen item checker app, IMEI checker app, VIN scanner, barcode scanner, offline verification, download app"
        canonical="https://safeorstolen.com/mobile"
      />
      
      <TopNavigation />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Star className="h-4 w-4 mr-2 fill-current" />
                <span className="text-sm font-medium">The Only Mobile App</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                SafeOrStolen Mobile App
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Verify phones, vehicles, and electronics anywhere. The only stolen item checker with a mobile app—scan, check, and buy with confidence.
              </p>
              <AppStoreBadges size="lg" />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">App Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Barcode Scanner</h3>
                  <p className="text-muted-foreground">
                    Point your camera at any barcode or QR code to instantly extract IMEI, VIN, or serial number. No typing required.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Instant Results</h3>
                  <p className="text-muted-foreground">
                    Get verification results in under 3 seconds. Check items while meeting sellers—no awkward waiting.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Wifi className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Offline Mode</h3>
                  <p className="text-muted-foreground">
                    Recently checked items cached for offline access. Works in parking lots, warehouses, and areas with poor signal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-3">🛒 Marketplace Buyers</h3>
                  <p className="text-muted-foreground">
                    Meeting someone from Facebook Marketplace or OfferUp? Check the item before handing over cash. Scan the IMEI/VIN right there.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-3">🏪 Pawn Shop Staff</h3>
                  <p className="text-muted-foreground">
                    Verify items at the counter in seconds. Create compliance records automatically. Protect your business from stolen goods.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-3">🚗 Car Shoppers</h3>
                  <p className="text-muted-foreground">
                    At a dealer or private sale? Scan the VIN from dashboard or door jamb. Know instantly if the car is stolen or has title issues.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-3">🔨 Estate Sale Hunters</h3>
                  <p className="text-muted-foreground">
                    Check power tools, electronics, and other items at estate sales and auctions before bidding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Mobile Matters */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Mobile Matters</h2>
            <div className="prose prose-lg max-w-none text-center">
              <p>
                Most stolen item checks happen in the field—at marketplace meetups, car lots, pawn shops, and auctions. A web-only service isn't practical when you need verification in 30 seconds before a sale closes.
              </p>
              <p>
                SafeOrStolen is the <strong>only stolen item verification service with a mobile app</strong>. Our competitors like CheckMEND and IMEI.info are web-only. That means you're fumbling with a mobile browser while the seller waits impatiently.
              </p>
              <p>
                Our app is designed for real-world use: instant camera scanning, one-tap verification, offline caching, and a clean interface optimized for quick checks on the go.
              </p>
            </div>
          </div>
        </section>

        {/* Download Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <p className="text-sm text-muted-foreground">Downloads</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
                  <p className="text-sm text-muted-foreground">App Store Rating</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">&lt;3s</div>
                  <p className="text-sm text-muted-foreground">Avg Check Time</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">FREE</div>
                  <p className="text-sm text-muted-foreground">To Download</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <Smartphone className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Download Now</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Available for iOS and Android. Free download. $0.99/check or $10/month unlimited verifications.
            </p>
            <AppStoreBadges size="lg" />
            <p className="text-sm text-muted-foreground mt-6">
              Or visit <a href="https://safeorstolen.com/download" className="text-primary hover:underline">safeorstolen.com/download</a> on your phone
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

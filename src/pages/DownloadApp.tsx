import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Shield, Smartphone, Wifi, WifiOff, Camera, Clock, CheckCircle, Star, Users, Zap, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const DownloadApp = () => {
  const handleInstallClick = () => {
    // Track install click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'app_download_click', {
        event_category: 'engagement',
        event_label: 'download_page'
      });
    }
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SafeOrStolen - Stolen Item Checker",
    "operatingSystem": "iOS, Android, Web",
    "applicationCategory": "UtilitiesApplication",
    "description": "Free app to check if items are stolen before buying or selling. Verify IMEI, VIN, serial numbers instantly. Protects both buyers AND sellers from stolen goods.",
    "offers": {
      "@type": "Offer",
      "price": "10.00",
      "priceCurrency": "USD",
      "description": "$10/month unlimited verifications"
    },
    "featureList": [
      "Instant IMEI verification",
      "VIN stolen check",
      "Serial number lookup",
      "Barcode scanning",
      "Works offline",
      "Protects buyers AND sellers",
      "3-second verification",
      "Free to download"
    ],
    "potentialAction": {
      "@type": "DownloadAction",
      "target": "https://safeorstolen.com/download"
    }
  };

  return (
    <>
      <PageSEO
        title="Download FREE Stolen Item Checker App | SafeOrStolen - Verify Before You Buy or Sell"
        description="Download the FREE SafeOrStolen app to instantly check if items are stolen before buying OR selling. Verify IMEI, VIN, serial numbers in 3 seconds. Works offline. Protects buyers AND sellers on Facebook Marketplace, OfferUp, eBay, Craigslist."
        keywords="download stolen checker app, free IMEI app download, stolen verification app, VIN checker app free, serial number checker app, marketplace safety app, stolen item scanner, barcode stolen checker, offline stolen checker, buyer seller protection app"
        canonical="/download"
        structuredData={softwareAppSchema}
      />

      <TopNavigation />
      <div className="min-h-screen bg-background pt-16">
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Download className="w-4 h-4" />
                  FREE Download - No Credit Card Required
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Download the <span className="text-primary">FREE</span> Stolen Item Checker App
                </h1>
                
                <p className="text-xl text-muted-foreground mb-4">
                  Instantly verify if items are stolen before you <strong>buy OR sell</strong>. 
                  Check phones, cars, electronics, firearms in just 3 seconds.
                </p>
                
                <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-8">
                  <Shield className="w-6 h-6" />
                  <span>Protects Buyers AND Sellers</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6"
                    onClick={handleInstallClick}
                    asChild
                  >
                    <Link to="/app">
                      <Download className="w-5 h-5 mr-2" />
                      Install App Now - FREE
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-8 py-6"
                    asChild
                  >
                    <Link to="/app/features">
                      View All Features
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>4.8/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>5,000+ Downloads</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="w-4 h-4" />
                    <span>All 50 US States</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="bg-background rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold">SafeOrStolen</h3>
                        <p className="text-sm text-muted-foreground">Stolen Item Checker</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm">Instant IMEI/VIN/Serial Check</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg">
                        <Camera className="w-5 h-5 text-blue-500" />
                        <span className="text-sm">Barcode Scanner Built-In</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-lg">
                        <WifiOff className="w-5 h-5 text-purple-500" />
                        <span className="text-sm">Works Offline</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-lg">
                        <Users className="w-5 h-5 text-orange-500" />
                        <span className="text-sm">Protects Buyers & Sellers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Download Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Download the SafeOrStolen App?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you're <strong>buying</strong> secondhand items or <strong>selling</strong> them, 
                our app protects you from unknowingly dealing with stolen property.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">3-Second Verification</h3>
                  <p className="text-muted-foreground">
                    Get instant results when meeting sellers on Facebook Marketplace, OfferUp, or Craigslist. 
                    Verify before you hand over cash.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Camera className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Barcode Scanner</h3>
                  <p className="text-muted-foreground">
                    Just point your camera at any barcode, serial number, or VIN plate. 
                    No typing required - instant scan and verify.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <WifiOff className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Works Offline</h3>
                  <p className="text-muted-foreground">
                    No internet? No problem. Verify items in parking lots, garages, 
                    or anywhere without WiFi. Perfect for meetup locations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Buyer Protection</h3>
                  <p className="text-muted-foreground">
                    Avoid buying stolen goods unknowingly. Protect yourself from legal trouble 
                    and financial loss when purchasing secondhand items.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Seller Protection</h3>
                  <p className="text-muted-foreground">
                    Prove your items are legitimate to buyers. Build trust instantly 
                    with verification certificates. Sell faster at better prices.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">All 50 US States</h3>
                  <p className="text-muted-foreground">
                    Comprehensive coverage across the entire United States. 
                    Works for phones, cars, bikes, firearms, electronics, and more.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Install */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How to Download & Install SafeOrStolen
              </h2>
              <p className="text-xl text-muted-foreground">
                Install in under 30 seconds - no app store required
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* iOS Instructions */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Smartphone className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">iPhone / iPad</h3>
                  </div>
                  
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                      <div>
                        <p className="font-medium">Open Safari</p>
                        <p className="text-sm text-muted-foreground">Visit safeorstolen.com/app</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                      <div>
                        <p className="font-medium">Tap the Share button</p>
                        <p className="text-sm text-muted-foreground">The square with arrow at bottom</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                      <div>
                        <p className="font-medium">Tap "Add to Home Screen"</p>
                        <p className="text-sm text-muted-foreground">Scroll down to find it</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                      <div>
                        <p className="font-medium">Tap "Add"</p>
                        <p className="text-sm text-muted-foreground">App appears on home screen!</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              {/* Android Instructions */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Smartphone className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Android</h3>
                  </div>
                  
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                      <div>
                        <p className="font-medium">Open Chrome</p>
                        <p className="text-sm text-muted-foreground">Visit safeorstolen.com/app</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                      <div>
                        <p className="font-medium">Tap the menu (⋮)</p>
                        <p className="text-sm text-muted-foreground">Three dots in top right</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                      <div>
                        <p className="font-medium">Tap "Install App"</p>
                        <p className="text-sm text-muted-foreground">Or "Add to Home Screen"</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                      <div>
                        <p className="font-medium">Tap "Install"</p>
                        <p className="text-sm text-muted-foreground">App installs automatically!</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="text-lg px-12 py-6" asChild>
                <Link to="/app">
                  <Download className="w-5 h-5 mr-2" />
                  Go to App & Install Now
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Competitor Comparison */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose SafeOrStolen Over Competitors?
              </h2>
              <p className="text-xl text-muted-foreground">
                We're the ONLY stolen item checker with a downloadable mobile app
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4 bg-primary/10">SafeOrStolen</th>
                    <th className="text-center p-4">CheckMEND</th>
                    <th className="text-center p-4">IMEI.info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Mobile App</td>
                    <td className="text-center p-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4 text-red-500">✗</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Barcode Scanner</td>
                    <td className="text-center p-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4 text-red-500">✗</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Works Offline</td>
                    <td className="text-center p-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4 text-red-500">✗</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">$10/mo Unlimited</td>
                    <td className="text-center p-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4 text-red-500">✗ Paid Only</td>
                    <td className="text-center p-4 text-red-500">✗ Paid Only</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Protects Sellers Too</td>
                    <td className="text-center p-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4 text-red-500">✗</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">All Item Types</td>
                    <td className="text-center p-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center p-4">Limited</td>
                    <td className="text-center p-4">Phones Only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Is the SafeOrStolen app really free to download?</h3>
                  <p className="text-muted-foreground">
                    Yes! The app is completely free to download and install. Unlimited verifications are available 
                    for $0.99/check or $10/month unlimited. Cancel anytime with a 30-day money-back guarantee.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Does the app protect both buyers AND sellers?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! Buyers can verify items before purchasing to avoid stolen goods. Sellers can 
                    provide verification certificates to prove their items are legitimate, building trust and 
                    often getting better prices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Why is there no app store version?</h3>
                  <p className="text-muted-foreground">
                    Our Progressive Web App (PWA) technology is actually better than traditional app stores. 
                    It installs instantly, takes up less space, updates automatically, and works across all 
                    devices. No waiting for app store approval or large downloads.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">What items can I verify with the app?</h3>
                  <p className="text-muted-foreground">
                    Check phones (IMEI), vehicles (VIN), laptops, TVs, power tools, bicycles, firearms, 
                    musical instruments, cameras, gaming consoles, and virtually any item with a serial number. 
                    We're truly the "Carfax for Everything."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Does it work on Facebook Marketplace, OfferUp, and Craigslist?</h3>
                  <p className="text-muted-foreground">
                    Yes! Our app is perfect for verifying items before meetups on any marketplace - Facebook 
                    Marketplace, OfferUp, Craigslist, eBay, pawn shops, yard sales, and private sales. 
                    The offline mode ensures you can verify even without WiFi at meetup locations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Protect Yourself Today - Download FREE
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of smart buyers and sellers who verify before they trade. 
              Don't risk your money or legal trouble - verify in 3 seconds.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-12 py-6"
              asChild
            >
              <Link to="/app">
                <Download className="w-5 h-5 mr-2" />
                Download SafeOrStolen App - FREE
              </Link>
            </Button>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default DownloadApp;

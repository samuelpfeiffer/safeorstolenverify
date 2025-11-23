import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Smartphone, Check, QrCode, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DownloadPage() {
  return (
    <>
      <PageSEO
        title="Download SafeOrStolen App - Free Mobile Verification Tool"
        description="Download the SafeOrStolen mobile app for instant stolen item verification. Scan barcodes, check IMEI numbers, VINs, and serial numbers on-the-go. Available as PWA for iOS and Android."
        keywords="download safeorstolen app, mobile verification app, stolen item checker app, imei checker download, vin scanner app"
        canonical="/download"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <Link to="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Download className="h-4 w-4" />
                <span>Free Mobile App</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Download SafeOrStolen Mobile App
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Verify items instantly with your phone. Scan barcodes, check IMEI numbers, VINs, and serial numbers before you buy.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/app/download">
                  <Button size="lg" className="gap-2">
                    <Smartphone className="h-5 w-5" />
                    Install Now (PWA)
                  </Button>
                </Link>
                <Link to="/app/install-guide">
                  <Button size="lg" variant="outline" className="gap-2">
                    <QrCode className="h-5 w-5" />
                    Installation Guide
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Download the Mobile App?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-border hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <QrCode className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Instant Barcode Scanning</h3>
                      <p className="text-muted-foreground">Point your camera at any barcode or serial number for instant verification results</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Works Offline</h3>
                      <p className="text-muted-foreground">Save verification history locally and sync when you're back online</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Faster Than Website</h3>
                      <p className="text-muted-foreground">Native app performance with instant access from your home screen</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">No App Store Required</h3>
                      <p className="text-muted-foreground">Progressive Web App (PWA) installs directly to your device</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Steps */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">Easy Installation - 3 Simple Steps</h2>
              
              <div className="grid gap-6 text-left">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Open in Your Mobile Browser</h3>
                      <p className="text-muted-foreground">Visit safeorstolen.com on your iPhone (Safari) or Android (Chrome) browser</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Tap "Add to Home Screen"</h3>
                      <p className="text-muted-foreground">iOS: Tap the share icon → "Add to Home Screen" | Android: Tap menu → "Install app"</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Start Verifying</h3>
                      <p className="text-muted-foreground">Launch the app from your home screen and start scanning items instantly</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-12">
                <Link to="/app/install-guide">
                  <Button variant="outline" size="lg">
                    View Detailed Installation Guide
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Protect Yourself?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of buyers and sellers using SafeOrStolen to verify items before purchase
              </p>
              <Link to="/app/download">
                <Button size="lg" className="gap-2">
                  <Download className="h-5 w-5" />
                  Download App Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Bot-visible content */}
        <noscript>
          <div className="container mx-auto px-4 py-12">
            <h2>Download SafeOrStolen Mobile App - Complete Guide</h2>
            <p>The SafeOrStolen mobile app is a free Progressive Web App (PWA) that allows you to verify items instantly using your smartphone. No app store required - install directly to your device in seconds.</p>
            
            <h3>Key Features of the Mobile App</h3>
            <ul>
              <li>Instant barcode and QR code scanning with your camera</li>
              <li>Check IMEI numbers, VINs, and serial numbers on-the-go</li>
              <li>Works offline - save verifications locally and sync later</li>
              <li>Faster than the website with native app performance</li>
              <li>No app store approval required - updates instantly</li>
              <li>Works on both iOS (iPhone/iPad) and Android devices</li>
            </ul>

            <h3>How to Install the SafeOrStolen PWA</h3>
            <p><strong>For iPhone/iPad (iOS):</strong></p>
            <ol>
              <li>Open Safari and visit safeorstolen.com</li>
              <li>Tap the Share icon (square with arrow pointing up)</li>
              <li>Scroll down and tap "Add to Home Screen"</li>
              <li>Tap "Add" in the top right corner</li>
              <li>Launch the app from your home screen</li>
            </ol>

            <p><strong>For Android:</strong></p>
            <ol>
              <li>Open Chrome and visit safeorstolen.com</li>
              <li>Tap the menu icon (three dots)</li>
              <li>Select "Install app" or "Add to Home screen"</li>
              <li>Tap "Install" when prompted</li>
              <li>Launch the app from your home screen or app drawer</li>
            </ol>

            <h3>Why Choose SafeOrStolen Mobile App?</h3>
            <p>The SafeOrStolen mobile app is the only verification tool that offers instant barcode scanning, offline functionality, and support for all identifier types (IMEI, VIN, serial numbers) in one app. Unlike competitors like CheckMend or IMEI.info that don't have mobile apps, SafeOrStolen gives you on-the-go verification power right in your pocket.</p>

            <p>Perfect for marketplace buyers, resellers, pawn shops, and anyone buying used items from Facebook Marketplace, OfferUp, Craigslist, or eBay.</p>
          </div>
        </noscript>
      </div>
    </>
  );
}

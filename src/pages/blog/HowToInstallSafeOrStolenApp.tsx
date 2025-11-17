import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Download, 
  Apple, 
  Chrome,
  Share2,
  PlusSquare,
  CheckCircle2,
  Zap,
  Shield,
  Wifi,
  ArrowRight
} from 'lucide-react';

export default function HowToInstallSafeOrStolenApp() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install SafeOrStolen App on iPhone and Android",
    "description": "Step-by-step guide to install SafeOrStolen Progressive Web App on your phone without using the App Store or Google Play",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Open SafeOrStolen in Your Browser",
        "text": "Visit safeorstolen.com/install-app in Safari (iPhone) or Chrome (Android)",
        "url": "https://safeorstolen.com/install-app"
      },
      {
        "@type": "HowToStep",
        "name": "iPhone: Tap Share Button",
        "text": "On iPhone, tap the Share button (square with arrow) at the bottom of Safari"
      },
      {
        "@type": "HowToStep",
        "name": "iPhone: Add to Home Screen",
        "text": "Scroll down and tap 'Add to Home Screen', then tap 'Add' in the top right"
      },
      {
        "@type": "HowToStep",
        "name": "Android: Tap Menu",
        "text": "On Android, tap the three-dot menu in Chrome, then select 'Add to Home screen' or 'Install app'"
      },
      {
        "@type": "HowToStep",
        "name": "Launch the App",
        "text": "Find the SafeOrStolen icon on your home screen and tap to launch the app"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Install SafeOrStolen App on iPhone & Android (No App Store)",
    "description": "Complete guide to installing SafeOrStolen PWA on your phone. Works on iOS and Android without App Store or Google Play. Free, instant, no downloads.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/images/sos-logo.png"
      }
    },
    "datePublished": "2025-01-17",
    "dateModified": "2025-01-17"
  };

  return (
    <>
      <PageSEO
        title="How to Install SafeOrStolen App on iPhone & Android | No App Store Required"
        description="Step-by-step guide to install SafeOrStolen app on iPhone (iOS) and Android without App Store or Google Play. Free PWA installation in 30 seconds. Works offline with camera scan."
        keywords="how to install SafeOrStolen, install SafeOrStolen iPhone, install SafeOrStolen Android, PWA installation guide, add to home screen, install app without app store, SafeOrStolen app tutorial"
        canonical="/blog/how-to-install-safeorstolen-app"
        structuredData={[howToSchema, articleSchema]}
      />

      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-sos-orange/10 text-sos-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Download className="w-4 h-4" />
              Installation Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How to Install SafeOrStolen App on iPhone & Android
            </h1>
            <p className="text-xl text-muted-foreground">
              No App Store or Google Play required. Install directly from your browser in 30 seconds.
            </p>
          </div>

          {/* Quick Install Button */}
          <Card className="border-2 border-sos-orange/20 bg-gradient-to-br from-sos-orange/5 to-sos-lime/5 mb-12">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Install?</h2>
              <p className="text-muted-foreground mb-6">
                Visit our installation page for instant setup with device-specific instructions
              </p>
              <Link to="/install-app">
                <Button size="lg" className="bg-gradient-to-r from-sos-orange to-sos-lime hover:opacity-90 text-white font-bold">
                  <Download className="w-5 h-5 mr-2" />
                  Install SafeOrStolen Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* What is a PWA */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What is a Progressive Web App (PWA)?</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  SafeOrStolen is a <strong>Progressive Web App (PWA)</strong>—a modern web technology that lets you install apps directly from your browser without using the App Store or Google Play Store.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-sos-orange flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Lightning Fast</strong>
                      <span className="text-sm text-muted-foreground">Instant loading, works like a native app</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wifi className="w-5 h-5 text-sos-lime flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Works Offline</strong>
                      <span className="text-sm text-muted-foreground">Access your verification history anytime</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-sos-orange flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">100% Free</strong>
                      <span className="text-sm text-muted-foreground">No app store fees, no subscriptions</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* iPhone Installation */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Apple className="w-8 h-8 text-foreground" />
              <h2 className="text-3xl font-bold">Install on iPhone (iOS)</h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sos-orange text-white flex items-center justify-center font-bold">1</span>
                    <div>
                      <strong className="block mb-2 text-lg">Open Safari Browser</strong>
                      <p className="text-muted-foreground">Visit <code className="bg-muted px-2 py-1 rounded">safeorstolen.com/install-app</code> in Safari (not Chrome or other browsers)</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sos-orange text-white flex items-center justify-center font-bold">2</span>
                    <div className="flex-grow">
                      <strong className="block mb-2 text-lg flex items-center gap-2">
                        Tap the Share Button <Share2 className="w-5 h-5" />
                      </strong>
                      <p className="text-muted-foreground">Look for the square icon with an arrow pointing up at the bottom of Safari</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sos-orange text-white flex items-center justify-center font-bold">3</span>
                    <div className="flex-grow">
                      <strong className="block mb-2 text-lg flex items-center gap-2">
                        Select "Add to Home Screen" <PlusSquare className="w-5 h-5" />
                      </strong>
                      <p className="text-muted-foreground">Scroll down in the share menu and tap "Add to Home Screen"</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sos-lime text-white flex items-center justify-center font-bold">4</span>
                    <div className="flex-grow">
                      <strong className="block mb-2 text-lg flex items-center gap-2">
                        Tap "Add" <CheckCircle2 className="w-5 h-5" />
                      </strong>
                      <p className="text-muted-foreground">Confirm by tapping "Add" in the top right corner. The app icon will appear on your home screen!</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>

          {/* Android Installation */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Chrome className="w-8 h-8 text-foreground" />
              <h2 className="text-3xl font-bold">Install on Android</h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sos-orange text-white flex items-center justify-center font-bold">1</span>
                    <div>
                      <strong className="block mb-2 text-lg">Open Chrome Browser</strong>
                      <p className="text-muted-foreground">Visit <code className="bg-muted px-2 py-1 rounded">safeorstolen.com/install-app</code> in Chrome</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sos-orange text-white flex items-center justify-center font-bold">2</span>
                    <div className="flex-grow">
                      <strong className="block mb-2 text-lg">Tap the Three-Dot Menu</strong>
                      <p className="text-muted-foreground">Tap the menu icon (⋮) in the top right corner of Chrome</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sos-orange text-white flex items-center justify-center font-bold">3</span>
                    <div className="flex-grow">
                      <strong className="block mb-2 text-lg flex items-center gap-2">
                        Select "Add to Home screen" <PlusSquare className="w-5 h-5" />
                      </strong>
                      <p className="text-muted-foreground">Or "Install app" if you see that option</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sos-lime text-white flex items-center justify-center font-bold">4</span>
                    <div className="flex-grow">
                      <strong className="block mb-2 text-lg flex items-center gap-2">
                        Tap "Add" or "Install" <CheckCircle2 className="w-5 h-5" />
                      </strong>
                      <p className="text-muted-foreground">Confirm installation. The app will be added to your home screen automatically!</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>

          {/* Why Install Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Install SafeOrStolen App?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Zap className="w-10 h-10 text-sos-orange mb-4" />
                  <h3 className="text-xl font-bold mb-2">Instant Verification</h3>
                  <p className="text-muted-foreground">
                    Check IMEI, VIN, and serial numbers in seconds. Perfect for marketplace meetups and on-the-go verification.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Wifi className="w-10 h-10 text-sos-lime mb-4" />
                  <h3 className="text-xl font-bold mb-2">Works Offline</h3>
                  <p className="text-muted-foreground">
                    Access your verification history even without internet. Perfect for areas with poor signal.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Smartphone className="w-10 h-10 text-sos-orange mb-4" />
                  <h3 className="text-xl font-bold mb-2">Camera Scanning</h3>
                  <p className="text-muted-foreground">
                    Use your phone camera to scan VINs and serial numbers automatically. No manual typing required.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="w-10 h-10 text-sos-lime mb-4" />
                  <h3 className="text-xl font-bold mb-2">100% Free Forever</h3>
                  <p className="text-muted-foreground">
                    No hidden costs, no subscriptions. Free stolen goods verification for everyone, everywhere.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <Card className="border-2 border-sos-orange/20 bg-gradient-to-br from-sos-orange/5 to-sos-lime/5">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Start Verifying Items Safely Today</h2>
              <p className="text-muted-foreground mb-6">
                Install SafeOrStolen now and never buy stolen goods again
              </p>
              <Link to="/install-app">
                <Button size="lg" className="bg-gradient-to-r from-sos-orange to-sos-lime hover:opacity-90 text-white font-bold">
                  <Download className="w-5 h-5 mr-2" />
                  Install SafeOrStolen App
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

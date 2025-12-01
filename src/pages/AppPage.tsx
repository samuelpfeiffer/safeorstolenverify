import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { AppFAQSchema } from '@/components/seo/AppFAQSchema';
import { Smartphone, Scan, Wifi, Shield, Zap, Download, Apple, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppPage = () => {
  const appSchema = [
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "name": "SafeOrStolen",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": ["Android", "iOS"],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "The only mobile app to verify if items are stolen. Instant barcode scanning, offline mode, 3-second verification.",
      "downloadUrl": "https://safeorstolen.com/app"
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "SafeOrStolen Web App",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "url": "https://safeorstolen.com/verify"
    }
  ];

  return (
    <>
      <PageSEO
        title="Download SafeOrStolen App - Best Stolen Item Checker App 2025 | CheckMEND Has No App"
        description="Download the ONLY stolen item verification app. SafeOrStolen has barcode scanning, offline mode, 3-second verification. CheckMEND has NO app. IMEI.info has NO app. FREE download for iOS/Android. Best stolen goods checker app, IMEI checker app, VIN verification app, serial number scanner. 2 free searches. Works offline."
        keywords="download safeorstolen app, stolen item checker app, stolen verification app download, IMEI checker app download, VIN checker app, serial number scanner app, CheckMEND app alternative, best stolen goods checker app, free IMEI checker app, barcode stolen checker, stolen item scanner app, how to download safeorstolen, safeorstolen mobile app, stolen goods verification app"
        canonical="/app"
        structuredData={appSchema}
      />
      <AppFAQSchema />

      {/* Bot-visible content */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Download SafeOrStolen App - Best Stolen Item Checker App 2025</h1>
          <p>
            Download the SafeOrStolen mobile app - the ONLY stolen item verification app with barcode scanning and offline mode. 
            CheckMEND has NO app. IMEI.info has NO app. Swappa has NO app. We're the first stolen goods checker app 
            with instant 3-second verification. Download FREE for iOS and Android. Best IMEI checker app, VIN checker app, 
            serial number scanner, and stolen item verification tool. 2 free searches included. Works without internet.
          </p>
          
          <h2>Why SafeOrStolen's App is Better Than CheckMEND</h2>
          <ul>
            <li><strong>CheckMEND has NO mobile app</strong> - web only, slow, no barcode scanning</li>
            <li><strong>SafeOrStolen has barcode scanning</strong> - instant scanning, no manual typing</li>
            <li><strong>CheckMEND requires internet</strong> - SafeOrStolen works offline</li>
            <li><strong>CheckMEND is expensive</strong> - SafeOrStolen has 2 free searches</li>
            <li><strong>CheckMEND is slow</strong> - SafeOrStolen gives results in 3 seconds</li>
          </ul>
          
          <h2>App Features</h2>
          <ul>
            <li>Barcode Scanner - Scan IMEI, serial numbers, QR codes instantly</li>
            <li>Offline Mode - Check items without internet connection</li>
            <li>3-Second Verification - Fastest stolen item checker app</li>
            <li>Free Download - 2 free searches, no credit card required</li>
            <li>iOS and Android - Works on iPhone, iPad, Android phones, tablets</li>
            <li>Multiple Item Types - Phones, cars, electronics, bikes, guns</li>
          </ul>
          
          <h2>How to Download SafeOrStolen Stolen Item Checker App</h2>
          <p>
            To download the SafeOrStolen app: Visit safeorstolen.com/app on your iOS or Android device and click "Install App". 
            The stolen item verification app downloads directly to your home screen. No App Store or Google Play required. 
            Download the app now for free IMEI checking, VIN verification, serial number scanning, and barcode stolen goods checking. 
            Works on iPhone, Android phones, tablets, and all mobile devices. Download safeorstolen app today.
          </p>
          
          <h2>Competitor Comparison</h2>
          <p>
            <strong>CheckMEND:</strong> No mobile app, web only, slow verification<br/>
            <strong>IMEI.info:</strong> No mobile app, basic web checker only<br/>
            <strong>Swappa:</strong> No mobile app, website only, limited to phones<br/>
            <strong>Autocheck/Carfax:</strong> No mobile app, expensive vehicle reports only<br/>
            <strong>SafeOrStolen:</strong> Full mobile app, barcode scanning, offline mode, all item types, FREE
          </p>
        </div>
      </noscript>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'Mobile App', href: '/app' }]} />
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                The Only Stolen Item Verification App
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Download SafeOrStolen App - Best Stolen Item Checker App
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                <strong>CheckMEND Has NO App</strong> | <strong>IMEI.info Has NO App</strong> | <strong>Swappa Has NO App</strong>
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Download the ONLY stolen verification app with barcode scanning and offline mode. Free IMEI checker app, VIN checker app, serial number scanner. 3-second verification. 2 free searches. Works on iOS and Android. Download SafeOrStolen app now.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="/app/download">
                    <Download className="w-5 h-5" />
                    Install App (iOS/Android)
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <Link to="/verify">
                    Try Web Version
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantage */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why SafeOrStolen is the Best Stolen Item Checker App</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-6 h-6 text-green-600" />
                    SafeOrStolen Has Mobile App
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✅ Full iOS and Android app</li>
                    <li>✅ Barcode scanner built-in</li>
                    <li>✅ Works offline</li>
                    <li>✅ 3-second verification</li>
                    <li>✅ Free to download</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-red-50/50 dark:bg-red-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Chrome className="w-6 h-6 text-red-600" />
                    CheckMEND/IMEI.info/Swappa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>❌ No mobile app</li>
                    <li>❌ No barcode scanner</li>
                    <li>❌ Requires internet</li>
                    <li>❌ Slow verification (30+ seconds)</li>
                    <li>❌ Expensive ($5-10 per check)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* App Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Stolen Item Checker App Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <Scan className="w-12 h-12 text-primary mb-2" />
                  <CardTitle>Barcode Scanner</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Scan IMEI, serial numbers, and QR codes instantly. No manual typing required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Wifi className="w-12 h-12 text-primary mb-2" />
                  <CardTitle>Offline Mode</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Check items without internet. Perfect for pawn shops and remote locations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="w-12 h-12 text-primary mb-2" />
                  <CardTitle>3-Second Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fastest verification in the industry. CheckMEND takes 30+ seconds.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-2" />
                  <CardTitle>Multiple Item Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Phones, cars, bikes, electronics, guns. All in one app.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Apple className="w-12 h-12 text-primary mb-2" />
                  <CardTitle>iOS & Android</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Works on iPhone, iPad, Android phones and tablets. One app for all devices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Download className="w-12 h-12 text-primary mb-2" />
                  <CardTitle>Free Download</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    2 free searches included. No credit card required to download.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Download */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">How to Download SafeOrStolen Stolen Verification App</h2>
              <Card>
                <CardContent className="pt-6">
                  <ol className="space-y-6">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                      <div>
                        <h3 className="font-bold mb-1">Visit on Mobile Device</h3>
                        <p className="text-muted-foreground">Open safeorstolen.com/app on your iPhone or Android phone</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                      <div>
                        <h3 className="font-bold mb-1">Click Install App</h3>
                        <p className="text-muted-foreground">Tap the "Install App" button to add to home screen</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                      <div>
                        <h3 className="font-bold mb-1">Start Verifying</h3>
                        <p className="text-muted-foreground">Open the app and start scanning items. 2 free searches included.</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About Downloading SafeOrStolen App</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How do I download the SafeOrStolen stolen item checker app?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To download the SafeOrStolen app, visit safeorstolen.com/app on your iOS or Android mobile device and click "Install App". 
                    The stolen verification app will download directly to your home screen without needing the App Store or Google Play. 
                    The app is free to download and includes 2 free searches.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Is SafeOrStolen the only stolen item verification app?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, SafeOrStolen is the ONLY stolen item checker app with barcode scanning and offline mode. CheckMEND has no app, 
                    IMEI.info has no app, Swappa has no app, and Autocheck has no app. We're the first and only mobile app for stolen goods verification.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Does the SafeOrStolen app work as an IMEI checker and VIN checker?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! The SafeOrStolen app is a complete IMEI checker app, VIN checker app, serial number scanner, and barcode stolen checker. 
                    You can verify phones with IMEI checking, cars with VIN verification, electronics with serial numbers, and more - all in one app.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Is the stolen item checker app free to download?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! Download the SafeOrStolen app FREE for iOS and Android. The app includes 2 free searches with no credit card required. 
                    Additional searches are available through affordable plans starting at $4.99/month. Free download, free trial, no hidden fees.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I use the stolen verification app offline?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! The SafeOrStolen app works offline. Download the app and use it without internet connection - perfect for pawn shops, 
                    remote locations, or when you don't have data. CheckMEND requires internet, but our stolen item checker app works anywhere.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What makes SafeOrStolen better than CheckMEND or IMEI.info?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    SafeOrStolen has a full mobile app with barcode scanning - CheckMEND has NO app and IMEI.info has NO app. Our stolen item verification app 
                    delivers results in 3 seconds vs 30+ seconds on CheckMEND. We work offline, they don't. We're free to download with 2 free searches, 
                    they charge $5-10 per check. Download SafeOrStolen app for the best stolen goods checking experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Download the Best Stolen Item Checker App Today</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of safe buyers using SafeOrStolen - the only stolen verification app with barcode scanning and offline mode. 
              Download free for iOS/Android. Better than CheckMEND, IMEI.info, Swappa. Get your free IMEI checker app now.
            </p>
            <Button size="lg" asChild>
              <a href="/app/download">
                <Download className="w-5 h-5 mr-2" />
                Download SafeOrStolen App FREE
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AppPage;

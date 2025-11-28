import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Smartphone, Zap, Globe, Shield, Camera, Wifi, Bell } from 'lucide-react';

const MobileAppPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SafeOrStolen Mobile App",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    },
    "description": "The only global verification app. Scan barcodes in 3 seconds. Works in all 50 states + international. CheckMEND has no app."
  };

  return (
    <>
      <PageSEO
        title="Download SafeOrStolen App | Only Global Verification App | iOS Android"
        description="The only mobile app that verifies serial numbers globally. Scan barcodes in 3 seconds. Works in all 50 states + international coverage. CheckMEND has no app."
        keywords="SafeOrStolen app download, IMEI checker app, VIN verification app, barcode stolen scanner, stolen item app"
        canonical="/app"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'Mobile App', href: '/app' }]} />
        </div>
        
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="px-4 py-2 text-lg">The Only Global Verification App</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">
                Carfax Checks Cars. We Check EVERYTHING.
              </h1>
              <p className="text-xl text-muted-foreground">
                Barcode scanning in 3 seconds vs 30+ seconds typing. Works in all 50 US states + international coverage.
              </p>
              
              <div className="space-y-4 pt-6">
                <p className="text-sm text-muted-foreground">
                  SafeOrStolen is a Progressive Web App (PWA) - install directly from your browser!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="px-8" onClick={() => window.location.href = '/install-app'}>
                    <Smartphone className="mr-2 h-5 w-5" />
                    Install on iOS
                  </Button>
                  <Button size="lg" variant="outline" className="px-8" onClick={() => window.location.href = '/install-app'}>
                    <Smartphone className="mr-2 h-5 w-5" />
                    Install on Android
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitor Comparison */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Competitors Have NO App
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-bold mb-2">CheckMEND</h3>
                    <p className="text-sm text-muted-foreground mb-4">£13.8B in checks</p>
                    <Badge variant="destructive">NO APP</Badge>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-bold mb-2">IMEI.info</h3>
                    <p className="text-sm text-muted-foreground mb-4">110M+ checks</p>
                    <Badge variant="destructive">NO APP</Badge>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-bold mb-2">LeadsOnline</h3>
                    <p className="text-sm text-muted-foreground mb-4">B2B only</p>
                    <Badge variant="destructive">NO APP</Badge>
                  </CardContent>
                </Card>
                
                <Card className="border-primary border-2">
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-bold mb-2">SafeOrStolen</h3>
                    <p className="text-sm text-muted-foreground mb-4">5,000+ checks</p>
                    <Badge className="bg-primary">ONLY APP ✓</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">App Features</h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Camera className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-bold mb-2">Barcode Scanning</h3>
                    <p className="text-sm text-muted-foreground">
                      3-second scans vs 30+ seconds typing
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Wifi className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-bold mb-2">Offline Mode</h3>
                    <p className="text-sm text-muted-foreground">
                      Works without internet at meetups
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Bell className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-bold mb-2">Push Notifications</h3>
                    <p className="text-sm text-muted-foreground">
                      Instant alerts for search results
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-bold mb-2">Global Coverage</h3>
                    <p className="text-sm text-muted-foreground">
                      All 50 states + international
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Download Now - 2 Free Checks</h2>
              <p className="text-lg text-muted-foreground">
                Get started with 2 free verification checks. No credit card required.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="px-8" onClick={() => window.location.href = '/install-app'}>
                  <Smartphone className="mr-2 h-5 w-5" />
                  Install PWA on iOS
                </Button>
                <Button size="lg" variant="outline" className="px-8" onClick={() => window.location.href = '/install-app'}>
                  <Smartphone className="mr-2 h-5 w-5" />
                  Install PWA on Android
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No app stores needed - install directly from Safari (iOS) or Chrome (Android)
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MobileAppPage;

import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Apple, Play, QrCode, Shield, Zap, CheckCircle } from 'lucide-react';

export default function DownloadAppPage() {
  return (
    <>
      <PageSEO
        title="Download SafeOrStolen Mobile App | iOS & Android"
        description="Download the SafeOrStolen mobile app for instant verification of phones, cars, guns, and items. Available on iOS and Android. 4 free checks included."
        keywords="mobile verification app, IMEI checker app, VIN check app, stolen item checker, SafeOrStolen app"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              <span>The Only Mobile Verification App</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Download SafeOrStolen
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The only mobile app that verifies phones (IMEI), vehicles (VIN), firearms, electronics, and all items. 
              Instant verification on iOS and Android.
            </p>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="min-w-[200px] bg-foreground hover:bg-foreground/90 text-background"
              onClick={() => window.open('https://apps.apple.com', '_blank')}
            >
              <Apple className="h-6 w-6 mr-2" />
              Download for iOS
            </Button>
            <Button 
              size="lg" 
              className="min-w-[200px] bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://play.google.com', '_blank')}
            >
              <Play className="h-6 w-6 mr-2" />
              Download for Android
            </Button>
          </div>

          {/* QR Code Section */}
          <Card className="max-w-md mx-auto p-8 text-center mb-16">
            <div className="w-48 h-48 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
              <QrCode className="h-32 w-32 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              Scan with your phone camera to download
            </p>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="p-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">All-In-One Verification</h3>
              <p className="text-muted-foreground">
                Check phones, cars, guns, bikes, electronics - everything in one app
              </p>
            </Card>

            <Card className="p-6">
              <Zap className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Instant Camera Scanning</h3>
              <p className="text-muted-foreground">
                Point, scan, verify - check items in seconds with QR and barcode scanning
              </p>
            </Card>

            <Card className="p-6">
              <CheckCircle className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">4 Free Verifications</h3>
              <p className="text-muted-foreground">
                Start with 4 free checks, then upgrade for unlimited verification
              </p>
            </Card>
          </div>

          {/* Stats */}
          <div className="text-center">
            <div className="inline-flex items-center gap-8 bg-card border border-border rounded-xl px-8 py-4">
              <div>
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">App Rating</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-primary">100K+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-primary">99.7%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

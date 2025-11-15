import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppStoreBadges } from '@/components/app/AppStoreBadges';
import { Card } from '@/components/ui/card';
import { Smartphone, Shield, Zap, Check } from 'lucide-react';

export default function AppDownloadPage() {
  const benefits = [
    "Verify phones (IMEI), vehicles (VIN), electronics, and firearms",
    "Camera barcode and serial number scanning",
    "Offline verification mode",
    "Push notifications for stolen item alerts",
    "100+ police and insurance database access",
    "Verification history tracking",
    "No app store required - install from browser",
    "No subscription required"
  ];

  return (
    <AppPageTemplate
      title="Download SafeOrStolen App - iOS, Android & Web"
      description="Download SafeOrStolen mobile app for instant stolen goods verification. Available on iOS, Android, and as a Progressive Web App. Verify IMEI, VIN, serial numbers, and firearms on-the-go. No subscription required."
      keywords="download SafeOrStolen, SafeOrStolen app download, install SafeOrStolen, IMEI checker app, VIN checker app, stolen goods app, mobile verification app"
      canonical="/app/download"
      h1Title="Download SafeOrStolen - Verify Stolen Items Instantly"
    >
      <div className="space-y-12">
        <div className="text-center space-y-6">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get SafeOrStolen on all your devices. The only mobile app that lets you verify phones, vehicles, 
            electronics, AND firearms before you buy.
          </p>

          <div className="flex justify-center">
            <AppStoreBadges size="lg" />
          </div>

          <p className="text-sm text-muted-foreground">
            No App Store or Google Play required • Install directly from your browser • 100% Free
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">iOS Devices</h3>
            <p className="text-muted-foreground text-sm mb-4">
              iPhone and iPad - Install from Safari
            </p>
            <a href="/app/ios" className="text-primary hover:underline font-medium">
              iOS Installation Guide →
            </a>
          </Card>

          <Card className="p-6 text-center">
            <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Android Devices</h3>
            <p className="text-muted-foreground text-sm mb-4">
              All Android phones and tablets - Install from Chrome
            </p>
            <a href="/app/android" className="text-primary hover:underline font-medium">
              Android Installation Guide →
            </a>
          </Card>

          <Card className="p-6 text-center">
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Progressive Web App</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Works on ALL devices - Ultimate flexibility
            </p>
            <a href="/app/pwa" className="text-primary hover:underline font-medium">
              PWA Installation Guide →
            </a>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            What You Get with SafeOrStolen App
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why SafeOrStolen Has a Mobile App</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When you're buying a used phone at a meetup, shopping at a yard sale, or browsing Facebook Marketplace, 
            you need instant verification on-the-go. You can't wait to get home to a computer.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            That's why SafeOrStolen built the FIRST mobile app for stolen goods verification. CheckMEND? Website 
            only. IMEIinfo? Website only. Carfax? Website only. SafeOrStolen is the ONLY service that lets you 
            verify items right from your pocket, anywhere, anytime.
          </p>
        </div>

        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

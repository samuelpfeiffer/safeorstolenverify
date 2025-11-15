import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Apple, Shield, Zap, Camera, Bell, Database } from 'lucide-react';

const features: AppFeature[] = [
  {
    icon: Apple,
    title: "Native iOS Experience",
    description: "Optimized for iPhone and iPad with smooth animations and native feel",
    highlight: true
  },
  {
    icon: Camera,
    title: "Advanced Camera Scanning",
    description: "Use your iPhone camera to scan barcodes, serial numbers, and VINs instantly"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "All verifications encrypted end-to-end with biometric authentication"
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Get instant alerts if items appear on stolen registries"
  },
  {
    icon: Zap,
    title: "Offline Mode",
    description: "Continue verifying items even without internet connection"
  },
  {
    icon: Database,
    title: "100+ Databases",
    description: "Access police databases, insurance claims, and theft registries"
  }
];

export default function AppIOSPage() {
  return (
    <AppPageTemplate
      title="SafeOrStolen iOS App - Download for iPhone & iPad"
      description="Download SafeOrStolen for iOS. Verify stolen phones, cars, electronics, and firearms right from your iPhone. Install directly from Safari - no App Store needed. No subscription required."
      keywords="SafeOrStolen iOS app, iPhone stolen checker, iPad verification app, IMEI checker iOS, VIN checker iPhone, stolen goods app iOS, install web app iPhone"
      canonical="/app/ios"
      aiPurpose="iOS mobile application for stolen goods verification on iPhone and iPad"
      aiUniqueValue="Only iOS app that verifies phones, vehicles, electronics, AND firearms. Install directly from Safari without App Store."
      h1Title="SafeOrStolen for iOS - Instant Verification on iPhone & iPad"
    >
      <div className="space-y-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Download SafeOrStolen for iPhone and iPad to verify stolen items instantly, right from your pocket. 
            Unlike competitors like CheckMEND (no mobile app) or IMEIinfo (no mobile app), SafeOrStolen offers 
            a true mobile-first experience optimized for iOS.
          </p>
        </div>

        <AppDownloadCTA variant="hero" />

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Install on iPhone</h2>
          <ol className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-bold text-primary">1.</span>
              Open Safari and visit safeorstolen.com/mobile-app
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">2.</span>
              Tap the Share button at the bottom of the screen
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">3.</span>
              Select "Add to Home Screen"
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">4.</span>
              Tap "Add" and launch SafeOrStolen from your home screen
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">iOS App Features</h2>
          <AppFeatureGrid features={features} />
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why SafeOrStolen for iOS?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>✅ <strong>Only app that verifies firearms</strong> - No competitor offers this</li>
            <li>✅ <strong>No App Store required</strong> - Install directly from Safari</li>
            <li>✅ <strong>No subscription required</strong> - Unlike Carfax or CheckMEND subscriptions</li>
            <li>✅ <strong>Works offline</strong> - Verify items without internet</li>
            <li>✅ <strong>Camera scanning</strong> - Instant barcode and serial recognition</li>
            <li>✅ <strong>Push notifications</strong> - Get alerts for your watched items</li>
          </ul>
        </div>

        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

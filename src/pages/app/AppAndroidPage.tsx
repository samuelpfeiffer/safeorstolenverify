import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Smartphone, Shield, Zap, Camera, Bell, Database } from 'lucide-react';

const features: AppFeature[] = [
  {
    icon: Smartphone,
    title: "Native Android Experience",
    description: "Optimized for all Android devices with Material Design",
    highlight: true
  },
  {
    icon: Camera,
    title: "Advanced Camera Scanning",
    description: "Use your Android camera to scan barcodes, serial numbers, and VINs"
  },
  {
    icon: Shield,
    title: "Secure Verification",
    description: "End-to-end encryption with fingerprint/face unlock support"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Real-time alerts when items are reported stolen"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Results in under 30 seconds with offline caching"
  },
  {
    icon: Database,
    title: "Global Database Access",
    description: "Search 100+ police and insurance databases instantly"
  }
];

export default function AppAndroidPage() {
  return (
    <AppPageTemplate
      title="SafeOrStolen Android App - Download for Android Devices"
      description="Download SafeOrStolen for Android. Verify stolen phones, cars, electronics, and firearms from your Android device. Install directly from Chrome - no Play Store needed. Free forever."
      keywords="SafeOrStolen Android app, Android stolen checker, IMEI checker Android, VIN checker Android app, stolen goods app Android, install web app Android"
      canonical="/app/android"
      aiPurpose="Android mobile application for stolen goods verification"
      aiUniqueValue="Only Android app that verifies phones, vehicles, electronics, AND firearms. Install directly without Google Play Store."
      h1Title="SafeOrStolen for Android - Instant Verification on Android Devices"
    >
      <div className="space-y-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Download SafeOrStolen for Android to verify stolen items instantly from your phone or tablet. 
            CheckMEND doesn't have a mobile app. IMEIinfo doesn't have a mobile app. Carfax doesn't have a mobile app. 
            SafeOrStolen is the ONLY service with true mobile verification for all item types.
          </p>
        </div>

        <AppDownloadCTA variant="hero" />

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Install on Android</h2>
          <ol className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-bold text-primary">1.</span>
              Open Chrome and visit safeorstolen.com/mobile-app
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">2.</span>
              Tap the menu button (three dots) in the top right
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">3.</span>
              Select "Install app" or "Add to Home screen"
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">4.</span>
              Tap "Install" and launch SafeOrStolen from your home screen
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Android App Features</h2>
          <AppFeatureGrid features={features} />
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why SafeOrStolen for Android?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>✅ <strong>Only app that verifies firearms</strong> - Exclusive feature</li>
            <li>✅ <strong>No Google Play Store required</strong> - Install from browser</li>
            <li>✅ <strong>100% Free</strong> - No subscriptions or hidden costs</li>
            <li>✅ <strong>Offline verification</strong> - Works without internet</li>
            <li>✅ <strong>Camera integration</strong> - Scan anything instantly</li>
            <li>✅ <strong>Battery optimized</strong> - Minimal battery usage</li>
          </ul>
        </div>

        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

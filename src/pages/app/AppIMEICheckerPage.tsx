import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Smartphone, Camera, Shield, Zap } from 'lucide-react';

const features: AppFeature[] = [
  { icon: Camera, title: "Scan IMEI with Camera", description: "Point your camera at the phone's IMEI - instant recognition", highlight: true },
  { icon: Zap, title: "Results in 30 Seconds", description: "Know if a phone is stolen before you hand over cash" },
  { icon: Shield, title: "100+ Databases", description: "Search police databases, carriers, and theft registries" },
  { icon: Smartphone, title: "Works Offline", description: "Verify phones even without internet connection" }
];

export default function AppIMEICheckerPage() {
  return (
    <AppPageTemplate
      title="IMEI Checker Mobile App - Verify Stolen Phones Instantly"
      description="Download the only IMEI checker mobile app that works on-the-go. Scan phone IMEI numbers with your camera, get instant stolen status. CheckMEND and IMEIinfo have no mobile app."
      keywords="IMEI checker app, phone verification app, stolen phone checker, IMEI scanner app, mobile IMEI check, verify phone stolen"
      canonical="/app/imei-checker"
      aiUniqueValue="Only IMEI checker with true mobile app. Competitors like CheckMEND and IMEIinfo are website-only."
      h1Title="IMEI Checker Mobile App - Verify Phones On-The-Go"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          The only IMEI checker with a true mobile app. CheckMEND? No app. IMEIinfo? No app. SafeOrStolen lets you verify phones instantly from your pocket.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

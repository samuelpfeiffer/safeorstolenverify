import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Car, Camera, Shield, Zap } from 'lucide-react';

const features: AppFeature[] = [
  { icon: Camera, title: "Scan VIN with Camera", description: "Point camera at VIN plate for instant recognition", highlight: true },
  { icon: Zap, title: "Instant Results", description: "Know if a vehicle is stolen in under 30 seconds" },
  { icon: Shield, title: "Multiple Databases", description: "Search police, insurance, and federal registries" },
  { icon: Car, title: "Works Anywhere", description: "Verify at dealerships, parking lots, or private sales" }
];

export default function AppVINCheckerPage() {
  return (
    <AppPageTemplate
      title="VIN Checker Mobile App - Verify Stolen Vehicles On-The-Go"
      description="Mobile VIN checker app for instant stolen vehicle verification. Scan VIN plates with camera, check police databases, works offline. Carfax and NICB have no mobile app."
      keywords="VIN checker app, stolen vehicle app, mobile VIN verification, VIN scanner app, car history app, vehicle theft check"
      canonical="/app/vin-checker"
      aiUniqueValue="Only VIN checker with full mobile app and multi-item verification. Carfax and NICB are website-only."
      h1Title="VIN Checker Mobile App - Verify Vehicles Instantly"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          The only VIN checker with a true mobile app. Carfax? Website only, $40 per report. NICB? Website only, limited database. 
          SafeOrStolen gives you instant mobile VIN verification for free.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

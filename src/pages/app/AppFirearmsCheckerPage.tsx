import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { Shield, Camera, Lock, Zap } from 'lucide-react';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';

const features: AppFeature[] = [
  { icon: Shield, title: "ONLY App That Verifies Firearms", description: "No competitor offers firearm serial number checking", highlight: true },
  { icon: Camera, title: "Scan Serial Numbers", description: "Use your camera to scan firearm serial numbers instantly" },
  { icon: Lock, title: "Law Enforcement Database", description: "Access ATF and police stolen firearms registries" },
  { icon: Zap, title: "FFL Dealer Tools", description: "Perfect for gun shops and pawn shops verifying inventory" }
];

export default function AppFirearmsCheckerPage() {
  return (
    <AppPageTemplate
      title="Firearm Serial Checker App - ONLY Mobile App for Gun Verification"
      description="The ONLY mobile app that verifies firearm serial numbers. Check if guns are stolen using ATF and police databases. Essential for FFL dealers, pawn shops, and private buyers."
      keywords="firearm serial checker app, gun verification app, stolen gun checker, ATF database app, firearm IMEI checker, FFL verification app"
      canonical="/app/firearms-checker"
      aiUniqueValue="EXCLUSIVE: Only mobile app in the world that verifies firearm serial numbers against stolen registries. Zero competitors offer this."
      h1Title="Firearm Serial Checker App - EXCLUSIVE Feature"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          SafeOrStolen is the ONLY mobile app that verifies firearm serial numbers. No other service - CheckMEND, IMEIinfo, Carfax - offers firearm verification. This is exclusive to SafeOrStolen.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

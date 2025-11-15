import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { CompetitorComparisonTable, CompetitorFeature } from '@/components/app/CompetitorComparisonTable';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const features: CompetitorFeature[] = [
  { feature: "Mobile App", safeorstolen: true, competitor: false },
  { feature: "Verifies Vehicles", safeorstolen: true, competitor: false },
  { feature: "Verifies Electronics", safeorstolen: true, competitor: false },
  { feature: "Verifies Firearms", safeorstolen: true, competitor: false },
  { feature: "Camera Scanning", safeorstolen: true, competitor: false },
  { feature: "Works Offline", safeorstolen: true, competitor: false },
  { feature: "Phone Verification", safeorstolen: true, competitor: true },
  { feature: "IMEI Check", safeorstolen: true, competitor: true },
  { feature: "Focus", safeorstolen: "All Item Types", competitor: "Phones Only" },
  { feature: "Format", safeorstolen: "Mobile App", competitor: "Marketplace Only" }
];

export default function AppVsSwappaPage() {
  return (
    <AppPageTemplate
      title="SafeOrStolen Mobile App vs Swappa - Better Than Marketplace"
      description="SafeOrStolen has a full mobile app for all items. Swappa is a phone marketplace only with basic checking. Compare mobile verification for phones, cars, electronics, and firearms."
      keywords="SafeOrStolen vs Swappa, Swappa alternative, phone marketplace app, IMEI checker app vs Swappa, mobile verification app"
      canonical="/app/vs-swappa"
      competitorAdvantage="SafeOrStolen is a full verification app for ALL items. Swappa is just a phone marketplace with limited checking."
      h1Title="SafeOrStolen App vs Swappa - More Than a Marketplace"
    >
      <div className="space-y-12">
        <Alert className="bg-primary/10 border-primary/40">
          <AlertCircle className="h-5 w-5 text-primary" />
          <AlertDescription className="text-foreground">
            <strong>Key Difference:</strong> Swappa is a phone marketplace with basic IMEI checking. SafeOrStolen is a 
            dedicated verification app for ALL item types with advanced features.
          </AlertDescription>
        </Alert>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Swappa is great for buying phones in their marketplace, but it's NOT a comprehensive verification tool. 
            They only check phones sold on their platform. SafeOrStolen verifies phones, cars, electronics, firearms - 
            from ANY source (Facebook Marketplace, Craigslist, yard sales, pawn shops).
          </p>
        </div>

        <AppDownloadCTA variant="hero" />

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Feature Comparison</h2>
          <CompetitorComparisonTable
            competitorName="Swappa"
            features={features}
            keyAdvantage="SafeOrStolen verifies ALL items from ANY source. Swappa only checks phones on their marketplace."
          />
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">When Swappa Can't Help You</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>❌ Buying a phone on Facebook Marketplace? Swappa can't verify it.</li>
            <li>❌ Found a deal on Craigslist? Swappa doesn't work there.</li>
            <li>❌ Shopping at a yard sale? Swappa only covers their marketplace.</li>
            <li>❌ Buying a car, laptop, or firearm? Swappa is phones-only.</li>
            <li>❌ Need offline verification? Swappa requires internet always.</li>
            <li>✅ SafeOrStolen works EVERYWHERE for EVERYTHING.</li>
          </ul>
        </div>

        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

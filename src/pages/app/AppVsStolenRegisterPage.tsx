import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { CompetitorComparisonTable, CompetitorFeature } from '@/components/app/CompetitorComparisonTable';

const features: CompetitorFeature[] = [
  { feature: "Mobile App", safeorstolen: true, competitor: false },
  { feature: "Camera Scanning", safeorstolen: true, competitor: false },
  { feature: "Offline Mode", safeorstolen: true, competitor: false },
  { feature: "Verifies Phones", safeorstolen: true, competitor: true },
  { feature: "Verifies Cars", safeorstolen: true, competitor: true },
  { feature: "Verifies Electronics", safeorstolen: true, competitor: true },
  { feature: "Verifies Firearms", safeorstolen: true, competitor: false },
  { feature: "Free Tier", safeorstolen: true, competitor: true },
  { feature: "Instant Results", safeorstolen: "30 seconds", competitor: "Website only" },
  { feature: "Platform", safeorstolen: "iOS, Android, Web", competitor: "Web Only" }
];

export default function AppVsStolenRegisterPage() {
  return (
    <AppPageTemplate
      title="SafeOrStolen App vs Stolen Register - Mobile Advantage"
      description="SafeOrStolen mobile app vs Stolen Register website. Verify stolen items on-the-go with camera scanning, offline mode, and multi-item verification. Stolen Register has no mobile app."
      keywords="SafeOrStolen vs Stolen Register, stolen item checker app, mobile verification app, Stolen Register alternative"
      canonical="/app/vs-stolen-register"
      competitorAdvantage="SafeOrStolen has full mobile app with camera scanning and offline mode. Stolen Register is website-only."
      h1Title="SafeOrStolen App vs Stolen Register - Mobile Power"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Stolen Register is UK-based and website-only. SafeOrStolen offers a true mobile app with instant verification, 
          camera scanning, offline mode, and coverage for phones, cars, electronics, and firearms.
        </p>
        <AppDownloadCTA variant="hero" />
        <CompetitorComparisonTable competitorName="Stolen Register" features={features} 
          keyAdvantage="Full mobile app with camera scanning vs website-only service" />
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

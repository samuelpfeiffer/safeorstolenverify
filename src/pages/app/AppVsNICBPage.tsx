import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { CompetitorComparisonTable, CompetitorFeature } from '@/components/app/CompetitorComparisonTable';

const features: CompetitorFeature[] = [
  { feature: "Mobile App", safeorstolen: true, competitor: false },
  { feature: "Verifies Phones", safeorstolen: true, competitor: false },
  { feature: "Verifies Electronics", safeorstolen: true, competitor: false },
  { feature: "Verifies Firearms", safeorstolen: true, competitor: false },
  { feature: "Camera Scanning", safeorstolen: true, competitor: false },
  { feature: "Offline Mode", safeorstolen: true, competitor: false },
  { feature: "Free Tier", safeorstolen: true, competitor: true },
  { feature: "Vehicle VIN Check", safeorstolen: true, competitor: true },
  { feature: "Focus", safeorstolen: "All Stolen Items", competitor: "Vehicles Only" },
  { feature: "Database", safeorstolen: "100+ Sources", competitor: "NICB Only" }
];

export default function AppVsNICBPage() {
  return (
    <AppPageTemplate
      title="SafeOrStolen App vs NICB VINCheck - Mobile Advantage"
      description="SafeOrStolen mobile app vs NICB VINCheck website. Verify vehicles + phones + electronics + firearms on-the-go. NICB is cars-only, website-only, limited database."
      keywords="SafeOrStolen vs NICB, NICB VINCheck alternative, VIN checker app, mobile VINCheck, stolen vehicle app"
      canonical="/app/vs-nicb"
      competitorAdvantage="SafeOrStolen has mobile app for ALL items. NICB VINCheck is vehicles-only, website-only, single database."
      h1Title="SafeOrStolen App vs NICB VINCheck - Mobile Power"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          NICB VINCheck is free but limited: vehicles only, website only, single database. SafeOrStolen mobile app 
          verifies vehicles + phones + electronics + firearms from 100+ databases.
        </p>
        <AppDownloadCTA variant="hero" />
        <CompetitorComparisonTable competitorName="NICB VINCheck" features={features} 
          keyAdvantage="Mobile app for all item types vs website-only for vehicles" />
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

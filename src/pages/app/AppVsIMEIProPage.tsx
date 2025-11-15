import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { CompetitorComparisonTable, CompetitorFeature } from '@/components/app/CompetitorComparisonTable';

const features: CompetitorFeature[] = [
  { feature: "Mobile App", safeorstolen: true, competitor: false },
  { feature: "Camera Scanning", safeorstolen: true, competitor: false },
  { feature: "Offline Verification", safeorstolen: true, competitor: false },
  { feature: "Verifies Phones", safeorstolen: true, competitor: true },
  { feature: "Verifies Cars", safeorstolen: true, competitor: false },
  { feature: "Verifies Electronics", safeorstolen: true, competitor: false },
  { feature: "Verifies Firearms", safeorstolen: true, competitor: false },
  { feature: "Free Checks", safeorstolen: true, competitor: "Limited" },
  { feature: "Database Size", safeorstolen: "100+ Sources", competitor: "Phone Only" },
  { feature: "Focus", safeorstolen: "All Items", competitor: "IMEI Only" }
];

export default function AppVsIMEIProPage() {
  return (
    <AppPageTemplate
      title="SafeOrStolen App vs IMEIpro - Complete Mobile Solution"
      description="SafeOrStolen mobile app vs IMEIpro website. Verify phones, cars, electronics, and firearms on-the-go. IMEIpro is phones-only, website-only, limited features."
      keywords="SafeOrStolen vs IMEIpro, IMEI checker app, mobile phone verification, IMEIpro alternative"
      canonical="/app/vs-imeipro"
      competitorAdvantage="SafeOrStolen verifies ALL item types with mobile app. IMEIpro is phones-only, website-only."
      h1Title="SafeOrStolen App vs IMEIpro - Beyond Phone Checks"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          IMEIpro is a phone-only checker with no mobile app. SafeOrStolen offers a comprehensive mobile app 
          that verifies phones, cars, electronics, and firearms from 100+ databases.
        </p>
        <AppDownloadCTA variant="hero" />
        <CompetitorComparisonTable competitorName="IMEIpro" features={features} 
          keyAdvantage="Mobile app for all item types vs website-only for phones" />
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

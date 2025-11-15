import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Zap, Timer, Camera, Shield } from 'lucide-react';

const features: AppFeature[] = [
  { icon: Zap, title: "30-Second Results", description: "Get stolen status in 30 seconds or less", highlight: true },
  { icon: Camera, title: "Instant Recognition", description: "Camera reads serial numbers immediately" },
  { icon: Timer, title: "No Waiting", description: "Results appear before seller can rush you" },
  { icon: Shield, title: "Fast Database Search", description: "Search 100+ databases simultaneously" }
];

export default function AppInstantScanPage() {
  return (
    <AppPageTemplate
      title="30-Second Verification - Instant Stolen Item Checks"
      description="Instant verification app with 30-second results. Check IMEI, VIN, serial numbers instantly with camera scanning. Fastest stolen item checker available."
      keywords="instant verification app, 30-second stolen check, fast IMEI checker, quick VIN verification, instant serial checker"
      canonical="/app/features/instant-scan"
      aiUniqueValue="Fastest stolen item verification with guaranteed 30-second results. No competitor is this fast."
      h1Title="30-Second Verification - Instant Results"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Time is critical at meetups. SafeOrStolen delivers results in 30 seconds or less. Scan with your camera, 
          search 100+ databases, and get instant answers before handing over cash.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">How We're This Fast</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>⚡ <strong>Optimized Algorithms</strong> - Search multiple databases simultaneously</li>
            <li>💾 <strong>Smart Caching</strong> - Frequently searched items cached locally</li>
            <li>🔍 <strong>Parallel Processing</strong> - Multiple searches at once</li>
            <li>📡 <strong>Direct API Access</strong> - No middleman delays</li>
            <li>🖥️ <strong>Edge Computing</strong> - Processing happens near you</li>
          </ul>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Why Speed Matters</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🤝 <strong>Meetup Pressure</strong> - Sellers want fast transactions</li>
            <li>🏃 <strong>Can't Be Rushed</strong> - Get answers before they leave</li>
            <li>🅿️ <strong>Parking Lot Safety</strong> - Less time exposed in public</li>
            <li>💰 <strong>Confidence</strong> - Make quick, informed decisions</li>
            <li>🔄 <strong>Multiple Items</strong> - Check several items quickly</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

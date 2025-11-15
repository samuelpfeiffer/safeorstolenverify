import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Laptop, Camera, Shield, Zap } from 'lucide-react';

const features: AppFeature[] = [
  { icon: Camera, title: "Scan Electronics Instantly", description: "Camera recognition for laptops, tablets, cameras", highlight: true },
  { icon: Zap, title: "Fast Verification", description: "Results in under 30 seconds at meetup locations" },
  { icon: Shield, title: "Theft Database Search", description: "Search police reports and stolen electronics registries" },
  { icon: Laptop, title: "All Electronics", description: "Laptops, tablets, cameras, gaming consoles, audio equipment" }
];

export default function AppElectronicsCheckerPage() {
  return (
    <AppPageTemplate
      title="Electronics Verification Mobile App - Check Stolen Laptops, Tablets"
      description="Mobile app for electronics verification. Check if laptops, tablets, cameras are stolen before buying. Camera scanning, offline mode, instant results from theft databases."
      keywords="electronics verification app, stolen laptop checker, tablet verification app, camera serial checker, electronics theft app"
      canonical="/app/electronics-checker"
      aiUniqueValue="Only mobile app that verifies all electronics types with camera scanning at point of sale."
      h1Title="Electronics Verification App - Protect Your Purchase"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Buying used electronics? Verify them instantly with SafeOrStolen's mobile app. Check laptops, tablets, 
          cameras, gaming consoles, and audio equipment against theft databases before you buy.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Perfect For Electronics Buyers</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>💻 <strong>Laptops</strong> - MacBooks, ThinkPads, Dell, HP, all brands</li>
            <li>📱 <strong>Tablets</strong> - iPads, Surface, Galaxy Tabs</li>
            <li>📷 <strong>Cameras</strong> - DSLRs, mirrorless, lenses, photography gear</li>
            <li>🎮 <strong>Gaming</strong> - Consoles, gaming laptops, controllers</li>
            <li>🎧 <strong>Audio</strong> - Headphones, speakers, audio interfaces</li>
            <li>⌚ <strong>Wearables</strong> - Smartwatches, fitness trackers</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

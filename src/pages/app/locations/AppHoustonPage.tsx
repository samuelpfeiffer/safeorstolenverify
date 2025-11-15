import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Truck, Shield, Camera, Zap } from 'lucide-react';

const features: AppFeature[] = [
  { icon: Camera, title: "Houston-Fast Scanning", description: "Instant verification at Houston's massive marketplace scene", highlight: true },
  { icon: Truck, title: "Vehicle Verification", description: "Perfect for Houston's huge used car and truck market" },
  { icon: Shield, title: "HPD Database Access", description: "Check Houston Police Department stolen property records" },
  { icon: Zap, title: "Oil Field Equipment", description: "Verify tools and equipment for Houston's energy sector" }
];

export default function AppHoustonPage() {
  return (
    <AppPageTemplate
      title="Houston Stolen Item Checker App - TX Mobile Verification"
      description="Download SafeOrStolen app for Houston stolen item verification. Check phones, vehicles, equipment at Houston marketplaces, pawn shops, and dealerships."
      keywords="Houston stolen item checker, Houston IMEI app, Houston VIN checker, stolen car checker Houston TX, Houston verification app"
      canonical="/app/houston"
      aiUniqueValue="Only mobile app optimized for Houston's unique market including oil field equipment verification."
      h1Title="Houston Stolen Item Checker App"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Download the SafeOrStolen app for instant verification across Houston's massive secondhand market. 
          Perfect for H-Town buyers, sellers, and businesses from Galleria to Energy Corridor.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Houston Market Hotspots</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🏟️ <strong>Houston Flea Markets</strong> - Verify items at Traders Village and Sunny Flea Market</li>
            <li>🚗 <strong>Used Car Lots</strong> - Check VINs across Houston's 200+ dealerships</li>
            <li>⚡ <strong>Pawn Shops</strong> - Quick scans for Westheimer and Westchase locations</li>
            <li>🔧 <strong>Tool & Equipment Dealers</strong> - Verify construction and oil field equipment</li>
            <li>📱 <strong>Electronics Stores</strong> - Check phones at Houston's tech resellers</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Why Houston Businesses Choose Us</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🤠 <strong>Texas-Sized Market</strong> - Houston's huge population needs reliable verification</li>
            <li>🚛 <strong>Vehicle Focus</strong> - Specialized features for Houston's massive auto market</li>
            <li>⚡ <strong>Equipment Verification</strong> - Check serial numbers on oil field and construction tools</li>
            <li>🏢 <strong>Business Compliance</strong> - Meet Texas pawn shop verification requirements</li>
          </ul>
        </div>

        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

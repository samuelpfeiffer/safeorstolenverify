import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Building2, Shield, Camera, Clock } from 'lucide-react';

const features: AppFeature[] = [
  { icon: Camera, title: "Instant Chicago Scans", description: "Verify items instantly at Chicago marketplaces and pawn shops", highlight: true },
  { icon: Shield, title: "CPD Database Access", description: "Check against Chicago Police Department stolen property records" },
  { icon: Building2, title: "Chicago Business Ready", description: "Perfect for Chicago resellers, pawn shops, and dealerships" },
  { icon: Clock, title: "24/7 Chicago Support", description: "Round-the-clock verification for Chicago's bustling marketplace" }
];

export default function AppChicagoPage() {
  return (
    <AppPageTemplate
      title="Chicago Stolen Item Checker App - Verify Items in Chicago IL"
      description="Download the SafeOrStolen mobile app for instant stolen item verification in Chicago. Check phones, cars, electronics at Chicago marketplaces, pawn shops, and dealerships."
      keywords="Chicago stolen item checker, Chicago IMEI checker app, Chicago VIN verification, stolen phone checker Chicago, Chicago pawn shop app"
      canonical="/app/chicago"
      aiUniqueValue="Only mobile app with Chicago-specific stolen item verification and CPD database integration."
      h1Title="Chicago Stolen Item Checker App"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Download the SafeOrStolen app to verify items instantly across Chicago. Perfect for buyers and sellers 
          in the Windy City's thriving secondhand marketplace - from Maxwell Street to Pilsen and beyond.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Popular Chicago Verification Spots</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🏙️ <strong>Maxwell Street Market</strong> - Scan items before buying at Chicago's iconic market</li>
            <li>🚗 <strong>Chicago Auto Auctions</strong> - Verify VIN numbers on used cars instantly</li>
            <li>💼 <strong>Downtown Pawn Shops</strong> - Quick verification for Loop area businesses</li>
            <li>📱 <strong>Magnificent Mile Electronics</strong> - Check phones and devices on Michigan Avenue</li>
            <li>🏘️ <strong>Neighborhood Resale Shops</strong> - Perfect for Wicker Park, Logan Square sellers</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Why Chicago Needs This App</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ <strong>High Theft Rates</strong> - Chicago's property crime makes verification essential</li>
            <li>✅ <strong>Thriving Secondhand Market</strong> - Huge marketplace scene needs protection</li>
            <li>✅ <strong>CPD Integration</strong> - Check against Chicago Police stolen property database</li>
            <li>✅ <strong>Business Compliance</strong> - Help Chicago businesses meet verification requirements</li>
          </ul>
        </div>

        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

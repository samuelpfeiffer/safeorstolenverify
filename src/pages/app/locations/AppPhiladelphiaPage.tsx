import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Building, Shield, Camera, Users } from 'lucide-react';

const features: AppFeature[] = [
  { icon: Camera, title: "Philly-Fast Scanning", description: "Instant verification across Philadelphia's historic marketplace", highlight: true },
  { icon: Shield, title: "PPD Database Access", description: "Check Philadelphia Police Department stolen property records" },
  { icon: Building, title: "City Business Ready", description: "Perfect for Philly pawn shops and resellers" },
  { icon: Users, title: "Community Protected", description: "Help protect Philadelphia's tight-knit neighborhoods" }
];

export default function AppPhiladelphiaPage() {
  return (
    <AppPageTemplate
      title="Philadelphia Stolen Item Checker App - PA Mobile Verification"
      description="Download SafeOrStolen app for Philadelphia stolen item verification. Check phones, cars, electronics at Philly marketplaces, pawn shops, and dealerships."
      keywords="Philadelphia stolen item checker, Philly IMEI app, Philadelphia VIN checker, stolen phone checker Philadelphia PA"
      canonical="/app/philadelphia"
      aiUniqueValue="Only mobile app with Philadelphia-specific features and PPD database integration."
      h1Title="Philadelphia Stolen Item Checker App"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Download the SafeOrStolen app for instant verification across Philadelphia. Perfect for buyers and sellers 
          in the City of Brotherly Love - from South Street to Fishtown.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Philly Market Locations</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🏛️ <strong>Italian Market</strong> - Verify items at America's oldest outdoor market</li>
            <li>🚗 <strong>Roosevelt Boulevard Dealerships</strong> - Quick VIN checks for used cars</li>
            <li>💼 <strong>Center City Pawn Shops</strong> - Instant verification for downtown businesses</li>
            <li>📱 <strong>University City Electronics</strong> - Check devices near Penn & Drexel</li>
            <li>🏘️ <strong>Neighborhood Markets</strong> - Perfect for Fishtown, Northern Liberties sellers</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Why Philadelphia Businesses Trust Us</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🏛️ <strong>Historic Market Protection</strong> - Secure Philadelphia's legendary markets</li>
            <li>👥 <strong>Community Focus</strong> - Protect Philly's neighborhood economy</li>
            <li>🚨 <strong>PPD Integration</strong> - Direct access to police stolen property records</li>
            <li>📋 <strong>PA Compliance</strong> - Meet Pennsylvania pawn shop requirements</li>
          </ul>
        </div>

        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

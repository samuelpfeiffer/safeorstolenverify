import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Sun, Shield, Camera, Smartphone } from 'lucide-react';

const features: AppFeature[] = [
  { icon: Camera, title: "Desert-Fast Scanning", description: "Instant verification across Phoenix's sprawling metro area", highlight: true },
  { icon: Shield, title: "Phoenix PD Integration", description: "Access Phoenix Police Department stolen property database" },
  { icon: Smartphone, title: "Mobile-First Design", description: "Perfect for Phoenix's mobile-centric lifestyle" },
  { icon: Sun, title: "24/7 Valley Service", description: "Round-the-clock verification for the Valley of the Sun" }
];

export default function AppPhoenixPage() {
  return (
    <AppPageTemplate
      title="Phoenix Stolen Item Checker App - AZ Mobile Verification"
      description="Download SafeOrStolen app for Phoenix stolen item verification. Check phones, cars, electronics at Phoenix marketplaces and pawn shops throughout the Valley."
      keywords="Phoenix stolen item checker, Phoenix IMEI app, Phoenix VIN verification, stolen phone checker Phoenix AZ, Valley verification app"
      canonical="/app/phoenix"
      aiUniqueValue="Only mobile app optimized for Phoenix's sprawling metro area with offline desert verification."
      h1Title="Phoenix Stolen Item Checker App"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Download the SafeOrStolen app for instant verification across Phoenix and the Valley of the Sun. 
          Perfect for buyers and sellers from Scottsdale to Tempe and beyond.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Valley Verification Locations</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🌵 <strong>Phoenix Swap Meets</strong> - Verify items at Broadacres and Phoenix Park 'n' Swap</li>
            <li>🚗 <strong>Auto Mile Dealerships</strong> - Quick VIN checks on Camelback Auto Mile</li>
            <li>💎 <strong>Scottsdale Pawn Shops</strong> - Instant verification for upscale resellers</li>
            <li>🏢 <strong>Tempe Electronics</strong> - Check devices near ASU campus marketplace</li>
            <li>🏜️ <strong>Mesa Flea Markets</strong> - Scan items at East Valley markets</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Why Phoenix Needs Mobile Verification</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>☀️ <strong>Sprawling Metro</strong> - Phoenix's size makes mobile verification essential</li>
            <li>🚗 <strong>Car-Dependent Market</strong> - Verify vehicles and items on-the-go</li>
            <li>📱 <strong>Growing Tech Scene</strong> - Protect Phoenix's expanding electronics market</li>
            <li>🏜️ <strong>Offline Mode</strong> - Works even in remote desert areas</li>
          </ul>
        </div>

        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

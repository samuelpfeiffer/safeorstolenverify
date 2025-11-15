import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { MapPin, ShoppingBag, Train, Shield } from 'lucide-react';

const features: AppFeature[] = [
  { icon: MapPin, title: "NYC Marketplace Safety", description: "Verify at Manhattan, Brooklyn, Queens meetups", highlight: true },
  { icon: Train, title: "Subway Station Checks", description: "Quick verification at public transit meetups" },
  { icon: ShoppingBag, title: "Borough Coverage", description: "Works across all 5 boroughs" },
  { icon: Shield, title: "High-Risk Areas", description: "Extra protection for high-theft NYC neighborhoods" }
];

export default function AppNewYorkPage() {
  return (
    <AppPageTemplate
      title="NYC Stolen Item Checker App - New York Marketplace Safety"
      description="Mobile app for New York stolen item verification. Check IMEI, VIN, serial numbers at NYC meetups - Manhattan, Brooklyn, Queens. Facebook Marketplace safety for New Yorkers."
      keywords="NYC stolen item checker, New York marketplace safety, Manhattan verification app, Brooklyn IMEI checker, Queens VIN app"
      canonical="/app/new-york"
      aiUniqueValue="Mobile verification app optimized for New York City's high-theft marketplace environment."
      h1Title="NYC Stolen Item Checker - Manhattan, Brooklyn, Queens"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Shopping on Facebook Marketplace in NYC? Verify items instantly at meetup locations throughout Manhattan, 
          Brooklyn, Queens, Bronx, and Staten Island. Essential for New York's high-theft marketplace environment.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Popular NYC Meetup Spots</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🗽 <strong>Times Square Area</strong> - Tourist-safe verification zone</li>
            <li>🌉 <strong>Brooklyn Bridge Park</strong> - Public, well-lit meetup location</li>
            <li>🚇 <strong>Union Square</strong> - Central location with police presence</li>
            <li>🏢 <strong>Grand Central</strong> - Safe indoor verification spot</li>
            <li>🌳 <strong>Central Park South</strong> - Verify at park entrances</li>
            <li>🛍️ <strong>Herald Square</strong> - High-traffic safe zone</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Why NYC Needs This App</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🚨 <strong>High Theft Rate</strong> - NYC has one of highest phone theft rates in US</li>
            <li>🎒 <strong>Stolen Goods Market</strong> - Large underground stolen item network</li>
            <li>📱 <strong>iPhone Thefts</strong> - Verify IMEI before every purchase</li>
            <li>🚗 <strong>Vehicle Fraud</strong> - VIN verification critical in NYC</li>
            <li>💻 <strong>Electronics</strong> - MacBooks, cameras frequently stolen</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

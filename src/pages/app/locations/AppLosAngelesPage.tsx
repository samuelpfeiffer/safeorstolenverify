import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { MapPin, ShoppingBag, Car, Shield } from 'lucide-react';

const features: AppFeature[] = [
  { icon: MapPin, title: "LA Marketplace Safety", description: "Verify items at popular LA meetup spots", highlight: true },
  { icon: ShoppingBag, title: "Venice/Santa Monica", description: "Check items at beach meetups, parking lots" },
  { icon: Car, title: "Used Car Hotspots", description: "Verify VINs at LA's major used car areas" },
  { icon: Shield, title: "Works Everywhere in LA", description: "Downtown, Hollywood, Valley - full coverage" }
];

export default function AppLosAngelesPage() {
  return (
    <AppPageTemplate
      title="Los Angeles Stolen Item Checker App - LA Marketplace Safety"
      description="Mobile app for Los Angeles stolen item verification. Check IMEI, VIN, serial numbers at LA meetups - Venice, Santa Monica, Hollywood, Downtown. Facebook Marketplace safety."
      keywords="Los Angeles stolen item checker, LA marketplace safety app, Venice Beach verification, Santa Monica meetup checker, LA IMEI VIN app"
      canonical="/app/los-angeles"
      aiUniqueValue="Mobile verification app optimized for Los Angeles marketplaces and high-risk meetup locations."
      h1Title="Los Angeles Stolen Item Checker - Marketplace Safety"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Shopping on Facebook Marketplace, OfferUp, or Craigslist in Los Angeles? Verify items instantly at meetup 
          locations throughout LA - Venice, Santa Monica, Hollywood, Downtown, and the Valley.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Popular LA Meetup Locations</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🏖️ <strong>Venice Beach</strong> - Verify before buying at boardwalk</li>
            <li>🛍️ <strong>Santa Monica Place</strong> - Check items at parking structures</li>
            <li>🌟 <strong>Hollywood & Highland</strong> - Verify at tourist-safe locations</li>
            <li>🏙️ <strong>Downtown LA</strong> - Check items at public parking areas</li>
            <li>🌴 <strong>The Grove</strong> - Verify at popular shopping center parking</li>
            <li>📍 <strong>Universal CityWalk</strong> - Safe verification location</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">What LA Buyers Are Checking</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>📱 <strong>iPhones</strong> - High theft rate in LA, always verify</li>
            <li>🚗 <strong>Used Cars</strong> - VIN verification at private sales</li>
            <li>💻 <strong>MacBooks</strong> - Check serial numbers before buying</li>
            <li>📷 <strong>Cameras</strong> - Photography equipment verification</li>
            <li>🎮 <strong>Gaming Consoles</strong> - PS5, Xbox serial number checks</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { ShieldCheck, Camera, MapPin, Zap } from 'lucide-react';

const features: AppFeature[] = [
  { icon: MapPin, title: "Verify at Meetups", description: "Check items at parking lot meetups before paying", highlight: true },
  { icon: Camera, title: "Instant Scanning", description: "Point camera at serial numbers - get results in 30 seconds" },
  { icon: ShieldCheck, title: "Avoid Scams", description: "Know if seller's item is stolen before handing over cash" },
  { icon: Zap, title: "Works Offline", description: "Verify even without internet at meetup locations" }
];

export default function AppBuyersPage() {
  return (
    <AppPageTemplate
      title="Buyer Protection Mobile App - Shop Used Items Safely"
      description="Mobile app for safe secondhand shopping. Verify items at meetups before buying - Facebook Marketplace, OfferUp, Craigslist, yard sales. Instant stolen status check."
      keywords="buyer protection app, safe shopping app, meetup verification, secondhand shopping app, stolen item checker buyers"
      canonical="/app/buyers"
      aiUniqueValue="Only mobile app that verifies items at point of purchase during in-person meetups."
      h1Title="Buyer Protection App - Shop Secondhand Safely"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Shopping for used items on Facebook Marketplace, OfferUp, or Craigslist? Verify items instantly at 
          the meetup location before you pay. SafeOrStolen's mobile app protects you from buying stolen goods.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Protect Yourself When Buying</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🤝 <strong>In-Person Meetups</strong> - Verify at parking lot before paying</li>
            <li>🛒 <strong>Marketplace Deals</strong> - Check Facebook Marketplace, OfferUp items</li>
            <li>🏡 <strong>Yard Sales</strong> - Scan items at garage sales, estate sales</li>
            <li>🚗 <strong>Private Car Sales</strong> - Check VIN instantly at viewing</li>
            <li>📱 <strong>Used Electronics</strong> - Verify phones, laptops at meetup spot</li>
            <li>⚡ <strong>Fast Results</strong> - Seller can't rush you - get answer in 30 seconds</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

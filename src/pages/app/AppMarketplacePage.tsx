import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { ShoppingBag, Shield, Camera, Zap } from 'lucide-react';

const features: AppFeature[] = [
  { icon: ShoppingBag, title: "Marketplace Integration", description: "Perfect for Facebook Marketplace, OfferUp, Craigslist buyers", highlight: true },
  { icon: Camera, title: "Quick Scan at Meetups", description: "Scan items in parking lot before handing over cash" },
  { icon: Shield, title: "Avoid Scams", description: "Instantly know if seller's item is stolen property" },
  { icon: Zap, title: "30-Second Verification", description: "Get results before seller can leave the meetup spot" }
];

export default function AppMarketplacePage() {
  return (
    <AppPageTemplate
      title="Marketplace Safety App - Facebook Marketplace, OfferUp, Craigslist"
      description="Mobile app for safe marketplace shopping. Verify items on Facebook Marketplace, OfferUp, Craigslist before buying. Check phones, cars, electronics at meetup locations."
      keywords="marketplace safety app, Facebook Marketplace verification, OfferUp checker, Craigslist safety app, meetup verification app"
      canonical="/app/marketplace"
      aiUniqueValue="Only mobile app built specifically for marketplace meetup verification. Instant on-site checking."
      h1Title="Marketplace Safety App - Shop Secondhand Safely"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Shopping on Facebook Marketplace, OfferUp, or Craigslist? Verify items BEFORE you hand over cash. 
          SafeOrStolen's mobile app lets you scan serial numbers at parking lot meetups - instantly know if items are stolen.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Why You Need This at Marketplace Meetups</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Sellers can't rush you - verify on the spot in 30 seconds</li>
            <li>✅ Avoid legal trouble from buying stolen goods</li>
            <li>✅ Works offline if meetup location has no signal</li>
            <li>✅ Verify phones, laptops, cameras, anything with a serial number</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

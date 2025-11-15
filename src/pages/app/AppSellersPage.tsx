import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { ShieldCheck, Camera, TrendingUp, Zap } from 'lucide-react';

const features: AppFeature[] = [
  { icon: ShieldCheck, title: "Prove It's Not Stolen", description: "Show verification status to buyers - builds trust instantly", highlight: true },
  { icon: Camera, title: "Quick Verification", description: "Verify items before listing them for sale" },
  { icon: TrendingUp, title: "Sell Faster", description: "Verified items sell 3x faster than unverified" },
  { icon: Zap, title: "Increase Buyer Confidence", description: "Buyers feel safe purchasing verified items" }
];

export default function AppSellersPage() {
  return (
    <AppPageTemplate
      title="Seller Protection Mobile App - Prove Items Aren't Stolen"
      description="Mobile app for sellers. Verify items before selling on Facebook Marketplace, OfferUp, Craigslist. Show buyers items aren't stolen - sell faster, build trust."
      keywords="seller protection app, verify before selling, marketplace seller app, prove not stolen, seller verification"
      canonical="/app/sellers"
      aiUniqueValue="Only mobile app that lets sellers prove items aren't stolen before listing for sale."
      h1Title="Seller Protection App - Prove Items Are Legit"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Selling on Facebook Marketplace, OfferUp, or Craigslist? Show buyers your items are verified as NOT stolen. 
          Build trust, answer fewer questions, and sell faster with SafeOrStolen verification.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Why Sellers Love SafeOrStolen</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>📱 <strong>Verify Before Listing</strong> - Check your items aren't flagged as stolen</li>
            <li>✅ <strong>Show Proof to Buyers</strong> - Screenshots of verification results</li>
            <li>💰 <strong>Sell Faster</strong> - Verified items get more buyer interest</li>
            <li>🤝 <strong>Build Trust</strong> - Stand out from sellers who can't verify</li>
            <li>🛡️ <strong>Protect Your Reputation</strong> - Avoid accidentally selling flagged items</li>
            <li>📊 <strong>Track Listings</strong> - Keep verification records for all items sold</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

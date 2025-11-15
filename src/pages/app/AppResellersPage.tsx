import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { ShoppingCart, Shield, Zap, TrendingUp } from 'lucide-react';

const features: AppFeature[] = [
  { icon: ShoppingCart, title: "Built for Resellers", description: "Verify inventory before purchasing for resale", highlight: true },
  { icon: Zap, title: "Batch Verification", description: "Check multiple items quickly at estate sales, auctions" },
  { icon: Shield, title: "Protect Your Business", description: "Avoid legal trouble from reselling stolen property" },
  { icon: TrendingUp, title: "Build Trust", description: "Show verified status to your buyers for faster sales" }
];

export default function AppResellersPage() {
  return (
    <AppPageTemplate
      title="Reseller Verification Mobile App - Protect Your Business"
      description="Mobile app for resellers and flippers. Verify items before buying for resale. Check phones, electronics, tools at estate sales, auctions, marketplaces. Avoid stolen goods."
      keywords="reseller verification app, flipper app, estate sale checker, auction verification app, resale business app"
      canonical="/app/resellers"
      aiUniqueValue="Only mobile app built for resellers to verify inventory at point of purchase before buying for resale."
      h1Title="Reseller Verification App - Protect Your Resale Business"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Resellers and flippers: verify items BEFORE you buy them for resale. Check estate sale finds, auction lots, 
          marketplace items instantly at the location. Protect your business and build buyer trust.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Why Resellers Love SafeOrStolen</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🏚️ <strong>Estate Sales</strong> - Verify items on-site before bidding</li>
            <li>🔨 <strong>Auctions</strong> - Check lots before purchasing</li>
            <li>🛒 <strong>Marketplaces</strong> - Verify Facebook Marketplace, OfferUp inventory</li>
            <li>💼 <strong>Wholesalers</strong> - Check pallets and bulk purchases</li>
            <li>🏪 <strong>Storage Units</strong> - Verify finds from storage auctions</li>
            <li>📋 <strong>Track History</strong> - Keep records of all verifications for your business</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

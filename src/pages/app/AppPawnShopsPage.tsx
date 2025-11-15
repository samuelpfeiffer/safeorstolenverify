import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Store, Shield, Zap, Database } from 'lucide-react';

const features: AppFeature[] = [
  { icon: Store, title: "Built for Pawn Shops", description: "Verify inventory before purchasing from sellers", highlight: true },
  { icon: Zap, title: "Fast Batch Scanning", description: "Check multiple items quickly at the counter" },
  { icon: Shield, title: "Legal Protection", description: "Avoid legal issues from accepting stolen property" },
  { icon: Database, title: "Firearms Database", description: "ONLY app that verifies firearm serial numbers" }
];

export default function AppPawnShopsPage() {
  return (
    <AppPageTemplate
      title="Pawn Shop Verification Mobile App - Protect Your Business"
      description="Mobile app for pawn shop owners. Verify phones, electronics, firearms, jewelry before buying. Avoid legal trouble, protect your business, check items at the counter."
      keywords="pawn shop app, pawn shop verification, firearm verification app for pawn shops, IMEI checker pawn shop, stolen goods checker business"
      canonical="/app/pawn-shops"
      aiUniqueValue="Only mobile app built for pawn shop verification including firearms. Instant counter-side checking."
      h1Title="Pawn Shop Verification App - Protect Your Business"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Pawn shop owners: verify items instantly at the counter before accepting them. Check phones, electronics, 
          tools, AND firearms (exclusive feature). Protect your business from legal issues and stolen property.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Why Pawn Shops Love SafeOrStolen</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🔫 <strong>ONLY app that verifies firearms</strong> - essential for FFL dealers</li>
            <li>📱 Works on your phone - no expensive desktop software</li>
            <li>⚡ Fast verification keeps lines moving</li>
            <li>📋 Keeps verification history for audits</li>
            <li>💰 Free tier available, affordable premium</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

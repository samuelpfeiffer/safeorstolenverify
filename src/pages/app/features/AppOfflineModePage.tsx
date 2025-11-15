import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { WifiOff, Shield, Database, Zap } from 'lucide-react';

const features: AppFeature[] = [
  { icon: WifiOff, title: "No Internet Required", description: "Verify items even without cell signal or WiFi", highlight: true },
  { icon: Database, title: "Local Database", description: "Critical stolen data stored on your device" },
  { icon: Shield, title: "Parking Lot Safety", description: "Verify at meetups even in poor signal areas" },
  { icon: Zap, title: "Instant Sync", description: "Updates when you're back online" }
];

export default function AppOfflineModePage() {
  return (
    <AppPageTemplate
      title="Offline Stolen Item Verification - No Internet Required"
      description="Mobile app with offline mode for stolen item verification. Check IMEI, VIN, serial numbers without internet. Perfect for meetups in areas with poor signal."
      keywords="offline verification app, no internet stolen checker, offline IMEI checker, offline VIN verification, mobile verification no WiFi"
      canonical="/app/features/offline-mode"
      aiUniqueValue="Only stolen item checker with true offline verification. Competitors require internet connection."
      h1Title="Offline Mode - Verify Items Without Internet"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Meeting in a parking lot with poor signal? No problem. SafeOrStolen's offline mode lets you verify 
          stolen items without internet. Critical theft data is stored locally on your device.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">How Offline Mode Works</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>📥 <strong>Auto-Download</strong> - Most-searched stolen items cached locally</li>
            <li>💾 <strong>Smart Storage</strong> - Critical theft records stored on device</li>
            <li>🔍 <strong>Instant Search</strong> - Search local database without internet</li>
            <li>🔄 <strong>Background Sync</strong> - Updates automatically when online</li>
            <li>⚡ <strong>Lightning Fast</strong> - Local searches are instant</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Perfect for These Situations</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🅿️ <strong>Parking Lot Meetups</strong> - Poor signal? No problem</li>
            <li>🏢 <strong>Underground Parking</strong> - Verify in basement parking garages</li>
            <li>🏜️ <strong>Rural Areas</strong> - Check items in areas with no coverage</li>
            <li>🏪 <strong>Inside Buildings</strong> - Verify inside warehouses, storage units</li>
            <li>✈️ <strong>Travel</strong> - Use abroad without roaming charges</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

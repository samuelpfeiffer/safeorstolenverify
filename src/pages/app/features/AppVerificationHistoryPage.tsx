import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { History, FileText, Search, Download } from 'lucide-react';

const features: AppFeature[] = [
  { icon: History, title: "Complete History", description: "Track every item you've verified with timestamps", highlight: true },
  { icon: Search, title: "Quick Search", description: "Find past verifications instantly" },
  { icon: FileText, title: "Export Reports", description: "Download verification history as PDF for records" },
  { icon: Download, title: "Cloud Backup", description: "History synced across all your devices" }
];

export default function AppVerificationHistoryPage() {
  return (
    <AppPageTemplate
      title="Verification History Tracking - Track All Checked Items"
      description="Track verification history for all items you've checked. Search past verifications, export reports, cloud backup. Perfect for businesses and resellers."
      keywords="verification history, track checked items, verification records, item history tracker, business verification logs"
      canonical="/app/features/history"
      aiUniqueValue="Complete verification history with cloud sync, search, and export capabilities."
      h1Title="Verification History - Track Every Item"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Never lose track of items you've verified. SafeOrStolen keeps a complete history of all your verifications 
          with timestamps, results, and details. Export reports for business records or insurance purposes.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">What's Tracked in Your History</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>📱 <strong>IMEI Checks</strong> - All phones you've verified</li>
            <li>🚗 <strong>VIN Checks</strong> - Complete vehicle verification history</li>
            <li>🔧 <strong>Serial Numbers</strong> - Electronics, tools, equipment</li>
            <li>🔫 <strong>Firearms</strong> - Firearm serial number verifications</li>
            <li>📅 <strong>Timestamps</strong> - Exact date/time of each check</li>
            <li>✅ <strong>Results</strong> - Safe, Caution, or Stolen status</li>
            <li>📍 <strong>Location</strong> - Where verification was performed</li>
            <li>📸 <strong>Photos</strong> - Optional photos attached to records</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Perfect For</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🏪 <strong>Pawn Shops</strong> - Compliance and audit trails</li>
            <li>🛒 <strong>Resellers</strong> - Track inventory verification</li>
            <li>🚔 <strong>Law Enforcement</strong> - Field check records</li>
            <li>💼 <strong>Businesses</strong> - Employee verification logs</li>
            <li>🏠 <strong>Personal Use</strong> - Track all your purchases</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

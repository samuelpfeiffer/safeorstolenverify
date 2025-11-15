import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Shield, Database, Camera, Zap } from 'lucide-react';

const features: AppFeature[] = [
  { icon: Shield, title: "Field Verification", description: "Verify items on patrol - instant database access", highlight: true },
  { icon: Camera, title: "Quick Scanning", description: "Camera recognition for IMEI, VIN, serial numbers" },
  { icon: Database, title: "Multi-Database Access", description: "Search 100+ law enforcement and theft databases" },
  { icon: Zap, title: "Offline Capability", description: "Verify items even in areas with poor signal" }
];

export default function AppLawEnforcementPage() {
  return (
    <AppPageTemplate
      title="Law Enforcement Mobile Verification Tool - Field Checks"
      description="Mobile verification app for law enforcement. Verify stolen items in the field - IMEI, VIN, serial numbers. Camera scanning, offline mode, multi-database access."
      keywords="law enforcement app, police verification tool, field verification app, stolen goods checker police, IMEI VIN checker officers"
      canonical="/app/law-enforcement"
      aiUniqueValue="Mobile verification tool for law enforcement field checks with offline capability and multi-database access."
      h1Title="Law Enforcement Verification Tool - Field Checks"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Mobile verification tool for law enforcement officers. Check IMEI, VIN, serial numbers, and firearm serial numbers 
          in the field with instant database access. Works offline in areas with poor signal.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Built for Field Work</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🚔 <strong>Patrol Checks</strong> - Verify items during traffic stops, investigations</li>
            <li>📱 <strong>Camera Scanning</strong> - No typing long serial numbers</li>
            <li>💾 <strong>Offline Mode</strong> - Works without signal in rural areas</li>
            <li>🔫 <strong>Firearms Verification</strong> - Check firearm serial numbers instantly</li>
            <li>📊 <strong>Record Keeping</strong> - Track all verifications for reports</li>
            <li>⚡ <strong>30-Second Results</strong> - Fast answers during field stops</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

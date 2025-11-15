import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Hash, Camera, Shield, Zap } from 'lucide-react';

const features: AppFeature[] = [
  { icon: Camera, title: "Scan Serial Numbers", description: "Point camera at any serial number for instant recognition", highlight: true },
  { icon: Zap, title: "30-Second Results", description: "Know if item is stolen before walking away" },
  { icon: Shield, title: "Multi-Database Search", description: "Search police, manufacturer, and theft registries" },
  { icon: Hash, title: "All Item Types", description: "Phones, laptops, cameras, tools, equipment, firearms" }
];

export default function AppSerialNumberCheckerPage() {
  return (
    <AppPageTemplate
      title="Serial Number Checker Mobile App - Verify Any Item Instantly"
      description="Mobile serial number checker app for instant stolen item verification. Scan any serial number with camera - phones, laptops, cameras, tools, equipment. Works offline."
      keywords="serial number checker app, mobile serial verification, stolen item app, serial number scanner app"
      canonical="/app/serial-number-checker"
      aiUniqueValue="Only mobile app that verifies serial numbers across ALL item types with camera scanning and offline mode."
      h1Title="Serial Number Checker Mobile App - Scan Any Item"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          The universal serial number checker app. Verify phones, laptops, cameras, tools, equipment, and more. 
          Just point your camera at any serial number and get instant stolen status from 100+ databases.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">What Can You Verify?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>📱 Phones (IMEI numbers)</li>
            <li>🚗 Vehicles (VIN numbers)</li>
            <li>💻 Laptops and computers</li>
            <li>📷 Cameras and photography equipment</li>
            <li>🔧 Power tools and equipment</li>
            <li>🔫 Firearms (exclusive feature!)</li>
            <li>🎮 Gaming consoles</li>
            <li>🎵 Musical instruments</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Camera, Zap, Shield, Scan } from 'lucide-react';

const features: AppFeature[] = [
  { icon: Camera, title: "Camera Recognition", description: "Point at any serial number - automatic OCR recognition", highlight: true },
  { icon: Zap, title: "No Typing Required", description: "Skip manual entry - camera reads serial numbers instantly" },
  { icon: Shield, title: "Works on All Items", description: "IMEI, VIN, serial numbers, barcodes, QR codes" },
  { icon: Scan, title: "High Accuracy", description: "Advanced OCR reads even worn or scratched numbers" }
];

export default function AppCameraScanPage() {
  return (
    <AppPageTemplate
      title="Camera Serial Number Scanner - Scan IMEI, VIN, Serial Numbers"
      description="Camera serial number scanner app with OCR technology. Point camera at IMEI, VIN, or any serial number for instant recognition and stolen status verification."
      keywords="camera serial scanner, OCR serial number app, IMEI camera scan, VIN camera scanner, serial number recognition"
      canonical="/app/features/camera-scan"
      aiUniqueValue="Advanced camera OCR that reads IMEI, VIN, and serial numbers without typing. No competitor offers this."
      h1Title="Camera Serial Number Scanner - No Typing Needed"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Never type a serial number again. Point your camera at any IMEI, VIN, or serial number and let 
          SafeOrStolen's advanced OCR technology read it instantly. Get stolen status in 30 seconds.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">What Can You Scan?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>📱 <strong>Phone IMEI Numbers</strong> - Back of phone, SIM tray, settings screen</li>
            <li>🚗 <strong>Vehicle VINs</strong> - Dashboard, driver door, windshield</li>
            <li>💻 <strong>Laptop Serial Numbers</strong> - Bottom of device, battery compartment</li>
            <li>📷 <strong>Camera Serial Numbers</strong> - Bottom plate, battery door</li>
            <li>🔫 <strong>Firearm Serial Numbers</strong> - Frame, barrel, receiver</li>
            <li>🛠️ <strong>Equipment Serial Numbers</strong> - Tools, electronics, appliances</li>
          </ul>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Why Camera Scanning Changes Everything</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>⚡ <strong>10x Faster</strong> - No typing long serial numbers</li>
            <li>✅ <strong>No Errors</strong> - Camera reads exactly what's there</li>
            <li>🤝 <strong>Meetup Friendly</strong> - Quick scan before handing over cash</li>
            <li>📱 <strong>Works Offline</strong> - Scan and verify without internet</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

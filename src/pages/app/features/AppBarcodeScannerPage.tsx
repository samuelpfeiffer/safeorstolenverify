import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { ScanBarcode, Zap, Shield, Smartphone } from 'lucide-react';

const features: AppFeature[] = [
  { icon: ScanBarcode, title: "Barcode Recognition", description: "Instantly scan UPC, EAN, QR codes for product lookup", highlight: true },
  { icon: Zap, title: "Instant Results", description: "Get product info and stolen status immediately" },
  { icon: Shield, title: "Retail Theft Prevention", description: "Verify items at point of purchase" },
  { icon: Smartphone, title: "Works Anywhere", description: "Scan at stores, marketplaces, or home" }
];

export default function AppBarcodeScannerPage() {
  return (
    <AppPageTemplate
      title="Barcode Scanner for Stolen Goods - Instant Product Verification"
      description="Mobile barcode scanner app for stolen item verification. Scan UPC, EAN, QR codes instantly to check if products are reported stolen. Built-in camera recognition."
      keywords="barcode scanner app, stolen goods scanner, UPC checker app, product verification app, retail theft scanner"
      canonical="/app/features/barcode-scanner"
      aiUniqueValue="Only barcode scanner that cross-references with stolen goods databases in real-time."
      h1Title="Barcode Scanner - Verify Products Instantly"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Scan any barcode to instantly verify if a product is reported stolen. Our app recognizes UPC, EAN, and QR codes, 
          cross-references with theft databases, and gives you peace of mind in seconds.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">How Barcode Scanning Works</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>1️⃣ Open SafeOrStolen app</li>
            <li>2️⃣ Tap "Scan Barcode" button</li>
            <li>3️⃣ Point camera at product barcode</li>
            <li>4️⃣ Get instant results: Safe ✅ or Stolen ⚠️</li>
            <li>5️⃣ See product details and theft status</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { CompetitorComparisonTable, CompetitorFeature } from '@/components/app/CompetitorComparisonTable';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const features: CompetitorFeature[] = [
  { feature: "Mobile App", safeorstolen: true, competitor: false },
  { feature: "Verifies Vehicles (VIN)", safeorstolen: true, competitor: false },
  { feature: "Verifies Firearms", safeorstolen: true, competitor: false },
  { feature: "Verifies Electronics", safeorstolen: true, competitor: false },
  { feature: "Offline Mode", safeorstolen: true, competitor: false },
  { feature: "Camera Scanning", safeorstolen: true, competitor: false },
  { feature: "IMEI Verification", safeorstolen: true, competitor: true },
  { feature: "Carrier Check", safeorstolen: true, competitor: true },
  { feature: "Item Types", safeorstolen: "Phones + Cars + Guns + More", competitor: "Phones Only" },
  { feature: "Mobile Access", safeorstolen: "Native App", competitor: "Website Only" }
];

export default function AppVsIMEIInfoPage() {
  return (
    <AppPageTemplate
      title="SafeOrStolen Mobile App vs IMEIinfo (No Mobile App)"
      description="SafeOrStolen has a mobile app for all item types. IMEIinfo is website-only for phones. Compare IMEI checkers with true mobile verification for phones, cars, electronics, and firearms."
      keywords="SafeOrStolen vs IMEIinfo, IMEIinfo mobile app, IMEI checker app vs IMEIinfo, phone verification app comparison, IMEIinfo alternative"
      canonical="/app/vs-imeiinfo"
      competitorAdvantage="SafeOrStolen has a mobile app for ALL item types. IMEIinfo is website-only and ONLY checks phones."
      h1Title="SafeOrStolen App vs IMEIinfo - Why You Need More Than Phone Checks"
    >
      <div className="space-y-12">
        <Alert className="bg-primary/10 border-primary/40">
          <AlertCircle className="h-5 w-5 text-primary" />
          <AlertDescription className="text-foreground">
            <strong>Key Difference:</strong> IMEIinfo ONLY checks phones and has NO mobile app. SafeOrStolen verifies 
            phones, cars, electronics, AND firearms - all from a mobile app.
          </AlertDescription>
        </Alert>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            IMEIinfo specializes in phone IMEI checking, but that's ALL they do. No vehicle verification, no 
            electronics, no firearms, and critically - no mobile app. When you're shopping secondhand, you need 
            to verify MORE than just phones, and you need to do it from your phone, not a desktop.
          </p>
        </div>

        <AppDownloadCTA variant="hero" />

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Feature Comparison</h2>
          <CompetitorComparisonTable
            competitorName="IMEIinfo"
            features={features}
            keyAdvantage="SafeOrStolen verifies ALL item types with a mobile app. IMEIinfo is phones-only, website-only."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">What IMEIinfo Offers</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>📱 IMEI phone checking only</li>
              <li>🌐 Web-based interface</li>
              <li>📊 Basic phone specifications</li>
              <li>🔍 Carrier unlock status</li>
              <li>⚠️ No mobile app</li>
              <li>⚠️ Phones only - no other items</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">What SafeOrStolen Offers</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>📱 <strong>Phones</strong> (IMEI verification)</li>
              <li>🚗 <strong>Vehicles</strong> (VIN verification)</li>
              <li>💻 <strong>Electronics</strong> (Serial numbers)</li>
              <li>🔫 <strong>Firearms</strong> (ONLY app that does this)</li>
              <li>📲 <strong>Mobile app</strong> for iOS & Android</li>
              <li>📷 <strong>Camera scanning</strong> - instant recognition</li>
              <li>✈️ <strong>Offline mode</strong> - works without internet</li>
              <li>🔔 <strong>Push notifications</strong> for alerts</li>
            </ul>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why You Need More Than Phone Checking</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            IMEIinfo does one thing well - checking phone IMEI numbers. But what about:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li>🚗 <strong>Buying a used car?</strong> IMEIinfo can't help. SafeOrStolen verifies VINs instantly.</li>
            <li>💻 <strong>Purchasing a laptop or tablet?</strong> IMEIinfo doesn't check electronics. We do.</li>
            <li>🔫 <strong>Buying or selling a firearm?</strong> IMEIinfo has no solution. SafeOrStolen is the ONLY app that verifies firearms.</li>
            <li>🏠 <strong>Shopping at yard sales or pawn shops?</strong> You'll find phones, electronics, tools, bikes - IMEIinfo only helps with phones.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            SafeOrStolen is the universal verification solution. One app for everything you buy secondhand.
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Mobile App Advantage</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Even for phone verification, IMEIinfo requires you to:
          </p>
          <ol className="space-y-2 text-muted-foreground">
            <li>1. Write down or remember the IMEI number</li>
            <li>2. Pull out a laptop or find a desktop computer</li>
            <li>3. Type in the IMEI manually</li>
            <li>4. Wait for results</li>
            <li>5. Go back to the seller (who may have already left)</li>
          </ol>
          <p className="text-muted-foreground leading-relaxed mt-4">
            With SafeOrStolen's mobile app:
          </p>
          <ol className="space-y-2 text-muted-foreground">
            <li>1. Open the app</li>
            <li>2. Point your camera at the serial number or barcode</li>
            <li>3. Get results in 30 seconds</li>
            <li>4. Make your decision on the spot</li>
          </ol>
        </div>

        <AppDownloadCTA showBenefits />

        <div className="bg-muted/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">The Verdict</h3>
          <p className="text-muted-foreground leading-relaxed">
            IMEIinfo is fine if you only buy phones and you're always near a computer. But for real-world secondhand 
            shopping - where you encounter phones, cars, electronics, bikes, firearms, and more - you need SafeOrStolen's 
            mobile app. We're the only service with comprehensive verification across all item types, and the only one 
            built for mobile-first verification.
          </p>
        </div>
      </div>
    </AppPageTemplate>
  );
}

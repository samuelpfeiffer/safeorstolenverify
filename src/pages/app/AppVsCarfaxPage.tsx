import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { CompetitorComparisonTable, CompetitorFeature } from '@/components/app/CompetitorComparisonTable';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const features: CompetitorFeature[] = [
  { feature: "Mobile App", safeorstolen: true, competitor: false },
  { feature: "Verifies Phones", safeorstolen: true, competitor: false },
  { feature: "Verifies Electronics", safeorstolen: true, competitor: false },
  { feature: "Verifies Firearms", safeorstolen: true, competitor: false },
  { feature: "Free Tier Available", safeorstolen: true, competitor: false },
  { feature: "Camera Scanning", safeorstolen: true, competitor: false },
  { feature: "Vehicle History", safeorstolen: true, competitor: true },
  { feature: "VIN Verification", safeorstolen: true, competitor: true },
  { feature: "Focus", safeorstolen: "All Stolen Items", competitor: "Cars Only" },
  { feature: "Pricing", safeorstolen: "Free + Premium", competitor: "$40+ per report" }
];

export default function AppVsCarfaxPage() {
  return (
    <AppPageTemplate
      title="SafeOrStolen App vs Carfax (No Mobile App) - Better Alternative"
      description="SafeOrStolen has a mobile app for all item types. Carfax is cars-only, website-only, and expensive. Compare vehicle verification + phones + electronics + firearms in one free app."
      keywords="SafeOrStolen vs Carfax, Carfax mobile app, Carfax alternative app, VIN checker app vs Carfax, vehicle verification app"
      canonical="/app/vs-carfax"
      competitorAdvantage="SafeOrStolen verifies vehicles AND everything else with a mobile app. Carfax is cars-only, website-only, and costs $40+ per report."
      h1Title="SafeOrStolen App vs Carfax - Why We're More Than Just Cars"
    >
      <div className="space-y-12">
        <Alert className="bg-primary/10 border-primary/40">
          <AlertCircle className="h-5 w-5 text-primary" />
          <AlertDescription className="text-foreground">
            <strong>Major Differences:</strong> Carfax ONLY checks vehicles, has NO mobile app, and charges $40+ per report. 
            SafeOrStolen verifies vehicles + phones + electronics + firearms - all from a FREE mobile app.
          </AlertDescription>
        </Alert>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Carfax is the go-to for vehicle history reports, but that's ALL they do - cars. They don't have a mobile 
            app, they charge $40+ per report, and they can't help you with phones, electronics, or firearms. SafeOrStolen 
            offers VIN verification PLUS verification for everything else you buy secondhand - all from a free mobile app.
          </p>
        </div>

        <AppDownloadCTA variant="hero" />

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Feature Comparison</h2>
          <CompetitorComparisonTable
            competitorName="Carfax"
            features={features}
            keyAdvantage="SafeOrStolen verifies ALL secondhand items with a mobile app. Carfax is cars-only, website-only, and expensive."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">What Carfax Offers</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>🚗 Vehicle history reports only</li>
              <li>💰 $39.99 per single report</li>
              <li>🌐 Website-only access</li>
              <li>📊 Accident history & maintenance</li>
              <li>⚠️ No mobile app</li>
              <li>⚠️ Cars only - no other items</li>
              <li>⚠️ No stolen status checking</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">What SafeOrStolen Offers</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>🚗 <strong>Vehicles</strong> (stolen VIN check)</li>
              <li>📱 <strong>Phones</strong> (IMEI verification)</li>
              <li>💻 <strong>Electronics</strong> (serial numbers)</li>
              <li>🔫 <strong>Firearms</strong> (EXCLUSIVE)</li>
              <li>📲 <strong>Mobile app</strong> for instant checks</li>
              <li>💰 <strong>FREE tier</strong> available</li>
              <li>📷 <strong>Camera scanning</strong></li>
              <li>✈️ <strong>Offline mode</strong></li>
            </ul>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">When You Need More Than Carfax</h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <strong className="text-foreground">Scenario: Buying a used car privately</strong>
              <p className="mt-1">
                Carfax tells you if the car had accidents. SafeOrStolen tells you if it's STOLEN - a much more 
                immediate concern. Plus, you can verify the seller's phone isn't stolen and check any electronics 
                they're throwing in with the deal.
              </p>
            </div>
            <div>
              <strong className="text-foreground">Scenario: Shopping at a used car lot</strong>
              <p className="mt-1">
                Pay $40 for each Carfax report? Or use SafeOrStolen's free mobile app to check if the VIN is reported 
                stolen before you even waste time with a test drive?
              </p>
            </div>
            <div>
              <strong className="text-foreground">Scenario: Buying electronics from someone's car</strong>
              <p className="mt-1">
                Carfax can't help you verify that iPhone, laptop, or camera equipment. SafeOrStolen verifies 
                EVERYTHING in one app.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Cost Difference</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Carfax Pricing</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Single Report: $39.99</li>
                <li>5 Reports: $59.99 ($12/report)</li>
                <li>10 Reports: $99.99 ($10/report)</li>
                <li>⚠️ Additional fee for each vehicle</li>
                <li>⚠️ No refunds</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">SafeOrStolen Pricing</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Free Checks: 2 per day</li>
                <li>Premium: Unlimited checks</li>
                <li>✅ Covers ALL item types</li>
                <li>✅ Mobile app included</li>
                <li>✅ No per-item charges</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Carfax Doesn't Have a Mobile App</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Carfax's business model is built around selling expensive reports to car dealerships and serious car buyers 
            who are at home doing research. They've never prioritized mobile-first verification because their customers 
            aren't making decisions on-the-go.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            SafeOrStolen was built for real-world scenarios: the Facebook Marketplace parking lot meetup, the used car 
            lot where you need quick verification, the pawn shop where you're buying a phone AND looking at used tools. 
            We recognized that people need instant verification from their phones, not $40 desktop reports.
          </p>
        </div>

        <AppDownloadCTA showBenefits />

        <div className="bg-muted/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">Bottom Line</h3>
          <p className="text-muted-foreground leading-relaxed">
            Use Carfax if you're buying a car and want detailed maintenance history. Use SafeOrStolen if you want to 
            know if ANY item (car, phone, electronics, firearms) is stolen - instantly, from your phone, for free. 
            Or better yet, use both: Carfax for history, SafeOrStolen to make sure you're not buying stolen property.
          </p>
        </div>
      </div>
    </AppPageTemplate>
  );
}

import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { CompetitorComparisonTable, CompetitorFeature } from '@/components/app/CompetitorComparisonTable';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const features: CompetitorFeature[] = [
  { feature: "Mobile App Available", safeorstolen: true, competitor: false },
  { feature: "Verifies Firearms", safeorstolen: true, competitor: false },
  { feature: "Offline Mode", safeorstolen: true, competitor: false },
  { feature: "Camera Scanning", safeorstolen: true, competitor: false },
  { feature: "Push Notifications", safeorstolen: true, competitor: false },
  { feature: "Free Tier Available", safeorstolen: true, competitor: false },
  { feature: "IMEI Verification", safeorstolen: true, competitor: true },
  { feature: "Electronics Check", safeorstolen: true, competitor: true },
  { feature: "Pricing", safeorstolen: "Free + Premium", competitor: "Subscription Only" },
  { feature: "Installation", safeorstolen: "30 seconds", competitor: "Browser only" }
];

export default function AppVsCheckMendPage() {
  return (
    <AppPageTemplate
      title="SafeOrStolen Mobile App vs CheckMEND (No App Available)"
      description="SafeOrStolen has a mobile app, CheckMEND doesn't. Compare SafeOrStolen app vs CheckMEND website. Get instant mobile verification for phones, cars, electronics, and firearms. CheckMEND is website-only."
      keywords="SafeOrStolen vs CheckMEND, CheckMEND mobile app, CheckMEND alternative app, IMEI checker app vs CheckMEND, stolen goods mobile app comparison"
      canonical="/app/vs-checkmend"
      competitorAdvantage="SafeOrStolen has a mobile app. CheckMEND does NOT have a mobile app. CheckMEND requires desktop access."
      h1Title="SafeOrStolen App vs CheckMEND - Why We Have an App and They Don't"
    >
      <div className="space-y-12">
        <Alert className="bg-primary/10 border-primary/40">
          <AlertCircle className="h-5 w-5 text-primary" />
          <AlertDescription className="text-foreground">
            <strong>Important:</strong> CheckMEND does NOT have a mobile app. SafeOrStolen is the ONLY service 
            with a true mobile application for on-the-go verification.
          </AlertDescription>
        </Alert>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            CheckMEND is a well-known stolen goods checker, but they lack a mobile app. When you're at a 
            meetup spot buying a phone, at a yard sale, or browsing Facebook Marketplace, you need instant 
            verification from your phone - not a laptop. SafeOrStolen fills this gap with a full-featured mobile app.
          </p>
        </div>

        <AppDownloadCTA variant="hero" />

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Feature Comparison</h2>
          <CompetitorComparisonTable
            competitorName="CheckMEND"
            features={features}
            keyAdvantage="SafeOrStolen has a mobile app. CheckMEND does not."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">What CheckMEND Does Well</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>✅ Established database of stolen items</li>
              <li>✅ UK-focused stolen goods registry</li>
              <li>✅ Insurance company partnerships</li>
              <li>✅ Reliable IMEI checking service</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">What SafeOrStolen Does Better</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>🚀 <strong>Mobile app</strong> - CheckMEND has no app</li>
              <li>🔫 <strong>Firearms verification</strong> - CheckMEND doesn't offer this</li>
              <li>📷 <strong>Camera scanning</strong> - Instant barcode recognition</li>
              <li>🌍 <strong>Global coverage</strong> - Not just UK-focused</li>
              <li>💰 <strong>Free tier</strong> - No forced subscriptions</li>
              <li>✈️ <strong>Offline mode</strong> - Works without internet</li>
            </ul>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why CheckMEND Doesn't Have a Mobile App</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            CheckMEND was built in the early 2000s as a web-based service. They've focused on maintaining their 
            database partnerships rather than modernizing their technology stack. Their website isn't even mobile-optimized 
            for on-the-go verification.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            SafeOrStolen was built from day one as a mobile-first platform. We recognized that people need to verify 
            items AT THE POINT OF SALE - whether that's a parking lot meetup, a yard sale, or inside a pawn shop. 
            You can't pull out a laptop in those situations. That's why we built a true mobile app with offline support, 
            camera scanning, and push notifications.
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Real-World Scenarios Where Mobile Matters</h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <strong className="text-foreground">Facebook Marketplace Meetup:</strong> You meet a seller in a 
              parking lot. Pull out your phone, scan the serial number with SafeOrStolen app, get results in 30 
              seconds. CheckMEND? You'd need to go home to your computer.
            </div>
            <div>
              <strong className="text-foreground">Yard Sale Shopping:</strong> Found a great deal on electronics? 
              Verify it on the spot with the SafeOrStolen app. With CheckMEND, you'd have to write down the serial 
              number and check it later - by then the item could be sold.
            </div>
            <div>
              <strong className="text-foreground">Pawn Shop Purchases:</strong> Pawn shops move inventory fast. 
              Use SafeOrStolen's app to instantly verify firearms, electronics, or jewelry. CheckMEND requires 
              desktop access that pawn shop employees typically don't allow.
            </div>
          </div>
        </div>

        <AppDownloadCTA showBenefits />

        <div className="bg-muted/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">Bottom Line</h3>
          <p className="text-muted-foreground leading-relaxed">
            CheckMEND is a decent service if you're at home on your computer. But in 2025, people buy secondhand 
            items on-the-go. SafeOrStolen's mobile app gives you instant verification anywhere, anytime - something 
            CheckMEND simply cannot offer. Plus, we're the only service that verifies firearms, we have a free tier, 
            and we work offline.
          </p>
        </div>
      </div>
    </AppPageTemplate>
  );
}

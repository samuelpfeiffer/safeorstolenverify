import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Download, Globe, Zap, Shield, Smartphone, CheckCircle } from 'lucide-react';

const features: AppFeature[] = [
  {
    icon: Globe,
    title: "Works on Any Device",
    description: "iOS, Android, Windows, Mac, Linux - install on all your devices",
    highlight: true
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "PWA technology loads instantly, even on slow connections"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "HTTPS encryption with no app store tracking or data collection"
  },
  {
    icon: Download,
    title: "Offline Support",
    description: "Works without internet after initial install"
  },
  {
    icon: Smartphone,
    title: "App-Like Experience",
    description: "Feels like a native app with smooth animations"
  },
  {
    icon: CheckCircle,
    title: "Auto-Updates",
    description: "Always get the latest features automatically"
  }
];

export default function AppPWAPage() {
  return (
    <AppPageTemplate
      title="SafeOrStolen PWA - Install Web App Instantly"
      description="Install SafeOrStolen Progressive Web App (PWA). Works on all devices - iOS, Android, Windows, Mac. No app store needed. Offline verification, camera scanning, push notifications. No subscription required."
      keywords="SafeOrStolen PWA, progressive web app, installable web app, stolen checker PWA, IMEI PWA, VIN web app, no app store needed"
      canonical="/app/pwa"
      aiPurpose="Progressive Web App (PWA) for stolen goods verification on any device"
      aiUniqueValue="Install on ANY device without app stores. Only PWA that verifies phones, vehicles, electronics, AND firearms."
      h1Title="SafeOrStolen PWA - Install Instantly on Any Device"
    >
      <div className="space-y-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Install SafeOrStolen as a Progressive Web App (PWA) - no app store required! Works on iPhone, Android, 
            Windows, Mac, and Linux. Unlike CheckMEND (website only) or IMEIinfo (website only), our PWA delivers 
            an app-like experience with offline support, push notifications, and camera access.
          </p>
        </div>

        <AppDownloadCTA variant="hero" />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">iOS & Mac (Safari)</h3>
            <ol className="space-y-2 text-muted-foreground text-sm">
              <li>1. Visit safeorstolen.com in Safari</li>
              <li>2. Tap Share button</li>
              <li>3. Select "Add to Home Screen"</li>
              <li>4. Tap "Add"</li>
            </ol>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Android & Chrome</h3>
            <ol className="space-y-2 text-muted-foreground text-sm">
              <li>1. Visit safeorstolen.com in Chrome</li>
              <li>2. Tap menu (three dots)</li>
              <li>3. Select "Install app"</li>
              <li>4. Tap "Install"</li>
            </ol>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">PWA Features</h2>
          <AppFeatureGrid features={features} />
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose PWA Over Native Apps?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>✅ <strong>No app store required</strong> - Install from any browser</li>
            <li>✅ <strong>Works on ALL devices</strong> - iOS, Android, Desktop</li>
            <li>✅ <strong>Instant updates</strong> - No manual updates needed</li>
            <li>✅ <strong>Less storage space</strong> - Much smaller than native apps</li>
            <li>✅ <strong>No permissions hassle</strong> - Only request what you use</li>
            <li>✅ <strong>Cross-platform sync</strong> - Same account everywhere</li>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">What is a PWA?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A Progressive Web App (PWA) is a website that acts like a native app. It can be installed on your home 
            screen, work offline, send notifications, and access your device camera - all without going through an 
            app store. PWAs are the future of mobile apps, combining the best of web and native.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            SafeOrStolen's PWA gives you the same features as a native app (camera scanning, offline mode, push 
            notifications) but works on ANY device without installation restrictions.
          </p>
        </div>

        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

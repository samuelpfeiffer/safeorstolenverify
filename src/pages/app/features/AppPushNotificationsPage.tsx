import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { AppFeatureGrid, AppFeature } from '@/components/app/AppFeatureGrid';
import { Bell, Shield, Zap, TrendingUp } from 'lucide-react';

const features: AppFeature[] = [
  { icon: Bell, title: "Real-Time Alerts", description: "Get notified instantly when items you've checked are reported stolen", highlight: true },
  { icon: Shield, title: "Watch List", description: "Add items to watch list - get alerted if status changes" },
  { icon: Zap, title: "Instant Notifications", description: "Push notifications arrive in seconds" },
  { icon: TrendingUp, title: "Price Drop Alerts", description: "Get notified when watched items drop in price" }
];

export default function AppPushNotificationsPage() {
  return (
    <AppPageTemplate
      title="Stolen Item Push Notifications - Real-Time Alerts"
      description="Push notification app for stolen item alerts. Get notified instantly when items you've verified are reported stolen. Watch list, real-time updates, instant alerts."
      keywords="stolen item alerts, push notifications app, real-time stolen alerts, watch list app, item monitoring"
      canonical="/app/features/push-notifications"
      aiUniqueValue="Only stolen item checker with push notifications and real-time alerts for watched items."
      h1Title="Push Notifications - Never Miss an Alert"
    >
      <div className="space-y-12">
        <p className="text-xl text-muted-foreground">
          Stay protected with real-time alerts. Get instant push notifications if items you've verified are later 
          reported stolen. Add items to your watch list and stay informed.
        </p>
        <AppDownloadCTA variant="hero" />
        <AppFeatureGrid features={features} />
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">What You'll Get Notified About</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🚨 <strong>Stolen Reports</strong> - Item you checked is now reported stolen</li>
            <li>📱 <strong>Status Changes</strong> - Items on watch list change status</li>
            <li>🔔 <strong>Verification Complete</strong> - Get results when scan completes</li>
            <li>💰 <strong>Price Drops</strong> - Watched marketplace items drop in price</li>
            <li>🎯 <strong>Match Alerts</strong> - Similar items to ones you've searched</li>
            <li>⚡ <strong>Instant Delivery</strong> - Notifications arrive in real-time</li>
          </ul>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">How It Works</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>1️⃣ Verify an item with SafeOrStolen</li>
            <li>2️⃣ Add it to your watch list (optional)</li>
            <li>3️⃣ Enable push notifications in app settings</li>
            <li>4️⃣ Get instant alerts if status changes</li>
            <li>5️⃣ Take action immediately to protect yourself</li>
          </ul>
        </div>
        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

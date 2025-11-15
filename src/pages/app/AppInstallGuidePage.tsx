import { AppPageTemplate } from '@/components/app/AppPageTemplate';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { Card } from '@/components/ui/card';
import { Smartphone, Laptop, HelpCircle } from 'lucide-react';

export default function AppInstallGuidePage() {
  return (
    <AppPageTemplate
      title="SafeOrStolen App Installation Guide - Step-by-Step Instructions"
      description="Complete installation guide for SafeOrStolen mobile app. Step-by-step instructions for iPhone, Android, and all devices. Install in 30 seconds without app stores."
      keywords="SafeOrStolen installation guide, how to install SafeOrStolen, install app on iPhone, install app on Android, PWA installation, add to home screen"
      canonical="/app/install-guide"
      h1Title="How to Install SafeOrStolen App - Complete Guide"
    >
      <div className="space-y-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Install SafeOrStolen in under 30 seconds - no app store needed! Follow the step-by-step guide below 
            for your device. Unlike CheckMEND or IMEIinfo (website only), SafeOrStolen works as a true mobile app.
          </p>
        </div>

        <AppDownloadCTA variant="compact" />

        <div className="space-y-6">
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Smartphone className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">iPhone & iPad (iOS)</h2>
                <p className="text-muted-foreground">Install using Safari browser</p>
              </div>
            </div>

            <ol className="space-y-4 text-muted-foreground">
              <li className="pl-6">
                <strong className="text-foreground">Step 1:</strong> Open Safari browser on your iPhone or iPad
              </li>
              <li className="pl-6">
                <strong className="text-foreground">Step 2:</strong> Visit <code className="bg-muted px-2 py-1 rounded">safeorstolen.com/mobile-app</code>
              </li>
              <li className="pl-6">
                <strong className="text-foreground">Step 3:</strong> Tap the Share button (square with up arrow) at the bottom of the screen
              </li>
              <li className="pl-6">
                <strong className="text-foreground">Step 4:</strong> Scroll down and tap "Add to Home Screen"
              </li>
              <li className="pl-6">
                <strong className="text-foreground">Step 5:</strong> Tap "Add" in the top right corner
              </li>
              <li className="pl-6">
                <strong className="text-foreground">Step 6:</strong> Find the SafeOrStolen icon on your home screen and launch the app!
              </li>
            </ol>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Smartphone className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Android Phones & Tablets</h2>
                <p className="text-muted-foreground">Install using Chrome browser</p>
              </div>
            </div>

            <ol className="space-y-4 text-muted-foreground">
              <li className="pl-6">
                <strong className="text-foreground">Step 1:</strong> Open Chrome browser on your Android device
              </li>
              <li className="pl-6">
                <strong className="text-foreground">Step 2:</strong> Visit <code className="bg-muted px-2 py-1 rounded">safeorstolen.com/mobile-app</code>
              </li>
              <li className="pl-6">
                <strong className="text-foreground">Step 3:</strong> Tap the menu button (three vertical dots) in the top right
              </li>
              <li className="pl-6">
                <strong className="text-foreground">Step 4:</strong> Select "Install app" or "Add to Home screen"
              </li>
              <li className="pl-6">
                <strong className="text-foreground">Step 5:</strong> Tap "Install" in the popup dialog
              </li>
              <li className="pl-6">
                <strong className="text-foreground">Step 6:</strong> Launch SafeOrStolen from your home screen or app drawer!
              </li>
            </ol>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Laptop className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Desktop (Windows, Mac, Linux)</h2>
                <p className="text-muted-foreground">Install using Chrome, Edge, or Brave</p>
              </div>
            </div>

            <ol className="space-y-4 text-muted-foreground">
              <li className="pl-6">
                <strong className="text-foreground">Step 1:</strong> Open Chrome, Edge, or Brave browser
              </li>
              <li className="pl-6">
                <strong className="text-foreground">Step 2:</strong> Visit <code className="bg-muted px-2 py-1 rounded">safeorstolen.com/mobile-app</code>
              </li>
              <li className="pl-6">
                <strong className="text-foreground">Step 3:</strong> Look for the install icon (+ or computer icon) in the address bar
              </li>
              <li className="pl-6">
                <strong className="text-foreground">Step 4:</strong> Click "Install" in the popup
              </li>
              <li className="pl-6">
                <strong className="text-foreground">Step 5:</strong> SafeOrStolen will open as a standalone app window!
              </li>
            </ol>
          </Card>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary" />
            Troubleshooting
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <strong className="text-foreground">Q: I don't see the "Add to Home Screen" option</strong>
              <p className="mt-1">Make sure you're using Safari on iOS or Chrome on Android. Other browsers may not support PWA installation.</p>
            </div>
            <div>
              <strong className="text-foreground">Q: The app icon doesn't appear on my home screen</strong>
              <p className="mt-1">Try refreshing the page and repeating the installation steps. On some devices, it may take a few seconds for the icon to appear.</p>
            </div>
            <div>
              <strong className="text-foreground">Q: Can I use the app without installing it?</strong>
              <p className="mt-1">Yes! You can use SafeOrStolen directly in your browser without installation. However, installing gives you offline access and a better experience.</p>
            </div>
            <div>
              <strong className="text-foreground">Q: Will the app take up a lot of storage space?</strong>
              <p className="mt-1">No! PWAs are much smaller than native apps. SafeOrStolen typically uses less than 10MB of storage.</p>
            </div>
          </div>
        </div>

        <AppDownloadCTA showBenefits />
      </div>
    </AppPageTemplate>
  );
}

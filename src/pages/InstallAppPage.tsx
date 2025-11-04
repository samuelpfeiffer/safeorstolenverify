import React, { useEffect, useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Download, 
  Check, 
  Zap, 
  Shield, 
  Wifi, 
  Chrome,
  Apple,
  Share2,
  PlusSquare,
  CheckCircle2
} from 'lucide-react';
import { usePWA } from '@/hooks/usePWA';
import { mobileDetection } from '@/mobile/utils/mobileDetection';
import { useToast } from '@/hooks/use-toast';

const InstallAppPage = () => {
  const { isInstalled, isInstallAvailable, showInstallPrompt } = usePWA();
  const { toast } = useToast();
  const [deviceType, setDeviceType] = useState<'ios' | 'android' | 'desktop'>('desktop');

  useEffect(() => {
    if (mobileDetection.isIOS()) {
      setDeviceType('ios');
    } else if (mobileDetection.isAndroid()) {
      setDeviceType('android');
    } else {
      setDeviceType('desktop');
    }
  }, []);

  const handleInstallClick = async () => {
    if (isInstalled) {
      toast({
        title: '✅ Already Installed',
        description: 'SafeOrStolen is already installed on your device!',
      });
      return;
    }

    if (deviceType === 'ios') {
      // iOS users need manual instructions
      const instructionsElement = document.getElementById('ios-instructions');
      instructionsElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (isInstallAvailable) {
      const success = await showInstallPrompt();
      if (success) {
        toast({
          title: '🎉 App Installed!',
          description: 'SafeOrStolen has been added to your home screen.',
        });
      }
    }
  };

  const iosInstructions = [
    { step: 1, text: 'Tap the Share button', icon: Share2, detail: '(square with arrow pointing up) at the bottom of Safari' },
    { step: 2, text: 'Scroll down and tap "Add to Home Screen"', icon: PlusSquare, detail: 'Look for the plus icon' },
    { step: 3, text: 'Tap "Add" in the top right', icon: CheckCircle2, detail: 'The app icon will appear on your home screen' },
  ];

  const androidInstructions = [
    { step: 1, text: 'Tap the menu icon', icon: Chrome, detail: '(three dots) in the top right of Chrome' },
    { step: 2, text: 'Tap "Add to Home screen"', icon: PlusSquare, detail: 'Or "Install app" if you see that option' },
    { step: 3, text: 'Tap "Add" or "Install"', icon: CheckCircle2, detail: 'The app will be added to your home screen' },
  ];

  const desktopInstructions = [
    { step: 1, text: 'Look for the install icon', icon: Download, detail: 'In your browser address bar (usually a ⊕ or ⬇ icon)' },
    { step: 2, text: 'Click "Install SafeOrStolen"', icon: PlusSquare, detail: 'Or use the button above to trigger installation' },
    { step: 3, text: 'Confirm installation', icon: CheckCircle2, detail: 'The app will open in its own window' },
  ];

  const appFeatures = [
    { icon: Zap, title: 'Lightning Fast', description: 'Instant offline access to verification history' },
    { icon: Shield, title: 'Secure & Private', description: 'Your data stays on your device' },
    { icon: Wifi, title: 'Works Offline', description: 'Access search history without internet' },
    { icon: Smartphone, title: 'Native Experience', description: 'Full-screen app with no browser UI' },
  ];

  const currentInstructions = 
    deviceType === 'ios' ? iosInstructions :
    deviceType === 'android' ? androidInstructions :
    desktopInstructions;

  return (
    <>
      <PageSEO
        title="Install SafeOrStolen App - Free PWA for Instant Stolen Item Verification"
        description="Install the SafeOrStolen Progressive Web App (PWA) on your phone or computer. Works offline, lightning fast, and completely free. Available for iOS, Android, and Desktop."
        keywords="install safeorstolen, pwa app, stolen item checker app, offline verification, install web app, add to home screen"
        canonical="/install-app"
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-12 md:py-20">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            {isInstalled ? (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-600 dark:text-green-400 mb-6">
                <CheckCircle2 className="h-4 w-4" />
                <span className="font-semibold">✅ App Installed</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary mb-6">
                <Smartphone className="h-4 w-4" />
                <span className="font-semibold">Free • No App Store Required</span>
              </div>
            )}
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Install SafeOrStolen
              <span className="block text-primary mt-2">On Your Device</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {isInstalled 
                ? "You've successfully installed SafeOrStolen! Access it from your home screen anytime."
                : "Get instant access to stolen item verification. No app store needed - install directly from your browser."}
            </p>

            {!isInstalled && (
              <Button
                size="lg"
                onClick={handleInstallClick}
                className="text-lg px-8 py-6 h-auto"
              >
                <Download className="mr-2 h-5 w-5" />
                {deviceType === 'ios' ? 'See Installation Instructions' : 'Install App Now'}
              </Button>
            )}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {appFeatures.map((feature, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Installation Instructions */}
          {!isInstalled && (
            <Card className="max-w-3xl mx-auto mb-12" id="ios-instructions">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  {deviceType === 'ios' && <Apple className="h-8 w-8 text-primary" />}
                  {deviceType === 'android' && <Chrome className="h-8 w-8 text-primary" />}
                  {deviceType === 'desktop' && <Download className="h-8 w-8 text-primary" />}
                  <div>
                    <h2 className="text-2xl font-bold">
                      {deviceType === 'ios' && 'iOS Installation'}
                      {deviceType === 'android' && 'Android Installation'}
                      {deviceType === 'desktop' && 'Desktop Installation'}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Follow these simple steps to install SafeOrStolen
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {currentInstructions.map((instruction) => (
                    <div key={instruction.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {instruction.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <instruction.icon className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold">{instruction.text}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{instruction.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {deviceType === 'android' && isInstallAvailable && (
                  <div className="mt-8 pt-6 border-t">
                    <p className="text-sm text-muted-foreground mb-4">
                      Or use the quick install button:
                    </p>
                    <Button onClick={handleInstallClick} size="lg" className="w-full">
                      <Download className="mr-2 h-5 w-5" />
                      Install App Now
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Benefits Section */}
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Why Install the App?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  '⚡ Faster than the website',
                  '📱 Full-screen native experience',
                  '🔒 Enhanced security & privacy',
                  '📂 Offline access to history',
                  '🔔 Optional push notifications',
                  '💾 No storage on app stores',
                  '🆓 Completely free forever',
                  '♻️ Always up-to-date automatically',
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Common Questions</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Is this a real app or just a shortcut?</h3>
                  <p className="text-sm text-muted-foreground">
                    It's a Progressive Web App (PWA) - a modern web application that works like a native app. 
                    It has all the benefits of a native app without requiring app store approval or large downloads.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Will it use a lot of storage?</h3>
                  <p className="text-sm text-muted-foreground">
                    No! The app is very lightweight (less than 5MB) and only stores what's necessary for offline functionality.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How do I update the app?</h3>
                  <p className="text-sm text-muted-foreground">
                    Updates happen automatically! Just open the app and it will check for updates. 
                    No manual updates or app store downloads required.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default InstallAppPage;

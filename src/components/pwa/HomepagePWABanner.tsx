import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, X, Smartphone, Zap, Shield, Wifi } from 'lucide-react';
import { usePWA } from '@/hooks/usePWA';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

export const HomepagePWABanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isInstallAvailable, isInstalled, showInstallPrompt } = usePWA();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (isInstalled) {
      setIsVisible(false);
      return;
    }

    const dismissed = localStorage.getItem('homepage-pwa-banner-dismissed');
    const dismissedTime = dismissed ? parseInt(dismissed) : 0;
    const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);

    // Show banner if not dismissed recently (3 days for homepage banner)
    if (!dismissed || daysSinceDismissed > 3) {
      setIsVisible(true);
    }
  }, [isInstalled]);

  const handleInstall = async () => {
    if (isInstallAvailable) {
      const success = await showInstallPrompt();
      if (success) {
        toast({
          title: '🎉 App Installed Successfully!',
          description: 'SafeOrStolen is now on your home screen. Open anytime!',
        });
        setIsVisible(false);
        localStorage.setItem('homepage-pwa-banner-dismissed', Date.now().toString());
      }
    } else {
      // Redirect to install page for manual instructions
      navigate('/install-app');
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('homepage-pwa-banner-dismissed', Date.now().toString());
  };

  if (!isVisible || isInstalled) return null;

  return (
    <Card className="relative overflow-hidden border-2 border-sos-orange/20 bg-gradient-to-br from-sos-orange/5 via-background to-sos-lime/5 shadow-xl mb-12">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative p-6 md:p-8">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          onClick={handleDismiss}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Icon & Badge */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sos-orange to-sos-lime p-[2px]">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <Smartphone className="w-10 h-10 text-sos-orange" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-sos-lime text-background text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                FREE
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-sos-orange to-sos-lime bg-clip-text text-transparent">
              Install Our Free App
            </h3>
            <p className="text-muted-foreground mb-4">
              Get instant offline access, camera scanning, and push notifications. No app store required—install directly from your browser!
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
              <div className="flex items-center gap-1.5 text-sm">
                <Zap className="w-4 h-4 text-sos-orange" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <Wifi className="w-4 h-4 text-sos-lime" />
                <span>Works Offline</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <Shield className="w-4 h-4 text-sos-orange" />
                <span>100% Free</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex-shrink-0 flex flex-col gap-2 min-w-[200px]">
            <Button 
              onClick={handleInstall}
              size="lg"
              className="bg-gradient-to-r from-sos-orange to-sos-lime hover:opacity-90 text-white font-bold shadow-lg w-full"
            >
              <Download className="w-5 h-5 mr-2" />
              Install Now
            </Button>
            <Button 
              onClick={() => navigate('/install-app')}
              variant="outline"
              size="lg"
              className="border-sos-orange/30 hover:border-sos-orange hover:bg-sos-orange/5 w-full"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

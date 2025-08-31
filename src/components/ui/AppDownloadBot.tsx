import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, Smartphone, Download, MessageCircle, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AppDownloadBotProps {
  onClose?: () => void;
  delay?: number;
}

export const AppDownloadBot: React.FC<AppDownloadBotProps> = ({ 
  onClose, 
  delay = 5000 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [step, setStep] = useState(1);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the bot in this session
    const botDismissed = sessionStorage.getItem('appBotDismissed');
    if (botDismissed) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('appBotDismissed', 'true');
    onClose?.();
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    setHasInteracted(true);
  };

  const handleDownloadClick = (platform: 'ios' | 'android') => {
    // Track download clicks (you could integrate analytics here)
    console.log(`Download clicked for ${platform}`);
    setStep(3);
    
    // Simulate app store redirect
    setTimeout(() => {
      setStep(4);
      setTimeout(() => {
        handleDismiss();
      }, 3000);
    }, 1000);
  };

  if (!isVisible) return null;

  const BotAvatar = () => (
    <div className="w-12 h-12 bg-gradient-to-br from-sos-orange to-sos-lime rounded-full flex items-center justify-center shadow-lg">
      <Sparkles className="h-6 w-6 text-white" />
    </div>
  );

  const renderBotMessage = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-3">
            <p className="text-sm">
              👋 Hi there! I'm your SafeOrStolen assistant. Did you know you can verify items instantly with our mobile app?
            </p>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                onClick={() => setStep(2)}
                className="bg-sos-orange hover:bg-sos-orange/90 text-xs"
              >
                Tell me more!
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={handleDismiss}
                className="text-xs"
              >
                Not now
              </Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-3">
            <p className="text-sm">
              📱 With our app, you can scan serial numbers with your camera and get instant verification results. Perfect for shopping on-the-go!
            </p>
            <div className="space-y-2">
              <Button 
                size="sm" 
                onClick={() => handleDownloadClick('ios')}
                className="w-full bg-black hover:bg-black/90 text-white text-xs"
              >
                <Smartphone className="mr-1 h-3 w-3" />
                Download for iOS
              </Button>
              <Button 
                size="sm" 
                onClick={() => handleDownloadClick('android')}
                className="w-full bg-green-600 hover:bg-green-700 text-white text-xs"
              >
                <Smartphone className="mr-1 h-3 w-3" />
                Download for Android
              </Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-3">
            <p className="text-sm">
              🚀 Redirecting you to the app store... You'll love the camera scanning feature!
            </p>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-sos-orange border-t-transparent"></div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-3">
            <p className="text-sm">
              ✅ Thanks! The app will help you shop safer. Happy verifying! 
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="shadow-2xl border-2 border-sos-orange/20 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-sos-orange to-sos-lime p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BotAvatar />
            <div>
              <div className="text-white font-semibold text-sm">SafeOrStolen Assistant</div>
              <div className="text-white/80 text-xs flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Online now
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button
              size="sm"
              variant="ghost"
              onClick={handleMinimize}
              className="h-6 w-6 p-0 text-white hover:bg-white/20"
            >
              <MessageCircle className="h-3 w-3" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleDismiss}
              className="h-6 w-6 p-0 text-white hover:bg-white/20"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Content */}
        {!isMinimized && (
          <CardContent className="p-4 bg-white dark:bg-gray-900">
            {renderBotMessage()}
            
            {/* New Feature Badge */}
            {step <= 2 && (
              <div className="mt-3 pt-3 border-t">
                <Badge variant="secondary" className="bg-sos-lime/10 text-sos-lime text-xs">
                  <Download className="mr-1 h-3 w-3" />
                  New App Features Available
                </Badge>
              </div>
            )}
          </CardContent>
        )}

        {/* Minimized View */}
        {isMinimized && (
          <div className="p-2 bg-white dark:bg-gray-900 text-center">
            <Button
              size="sm"
              variant="ghost"
              onClick={handleMinimize}
              className="text-xs text-muted-foreground"
            >
              Click to expand
            </Button>
          </div>
        )}
      </Card>

      {/* Notification Pulse */}
      {!hasInteracted && (
        <div className="absolute -top-1 -right-1 w-4 h-4">
          <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75"></div>
        </div>
      )}
    </div>
  );
};
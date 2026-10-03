import React, { useEffect, useState } from 'react';
import { CheckCircle, Gift, Search, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import confetti from 'canvas-confetti';

interface AuthSuccessAnnouncementProps {
  type: 'signin' | 'signup';
  userName?: string;
  onContinue: () => void;
}

export const AuthSuccessAnnouncement = ({ 
  type, 
  userName = 'there', 
  onContinue 
}: AuthSuccessAnnouncementProps) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Show celebration animation
    setShowAnimation(true);
    
    if (type === 'signup') {
      // Confetti for new users
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    // Auto-dismiss after 5 seconds
    const timer = setTimeout(() => {
      onContinue();
    }, 5000);

    return () => clearTimeout(timer);
  }, [type, onContinue]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className={`max-w-md w-full ${showAnimation ? 'animate-scale-in' : ''}`}>
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          
          {type === 'signup' ? (
            <>
              <CardTitle className="text-2xl text-green-700">
                🎉 Welcome to SafeOrStolen, {userName}!
              </CardTitle>
              <CardDescription className="text-base">
                Your account has been created successfully! You're now protected from stolen goods fraud.
              </CardDescription>
            </>
          ) : (
            <>
              <CardTitle className="text-2xl text-blue-700">
                Welcome back, {userName}! 👋
              </CardTitle>
              <CardDescription className="text-base">
                You're successfully signed in and ready to verify items safely.
              </CardDescription>
            </>
          )}
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Benefits for new users */}
          {type === 'signup' && (
            <div className="space-y-4">
              <div className="text-center">
                <Badge className="bg-orange-100 text-orange-800 text-lg px-3 py-1">
                  <Gift className="w-4 h-4 mr-2" />
                  Welcome! Subscribe for $14.99/mo Unlimited
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                  <Search className="w-4 h-4 text-orange-600" />
                  <span>IMEI Checks</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>VIN Verification</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                  <Search className="w-4 h-4 text-blue-600" />
                  <span>Serial Lookup</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
                  <Shield className="w-4 h-4 text-purple-600" />
                  <span>Fraud Protection</span>
                </div>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                Start verifying items now and protect yourself from stolen goods!
              </div>
            </div>
          )}

          {/* Existing user welcome */}
          {type === 'signin' && (
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground">
                Continue where you left off and keep your purchases safe
              </p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">
                  Ready to verify more items and stay protected
                </p>
              </div>
            </div>
          )}

          {/* Action Button */}
          <Button 
            onClick={onContinue}
            className="w-full bg-gradient-to-r from-sos-orange to-sos-orange/90 hover:opacity-90"
          >
            {type === 'signup' ? 'Start Verifying Items' : 'Continue to Dashboard'}
          </Button>
          
          <p className="text-center text-xs text-muted-foreground">
            This message will close automatically in a few seconds
          </p>
        </CardContent>
      </Card>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scale-in {
            0% {
              transform: scale(0.9);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          .animate-scale-in {
            animation: scale-in 0.3s ease-out;
          }
        `
      }} />
    </div>
  );
};

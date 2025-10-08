import React, { useEffect, useState } from 'react';
import { useTrialStatus } from '@/hooks/useTrialStatus';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, AlertTriangle, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

export const TrialCountdownBanner = () => {
  const { isAuthenticated } = useUnifiedAuth();
  const navigate = useNavigate();
  const { 
    isTrialActive, 
    isTrialExpired, 
    daysRemaining, 
    hoursRemaining,
    checksRemaining,
    checksUsed,
    isLoading 
  } = useTrialStatus();
  
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      // Show banner if trial is active with limited checks/time OR if expired
      setShowBanner(
        (isTrialActive && (checksRemaining <= 1 || daysRemaining <= 3)) || 
        isTrialExpired
      );
    }
  }, [isLoading, isAuthenticated, isTrialActive, isTrialExpired, checksRemaining, daysRemaining]);

  if (!showBanner || !isAuthenticated) return null;

  const getUrgencyColor = () => {
    if (isTrialExpired) return 'border-destructive bg-destructive/5';
    if (daysRemaining <= 1 || checksRemaining === 0) return 'border-orange-500 bg-orange-50';
    if (daysRemaining <= 3) return 'border-yellow-500 bg-yellow-50';
    return 'border-primary bg-primary/5';
  };

  const getUrgencyMessage = () => {
    if (isTrialExpired) {
      return {
        title: '⏰ Trial Expired - Upgrade Now!',
        subtitle: 'Your free trial has ended. Upgrade to continue protecting yourself from stolen goods.',
        icon: <AlertTriangle className="h-6 w-6 text-destructive" />
      };
    }
    
    if (checksRemaining === 0) {
      return {
        title: '🚫 All Free Checks Used!',
        subtitle: `You have ${daysRemaining} days left in your trial but no checks remaining. Upgrade for unlimited verifications!`,
        icon: <AlertTriangle className="h-6 w-6 text-orange-500" />
      };
    }
    
    if (checksRemaining === 1) {
      return {
        title: '⚠️ Last Free Check!',
        subtitle: `Only 1 verification left in your trial (${daysRemaining} days remaining). Upgrade now to unlock unlimited checks!`,
        icon: <AlertTriangle className="h-6 w-6 text-orange-500" />
      };
    }
    
    if (daysRemaining <= 1) {
      return {
        title: '⏰ Trial Expires in 24 Hours!',
        subtitle: `You have ${checksRemaining} checks left. Don't lose access - upgrade today!`,
        icon: <Clock className="h-6 w-6 text-orange-500 animate-pulse" />
      };
    }
    
    return {
      title: `⏰ Trial Ends in ${daysRemaining} Days`,
      subtitle: `${checksRemaining} free checks remaining. Upgrade anytime for unlimited verifications!`,
      icon: <Clock className="h-6 w-6 text-yellow-500" />
    };
  };

  const message = getUrgencyMessage();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 w-full"
      >
        <Card className={`${getUrgencyColor()} border-2 rounded-none shadow-lg`}>
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1">
                {message.icon}
                <div className="text-left">
                  <p className="font-bold text-sm sm:text-base">{message.title}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{message.subtitle}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {!isTrialExpired && (
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-background rounded-full border">
                    <span className="text-xs font-medium">
                      {checksRemaining} checks • {daysRemaining}d {hoursRemaining % 24}h left
                    </span>
                  </div>
                )}
                
                <Button
                  onClick={() => navigate('/pricing')}
                  className="bg-sos-orange hover:bg-sos-orange/90 text-white font-bold whitespace-nowrap"
                  size="sm"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  {isTrialExpired ? 'Upgrade Now' : 'Unlock Unlimited'}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};


import { useSearchLimits } from '@/hooks/useSearchLimits';
import { useOptimizedSubscription } from '@/hooks/useOptimizedSubscription';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Crown, Clock, Settings, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { formatPrice, getSubscriptionPriceId, SUBSCRIPTION_TIERS, getSubscriptionTier } from '@/utils/pricing';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { useCallback, useMemo } from 'react';
import { cn } from '@/lib/utils';

export const SubscriptionStatus = () => {
  const { remainingSearches } = useSearchLimits();
  const {
    subscriptionData,
    isLoading,
    error,
    createSubscriptionCheckout,
    openCustomerPortal,
    refreshSubscription
  } = useOptimizedSubscription();
  const { isAuthenticated } = useUnifiedAuth();
  const navigate = useNavigate();

  // Safely determine subscription status with null checks
  const isSubscribed = Boolean(subscriptionData?.subscribed);
  const currentTier = useMemo(() => {
    try {
      return getSubscriptionTier(subscriptionData?.subscription_tier);
    } catch (error) {
      console.error('Error getting subscription tier:', error);
      return SUBSCRIPTION_TIERS.free;
    }
  }, [subscriptionData?.subscription_tier]);

  const handleSubscribeClick = useCallback(async (tier: 'personal' | 'business') => {
    if (!isAuthenticated) {
      console.log("Not authenticated, redirecting to auth");
      navigate('/auth?tab=signin');
      return;
    }
    
    try {
      console.log("Subscribe button clicked for tier:", tier);
      const priceId = getSubscriptionPriceId(tier);
      const checkoutUrl = await createSubscriptionCheckout(priceId);
      if (checkoutUrl) {
        window.open(checkoutUrl, '_blank');
      }
    } catch (error) {
      console.error('Error creating subscription checkout:', error);
    }
  }, [isAuthenticated, navigate, createSubscriptionCheckout]);

  const handleManageSubscription = useCallback(() => {
    try {
      openCustomerPortal();
    } catch (error) {
      console.error('Error opening customer portal:', error);
    }
  }, [openCustomerPortal]);

  const handleRefresh = useCallback(() => {
    try {
      refreshSubscription();
    } catch (error) {
      console.error('Error refreshing subscription:', error);
    }
  }, [refreshSubscription]);

  // Premium Subscriber Card
  const PremiumSubscriberCard = useCallback(() => (
    <Card className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-sos-orange/30">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sos-orange">
            <Crown className="h-5 w-5" />
            {currentTier.name} Subscriber
          </span>
          <div className="flex gap-2">
            <Button 
              onClick={handleRefresh} 
              size="sm" 
              variant="outline" 
              className="border-sos-orange/30 text-sos-orange hover:bg-sos-orange/10" 
              disabled={isLoading}
            >
              <RefreshCw className={cn('h-4 w-4', isLoading && 'animate-spin')} />
            </Button>
            <Button 
              onClick={handleManageSubscription} 
              size="sm" 
              className="bg-sos-orange hover:bg-sos-orange/90 text-white"
            >
              <Settings className="h-4 w-4 mr-1" />
              Manage
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-300 mb-2">
          Enjoy unlimited searches and premium features!
        </p>
        <div className="text-xs text-gray-400 space-y-1">
          {currentTier.features?.slice(0, 3).map((feature, index) => (
            <div key={index}>• {feature}</div>
          ))}
        </div>
        {subscriptionData?.subscription_end && (
          <p className="text-xs text-gray-400 mt-2">
            Renews on {new Date(subscriptionData.subscription_end).toLocaleDateString()}
          </p>
        )}
      </CardContent>
    </Card>
  ), [currentTier, isLoading, subscriptionData, handleRefresh, handleManageSubscription]);

  // Free Tier Card
  const FreeTierCard = useCallback(() => (
    <Card className="bg-gray-900/50 border-gray-700">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-white">
            <Search className="h-5 w-5" />
            Free Plan
          </span>
          <div className="flex items-center gap-2">
            <Badge variant={remainingSearches > 1 ? "default" : "destructive"}>
              {remainingSearches}/4 left
            </Badge>
            <Button 
              onClick={handleRefresh} 
              size="sm" 
              variant="outline" 
              className="border-gray-600 text-gray-400 hover:bg-gray-800 p-1 h-auto" 
              disabled={isLoading}
            >
              <RefreshCw className={cn('h-3 w-3', isLoading && 'animate-spin')} />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Clock className="h-4 w-4" />
          4 free searches per account (one-time)
        </div>
        
        {remainingSearches === 0 ? (
          <div className="space-y-3">
            <p className="text-sm text-red-400">
              You've used all your free searches!
            </p>
            <div className="text-xs text-gray-500 mb-3">
              Upgrade to get unlimited searches and premium features.
            </div>
          </div>
        ) : (
          <div className="text-xs text-gray-500 mb-3">
            {remainingSearches} verification{remainingSearches !== 1 ? 's' : ''} remaining. 
            Upgrade for unlimited access!
          </div>
        )}

        {/* Subscription Options */}
        <div className="space-y-2">
          <Button 
            onClick={() => handleSubscribeClick('personal')} 
            className="w-full bg-sos-orange hover:bg-sos-orange/90 text-white border-none" 
            disabled={isLoading}
          >
            Upgrade to Personal - {formatPrice(SUBSCRIPTION_TIERS.personal.price)}/month
          </Button>
          <Button 
            onClick={() => handleSubscribeClick('business')} 
            variant="outline" 
            className="w-full border-sos-orange text-sos-orange hover:bg-sos-orange/10 bg-transparent" 
            disabled={isLoading}
          >
            Upgrade to Business - {formatPrice(SUBSCRIPTION_TIERS.business.price)}/month
          </Button>
        </div>

        {/* Feature comparison */}
        <div className="text-xs text-gray-500 space-y-1 pt-2 border-t border-gray-700">
          <div className="font-medium">Current plan includes:</div>
          {SUBSCRIPTION_TIERS.free.features?.map((feature, index) => (
            <div key={index}>• {feature}</div>
          ))}
        </div>
      </CardContent>
    </Card>
  ), [remainingSearches, isLoading, handleRefresh, handleSubscribeClick]);

  return (
    <ErrorBoundary fallback={
      <Card className="bg-gray-900/50 border-gray-700">
        <CardContent className="p-6 text-center text-gray-400">
          Subscription status temporarily unavailable
        </CardContent>
      </Card>
    }>
      {isSubscribed ? <PremiumSubscriberCard /> : <FreeTierCard />}
    </ErrorBoundary>
  );
};

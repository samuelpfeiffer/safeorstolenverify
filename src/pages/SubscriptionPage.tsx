import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useEnhancedSubscription } from '@/hooks/useEnhancedSubscription';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Crown, Check, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BetterSEOHead } from '@/components/enhanced/BetterSEOHead';
import { getSubscriptionPriceId } from '@/utils/pricing';

const SubscriptionPage: React.FC = () => {
  const { subscriptionData, isLoading, error, createSubscriptionCheckout, openCustomerPortal } = useEnhancedSubscription();
  const { isAuthenticated } = useUnifiedAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-sos flex items-center justify-center">
        <Card className="bg-sos-dark border-sos-orange/20 max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Sign In Required</h2>
            <p className="text-gray-300 mb-6">
              Please sign in to view your subscription details.
            </p>
            <Button asChild><Link to="/auth">Sign In</Link></Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-sos flex items-center justify-center">
        <div className="text-white">Loading subscription details...</div>
      </div>
    );
  }

  return (
    <>
      <BetterSEOHead
        title="Manage Subscription"
        description="View plan status and manage your Safe or Stolen subscription."
        canonical="/subscription"
        noindex
        nofollow
      />
      <div className="min-h-screen bg-sos text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Subscription Management</h1>
          <p className="text-xl text-gray-300">
            Manage your SOS verification subscription
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Plan */}
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Crown className="h-5 w-5 text-sos-orange" />
                Current Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              {subscriptionData?.subscribed ? (
                <div className="space-y-4">
                  <Badge className="bg-sos-orange text-white">
                    {subscriptionData.subscription_tier || 'Premium'}
                  </Badge>
                  <div className="space-y-2">
                    <p className="text-gray-300">
                      <strong>Status:</strong> Active
                    </p>
                    {subscriptionData.subscription_end && (
                      <p className="text-gray-300">
                        <strong>Expires:</strong> {new Date(subscriptionData.subscription_end).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <Button variant="outline" className="w-full" onClick={openCustomerPortal}>
                    Manage Subscription
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Badge variant="secondary">Free Plan</Badge>
                  <p className="text-gray-300">
                    You're on the free plan with limited searches.
                  </p>
                  <Button className="w-full bg-sos-orange hover:bg-sos-orange/80" onClick={async () => { const url = await createSubscriptionCheckout(getSubscriptionPriceId('premium')); if (url) window.location.href = url; }}>
                    Upgrade Now
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Plan Features */}
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Zap className="h-5 w-5 text-sos-orange" />
                Plan Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {subscriptionData?.subscribed ? (
                  <>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-gray-300">Unlimited verifications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-gray-300">Priority support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-gray-300">Advanced analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-gray-300">API access</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="text-sos-orange">•</span>
                      <span className="text-gray-300">4 free verifications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sos-orange">•</span>
                      <span className="text-gray-300">Basic support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-500 line-through">Advanced analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-500 line-through">API access</span>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
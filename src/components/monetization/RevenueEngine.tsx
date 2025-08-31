import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Crown, 
  Zap, 
  Shield, 
  Target, 
  TrendingUp, 
  Users, 
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { useSubscription } from '@/hooks/useSubscription';
import { useOneTimePayment } from '@/hooks/useOneTimePayment';
import { formatPrice, SUBSCRIPTION_TIERS } from '@/utils/pricing';

export const RevenueEngine = () => {
  const { user } = useAuth();
  const { subscriptionData, createSubscriptionCheckout } = useSubscription();
  const { createOneTimePayment, isLoading: paymentLoading } = useOneTimePayment();
  const [selectedPlan, setSelectedPlan] = useState<string>('premium');

  const handleSubscriptionUpgrade = async (tier: string) => {
    const priceId = SUBSCRIPTION_TIERS[tier as keyof typeof SUBSCRIPTION_TIERS]?.stripePriceId;
    if (priceId) {
      const url = await createSubscriptionCheckout(priceId);
      if (url) {
        window.open(url, '_blank');
      }
    }
  };

  const handleOneTimeVerification = async () => {
    const url = await createOneTimePayment('DEMO-SERIAL-123', 'electronics');
    if (url) {
      window.open(url, '_blank');
    }
  };

  const competitorComparison = [
    {
      feature: 'AI-Powered Verification',
      us: true,
      competitor1: false,
      competitor2: false,
      competitor3: false
    },
    {
      feature: 'Mobile-First Platform',
      us: true,
      competitor1: false,
      competitor2: true,
      competitor3: false
    },
    {
      feature: 'Real-Time Database Updates',
      us: true,
      competitor1: false,
      competitor2: false,
      competitor3: true
    },
    {
      feature: 'Enterprise API Integration',
      us: true,
      competitor1: true,
      competitor2: false,
      competitor3: false
    },
    {
      feature: 'Global Database Coverage',
      us: true,
      competitor1: false,
      competitor2: false,
      competitor3: false
    },
    {
      feature: 'Free Tier Available',
      us: true,
      competitor1: false,
      competitor2: false,
      competitor3: false
    }
  ];

  return (
    <div className="space-y-8">
      {/* Revenue Dashboard Header */}
      <div className="bg-gradient-to-r from-sos-orange to-sos-lime p-8 rounded-2xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Crown className="h-8 w-8" />
              Industry-Leading Verification Platform
            </h1>
            <p className="text-lg opacity-90 mb-4">
              The only AI-powered, mobile-first verification solution trusted by millions
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Star className="h-4 w-4 mr-1" />
                #1 Market Leader
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="h-4 w-4 mr-1" />
                99.9% Accuracy Rate
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Users className="h-4 w-4 mr-1" />
                10M+ Verifications
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">$13B</div>
            <div className="opacity-90">Stolen Goods Market</div>
            <div className="text-2xl font-bold mt-2">We're Stopping</div>
          </div>
        </div>
      </div>

      <Tabs value={selectedPlan} onValueChange={setSelectedPlan} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="free">Free</TabsTrigger>
          <TabsTrigger value="basic">Smart Buyer</TabsTrigger>
          <TabsTrigger value="premium">Savvy Shopper</TabsTrigger>
          <TabsTrigger value="enterprise">Business Pro</TabsTrigger>
        </TabsList>

        {/* Subscription Plans */}
        <TabsContent value="free">
          <Card className="border-2 border-muted">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">Free Tier</CardTitle>
                  <CardDescription>Perfect for occasional buyers</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">$0</div>
                  <div className="text-sm text-muted-foreground">Forever</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {SUBSCRIPTION_TIERS.free.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" onClick={() => window.location.href = '/verify'}>
                Start Free Verification
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="basic">
          <Card className="border-2 border-sos-orange">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    Smart Buyer
                    <Badge>7-Day Free Trial</Badge>
                  </CardTitle>
                  <CardDescription>Unlimited verifications for regular buyers</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{formatPrice(SUBSCRIPTION_TIERS.basic.price)}</div>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {SUBSCRIPTION_TIERS.basic.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-sos-orange" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-sos-orange hover:bg-sos-orange/90" 
                onClick={() => handleSubscriptionUpgrade('basic')}
              >
                Start 7-Day Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="premium">
          <Card className="border-2 border-sos-lime relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-sos-lime text-sos-dark font-bold px-4 py-1">
                <Sparkles className="h-4 w-4 mr-1" />
                MOST POPULAR
              </Badge>
            </div>
            <CardHeader className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    Savvy Shopper
                    <Badge>7-Day Free Trial</Badge>
                  </CardTitle>
                  <CardDescription>Advanced features for power users</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-sos-lime">{formatPrice(SUBSCRIPTION_TIERS.premium.price)}</div>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {SUBSCRIPTION_TIERS.premium.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-sos-lime" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-sos-lime text-sos-dark hover:bg-sos-lime/90 font-bold" 
                onClick={() => handleSubscriptionUpgrade('premium')}
              >
                <Crown className="mr-2 h-4 w-4" />
                Start Premium Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="enterprise">
          <Card className="border-2 border-primary">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    Business Pro
                    <Badge>Enterprise</Badge>
                  </CardTitle>
                  <CardDescription>Complete solution for businesses</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{formatPrice(SUBSCRIPTION_TIERS.enterprise.price)}</div>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {SUBSCRIPTION_TIERS.enterprise.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                onClick={() => handleSubscriptionUpgrade('enterprise')}
              >
                <Target className="mr-2 h-4 w-4" />
                Upgrade to Enterprise
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* One-Time Report Option */}
      <Card className="bg-gradient-to-r from-muted/50 to-background border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-sos-orange" />
            Need Just One Verification?
          </CardTitle>
          <CardDescription>
            Get a certified report for a single item without any commitment
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">{formatPrice(SUBSCRIPTION_TIERS.report.price)}</div>
            <div className="text-sm text-muted-foreground">Per certified report</div>
          </div>
          <Button 
            onClick={handleOneTimeVerification}
            disabled={paymentLoading}
            className="bg-sos-orange hover:bg-sos-orange/90"
          >
            {paymentLoading ? 'Processing...' : 'Buy Single Report'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      {/* Competitive Advantage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Why We're #1 in the Market
          </CardTitle>
          <CardDescription>
            See how SafeOrStolen leads against all competitors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-3">Feature</th>
                  <th className="text-center pb-3 bg-sos-lime/20 px-4 rounded-t-lg">
                    <div className="flex items-center justify-center gap-2">
                      <Crown className="h-4 w-4" />
                      SafeOrStolen
                    </div>
                  </th>
                  <th className="text-center pb-3">Competitor A</th>
                  <th className="text-center pb-3">Competitor B</th>
                  <th className="text-center pb-3">Competitor C</th>
                </tr>
              </thead>
              <tbody>
                {competitorComparison.map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 font-medium">{row.feature}</td>
                    <td className="text-center py-3 bg-sos-lime/10">
                      {row.us ? (
                        <CheckCircle className="h-5 w-5 text-sos-lime mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">✗</span>
                      )}
                    </td>
                    <td className="text-center py-3">
                      {row.competitor1 ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">✗</span>
                      )}
                    </td>
                    <td className="text-center py-3">
                      {row.competitor2 ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">✗</span>
                      )}
                    </td>
                    <td className="text-center py-3">
                      {row.competitor3 ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Market Position Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">99.9%</p>
                <p className="text-xs text-muted-foreground">Accuracy Rate</p>
              </div>
              <Shield className="h-8 w-8 text-sos-lime" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">10M+</p>
                <p className="text-xs text-muted-foreground">Verifications</p>
              </div>
              <Users className="h-8 w-8 text-sos-orange" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">$50M+</p>
                <p className="text-xs text-muted-foreground">Fraud Prevented</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">150+</p>
                <p className="text-xs text-muted-foreground">Countries</p>
              </div>
              <Target className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
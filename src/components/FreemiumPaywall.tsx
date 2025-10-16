import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FreemiumPaywallProps {
  searchCount: number;
  maxFreeSearches: number;
  onUpgrade: () => void;
}

export const FreemiumPaywall: React.FC<FreemiumPaywallProps> = ({
  searchCount,
  maxFreeSearches,
  onUpgrade
}) => {
  const remainingSearches = maxFreeSearches - searchCount;
  const isLastSearch = remainingSearches === 1;
  const isOverLimit = remainingSearches <= 0;

  if (!isLastSearch && !isOverLimit) return null;

  return (
    <Card className="border-2 border-orange-500 bg-gradient-to-r from-orange-50 to-red-50 mb-6">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          {isOverLimit ? (
            <AlertTriangle className="h-12 w-12 text-red-500" />
          ) : (
            <Shield className="h-12 w-12 text-orange-500" />
          )}
        </div>
        <CardTitle className="text-2xl">
          {isOverLimit ? (
            <span className="text-red-700">Free Searches Exhausted</span>
          ) : (
            <span className="text-orange-700">Last Free Search!</span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className="space-y-2">
          <p className="text-lg font-medium">
            {isOverLimit 
              ? "You've used all 2 free verifications (14-day trial). Upgrade now to continue protecting yourself."
              : "You're about to use your final free verification. Don't get caught off guard again."
            }
          </p>
          <div className="flex justify-center gap-2">
            {Array.from({ length: maxFreeSearches }, (_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full ${
                  i < searchCount 
                    ? 'bg-red-500' 
                    : i === searchCount && !isOverLimit
                    ? 'bg-orange-500 animate-pulse'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Unlimited Verifications</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Advanced Reports</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Priority Support</span>
          </div>
        </div>

        <div className="bg-card/50 rounded-lg p-4 border">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            <Badge className="bg-red-500 text-white">Limited Time Offer</Badge>
          </div>
          <p className="text-lg font-bold text-gray-900">Start at just $4.99/month</p>
          <p className="text-sm text-gray-600">Cancel anytime • 30-day money-back guarantee</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white"
            onClick={onUpgrade}
          >
            <Shield className="mr-2 h-5 w-5" />
            Upgrade Now - Don't Get Scammed
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/subscriptions">
              View All Plans
            </Link>
          </Button>
        </div>

        <div className="text-xs text-muted-foreground space-y-1">
          <p>✓ Instant activation • ✓ No setup fees • ✓ Bank-level security</p>
          <p className="font-medium">Join 25,000+ smart buyers who refuse to buy stolen goods</p>
        </div>
      </CardContent>
    </Card>
  );
};
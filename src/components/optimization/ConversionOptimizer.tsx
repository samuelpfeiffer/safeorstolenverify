import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Clock, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ConversionOptimizer = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-200 rounded-lg p-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Clock className="h-5 w-5 text-red-500" />
          <span className="text-red-700 font-semibold">Don't Get Scammed Today</span>
        </div>
        <p className="text-sm text-red-600">
          <strong>47%</strong> of secondhand buyers purchased stolen goods unknowingly last year
        </p>
      </div>

      {/* Social Proof Section */}
      <div className="bg-card rounded-lg p-6 border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Join Smart Buyers</h3>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Live Activity
          </Badge>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Sarah in NYC just saved $1,200 avoiding stolen iPhone</span>
            <span className="text-muted-foreground">2 min ago</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Mike verified car VIN - clean title confirmed</span>
            <span className="text-muted-foreground">4 min ago</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Jennifer avoided stolen laptop purchase</span>
            <span className="text-muted-foreground">7 min ago</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="text-2xl font-bold text-sos-orange mb-1">8,342</div>
          <div className="text-sm text-muted-foreground">items verified today</div>
        </div>
      </div>

      {/* Value Proposition Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-sos-orange/10 to-orange-100 p-6 rounded-lg border">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="h-6 w-6 text-sos-orange" />
            <h4 className="font-semibold">For Buyers</h4>
          </div>
          <ul className="space-y-2 text-sm mb-4">
            <li>• Verify before you buy</li>
            <li>• Avoid legal troubles</li>
            <li>• Get insurance coverage</li>
            <li>• Peace of mind guarantee</li>
          </ul>
          <Button 
            className="w-full bg-sos-orange hover:bg-sos-orange/90"
            onClick={() => navigate('/verify')}
          >
            Check Item Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="bg-gradient-to-br from-sos-lime/10 to-green-100 p-6 rounded-lg border">
          <div className="flex items-center gap-3 mb-3">
            <Users className="h-6 w-6 text-sos-lime" />
            <h4 className="font-semibold">For Sellers</h4>
          </div>
          <ul className="space-y-2 text-sm mb-4">
            <li>• Prove item legitimacy</li>
            <li>• Build buyer trust</li>
            <li>• Sell faster</li>
            <li>• Premium pricing</li>
          </ul>
          <Button 
            variant="outline" 
            className="w-full border-sos-lime text-sos-lime hover:bg-sos-lime hover:text-sos-dark"
            onClick={() => navigate('/seller-tools')}
          >
            Seller Tools
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Risk Mitigation */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
          <Zap className="h-5 w-5" />
          Why Verification Matters
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">$2.8B</div>
            <div className="text-red-700">Annual stolen goods market</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">67%</div>
            <div className="text-red-700">Buyers unaware of risks</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">$3,400</div>
            <div className="text-red-700">Average loss per victim</div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-sos-orange to-sos-lime text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-2">Start Your Free Verification</h3>
        <p className="mb-6 opacity-90">Join 10M+ users who verify before they buy</p>
        <Button 
          size="lg" 
          className="bg-white text-sos-orange hover:bg-white/90 px-8 py-4"
          onClick={() => navigate('/verify')}
        >
          Verify Now - 4 Free Checks
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <div className="mt-4 text-sm opacity-80">
          No credit card required • Instant results • 99.9% accuracy
        </div>
      </div>
    </div>
  );
};
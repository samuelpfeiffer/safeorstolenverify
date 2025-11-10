import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Search } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { UnifiedSearchBar } from '@/components/unified/UnifiedSearchBar';
import { FasterCapitalBranding } from '@/components/FasterCapitalBranding';
const Hero = () => {
  const { isAuthenticated } = useUnifiedAuth();
  
  return <div className="relative bg-gradient-to-br from-orange-900/90 via-amber-900/70 to-orange-800/80 text-foreground min-h-screen">
      {/* Bright colorful overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-yellow-500/20 to-orange-600/25 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* FasterCapital Badge */}
          <div className="flex justify-center animate-fade-in">
            <FasterCapitalBranding />
          </div>

          {/* Trust-focused Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in drop-shadow-lg">
            Check & Verify Instantly If Secondhand Items Are Safe Or Stolen
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-lime-400">Free Database Search - Verify Any Item in 30 Seconds Before You Buy Or Sell</span>
          </h1>
          
          {/* Trust Value Proposition */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow">Don't get scammed on Facebook Marketplace, OfferUp, Craigslist, or eBay.
 Search IMEI, VIN, Serial Numbers Instantly.  </p>

          {/* Professional Search Interface */}
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-white/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-xl p-10 rounded-2xl shadow-[0_0_80px_rgba(255,140,0,0.4)] border-2 border-orange-400/40 animate-fade-in">
            <div className="flex items-center gap-3 mb-8 px-6 py-4 bg-gradient-to-r from-primary/30 to-yellow-500/20 rounded-xl border-2 border-primary/50 shadow-lg">
              <Shield className="h-7 w-7 text-orange-400" />
              <span className="text-lg font-semibold text-white drop-shadow">Search Database Free - Verify Any Item</span>
            </div>
            <UnifiedSearchBar variant="hero" />
            <div className="mt-6 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-lime-400">
                <Shield className="h-4 w-4" />
                <span className="font-medium drop-shadow">Secure & Private</span>
              </div>
              <div className="flex items-center gap-2 text-orange-400">
                <Search className="h-4 w-4" />
                <span className="font-medium drop-shadow">Instant Results</span>
              </div>
              <div className="flex items-center gap-2 text-gray-200">
                <span className="font-medium drop-shadow">No Credit Card</span>
              </div>
            </div>
          </div>
          
          {/* Trust-focused CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold px-12 h-14 text-base shadow-[0_0_30px_rgba(255,140,0,0.5)] hover:shadow-[0_0_50px_rgba(255,140,0,0.7)] transition-all">
              <Link to={!isAuthenticated ? '/auth?tab=signup' : '/dashboard'}>
                <Shield className="h-5 w-5 mr-2" />
                Start Verification
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 font-bold px-10 h-14 text-base backdrop-blur" asChild>
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t-2 border-orange-500/30">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">50M+</div>
              <div className="text-sm font-semibold text-gray-200">Verified Records</div>
              <div className="text-xs text-gray-300 mt-1">Trusted Database</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 mb-2">99.9%</div>
              <div className="text-sm font-semibold text-gray-200">Accuracy Rate</div>
              <div className="text-xs text-gray-300 mt-1">Industry Leading</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2">&lt;30s</div>
              <div className="text-sm font-semibold text-gray-200">Fast Results</div>
              <div className="text-xs text-gray-300 mt-1">Instant Verification</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
Hero.displayName = 'Hero';
export default Hero;

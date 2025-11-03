import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Search } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { UnifiedSearchBar } from '@/components/unified/UnifiedSearchBar';
import { FasterCapitalBranding } from '@/components/FasterCapitalBranding';
const Hero = () => {
  const { isAuthenticated } = useUnifiedAuth();
  
  return <div className="relative bg-gradient-to-b from-sos-dark via-[#3D2817] to-[#FF8C00] text-white min-h-screen">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* FasterCapital Badge */}
          <div className="flex justify-center animate-fade-in">
            <FasterCapitalBranding />
          </div>

          {/* Trust-focused Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in">
            Check & Verify Instantly If Secondhand Items Are Safe Or Stolen
            <span className="block mt-3 bg-gradient-to-r from-[#FF8C00] to-[#B8FF2D] bg-clip-text text-transparent">Free Database Search - Verify Any Item in 30 Seconds Before You Buy Or Sell</span>
          </h1>
          
          {/* Trust Value Proposition */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">Don't get scammed on Facebook Marketplace, OfferUp, Craigslist, or eBay.
 Search IMEI, VIN, Serial Numbers Instantly.  </p>

          {/* Professional Search Interface */}
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-white/20 animate-fade-in">
            <div className="flex items-center gap-3 mb-8 px-6 py-4 bg-white/5 rounded-xl border border-white/10">
              <Shield className="h-7 w-7 text-[#FF8C00]" />
              <span className="text-lg font-semibold text-white">Search Database Free - Verify Any Item</span>
            </div>
            <UnifiedSearchBar variant="hero" />
            <div className="mt-6 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-[#B8FF2D]">
                <Shield className="h-4 w-4" />
                <span className="font-medium">Secure & Private</span>
              </div>
              <div className="flex items-center gap-2 text-[#FF8C00]">
                <Search className="h-4 w-4" />
                <span className="font-medium">Instant Results</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="font-medium">No Credit Card</span>
              </div>
            </div>
          </div>
          
          {/* Trust-focused CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white font-semibold px-12 h-14 text-base shadow-2xl">
              <Link to={!isAuthenticated ? '/auth?tab=signup' : '/dashboard'}>
                <Shield className="h-5 w-5 mr-2" />
                Start Verification
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-10 h-14 text-base" asChild>
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FF8C00] mb-2">50M+</div>
              <div className="text-sm font-semibold text-gray-200">Verified Records</div>
              <div className="text-xs text-gray-300 mt-1">Trusted Database</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#B8FF2D] mb-2">99.9%</div>
              <div className="text-sm font-semibold text-gray-200">Accuracy Rate</div>
              <div className="text-xs text-gray-300 mt-1">Industry Leading</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FF8C00] mb-2">&lt;30s</div>
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

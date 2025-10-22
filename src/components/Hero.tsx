import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Search } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { UnifiedSearchBar } from '@/components/unified/UnifiedSearchBar';
import { FasterCapitalBranding } from '@/components/FasterCapitalBranding';
const Hero = () => {
  const {
    isAuthenticated
  } = useUnifiedAuth();
  return <div className="relative bg-gradient-to-b from-black via-[#3D2817] to-[#FF8C00] text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* FasterCapital Badge */}
          <div className="flex justify-center animate-fade-in">
            <FasterCapitalBranding />
          </div>

          {/* Trust-focused Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight animate-fade-in">
            Free Database Search - Verify if Stolen in 30 Seconds
            <span className="block mt-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Check & Verify If Second-hand Item Is Stolen Before You BuyOr Sell. Search IMEI, VIN, Serial Numbers</span>
          </h1>
          
          {/* Trust Value Proposition */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't get scammed on Facebook Marketplace, OfferUp, or eBay. Free database search to check & verify IMEI, VIN, serial numbers instantly. Trusted by 50,000+ safe buyers. 4 free searches included.
          </p>

          {/* Professional Search Interface */}
          <div className="max-w-2xl mx-auto bg-card p-10 rounded-2xl shadow-trust border border-primary/20 animate-fade-in">
            <div className="flex items-center gap-3 mb-8 px-6 py-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20">
              <Shield className="h-7 w-7 text-primary" />
              <span className="text-lg font-semibold text-foreground">Search Database Free - Verify Any Item</span>
            </div>
            <UnifiedSearchBar variant="hero" />
            <div className="mt-6 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-secondary">
                <Shield className="h-4 w-4" />
                <span className="font-medium">Secure & Private</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Search className="h-4 w-4" />
                <span className="font-medium">Instant Results</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="font-medium">No Credit Card</span>
              </div>
            </div>
          </div>
          
          {/* Trust-focused CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="font-semibold px-12 h-14 text-base shadow-trust hover:shadow-lg transition-all">
              <Link to={!isAuthenticated ? '/auth?tab=signup' : '/dashboard'}>
                <Shield className="h-5 w-5 mr-2" />
                Start Verification
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="font-semibold px-10 h-14 text-base border-2 hover:bg-muted/50" asChild>
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">50M+</div>
              <div className="text-sm font-semibold text-muted-foreground">Verified Records</div>
              <div className="text-xs text-muted-foreground mt-1">Trusted Database</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-sm font-semibold text-muted-foreground">Accuracy Rate</div>
              <div className="text-xs text-muted-foreground mt-1">Industry Leading</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">&lt;30s</div>
              <div className="text-sm font-semibold text-muted-foreground">Fast Results</div>
              <div className="text-xs text-muted-foreground mt-1">Instant Verification</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
Hero.displayName = 'Hero';
export default Hero;
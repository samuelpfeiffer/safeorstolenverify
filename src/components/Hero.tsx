import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Search } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { UnifiedSearchBar } from '@/components/unified/UnifiedSearchBar';
import { FasterCapitalBranding } from '@/components/FasterCapitalBranding';
const Hero = () => {
  const navigate = useNavigate();
  const {
    isAuthenticated
  } = useUnifiedAuth();
  const handleGetStarted = () => {
    if (!isAuthenticated) {
      navigate('/auth?tab=signup');
    } else {
      navigate('/dashboard');
    }
  };
  return <div className="relative bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* FasterCapital Badge */}
          <div className="flex justify-center animate-fade-in">
            <FasterCapitalBranding />
          </div>

          {/* Clear, Focused Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight animate-fade-in">
            Check if It's Stolen
            <span className="block mt-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              In 30 Seconds, For Free
            </span>
          </h1>
          
          {/* Simple Value Prop */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Verify guns, phones, cars, laptops, tools before buying. Protect yourself from stolen goods on Facebook Marketplace, OfferUp, Craigslist.
          </p>

          {/* THE ONE SEARCH BAR - Core Focus - Enhanced Visibility */}
          <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border-2 border-primary/40 ring-8 ring-primary/5 animate-fade-in">
            <div className="flex items-center gap-3 mb-8 px-6 py-4 bg-primary/5 rounded-xl border-2 border-primary/30 shadow-inner">
              <Search className="h-7 w-7 text-primary animate-pulse" />
              <span className="text-lg font-bold text-foreground">Enter IMEI, VIN, or Serial Number</span>
            </div>
            <UnifiedSearchBar variant="hero" />
            <p className="text-sm text-center text-muted-foreground mt-6 font-semibold">
              ✓ 4 free checks • No credit card • Instant results
            </p>
          </div>
          
          {/* Simple CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="font-semibold px-10 h-14 text-base shadow-lg" onClick={handleGetStarted}>
              Start Free
            </Button>
            <Button size="lg" variant="outline" className="font-semibold px-10 h-14 text-base" asChild>
              <Link to="/how-it-works">How It Works</Link>
            </Button>
          </div>

          {/* Key Stats - Simple */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-10 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50M+</div>
              <div className="text-sm text-muted-foreground font-medium">Records</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">&lt;30s</div>
              <div className="text-sm text-muted-foreground font-medium">Verification</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.7%</div>
              <div className="text-sm text-muted-foreground font-medium">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
Hero.displayName = 'Hero';
export default Hero;
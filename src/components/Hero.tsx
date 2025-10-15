import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Search } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { UnifiedSearchBar } from '@/components/unified/UnifiedSearchBar';
import { FasterCapitalBranding } from '@/components/FasterCapitalBranding';

const Hero = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useUnifiedAuth();

  const handleGetStarted = () => {
    if (!isAuthenticated) {
      navigate('/auth?tab=signup');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* FasterCapital Badge */}
          <div className="flex justify-center">
            <FasterCapitalBranding />
          </div>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Shield className="h-4 w-4" />
            <span>Trusted by 500K+ Users</span>
          </div>

          {/* Clear, Focused Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Check if It's Stolen
            <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              In 30 Seconds, For Free
            </span>
          </h1>
          
          {/* Simple Value Prop */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Verify phones, cars, laptops, tools before buying. 
            Protect yourself from stolen goods on Facebook Marketplace, OfferUp, Craigslist.
          </p>

          {/* THE ONE SEARCH BAR - Core Focus */}
          <div className="max-w-2xl mx-auto bg-card p-6 rounded-2xl shadow-lg border border-border">
            <div className="flex items-center gap-2 mb-4 text-muted-foreground">
              <Search className="h-5 w-5" />
              <span className="text-sm font-medium">Enter IMEI, VIN, or Serial Number</span>
            </div>
            <UnifiedSearchBar variant="hero" />
            <p className="text-xs text-muted-foreground mt-3">
              ✓ 4 free checks • No credit card • Instant results
            </p>
          </div>
          
          {/* Simple CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="font-semibold px-8"
              onClick={handleGetStarted}
            >
              Start Free
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-semibold px-8"
              asChild
            >
              <Link to="/how-it-works">How It Works</Link>
            </Button>
          </div>

          {/* Key Stats - Simple */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">50M+</div>
              <div className="text-xs text-muted-foreground">Records</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">&lt;30s</div>
              <div className="text-xs text-muted-foreground">Verification</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">99.7%</div>
              <div className="text-xs text-muted-foreground">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.displayName = 'Hero';
export default Hero;

import { HomeSearchFormWithURL } from './HomeSearchFormWithURL';
import { Shield, Clock, CheckCircle } from 'lucide-react';

/**
 * Clean Hero Section - Search First Approach
 * - Question format headline
 * - Immediate search box (no scrolling)
 * - Minimal trust signals
 * - Blue gradient for trust
 */
export const CleanHeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Main Headline - Question Format */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Is This Item Stolen?
          </h1>
          
          {/* Subheadline - Clear value prop */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Find out in 2 seconds. Free instant check for Facebook Marketplace, Craigslist, eBay.
          </p>
          
          {/* Search Box - Primary Action */}
          <div className="pt-4 max-w-2xl mx-auto">
            <HomeSearchFormWithURL />
          </div>
          
          {/* Minimal Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>2 Free Checks</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-secondary" />
              <span>Results in 2 Seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-secondary" />
              <span>100+ Databases</span>
            </div>
          </div>
          
          {/* Live stat - social proof */}
          <p className="text-sm text-muted-foreground/70">
            <span className="font-semibold text-foreground">32,000+</span> verifications this month
          </p>
        </div>
      </div>
    </section>
  );
};

import { HomeSearchFormWithURL } from './HomeSearchFormWithURL';
import { Shield, Clock, CheckCircle, Sparkles } from 'lucide-react';

/**
 * Clean Hero Section - Search First Approach
 * - Question format headline
 * - Immediate search box (no scrolling)
 * - Minimal trust signals
 * - Dynamic gradient background with animations
 */
export const CleanHeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/10" />
      
      {/* Floating orbs for depth */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>Trusted by 32,000+ buyers this month</span>
          </div>
          
          {/* Main Headline - Question Format with gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Is This Item </span>
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Stolen?
            </span>
          </h1>
          
          {/* Subheadline - Clear value prop */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Find out in <span className="font-semibold text-foreground">2 seconds</span>. Free instant check for Facebook Marketplace, Craigslist, eBay.
          </p>
          
          {/* Search Box - Primary Action with glow effect */}
          <div className="pt-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-2xl blur-lg opacity-50" />
              <div className="relative">
                <HomeSearchFormWithURL />
              </div>
            </div>
          </div>
          
          {/* Trust Signals - Enhanced styling */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full border border-border/50">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">2 Free Checks</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full border border-border/50">
              <Clock className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">Results in 2 Seconds</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full border border-border/50">
              <Shield className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">100+ Databases</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

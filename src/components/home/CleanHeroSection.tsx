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
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/15" />
      
      {/* Floating orbs for depth */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/15 border border-primary/30 rounded-full text-sm font-semibold text-primary animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>Trusted by 32,000+ buyers this month</span>
          </div>
          
          {/* Main Headline - LARGE and Bold */}
          <h1 className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-foreground">
              Is This Item
            </span>
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mt-2">
              Stolen?
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Find out in <span className="font-bold text-foreground">2 seconds</span>. Free instant check for Facebook Marketplace, Craigslist, eBay.
          </p>
          
          {/* Search Box */}
          <div className="pt-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 rounded-2xl blur-xl opacity-60" />
              <div className="relative">
                <HomeSearchFormWithURL />
              </div>
            </div>
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2.5 px-5 py-3 bg-background/60 backdrop-blur-sm rounded-full border border-border/50 shadow-lg">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span className="text-sm font-semibold">2 Free Checks</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-3 bg-background/60 backdrop-blur-sm rounded-full border border-border/50 shadow-lg">
              <Clock className="h-5 w-5 text-secondary" />
              <span className="text-sm font-semibold">Results in 2 Seconds</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-3 bg-background/60 backdrop-blur-sm rounded-full border border-border/50 shadow-lg">
              <Shield className="h-5 w-5 text-secondary" />
              <span className="text-sm font-semibold">100+ Databases</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

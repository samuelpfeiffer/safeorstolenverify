import { HomeSearchFormWithURL } from './HomeSearchFormWithURL';
import { CheckCircle } from 'lucide-react';

/**
 * Clean Hero Section - Search First Approach
 * - Clean gradient background
 * - Immediate search box
 * - Minimal trust signals
 */
export const CleanHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 py-24 md:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Is This Item Stolen?{' '}
            <span className="block mt-2">Find Out in 3 Seconds</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Free verification for phones, cars, bikes, laptops, tools.{' '}
            <span className="font-semibold">Used by 5,000+ buyers, sellers, and businesses.</span>
          </p>
          
          {/* Search Box Container */}
          <div className="max-w-xl mx-auto mb-8">
            <HomeSearchFormWithURL />
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>32,000+ items verified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>100+ databases checked</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>Results in 3 seconds</span>
            </div>
          </div>
          
          {/* Fine Print */}
          <p className="text-white/70 text-sm">
            First 2 checks free • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

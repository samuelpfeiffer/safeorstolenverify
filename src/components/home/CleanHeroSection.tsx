import { HomeSearchFormWithURL } from './HomeSearchFormWithURL';
import { CheckCircle } from 'lucide-react';

/**
 * Clean Hero Section - Optimized for LCP
 * - Uses CSS gradient (no image blocking render)
 * - Minimal dependencies, renders immediately
 * - Hero text is the LCP element - must paint fast
 */
export const CleanHeroSection = () => {
  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center py-20 md:py-28"
      style={{
        // Inline critical gradient to avoid CSS parsing delay
        background: 'linear-gradient(135deg, hsl(207 89% 28%) 0%, hsl(207 70% 21%) 100%)',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline - LCP Element - Must render immediately */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            style={{ 
              // Inline critical styles for immediate LCP paint
              textWrap: 'balance',
              fontWeight: 700,
            }}
          >
            Is This Item Stolen?{' '}
            <span className="block mt-2 text-white/95">Find Out in 3 Seconds</span>
          </h1>
          
          {/* Subheadline - Renders with hero */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Free verification for phones, cars, bikes, laptops, tools.{' '}
            <span className="font-semibold">Used by 5,000+ buyers, sellers, and businesses.</span>
          </p>
          
          {/* Search Box Container */}
          <div className="max-w-xl mx-auto mb-8">
            <HomeSearchFormWithURL />
          </div>
          
          {/* Trust Signals - Lightweight, no external dependencies */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-6 text-white/90 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" aria-hidden="true" />
              <span>32,000+ items verified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" aria-hidden="true" />
              <span>100+ databases checked</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" aria-hidden="true" />
              <span>Results in 3 seconds</span>
            </div>
          </div>
          
          {/* Fine Print */}
          <p className="text-white/70 text-sm md:text-base">
            First 2 checks free • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

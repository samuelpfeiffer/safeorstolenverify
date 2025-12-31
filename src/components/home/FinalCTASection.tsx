import { HomeSearchFormWithURL } from './HomeSearchFormWithURL';
import { CheckCircle } from 'lucide-react';

/**
 * Final CTA Section - Second Chance to Convert
 * Same search box as hero, gradient background
 */
export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/80">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Take Chances. Verify First.
          </h2>
          
          <p className="text-lg text-white/90 mb-10">
            Enter any serial number and know if it's stolen in 3 seconds
          </p>
          
          {/* Search Box */}
          <div className="max-w-xl mx-auto mb-8">
            <HomeSearchFormWithURL />
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>First 2 checks free</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>Results in 3 seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

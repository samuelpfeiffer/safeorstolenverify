import { HomeSearchFormWithURL } from './HomeSearchFormWithURL';
import { CheckCircle } from 'lucide-react';

/**
 * Final CTA Section - Second Chance to Convert
 * Same search box as hero
 * Removes friction (free, no card)
 */
export const FinalCTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Check Your Item?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Enter any IMEI, VIN, or serial number and get instant results.
          </p>
          
          {/* Search Box */}
          <div className="max-w-xl mx-auto mb-6">
            <HomeSearchFormWithURL />
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>Free to try</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <span>Instant results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Store, Building2 } from 'lucide-react';

export const AudienceNavigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-sos-dark/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            The Verification Hub for Every User & Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('for-buyers')}
              className="group h-auto p-6 flex flex-col items-center gap-4 border-2 border-sos-lime/20 hover:border-sos-lime hover:bg-sos-lime/10 transition-all duration-300"
            >
              <ShoppingCart className="h-12 w-12 text-sos-lime group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">I'm a Buyer</h3>
                <p className="text-sm text-muted-foreground">eBay • Craigslist • Facebook Marketplace</p>
              </div>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('for-sellers')}
              className="group h-auto p-6 flex flex-col items-center gap-4 border-2 border-sos-orange/20 hover:border-sos-orange hover:bg-sos-orange/10 transition-all duration-300"
            >
              <Store className="h-12 w-12 text-sos-orange group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">I'm a Seller</h3>
                <p className="text-sm text-muted-foreground">Prove legitimacy and sell faster</p>
              </div>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('for-businesses')}
              className="group h-auto p-6 flex flex-col items-center gap-4 border-2 border-blue-500/20 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              <Building2 className="h-12 w-12 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">I'm a Business</h3>
                <p className="text-sm text-muted-foreground">Pawn Shops • Auctions • Law Enforcement</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Store, Building2, RefreshCw } from 'lucide-react';

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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Choose Your Path to Protection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('for-buyers')}
              className="group h-auto p-6 flex flex-col items-center gap-4 border-2 border-sos-lime/20 hover:border-sos-lime hover:bg-sos-lime/10 transition-all duration-300"
            >
              <ShoppingCart className="h-12 w-12 text-sos-lime group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">I Buy Second-Hand</h3>
                <p className="text-sm text-muted-foreground">Consumers, collectors, businesses purchasing inventory</p>
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
                <h3 className="text-lg font-bold text-foreground mb-2">I Sell Second-Hand</h3>
                <p className="text-sm text-muted-foreground">Individuals, resellers, retailers, online sellers</p>
              </div>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('for-handlers')}
              className="group h-auto p-6 flex flex-col items-center gap-4 border-2 border-blue-500/20 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              <Building2 className="h-12 w-12 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">I Handle Second-Hand</h3>
                <p className="text-sm text-muted-foreground">Pawn shops, repair shops, logistics, processors</p>
              </div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('for-traders')}
              className="group h-auto p-6 flex flex-col items-center gap-4 border-2 border-purple-500/20 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
            >
              <RefreshCw className="h-12 w-12 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">I Trade/Exchange</h3>
                <p className="text-sm text-muted-foreground">Collectors, enthusiasts, barter systems</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
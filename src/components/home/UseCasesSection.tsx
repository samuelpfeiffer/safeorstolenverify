import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Briefcase, Building2, Check } from 'lucide-react';

/**
 * Use Cases Section - 3 Visual Cards
 * Buyers, Resellers, Businesses - all visible (no tabs)
 */

const useCases = [
  {
    icon: ShoppingCart,
    badge: null,
    stat: '4,200 this month',
    title: 'Smart Buyers',
    scenario: '"I\'m buying a used iPhone on Facebook Marketplace for $400. Is it stolen?"',
    benefits: [
      'Check before meeting seller',
      'Avoid legal trouble',
      'Mobile app with camera scanning',
    ],
    price: 'First 2 free, then $2.99/check',
  },
  {
    icon: Briefcase,
    badge: 'Most Popular',
    stat: '950 this month',
    title: 'Resellers & Flippers',
    scenario: '"I buy phones to resell on eBay. I need to verify 100+ items per month."',
    benefits: [
      'Bulk CSV upload',
      'Prove items are legitimate',
      'API access available',
    ],
    price: '$19.99/month, 50 checks included',
    featured: true,
  },
  {
    icon: Building2,
    badge: null,
    stat: '480 businesses',
    title: 'Pawn Shops & Dealers',
    scenario: '"State law requires us to check all items. We need API integration with our POS."',
    benefits: [
      'Unlimited verifications',
      'POS system integration',
      'Multi-location support',
    ],
    price: 'Custom enterprise pricing',
  },
];

export const UseCasesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who's Using SafeOrStolen Right Now
            </h2>
          </div>

          {/* Grid - All 3 visible */}
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <Card 
                key={useCase.title} 
                className={`relative border-2 ${
                  useCase.featured 
                    ? 'border-primary border-[3px]' 
                    : 'border-border'
                } hover:border-primary transition-all hover:-translate-y-1 hover:shadow-lg`}
              >
                {/* Popular Badge */}
                {useCase.badge && (
                  <div className="absolute -top-3.5 right-6 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase">
                    {useCase.badge}
                  </div>
                )}
                
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <useCase.icon className="h-9 w-9 text-primary" />
                    <span className="text-sm font-semibold text-primary">
                      {useCase.stat}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4">
                    {useCase.title}
                  </h3>
                  
                  {/* Scenario Quote */}
                  <div className="bg-muted/50 border-l-4 border-primary p-4 rounded mb-6">
                    <p className="text-muted-foreground italic text-sm leading-relaxed">
                      {useCase.scenario}
                    </p>
                  </div>
                  
                  {/* Benefits */}
                  <ul className="space-y-3 mb-6">
                    {useCase.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Price */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary">
                      {useCase.price}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

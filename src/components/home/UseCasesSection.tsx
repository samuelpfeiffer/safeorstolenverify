import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, RefreshCw, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Use Cases Section - All Visible (No Tabs!)
 * 3 cards for buyers, resellers, businesses
 * Scenario quotes + real user counts
 */

const useCases = [
  {
    icon: ShoppingCart,
    title: 'For Buyers',
    scenario: '"I\'m buying an iPhone on Facebook Marketplace. Is it stolen?"',
    description: 'Check any item before meeting up. Avoid buying stolen goods, losing money, and legal trouble.',
    benefits: [
      'Verify IMEI/VIN/serial in seconds',
      'Scan marketplace listings directly',
      'Use mobile app at meetups',
    ],
    stat: '4,200',
    statLabel: 'buyers this month',
    cta: 'Check an Item',
    link: '/verify',
    color: 'primary',
  },
  {
    icon: RefreshCw,
    title: 'For Resellers',
    scenario: '"I flip phones and electronics. I need to verify before I buy inventory."',
    description: 'Protect your business. Verify items before purchasing to avoid buying stolen merchandise.',
    benefits: [
      'Bulk verification for inventory',
      'Proof of verification for buyers',
      'Reduce return/dispute rates',
    ],
    stat: '1,800',
    statLabel: 'resellers this month',
    cta: 'Start Verifying',
    link: '/for-resellers',
    color: 'secondary',
  },
  {
    icon: Building2,
    title: 'For Businesses',
    scenario: '"Our pawn shop needs to verify 50+ items per day."',
    description: 'API access and bulk verification for pawn shops, dealerships, and retailers.',
    benefits: [
      'API integration',
      'Compliance documentation',
      'Volume discounts',
    ],
    stat: '340',
    statLabel: 'businesses this month',
    cta: 'Business Plans',
    link: '/for-businesses',
    color: 'accent',
  },
];

export const UseCasesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who Uses SafeOrStolen?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're buying one phone or running a business, we help you verify before you buy
            </p>
          </div>

          {/* Cards - All Visible */}
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="h-full border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-${useCase.color}/10`}>
                      <useCase.icon className={`h-6 w-6 text-${useCase.color}`} />
                    </div>
                    <h3 className="font-bold text-xl">{useCase.title}</h3>
                  </div>

                  {/* Scenario Quote */}
                  <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary/30 pl-3 mb-4">
                    {useCase.scenario}
                  </blockquote>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">
                    {useCase.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {useCase.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stat */}
                  <p className="text-xs text-muted-foreground/70 mb-4">
                    <span className="font-semibold text-foreground">{useCase.stat}</span> {useCase.statLabel}
                  </p>

                  {/* CTA */}
                  <Button asChild variant={useCase.color === 'primary' ? 'default' : 'outline'} className="w-full">
                    <Link to={useCase.link}>
                      {useCase.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { useState } from 'react';
import { ShoppingCart, Briefcase, Building2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

/**
 * Who Uses SafeOrStolen Section - Tabbed Interface
 * 3 audience tabs: Buyers, Resellers, Businesses
 * Each with scenario, benefits, pricing, and testimonial
 */

type TabId = 'buyers' | 'resellers' | 'businesses';

const tabs = [
  {
    id: 'buyers' as TabId,
    icon: '🛒',
    label: 'Smart Buyers',
    count: '28,000+ users',
  },
  {
    id: 'resellers' as TabId,
    icon: '💼',
    label: 'Resellers',
    count: '3,200+ users',
  },
  {
    id: 'businesses' as TabId,
    icon: '🏢',
    label: 'Businesses',
    count: '800+ companies',
  },
];

const tabContent = {
  buyers: {
    title: 'Buying Your First Used Phone? Checking a Car Before Purchase?',
    scenario: `"I'm buying a used iPhone 14 Pro on Facebook Marketplace for $600. The seller has good reviews and the phone looks mint in photos. But is it stolen?"`,
    benefits: [
      {
        title: 'Check before meeting seller',
        description: 'Ask for IMEI/VIN, verify in 3 seconds, avoid wasted time',
      },
      {
        title: 'Avoid legal trouble',
        description: 'Buying stolen property (even unknowingly) is illegal in all states',
      },
      {
        title: 'Mobile app with camera scanning',
        description: 'Scan serial numbers while browsing marketplaces',
      },
    ],
    price: 'First 2 checks free, then $2.99/check',
    cta: 'Start Checking - Free',
    ctaLink: '/verify',
    testimonial: {
      quote: 'Saved me $600! Checked the IMEI and it was stolen. Seller got arrested.',
      author: 'Sarah M., Phoenix',
    },
  },
  resellers: {
    title: 'Buying Items to Resell on eBay? Flipping for Profit?',
    scenario: `"I flip phones and laptops on eBay. I need to verify 50-100 items per month and prove to buyers they're legitimate."`,
    benefits: [
      {
        title: 'Bulk CSV upload',
        description: 'Upload 100 IMEIs at once, get results in seconds',
      },
      {
        title: 'Prove items are legitimate',
        description: 'Show buyers verification certificates, close sales faster',
      },
      {
        title: 'API access available',
        description: 'Integrate with your inventory management system',
      },
    ],
    price: '$19.99/month - 50 checks included ($0.40 each after)',
    cta: 'Start Plan',
    ctaLink: '/pricing',
    testimonial: null,
  },
  businesses: {
    title: 'Running a Pawn Shop? Operating a Dealership?',
    scenario: `"State law requires us to check all items against stolen databases. We need unlimited verifications with POS integration."`,
    benefits: [
      {
        title: 'Unlimited verifications',
        description: 'No per-check fees, verify as many items as needed',
      },
      {
        title: 'POS system integration',
        description: 'Direct integration with Lightspeed, Vend, Square, Clover',
      },
      {
        title: 'Multi-location support',
        description: 'Manage 10 stores from one dashboard, unified reporting',
      },
    ],
    price: 'Custom enterprise pricing',
    cta: 'Contact Sales',
    ctaLink: '/contact',
    testimonial: null,
  },
};

export const WhoUsesSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>('buyers');
  const content = tabContent[activeTab];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-muted/30 via-muted/50 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 text-foreground">
              Anyone Shopping Second-Hand Globally
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From individual buyers to enterprise businesses - we serve the entire 
              second-hand economy. If you're buying or selling used items anywhere 
              in the world, you need SafeOrStolen.
            </p>
          </div>

          {/* Tabbed Interface */}
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
            {/* Tab Navigation */}
            <div className="flex border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-6 md:py-8 px-4 flex flex-col items-center gap-2 transition-all relative
                    ${activeTab === tab.id 
                      ? 'bg-gradient-to-b from-transparent to-primary/5' 
                      : 'hover:bg-muted/50'
                    }`}
                >
                  {/* Active indicator */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-primary transition-transform origin-center
                      ${activeTab === tab.id ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                  
                  <span className="text-3xl md:text-4xl">{tab.icon}</span>
                  <span className="text-sm md:text-lg font-semibold text-foreground">
                    {tab.label}
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 md:p-12">
              <div 
                key={activeTab}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center animate-fade-in"
              >
                {/* Left Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {content.title}
                  </h3>
                  
                  {/* Scenario Quote */}
                  <div className="bg-muted/50 border-l-4 border-primary p-5 rounded-lg mb-8">
                    <p className="text-muted-foreground italic text-base leading-relaxed">
                      {content.scenario}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-5 mb-8">
                    {content.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-secondary-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{benefit.title}</p>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Box */}
                  <div className="bg-gradient-to-r from-primary to-primary/90 p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-primary-foreground font-semibold text-lg">
                      {content.price}
                    </p>
                    <Button 
                      asChild
                      variant={activeTab === 'resellers' ? 'secondary' : 'default'}
                      className={activeTab === 'resellers' 
                        ? 'bg-white text-primary hover:bg-white/90' 
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                      }
                    >
                      <Link to={content.ctaLink}>{content.cta}</Link>
                    </Button>
                  </div>
                </div>

                {/* Right - Image/Testimonial */}
                <div className="relative">
                  {/* Placeholder visual - could be replaced with actual images */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 rounded-2xl flex items-center justify-center border border-border">
                    <div className="text-center p-8">
                      <span className="text-6xl md:text-8xl block mb-4">
                        {tabs.find(t => t.id === activeTab)?.icon}
                      </span>
                      <p className="text-muted-foreground font-medium">
                        {tabs.find(t => t.id === activeTab)?.count}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Overlay (only for buyers) */}
                  {content.testimonial && (
                    <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-border">
                      <p className="text-foreground font-medium text-sm leading-relaxed mb-2">
                        "{content.testimonial.quote}"
                      </p>
                      <cite className="text-muted-foreground text-sm not-italic">
                        — {content.testimonial.author}
                      </cite>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

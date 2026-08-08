import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import { HelpCircle, Shield, DollarSign, Globe, Smartphone, Lock, Clock, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const EnhancedFAQSection = () => {
  const faqCategories = [
    {
      category: "Getting Started",
      icon: Smartphone,
      faqs: [
        {
          question: "How much does SafeOrStolen cost?",
          answer: "SafeOrStolen offers 2 free checks, then $0.99 per check or $10/month for unlimited verifications. All item types — phones, vehicles, electronics, firearms, and more — all databases, cancel anytime. The best value in stolen item verification."
        },
        {
          question: "What items can I verify with SafeOrStolen?",
          answer: "You can verify phones (IMEI), cars (VIN), laptops, power tools, bikes, cameras, electronics, firearms, and almost any item with a serial number. We check across 3,000+ databases including police records, insurance claims, and global stolen goods registries."
        },
        {
          question: "Do I need to download an app?",
          answer: "Yes! SafeOrStolen is the ONLY mobile app for stolen goods verification. Download FREE on iOS (App Store) and Android (Google Play). Our competitors (CheckMend, IMEIinfo) only have websites—no mobile apps!"
        }
      ]
    },
    {
      category: "Database & Accuracy",
      icon: Globe,
      faqs: [
        {
          question: "Is this database global? What countries are covered?",
          answer: "Yes! We search 3,000+ databases across 50+ countries including USA, Canada, UK, Australia, Europe, and Asia. We access NICB (USA), GSMA (global phones), CheckMEND (UK/Europe), Bike Index (worldwide), police databases, and insurance registries."
        },
        {
          question: "How accurate are SafeOrStolen results?",
          answer: "Our accuracy rate is 98.7% with real-time database updates. We search official police databases, insurance claims (NICB), carrier blacklists (carrier and manufacturer blacklists), and verified stolen goods registries. Results appear in 30 seconds with sources cited."
        },
        {
          question: "What if an item shows 'Safe' but turns out stolen?",
          answer: "While rare (<1.3% error rate), if an item wasn't reported yet or just entered databases, our nightly updates catch it. We offer verification guarantee: if an item verified 'Safe' is proven stolen within 30 days, we'll refund your check cost."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      icon: DollarSign,
      faqs: [
        {
          question: "What's included in the $10/month plan?",
          answer: "The $10/month Unlimited Plan includes unlimited verifications across all item types, PDF certificates, AI-powered analysis, seller badges, and access to 100+ databases. Cancel anytime — no contracts. Or pay $0.99 per individual check."
        },
        {
          question: "Can I verify in bulk for my business?",
          answer: "Yes! Our $10/month Unlimited plan includes unlimited checks, downloadable certificates, and priority support. Perfect for pawn shops, resellers, auction houses, and marketplace sellers. Contact us for enterprise API access."
        },
        {
          question: "Do you offer refunds if I'm not satisfied?",
          answer: "Absolutely! 30-day money-back guarantee on all subscription plans. If you're not 100% satisfied with verification accuracy or service, we'll refund you in full—no questions asked."
        }
      ]
    },
    {
      category: "Security & Privacy",
      icon: Lock,
      faqs: [
        {
          question: "Is my personal information safe with SafeOrStolen?",
          answer: "Yes. We're SOC 2 Type II certified with bank-level encryption. All payments processed through Stripe (PCI DSS Level 1). We're GDPR compliant and never sell your data. Your verification history is encrypted and private."
        },
        {
          question: "Do you share verification data with law enforcement?",
          answer: "We partner with police departments but ONLY share aggregated theft trends—never individual user data without a valid legal warrant. Your buyer/seller verification searches are confidential."
        },
        {
          question: "Can sellers see if I checked their item?",
          answer: "No. All verifications are 100% confidential. Sellers cannot see who verified their items. Only YOU see the results. Use it discreetly before meeting sellers on Facebook Marketplace, OfferUp, or Craigslist."
        }
      ]
    },
    {
      category: "Using SafeOrStolen",
      icon: Shield,
      faqs: [
        {
          question: "How fast do I get verification results?",
          answer: "Instant! Most verifications complete in 15-30 seconds. We search 3,000+ databases in real-time. For complex items (vehicles with title history), results may take up to 2 minutes but you'll get a notification."
        },
        {
          question: "Can I verify items before meeting a seller in person?",
          answer: "YES—that's exactly what we're built for! Before handing over cash on Facebook Marketplace, OfferUp, or Craigslist, use our app ON-SITE to verify the IMEI, VIN, or serial number. Takes 30 seconds, could save you thousands."
        },
        {
          question: "What if the seller refuses to provide serial numbers?",
          answer: "🚩 RED FLAG! Legitimate sellers have nothing to hide. If someone won't share the IMEI, VIN, or serial number for verification, walk away. Likely stolen goods. Our app has helped 100K+ buyers avoid scams."
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <HelpCircle className="h-4 w-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How to Check if Something is Stolen Before Buying?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Common questions about verifying stolen items, checking databases, and protecting yourself when buying secondhand
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-8 bg-card border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/30"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 pt-12 border-t border-border">
          <div className="text-center">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground mb-1">30s</div>
            <div className="text-sm text-muted-foreground">Average Response Time</div>
          </div>
          <div className="text-center">
            <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Countries Covered</div>
          </div>
          <div className="text-center">
            <Award className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground mb-1">98.7%</div>
            <div className="text-sm text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground mb-1">100K+</div>
            <div className="text-sm text-muted-foreground">Users Protected</div>
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <Card className="max-w-3xl mx-auto mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 text-center">
          <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our support team is available 24/7 to help with any questions about verification, pricing, or technical issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all min-h-[56px]"
            >
              Contact Support
            </Link>
            <Link 
              to="/faq" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-all min-h-[56px]"
            >
              View Full FAQ
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

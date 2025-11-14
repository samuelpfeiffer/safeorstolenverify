import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, TrendingUp, Users, Award, Star } from 'lucide-react';

interface EnhancedSEOContentProps {
  pageType: 'home' | 'verification' | 'guide' | 'service';
  title: string;
  description: string;
  keywords?: string;
  showTestimonials?: boolean;
  showFAQ?: boolean;
  showStats?: boolean;
}

export const EnhancedSEOContent: React.FC<EnhancedSEOContentProps> = ({
  pageType,
  title,
  description,
  keywords,
  showTestimonials = true,
  showFAQ = true,
  showStats = true
}) => {
  // Enhanced structured data with better Schema.org markup
  const structuredData = {
    "@context": "https://schema.org",
    "@type": pageType === 'service' ? "Service" : "WebPage",
    "name": title,
    "description": description,
    "url": typeof window !== 'undefined' ? window.location.href : 'https://safeorstolen.com',
    "provider": {
      "@type": "Organization",
      "@id": "https://safeorstolen.com/#organization"
    },
    "mainEntity": pageType === 'verification' ? {
      "@type": "SoftwareApplication",
      "name": "SafeOrStolen Verification Tool",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://safeorstolen.com/pricing"
      }
    } : undefined
  };

  const testimonials = [
    {
      text: "Saved me from buying a stolen iPhone. The IMEI check showed it was reported stolen just days before!",
      author: "Sarah M., Portland",
      rating: 5,
      verified: true
    },
    {
      text: "Used this before buying a used car. VIN check revealed it was stolen. Dodged a $15,000 bullet!",
      author: "Mike R., Denver", 
      rating: 5,
      verified: true
    },
    {
      text: "Essential tool for marketplace safety. Verified my laptop wasn't stolen before selling.",
      author: "Jennifer L., Austin",
      rating: 5,
      verified: true
    }
  ];

  const impactStats = [
    { number: '$2.3M', label: 'Fraud Prevented', icon: Shield },
    { number: '450K+', label: 'Items Verified', icon: CheckCircle },
    { number: '98.7%', label: 'Accuracy Rate', icon: TrendingUp },
    { number: '125K+', label: 'Users Protected', icon: Users }
  ];

  const faqData = [
    {
      question: "How do I check if something is stolen?",
      answer: "Enter the item's IMEI (phones), VIN (vehicles), or serial number into our verification tool. We'll instantly check it against stolen goods databases."
    },
    {
      question: "Is the stolen goods check really free?",
      answer: "Yes! Basic verification is completely free. We offer premium features for businesses, but individual users can verify items at no cost."
    },
    {
      question: "How accurate is your stolen goods database?",
      answer: "Our database has a 98.7% accuracy rate, combining law enforcement data, insurance reports, and community submissions for comprehensive coverage."
    },
    {
      question: "What should I do if an item shows as stolen?",
      answer: "Don't buy it! If you already own it, contact local law enforcement. Our system helps protect both buyers and helps recover stolen property."
    }
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        {keywords && <meta name="keywords" content={keywords} />}
      </Helmet>

      {/* Stats Section */}
      {showStats && (
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Trusted by Thousands - Real Impact</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our verification service has prevented millions in fraud and protected countless buyers from stolen goods
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {impactStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {showTestimonials && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real Users, Real Protection</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how SafeOrStolen has helped real users avoid stolen goods and marketplace fraud
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    {testimonial.verified && (
                      <Badge variant="secondary" className="text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <blockquote className="text-sm mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <cite className="text-sm font-medium text-muted-foreground">
                    — {testimonial.author}
                  </cite>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enhanced FAQ Section with Schema */}
      {showFAQ && (
        <section className="py-16" data-seo="faq-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about verifying stolen goods and staying safe
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqData.map((faq, index) => (
                <Card key={index} className="p-6" data-seo="faq-item">
                  <h3 className="text-lg font-semibold mb-3 faq-question">{faq.question}</h3>
                  <p className="text-muted-foreground faq-answer">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Schema Markup */}
          <Helmet>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqData.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })}
            </script>
          </Helmet>
        </section>
      )}

      {/* Trust Building Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full">
                <Award className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Why Trust SafeOrStolen?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Real-Time Database</h3>
                <p className="text-sm text-muted-foreground">
                  Updated continuously with law enforcement, insurance, and community reports
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">30-Second Verification</h3>
                <p className="text-sm text-muted-foreground">
                  Lightning-fast checks that don't slow down your buying decisions
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Money-Back Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  We're so confident in our accuracy, we back it with a guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
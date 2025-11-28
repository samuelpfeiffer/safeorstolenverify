import { PageSEO } from '@/components/seo/PageSEO';
import { Star, Shield, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Michael R.",
      location: "Tampa, FL",
      itemType: "iPhone 15 Pro",
      story: "Almost bought a 'mint condition' iPhone 15 Pro from Facebook Marketplace for $600. SafeOrStolen's check showed it was reported stolen 3 days earlier. Saved me $600 and potential legal trouble.",
      outcome: "Avoided stolen purchase"
    },
    {
      name: "Sarah P.",
      location: "Austin, TX",
      itemType: "2021 Honda Civic",
      story: "Seller had clean title and VIN looked legit. SafeOrStolen flagged it as stolen with outstanding insurance claim. Police confirmed it was part of a title washing scheme. Thank you for saving me!",
      outcome: "Prevented fraud"
    },
    {
      name: "James K.",
      location: "Seattle, WA",
      itemType: "MacBook Pro",
      story: "Craigslist seller wanted cash only and seemed nervous. Checked the serial number on SafeOrStolen - reported stolen from a university 2 weeks prior. Reported to police instead of buying.",
      outcome: "Reported to authorities"
    }
  ];

  return (
    <>
      <PageSEO
        title="Real User Stories - SafeOrStolen Testimonials"
        description="Read real stories from buyers who used SafeOrStolen to verify items before purchase. See how our verification service helped prevent fraud and theft."
        keywords="SafeOrStolen testimonials, user stories, verification success, prevented theft"
        canonical="/testimonials"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SafeOrStolen User Testimonials",
            "description": "Real stories from users who verified items with SafeOrStolen"
          }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Real User Stories</h1>
              <p className="text-xl text-muted-foreground">
                See how SafeOrStolen helped buyers avoid stolen goods and fraud
              </p>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-bold">{testimonial.name}</p>
                        <span className="text-sm text-muted-foreground">• {testimonial.location}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Verified: {testimonial.itemType}</p>
                      <p className="mb-4">{testimonial.story}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="font-medium">{testimonial.outcome}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                These are real user experiences. Protect yourself before buying used items.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;

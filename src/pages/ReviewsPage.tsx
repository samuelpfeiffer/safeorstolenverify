import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ExternalLink, Quote, Shield, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';

const ReviewsPage = () => {
  const testimonials = [
    {
      name: "Kalighta R.",
      role: "Pawn Shop Owner",
      date: "October 2025",
      rating: 5,
      text: "I was really surprised at how easy this app was to use, and the results really are instant. I am part owner of a little pawn shop, so after discovering this app, I have to call it my absolute favorite. It makes my job a thousand times easier!",
      verified: true
    },
    {
      name: "Anonymous",
      role: "Car Buyer",
      date: "October 2025",
      rating: 5,
      text: "This app is sweet! I love it! I buy cars constantly from online marketplaces and I use this app to make sure I'm not buying a stolen vehicle. It's definitely saved my ass a few times. And it works so fast I can be stealth about checking the car in front of the seller.",
      verified: true
    },
    {
      name: "Anonymous",
      role: "Appliance Buyer",
      date: "October 2025",
      rating: 5,
      text: "I actually used SafeOrStolen before I bought high end appliances from OfferUp. My friend had the app on his phone and told me to run the serial numbers through app... and it told me the Wolf appliances were not legit! With all the scams out there, this app helps you make transactions confidently.",
      verified: true
    },
    {
      name: "Carrie A.",
      role: "Jewelry Buyer",
      date: "October 2025",
      rating: 5,
      text: "They were very helpful with some rings I was thinking about buying. They made my mind at ease knowing I was buying something that was not stolen.",
      verified: true
    }
  ];

  const stats = [
    { value: "4.1", label: "Trustpilot Rating", icon: Star },
    { value: "5,000+", label: "Verifications", icon: Shield },
    { value: "100+", label: "Database Sources", icon: CheckCircle }
  ];

  return (
    <>
      <PageSEO
        title="Customer Reviews & Testimonials | SafeOrStolen"
        description="Read what customers say about SafeOrStolen. Real reviews from pawn shops, car buyers, and marketplace users. 4.1-star Trustpilot rating."
        keywords="SafeOrStolen reviews, testimonials, customer feedback, Trustpilot reviews, pawn shop reviews, IMEI checker reviews"
        canonical="/reviews"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "SafeOrStolen",
          "description": "Stolen item verification service with mobile app",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.1",
            "reviewCount": "5",
            "bestRating": "5"
          }
        }}
      />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'Reviews', href: '/reviews' }]} />
        </div>

        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4">
              <Star className="h-4 w-4 mr-2 fill-yellow-500 text-yellow-500" />
              Verified Reviews
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Users Say
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Real reviews from real customers - pawn shops, car buyers, and marketplace users trust SafeOrStolen
            </p>
            
            {/* Trustpilot Badge */}
            <div className="inline-flex items-center gap-3 bg-card border rounded-xl px-6 py-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-6 w-6 ${i < 4 ? 'fill-green-500 text-green-500' : 'fill-green-300 text-green-300'}`} />
                ))}
              </div>
              <div className="text-left">
                <p className="font-bold">4.1 out of 5</p>
                <p className="text-sm text-muted-foreground">Based on Trustpilot reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardContent className="pt-6">
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                    
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg mb-4 italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                        {testimonial.verified && (
                          <Badge variant="secondary" className="text-xs mt-1">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trustpilot Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">See All Reviews on Trustpilot</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We're proud of our customer feedback. Check out all our reviews on Trustpilot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a 
                  href="https://www.trustpilot.com/review/safeorstolen.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Read All Reviews
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://www.trustpilot.com/evaluate/safeorstolen.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Star className="h-4 w-4" />
                  Leave a Review
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Try SafeOrStolen Free</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of satisfied users. Get 2 free searches - no credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/verify">
                  <Shield className="mr-2 h-5 w-5" />
                  Start Free Verification
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/app">
                  Download App
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ReviewsPage;

import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ExternalLink, Quote, ShoppingBag, Car, Store, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReviewsPage = () => {
  const testimonials = [
    {
      quote: "I was really surprised at how easy this app was to use, and the results really are instant. I am part owner of a little pawn shop, so after discovering this app, I have to call it my absolute favorite. It makes my job a thousand times easier!",
      author: "Pawn Shop Owner",
      icon: Store,
      rating: 5
    },
    {
      quote: "This app is sweet! I love it! I buy cars constantly from online marketplaces and I use this app to make sure I'm not buying a stolen vehicle. It's definitely saved my ass a few times. And it works so fast I can be stealth about checking the car in front of the seller.",
      author: "Car Buyer",
      icon: Car,
      rating: 5
    },
    {
      quote: "I actually used SafeOrStolen before I bought high end appliances from OfferUp. My friend had the app on his phone and told me to run the serial numbers through app... and it told me the Wolf appliances were not legit! With all the scams out there, this app helps you make transactions confidently.",
      author: "Appliance Buyer",
      icon: ShoppingBag,
      rating: 5
    },
    {
      quote: "They were very helpful with some rings I was thinking about buying. They made my mind at ease knowing I was buying something that was not stolen.",
      author: "Jewelry Buyer",
      icon: Gem,
      rating: 5
    }
  ];

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Customer Reviews & Testimonials",
    "description": "Read what customers say about SafeOrStolen. Real reviews from pawn shops, car buyers, and marketplace users.",
    "mainEntity": {
      "@type": "Product",
      "name": "SafeOrStolen",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": testimonials.length.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": testimonials.map(t => ({
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": t.rating.toString()
        },
        "author": {
          "@type": "Person",
          "name": t.author
        },
        "reviewBody": t.quote
      }))
    }
  };

  return (
    <>
      <PageSEO
        title="Customer Reviews & Testimonials | SafeOrStolen"
        description="Read what customers say about SafeOrStolen. Real reviews from pawn shops, car buyers, and marketplace users."
        keywords="SafeOrStolen reviews, customer testimonials, stolen item checker reviews, pawn shop verification reviews"
        canonical="/reviews"
        structuredData={pageSchema}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                5-Star Reviews
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                What Our Users Say
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Real reviews from real customers protecting themselves from stolen goods
              </p>

              {/* Trustpilot Rating */}
              <div className="inline-flex items-center gap-2 bg-muted/50 px-6 py-3 rounded-lg">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-green-500 text-green-500" />
                  ))}
                </div>
                <span className="font-semibold">5.0 on Trustpilot</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="relative">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <testimonial.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className={`h-4 w-4 ${star <= testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <blockquote className="text-muted-foreground italic">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trustpilot Link */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">See More Reviews</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Read all our reviews on Trustpilot and see why customers trust SafeOrStolen
              </p>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://www.trustpilot.com/review/safeorstolen.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Read Reviews on Trustpilot
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Try SafeOrStolen Free</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of satisfied customers. Get 2 free verifications today.
              </p>
              <Button size="lg" asChild>
                <Link to="/verify">Try SafeOrStolen Free</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReviewsPage;

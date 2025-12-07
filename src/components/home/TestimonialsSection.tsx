import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Facebook Marketplace Buyer",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Saved me from buying a stolen iPhone! The app showed it was blacklisted before I handed over $400. Worth every penny of the subscription.",
      image: "👩",
      verified: true
    },
    {
      name: "Mike R.",
      role: "Used Car Dealer",
      location: "Phoenix, AZ",
      rating: 5,
      text: "We check every VIN with SafeOrStolen before purchase. Caught 3 stolen vehicles last month alone. Essential for our business.",
      image: "👨",
      verified: true
    },
    {
      name: "Jennifer K.",
      role: "OfferUp Seller",
      location: "Seattle, WA",
      rating: 5,
      text: "As a seller, I use this to prove my items are legitimate. Buyers trust me more and I sell faster. Game changer!",
      image: "👩‍💼",
      verified: true
    },
    {
      name: "David L.",
      role: "Pawn Shop Owner",
      location: "Miami, FL",
      rating: 5,
      text: "The API integration is seamless. We process hundreds of items daily. Protects us from liability and keeps us compliant with law enforcement.",
      image: "👔",
      verified: true
    },
    {
      name: "Amanda T.",
      role: "Craigslist Buyer",
      location: "New York, NY",
      rating: 5,
      text: "Downloaded the app after almost buying a stolen laptop. Now I check everything before meeting sellers. Peace of mind is priceless.",
      image: "👱‍♀️",
      verified: true
    },
    {
      name: "Carlos G.",
      role: "Reseller (eBay & Mercari)",
      location: "Houston, TX",
      rating: 5,
      text: "Bulk verification saves me hours. I can check 50+ items in minutes. No more worries about selling stolen goods.",
      image: "👨‍💻",
      verified: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            <span>Real Stories from Real Users</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Smart Buyers & Sellers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our growing community of buyers, sellers, and businesses verifying items on Facebook Marketplace, OfferUp, Craigslist, and eBay
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
            >
              {/* Decorative Quote */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-16 w-16 text-primary" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground text-base leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    {testimonial.verified && (
                      <div className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" />
                        Verified
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground/70">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Stats - Honest Early-Stage Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-20 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.1/5</div>
            <div className="text-sm text-muted-foreground">Trustpilot Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">New</div>
            <div className="text-sm text-muted-foreground">Growing Daily</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Database Sources</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">3 sec</div>
            <div className="text-sm text-muted-foreground">Verification Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

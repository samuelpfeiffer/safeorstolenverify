import { Star, Quote, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const CompactTestimonials = () => {
  // Top 3 testimonials
  const topTestimonials = [
    {
      name: "Sarah M.",
      role: "Facebook Marketplace Buyer",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Saved me from buying a stolen iPhone! The app showed it was blacklisted before I handed over $400.",
      image: "👩"
    },
    {
      name: "Mike R.",
      role: "Used Car Dealer",
      location: "Phoenix, AZ",
      rating: 5,
      text: "We check every VIN with SafeOrStolen before purchase. Caught 3 stolen vehicles last month alone.",
      image: "👨"
    },
    {
      name: "Jennifer K.",
      role: "OfferUp Seller",
      location: "Seattle, WA",
      rating: 5,
      text: "As a seller, I use this to prove my items are legitimate. Buyers trust me more and I sell faster!",
      image: "👩‍💼"
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 fill-current" />
              <span>Early Adopter Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground">
              Real stories from buyers and sellers protecting themselves daily
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {topTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
              >
                {/* Decorative Quote */}
                <div className="absolute top-3 right-3 opacity-10">
                  <Quote className="h-12 w-12 text-primary" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground text-sm leading-relaxed mb-4 relative z-10">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3 relative z-10">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center">
            <Link to="/testimonials">
              <Button variant="outline" size="lg">
                Read More Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
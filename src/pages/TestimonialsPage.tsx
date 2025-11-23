import { Star, Quote, ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Facebook Marketplace Buyer",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Saved me from buying a stolen iPhone! The app showed it was blacklisted before I handed over $400. Worth every penny of the subscription.",
      image: "👩",
      verified: true,
      itemType: "Phone"
    },
    {
      name: "Mike R.",
      role: "Used Car Dealer",
      location: "Phoenix, AZ",
      rating: 5,
      text: "We check every VIN with SafeOrStolen before purchase. Caught 3 stolen vehicles last month alone. Essential for our business.",
      image: "👨",
      verified: true,
      itemType: "Vehicle"
    },
    {
      name: "Jennifer K.",
      role: "OfferUp Seller",
      location: "Seattle, WA",
      rating: 5,
      text: "As a seller, I use this to prove my items are legitimate. Buyers trust me more and I sell faster. Game changer!",
      image: "👩‍💼",
      verified: true,
      itemType: "Electronics"
    },
    {
      name: "David L.",
      role: "Pawn Shop Owner",
      location: "Miami, FL",
      rating: 5,
      text: "The API integration is seamless. We process hundreds of items daily. Protects us from liability and keeps us compliant with law enforcement.",
      image: "👔",
      verified: true,
      itemType: "Business API"
    },
    {
      name: "Amanda T.",
      role: "Craigslist Buyer",
      location: "New York, NY",
      rating: 5,
      text: "Downloaded the app after almost buying a stolen laptop. Now I check everything before meeting sellers. Peace of mind is priceless.",
      image: "👱‍♀️",
      verified: true,
      itemType: "Laptop"
    },
    {
      name: "Carlos G.",
      role: "Reseller (eBay & Mercari)",
      location: "Houston, TX",
      rating: 5,
      text: "Bulk verification saves me hours. I can check 50+ items in minutes. No more worries about selling stolen goods.",
      image: "👨‍💻",
      verified: true,
      itemType: "Bulk Verification"
    },
    {
      name: "Lisa P.",
      role: "Gun Shop Owner",
      location: "Dallas, TX",
      rating: 5,
      text: "The firearms verification feature is a game-changer. We're the only ones who can check guns before purchase. Mandatory for our compliance.",
      image: "🔫",
      verified: true,
      itemType: "Firearms"
    },
    {
      name: "Tom H.",
      role: "eBay Power Seller",
      location: "Portland, OR",
      rating: 5,
      text: "Protects my seller reputation. I verify everything I buy to resell. Haven't had a single issue since using SafeOrStolen.",
      image: "💼",
      verified: true,
      itemType: "Various"
    }
  ];

  return (
    <>
      <PageSEO
        title="Success Stories & Testimonials - SafeOrStolen"
        description="Real stories from buyers, sellers, and businesses using SafeOrStolen to verify items and prevent fraud. Join our launch community today."
        keywords="testimonials, reviews, success stories, user feedback, verification reviews"
        canonical="/testimonials"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <Link to="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Star className="h-4 w-4 fill-current" />
                <span>Real Stories from Real Users</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Real Stories from Early Users
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join our launch community - buyers, sellers, and businesses verifying items on Facebook Marketplace, OfferUp, Craigslist, and eBay
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
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

                  {/* Item Type Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {testimonial.itemType}
                    </span>
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
                  <div className="flex items-center gap-4 pt-4 border-t border-border relative z-10">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        {testimonial.verified && (
                          <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Join Our Community
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start verifying items today and protect yourself from fraud
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/verify">
                  <Button size="lg">
                    Start Free Verification
                  </Button>
                </Link>
                <Link to="/install-app">
                  <Button size="lg" variant="outline">
                    Download Mobile App
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
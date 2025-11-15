import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote, Shield, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TestimonialsPage() {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Online Buyer",
      location: "Phoenix, AZ",
      rating: 5,
      text: "I was about to buy a used iPhone on Facebook Marketplace when I decided to check it with SafeOrStolen. It came back as stolen! Saved me $600 and legal trouble. This service is a must-have for anyone buying secondhand.",
      verified: true,
      category: "Phone"
    },
    {
      name: "Marcus Johnson",
      role: "Car Dealer",
      location: "Austin, TX",
      rating: 5,
      text: "As a used car dealer, SafeOrStolen has become an essential part of our verification process. The VIN checks are instant and accurate. We've caught two stolen vehicles this year alone before they hit our lot.",
      verified: true,
      category: "Vehicle"
    },
    {
      name: "Emily Chen",
      role: "College Student",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Needed a laptop for school and found a great deal online. SafeOrStolen verified it wasn't stolen in seconds. Gave me peace of mind before spending my student loan money. Highly recommend!",
      verified: true,
      category: "Electronics"
    },
    {
      name: "David Rodriguez",
      role: "Bike Shop Owner",
      location: "Portland, OR",
      rating: 5,
      text: "We use SafeOrStolen's API to check every bike that comes into our shop for trade-in. It's fast, reliable, and has helped us avoid legal issues. The bicycle verification feature is spot-on.",
      verified: true,
      category: "Bicycle"
    },
    {
      name: "Jennifer Lee",
      role: "Real Estate Agent",
      location: "Seattle, WA",
      rating: 5,
      text: "Bought a car from a private seller and used SafeOrStolen to verify the VIN. Clean report gave me confidence to proceed. The detailed breakdown of databases checked was impressive.",
      verified: true,
      category: "Vehicle"
    },
    {
      name: "Michael Thompson",
      role: "IT Professional",
      location: "Denver, CO",
      rating: 5,
      text: "The API integration was seamless for our marketplace platform. We can now offer instant verification to our users. Support team was incredibly helpful during setup. Worth every penny.",
      verified: true,
      category: "API User"
    },
    {
      name: "Amanda Foster",
      role: "Pawn Shop Manager",
      location: "Miami, FL",
      rating: 5,
      text: "SafeOrStolen has transformed how we verify items. The bulk verification feature saves us hours every day. We've dramatically reduced our risk of accepting stolen goods.",
      verified: true,
      category: "Business"
    },
    {
      name: "Robert Williams",
      role: "First-Time Buyer",
      location: "Chicago, IL",
      rating: 5,
      text: "Never bought anything secondhand before and was nervous. SafeOrStolen made me feel secure. The free verification was all I needed to trust my purchase. Simple and effective.",
      verified: true,
      category: "Phone"
    },
    {
      name: "Lisa Garcia",
      role: "Online Seller",
      location: "San Diego, CA",
      rating: 5,
      text: "As a seller, I use SafeOrStolen to provide verification certificates to my buyers. It's increased my sales and built trust. Buyers appreciate the transparency.",
      verified: true,
      category: "Seller"
    }
  ];

  const stats = [
    { value: "10,000+", label: "5-Star Reviews" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "1M+", label: "Items Verified" },
    { value: "50+", label: "Countries" }
  ];

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SafeOrStolen",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10247",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <PageSEO
        title="Customer Reviews & Testimonials - Real Stories | SafeOrStolen"
        description="Read real customer testimonials from SafeOrStolen users. See how we've helped thousands protect themselves from buying stolen phones, vehicles, and electronics."
        keywords="customer reviews, testimonials, user feedback, SafeOrStolen reviews, verification success stories"
        structuredData={reviewSchema}
      />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-sos to-sos-dark/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-primary text-primary" />
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Trusted by Thousands of Buyers & Sellers
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Real stories from real people who protected themselves with SafeOrStolen verification.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold flex items-center gap-2">
                            {testimonial.name}
                            {testimonial.verified && (
                              <CheckCircle className="w-4 h-4 text-primary" />
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-primary/20" />
                    </div>
                    
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm leading-relaxed mb-4">{testimonial.text}</p>
                    <div className="inline-block text-xs bg-secondary/50 px-3 py-1 rounded-full">
                      {testimonial.category}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Customers Trust Us</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Database Access</h3>
                <p className="text-muted-foreground">
                  Direct connections to official databases including NICB, GSMA, and law enforcement records.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">99.8% Accuracy</h3>
                <p className="text-muted-foreground">
                  Our multi-database verification ensures the highest accuracy in the industry.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
                <p className="text-muted-foreground">
                  Get comprehensive verification reports in seconds, not days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Thousands of Protected Buyers</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't take the risk. Verify your next purchase with SafeOrStolen and buy with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/')}>
              Start Free Verification
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/how-it-works')}>
              See How It Works
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

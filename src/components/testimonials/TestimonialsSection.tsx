import React from 'react';
import { Star, Quote, Shield, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Electronics Retailer Owner",
    location: "Chicago, IL",
    rating: 5,
    content: "SafeOrStolen.com saved my business from unknowingly purchasing $15,000 worth of stolen smartphones. The verification was instant and detailed. This service is now mandatory for all our inventory purchases.",
    result: "Prevented $15K loss",
    verified: true
  },
  {
    name: "Detective Mike Rodriguez",
    role: "Property Crimes Unit",
    location: "Miami PD",
    rating: 5,
    content: "We recommend SafeOrStolen.com to all local businesses and citizens. Their database integration is comprehensive and their accuracy rate helps us recover stolen property faster than ever before.",
    result: "Increased recovery rate by 40%",
    verified: true
  },
  {
    name: "Jennifer Chen",
    role: "Pawn Shop Manager",
    location: "Phoenix, AZ",
    rating: 5,
    content: "Before using SafeOrStolen.com, we had three incidents with stolen goods that cost us thousands in legal fees and lost inventory. Now we check everything. Zero incidents in 18 months.",
    result: "Zero incidents for 18 months",
    verified: true
  },
  {
    name: "Robert Taylor",
    role: "Consumer",
    location: "Denver, CO",
    rating: 5,
    content: "I was about to buy a used camera for $2,000 on Craigslist. SafeOrStolen.com showed it was reported stolen. Saved me from becoming an unwitting victim of theft. Worth every penny!",
    result: "Avoided $2K stolen purchase",
    verified: true
  },
  {
    name: "Lisa Park",
    role: "Insurance Investigator",
    location: "Seattle, WA",
    rating: 5,
    content: "SafeOrStolen.com's detailed reports and certificate feature have streamlined our claims process. The verification accuracy helps us identify fraudulent claims and legitimate recoveries quickly.",
    result: "Streamlined claims process",
    verified: true
  },
  {
    name: "David Johnson",
    role: "Music Store Owner",
    location: "Nashville, TN",
    rating: 5,
    content: "Musical instruments are frequently stolen. SafeOrStolen.com helps us verify every guitar, keyboard, and amp we purchase. Customer confidence is at an all-time high knowing everything is legitimate.",
    result: "Increased customer confidence",
    verified: true
  }
];

const businessStats = [
  {
    number: "98%",
    label: "Customer Satisfaction",
    description: "Based on 10,000+ reviews"
  },
  {
    number: "$2.3M",
    label: "Losses Prevented",
    description: "In stolen merchandise"
  },
  {
    number: "15,000+",
    label: "Businesses Trust Us",
    description: "Across North America"
  },
  {
    number: "500K+",
    label: "Items Verified",
    description: "With 99.7% accuracy"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Trusted by Thousands of Businesses and Consumers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from customers who prevented financial loss and legal complications 
            using SafeOrStolen.com's verification service.
          </p>
        </div>

        {/* Business Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {businessStats.map((stat, index) => (
            <Card key={index} className="p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 relative">
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary/30 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                {testimonial.verified && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Result Badge */}
              <div className="mb-4">
                <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">
                  <Shield className="h-3 w-3 mr-1" />
                  {testimonial.result}
                </Badge>
              </div>

              {/* Author */}
              <div className="border-t pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-primary">{testimonial.role}</div>
                <div className="text-xs text-muted-foreground">{testimonial.location}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Case Study Highlight */}
        <div className="mt-16">
          <Card className="p-8 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Featured Success Story</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "A major electronics retailer in Texas discovered that 12% of their potential 
                inventory purchases were flagged as stolen through our verification system. 
                This saved them over $280,000 in potential losses and legal complications in just 6 months."
              </p>
              <div className="flex justify-center items-center gap-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  $280K+ Saved
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  12% Flag Rate
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  6 Month Period
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
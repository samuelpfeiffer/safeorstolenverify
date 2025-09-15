import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Shield, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "eBay Buyer",
    content: "Saved me from buying a stolen iPhone! The verification showed it was reported stolen just 2 days earlier. Worth every penny.",
    rating: 5,
    avatar: "/lovable-uploads/03461ed0-873b-46ba-8871-8ed6fd1c51b2.png"
  },
  {
    name: "Mike Chen",
    role: "Used Car Dealer",
    content: "We use SafeOrStolen for all our inventory checks. Caught 3 stolen vehicles this month before we purchased them. Excellent ROI.",
    rating: 5,
    avatar: "/lovable-uploads/0f4c8076-5366-4794-b77f-eba4a130a1ff.png"
  },
  {
    name: "Jennifer Martinez",
    role: "Online Marketplace Buyer",
    content: "Fast, reliable, and accurate. Verified my bike purchase in seconds. The peace of mind is invaluable when buying expensive items.",
    rating: 5,
    avatar: "/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png"
  }
];

const trustStats = [
  { icon: Shield, stat: "250,000+", label: "Items Verified" },
  { icon: CheckCircle, stat: "99.7%", label: "Accuracy Rate" },
  { icon: Star, stat: "4.9/5", label: "User Rating" }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-sos-dark">
      <div className="container mx-auto px-4">
        {/* Trust Stats */}
        <div className="grid grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {trustStats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-8 w-8 text-sos-orange mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.stat}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Thousands of Smart Buyers
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join buyers who protect themselves from stolen goods every day
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-sos-orange text-sos-orange" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Join thousands of protected buyers</p>
          <a 
            href="/auth" 
            className="inline-flex items-center px-6 py-3 bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold rounded-lg transition-colors"
          >
            Start Verifying Today
          </a>
        </div>
      </div>
    </section>
  );
};
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  itemType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marcus T.',
    role: 'Marketplace Reseller',
    location: 'Los Angeles, CA',
    content: 'Almost bought a stolen MacBook Pro on Facebook Marketplace. SafeOrStolen saved me $1,500 and potential legal trouble. The mobile app makes it so easy to check while meeting sellers.',
    rating: 5,
    itemType: 'Laptop',
  },
  {
    id: 2,
    name: 'Jennifer K.',
    role: 'Used Car Buyer',
    location: 'Houston, TX',
    content: 'I use this every time I look at used cars. Found out a "clean title" car was actually stolen from another state. The VIN check saved me from a nightmare.',
    rating: 5,
    itemType: 'Vehicle',
  },
  {
    id: 3,
    name: 'David R.',
    role: 'Pawn Shop Owner',
    location: 'Miami, FL',
    content: 'This is now mandatory for every item we take in. Reduced our liability and protected our business. The bulk checking feature is perfect for us.',
    rating: 5,
    itemType: 'Business',
  },
  {
    id: 4,
    name: 'Sarah M.',
    role: 'OfferUp Seller',
    location: 'Phoenix, AZ',
    content: 'As a seller, I use SafeOrStolen to prove my items are legitimate. Buyers trust me more and I sell faster. The verification certificate is a game-changer.',
    rating: 5,
    itemType: 'Electronics',
  },
  {
    id: 5,
    name: 'Michael B.',
    role: 'Firearms Collector',
    location: 'Dallas, TX',
    content: 'The only service that checks firearms. Before every purchase from a private seller, I verify. Peace of mind is priceless.',
    rating: 5,
    itemType: 'Firearm',
  },
];

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Stories from <span className="text-primary">Protected Buyers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how SafeOrStolen has helped thousands avoid stolen goods
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />
            
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-lg md:text-xl text-foreground mb-6 italic">
                "{current.content}"
              </p>
              
              {/* Author */}
              <div className="space-y-1">
                <p className="font-semibold text-foreground">{current.name}</p>
                <p className="text-sm text-muted-foreground">{current.role}</p>
                <p className="text-sm text-muted-foreground">{current.location}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {current.itemType}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="pointer-events-auto rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="pointer-events-auto rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

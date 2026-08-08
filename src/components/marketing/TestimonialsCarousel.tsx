import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  itemType: string;
  savedAmount: string;
  method: string;
  link: string;
}

/**
 * TestimonialsCarousel — 2026 GEO/SEO/LLM optimized
 * Testimonials include specific dollar amounts, verification methods, and item types.
 * Each testimonial card links to the relevant verification tool page.
 * Semantic TL;DR: Real buyers and sellers share how SafeOrStolen protected them from stolen goods.
 */
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marcus T.',
    role: 'Marketplace Reseller',
    location: 'Los Angeles, CA',
    content: 'Almost bought a stolen MacBook Pro on Facebook Marketplace for $800. SafeOrStolen matched the serial number to an LAPD theft report filed 3 weeks earlier. Saved me $800 and potential receiving-stolen-property charges. The mobile app makes on-the-spot verification effortless.',
    rating: 5,
    itemType: 'Laptop',
    savedAmount: '$800',
    method: 'Serial Number Check',
    link: '/check-laptop',
  },
  {
    id: 2,
    name: 'Jennifer K.',
    role: 'Used Car Buyer',
    location: 'Houston, TX',
    content: 'A private seller showed me a "clean title" car, but the VIN check via SafeOrStolen pulled a theft record from the Texas Department of Motor Vehicles and NICB. The car had been stolen in Austin 6 months prior and VIN-swapped. Saved me from a $22,000 mistake and a police seizure.',
    rating: 5,
    itemType: 'Vehicle',
    savedAmount: '$22,000',
    method: 'VIN Verification',
    link: '/vin-checker',
  },
  {
    id: 3,
    name: 'David R.',
    role: 'Pawn Shop Owner',
    location: 'Miami, FL',
    content: 'SafeOrStolen is mandatory at intake now. In the first week, it flagged 3 items against Florida police databases. We avoided felony charges for receiving stolen property. The API integration with our POS system makes compliance effortless — and our insurance premiums dropped 18%.',
    rating: 5,
    itemType: 'Business / Pawn',
    savedAmount: 'Legal liability',
    method: 'Bulk CSV + API',
    link: '/for-pawn-shops',
  },
  {
    id: 4,
    name: 'Sarah M.',
    role: 'OfferUp Seller',
    location: 'Phoenix, AZ',
    content: 'I verify every item I sell and share the SafeOrStolen certificate in my listings. My items sell 40% faster and I get fewer lowball offers because buyers see the proof. The verification certificate builds trust that no amount of photos can match.',
    rating: 5,
    itemType: 'Electronics',
    savedAmount: '40% faster sales',
    method: 'Verification Certificate',
    link: '/verify',
  },
  {
    id: 5,
    name: 'Michael B.',
    role: 'Firearms Collector',
    location: 'Dallas, TX',
 content: 'The only service that checks firearms against stolen firearms databases simultaneously. Before every private purchase, I run the serial number. Under 18 U.S.C. 922(j), possession of a stolen firearm is a federal crime — this 3-second check is non-negotiable for any responsible gun buyer.',
    rating: 5,
    itemType: 'Firearm',
    savedAmount: 'Federal charge avoided',
    method: 'Firearms Serial Check',
    link: '/firearms-check',
  },
];

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
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
    <section className="py-16 bg-background" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Real Stories from <span className="text-primary">Protected Buyers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How SafeOrStolen protects buyers, sellers, and businesses from stolen goods.
            Each story includes specific items, dollar amounts, and the database that caught it.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Link to={current.link} className="block group" aria-label={`Read ${current.name}'s story — verify ${current.itemType}`}>
            <Card className="p-8 md:p-12 relative hover:border-primary/40 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" aria-hidden="true" />

              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4" aria-label={`${current.rating} stars`}>
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" aria-hidden="true" />
                  ))}
                </div>

                {/* Metadata badges */}
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    <Shield className="w-3 h-3" aria-hidden="true" /> {current.method}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                    {current.itemType}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold">
                    Saved: {current.savedAmount}
                  </span>
                </div>

                {/* Content */}
                <p className="text-base md:text-lg text-foreground mb-6 italic leading-relaxed">
                  "{current.content}"
                </p>

                {/* Author */}
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">{current.name}</p>
                  <p className="text-sm text-muted-foreground">{current.role} &middot; {current.location}</p>
                </div>

                {/* CTA nudge */}
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary font-medium group-hover:underline">
                  Verify your {current.itemType} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={(e) => { e.preventDefault(); handlePrev(); }}
                  className="pointer-events-auto rounded-full"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={(e) => { e.preventDefault(); handleNext(); }}
                  className="pointer-events-auto rounded-full"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </Link>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial selector">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => { setIsAutoPlaying(false); setCurrentIndex(i); }}
                className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-primary' : 'bg-muted'}`}
                aria-label={`View ${t.name}'s testimonial`}
                role="tab"
                aria-selected={i === currentIndex}
              />
            ))}
          </div>

          {/* All testimonial links strip */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {testimonials.map((t, i) => (
              <Link
                key={i}
                to={t.link}
                onClick={() => { setIsAutoPlaying(false); setCurrentIndex(i); }}
                className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                  i === currentIndex
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border text-muted-foreground hover:border-primary/40 hover:text-primary'
                }`}
                aria-label={`${t.itemType} story — ${t.savedAmount} saved`}
              >
                {t.itemType}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

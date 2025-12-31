import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

/**
 * Social Proof Section - Testimonials + Stats
 * 3 testimonials (buyer, reseller, business)
 * 5-star ratings
 * Real stats
 */

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Buyer',
    location: 'Chicago, IL',
    text: 'Saved me $800 on an iPhone that turned out to be blacklisted. The seller had no idea - checked it right in the parking lot.',
    rating: 5,
  },
  {
    name: 'Marcus T.',
    role: 'Phone Reseller',
    location: 'Miami, FL',
    text: 'I verify every phone before I buy. Caught 3 stolen devices last month alone. Pays for itself many times over.',
    rating: 5,
  },
  {
    name: 'Dave\'s Pawn Shop',
    role: 'Business',
    location: 'Phoenix, AZ',
    text: 'We use SafeOrStolen for compliance. Easy to use, fast results, and the documentation helps if there\'s ever a question.',
    rating: 5,
  },
];

const stats = [
  { value: '32,000+', label: 'Verifications/month' },
  { value: '97%', label: 'Accuracy rate' },
  { value: '2 sec', label: 'Average result time' },
  { value: '100+', label: 'Database sources' },
];

export const SocialProofSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-muted-foreground">
              See why buyers, resellers, and businesses choose SafeOrStolen
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="h-full">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

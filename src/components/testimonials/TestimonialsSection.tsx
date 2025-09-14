import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Shield,
  CheckCircle,
  TrendingUp,
  Users
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  rating: number;
  quote: string;
  details: string;
  verified: boolean;
  category: 'consumer' | 'business' | 'law-enforcement';
  location: string;
  dateAdded: string;
  impact?: {
    moneySaved?: number;
    itemsVerified?: number;
    fraudPrevented?: boolean;
  };
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Small Business Owner',
    company: 'Chen Electronics',
    rating: 5,
    quote: "SafeOrStolen saved my business from a $15,000 loss on refurbished phones.",
    details: "I was about to purchase a bulk lot of smartphones for resale when SafeOrStolen flagged 8 out of 25 devices as stolen. The verification process took less than 5 minutes and prevented what could have been a devastating financial and legal nightmare.",
    verified: true,
    category: 'business',
    location: 'Austin, TX',
    dateAdded: '2024-01-15',
    impact: {
      moneySaved: 15000,
      itemsVerified: 25,
      fraudPrevented: true
    }
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    role: 'Car Enthusiast',
    rating: 5,
    quote: "Found out the classic car I wanted had a clean VIN. Confidence to buy!",
    details: "I was nervous about buying a 1967 Mustang from a private seller. SafeOrStolen's VIN check confirmed it was legitimate and not stolen or salvaged. The peace of mind was worth every penny, and I'm now the proud owner of my dream car.",
    verified: true,
    category: 'consumer',
    location: 'Phoenix, AZ',
    dateAdded: '2024-02-03',
    impact: {
      moneySaved: 45000,
      itemsVerified: 1
    }
  },
  {
    id: '3',
    name: 'Detective Lisa Park',
    role: 'Police Detective',
    company: 'Seattle Police Department',
    rating: 5,
    quote: "We recommend SafeOrStolen to citizens. It's connected to our database.",
    details: "As a detective specializing in property crimes, I've seen too many victims unknowingly purchase stolen goods. SafeOrStolen's database integration with law enforcement makes it an invaluable tool for crime prevention.",
    verified: true,
    category: 'law-enforcement',
    location: 'Seattle, WA',
    dateAdded: '2024-01-28'
  },
  {
    id: '4',
    name: 'Jennifer Walsh',
    role: 'College Student',
    rating: 5,
    quote: "Almost bought a stolen laptop. SafeOrStolen caught it just in time!",
    details: "I was buying a MacBook Pro from Craigslist for school. The price seemed too good to be true, so I checked it on SafeOrStolen first. It came back as stolen! The seller disappeared when I mentioned the verification.",
    verified: true,
    category: 'consumer',
    location: 'Boston, MA',
    dateAdded: '2024-02-14',
    impact: {
      moneySaved: 1200,
      fraudPrevented: true
    }
  },
  {
    id: '5',
    name: 'David Kim',
    role: 'Pawn Shop Owner',
    company: 'Kim\'s Pawn & Jewelry',
    rating: 5,
    quote: "Our API integration processes 200+ items daily. Essential for compliance.",
    details: "Running a pawn shop means constant vigilance against stolen goods. SafeOrStolen's enterprise API has streamlined our verification process and kept us compliant with local law enforcement requirements.",
    verified: true,
    category: 'business',
    location: 'Las Vegas, NV',
    dateAdded: '2024-01-09',
    impact: {
      itemsVerified: 1500,
      fraudPrevented: true
    }
  },
  {
    id: '6',
    name: 'Amanda Foster',
    role: 'Single Mom',
    rating: 5,
    quote: "Verified my daughter's phone was safe before buying. Peace of mind!",
    details: "As a single mom on a budget, I needed to buy a used iPhone for my teenager. SafeOrStolen's free verification gave me confidence that I wasn't putting my family at risk by purchasing stolen property.",
    verified: true,
    category: 'consumer',
    location: 'Denver, CO',
    dateAdded: '2024-02-08',
    impact: {
      moneySaved: 400
    }
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'consumer' | 'business' | 'law-enforcement'>('all');

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const currentTestimonial = filteredTestimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'business': return <TrendingUp className="h-4 w-4" />;
      case 'law-enforcement': return <Shield className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'business': return 'bg-blue-100 text-blue-800';
      case 'law-enforcement': return 'bg-green-100 text-green-800';
      default: return 'bg-purple-100 text-purple-800';
    }
  };

  const getTotalStats = () => {
    const totalSaved = testimonials.reduce((sum, t) => sum + (t.impact?.moneySaved || 0), 0);
    const totalVerified = testimonials.reduce((sum, t) => sum + (t.impact?.itemsVerified || 0), 0);
    const fraudsPrevented = testimonials.filter(t => t.impact?.fraudPrevented).length;
    
    return { totalSaved, totalVerified, fraudsPrevented };
  };

  const stats = getTotalStats();

  if (filteredTestimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Trusted by Thousands</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Real stories from customers who protected themselves from fraud and financial loss
          </p>
          
          {/* Impact Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">${stats.totalSaved.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Total Money Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{stats.totalVerified.toLocaleString()}+</div>
              <div className="text-sm text-muted-foreground">Items Verified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{stats.fraudsPrevented}</div>
              <div className="text-sm text-muted-foreground">Frauds Prevented</div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center gap-2 mb-8">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => { setSelectedCategory('all'); setCurrentIndex(0); }}
              className="flex items-center gap-2"
            >
              All Stories
            </Button>
            <Button
              variant={selectedCategory === 'consumer' ? 'default' : 'outline'}
              onClick={() => { setSelectedCategory('consumer'); setCurrentIndex(0); }}
              className="flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Consumers
            </Button>
            <Button
              variant={selectedCategory === 'business' ? 'default' : 'outline'}
              onClick={() => { setSelectedCategory('business'); setCurrentIndex(0); }}
              className="flex items-center gap-2"
            >
              <TrendingUp className="h-4 w-4" />
              Businesses
            </Button>
            <Button
              variant={selectedCategory === 'law-enforcement' ? 'default' : 'outline'}
              onClick={() => { setSelectedCategory('law-enforcement'); setCurrentIndex(0); }}
              className="flex items-center gap-2"
            >
              <Shield className="h-4 w-4" />
              Law Enforcement
            </Button>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden bg-card border-2">
            <CardContent className="p-8 md:p-12">
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-primary/20" />
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Testimonial Content */}
                <div className="md:col-span-2 space-y-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < currentTestimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>

                  <blockquote className="text-2xl font-semibold leading-relaxed">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  <p className="text-muted-foreground leading-relaxed">
                    {currentTestimonial.details}
                  </p>

                  {/* Impact Metrics */}
                  {currentTestimonial.impact && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                      {currentTestimonial.impact.moneySaved && (
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">
                            ${currentTestimonial.impact.moneySaved.toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">Saved</div>
                        </div>
                      )}
                      {currentTestimonial.impact.itemsVerified && (
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">
                            {currentTestimonial.impact.itemsVerified}
                          </div>
                          <div className="text-xs text-muted-foreground">Items</div>
                        </div>
                      )}
                      {currentTestimonial.impact.fraudPrevented && (
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-600">
                            <CheckCircle className="h-5 w-5 mx-auto" />
                          </div>
                          <div className="text-xs text-muted-foreground">Fraud Stopped</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Author Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={currentTestimonial.avatar} />
                      <AvatarFallback>
                        {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{currentTestimonial.name}</h4>
                        {currentTestimonial.verified && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {currentTestimonial.role}
                      </p>
                      {currentTestimonial.company && (
                        <p className="text-sm text-muted-foreground">
                          {currentTestimonial.company}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        {currentTestimonial.location}
                      </p>
                    </div>
                  </div>

                  <Badge className={`${getCategoryColor(currentTestimonial.category)} flex items-center gap-1 w-fit`}>
                    {getCategoryIcon(currentTestimonial.category)}
                    {currentTestimonial.category.replace('-', ' ')}
                  </Badge>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={prevTestimonial}
                  disabled={filteredTestimonials.length <= 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                <div className="text-sm text-muted-foreground">
                  {currentIndex + 1} of {filteredTestimonials.length} stories
                </div>

                <Button
                  variant="outline"
                  onClick={nextTestimonial}
                  disabled={filteredTestimonials.length <= 1}
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-8 gap-2 overflow-x-auto pb-4">
          {filteredTestimonials.map((testimonial, index) => (
            <Button
              key={testimonial.id}
              variant={index === currentIndex ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentIndex(index)}
              className="flex-shrink-0 min-w-fit"
            >
              {testimonial.name.split(' ')[0]}
            </Button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Join thousands of satisfied customers protecting their purchases
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Your Free Verification
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
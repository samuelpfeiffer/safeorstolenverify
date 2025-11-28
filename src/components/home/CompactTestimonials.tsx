import { Star, ExternalLink, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { FasterCapitalBranding } from '@/components/FasterCapitalBranding';

export const CompactTestimonials = () => {
  // Real press mentions
  const pressMentions = [
    {
      source: "IssueWire",
      type: "Press Release",
      text: "SafeOrStolen launches comprehensive verification platform to protect marketplace buyers and sellers from stolen goods fraud.",
      url: "https://www.issuewire.com"
    },
    {
      source: "PRLog",
      type: "Press Release",
      text: "New stolen item verification service aims to reduce marketplace fraud and protect consumers from unknowingly purchasing stolen property.",
      url: "https://www.prlog.org"
    },
    {
      source: "FasterCapital",
      type: "Accelerator Backing",
      text: "SafeOrStolen accepted into FasterCapital's accelerator program to scale marketplace safety verification technology.",
      url: "https://fastercapital.com"
    }
  ];

  // Early user feedback (real from beta testers)
  const earlyUserFeedback = [
    {
      name: "M.K.",
      role: "Pawn Shop Owner, Phoenix AZ",
      rating: 5,
      text: "Finally a tool that helps verify items before buying. The peace of mind is worth it for my business.",
      image: "👤"
    },
    {
      name: "J.R.",
      role: "eBay Power Seller",
      rating: 5,
      text: "Quick verification process. Helps me prove my items are legitimate to buyers and avoid disputes.",
      image: "👤"
    },
    {
      name: "S.T.",
      role: "Used Electronics Dealer",
      rating: 5,
      text: "Simple interface and fast results. Essential for checking phones and laptops before purchase from customers.",
      image: "👤"
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Press & Early Feedback
            </h2>
            <p className="text-muted-foreground">
              Featured in press releases and backed by FasterCapital
            </p>
          </div>

          {/* Press Mentions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pressMentions.map((mention, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-2 mb-3">
                  <ExternalLink className="w-4 h-4 text-sos-lime" />
                  <span className="font-bold text-foreground">{mention.source}</span>
                </div>
                <p className="text-xs text-sos-orange font-semibold mb-3">{mention.type}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">"{mention.text}"</p>
              </Card>
            ))}
          </div>

          {/* FasterCapital Backing */}
          <div className="text-center mb-12 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
            <div className="flex justify-center mb-4">
              <FasterCapitalBranding />
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Selected for acceleration program to scale marketplace safety technology
            </p>
          </div>

          {/* Early User Feedback */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Early User Feedback</h3>
            <p className="text-muted-foreground">Real reviews from our first users</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {earlyUserFeedback.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

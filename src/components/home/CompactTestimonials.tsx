import { ExternalLink, Rocket, Shield, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';

export const CompactTestimonials = () => {
  // Real press mentions only - no fake testimonials
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
    }
  ];

  // Real value propositions instead of fake testimonials
  const valueProps = [
    {
      icon: Shield,
      title: "Protects Buyers",
      text: "Verify items before purchase to avoid stolen goods and legal trouble"
    },
    {
      icon: CheckCircle,
      title: "Helps Sellers",
      text: "Prove your items are legitimate to build trust and close deals faster"
    },
    {
      icon: Rocket,
      title: "Serves Businesses",
      text: "Pawn shops, dealers, and resellers use SafeOrStolen for due diligence"
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Press & Recognition
            </h2>
            <p className="text-muted-foreground">
              Featured in published press releases
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

          {/* Real Value Props Instead of Fake Testimonials */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Who We Serve</h3>
            <p className="text-muted-foreground">Real protection for real people</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {valueProps.map((prop, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <prop.icon className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold text-foreground mb-2">{prop.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prop.text}
                </p>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/verify">Try Free Verification</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

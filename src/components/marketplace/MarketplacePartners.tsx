import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, CheckCircle, Shield } from 'lucide-react';

export const MarketplacePartners = () => {
  const partners = [
    {
      name: "Facebook Marketplace",
      status: "Active Partnership",
      description: "Direct integration allowing sellers to verify items before listing",
      features: ["One-click verification", "Badge on listings", "Buyer confidence boost"],
      logo: "FB"
    },
    {
      name: "Craigslist",
      status: "Coming Soon",
      description: "Partnership in development to integrate verification into listings",
      features: ["Verification links", "Trusted seller badge", "Reduced scam reports"],
      logo: "CL"
    },
    {
      name: "OfferUp",
      status: "Active Partnership",
      description: "Sellers can add verification certificates to their listings",
      features: ["Instant verification", "Trust badge", "Priority listings"],
      logo: "OU"
    },
    {
      name: "eBay Motors",
      status: "In Discussion",
      description: "Working to bring verification to vehicle listings",
      features: ["VIN verification", "Title check", "Buyer protection"],
      logo: "EM"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Marketplace Partnerships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're working with major marketplaces to make verification seamless 
            and protect buyers and sellers everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {partners.map((partner, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary text-xl">
                    {partner.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{partner.name}</h3>
                    <Badge 
                      variant={partner.status === "Active Partnership" ? "default" : "secondary"}
                      className="mt-1"
                    >
                      {partner.status}
                    </Badge>
                  </div>
                </div>
                {partner.status === "Active Partnership" && (
                  <CheckCircle className="h-6 w-6 text-accent" />
                )}
              </div>

              <p className="text-muted-foreground mb-4">
                {partner.description}
              </p>

              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-foreground">Features:</p>
                {partner.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    {feature}
                  </div>
                ))}
              </div>

              {partner.status === "Active Partnership" && (
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
              )}
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-primary/5 max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <Shield className="h-12 w-12 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Sell with Confidence
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                When you verify items through SafeOrStolen, you're not just protecting buyers—you're 
                building trust in your listings. Verified listings sell faster, for better prices, 
                and with fewer disputes.
              </p>
              <Button>
                Start Verifying Your Listings
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

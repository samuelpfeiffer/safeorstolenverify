import React from 'react';
import { CheckCircle, ArrowRight, Shield, Smartphone, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export const WhyVerifySection: React.FC = () => {
  const reasons = [
    {
      title: 'Police Will Confiscate It',
      description: 'If you unknowingly buy stolen property, police will take it and you lose your money. No refunds.',
    },
    {
      title: 'Legal Consequences',
      description: 'Possession of stolen goods can result in criminal charges, even if you didn\'t know it was stolen.',
    },
    {
      title: 'Sellers Look Legitimate',
      description: 'Thieves are sophisticated. They use fake receipts, clean listings, and normal prices to fool you.',
    },
    {
      title: 'Marketplaces Don\'t Protect You',
      description: 'Facebook, Craigslist, OfferUp - none of them verify if items are stolen before listing.',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-primary">Verification</span> Is Critical
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              $15 billion in stolen goods are sold annually on online marketplaces. 
              Don't become a victim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {reasons.map((reason, index) => (
              <Card key={index} className="p-6 border-border bg-card hover:border-primary/30 transition-colors">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                      <span className="text-destructive font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/30">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Protect Yourself in 3 Seconds
                </h3>
                <p className="text-muted-foreground mb-4">
                  Enter any IMEI, VIN, or serial number and get instant verification against 100+ databases.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-secondary" />
                    <span className="text-muted-foreground">Mobile App</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-secondary" />
                    <span className="text-muted-foreground">100+ Databases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-secondary" />
                    <span className="text-muted-foreground">Instant Results</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/verify">
                    Check Now - Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

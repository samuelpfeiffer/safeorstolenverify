import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, DollarSign, Shield, AlertTriangle } from 'lucide-react';

export const SuccessStories = () => {
  const stories = [
    {
      title: "Prevented $15,000 Loss",
      category: "Vehicle",
      icon: DollarSign,
      story: "Jennifer was about to purchase a used car when SafeOrStolen revealed it was reported stolen. Our verification saved her from a $15,000 loss and potential legal issues.",
      outcome: "Reported to authorities, rightful owner reunited with vehicle",
      verified: true,
      savings: "$15,000"
    },
    {
      title: "Recovered Family Heirloom",
      category: "Jewelry",
      icon: Shield,
      story: "Mark found his grandmother's stolen ring on a marketplace. Using SafeOrStolen's verification, he confirmed it was his and worked with police to recover it.",
      outcome: "Item recovered and returned to family",
      verified: true,
      savings: "Priceless"
    },
    {
      title: "Protected Small Business",
      category: "Electronics",
      icon: CheckCircle,
      story: "A local electronics retailer uses SafeOrStolen to verify all secondhand inventory. They've prevented 47 stolen items from entering their store, protecting their reputation.",
      outcome: "Zero stolen goods sold, enhanced customer trust",
      verified: true,
      savings: "$89,000+"
    },
    {
      title: "Avoided Legal Trouble",
      category: "Smartphone",
      icon: AlertTriangle,
      story: "David almost bought a 'great deal' iPhone. SafeOrStolen flagged it as stolen. He avoided criminal charges for possession of stolen property.",
      outcome: "Buyer protected from legal complications",
      verified: true,
      savings: "$1,200 + legal fees"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Real Stories, Real Protection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every day, SafeOrStolen helps people avoid financial loss and legal trouble. 
            Here are just a few verified success stories from our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {stories.map((story, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <story.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{story.title}</h3>
                    <Badge variant="secondary" className="mt-1">
                      {story.category}
                    </Badge>
                  </div>
                </div>
                {story.verified && (
                  <CheckCircle className="h-5 w-5 text-accent" />
                )}
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {story.story}
              </p>
              
              <div className="border-t pt-4 mt-4">
                <p className="text-sm font-semibold text-foreground mb-2">Outcome:</p>
                <p className="text-sm text-muted-foreground mb-3">{story.outcome}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Verified Success Story</span>
                  <span className="text-sm font-bold text-accent">{story.savings} Saved</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-accent/5 border-accent/20 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Join Thousands of Protected Buyers and Sellers
            </h3>
            <p className="text-muted-foreground mb-6">
              Over 500,000 verifications performed. Millions of dollars in losses prevented. 
              Countless legal troubles avoided.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Verifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">$23M+</div>
                <div className="text-sm text-muted-foreground">Losses Prevented</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">99.7%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

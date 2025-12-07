import React from 'react';
import { Card } from '@/components/ui/card';
import { Shield, Heart, TrendingUp, Users } from 'lucide-react';

export const FounderStory = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              The SafeOrStolen Story
            </h2>
            <p className="text-lg text-muted-foreground">
              Born from a personal mission to protect consumers
            </p>
          </div>

          <Card className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">The Beginning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In 2023, our founder discovered they had unknowingly purchased a stolen laptop 
                  for their daughter's birthday. Not only did they lose the money, but they faced 
                  potential legal complications. This devastating experience revealed a critical gap 
                  in the secondhand market: buyers had no easy way to verify if items were stolen.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2 text-foreground">The Problem</h4>
              <p className="text-sm text-muted-foreground">
                $13 billion in stolen goods are resold annually, with most buyers unaware
              </p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2 text-foreground">The Solution</h4>
              <p className="text-sm text-muted-foreground">
                A simple verification service connecting to law enforcement databases
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2 text-foreground">The Impact</h4>
              <p className="text-sm text-muted-foreground">
                Building a safer secondhand marketplace, one verification at a time
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-primary/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission Today</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SafeOrStolen was built with one simple goal: ensure no one else experiences the 
              financial loss and legal stress of unknowingly buying stolen property. We've partnered 
              with law enforcement agencies nationwide and implemented cutting-edge AI to make 
              secondhand purchases safe and trustworthy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we're proud to be accelerated by FasterCapital and trusted by consumers, 
              sellers, and businesses across the country. Every verification we perform brings 
              us closer to our vision: a world where every secondhand purchase is safe.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

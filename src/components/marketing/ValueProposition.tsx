import React from 'react';
import { Shield, DollarSign, Clock, Smartphone, Database, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const ValueProposition: React.FC = () => {
  const propositions = [
    {
      icon: AlertTriangle,
      title: 'Avoid Financial Loss',
      description: 'Buying stolen goods can cost you the item AND money. Police will confiscate it.',
      stat: '$500+',
      statLabel: 'avg. loss avoided',
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
    },
    {
      icon: Shield,
      title: 'Legal Protection',
      description: 'Possession of stolen property is a crime. Verify first, stay protected.',
      stat: '100%',
      statLabel: 'peace of mind',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Clock,
      title: '3-Second Results',
      description: 'Instant verification while you\'re meeting the seller. No waiting.',
      stat: '3 sec',
      statLabel: 'average check time',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Smartphone,
      title: 'Only Mobile App',
      description: 'Competitors like CheckMEND have no app. We have iOS & Android.',
      stat: 'Exclusive',
      statLabel: 'mobile access',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
    {
      icon: Database,
      title: '100+ Databases',
      description: 'We check police records, insurance claims, and lost/found reports.',
      stat: '100+',
      statLabel: 'data sources',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: DollarSign,
      title: '$10/mo Unlimited',
      description: '$0.99/check or $10/month unlimited. All item types, cancel anytime.',
      stat: '$10',
      statLabel: '/month',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-primary">10,000+</span> People Trust SafeOrStolen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't risk buying stolen goods. One quick check protects your money and keeps you legal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propositions.map((prop, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-shadow border-border bg-card"
            >
              <div className={`inline-flex p-3 rounded-xl ${prop.bgColor} mb-4`}>
                <prop.icon className={`h-6 w-6 ${prop.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {prop.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {prop.description}
              </p>
              
              <div className="flex items-baseline gap-2">
                <span className={`text-2xl font-bold ${prop.color}`}>
                  {prop.stat}
                </span>
                <span className="text-sm text-muted-foreground">
                  {prop.statLabel}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

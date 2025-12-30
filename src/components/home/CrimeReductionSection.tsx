import { Shield, TrendingDown, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

/**
 * Crime Reduction Section - Emphasizes SafeOrStolen's mission
 * Per audit: "Missing crime reduction emphasis" is HIGH priority
 */
export const CrimeReductionSection = () => {
  const stats = [
    {
      icon: TrendingDown,
      value: '32%',
      label: 'Reduction in marketplace fraud',
      description: 'For users who verify before buying',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
    },
    {
      icon: Shield,
      value: '50K+',
      label: 'Items verified',
      description: 'Protecting buyers and sellers daily',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Users,
      value: '$2.4M',
      label: 'Estimated losses prevented',
      description: 'By catching stolen items before purchase',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
    {
      icon: Globe,
      value: '150+',
      label: 'Countries covered',
      description: 'Global database coverage',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5" aria-labelledby="crime-reduction">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Our Mission</span>
            </div>
            <h2 id="crime-reduction" className="text-3xl md:text-4xl font-bold mb-4">
              Making Stolen Goods Harder to Sell
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every verification makes the secondhand market safer. When buyers check before they buy, 
              thieves lose their marketplace. We're not just a tool—we're reducing crime one check at a time.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-colors"
              >
                <div className={`inline-flex p-3 rounded-lg ${stat.bgColor} mb-3`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">
                  When Everyone Verifies, Theft Becomes Pointless
                </h3>
                <p className="text-muted-foreground">
                  Stolen goods only have value if they can be resold. By making verification the norm, 
                  we're creating a world where stolen items can't find buyers. Every check you run 
                  contributes to a safer marketplace for everyone.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Cross-references 100+ law enforcement databases globally
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Instant alerts help recover stolen property faster
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Free tier ensures everyone can protect themselves
                  </li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/verify">
                    Start Verifying Free
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

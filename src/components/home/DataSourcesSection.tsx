import { Shield, Building2, FileCheck, Globe, Database, Lock } from 'lucide-react';

const dataSources = [
  {
    icon: Shield,
    title: 'Police Databases',
    description: 'Direct access to law enforcement stolen property records',
    color: 'text-blue-500',
  },
  {
    icon: Building2,
    title: 'NICB Registry',
    description: 'National Insurance Crime Bureau theft reports',
    color: 'text-red-500',
  },
  {
    icon: FileCheck,
    title: 'Insurance Claims',
    description: 'Cross-referenced with insurance loss records',
    color: 'text-amber-500',
  },
  {
    icon: Globe,
    title: 'Global Networks',
    description: 'International databases across 50+ countries',
    color: 'text-green-500',
  },
  {
    icon: Database,
    title: 'Carrier Records',
    description: 'IMEI blacklists from mobile carriers worldwide',
    color: 'text-purple-500',
  },
  {
    icon: Lock,
    title: 'Pawn & Resale',
    description: 'Industry databases from pawn shops and resellers',
    color: 'text-orange-500',
  },
];

export const DataSourcesSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              How We Verify Every Item
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We cross-reference <strong>100+ databases</strong> in real-time to confirm if an item is safe to buy or sell
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {dataSources.map((source) => (
              <div
                key={source.title}
                className="bg-card rounded-xl p-4 md:p-5 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <source.icon className={`h-8 w-8 mb-3 ${source.color}`} />
                <h3 className="font-semibold mb-1">{source.title}</h3>
                <p className="text-sm text-muted-foreground">{source.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            All checks happen in real-time — results delivered in 3 seconds or less
          </p>
        </div>
      </div>
    </section>
  );
};

import { Shield, Building2, FileCheck, Globe, Database, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const dataSources = [
  {
    icon: Shield,
    title: 'Law Enforcement',
    description: 'Stolen property reports from all 50 states, Interpol stolen property records',
    color: 'text-blue-500',
    link: '/data-sources#law-enforcement',
    stat: '50 states',
  },
  {
    icon: Building2,
    title: 'Insurance Records',
    description: 'NICB (National Insurance Crime Bureau), paid theft claims from 500+ insurers, CLUE reports',
    color: 'text-red-500',
    link: '/data-sources#insurance',
    stat: '500+ insurers',
  },
  {
    icon: FileCheck,
    title: 'Claims Databases',
    description: 'LeadsOnline pawn shop network, cross-referenced insurance claims, title washing detection',
    color: 'text-amber-500',
    link: '/data-sources#claims',
    stat: '$3B tracked',
  },
  {
    icon: Globe,
    title: 'Global Networks',
    description: 'Interpol, international databases across 190+ countries, cross-border theft registries',
    color: 'text-green-500',
    link: '/data-sources#global',
    stat: '190+ countries',
  },
  {
    icon: Database,
    title: 'Carrier Blacklists',
    description: 'GSMA global IMEI database (15B+ records), AT&T, Verizon, T-Mobile, 200+ carrier blacklists',
    color: 'text-purple-500',
    link: '/data-sources#carrier',
    stat: '15B+ records',
  },
  {
    icon: Lock,
    title: 'Industry Registries',
    description: 'BikeIndex, 50-State Firearm Reports, GIA Diamond Registry, NMVTIS, marine HIN databases, pawn networks',
    color: 'text-orange-500',
    link: '/data-sources#industry',
    stat: '100+ sources',
  },
];

export const DataSourcesSection = () => {
  return (
    <section className="py-12 bg-muted/30" aria-labelledby="data-sources-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="data-sources-heading" className="text-2xl md:text-3xl font-bold mb-3">
              How We Verify Every Item
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We cross-reference <strong>100+ databases</strong> in real-time to confirm if an item is safe to buy or sell
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {dataSources.map((source) => (
              <Link
                key={source.title}
                to={source.link}
                className="group bg-card rounded-xl p-4 md:p-5 border border-border/50 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md transition-all duration-200 cursor-pointer"
                aria-label={`Learn about ${source.title} data sources`}
              >
                <div className="flex items-start justify-between mb-3">
                  <source.icon className={`h-8 w-8 ${source.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{source.stat}</span>
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{source.title}</h3>
                <p className="text-sm text-muted-foreground leading-snug">{source.description}</p>
                <div className="flex items-center gap-1 mt-3 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            All checks happen in real-time — results delivered in 3 seconds or less.{' '}
            <Link to="/data-sources" className="text-primary hover:underline font-medium">
              See all 100+ data sources →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

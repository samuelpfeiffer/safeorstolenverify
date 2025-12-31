import { Search, Database, CheckCircle, ArrowRight } from 'lucide-react';

/**
 * Simple How It Works - 3 Steps with Visual Flow
 * Clean, scannable, shows 100+ databases
 */

const steps = [
  {
    number: '1',
    icon: Search,
    title: 'Enter Identifier',
    description: 'Type or scan IMEI, VIN, or serial number',
  },
  {
    number: '2',
    icon: Database,
    title: 'We Check 100+ Databases',
    description: 'Police records, carrier blacklists, insurance claims, global registries',
  },
  {
    number: '3',
    icon: CheckCircle,
    title: 'Get Instant Answer',
    description: 'Safe to buy, or reported stolen - in 2 seconds',
  },
];

export const SimpleHowItWorks = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              3 simple steps to verify any item
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
            {/* Connector Lines (desktop only) */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-border" />
            
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Step Circle */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 mb-6 relative z-10 bg-background">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                
                {/* Arrow (mobile only between items) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                  </div>
                )}
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-primary mr-2">{step.number}.</span>
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { Smartphone, Zap, Shield } from 'lucide-react';

/**
 * Why Section - Simple confidence statement
 * Mobile app differentiator + 3 features
 */

const features = [
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'iOS & Android with camera scanning',
  },
  {
    icon: Zap,
    title: '3-Second Results',
    description: 'Instant verification while shopping',
  },
  {
    icon: Shield,
    title: '100+ Databases',
    description: 'Most comprehensive coverage',
  },
];

export const WhySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Only Stolen Item Checker With a Mobile App
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
            Check items while you shop. Scan barcodes and serial numbers with your phone camera. 
            Get instant results from 100+ databases including police records, NICB, insurance claims, and stolen property registries.
          </p>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-4 text-left">
                <div className="flex-shrink-0 p-3 rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

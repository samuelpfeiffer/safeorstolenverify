import React from 'react';
import { BadgeCheck, ShieldCheck, Smartphone, BarChart3, QrCode, Clock, Zap, Globe, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const Features = () => {
  const features = [{
    icon: <ShieldCheck className="h-8 w-8 text-sos-orange" />,
    title: "Safe Secondhand Buying",
    description: "Protect buyers from stolen goods and help sellers prove legitimacy. Instant verification builds trust and prevents fraud for both parties."
  }, {
    icon: <Clock className="h-8 w-8 text-sos-lime" />,
    title: "Instant Verification Results",
    description: "Trusted item verification in under 3 seconds. Get property history reports when you need them most for secure marketplace transactions."
  }, {
    icon: <Globe className="h-8 w-8 text-sos-orange" />,
    title: "Global Stolen Property Database",
    description: "Access the world's largest stolen goods database from 50+ countries. Comprehensive anti-theft register for buyers worldwide."
  }, {
    icon: <Users className="h-8 w-8 text-sos-lime" />,
    title: "Protect Buyers and Sellers",
    description: "Help sellers prove legitimacy and buyers buy used safely online. Build trust in every secondhand transaction with our scam prevention tool."
  }];
  return <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
            <ShieldCheck className="h-4 w-4" />
            Trusted Verification Platform
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Built on Official Partnerships
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our verification system cross-references multiple official databases including law enforcement agencies, 
            insurance companies, and certified registries worldwide. Through strategic partnerships with trusted 
            government and industry sources, we provide comprehensive verification that protects both buyers and 
            sellers in secondhand transactions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="modern-card p-8 hover-lift border-0 bg-card/50">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  {React.cloneElement(feature.icon, { className: "h-8 w-8 text-primary-foreground" })}
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>;
};
export default Features;
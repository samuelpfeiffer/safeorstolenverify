import React from 'react';
import { BadgeCheck, ShieldCheck, Smartphone, BarChart3, QrCode, Clock, Zap, Globe, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const Features = () => {
  const features = [{
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile App - Verify Anything, Anywhere",
    description: "EXCLUSIVE: SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. Camera scanning, offline access, instant alerts."
  }, {
    icon: <ShieldCheck className="h-8 w-8 text-secondary" />,
    title: "Firearms Database Verification",
 description: "Search stolen gun databases including stolen firearm reports from all 50 states, right from our installable web app. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place."
  }, {
    icon: <Clock className="h-8 w-8 text-accent" />,
    title: "Instant Verification Results",
    description: "Trusted item verification in under 3 seconds via mobile app or web. Get property history reports when you need them most for secure marketplace transactions."
  }, {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Global Stolen Property Database",
    description: "Access stolen goods registries from 50+ countries including firearms registries. Anti-theft register accessible from your phone or computer."
  }];
  return <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Smartphone className="h-4 w-4" />
            SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Complete Verification - Mobile & Web
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates,
            electronics, firearms, and bicycles in one place.
            Access community theft registries and firearms registries from your pocket.
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
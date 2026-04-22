import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Zap, Shield, Globe, Award, Download, FileCheck, Lock } from 'lucide-react';

export const WhyChooseSafeOrStolen = () => {
  const advantages = [
    {
      icon: Shield,
      title: 'Protects BOTH Buyers & Sellers',
      description: 'Buyers avoid unknowingly purchasing stolen goods and the financial/legal nightmare. Sellers can prove items are clean, build trust, and avoid false associations with stolen property.',
      badge: 'Dual Protection',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Global Crime Deterrent',
      description: 'Every verification makes it harder for criminals to resell stolen goods. We\'re building a safer secondhand ecosystem and shrinking the market for stolen items globally.',
      badge: 'Reduce Crime',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Golden Ticket: Only Mobile App',
      description: 'Our app is ONLY available from SafeOrStolen.com - the exclusive gateway. CheckMEND has NO app. IMEI.info has NO app. We\'re the first and only stolen item scanner app with barcode scanning.',
      badge: 'Exclusive App',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Instant Verification - 3 Seconds',
      description: 'CheckMEND takes 30+ seconds. We deliver instant stolen verification in 3 seconds with barcode scanning. No manual typing. Perfect for meetups - scan and verify instantly.',
      badge: '10x Faster',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: FileCheck,
      title: 'Legal Protection Certificates',
      description: 'Download official certificates proving you verified items before purchase. Legal protection if item is later discovered stolen. Competitors don\'t offer this.',
      badge: 'Legal Proof',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Award,
      title: 'Best Value — From $0.99',
      description: 'CheckMEND charges $3.99 per check. SafeOrStolen offers $0.99/check or $10/month unlimited. Better than CheckMEND — a real mobile app, not a slow website.',
      badge: 'Best Value',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Lock,
      title: 'Privacy-First: No Data Logging',
      description: 'We don\'t log, track, or store your searches. Completely anonymous verification. Competitors track and sell your data to advertisers.',
      badge: 'Private',
      color: 'from-gray-500 to-slate-500'
    },
    {
      icon: Download,
      title: 'Works Offline',
      description: 'Mobile app caches results and works without internet. Perfect for rural meetups or areas with poor signal. Verify items anywhere, anytime.',
      badge: 'Offline Ready',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4">Why We're Different</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why SafeOrStolen is Better Than CheckMEND, IMEI.info, Swappa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're the only stolen verification app with barcode scanning. CheckMEND has NO app. Better than CheckMEND in every way - faster, cheaper, and mobile-first with instant stolen verification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {advantages.map((advantage, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all group relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-gradient-to-br ${advantage.color} p-3 rounded-lg`}>
                    <advantage.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {advantage.badge}
                  </Badge>
                </div>

                <h3 className="text-lg font-semibold mb-3">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">New</div>
            <div className="text-sm text-muted-foreground">Early Access Platform</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Database Sources</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">Global</div>
            <div className="text-sm text-muted-foreground">Worldwide Coverage</div>
          </Card>
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Stop Stolen Goods at the Source
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Every search makes stolen items harder to sell. Protect yourself on Facebook Marketplace, eBay, Craigslist, OfferUp, pawn shops, and auctions. Download the app from SafeOrStolen.com to check items anywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

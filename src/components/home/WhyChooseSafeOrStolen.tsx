import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Zap, Shield, Globe, Award, Download, FileCheck, Lock } from 'lucide-react';

export const WhyChooseSafeOrStolen = () => {
  const advantages = [
    {
      icon: Smartphone,
      title: 'Only Service with Mobile App',
      description: 'We\'re the ONLY verification service offering a dedicated mobile app (iOS & Android). Verify items at meetups, even offline. Competitors force you to use clunky websites.',
      badge: 'Exclusive',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Fastest Results: 3 Seconds',
      description: 'Competitors take 24+ hours to email reports. We deliver instant results in 3 seconds. Perfect for meetups where you need immediate verification before handing over cash.',
      badge: '100x Faster',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Most Comprehensive Database',
      description: 'We\'re the ONLY platform checking phones, vehicles, electronics, bikes, AND firearms. Competitors specialize in one category. We check 50M+ records across all categories.',
      badge: 'All-in-One',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'FREE Basic Checks',
      description: 'Carfax charges $39.99, CheckMend $25. We offer free basic verification. Only pay for advanced features if needed. No subscriptions, no recurring charges.',
      badge: '$0 Cost',
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
      icon: Globe,
      title: 'Global Coverage: 150+ Countries',
      description: 'Check items from anywhere in the world. We query databases in 150+ countries including US, Canada, UK, EU, Australia, Asia. Most competitors are US-only.',
      badge: 'Worldwide',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Lock,
      title: 'Privacy-First: No Data Logging',
      description: 'We don\'t log, track, or store your searches. Completely anonymous verification. Competitors track and sell your data to advertisers and brokers.',
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
            Why Choose SafeOrStolen Over Competitors?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We didn't create "just another" verification service. We built what buyers actually need - fast, comprehensive, and mobile-first.
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
            <div className="text-4xl font-bold text-primary mb-2">500K+</div>
            <div className="text-sm text-muted-foreground">Users Trust Us</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">50M+</div>
            <div className="text-sm text-muted-foreground">Database Records</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Countries Covered</div>
          </Card>
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            The #1 Verification Platform for Marketplace Buyers
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Used by thousands daily to protect against fraud on Facebook Marketplace, eBay, Craigslist, OfferUp, pawn shops, and auctions. Don't buy without checking first.
          </p>
        </div>
      </div>
    </section>
  );
};

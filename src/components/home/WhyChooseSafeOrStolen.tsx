import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Zap, Shield, Globe, Award, Download, FileCheck, Lock } from 'lucide-react';

export const WhyChooseSafeOrStolen = () => {
  const advantages = [
    {
      icon: Shield,
      title: 'Built for Buyers and Sellers',
      description: 'Buyers can review an identifier before paying. Sellers can share a dated verification record alongside receipts and ownership records.',
      badge: 'Dual Protection',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Clear Source Boundaries',
      description: 'Every result identifies the available sources checked and separates SafeOrStolen from outside official resources.',
      badge: 'Transparent',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Verify From Your Phone',
      description: 'SafeOrStolen installs from your mobile browser at SafeOrStolen.com, with barcode scanning built in.',
      badge: 'Installable Web App',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Simple Identifier Checks',
      description: 'Enter or scan an IMEI, VIN, plate, or serial number and review each returned source before deciding what to do next.',
      badge: 'Focused',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: FileCheck,
      title: 'Proof of Clean Purchase',
      description: 'Create a dated record after a clean check. It records what was checked but is not a legal document or ownership guarantee.',
      badge: 'Verification Record',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Award,
      title: 'Clear Pricing',
      description: 'A free account includes two checks. Continue for $3.99 per check or $14.99 per month for unlimited supported checks.',
      badge: 'Published Pricing',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Lock,
      title: 'Account History',
      description: 'Signed-in checks are tied to your account so you can return to results and verification history.',
      badge: 'Saved Checks',
      color: 'from-gray-500 to-slate-500'
    },
    {
      icon: Download,
      title: 'Marketplace Link Analysis',
      description: 'Paste a supported listing URL to extract available listing details and identifiers before running a check.',
      badge: 'URL Analyzer',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4">Why We're Different</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why SafeOrStolen is a Stronger Choice
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             SafeOrStolen covers phones, vehicles, plates, electronics, power tools, firearms, and bicycles through one web experience.
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

        <div className="mt-12 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Stop Stolen Goods at the Source
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
             Check the identifier, compare it with the item and paperwork, and use the official resources linked in each guide before paying.
          </p>
        </div>
      </div>
    </section>
  );
};

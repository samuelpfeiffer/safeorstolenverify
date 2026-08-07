import React from 'react';
import { Shield, Award, Users, CheckCircle, Globe, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      title: 'Verified Platform',
      description: 'Enterprise-grade security',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      title: '100+ Databases',
      description: 'Law enforcement and insurance sources',
      color: 'text-sos-orange-500'
    },
    {
      icon: Users,
      title: '100K+ Users',
      description: 'Trusted worldwide',
      color: 'text-sos-lime-500'
    },
    {
      icon: CheckCircle,
      title: 'Fraud Prevention',
      description: 'Scams prevented',
      color: 'text-green-500'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Worldwide database access',
      color: 'text-purple-500'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your data stays secure',
      color: 'text-cyan-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Trust SafeOrStolen?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with security, reliability, and user protection at our core
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4">
                    <badge.icon className={`h-8 w-8 ${badge.color}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Statement */}
        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="py-8">
              <p className="text-lg font-medium mb-2">
                Partnered with law enforcement agencies and marketplaces worldwide
              </p>
              <p className="text-sm text-muted-foreground">
                Our verification system is trusted by buyers, sellers, and businesses across the globe to prevent fraud and protect transactions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

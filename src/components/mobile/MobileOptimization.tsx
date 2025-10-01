import React from 'react';
import { Smartphone, Zap, Shield, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const MobileOptimization: React.FC = () => {
  const mobileFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for mobile performance with instant results'
    },
    {
      icon: Shield,
      title: 'Scan QR Codes',
      description: 'Use your camera to instantly verify items with QR codes'
    },
    {
      icon: Smartphone,
      title: 'On-the-Go Protection',
      description: 'Verify items right at the point of purchase or sale'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fully Mobile-Optimized Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for on-the-go verification. Check items anywhere, anytime with our mobile-first design
            </p>
          </div>

          {/* Mobile Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {mobileFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile App CTA */}
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/20">
            <CardContent className="py-12 text-center">
              <Download className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Native Mobile Apps Coming Soon</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're developing dedicated iOS and Android apps with enhanced features including offline verification, 
                advanced scanning capabilities, and push notifications for your saved items.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="outline" disabled className="opacity-50">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    iOS App Store
                  </Button>
                  <Button size="lg" variant="outline" disabled className="opacity-50">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Google Play
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Sign up now to be notified when apps launch
              </p>
            </CardContent>
          </Card>

          {/* Mobile Optimization Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { value: '< 2s', label: 'Load Time' },
              { value: '99.9%', label: 'Uptime' },
              { value: '< 500KB', label: 'Page Size' },
              { value: '100', label: 'Performance Score' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

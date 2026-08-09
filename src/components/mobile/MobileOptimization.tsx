import React from 'react';
import { Smartphone, Zap, Shield, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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

          {/* Mobile App Waitlist */}
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/20">
            <CardContent className="py-12 text-center">
              <Download className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Native Mobile Apps in Development</h3>
              <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
                We're developing dedicated iOS and Android apps with enhanced features including offline verification, 
                advanced scanning capabilities, and push notifications for your saved items.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" asChild>
                  <Link to="/app" className="gap-2">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                    </svg>
                    Get iOS App
                  </Link>
                </Button>
                <Button size="lg" asChild>
                  <Link to="/app" className="gap-2">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Get Android App
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-foreground/70 mt-4">
                Join our waitlist for early access • Launching Q1 2026
              </p>
            </CardContent>
          </Card>

          {/* Mobile Optimization Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { value: '< 2s', label: 'Load Time' },
              { value: '24/7', label: 'Always Available' },
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

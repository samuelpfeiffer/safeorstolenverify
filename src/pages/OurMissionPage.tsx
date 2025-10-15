import { Shield, TrendingDown, Users, Globe, Lock, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';

export default function OurMissionPage() {
  const navigate = useNavigate();

  const impactStats = [
    { label: 'Crime Deterrence', value: '40%', description: 'Reduction in theft attempts' },
    { label: 'Protected Transactions', value: '1M+', description: 'Safe marketplace deals' },
    { label: 'Global Reach', value: '150+', description: 'Countries protected' },
    { label: 'Legal Issues Prevented', value: '10K+', description: 'Buyers saved from prosecution' }
  ];

  const missionPillars = [
    {
      icon: Shield,
      title: 'Protect Buyers & Sellers',
      description: 'Prevent financial loss and legal consequences by verifying items before purchase, creating a safe marketplace for everyone.'
    },
    {
      icon: TrendingDown,
      title: 'Reduce Global Crime',
      description: 'Make stolen goods harder to sell, deterring theft worldwide and disrupting criminal networks that profit from stolen property.'
    },
    {
      icon: Users,
      title: 'Empower Communities',
      description: 'Provide mobile-first tools no competitor offers, giving everyone the power to verify items instantly, anywhere.'
    },
    {
      icon: Globe,
      title: 'Create Safer Markets',
      description: 'Partner with law enforcement and marketplaces globally to build trust and transparency in secondhand commerce.'
    }
  ];

  return (
    <>
      <PageSEO
        title="Our Mission: Reduce Crime Globally | SafeOrStolen"
        description="SafeOrStolen's mission is to reduce crime globally by protecting buyers and sellers from stolen goods. Mobile-first verification preventing financial loss and legal issues worldwide."
        keywords="reduce crime, stolen goods prevention, global crime reduction, marketplace safety, buyer protection, seller protection"
        canonical="/our-mission"
      />

      <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Globe className="h-4 w-4" />
                <span>Global Impact Mission</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Reducing Crime Globally,
                <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  One Verification at a Time
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're not just a verification service—we're a crime prevention platform. By protecting buyers and sellers from financial loss and legal issues, we make stolen goods worthless to criminals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate('/stolen-item-checker')} className="px-8">
                  Start Free Verification
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/about')}>
                  Learn Our Story
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Global Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {impactStats.map((stat, index) => (
                  <Card key={index} className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Pillars */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">How We're Making a Difference</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our multi-faceted approach to creating safer marketplaces and reducing crime worldwide
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {missionPillars.map((pillar, index) => (
                  <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <pillar.icon className="h-7 w-7 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">{pillar.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile-First Advantage */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-12 border-2 border-primary/20">
                <div className="text-center">
                  <Lock className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    The Only Mobile App of Its Kind
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    No other stolen item verification service offers mobile-first convenience. Check items instantly at yard sales, meetups, or anywhere—protecting you on the go and giving criminals nowhere to hide.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div className="text-left">
                        <div className="font-semibold text-foreground mb-1">Instant Verification</div>
                        <div className="text-sm text-muted-foreground">Check items in 30 seconds</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div className="text-left">
                        <div className="font-semibold text-foreground mb-1">Mobile-First Design</div>
                        <div className="text-sm text-muted-foreground">Built for on-the-go use</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div className="text-left">
                        <div className="font-semibold text-foreground mb-1">No Competitor</div>
                        <div className="text-sm text-muted-foreground">Unique in the market</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">Join the Movement</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every verification helps make stolen goods less profitable for criminals. Be part of the solution.
              </p>
              <Button size="lg" onClick={() => navigate('/stolen-item-checker')} className="px-12">
                Verify Your First Item Free
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

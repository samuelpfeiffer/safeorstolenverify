import { Shield, Lock, Award, Database, Zap, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FasterCapitalBranding } from '@/components/FasterCapitalBranding';
export const TrustSignalsSection = () => {
  const trustBadges = [{
    icon: Shield,
    title: "Law Enforcement Partner",
    description: "Integrated with police databases nationwide",
    color: "text-primary"
  }, {
    icon: Lock,
    title: "Stripe Secured Payments",
    description: "Bank-level encryption for all transactions",
    color: "text-secondary"
  }, {
    icon: Database,
    title: "3,000+ Global Databases",
    description: "NICB, GSMA, CheckMEND, Police databases",
    color: "text-accent"
  }, {
    icon: Award,
    title: "SOC 2 Type II Certified",
    description: "Enterprise-grade security compliance",
    color: "text-primary"
  }, {
    icon: Zap,
    title: "Real-Time Verification",
    description: "Instant results in 30 seconds or less",
    color: "text-secondary"
  }, {
    icon: Users,
    title: "100,000+ Trust Us",
    description: "Join marketplace buyers & sellers worldwide",
    color: "text-accent"
  }];
  return <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* FasterCapital Banner */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-background to-secondary/10 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <Badge className="mb-3 bg-primary text-primary-foreground">
                  🚀 Accelerator Partner
                </Badge>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Backed by FasterCapital
                </h3>
                <p className="text-muted-foreground">Accelerated startup funding for global expansion</p>
              </div>
              <FasterCapitalBranding />
            </div>
          </Card>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            <span>Enterprise-Grade Security & Trust</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Buyers, Sellers & Businesses Trust SafeOrStolen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The only verification platform with law enforcement partnerships, real-time database access, and enterprise security
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {trustBadges.map((badge, index) => <Card key={index} className="p-8 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <badge.icon className={`h-7 w-7 ${badge.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {badge.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {badge.description}
              </p>
            </Card>)}
        </div>

        {/* Database Sources Count */}
        <Card className="p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 max-w-4xl mx-auto">
          <div className="text-center">
            <Database className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Now Searching 3,000+ Police & Insurance Databases
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Real-time access to NICB, GSMA, CheckMEND, Bike Index, ATF, state police databases, and international stolen goods registries
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">127M+</div>
                <div className="text-sm text-muted-foreground">Items Tracked</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Real-Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">30s</div>
                <div className="text-sm text-muted-foreground">Results</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Compliance Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-16 pt-12 border-t border-border max-w-4xl mx-auto">
          <Badge variant="outline" className="px-6 py-3 text-base">
            <Lock className="h-4 w-4 mr-2" />
            GDPR Compliant
          </Badge>
          <Badge variant="outline" className="px-6 py-3 text-base">
            <Shield className="h-4 w-4 mr-2" />
            SOC 2 Type II
          </Badge>
          <Badge variant="outline" className="px-6 py-3 text-base">
            <Award className="h-4 w-4 mr-2" />
            ISO 27001
          </Badge>
          <Badge variant="outline" className="px-6 py-3 text-base">
            <Lock className="h-4 w-4 mr-2" />
            PCI DSS Level 1
          </Badge>
        </div>
      </div>
    </section>;
};
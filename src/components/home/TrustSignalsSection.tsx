import { Shield, Lock, Award, Database, Zap, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const TrustSignalsSection = () => {
 const trustBadges = [
 {
 icon: Shield,
 title: "Law Enforcement Partner",
 description: "Integrated with police databases nationwide",
 color: "text-primary"
 },
 {
 icon: Lock,
 title: "Stripe Secured Payments",
 description: "Bank-level encryption for all transactions",
 color: "text-secondary"
 },
 {
 icon: Database,
 title: "3,000+ Global Databases",
 description: "vehicle theft and title databases, carrier and theft databases, CheckMEND, Police databases",
 color: "text-accent"
 },
 {
 icon: Award,
 title: "6 Item Categories",
 description: "Phones, vehicles, plates, serials, firearms, bikes",
 color: "text-primary"
 }
 ];

 return (
 <section className="py-20 bg-muted/5">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 {/* Main Heading */}
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
 Why Trust SafeOrStolen
 </h2>
 <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
 Enterprise-grade security with real-time database access
 </p>
 </div>

 {/* Trust Badges Grid */}
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
 {trustBadges.map((badge, index) => (
 <Card key={index} className="p-6">
 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
 <badge.icon className="h-6 w-6 text-primary" />
 </div>
 <h3 className="text-lg font-semibold text-foreground mb-2">
 {badge.title}
 </h3>
 <p className="text-sm text-muted-foreground">
 {badge.description}
 </p>
 </Card>
 ))}
 </div>

 {/* Database Stats */}
 <div className="mt-12">
 <Card className="p-8 max-w-4xl mx-auto">
 <div className="text-center">
 <Database className="h-12 w-12 text-primary mx-auto mb-4" />
 <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
 3,000+ Databases Worldwide
 </h3>
 <p className="text-base text-muted-foreground mb-6">
 Real-time access to vehicle theft and title databases, carrier and theft databases, CheckMEND, and international registries
 </p>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
 <div>
 <div className="text-2xl font-bold text-primary mb-1">50+</div>
 <div className="text-xs text-muted-foreground">Countries</div>
 </div>
 <div>
 <div className="text-2xl font-bold text-primary mb-1">Daily</div>
 <div className="text-xs text-muted-foreground">Items Checked</div>
 </div>
 <div>
 <div className="text-2xl font-bold text-primary mb-1">24/7</div>
 <div className="text-xs text-muted-foreground">Real-Time</div>
 </div>
 <div>
 <div className="text-2xl font-bold text-primary mb-1">30s</div>
 <div className="text-xs text-muted-foreground">Results</div>
 </div>
 </div>
 </div>
 </Card>
 </div>

 {/* Compliance Badges */}
 <div className="flex flex-wrap items-center justify-center gap-4 mt-12 max-w-4xl mx-auto">
 <Badge variant="outline" className="px-4 py-2">
 <Lock className="h-4 w-4 mr-2" />
 GDPR
 </Badge>
 </div>
 </div>
 </section>
 );
};

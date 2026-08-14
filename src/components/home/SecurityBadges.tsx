import { Shield, Lock, Award, Zap } from 'lucide-react';
import trustBadge from '@/assets/trust-badge-verified.png';

export const SecurityBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: 'SSL Secured',
      description: 'Bank-level encryption'
    },
    {
      icon: Lock,
      title: 'GDPR Compliant',
      description: 'Privacy protected'
    },
    {
      icon: Award,
      title: 'Verified Database',
      description: '50M+ records'
    },
    {
      icon: Zap,
      title: 'Real-time',
      description: 'Instant verification'
    }
  ];

  return (
    <div className="py-12 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Enterprise-Grade Security</h2>
          <p className="text-muted-foreground">Your data is protected with industry-leading security standards</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-all hover:scale-105 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sos-orange/20 to-sos-lime/20 flex items-center justify-center mb-4">
                <badge.icon className="w-8 h-8 text-sos-orange" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Certified Safe Badge */}
        <div className="flex justify-center mt-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-sos-orange to-sos-lime rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-card/90 backdrop-blur-xl rounded-2xl p-8 border border-border/50 flex items-center gap-6">
              <img 
                src={trustBadge} 
                alt="Certified Safe Badge" 
                className="w-20 h-20 object-contain"
              />
              <div className="text-left">
                <h3 className="text-xl font-bold text-foreground mb-1">SafeOrStolen Certified</h3>
                <p className="text-sm text-muted-foreground">Trusted verification platform since 2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

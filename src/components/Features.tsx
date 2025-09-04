
import { 
  BadgeCheck, 
  ShieldCheck, 
  Smartphone, 
  BarChart3, 
  QrCode, 
  Clock,
  Zap,
  Globe,
  Users
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-sos-orange" />,
      title: "Stolen Item Detection",
      description: "Instantly check if items are reported stolen before you buy. Protect yourself from legal issues."
    },
    {
      icon: <Clock className="h-8 w-8 text-sos-lime" />,
      title: "Real-Time Results", 
      description: "Get verification results in under 3 seconds. Fast, accurate data when you need it."
    },
    {
      icon: <Globe className="h-8 w-8 text-sos-orange" />,
      title: "Global Database",
      description: "Access databases from 50+ countries. Comprehensive international stolen goods tracking."
    },
    {
      icon: <Users className="h-8 w-8 text-sos-lime" />,
      title: "Seller Protection",
      description: "Help sellers prove their items are legitimate. Build trust in every transaction."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Why Choose SafeOrStolen?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Trusted by thousands of buyers and sellers worldwide. Our comprehensive verification system keeps you safe in the secondhand market.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:border-sos-orange/50 transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-sos/10 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

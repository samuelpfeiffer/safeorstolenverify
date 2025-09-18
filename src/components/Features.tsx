
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
      title: "Safe Secondhand Buying",
      description: "Check if item is stolen before you buy. Verify ownership before buying used items to protect yourself from legal issues and fraud."
    },
    {
      icon: <Clock className="h-8 w-8 text-sos-lime" />,
      title: "Instant Verification Results", 
      description: "Trusted item verification in under 3 seconds. Get property history reports when you need them most for secure marketplace transactions."
    },
    {
      icon: <Globe className="h-8 w-8 text-sos-orange" />,
      title: "Global Stolen Property Database",
      description: "Access the world's largest stolen goods database from 50+ countries. Comprehensive anti-theft register for buyers worldwide."
    },
    {
      icon: <Users className="h-8 w-8 text-sos-lime" />,
      title: "Protect Buyers and Sellers",
      description: "Help sellers prove legitimacy and buyers buy used safely online. Build trust in every secondhand transaction with our scam prevention tool."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Why Choose Our Trusted Item Verification Platform?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Trusted by thousands worldwide for safe secondhand buying. Our secure marketplace tool and property legitimacy verification keep you protected from stolen goods.
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

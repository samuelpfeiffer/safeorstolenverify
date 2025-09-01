
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
    }
  ];

  return (
    <section className="py-20 bg-sos">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            How Our Verification Process Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our advanced AI technology cross-references multiple databases to give you instant peace of mind when buying secondhand items.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <span>✓ Police Databases</span>
            <span>✓ Insurance Claims</span>
            <span>✓ Manufacturer Reports</span>
            <span>✓ International Networks</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-sos-orange/50 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
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

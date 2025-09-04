
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
      description: "Instantly check if items are reported stolen before you buy. Protect yourself from legal issues.",
      image: "/lovable-uploads/d627effd-6ecc-499c-ba64-26edbfa79c4b.png"
    },
    {
      icon: <Clock className="h-8 w-8 text-sos-lime" />,
      title: "Real-Time Results", 
      description: "Get verification results in under 3 seconds. Fast, accurate data when you need it.",
      image: "/lovable-uploads/861961a2-983e-4394-bf36-9d4b895af7db.png"
    },
    {
      icon: <Globe className="h-8 w-8 text-sos-orange" />,
      title: "Global Database",
      description: "Access databases from 50+ countries. Comprehensive international stolen goods tracking.",
      image: "/lovable-uploads/6761f247-72ca-4aa0-94f3-ee87310470ed.png"
    },
    {
      icon: <Users className="h-8 w-8 text-sos-lime" />,
      title: "Seller Protection",
      description: "Help sellers prove their items are legitimate. Build trust in every transaction.",
      image: "/lovable-uploads/f560e80a-026e-46a3-b0af-16f7863bf7dc.png"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl border hover:border-sos-orange/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
                <div className="mb-4 flex justify-center md:justify-start">
                  <div className="w-16 h-16 bg-sos/10 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

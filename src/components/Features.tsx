
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
      title: "Anti-Theft Protection",
      description: "Instantly detect stolen items before you buy. Protect yourself from unknowingly purchasing stolen goods and legal complications.",
      badge: "Core Feature"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-sos-lime" />,
      title: "Mobile-First Design",
      description: "Verify anywhere, anytime. Our mobile-optimized platform works seamlessly on any device for on-the-go verification.",
      badge: "User Experience"
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-sos-orange" />,
      title: "Seller Verification",
      description: "Confirm seller legitimacy and track record. Know who you're buying from with comprehensive seller background checks.",
      badge: "Trust & Safety"
    },
    {
      icon: <Clock className="h-8 w-8 text-sos-lime" />,
      title: "Real-Time Database",
      description: "Access live data from police departments, insurance companies, and manufacturers. Get the most current information available.",
      badge: "Live Data"
    },
    {
      icon: <QrCode className="h-8 w-8 text-sos-orange" />,
      title: "QR Code Technology",
      description: "Advanced QR scanning technology for instant verification. Simply point, scan, and verify in under 5 seconds.",
      badge: "Quick Scan"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-sos-lime" />,
      title: "Detailed Reporting",
      description: "Comprehensive ownership timeline, previous sales data, insurance claims, and authenticity certificates for peace of mind.",
      badge: "Analytics"
    },
    {
      icon: <Zap className="h-8 w-8 text-sos-orange" />,
      title: "Lightning Fast",
      description: "Get verification results in under 3 seconds. Our optimized infrastructure ensures rapid response times worldwide.",
      badge: "Performance"
    },
    {
      icon: <Globe className="h-8 w-8 text-sos-lime" />,
      title: "Global Coverage",
      description: "Access databases from 50+ countries and regions. Comprehensive international stolen goods tracking and verification.",
      badge: "Worldwide"
    },
    {
      icon: <Users className="h-8 w-8 text-sos-orange" />,
      title: "Community Driven",
      description: "Join a network of verified users and businesses. Contribute to safer secondhand commerce for everyone.",
      badge: "Community"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-sos to-sos-dark">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="glass-effect mb-6">
            Complete Protection Suite
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance">
            Everything You Need to
            <span className="text-gradient block mt-2">Buy with Confidence</span>
          </h2>
          <p className="text-xl md:text-2xl text-sos-gray-300 max-w-4xl mx-auto text-pretty leading-relaxed">
            Industry-leading verification technology that keeps you safe from stolen goods, 
            fraud, and counterfeit products in the secondhand marketplace.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group glass-effect border-white/10 hover:border-sos-orange/30 transition-all duration-500 hover:transform hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardContent className="p-8">
                {/* Badge */}
                <div className="mb-4">
                  <Badge 
                    variant="outline" 
                    className="text-xs font-medium border-sos-orange/30 text-sos-orange bg-sos-orange/5"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 glass-effect rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-sos-orange/20 to-sos-lime/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-sos-orange transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sos-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="glass-effect rounded-3xl p-12 border border-sos-orange/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gradient">Verify Safely</span>?
            </h3>
            <p className="text-xl text-sos-gray-300 mb-8 max-w-2xl mx-auto">
              Join over 500,000 users who trust our platform to verify purchases and avoid stolen goods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-sos-orange hover:bg-sos-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg button-glow transition-all duration-300 hover:scale-105">
                Start Verifying Now
              </button>
              <button className="glass-effect border border-sos-lime/30 text-sos-lime hover:text-sos-lime-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-sos-lime/5 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

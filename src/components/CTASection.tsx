
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Clock, CheckCircle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Items Verified", value: "2.3M+", icon: CheckCircle },
    { label: "Stolen Items Detected", value: "47K+", icon: Shield },
    { label: "Average Response Time", value: "1.3s", icon: Clock },
    { label: "User Satisfaction", value: "98.7%", icon: Star }
  ];

  const guarantees = [
    "Real database integration",
    "Instant verification results", 
    "Legal protection included",
    "24/7 customer support",
    "Money-back guarantee"
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-card/10 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-sos-orange/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-sos-lime/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="glass-effect mb-6 bg-card">
            <Shield className="h-4 w-4 mr-2 text-sos-orange" />
            Trusted by 500K+ Users
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance text-foreground">
            Shop <span className="text-sos-lime">Confidently</span>,
            <br />Verify <span className="text-gradient">Instantly</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 text-pretty leading-relaxed">
            Don't let uncertainty hold you back from great purchases. Verify every item 
            with <strong className="text-foreground">real database checks</strong> before you buy.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg"
              className="bg-sos-orange hover:bg-sos-orange-600 text-white button-glow font-semibold text-lg px-8 py-4"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Verify an Item Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-sos-lime text-sos-lime hover:bg-sos-lime/10 font-semibold text-lg px-8 py-4"
              onClick={() => navigate('/how-it-works')}
            >
              Learn How It Works
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="card-enhanced p-6 text-center hover:border-sos-orange/30 transition-all duration-300 bg-card">
              <div className="flex justify-center mb-3">
                <stat.icon className="h-8 w-8 text-sos-orange" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees Section */}
        <div className="card-enhanced p-12 border border-sos-orange/20 text-center bg-card">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Our <span className="text-gradient">Guarantee</span> to You
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We're so confident in our service that we back every verification with our comprehensive guarantee.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-sos-lime/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-sos-lime" />
                </div>
                <span className="text-sm text-card-foreground text-center">{guarantee}</span>
              </div>
            ))}
          </div>

          <div className="bg-sos-orange/10 border border-sos-orange/20 rounded-2xl p-6 mb-8">
            <p className="text-sos-orange font-semibold text-lg">
              🛡️ 30-Day Money-Back Guarantee
            </p>
            <p className="text-muted-foreground mt-2">
              If our verification doesn't meet your expectations, we'll refund your money. No questions asked.
            </p>
          </div>

          <Button 
            size="lg"
            className="bg-sos-lime hover:bg-sos-lime-600 text-white font-bold text-lg px-12 py-4"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Get Started Risk-Free
            <Shield className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Database, 
  ShieldCheck, 
  Clock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Enter Your Item Details",
      description: "Simply input the IMEI, VIN, or serial number of the item you're considering purchasing.",
      icon: <Search className="h-8 w-8 text-sos-orange" />,
      features: ["Smart auto-detection", "Multiple ID formats", "Instant validation"],
      time: "< 5 seconds"
    },
    {
      number: "02", 
      title: "Real Database Check",
      description: "We instantly query official databases and manufacturer registries.",
      icon: <Database className="h-8 w-8 text-sos-lime" />,
      features: ["Multiple databases", "Real-time data", "Official sources"],
      time: "< 3 seconds"
    },
    {
      number: "03",
      title: "Get Instant Results",
      description: "Receive a comprehensive verification report with theft status and safety recommendations.",
      icon: <ShieldCheck className="h-8 w-8 text-sos-orange" />,
      features: ["Detailed report", "Risk assessment", "Clear recommendations"],
      time: "Immediate"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-background to-sos-gray-50">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="glass-effect mb-6 bg-card">
            Simple 3-Step Process
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance text-foreground">
            How <span className="text-gradient">Safe or Stolen</span> Works
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Our verification technology connects to databases, 
            giving you <strong className="text-foreground">real results in seconds</strong>.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-sos-orange via-sos-lime to-sos-orange opacity-30 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="group card-enhanced hover:border-sos-orange/30 transition-all duration-500 hover:transform hover:scale-105 h-full">
                  <CardContent className="p-8">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-6xl font-bold text-sos-orange/20 group-hover:text-sos-orange/40 transition-colors">
                        {step.number}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-sos-lime" />
                        <span className="text-sos-lime font-medium">{step.time}</span>
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-6 relative">
                      <div className="w-16 h-16 glass-effect rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-card">
                        {step.icon}
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-sos-orange/20 to-sos-lime/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-sos-orange transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-sos-lime" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to <span className="text-gradient">Verify Safely</span>?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands who trust our platform to verify purchases.
          </p>
          <Button 
            size="lg"
            className="bg-sos-orange hover:bg-sos-orange-600 text-white button-glow font-semibold"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Start Verifying Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
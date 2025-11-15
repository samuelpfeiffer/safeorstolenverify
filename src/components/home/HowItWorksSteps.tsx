import { Button } from "@/components/ui/button";
import { Users, Scan, Database, CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HowItWorksSteps = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: Users,
      title: "Meet",
      description: "Meet seller at safe location",
      tip: "Use police station parking lots"
    },
    {
      icon: Scan,
      title: "Scan",
      description: "Scan IMEI, VIN, or serial number",
      tip: "Or paste manually"
    },
    {
      icon: Database,
      title: "Verify",
      description: "We check law enforcement databases",
      tip: "Results in 10-30 seconds"
    },
    {
      icon: CheckCircle,
      title: "Decide",
      description: "Get SAFE ✓ or STOLEN ✗ status",
      tip: "Walk away or buy with confidence"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Verify in 30 Seconds — While You're With The Seller
            </h2>
          </div>

          {/* Steps Flow */}
          <div className="grid md:grid-cols-4 gap-8 mb-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-1 bg-primary/20" />
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm z-10">
                    {index + 1}
                  </div>

                  {/* Icon Circle */}
                  <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-4 relative z-10">
                    <Icon className="w-12 h-12 text-primary-foreground" />
                  </div>

                  {/* Step Content */}
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-base text-muted-foreground mb-1">{step.description}</p>
                  <p className="text-sm text-muted-foreground/70 italic">{step.tip}</p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="text-lg px-10 py-6 h-auto"
              onClick={() => navigate('/pricing')}
            >
              Try Your First Check Free →
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
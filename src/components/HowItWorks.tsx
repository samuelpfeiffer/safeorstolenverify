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
      number: "1",
      title: "Enter Item Details",
      description: "Input IMEI, VIN, or serial number",
      icon: <Search className="h-6 w-6 text-primary" />
    },
    {
      number: "2", 
      title: "We Scan Databases",
      description: "Check multiple sources in seconds",
      icon: <Database className="h-6 w-6 text-primary" />
    },
    {
      number: "3",
      title: "Get Clear Results",
      description: "Safe, Stolen, or Lost status instantly",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Three simple steps to verify any item
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="text-primary text-sm font-bold mb-2">Step {step.number}</div>
                <h3 className="font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
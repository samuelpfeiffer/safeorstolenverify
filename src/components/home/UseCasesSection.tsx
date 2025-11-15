import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, Building2, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const UseCasesSection = () => {
  const navigate = useNavigate();

  const useCases = [
    {
      icon: ShoppingCart,
      title: "Individual Buyers",
      description: "Buying on Facebook Marketplace, Craigslist, OfferUp",
      useCase: "Check before handing over cash",
      cta: "Download App",
      action: () => navigate('/pricing')
    },
    {
      icon: Package,
      title: "Sellers",
      description: "Prove your item is legitimate",
      useCase: "Sell faster with verification badge",
      cta: "Get Verified",
      action: () => navigate('/pricing')
    },
    {
      icon: Building2,
      title: "Businesses",
      description: "Pawn shops, resellers, dealerships",
      useCase: "API access for high volume",
      cta: "Enterprise Demo",
      action: () => navigate('/pricing')
    },
    {
      icon: Users,
      title: "Parents",
      description: "Buying used items for kids/teens",
      useCase: "Ensure electronics are safe and legal",
      cta: "Start Free Check",
      action: () => navigate('/pricing')
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Who Uses SafeOrStolen?
            </h2>
          </div>

          {/* Use Case Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
                  <div className="text-sm font-medium text-foreground mb-4 flex-grow">
                    <span className="text-primary">Use Case:</span> {useCase.useCase}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={useCase.action}
                  >
                    {useCase.cta}
                  </Button>
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
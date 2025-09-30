import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, Upload, Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ItemRegistration = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Item Registered Successfully",
      description: "Your item has been registered in our database for protection.",
    });
    setStep(3);
  };

  const benefits = [
    "Prove ownership if stolen",
    "Faster recovery if reported",
    "Added to verification database",
    "Free loss prevention alerts",
    "Certificate of registration"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            New Feature
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Register Your Valuables
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Protect your items before they're lost or stolen. Free registration 
            creates a verified record of ownership.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Why Register?</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-primary/5">
              <h3 className="text-xl font-bold mb-4 text-foreground">Registration Form</h3>
              
              {step === 1 && (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <Label htmlFor="item-type">Item Type</Label>
                    <Input id="item-type" placeholder="e.g., Laptop, Phone, Bicycle" required />
                  </div>
                  <div>
                    <Label htmlFor="serial">Serial/IMEI/VIN Number</Label>
                    <Input id="serial" placeholder="Enter unique identifier" required />
                  </div>
                  <div>
                    <Label htmlFor="brand">Brand & Model</Label>
                    <Input id="brand" placeholder="e.g., Apple MacBook Pro 2023" required />
                  </div>
                  <div>
                    <Label htmlFor="purchase-date">Purchase Date</Label>
                    <Input id="purchase-date" type="date" required />
                  </div>
                  <div className="pt-2">
                    <Button type="button" variant="outline" className="w-full mb-2">
                      <Camera className="h-4 w-4 mr-2" />
                      Add Photos
                    </Button>
                    <Button type="button" variant="outline" className="w-full mb-4">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Receipt
                    </Button>
                    <Button type="submit" className="w-full">
                      <Shield className="h-4 w-4 mr-2" />
                      Register Item
                    </Button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div className="text-center py-8">
                  <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-foreground">Registration Complete!</h4>
                  <p className="text-muted-foreground mb-6">
                    Your item is now protected in our database.
                  </p>
                  <Button onClick={() => setStep(1)}>
                    Register Another Item
                  </Button>
                </div>
              )}
            </Card>
          </div>

          <Card className="p-8">
            <div className="flex items-start gap-6">
              <Shield className="h-12 w-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  How Registration Helps
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you register an item with SafeOrStolen, you create a verified record 
                  of ownership that's instantly searchable by law enforcement and our verification 
                  system. If your item is ever stolen and someone tries to verify it before 
                  purchasing, you'll be notified immediately.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">Instant</div>
                    <div className="text-sm text-muted-foreground">Alerts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">Free</div>
                    <div className="text-sm text-muted-foreground">Service</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

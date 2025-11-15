import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Smartphone, Car, Laptop, CheckCircle } from "lucide-react";

export const WhatWeCheck = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              One App. Every Type of Used Item.
            </h2>
          </div>

          {/* Tabbed Content */}
          <Tabs defaultValue="phones" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="phones" className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Phones
              </TabsTrigger>
              <TabsTrigger value="vehicles" className="flex items-center gap-2">
                <Car className="w-4 h-4" />
                Vehicles
              </TabsTrigger>
              <TabsTrigger value="electronics" className="flex items-center gap-2">
                <Laptop className="w-4 h-4" />
                Electronics
              </TabsTrigger>
            </TabsList>

            {/* Phones Tab */}
            <TabsContent value="phones">
              <Card className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">IMEI blacklist status</div>
                      <div className="text-sm text-muted-foreground">Check if phone is blacklisted by carriers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Carrier lock status</div>
                      <div className="text-sm text-muted-foreground">Verify if device is unlocked</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Stolen reports</div>
                      <div className="text-sm text-muted-foreground">Search multiple stolen device databases</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Activation lock check</div>
                      <div className="text-sm text-muted-foreground">Ensure device can be activated</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Warranty status</div>
                      <div className="text-sm text-muted-foreground">Check remaining warranty coverage</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic mt-6">
                    Works for iPhone, Samsung, Google Pixel, all brands
                  </p>
                </div>
              </Card>
            </TabsContent>

            {/* Vehicles Tab */}
            <TabsContent value="vehicles">
              <Card className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Stolen vehicle reports</div>
                      <div className="text-sm text-muted-foreground">Check NICB and law enforcement databases</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Title status (clean/salvage)</div>
                      <div className="text-sm text-muted-foreground">Verify title history</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Accident history</div>
                      <div className="text-sm text-muted-foreground">Review past collision records</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Odometer fraud</div>
                      <div className="text-sm text-muted-foreground">Detect mileage rollback</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Recall information</div>
                      <div className="text-sm text-muted-foreground">Check for open safety recalls</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic mt-6">
                    Checks VIN for cars, trucks, motorcycles, RVs
                  </p>
                </div>
              </Card>
            </TabsContent>

            {/* Electronics Tab */}
            <TabsContent value="electronics">
              <Card className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Serial number verification</div>
                      <div className="text-sm text-muted-foreground">Validate serial number authenticity</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Stolen property reports</div>
                      <div className="text-sm text-muted-foreground">Search stolen goods registries</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Warranty lookup</div>
                      <div className="text-sm text-muted-foreground">Check warranty coverage</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Bike frame numbers</div>
                      <div className="text-sm text-muted-foreground">Verify bicycle registrations</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Tool/equipment serial numbers</div>
                      <div className="text-sm text-muted-foreground">Check power tools and equipment</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic mt-6">
                    Laptops, cameras, bikes, tools, watches, gaming consoles
                  </p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

        </div>
      </div>
    </section>
  );
};
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Camera, WifiOff, QrCode, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Mobile App Section - Confident, Not Desperate
 * States the differentiator once, clearly
 * Shows real benefits (camera scanning, offline mode)
 */

const features = [
  {
    icon: Camera,
    title: 'Camera Scanning',
    description: 'Scan barcodes and serial numbers with your camera',
  },
  {
    icon: WifiOff,
    title: 'Offline Mode',
    description: 'Start verifications without internet, sync later',
  },
  {
    icon: QrCode,
    title: 'QR Code Sharing',
    description: 'Share verification results instantly with buyers',
  },
];

export const MobileAppSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-4">
                    <Smartphone className="h-4 w-4" />
                    <span>Mobile App Available</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Verify Items at In-Person Meetups
                  </h2>
                  
                  <p className="text-muted-foreground mb-6">
                    The only stolen item checker with a mobile app. Perfect for Facebook Marketplace meetups, garage sales, and pawn shops.
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {features.map((feature) => (
                      <div key={feature.title} className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <feature.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{feature.title}</p>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-fit">
                    <Link to="/app">
                      Get the App
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                {/* Visual Side */}
                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12 flex items-center justify-center">
                  <div className="relative">
                    {/* Phone mockup */}
                    <div className="w-48 h-96 bg-foreground/90 rounded-[2rem] p-2 shadow-2xl">
                      <div className="w-full h-full bg-background rounded-[1.5rem] flex items-center justify-center">
                        <div className="text-center p-4">
                          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Smartphone className="h-8 w-8 text-primary" />
                          </div>
                          <p className="font-semibold text-sm">SafeOrStolen</p>
                          <p className="text-xs text-muted-foreground mt-1">Tap to verify</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

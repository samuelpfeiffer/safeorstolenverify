import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, CheckCircle, Building, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ValuePropositionSections = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4 space-y-16">
        
        {/* For Buyers Section */}
        <section id="for-buyers" className="scroll-mt-20">
          <Card className="max-w-4xl mx-auto border-sos-lime/20 bg-gradient-to-r from-sos-lime/5 to-transparent">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="h-12 w-12 text-sos-lime" />
                 <div>
                  <h2 className="text-3xl font-bold text-foreground">Shop any marketplace with confidence.</h2>
                  <p className="text-lg text-muted-foreground mt-2">
                    Whether it's Craigslist, eBay, Facebook Marketplace, or local sales - verify electronics, vehicles, art, jewelry, tools, and more before you buy. Never worry about stolen goods again.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4">
                  <CheckCircle className="h-8 w-8 text-sos-lime mx-auto mb-2" />
                  <h4 className="font-semibold">Instant Verification</h4>
                  <p className="text-sm text-muted-foreground">Results in seconds</p>
                </div>
                <div className="text-center p-4">
                  <Shield className="h-8 w-8 text-sos-lime mx-auto mb-2" />
                  <h4 className="font-semibold">Legal Protection</h4>
                  <p className="text-sm text-muted-foreground">Avoid unwitting receipt</p>
                </div>
                <div className="text-center p-4">
                  <CheckCircle className="h-8 w-8 text-sos-lime mx-auto mb-2" />
                  <h4 className="font-semibold">Peace of Mind</h4>
                  <p className="text-sm text-muted-foreground">Shop with confidence</p>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-sos-lime text-sos-dark hover:bg-sos-lime/90 font-semibold"
                onClick={() => navigate('/for-consumers')}
              >
                Check an Item Before You Buy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* For Sellers Section */}
        <section id="for-sellers" className="scroll-mt-20">
          <Card className="max-w-4xl mx-auto border-sos-orange/20 bg-gradient-to-r from-sos-orange/5 to-transparent">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="h-12 w-12 text-sos-orange" />
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Sell without risk.</h2>
                  <p className="text-lg text-muted-foreground mt-2">
                    Protect yourself from legal trouble. Prove your items are legitimate before you list them. A verified item sells faster and builds trust with buyers.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4">
                  <Shield className="h-8 w-8 text-sos-orange mx-auto mb-2" />
                  <h4 className="font-semibold">Legal Protection</h4>
                  <p className="text-sm text-muted-foreground">Prove legitimacy</p>
                </div>
                <div className="text-center p-4">
                  <CheckCircle className="h-8 w-8 text-sos-orange mx-auto mb-2" />
                  <h4 className="font-semibold">Faster Sales</h4>
                  <p className="text-sm text-muted-foreground">Verified items sell quicker</p>
                </div>
                <div className="text-center p-4">
                  <CheckCircle className="h-8 w-8 text-sos-orange mx-auto mb-2" />
                  <h4 className="font-semibold">Trust Building</h4>
                  <p className="text-sm text-muted-foreground">Gain buyer confidence</p>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-sos-orange text-white hover:bg-sos-orange/90 font-semibold"
                onClick={() => navigate('/dashboard')}
              >
                Verify Your Item Before You List
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* For Businesses Section */}
        <section id="for-businesses" className="scroll-mt-20">
          <Card className="max-w-4xl mx-auto border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-transparent">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Building className="h-12 w-12 text-blue-500" />
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Professional verification for every business.</h2>
                  <p className="text-lg text-muted-foreground mt-2">
                    Auction houses, pawn shops, resale stores, law enforcement agencies, insurance companies: Streamline compliance with our enterprise-grade verification. Handle high volumes with API integration and real-time reporting.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4">
                  <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="font-semibold">API Integration</h4>
                  <p className="text-sm text-muted-foreground">Seamless workflow</p>
                </div>
                <div className="text-center p-4">
                  <CheckCircle className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="font-semibold">Bulk Processing</h4>
                  <p className="text-sm text-muted-foreground">Handle volume efficiently</p>
                </div>
                <div className="text-center p-4">
                  <Building className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="font-semibold">Compliance Reports</h4>
                  <p className="text-sm text-muted-foreground">Audit-ready documentation</p>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-blue-500 text-white hover:bg-blue-500/90 font-semibold"
                onClick={() => navigate('/for-brands')}
              >
                Learn About Business Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};
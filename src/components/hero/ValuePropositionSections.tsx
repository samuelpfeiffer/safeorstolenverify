import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, CheckCircle, Building, ArrowRight, RefreshCw, ShoppingCart, Store } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ValuePropositionSections = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4 space-y-16">
        
        {/* Universal Protection Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Universal Protection for the Entire Second-Hand Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            SafeOrStolen protects every participant in second-hand transactions—from individual buyers and sellers 
            to businesses that handle, process, or trade pre-owned goods. Our verification ensures safety and 
            legitimacy for everyone involved.
          </p>
        </section>
        
        {/* For Buyers Section */}
        <section id="for-buyers" className="scroll-mt-20">
          <Card className="max-w-4xl mx-auto border-sos-lime/20 bg-gradient-to-r from-sos-lime/5 to-transparent">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <ShoppingCart className="h-12 w-12 text-sos-lime" />
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Shop without fear.</h2>
                  <p className="text-lg text-muted-foreground mt-2">
                    Whether you're an individual consumer, collector, or business purchasing inventory—verify before you buy. 
                    Our instant checks protect your investment and ensure you never unknowingly purchase stolen goods.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4">
                  <CheckCircle className="h-8 w-8 text-sos-lime mx-auto mb-2" />
                  <h4 className="font-semibold">Instant Verification</h4>
                  <p className="text-sm text-muted-foreground">Results in seconds for any item</p>
                </div>
                <div className="text-center p-4">
                  <Shield className="h-8 w-8 text-sos-lime mx-auto mb-2" />
                  <h4 className="font-semibold">Legal Protection</h4>
                  <p className="text-sm text-muted-foreground">Avoid unwitting receipt charges</p>
                </div>
                <div className="text-center p-4">
                  <CheckCircle className="h-8 w-8 text-sos-lime mx-auto mb-2" />
                  <h4 className="font-semibold">Investment Security</h4>
                  <p className="text-sm text-muted-foreground">Protect your money and reputation</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-sos-lime text-sos-dark hover:bg-sos-lime/90 font-semibold"
                  onClick={() => navigate('/subscriptions')}
                >
                  View Buyer Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-sos-lime text-sos-lime hover:bg-sos-lime hover:text-sos-dark"
                  onClick={() => navigate('/for-consumers')}
                >
                  Try Free Check
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* For Sellers Section */}
        <section id="for-sellers" className="scroll-mt-20">
          <Card className="max-w-4xl mx-auto border-sos-orange/20 bg-gradient-to-r from-sos-orange/5 to-transparent">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Store className="h-12 w-12 text-sos-orange" />
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Sell without risk.</h2>
                  <p className="text-lg text-muted-foreground mt-2">
                    From individual sellers to retailers and resellers—protect yourself from legal trouble and liability. 
                    Prove your items are legitimate before listing. Verified items sell faster and build buyer trust.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4">
                  <Shield className="h-8 w-8 text-sos-orange mx-auto mb-2" />
                  <h4 className="font-semibold">Legal Protection</h4>
                  <p className="text-sm text-muted-foreground">Avoid liability for stolen goods</p>
                </div>
                <div className="text-center p-4">
                  <CheckCircle className="h-8 w-8 text-sos-orange mx-auto mb-2" />
                  <h4 className="font-semibold">Faster Sales</h4>
                  <p className="text-sm text-muted-foreground">Verified items sell 40% quicker</p>
                </div>
                <div className="text-center p-4">
                  <CheckCircle className="h-8 w-8 text-sos-orange mx-auto mb-2" />
                  <h4 className="font-semibold">Trust Building</h4>
                  <p className="text-sm text-muted-foreground">Gain buyer confidence instantly</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-sos-orange text-white hover:bg-sos-orange/90 font-semibold"
                  onClick={() => navigate('/for-sellers')}
                >
                  Learn More for Sellers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-sos-orange text-sos-orange hover:bg-sos-orange hover:text-white"
                  onClick={() => navigate('/dashboard')}
                >
                  Verify Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* For Handlers Section */}
        <section id="for-handlers" className="scroll-mt-20">
          <Card className="max-w-4xl mx-auto border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-transparent">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Building className="h-12 w-12 text-blue-500" />
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Handle with confidence.</h2>
                  <p className="text-lg text-muted-foreground mt-2">
                    Pawn shops, repair shops, logistics companies, processors—integrate seamless verification into your workflow. 
                    Perform due diligence, avoid fines, and protect your business license with comprehensive verification.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4">
                  <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="font-semibold">API Integration</h4>
                  <p className="text-sm text-muted-foreground">Seamless workflow integration</p>
                </div>
                <div className="text-center p-4">
                  <CheckCircle className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="font-semibold">Bulk Processing</h4>
                  <p className="text-sm text-muted-foreground">Handle high volume efficiently</p>
                </div>
                <div className="text-center p-4">
                  <Building className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="font-semibold">Compliance Reports</h4>
                  <p className="text-sm text-muted-foreground">Audit-ready documentation</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-500 text-white hover:bg-blue-500/90 font-semibold"
                  onClick={() => navigate('/for-handlers')}
                >
                  Learn More for Handlers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  onClick={() => navigate('/for-brands')}
                >
                  View API Solutions
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* For Traders Section */}
        <section id="for-traders" className="scroll-mt-20">
          <Card className="max-w-4xl mx-auto border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-transparent">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <RefreshCw className="h-12 w-12 text-purple-500" />
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Trade with trust.</h2>
                  <p className="text-lg text-muted-foreground mt-2">
                    Collectors, enthusiasts, and barter systems—ensure fair exchanges with verified authenticity. 
                    Whether trading collectibles, electronics, or other valuables, verify legitimacy before completing trades.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4">
                  <Shield className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h4 className="font-semibold">Fair Exchanges</h4>
                  <p className="text-sm text-muted-foreground">Verify both sides of trades</p>
                </div>
                <div className="text-center p-4">
                  <CheckCircle className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h4 className="font-semibold">Community Trust</h4>
                  <p className="text-sm text-muted-foreground">Build reputation in trading communities</p>
                </div>
                <div className="text-center p-4">
                  <RefreshCw className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h4 className="font-semibold">Transaction Security</h4>
                  <p className="text-sm text-muted-foreground">Protect all parties involved</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-purple-500 text-white hover:bg-purple-500/90 font-semibold"
                  onClick={() => navigate('/for-traders')}
                >
                  Learn More for Traders
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                  onClick={() => navigate('/dashboard')}
                >
                  Start Trading Safely
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};
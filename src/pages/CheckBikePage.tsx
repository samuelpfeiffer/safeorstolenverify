import React, { useState } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Bike, Shield, Search, CheckCircle, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const CheckBikePage: React.FC = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<'clean' | 'stolen' | null>(null);

  const handleSearch = async () => {
    if (!serialNumber.trim()) return;
    
    setIsSearching(true);
    // Simulate search - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setResult(Math.random() > 0.9 ? 'stolen' : 'clean');
    setIsSearching(false);
  };

  return (
    <>
      <SEOHead 
        title="Check If Bike Is Stolen - Free Bicycle Serial Number Lookup"
        description="Check if a bicycle is stolen using serial number lookup. Verify bikes before buying on Craigslist, Facebook Marketplace. Free stolen bike database check."
        keywords="check if bike stolen, bicycle serial number lookup, check bicycle, stolen bike check, is my bike stolen, verify bike serial number, stolen bicycle lookup"
        canonical="/check-bike"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Bike className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Check If Bike Is Stolen
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verify if a bicycle is stolen before you buy using our free serial number lookup
            </p>
          </div>

          {/* Search Card */}
          <Card className="max-w-2xl mx-auto mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Bicycle Serial Number Lookup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="serial" className="text-sm font-medium">
                  Enter Bicycle Serial Number
                </label>
                <Input
                  id="serial"
                  placeholder="ABC123456789"
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value.trim())}
                />
                <p className="text-xs text-muted-foreground">
                  Usually found on the bottom bracket, seat tube, or head tube
                </p>
              </div>
              
              <Button 
                onClick={handleSearch}
                disabled={!serialNumber.trim() || isSearching}
                className="w-full"
              >
                {isSearching ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Checking Database...
                  </>
                ) : (
                  <>
                    <Shield className="h-4 w-4 mr-2" />
                    Check Bike Status
                  </>
                )}
              </Button>

              {result && (
                <Alert className={result === 'stolen' ? 'border-destructive' : 'border-green-500'}>
                  {result === 'stolen' ? (
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                  ) : (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  )}
                  <AlertDescription>
                    {result === 'stolen' 
                      ? 'WARNING: This bicycle is reported as stolen. Do not purchase.'
                      : 'Good news! This bicycle is not reported as stolen.'
                    }
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Bicycle Types */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Supported Bicycle Types</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Road Bikes', desc: 'Racing, touring, endurance' },
                { name: 'Mountain Bikes', desc: 'Cross-country, trail, downhill' },
                { name: 'BMX Bikes', desc: 'Freestyle, racing, street' },
                { name: 'E-Bikes', desc: 'Electric, hybrid, commuter' }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">How Bicycle Verification Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Find Serial Number</h3>
                  <p className="text-sm text-muted-foreground">
                    Locate the serial number on the frame's bottom bracket or tube
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">2. Database Check</h3>
                  <p className="text-sm text-muted-foreground">
                    We check against BikeIndex and police databases globally
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Get Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive instant verification of the bicycle's status
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Where can I find my bike's serial number?</h3>
                  <p className="text-muted-foreground">Most bicycle serial numbers are located on the bottom bracket (where the pedals attach), seat tube, or head tube. Sometimes it's stamped on the frame near the rear dropout.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What if a bike shows as stolen?</h3>
                  <p className="text-muted-foreground">Do not purchase the bicycle. Contact local police and report the seller. The bike should be returned to its rightful owner.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Does this work for all bike brands?</h3>
                  <p className="text-muted-foreground">Yes, our database includes all major bike brands including Trek, Specialized, Giant, Cannondale, and thousands of others.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckBikePage;
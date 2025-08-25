import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CompetitiveKeywords } from '@/components/seo/CompetitiveKeywords';
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/utils/seo/structuredData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Car, Shield, Search, CheckCircle, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const CheckCarPage: React.FC = () => {
  const [vin, setVin] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<'clean' | 'stolen' | null>(null);
  const serviceSchema = createServiceSchema();
  const faqSchema = createFAQSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Check Car', url: '/check-car' }
  ]);

  const handleSearch = async () => {
    if (!vin.trim()) return;
    
    setIsSearching(true);
    // Simulate search - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setResult(Math.random() > 0.9 ? 'stolen' : 'clean');
    setIsSearching(false);
  };

  const formatVin = (value: string) => {
    const cleaned = value.replace(/[^A-HJ-NPR-Z0-9]/gi, '').toUpperCase();
    return cleaned.slice(0, 17);
  };

  return (
    <>
      <PageSEO 
        title="Can I Check if This Car is Stolen? How Do I Know if Car is Hot?"
        description="Can I check if this car is stolen? How do I know if this VIN is hot? Free way to verify car not stolen before buying. Check if vehicle is legit."
        keywords="can I check if this car is stolen, how do I know if car is hot, is this car stolen, check if VIN is hot, how to tell if car stolen, verify car not stolen"
        structuredData={[serviceSchema, faqSchema, breadcrumbSchema]}
      />
      <CompetitiveKeywords pageType="vin" />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Car className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Check If Car Is Stolen
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verify if a vehicle is stolen before you buy using our free VIN lookup service
            </p>
          </div>

          {/* Search Card */}
          <Card className="max-w-2xl mx-auto mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                VIN Lookup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="vin" className="text-sm font-medium">
                  Enter VIN Number (17 characters)
                </label>
                <Input
                  id="vin"
                  placeholder="1HGBH41JXMN109186"
                  value={vin}
                  onChange={(e) => setVin(formatVin(e.target.value))}
                  maxLength={17}
                />
                <p className="text-xs text-muted-foreground">
                  Find VIN on dashboard, driver's door jamb, or vehicle registration
                </p>
              </div>
              
              <Button 
                onClick={handleSearch}
                disabled={vin.length !== 17 || isSearching}
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
                    Check Vehicle Status
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
                      ? 'WARNING: This vehicle is reported as stolen. Do not purchase.'
                      : 'Good news! This vehicle is not reported as stolen.'
                    }
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">How Vehicle Verification Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Enter VIN</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter the 17-character VIN from the dashboard or door frame
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
                    We check against NICB and law enforcement databases
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
                    Receive instant verification of the vehicle's status
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
                  <h3 className="font-semibold mb-2">Where can I find my car's VIN?</h3>
                  <p className="text-muted-foreground">The VIN is typically located on the dashboard near the windshield (driver's side), on the driver's door jamb, or on your vehicle registration.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What if a vehicle shows as stolen?</h3>
                  <p className="text-muted-foreground">Do not purchase the vehicle. Contact local law enforcement immediately and report the seller.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Does this check work for motorcycles and trucks?</h3>
                  <p className="text-muted-foreground">Yes, our VIN lookup works for all vehicles including cars, trucks, motorcycles, and RVs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckCarPage;
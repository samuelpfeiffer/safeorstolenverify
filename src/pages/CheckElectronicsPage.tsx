import React, { useState } from 'react';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';
import { CanonicalUrl } from '@/components/seo/CanonicalUrl';
import { CompetitiveKeywords } from '@/components/seo/CompetitiveKeywords';
import { AdvancedKeywordOptimizer } from '@/components/seo/AdvancedKeywordOptimizer';
import { KeywordOptimizedContent } from '@/components/seo/KeywordOptimizedContent';
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/utils/seo/structuredData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Laptop, Shield, Search, CheckCircle, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { detectItemType, getItemTypeDisplayName } from '@/utils/itemTypeDetector';
import { ContextualAdPlacement } from '@/components/advertising/ContextualAdPlacement';

const CheckElectronicsPage: React.FC = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<'clean' | 'stolen' | null>(null);
  const [detectedType, setDetectedType] = useState<string>('');
  const serviceSchema = createServiceSchema();
  const faqSchema = createFAQSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Check Electronics', url: '/check-electronics' }
  ]);

  const handleSearch = async () => {
    if (!serialNumber.trim()) return;
    
    setIsSearching(true);
    const itemType = detectItemType(serialNumber);
    setDetectedType(itemType);
    
    // Simulate search - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setResult(Math.random() > 0.85 ? 'stolen' : 'clean');
    setIsSearching(false);
  };

  return (
    <>
      <CanonicalUrl url="https://safeorstolen.com/check-electronics" />
      <EnhancedSEOHead
        title="Serial Number Lookup - Check If Electronics Are Stolen | Safe Or Stolen"
        description="Free serial number lookup to check if electronics are stolen. Verify laptops, tablets, gaming devices before buying. Electronics background check for safe secondhand purchases."
        keywords="serial number lookup, electronics background check, check if electronics stolen, verify electronics serial, used electronics safe, laptop theft check, tablet stolen verification, gaming console security, secondhand electronics verification"
        canonical="/check-electronics"
        additionalSchemas={[serviceSchema, faqSchema, breadcrumbSchema]}
      />
      <CompetitiveKeywords pageType="serial" />
      <AdvancedKeywordOptimizer 
        pageType="serial" 
        context="verification"
        primaryKeywords={['serial number lookup', 'electronics background check', 'used electronics safe']}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Laptop className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Serial Number Lookup - Electronics Background Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Verify if electronics are stolen before buying used devices. Free electronics background check for safe secondhand purchases.
            </p>
            
            {/* Hero Image */}
            <div className="max-w-md mx-auto">
              <img 
                src="/lovable-uploads/6761f247-72ca-4aa0-94f3-ee87310470ed.png" 
                alt="Electronics verification and stolen device detection"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
                loading="eager"
              />
            </div>
          </div>

          {/* Search Card */}
          <Card className="max-w-2xl mx-auto mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Serial Number Lookup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="serial" className="text-sm font-medium">
                  Enter Serial Number or MAC Address
                </label>
                <Input
                  id="serial"
                  placeholder="ABC123456789 or 00:1B:44:11:3A:B7"
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value.trim())}
                />
                <p className="text-xs text-muted-foreground">
                  Usually found on device label, box, or in system settings
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
                    Check Electronics Status
                  </>
                )}
              </Button>

              {detectedType && (
                <div className="text-sm text-muted-foreground text-center">
                  Detected: {getItemTypeDisplayName(detectedType)}
                </div>
              )}

              {result && (
                <Alert className={result === 'stolen' ? 'border-destructive' : 'border-green-500'}>
                  {result === 'stolen' ? (
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                  ) : (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  )}
                  <AlertDescription>
                    {result === 'stolen' 
                      ? 'WARNING: This device is reported as stolen. Do not purchase.'
                      : 'Good news! This device is not reported as stolen.'
                    }
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Supported Devices */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Supported Electronics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Laptops', desc: 'Dell, HP, Lenovo, Apple' },
                { name: 'Tablets', desc: 'iPad, Surface, Android' },
                { name: 'Gaming', desc: 'PlayStation, Xbox, Switch' },
                { name: 'Audio', desc: 'Headphones, Speakers, AirPods' }
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
            <h2 className="text-3xl font-bold text-center mb-8">How Electronics Verification Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Enter Serial</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter the serial number or MAC address from the device
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
                    We check against stolen electronics databases worldwide
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
                    Receive instant verification of the device's status
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contextual Ad */}
          <ContextualAdPlacement context="verification" placement="inline" />

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Where can I find the serial number?</h3>
                  <p className="text-muted-foreground">Usually on a label on the device, in the original box, or in the device's system settings under "About" or "System Information".</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What's the difference between serial number and MAC address?</h3>
                  <p className="text-muted-foreground">Serial numbers identify the device uniquely, while MAC addresses identify network interfaces. Both can be used to check if a device is stolen.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What if my device shows as stolen but I bought it legitimately?</h3>
                  <p className="text-muted-foreground">Contact the seller for proof of purchase and consider filing a police report. You may be entitled to a refund if the seller misrepresented the item.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckElectronicsPage;
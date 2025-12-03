/**
 * Verification Page - Production Ready with Parallel API Calls
 */

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Loader2, Shield, AlertTriangle, Camera } from 'lucide-react';
import { QRScanner } from '@/components/futuristic/QRScanner';
import { useParallelVerification } from '@/hooks/useParallelVerification';
import { ParallelVerificationDisplay } from '@/components/verification/ParallelVerificationDisplay';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { PageSEO } from '@/components/seo/PageSEO';
import { StatusCodeHandler } from '@/components/seo/StatusCodeHandler';
import { supabase } from '@/integrations/supabase/client';
import type { AggregatedResult } from '@/services/VerificationService';

const VerifyPage = () => {
  const [searchParams] = useSearchParams();
  const [identifier, setIdentifier] = useState('');
  const [itemType, setItemType] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [customResult, setCustomResult] = useState<AggregatedResult | null>(null);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const { verify, isLoading, result: hookResult, progress } = useParallelVerification();
  const { isAuthenticated } = useUnifiedAuth();
  const navigate = useNavigate();

  const result = customResult || hookResult;

  // Set item type from URL params (e.g., ?type=license_plate)
  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      setItemType(typeParam);
    }
  }, [searchParams]);

  const US_STATES = [
    { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
    { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
    { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
    { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
    { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }
  ];

  const handleScanResult = (scannedText: string) => {
    setIdentifier(scannedText);
    setIsScannerOpen(false);
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    // If license plate selected, use universal-state-lookup
    if (itemType === 'license_plate') {
      if (!stateCode) {
        return; // State is required for license plates
      }
      
      try {
        const { data: lookupResult, error } = await supabase.functions.invoke('universal-state-lookup', {
          body: { 
            stateCode: stateCode,
            type: 'license_plate',
            value: identifier 
          }
        });

        if (error) throw error;

        // Convert to aggregated result format
        const convertedResult: AggregatedResult = {
          identifier: identifier,
          itemType: 'license_plate',
          finalStatus: lookupResult.status === 'stolen' ? 'stolen' : lookupResult.status === 'safe' ? 'safe' : 'unknown',
          message: lookupResult.message || `License plate check completed for ${stateCode}`,
          riskLevel: lookupResult.status === 'stolen' ? 'critical' : lookupResult.status === 'safe' ? 'low' : 'medium',
          confidence: lookupResult.confidence || 85,
          providers: [{
            provider: `${stateCode} License Plate Database`,
            status: lookupResult.status,
            confidence: lookupResult.confidence || 85,
            message: lookupResult.message,
            responseTime: 0,
            details: lookupResult.details
          }],
          checkedSources: [`${stateCode} DMV Database`],
          timestamp: new Date().toISOString()
        };

        setCustomResult(convertedResult);
      } catch (error) {
        console.error('License plate lookup error:', error);
      }
    } else {
      await verify(identifier, itemType || undefined);
    }
  };

  // Comprehensive verification schemas - MOVED from Homepage
  const verificationServiceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Stolen Item Verification Service",
      "description": "Instant verification service to check if items are stolen using IMEI, VIN, or serial numbers",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen",
        "url": "https://safeorstolen.com"
      },
      "serviceType": "Verification Service",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Verification Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IMEI Check",
              "description": "Verify if mobile phone is stolen"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "VIN Verification",
              "description": "Check if vehicle is stolen"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Serial Number Lookup",
              "description": "Verify electronics and other items"
            }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "IMEI Verification Service",
      "description": "Check if phones are stolen using IMEI numbers",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "serviceType": "Phone Verification Service",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "VIN Verification Service",
      "description": "Check if vehicles are stolen using VIN numbers",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "serviceType": "Vehicle Verification Service",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Serial Number Verification Service",
      "description": "Verify electronics and equipment using serial numbers",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      },
      "serviceType": "Electronics Verification Service",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Verify if an Item is Stolen",
      "description": "Step-by-step guide to check IMEI, VIN, and serial numbers",
      "totalTime": "PT3M",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Enter Item Identifier",
          "text": "Input IMEI, VIN, or serial number in the verification form"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Select Item Type",
          "text": "Choose the type of item (phone, vehicle, electronics, etc.)"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Click Verify",
          "text": "Submit the form to search across 150+ databases instantly"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Review Results",
          "text": "Get instant results showing if item is safe or stolen with detailed report"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "SafeOrStolen Verification Tool",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ];

  return (
    <>
      {/* SEO Components - Critical for Google indexing */}
      <StatusCodeHandler statusCode={200} />
      <PageSEO
        title="Protect Buyers & Sellers - Instant Stolen Verification | 3 Second Check"
        description="Protect BOTH buyers AND sellers with instant stolen verification. Every search makes stolen items harder to sell. Check IMEI, VIN, serial numbers in 3 seconds. Reduce crime globally."
        keywords="protect buyers sellers, stop stolen goods, instant stolen verification, barcode stolen checker, 3 second IMEI check, stolen verification app, reduce crime"
        canonical="/verify"
        structuredData={verificationServiceSchema}
      />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="space-y-8">
        {/* Breadcrumb Navigation */}
        <BreadcrumbNavigation 
          items={[
            { name: 'Verify Item', href: '/verify' }
          ]}
        />

        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Protect Buyers & Sellers - Instant Stolen Verification
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Every search makes stolen items harder to sell. Check IMEI, VIN, serial numbers in 3 seconds.
          </p>
        </div>

        {/* Search Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Enter Item Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleVerify} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 relative">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder={itemType === 'license_plate' ? 'License Plate Number' : 'Serial Number, IMEI, VIN, License Plate, etc.'}
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      disabled={isLoading}
                      className="text-lg py-6 flex-1"
                      required
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setIsScannerOpen(true)}
                      disabled={isLoading}
                      className="h-auto py-6 px-4"
                      title="Scan QR code or barcode"
                    >
                      <Camera className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <Select value={itemType} onValueChange={setItemType} disabled={isLoading}>
                  <SelectTrigger className="py-6">
                    <SelectValue placeholder="Auto-detect type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smartphone">Mobile Phone</SelectItem>
                    <SelectItem value="vehicle">Vehicle (VIN)</SelectItem>
                    <SelectItem value="license_plate">License Plate</SelectItem>
                    <SelectItem value="laptop">Laptop</SelectItem>
                    <SelectItem value="bicycle">Bicycle</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="firearm">Firearm</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* State selector - only shown for license plates */}
              {itemType === 'license_plate' && (
                <div className="space-y-2">
                  <label htmlFor="state-select" className="text-sm font-medium">
                    Select State *
                  </label>
                  <Select value={stateCode} onValueChange={setStateCode} disabled={isLoading} required>
                    <SelectTrigger id="state-select" className="py-6">
                      <SelectValue placeholder="Choose a state" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {US_STATES.map((state) => (
                        <SelectItem key={state.code} value={state.code}>
                          {state.name} ({state.code})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    License plate checks use state-specific databases and parallel verification
                  </p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !identifier.trim() || (itemType === 'license_plate' && !stateCode)}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Verify Across All Databases
                  </>
                )}
              </Button>

              {progress && (
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-pulse">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {progress}
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Info Card */}
        {!result && !isLoading && (
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="font-semibold">What we check:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• GSMA Device Check (Global IMEI Blacklist)</li>
                    <li>• IMEI.info Lost Device Database</li>
                    <li>• CheckMEND (UK/EU Electronics Registry)</li>
                    <li>• NICB VINCheck (US Vehicle Database)</li>
                    <li>• State DMV & Police Databases (License Plates - All 50 States)</li>
                    <li>• Bike Index (Global Bicycle Registry)</li>
                    <li>• HotGunz (US Firearms Database)</li>
                    <li>• StolenRegister.com (Worldwide Property)</li>
                    <li>• Immobilize (US Property Registry)</li>
                  </ul>
                  <p className="text-xs text-muted-foreground pt-2">
                    All checks are performed in parallel for fast results. Some databases may require manual verification via redirect.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results */}
        {result && <ParallelVerificationDisplay result={result} />}
      </div>
      
      {/* QR/Barcode Scanner Modal */}
      <QRScanner
        isOpen={isScannerOpen}
        onScan={handleScanResult}
        onClose={() => setIsScannerOpen(false)}
      />
    </div>
    </>
  );
};

export default VerifyPage;

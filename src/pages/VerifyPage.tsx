/**
 * Verification Page - Production Ready with Parallel API Calls
 */

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Loader2, Shield, AlertTriangle } from 'lucide-react';
import { useParallelVerification } from '@/hooks/useParallelVerification';
import { ParallelVerificationDisplay } from '@/components/verification/ParallelVerificationDisplay';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useNavigate } from 'react-router-dom';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { PageSEO } from '@/components/seo/PageSEO';
import { StatusCodeHandler } from '@/components/seo/StatusCodeHandler';

const VerifyPage = () => {
  const [identifier, setIdentifier] = useState('');
  const [itemType, setItemType] = useState('');
  const { verify, isLoading, result, progress } = useParallelVerification();
  const { isAuthenticated } = useUnifiedAuth();
  const navigate = useNavigate();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      navigate('/auth?redirect=/verify');
      return;
    }

    await verify(identifier, itemType || undefined);
  };

  // Structured data for verification service
  const verificationServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Stolen Item Verification Service",
    "description": "Instantly verify if items are stolen by checking IMEI, VIN, and serial numbers across multiple databases",
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
  };

  return (
    <>
      {/* SEO Components - Critical for Google indexing */}
      <StatusCodeHandler statusCode={200} />
      <PageSEO
        title="Verify Item Status - Check If Stolen Before Buying | SafeOrStolen"
        description="Instantly verify if an item is stolen. Check IMEI, VIN, serial numbers across multiple databases. Protect yourself before buying secondhand items. Free verification available."
        keywords="verify stolen item, IMEI check, VIN verification, serial number lookup, stolen item database, check if stolen, secondhand verification, used item safety"
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
            Verify Item Status
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Check if an item is stolen or safe across multiple databases
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
                <div className="md:col-span-2">
                  <Input
                    type="text"
                    placeholder="Serial Number, IMEI, VIN, etc."
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    disabled={isLoading}
                    className="text-lg py-6"
                    required
                  />
                </div>
                <Select value={itemType} onValueChange={setItemType} disabled={isLoading}>
                  <SelectTrigger className="py-6">
                    <SelectValue placeholder="Auto-detect type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smartphone">Mobile Phone</SelectItem>
                    <SelectItem value="vehicle">Vehicle</SelectItem>
                    <SelectItem value="laptop">Laptop</SelectItem>
                    <SelectItem value="bicycle">Bicycle</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="firearm">Firearm</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !identifier.trim()}
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
    </div>
    </>
  );
};

export default VerifyPage;

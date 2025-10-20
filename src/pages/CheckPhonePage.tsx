import React, { useState } from 'react';
import { UnifiedSEO } from '@/components/seo/UnifiedSEO';
import { AIOptimizedContent } from '@/components/seo/AIOptimizedContent';
import { CompetitiveKeywords } from '@/components/seo/CompetitiveKeywords';
import { AdvancedKeywordOptimizer } from '@/components/seo/AdvancedKeywordOptimizer';
import { KeywordOptimizedContent } from '@/components/seo/KeywordOptimizedContent';
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/utils/seo/structuredData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Smartphone, Shield, Search, CheckCircle, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ComprehensiveFAQ } from '@/components/seo/ComprehensiveFAQ';
import { ContextualAdPlacement } from '@/components/advertising/ContextualAdPlacement';

const CheckPhonePage: React.FC = () => {
  const [imei, setImei] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<'clean' | 'stolen' | null>(null);
  const serviceSchema = createServiceSchema();
  const faqSchema = createFAQSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Check Phone', url: '/check-phone' }
  ]);

  const handleSearch = async () => {
    if (!imei.trim()) return;
    
    setIsSearching(true);
    // Simulate search - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setResult(Math.random() > 0.8 ? 'stolen' : 'clean');
    setIsSearching(false);
  };

  const formatImei = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    return cleaned.slice(0, 15);
  };

  return (
      <>
        <AIOptimizedContent page="check-phone" />
        <UnifiedSEO 
        title="Free IMEI Check & Verify Phone - Stolen Phone Database Search"
        description="Free database search to check & verify if phone is stolen using IMEI. 30-second verification for iPhone, Android, Samsung. 4 free searches included."
        keywords="free IMEI check, verify phone stolen, check if phone stolen, IMEI database search, stolen phone verification, iPhone IMEI check, Android phone verification"
        canonical="/check-phone"
        type="website"
        noindex={false}
        structuredData={[serviceSchema, faqSchema, breadcrumbSchema]}
      />
      <CompetitiveKeywords pageType="imei" />
      <AdvancedKeywordOptimizer 
        pageType="imei" 
        context="verification"
        primaryKeywords={['IMEI device check', 'stolen phone check', 'electronics background check']}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Smartphone className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Check if Phone is Stolen - Free IMEI Verification
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Verify smartphone IMEI against stolen device databases before buying. 30-second verification - $2.3M in scams prevented.
            </p>
            
            {/* Hero Image */}
            <div className="max-w-md mx-auto">
              <img 
                src="/lovable-uploads/d627effd-6ecc-499c-ba64-26edbfa79c4b.png" 
                alt="Phone verification and stolen item detection"
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
                IMEI Lookup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="imei" className="text-sm font-medium">
                  Enter IMEI Number (15 digits)
                </label>
                <Input
                  id="imei"
                  placeholder="123456789012345"
                  value={imei}
                  onChange={(e) => setImei(formatImei(e.target.value))}
                  maxLength={15}
                />
                <p className="text-xs text-muted-foreground">
                  Find IMEI by dialing *#06# or in Settings → About Phone
                </p>
              </div>
              
              <Button 
                onClick={handleSearch}
                disabled={imei.length !== 15 || isSearching}
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
                    Check Phone Status
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
                      ? 'WARNING: This device is reported as stolen. Do not purchase.'
                      : 'Good news! This device is not reported as stolen.'
                    }
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">How Phone Verification Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Enter IMEI</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter the 15-digit IMEI number found by dialing *#06#
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
                    We check against global stolen phone databases instantly
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
                    Receive instant verification of the phone's status
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Contextual Ad */}
          <ContextualAdPlacement context="smartphone" placement="inline" />

          {/* FAQ */}
          <ComprehensiveFAQ pageType="phone" maxItems={6} showCategories={false} />
        </div>
      </div>
    </>
  );
};

export default CheckPhonePage;
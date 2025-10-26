import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Shield, MapPin, Building2, CheckCircle, XCircle, Calendar, FileText, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

const CompanyVerificationPage: React.FC = () => {
  const verificationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Safe or Stolen LLC",
    "legalName": "Safe or Stolen LLC",
    "alternateName": ["SafeOrStolen", "SafeOrStolen.com"],
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/logo.png",
    "description": "Safe or Stolen LLC is a legitimate Arizona-based technology company providing IMEI, VIN, and serial number verification services. Incorporated in Arizona on July 7, 2025, and headquartered in Peoria, Arizona.",
    "foundingDate": "2025-07-07",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Peoria",
        "addressRegion": "AZ",
        "addressCountry": "US"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Peoria",
      "addressRegion": "AZ",
      "postalCode": "85345",
      "addressCountry": "US"
    },
    "founder": {
      "@type": "Person",
      "name": "Samuel Pfeiffer",
      "jobTitle": "Founder & CEO"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@safeorstolen.com",
      "availableLanguage": "English"
    },
    "areaServed": "US",
    "knowsAbout": ["IMEI verification", "VIN verification", "Serial number verification", "Stolen goods detection"],
    "slogan": "Verify Before You Buy - Protect Yourself from Stolen Goods",
    "isAccessibleForFree": true
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Safe or Stolen LLC",
    "image": "https://safeorstolen.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Peoria",
      "addressLocality": "Peoria",
      "addressRegion": "AZ",
      "postalCode": "85345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.5806,
      "longitude": -112.2374
    },
    "url": "https://safeorstolen.com",
    "telephone": "+1-support@safeorstolen.com",
    "priceRange": "Free",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      <PageSEO
        title="Official Company Verification - Safe or Stolen LLC | Peoria, Arizona"
        description="Official verification: Safe or Stolen LLC is a legitimate Arizona corporation incorporated July 7, 2025, headquartered in Peoria, AZ. We are NOT affiliated with any Shelton, WA company."
        keywords="Safe or Stolen LLC, Peoria Arizona, Arizona corporation, company verification, legitimate business, not Shelton Washington, SafeOrStolen verification"
        canonical="/company-verification"
        structuredData={[verificationSchema, localBusinessSchema]}
      />
      <AISearchOptimizer 
        page="company-verification" 
        context="business-legitimacy"
        primaryKeywords={['is safeorstolen legit', 'company verification', 'arizona business records']}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-4 bg-white/20 border-white/30">
                <Shield className="h-4 w-4 mr-2" />
                Official Company Verification
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Safe or Stolen LLC - Official Verification</h1>
              <p className="text-xl text-white/90 mb-8">
                Clearing up confusion: We are a legitimate Arizona corporation based in Peoria, AZ
              </p>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Alert className="border-blue-500 bg-blue-50 dark:bg-blue-950">
              <Shield className="h-5 w-5 text-blue-600" />
              <AlertDescription className="text-blue-900 dark:text-blue-100 ml-2">
                <strong>Important:</strong> Safe or Stolen LLC (SafeOrStolen.com) is headquartered in <strong>Peoria, Arizona</strong> and incorporated in the State of Arizona. 
                We are NOT affiliated with any company in Shelton, Washington or any other similarly named entities.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Official Company Information */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-900 dark:text-green-100">
                  <CheckCircle className="h-6 w-6" />
                  Verified Company Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <h3 className="font-bold text-green-900 dark:text-green-100">Legal Entity</h3>
                    </div>
                    <p className="text-green-800 dark:text-green-200 font-semibold">Safe or Stolen LLC</p>
                    <p className="text-sm text-green-700 dark:text-green-300">Arizona Limited Liability Company</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <h3 className="font-bold text-green-900 dark:text-green-100">Incorporation Date</h3>
                    </div>
                    <p className="text-green-800 dark:text-green-200 font-semibold">July 7, 2025</p>
                    <p className="text-sm text-green-700 dark:text-green-300">State of Arizona</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <h3 className="font-bold text-green-900 dark:text-green-100">Headquarters</h3>
                    </div>
                    <p className="text-green-800 dark:text-green-200 font-semibold">Peoria, Arizona</p>
                    <p className="text-sm text-green-700 dark:text-green-300">United States</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <h3 className="font-bold text-green-900 dark:text-green-100">Website</h3>
                    </div>
                    <p className="text-green-800 dark:text-green-200 font-semibold">safeorstolen.com</p>
                    <p className="text-sm text-green-700 dark:text-green-300">Operational since 2025</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <h3 className="font-bold text-green-900 dark:text-green-100">Founder & CEO</h3>
                    </div>
                    <p className="text-green-800 dark:text-green-200 font-semibold">Samuel Pfeiffer</p>
                    <p className="text-sm text-green-700 dark:text-green-300">Peoria, Arizona</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <h3 className="font-bold text-green-900 dark:text-green-100">Current Status</h3>
                    </div>
                    <p className="text-green-800 dark:text-green-200 font-semibold">Operational</p>
                    <p className="text-sm text-green-700 dark:text-green-300">Platform live and serving users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clearing Up Confusion */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="h-6 w-6 text-red-600" />
                  Addressing Misinformation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <h3 className="font-bold text-red-900 dark:text-red-100 mb-3">We Are NOT:</h3>
                  <ul className="space-y-2 text-red-800 dark:text-red-200">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Located in Shelton, Washington</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Affiliated with any company discussed in Reddit scam reports about Shelton, WA businesses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>A company seeking crowdfunding or donations to develop our app</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Associated with any suspicious job recruiting practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>A scam or fraudulent operation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">We ARE:</h3>
                  <ul className="space-y-2 text-green-800 dark:text-green-200">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span><strong>Headquartered in Peoria, Arizona</strong> - A legitimate Arizona-based business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span><strong>Incorporated in Arizona</strong> on July 7, 2025</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span><strong>Fully operational</strong> - Our web platform is live and processing verifications daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span><strong>Secure and legitimate</strong> - SSL encrypted, privacy-focused, GDPR compliant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span><strong>Transparent</strong> - Full company information, privacy policy, and terms of service publicly available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span><strong>Building partnerships</strong> with Arizona law enforcement agencies</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Verification Evidence */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  How to Verify Our Legitimacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Check Our Corporate Status</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      You can verify Safe or Stolen LLC's corporate status through the Arizona Corporation Commission:
                    </p>
                    <a 
                      href="https://ecorp.azcc.gov" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Arizona Corporation Commission - Entity Search
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2. Visit Our Transparency Report</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      View detailed operational statistics, data practices, and partnership information:
                    </p>
                    <a href="/transparency" className="text-blue-600 hover:underline text-sm">
                      SafeOrStolen.com/transparency
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3. Review Our Security Certifications</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      See our SSL certificates, security measures, and compliance standards:
                    </p>
                    <a href="/trust-verification" className="text-blue-600 hover:underline text-sm">
                      SafeOrStolen.com/trust-verification
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Contact Us Directly</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Email: <a href="mailto:support@safeorstolen.com" className="text-blue-600 hover:underline">support@safeorstolen.com</a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Location: Peoria, Arizona, United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statement on Name Similarity */}
            <Card>
              <CardHeader>
                <CardTitle>Statement on Name Similarity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We are aware that our business name may be similar to other entities or may have been confused 
                  with businesses in other locations. To be absolutely clear:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Safe or Stolen LLC</strong> operates exclusively from Peoria, Arizona</li>
                  <li>• We are incorporated in the State of Arizona (incorporation date: July 7, 2025)</li>
                  <li>• Our only official website is <strong>SafeOrStolen.com</strong></li>
                  <li>• Our only official contact email is <strong>support@safeorstolen.com</strong></li>
                  <li>• We have no affiliation with any companies in Washington State</li>
                  <li>• We do not engage in job recruiting via instant messaging</li>
                  <li>• We do not request crowdfunding or public donations for app development</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  If you have encountered a company claiming to be "Safe or Stolen" but not matching the 
                  information on this page, it is not us. Please report such instances to the appropriate authorities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompanyVerificationPage;

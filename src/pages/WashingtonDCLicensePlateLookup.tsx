import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Search, MapPin, CheckCircle2, Car, AlertTriangle, Building, FileText } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const WashingtonDCLicensePlateLookup = () => {
  const navigate = useNavigate();
  const [plateNumber, setPlateNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = () => {
    if (!plateNumber.trim()) {
      toast.error('Please enter a license plate number');
      return;
    }
    setIsLoading(true);
    navigate(`/verify?q=${encodeURIComponent(plateNumber)}&type=plate&state=DC`);
    toast.success('Searching Washington DC DMV databases...');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Washington DC License Plate Lookup - Free DC DMV Plate Search",
    "description": "Free Washington DC license plate lookup. Check vehicle registration, theft status, and owner information for DC plates. Instant results from DC DMV records.",
    "url": "https://safeorstolen.com/washington-dc-license-plate-lookup",
    "mainEntity": {
      "@type": "Service",
      "name": "Washington DC License Plate Lookup",
      "serviceType": "Vehicle Verification",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Washington, District of Columbia"
      },
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I look up a DC license plate for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enter the DC license plate number into SafeOrStolen's verification tool. We instantly search DC DMV records, NICB theft databases, and law enforcement reports to provide comprehensive vehicle information including registration status and theft history."
        }
      },
      {
        "@type": "Question",
        "name": "What can I find with a Washington DC plate lookup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A DC license plate lookup reveals: vehicle make/model/year, registration status, theft reports, salvage title history, and whether the vehicle has been in major accidents. This helps verify any used vehicle before purchase."
        }
      },
      {
        "@type": "Question",
        "name": "Are Washington DC license plates different from state plates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Washington DC has its own DMV (Department of Motor Vehicles) and issues plates with 'DC' designation. DC plates follow different registration rules than state plates and are issued through the DC DMV at locations in the District."
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Washington DC License Plate Lookup Free - DC DMV Plate Search | SafeOrStolen"
        description="Free Washington DC license plate lookup. Get VIN, check theft status, and view vehicle history for any DC plate. Instant results from DC DMV records and NICB database."
        keywords="DC license plate lookup, Washington DC plate search, DC DMV plate check, District of Columbia vehicle search, DC stolen car check, DC plate to VIN, Washington DC DMV lookup free"
        canonical="/washington-dc-license-plate-lookup"
        structuredData={[structuredData, faqSchema]}
      />

      <TopNavigation />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <Building className="h-4 w-4" />
                <span className="text-sm font-medium">Washington, District of Columbia</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold">
                Washington DC License Plate Lookup
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Free instant DC license plate search. Get vehicle information, check theft status, 
                and verify registration from DC DMV databases.
              </p>

              {/* Search Form */}
              <Card className="max-w-xl mx-auto mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" />
                    Enter DC License Plate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Input
                          placeholder="Enter DC plate (e.g., ABC-1234)"
                          value={plateNumber}
                          onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
                          className="text-lg h-12"
                          onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                        />
                      </div>
                      <Button 
                        onClick={handleVerify} 
                        size="lg" 
                        className="h-12"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Searching...' : 'Search'}
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Works with all DC plate types: standard, personalized, government, and diplomatic plates
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* DC-Specific Information */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Washington DC Vehicle Verification
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-500" />
                      What We Check
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>DC DMV registration status and history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>NICB stolen vehicle database</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Metropolitan Police Department reports</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Vehicle make, model, year verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Title branding (salvage, rebuilt, flood)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      DC Vehicle Theft Statistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Washington DC has one of the highest vehicle theft rates per capita in the United States.
                        In 2024, the Metropolitan Police Department reported:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>10,000+</strong> vehicle thefts annually</li>
                        <li>• <strong>Hyundai/Kia</strong> models most targeted</li>
                        <li>• Many stolen vehicles sold in Maryland/Virginia</li>
                        <li>• Only <strong>25%</strong> of stolen vehicles recovered</li>
                      </ul>
                      <p className="text-sm font-medium text-primary">
                        Always verify before buying any used vehicle in the DC metro area.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* DC Plate Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Washington DC License Plate Types
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Our lookup tool works with all DC plate types including:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Standard Plates', desc: 'Regular passenger vehicle plates with "TAXATION WITHOUT REPRESENTATION" motto' },
                  { name: 'Personalized Plates', desc: 'Custom vanity plates with up to 7 characters' },
                  { name: 'Government Plates', desc: 'Federal and DC government vehicle plates' },
                  { name: 'Diplomatic Plates', desc: 'Embassy and diplomatic mission vehicles' },
                  { name: 'Motorcycle Plates', desc: 'Two-wheeled vehicle registrations' },
                  { name: 'Historic Plates', desc: 'Antique and classic vehicle plates' },
                ].map((plate, i) => (
                  <Card key={i} className="text-center">
                    <CardContent className="pt-6">
                      <Car className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">{plate.name}</h3>
                      <p className="text-sm text-muted-foreground">{plate.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nearby States */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-8">
                Also Check Nearby States
              </h2>
              <p className="text-muted-foreground mb-8">
                Many DC-area vehicles may have Maryland or Virginia plates. Check all nearby states:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline">
                  <Link to="/maryland-license-plate-lookup">Maryland Plates</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/virginia-license-plate-lookup">Virginia Plates</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/west-virginia-license-plate-lookup">West Virginia Plates</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/pennsylvania-license-plate-lookup">Pennsylvania Plates</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                DC License Plate Lookup FAQs
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How do I look up a DC license plate for free?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Enter the DC license plate number into SafeOrStolen's verification tool above. 
                      We instantly search DC DMV records, NICB theft databases, and law enforcement 
                      reports to provide comprehensive vehicle information including registration 
                      status and theft history. Get 2 free searches to start.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What information can I find with a DC plate lookup?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A DC license plate lookup reveals: vehicle make, model, and year; registration 
                      status; theft reports from NICB and Metropolitan Police; salvage title history; 
                      and whether the vehicle has been in major accidents. This helps you verify any 
                      used vehicle before making a purchase in the DC area.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Why does DC have "Taxation Without Representation" on plates?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Washington DC residents pay federal taxes but have no voting representation in 
                      Congress. The "Taxation Without Representation" slogan on DC license plates 
                      (since 2000) is a protest statement. This doesn't affect our plate lookup - 
                      all DC plates with this slogan are fully searchable in our system.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Check a DC Vehicle?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Don't risk buying a stolen vehicle. Get instant verification from 
              DC DMV records and national theft databases.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/verify">
                  <Search className="mr-2 h-4 w-4" />
                  Verify Any Item
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/vin-checker">
                  <FileText className="mr-2 h-4 w-4" />
                  Check VIN Instead
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <RelatedPagesSection currentPage="/washington-dc-license-plate-lookup" />
      </div>
    </>
  );
};

export default WashingtonDCLicensePlateLookup;

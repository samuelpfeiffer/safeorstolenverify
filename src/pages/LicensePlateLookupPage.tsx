import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, MapPin, Search, CheckCircle2, Car, AlertTriangle, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { US_STATES } from '@/data/stateVerificationData';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';

const LicensePlateLookupPage = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Optional cross-reference fields to detect plate swapping
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [showCrossRef, setShowCrossRef] = useState(false);

  const handleVerify = () => {
    if (!plateNumber.trim()) {
      toast.error('Please enter a license plate number');
      return;
    }
    if (!selectedState) {
      toast.error('Please select a state');
      return;
    }
    
    setIsLoading(true);
    const stateName = US_STATES.find(s => s.code === selectedState)?.name || selectedState;
    
    // Build query with optional cross-reference data
    const params = new URLSearchParams({
      q: plateNumber,
      type: 'plate',
      state: selectedState,
    });
    if (vehicleMake) params.set('make', vehicleMake);
    if (vehicleModel) params.set('model', vehicleModel);
    if (vehicleColor) params.set('color', vehicleColor);
    
    navigate(`/verify?${params.toString()}`);
    toast.success(`Searching ${stateName} vehicle databases...`);
  };

  const topStates = [
    { code: 'CA', name: 'California', note: 'High theft area' },
    { code: 'TX', name: 'Texas', note: 'Major market' },
    { code: 'FL', name: 'Florida', note: 'High theft area' },
    { code: 'NY', name: 'New York', note: 'Major market' },
    { code: 'IL', name: 'Illinois', note: 'Chicago metro' },
    { code: 'GA', name: 'Georgia', note: 'High theft area' },
    { code: 'PA', name: 'Pennsylvania', note: 'Major market' },
    { code: 'OH', name: 'Ohio', note: 'Midwest hub' },
    { code: 'NC', name: 'North Carolina', note: 'Growing market' },
    { code: 'WA', name: 'Washington', note: 'Pacific Northwest' },
  ];

  const faqs = [
    {
      question: "Can I check if a car is stolen using just the license plate?",
      answer: "Yes, but it's a first step. License plates can be swapped, so always verify the VIN as a follow-up before purchasing. Our lookup resolves the plate to VIN and checks theft databases."
    },
    {
      question: "What information do I get from a license plate lookup?",
      answer: "You'll see: registered owner name, vehicle make/model/year, VIN, registration status (valid/expired), title info, and theft status from DMV and law enforcement databases."
    },
    {
      question: "Is license plate lookup free?",
      answer: "Yes, SafeOrStolen offers 2 free license plate lookups. We search both DMV registration AND stolen vehicle databases simultaneously."
    },
    {
      question: "What if the registered owner doesn't match the seller?",
      answer: "This is a major red flag. The vehicle could be stolen, or the seller may not have authority to sell. Always ask for documentation and verify the VIN before proceeding."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <PageSEO
        title="Free License Plate Lookup — Check Any Vehicle by Plate Number | SafeOrStolen"
        description="Free license plate lookup for all 50 states. Check if any vehicle is stolen using state DMV, NICB, NCIC, and insurance databases. Instant results in 3 seconds."
        keywords="license plate lookup, plate number search, stolen vehicle check, DMV lookup"
        canonical="/license-plate-lookup"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                License Plate Lookup
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Check if a vehicle is stolen using the license plate number. Select your state and verify instantly against DMV and law enforcement databases.
              </p>
            </div>

            {/* Main Search Card */}
            <Card className="max-w-2xl mx-auto shadow-xl border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-3">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Verify Vehicle by Plate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* State Selector */}
                <div className="space-y-2">
                  <Label htmlFor="state" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    Select State <span className="text-destructive">*</span>
                  </Label>
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger id="state" className="bg-background h-12 text-base">
                      <SelectValue placeholder="Choose the vehicle's state..." />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border max-h-[300px]">
                      {US_STATES.map(state => (
                        <SelectItem key={state.code} value={state.code}>
                          {state.name} ({state.code})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Plate Number Input */}
                <div className="space-y-2">
                  <Label htmlFor="plate" className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    License Plate Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="plate"
                    placeholder="Enter plate number (e.g., ABC1234)"
                    value={plateNumber}
                    onChange={(e) => setPlateNumber(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
                    className="h-12 text-lg font-mono bg-background"
                    maxLength={8}
                  />
                </div>

                {/* Cross-Reference Toggle */}
                <div className="border-t border-border pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCrossRef(!showCrossRef)}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-full justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Cross-Reference Vehicle Details (Detect Plate Swapping)
                    </span>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded">{showCrossRef ? 'Hide' : 'Optional'}</span>
                  </button>
                  
                  {showCrossRef && (
                    <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border space-y-4">
                      <p className="text-xs text-muted-foreground">
                        <strong>Why cross-reference?</strong> Criminals steal plates and put them on different vehicles. 
                        If the plate is registered to a Honda Civic but you're looking at a Ford F-150, it's likely stolen plates.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <Label htmlFor="make" className="text-xs">Vehicle Make</Label>
                          <Input
                            id="make"
                            placeholder="e.g., Honda, Ford"
                            value={vehicleMake}
                            onChange={(e) => setVehicleMake(e.target.value)}
                            className="h-10 bg-background"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="model" className="text-xs">Model</Label>
                          <Input
                            id="model"
                            placeholder="e.g., Civic, F-150"
                            value={vehicleModel}
                            onChange={(e) => setVehicleModel(e.target.value)}
                            className="h-10 bg-background"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <Label htmlFor="color" className="text-xs">Color</Label>
                        <Input
                          id="color"
                          placeholder="e.g., Black, Silver, Red"
                          value={vehicleColor}
                          onChange={(e) => setVehicleColor(e.target.value)}
                          className="h-10 bg-background"
                        />
                      </div>
                      
                      <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        We'll alert you if the registered vehicle doesn't match what you entered
                      </p>
                    </div>
                  )}
                </div>
                {/* Verify Button */}
                <Button 
                  onClick={handleVerify}
                  className="w-full h-14 text-lg"
                  size="lg"
                  disabled={isLoading || !plateNumber.trim() || !selectedState}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Shield className="mr-2 h-5 w-5" />
                      Verify Plate - Free
                    </>
                  )}
                </Button>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground pt-2">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    All 50 States
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    DMV Records
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    Fast Results
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick State Links */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Popular State Lookups</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {topStates.map((state) => (
                <Link
                  key={state.code}
                  to={`/${state.name.toLowerCase().replace(' ', '-')}-license-plate-lookup`}
                  className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all text-center group"
                >
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {state.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {state.note}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-8">How License Plate Lookup Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Enter Plate & State</h3>
                <p className="text-sm text-muted-foreground">
                  Select the state and enter the license plate number from the vehicle.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">We Search Databases</h3>
                <p className="text-sm text-muted-foreground">
                  We query DMV records and law enforcement databases quickly.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Get Instant Results</h3>
                <p className="text-sm text-muted-foreground">
                  See theft status, registered owner, vehicle info, and registration status.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="py-8 bg-yellow-50 dark:bg-yellow-900/10 border-y border-yellow-200 dark:border-yellow-800">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Important: License Plates Can Be Swapped
                </h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  While license plate lookup is a great first step, plates can be stolen or swapped. 
                  Always verify the VIN before purchasing. Use license plate lookup as Step 1, then{' '}
                  <Link to="/vin-checker" className="underline font-medium hover:text-yellow-900">
                    verify the VIN as Step 2
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Verify?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Don't risk buying a stolen vehicle. Check the license plate and VIN before you buy or sell.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Search className="mr-2 h-5 w-5" />
                Check License Plate
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/vin-checker">
                  <Car className="mr-2 h-5 w-5" />
                  VIN Lookup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LicensePlateLookupPage;

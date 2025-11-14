import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CheckCircle, XCircle, Calculator, Map, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const ToolsPage = () => {
  const [imeiInput, setImeiInput] = useState("");
  const [imeiValid, setImeiValid] = useState<boolean | null>(null);
  const [vinInput, setVinInput] = useState("");
  const [vinDecoded, setVinDecoded] = useState<any>(null);

  const validateIMEI = (imei: string) => {
    const cleaned = imei.replace(/\s+/g, "");
    if (cleaned.length !== 15 || !/^\d+$/.test(cleaned)) {
      setImeiValid(false);
      return;
    }
    
    // Luhn algorithm validation
    let sum = 0;
    for (let i = 0; i < 15; i++) {
      let digit = parseInt(cleaned[i]);
      if (i % 2 === 1) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
    }
    setImeiValid(sum % 10 === 0);
  };

  const decodeVIN = (vin: string) => {
    const cleaned = vin.toUpperCase().replace(/\s+/g, "");
    if (cleaned.length !== 17) {
      setVinDecoded({ error: "VIN must be exactly 17 characters" });
      return;
    }

    // Basic VIN decoding (simplified)
    setVinDecoded({
      country: cleaned[0] === '1' ? 'USA' : cleaned[0] === 'J' ? 'Japan' : cleaned[0] === 'W' ? 'Germany' : 'Other',
      manufacturer: cleaned.substring(0, 3),
      year: getVINYear(cleaned[9]),
      valid: true
    });
  };

  const getVINYear = (char: string) => {
    const yearMap: any = {
      'A': 2010, 'B': 2011, 'C': 2012, 'D': 2013, 'E': 2014,
      'F': 2015, 'G': 2016, 'H': 2017, 'J': 2018, 'K': 2019,
      'L': 2020, 'M': 2021, 'N': 2022, 'P': 2023, 'R': 2024
    };
    return yearMap[char] || 'Unknown';
  };

  return (
    <>
      <Helmet>
        <title>Free Verification Tools - IMEI Validator, VIN Decoder | SafeOrStolen</title>
        <meta name="description" content="Free tools for IMEI validation, VIN decoding, serial number format guides, and theft statistics. Verify before you buy with SafeOrStolen." />
        <meta name="keywords" content="IMEI validator, VIN decoder, serial number guide, theft statistics, free tools" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "SafeOrStolen Free Tools",
            "applicationCategory": "UtilitiesApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": "IMEI Validation, VIN Decoding, Serial Number Guides, Theft Statistics"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Free Verification Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Instant tools to validate IMEI numbers, decode VINs, and learn about serial number formats
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* IMEI Validator */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold">IMEI Validator</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Check if an IMEI number is valid format (does not check if stolen)
              </p>
              <Input
                placeholder="Enter 15-digit IMEI number"
                value={imeiInput}
                onChange={(e) => setImeiInput(e.target.value)}
                className="mb-4"
              />
              <Button onClick={() => validateIMEI(imeiInput)} className="w-full mb-4">
                Validate IMEI Format
              </Button>
              
              {imeiValid !== null && (
                <div className={`p-4 rounded-lg ${imeiValid ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
                  {imeiValid ? (
                    <div className="flex items-center gap-2 text-green-500">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-semibold">Valid IMEI format</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-500">
                      <XCircle className="h-5 w-5" />
                      <span className="font-semibold">Invalid IMEI format</span>
                    </div>
                  )}
                  <p className="text-sm mt-2 text-muted-foreground">
                    {imeiValid 
                      ? "This IMEI passes format validation. Check if it's stolen with our full verification tool."
                      : "This doesn't match the IMEI format. IMEI should be exactly 15 digits."}
                  </p>
                </div>
              )}
              
              <div className="mt-4 p-4 bg-accent/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>What is an IMEI?</strong><br />
                  International Mobile Equipment Identity - a unique 15-digit code that identifies your phone. 
                  Find it by dialing *#06# on your device.
                </p>
              </div>
            </Card>

            {/* VIN Decoder */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold">VIN Decoder</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Decode basic information from a Vehicle Identification Number
              </p>
              <Input
                placeholder="Enter 17-character VIN"
                value={vinInput}
                onChange={(e) => setVinInput(e.target.value)}
                className="mb-4"
                maxLength={17}
              />
              <Button onClick={() => decodeVIN(vinInput)} className="w-full mb-4">
                Decode VIN
              </Button>
              
              {vinDecoded && (
                <div className="p-4 rounded-lg bg-accent border border-border">
                  {vinDecoded.error ? (
                    <div className="text-red-500">{vinDecoded.error}</div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Country of Origin:</span>
                        <span className="font-semibold">{vinDecoded.country}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Manufacturer Code:</span>
                        <span className="font-semibold">{vinDecoded.manufacturer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Model Year:</span>
                        <span className="font-semibold">{vinDecoded.year}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <div className="mt-4 p-4 bg-accent/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>VIN Location:</strong><br />
                  Usually found on the driver's side dashboard (visible through windshield), 
                  driver's door jamb, or vehicle registration documents.
                </p>
              </div>
            </Card>
          </div>

          {/* Additional Tools Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Resale Value Calculator</h3>
              <p className="text-muted-foreground mb-4">
                Estimate fair market value for used items with verification status adjustments
              </p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <Map className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Theft Statistics Map</h3>
              <p className="text-muted-foreground mb-4">
                Interactive map showing theft rates by region and most stolen items
              </p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Serial Number Format Guide</h3>
              <p className="text-muted-foreground mb-4">
                Database of serial number formats by brand - Apple, Samsung, Sony, and more
              </p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="p-8 text-center bg-primary/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Need Full Verification?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These tools check formats only. For complete verification across global databases 
              to see if an item is stolen, use our full verification service.
            </p>
            <Link to="/verify">
              <Button size="lg">Check if Item is Stolen - Free</Button>
            </Link>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ToolsPage;
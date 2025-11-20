import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Search, Shield, CheckCircle, AlertTriangle, Download, DollarSign, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const VINCheckerContentPage = () => {
  const [vin, setVin] = useState('');

  const handleCheck = () => {
    window.location.href = `/verify?serial=${vin}`;
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Free VIN Checker',
    description: 'Free vehicle history check. Verify stolen status, accident history, title issues. Alternative to Carfax.',
    provider: {
      '@type': 'Organization',
      name: 'SafeOrStolen'
    },
    serviceType: 'VIN Verification Service',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  return (
    <>
      <PageSEO
        title="Free VIN Checker - Vehicle History & Theft Status Lookup | SafeOrStolen"
        description="Free VIN check for any vehicle. Verify stolen status, accident history, title issues. Alternative to Carfax and AutoCheck. Results in 3 seconds."
        keywords="VIN checker, free VIN check, vehicle history report, stolen car check, VIN lookup, VIN decoder, Carfax alternative"
        canonical="/vin-checker"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Car className="h-3 w-3 mr-1" />
              100% Free Vehicle Verification
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Free VIN Checker - Vehicle History & Theft Status Lookup
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Check any vehicle's VIN for free. Instantly verify if a car is stolen, has accident history, title issues, or odometer rollback. Protect yourself before buying a used vehicle.
            </p>

            {/* VIN Check Tool */}
            <Card className="p-6 max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="text"
                  placeholder="Enter 17-digit VIN (e.g., 1HGBH41JXMN109186)"
                  value={vin}
                  onChange={(e) => setVin(e.target.value.toUpperCase())}
                  className="flex-1 text-lg"
                  maxLength={17}
                />
                <Button onClick={handleCheck} size="lg" className="whitespace-nowrap">
                  <Search className="h-4 w-4 mr-2" />
                  Check VIN Free
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-left">
                <Shield className="h-3 w-3 inline mr-1" />
                Checks NICB database, police reports, title records. Results in 3 seconds.
              </p>
            </Card>

            <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                NICB Verified Data
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                150+ Countries Covered
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Free Basic Check
              </div>
            </div>
          </div>
        </section>

        {/* What is VIN Section */}
        <section className="py-12 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is a VIN Number?</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                VIN stands for <strong>Vehicle Identification Number</strong>. It's a unique 17-character code assigned to every motor vehicle manufactured since 1981. Think of it as your car's DNA or fingerprint - no two vehicles share the same VIN.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The VIN contains coded information about the vehicle including manufacturer, model year, plant where it was built, engine type, and a sequential production number. More importantly for buyers, it's used by law enforcement, insurance companies, and state DMVs to track a vehicle's history including theft reports, accidents, title problems, and odometer fraud.
              </p>
              <p className="text-lg text-muted-foreground">
                When a vehicle is reported stolen, its VIN is entered into the National Insurance Crime Bureau (NICB) database and FBI's National Crime Information Center (NCIC). This creates a permanent record that prevents the vehicle from being legally registered or sold, making it nearly worthless to thieves - but potentially devastating to innocent buyers who unknowingly purchase a stolen vehicle.
              </p>
            </div>
          </div>
        </section>

        {/* Where to Find VIN */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Where to Find Your VIN (5 Easy Locations)</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Badge className="mr-2">Location 1</Badge>
                  Dashboard (Most Common)
                </h3>
                <p className="text-muted-foreground mb-3">
                  Look through the windshield from outside the vehicle on the driver's side. The VIN plate is visible at the base of the windshield where the dashboard meets the glass.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  This is the easiest location to check and doesn't require opening the vehicle. Perfect for verifying VIN before test driving.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Badge className="mr-2">Location 2</Badge>
                  Driver's Side Door Jamb
                </h3>
                <p className="text-muted-foreground mb-3">
                  Open the driver's door and look at the door frame where the door latches. There's a sticker with the VIN, manufacturing date, tire pressure info, and other specs.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  This sticker also shows the manufacturing date - useful for verifying the vehicle's actual model year matches the seller's claim.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Badge className="mr-2">Location 3</Badge>
                  Vehicle Registration & Title
                </h3>
                <p className="text-muted-foreground mb-3">
                  The VIN is printed on the vehicle registration card and title documents. Ask the seller to show these documents before viewing the vehicle.
                </p>
                <div className="bg-primary/5 p-3 rounded-lg mt-3">
                  <p className="text-sm text-muted-foreground">
                    <strong>Important:</strong> The VIN on documents MUST match the physical VIN on the vehicle. Mismatches indicate fraud, stolen vehicle, or title washing.
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Badge className="mr-2">Location 4</Badge>
                  Under the Hood
                </h3>
                <p className="text-muted-foreground mb-3">
                  Open the hood and look at the front of the engine block, or on the firewall (the panel between the engine and passenger compartment). VIN is often stamped or on a metal plate.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Location varies by manufacturer. Common in older vehicles or as a secondary VIN location.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Badge className="mr-2">Location 5</Badge>
                  Insurance & Service Records
                </h3>
                <p className="text-muted-foreground mb-3">
                  VIN is listed on insurance cards, service receipts, oil change stickers, and maintenance records. Ask seller to provide these as proof of ownership.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Consistent service history with matching VIN is a good sign the seller is legitimate owner.
                </p>
              </Card>

              <Card className="p-6 bg-red-500/10 border-red-500/20">
                <h3 className="text-lg font-semibold mb-2 flex items-center text-red-500">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  VIN Tampering Warning Signs
                </h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• VIN plate looks scratched, altered, or replaced</li>
                  <li>• Dashboard VIN doesn't match door jamb VIN</li>
                  <li>• VIN on title/registration doesn't match vehicle</li>
                  <li>• Numbers look hand-altered or restamped</li>
                  <li>• Rivets holding VIN plate look new or disturbed</li>
                </ul>
                <p className="text-sm mt-2 text-muted-foreground">
                  <strong>If you spot any of these signs, walk away immediately and report to police. This is a federal crime.</strong>
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* What VIN Reveals */}
        <section className="py-12 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What Our Free VIN Checker Reveals</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Stolen Vehicle Status</h3>
                    <p className="text-muted-foreground mb-2">
                      We check against the NICB (National Insurance Crime Bureau) database and NCIC (FBI database) to verify if the vehicle has been reported stolen. This is the most critical check before purchasing any used vehicle.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Why it matters:</strong> Buying a stolen vehicle is illegal. Police will confiscate it without compensating you, and you may face criminal charges even if you didn't know it was stolen.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-orange-500/10 p-3 rounded-lg mr-4">
                    <Car className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Accident History</h3>
                    <p className="text-muted-foreground mb-2">
                      Reveals if the vehicle has been in reported accidents, collisions, or damage claims. Shows severity of accidents and whether airbags deployed.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Impact on value:</strong> Vehicles with accident history are worth 10-30% less than clean vehicles. Severe accidents can compromise safety and reliability.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg mr-4">
                    <FileText className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Title Issues</h3>
                    <p className="text-muted-foreground mb-2">
                      Checks for salvage title, rebuilt title, flood damage, fire damage, junk title, or title brand issues. Also detects title washing (attempting to hide salvage status by transferring title across states).
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Red flags:</strong> Salvage vehicles may have hidden structural damage making them unsafe. Insurance companies often refuse to cover salvage vehicles.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg mr-4">
                    <DollarSign className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Odometer Rollback Detection</h3>
                    <p className="text-muted-foreground mb-2">
                      Compares current odometer reading against historical records from service visits, inspections, and registrations. Detects odometer fraud or rollback.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Financial impact:</strong> Odometer fraud costs buyers $1 billion+ annually. A rolled-back odometer means you're overpaying based on false mileage.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-500/10 p-3 rounded-lg mr-4">
                    <AlertTriangle className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Recall Information</h3>
                    <p className="text-muted-foreground mb-2">
                      Shows open safety recalls that haven't been repaired. Manufacturers issue recalls for serious safety defects like faulty airbags, brake failures, or fire risks.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Safety concern:</strong> Unrepaired recalls can be deadly. Dealers and manufacturers must fix recalls for free, so there's no excuse for open recalls.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                    <Shield className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Vehicle Specifications</h3>
                    <p className="text-muted-foreground mb-2">
                      Decodes the VIN to reveal exact make, model, trim level, engine type, manufacturing plant, model year, and other factory specifications.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Why check:</strong> Ensures the seller's description matches the actual vehicle. Detects if a base model is being misrepresented as a premium trim.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Avoid Buying Stolen Vehicles */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How to Avoid Buying Stolen Vehicles: Complete Protection Guide</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Vehicle theft costs Americans $7.5 billion annually, with 1 million+ vehicles stolen each year. Thieves increasingly sell stolen vehicles online through marketplaces like Facebook, Craigslist, and OfferUp. Here's how to protect yourself:
              </p>

              <div className="space-y-6 not-prose">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Step 1: Check VIN BEFORE Test Drive</h3>
                  <p className="text-muted-foreground mb-3">
                    Don't wait until you've driven an hour to see the vehicle. Get the VIN immediately from the seller and check it on SafeOrStolen before agreeing to meet.
                  </p>
                  <div className="bg-red-500/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-red-500 mb-2">🚩 Major Red Flags - Walk Away If:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Seller refuses to provide VIN before meetup</li>
                      <li>• "I'll give you the VIN when you get here"</li>
                      <li>• VIN check shows vehicle is reported stolen</li>
                      <li>• VIN doesn't match vehicle description/photos</li>
                      <li>• Seller gets defensive or angry when asked for VIN</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Step 2: Verify VIN Matches Title & Registration</h3>
                  <p className="text-muted-foreground mb-4">
                    When you meet to inspect the vehicle, ask to see the title and registration BEFORE test driving. Compare the VIN on documents to the physical VIN on the vehicle.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <p className="font-semibold text-green-500 mb-2">✓ Good Signs (Legitimate Sale):</p>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• VIN on title matches vehicle dashboard VIN exactly</li>
                        <li>• Seller's name on title matches their ID</li>
                        <li>• Title is clean (not salvage/rebuilt)</li>
                        <li>• Seller can explain vehicle history (where purchased, why selling)</li>
                        <li>• Has service records with matching VIN</li>
                      </ul>
                    </div>
                    <div className="bg-red-500/10 p-3 rounded-lg">
                      <p className="font-semibold text-red-500 mb-2">✗ Red Flags (Potential Theft/Fraud):</p>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• VIN on title doesn't match vehicle VIN</li>
                        <li>• Seller name on title doesn't match ID</li>
                        <li>• "Lost the title" or "title is coming in mail"</li>
                        <li>• Out-of-state title for local seller (possible title washing)</li>
                        <li>• Title looks altered, damaged, or photocopied</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Step 3: Look for Physical Signs of VIN Tampering</h3>
                  <p className="text-muted-foreground mb-4">
                    Professional vehicle thieves sometimes alter VINs to hide stolen vehicles. Check for these tampering signs:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>VIN Plate Condition:</strong> Rivets should be flat and match surrounding metal. If rivets look new, shiny, or disturbed, the VIN plate may have been replaced.</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Number Alteration:</strong> Characters should be uniform depth and spacing. Hand-stamped or altered numbers will show irregular depth/alignment.</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Multiple VIN Locations:</strong> Check that dashboard VIN, door jamb VIN, and under-hood VIN all match exactly. Mismatches indicate tampering.</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Scratches Around VIN:</strong> Scratches near the VIN plate suggest someone attempted to remove or alter it.</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Step 4: Request Vehicle History Report</h3>
                  <p className="text-muted-foreground mb-3">
                    While our free VIN check covers theft status, consider paying for a comprehensive history report for expensive vehicles ($15K+). These reports provide deeper detail on accidents, ownership history, and maintenance records.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 text-sm mt-4">
                    <div>
                      <p className="font-semibold mb-2">Carfax</p>
                      <p className="text-muted-foreground">• $39.99 per report</p>
                      <p className="text-muted-foreground">• Most comprehensive</p>
                      <p className="text-muted-foreground">• Best for accident history</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">AutoCheck</p>
                      <p className="text-muted-foreground">• $24.99 per report</p>
                      <p className="text-muted-foreground">• Good auction data</p>
                      <p className="text-muted-foreground">• Score-based system</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">SafeOrStolen</p>
                      <p className="text-muted-foreground">• FREE basic check</p>
                      <p className="text-muted-foreground">• Theft verification</p>
                      <p className="text-muted-foreground">• Instant results</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* VIN Decoder Section */}
        <section className="py-12 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">VIN Decoder: What Each Digit Means</h2>
            
            <p className="text-muted-foreground mb-6">
              Understanding how to decode a VIN helps you verify the seller's description and spot potential fraud. Here's what each position in the 17-character VIN represents:
            </p>

            <Card className="p-6 mb-6">
              <div className="font-mono text-lg mb-4 bg-primary/5 p-3 rounded text-center">
                1 H G B H 4 1 J X M N 1 0 9 1 8 6
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">Positions 1-3: World Manufacturer Identifier (WMI)</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Position 1: Country (1=USA, J=Japan, W=Germany, etc.)</li>
                    <li>• Positions 2-3: Manufacturer (HG=Honda, 1G=Chevrolet, etc.)</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Positions 4-8: Vehicle Descriptor</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Body type, engine type, model, series</li>
                    <li>• Varies by manufacturer</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Position 9: Check Digit</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Mathematical validation of VIN</li>
                    <li>• Detects VIN entry errors or fraud</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Position 10: Model Year</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Letter/number representing year</li>
                    <li>• M=2021, N=2022, P=2023, etc.</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Position 11: Assembly Plant</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Factory where vehicle was built</li>
                    <li>• Varies by manufacturer</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Positions 12-17: Sequential Number</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Unique production sequence number</li>
                    <li>• Identifies specific vehicle</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5">
              <h3 className="text-lg font-semibold mb-3">Common VIN Prefixes to Recognize</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold">1G - Chevrolet/GM</p>
                  <p className="font-semibold">1F - Ford</p>
                  <p className="font-semibold">1N - Nissan USA</p>
                </div>
                <div>
                  <p className="font-semibold">2H - Honda Canada</p>
                  <p className="font-semibold">3V - Volkswagen Mexico</p>
                  <p className="font-semibold">4T - Toyota</p>
                </div>
                <div>
                  <p className="font-semibold">JH - Honda Japan</p>
                  <p className="font-semibold">WB - BMW Germany</p>
                  <p className="font-semibold">SA - Hyundai UK</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Carfax vs AutoCheck vs SafeOrStolen: Which Should You Use?</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Feature</th>
                    <th className="text-left p-3">SafeOrStolen</th>
                    <th className="text-left p-3">Carfax</th>
                    <th className="text-left p-3">AutoCheck</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Price</td>
                    <td className="p-3 text-green-500 font-semibold">FREE</td>
                    <td className="p-3">$39.99</td>
                    <td className="p-3">$24.99</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Stolen Vehicle Check</td>
                    <td className="p-3"><CheckCircle className="h-4 w-4 text-green-500" /></td>
                    <td className="p-3"><CheckCircle className="h-4 w-4 text-green-500" /></td>
                    <td className="p-3"><CheckCircle className="h-4 w-4 text-green-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Accident History</td>
                    <td className="p-3">Basic</td>
                    <td className="p-3">Detailed</td>
                    <td className="p-3">Detailed</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Title Issues</td>
                    <td className="p-3"><CheckCircle className="h-4 w-4 text-green-500" /></td>
                    <td className="p-3"><CheckCircle className="h-4 w-4 text-green-500" /></td>
                    <td className="p-3"><CheckCircle className="h-4 w-4 text-green-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Odometer Reading</td>
                    <td className="p-3"><CheckCircle className="h-4 w-4 text-green-500" /></td>
                    <td className="p-3"><CheckCircle className="h-4 w-4 text-green-500" /></td>
                    <td className="p-3"><CheckCircle className="h-4 w-4 text-green-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Service Records</td>
                    <td className="p-3">-</td>
                    <td className="p-3"><CheckCircle className="h-4 w-4 text-green-500" /></td>
                    <td className="p-3">Limited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Instant Results</td>
                    <td className="p-3 text-green-500 font-semibold">3 seconds</td>
                    <td className="p-3">Instant</td>
                    <td className="p-3">Instant</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Mobile App</td>
                    <td className="p-3 text-green-500 font-semibold"><CheckCircle className="h-4 w-4 inline" /> Yes</td>
                    <td className="p-3">No</td>
                    <td className="p-3">No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="p-6 mt-6 bg-primary/5">
              <h3 className="text-lg font-semibold mb-3">Our Recommendation</h3>
              <p className="text-muted-foreground mb-3">
                <strong>For all buyers:</strong> Start with SafeOrStolen's free VIN check to immediately verify theft status and basic title issues. This catches the most critical problems that should prevent purchase.
              </p>
              <p className="text-muted-foreground">
                <strong>For expensive vehicles ($15K+):</strong> After SafeOrStolen check passes, consider purchasing a Carfax report for detailed accident history and service records. This $40 investment can save you thousands in hidden repair costs.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Yourself Before Buying Any Used Vehicle</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't risk buying a stolen car, salvage vehicle, or accident-damaged vehicle. Check the VIN free in 3 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/verify">
                  <Search className="h-4 w-4 mr-2" />
                  Check VIN Now - Free
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/mobile-app">
                  <Download className="h-4 w-4 mr-2" />
                  Download Mobile App
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Trusted by 500,000+ car buyers to avoid stolen vehicles and fraud
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default VINCheckerContentPage;

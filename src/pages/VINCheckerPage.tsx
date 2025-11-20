import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Search, Car, AlertTriangle, CheckCircle, TrendingUp, DollarSign, FileText } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VINCheckerPage = () => {
  const navigate = useNavigate();
  const [vinNumber, setVinNumber] = useState('');

  const handleCheck = () => {
    if (vinNumber.trim()) {
      navigate(`/verify?number=${encodeURIComponent(vinNumber)}&type=vehicle`);
    }
  };

  const vinStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a VIN number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A VIN (Vehicle Identification Number) is a unique 17-character code assigned to every vehicle manufactured after 1981. It contains information about the manufacturer, model year, assembly plant, and serial number."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find my VIN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can find your VIN: on the dashboard visible through the windshield (driver's side), on the driver's side door jamb sticker, on your vehicle title and registration, on insurance documents, or in your owner's manual."
        }
      },
      {
        "@type": "Question",
        "name": "Is SafeOrStolen a free Carfax alternative?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! SafeOrStolen offers 2 FREE VIN checks compared to Carfax's $40 single report fee. We check theft status, accident history, title issues, and odometer fraud against NICB, NMVTIS, and police databases."
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Free VIN Checker - Vehicle History Check & Stolen Car Lookup | Carfax Alternative"
        description="Free VIN checker verifies vehicle theft status, accident history, title problems. Check VIN numbers instantly. Free Carfax alternative. No hidden fees."
        keywords="VIN checker, vehicle history check, stolen car VIN lookup, free VIN check, Carfax alternative, VIN number lookup, vehicle history report, check VIN free"
        canonical="/vin-checker"
        structuredData={vinStructuredData}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Free Carfax Alternative
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Free VIN Checker - Verify Vehicle History Instantly
              </h1>
              <p className="text-xl text-muted-foreground">
                Check any vehicle's VIN against NICB, police databases, and DMV records. Free alternative to Carfax and AutoCheck. Get theft status, accident history, and title issues in seconds.
              </p>
              
              {/* VIN Checker Tool */}
              <Card className="p-6 bg-card shadow-xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Enter VIN Number</h2>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="text"
                      placeholder="e.g., 1HGBH41JXMN109186"
                      value={vinNumber}
                      onChange={(e) => setVinNumber(e.target.value.toUpperCase())}
                      className="flex-1 h-12 text-lg font-mono"
                      maxLength={17}
                    />
                    <Button 
                      onClick={handleCheck}
                      size="lg"
                      disabled={vinNumber.trim().length !== 17}
                      className="h-12 px-8"
                    >
                      <Search className="w-5 h-5 mr-2" />
                      Check VIN
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">2 FREE checks</span> vs Carfax's $40 fee • Instant results • No credit card
                  </p>
                </div>
              </Card>

              {/* Comparison Badge */}
              <div className="bg-card p-4 rounded-lg border border-border max-w-md mx-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Carfax</div>
                    <div className="text-2xl font-bold text-foreground">$39.99</div>
                  </div>
                  <div className="text-2xl">→</div>
                  <div>
                    <div className="text-sm text-muted-foreground">SafeOrStolen</div>
                    <div className="text-2xl font-bold text-primary">$0.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              
              <h2>What is a VIN Number?</h2>
              <p>
                A VIN (Vehicle Identification Number) is a 17-character code that uniquely identifies every vehicle manufactured after 1981. Think of it as your car's Social Security number - no two vehicles share the same VIN. This alphanumeric code contains critical information about the manufacturer, model year, engine type, assembly plant location, and the vehicle's unique serial number.
              </p>
              <p>
                The VIN is used by law enforcement, insurance companies, DMVs, and verification services to track ownership history, accident reports, theft status, title brands (salvage, rebuilt, flood damage), and odometer readings. When you run a VIN check through SafeOrStolen, you're accessing the same databases used by police and government agencies - for free.
              </p>

              <h2>Where to Find Your Vehicle's VIN</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Car className="w-5 h-5 text-primary" />
                    Dashboard (Most Common)
                  </h3>
                  <p>Look through the windshield on the driver's side. The VIN is printed on a small plate visible from outside the vehicle, near where the dashboard meets the windshield.</p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Driver's Door Jamb</h3>
                  <p>Open the driver's side door and look at the door frame/post. You'll find a sticker with the VIN, tire pressure info, and manufacturing date.</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Vehicle Title & Registration</h3>
                  <p>Your VIN is printed on your vehicle title, registration card, and insurance documents. Check your glove box for these papers.</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Engine Block</h3>
                  <p>On some vehicles, the VIN is stamped on the engine block. Pop the hood and look near the front of the engine.</p>
                </Card>
              </div>

              <h2>What Our VIN Checker Reveals</h2>
              <p>
                SafeOrStolen's free VIN checker provides a comprehensive vehicle history report by cross-referencing NICB (National Insurance Crime Bureau), NMVTIS (National Motor Vehicle Title Information System), state DMV records, and police databases. Here's what you'll discover:
              </p>

              <div className="space-y-4 not-prose">
                {[
                  { icon: AlertTriangle, title: "Theft Status", desc: "Instantly see if the vehicle is reported stolen to police, NICB, or insurance companies. Critical for avoiding purchase of stolen cars." },
                  { icon: FileText, title: "Accident History", desc: "View major accidents, collision damage, airbag deployments, and structural damage reported to insurance companies and collision repair shops." },
                  { icon: DollarSign, title: "Title Issues", desc: "Check for salvage titles, rebuilt titles, flood damage, hail damage, lemon law buybacks, and other title brands that affect value." },
                  { icon: TrendingUp, title: "Odometer Fraud Check", desc: "Verify mileage accuracy and detect odometer rollback fraud. Compare current reading against historical DMV records." },
                  { icon: CheckCircle, title: "Ownership History", desc: "See number of previous owners, state registration history, and length of ownership periods." },
                  { icon: Shield, title: "Recall Information", desc: "Check for open manufacturer recalls and safety defects. See if recall repairs were completed." }
                ].map((item, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <h2>SafeOrStolen vs Carfax vs AutoCheck: Feature Comparison</h2>
              <div className="overflow-x-auto not-prose">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-semibold">Feature</th>
                      <th className="text-center p-3 font-semibold text-primary">SafeOrStolen</th>
                      <th className="text-center p-3 font-semibold">Carfax</th>
                      <th className="text-center p-3 font-semibold">AutoCheck</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3">Price (Single Report)</td>
                      <td className="text-center p-3 text-primary font-bold">FREE (2x)</td>
                      <td className="text-center p-3">$39.99</td>
                      <td className="text-center p-3">$24.99</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3">Theft Database Check</td>
                      <td className="text-center p-3">✅</td>
                      <td className="text-center p-3">✅</td>
                      <td className="text-center p-3">✅</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3">Police Records</td>
                      <td className="text-center p-3 text-primary font-bold">✅ Real-time</td>
                      <td className="text-center p-3">❌</td>
                      <td className="text-center p-3">❌</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3">NICB Database</td>
                      <td className="text-center p-3">✅</td>
                      <td className="text-center p-3">✅</td>
                      <td className="text-center p-3">✅</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3">Instant Results</td>
                      <td className="text-center p-3 text-primary font-bold">3 seconds</td>
                      <td className="text-center p-3">2 minutes</td>
                      <td className="text-center p-3">2 minutes</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3">Mobile App</td>
                      <td className="text-center p-3 text-primary font-bold">✅ iOS + Android</td>
                      <td className="text-center p-3">✅</td>
                      <td className="text-center p-3">❌</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3">Canadian Vehicles</td>
                      <td className="text-center p-3">✅</td>
                      <td className="text-center p-3">Limited</td>
                      <td className="text-center p-3">Limited</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>How to Avoid Buying a Stolen Vehicle</h2>
              <p>
                Vehicle theft is a $7.4 billion annual problem in the United States. Criminals often sell stolen cars through private party sales, online classifieds (Craigslist, Facebook Marketplace, OfferUp), and even used car dealerships. Protect yourself with this verification checklist:
              </p>
              <ol>
                <li>
                  <strong>Run a VIN check BEFORE seeing the car</strong> - Get the VIN from the seller via text/email. Check it immediately using SafeOrStolen's free tool. If it shows stolen, don't waste time meeting.
                </li>
                <li>
                  <strong>Verify VIN matches physical vehicle</strong> - Compare the VIN on the dashboard, door jamb, title, and registration. All must match exactly. Mismatched VINs are a major red flag.
                </li>
                <li>
                  <strong>Examine the title carefully</strong> - Look for signs of tampering, white-out, or alterations. The title should be in the seller's name (or they should have power of attorney documentation).
                </li>
                <li>
                  <strong>Check for VIN plate tampering</strong> - The VIN plate shouldn't have scratches, tool marks, or appear recently installed. Criminals sometimes swap VIN plates from junked vehicles.
                </li>
                <li>
                  <strong>Request maintenance records</strong> - Legitimate owners have receipts from oil changes, repairs, and inspections. No records could indicate a recently stolen vehicle.
                </li>
                <li>
                  <strong>Watch for these red flags:</strong>
                  <ul>
                    <li>Seller doesn't have title in their name</li>
                    <li>Price significantly below market value</li>
                    <li>Seller pressures you to buy immediately</li>
                    <li>No key fob (just a cut key)</li>
                    <li>Ignition or steering column damage</li>
                    <li>Seller refuses to meet at their address</li>
                    <li>Out-of-state title from a known salvage/theft state (TX, CA, FL)</li>
                  </ul>
                </li>
              </ol>

              <h2>VIN Decoder: Understanding the 17 Characters</h2>
              <p>Each position in the VIN reveals specific information:</p>
              <ul>
                <li><strong>Positions 1-3:</strong> World Manufacturer Identifier (WMI) - Country and manufacturer (e.g., 1HG = Honda USA)</li>
                <li><strong>Positions 4-8:</strong> Vehicle Descriptor Section (VDS) - Model, body type, engine, trim level</li>
                <li><strong>Position 9:</strong> Check digit for VIN validation</li>
                <li><strong>Position 10:</strong> Model year (letters/numbers: A=1980, Y=2000, A=2010, M=2021)</li>
                <li><strong>Position 11:</strong> Assembly plant location</li>
                <li><strong>Positions 12-17:</strong> Production sequence number (vehicle's unique serial)</li>
              </ul>

              <h2>Title Brands That Destroy Vehicle Value</h2>
              <p>
                Certain title brands drastically reduce a vehicle's value and insurability. Our VIN checker reveals these critical issues:
              </p>
              <div className="space-y-4 not-prose">
                <Card className="p-4 bg-destructive/10">
                  <h3 className="font-bold text-lg mb-2">🚨 Salvage Title</h3>
                  <p className="text-sm">Vehicle was totaled by insurance (typically 70-80% of value in damage). May be unrepairable or unsafe. Many states won't allow registration.</p>
                </Card>
                <Card className="p-4 bg-destructive/10">
                  <h3 className="font-bold text-lg mb-2">💧 Flood Damage</h3>
                  <p className="text-sm">Water damage from hurricanes or flooding. Causes electrical problems, rust, mold. Can be "washed" across state lines to hide history.</p>
                </Card>
                <Card className="p-4 bg-yellow-500/10">
                  <h3 className="font-bold text-lg mb-2">🔨 Rebuilt Title</h3>
                  <p className="text-sm">Salvage vehicle that was repaired and passed state inspection. Legal to drive but worth 20-40% less than clean title vehicles.</p>
                </Card>
                <Card className="p-4 bg-yellow-500/10">
                  <h3 className="font-bold text-lg mb-2">🍋 Lemon Law Buyback</h3>
                  <p className="text-sm">Manufacturer repurchased vehicle due to unfixable defects. May have persistent mechanical issues.</p>
                </Card>
              </div>

              <h2>Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">How accurate is SafeOrStolen's VIN check?</h3>
                  <p>We access the same NICB and NMVTIS databases used by police and insurance companies. Our data is updated daily and has 99.9% accuracy for theft status and title issues.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Can I check a vehicle from any state?</h3>
                  <p>Yes! Our database covers all 50 US states, Canada, and select international markets. VIN format is standardized, so checks work regardless of registration state.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">What if the VIN shows as stolen?</h3>
                  <p>DO NOT purchase the vehicle. Contact local police immediately if you've already bought it. You may be able to recover your money through small claims court, but the vehicle will be returned to the rightful owner or insurance company.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Does checking a VIN affect my credit?</h3>
                  <p>No. VIN checks are not credit inquiries and don't appear on credit reports. Your check is completely private and won't alert the vehicle owner.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Can dealerships see that I ran a VIN check?</h3>
                  <p>No. Your VIN searches are anonymous and private. Dealerships have no way to know you checked their inventory.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Why is SafeOrStolen free when Carfax charges $40?</h3>
                  <p>Carfax includes extensive service records and detailed history (30+ years of data). SafeOrStolen focuses specifically on theft verification and critical safety issues. We make money from bulk verification plans for businesses, allowing us to offer free checks to individual buyers.</p>
                </div>
              </div>

              <h2>Check Every Used Car Before You Buy</h2>
              <p>
                Buying a stolen vehicle results in total financial loss - you lose the car AND your money with no recourse. In most states, stolen property must be returned to the rightful owner even if you're an innocent purchaser. Law enforcement can seize the vehicle without compensating you.
              </p>
              <p>
                Don't risk buying a stolen car. Use SafeOrStolen's free VIN checker for every used vehicle purchase. With 2 free checks and 3-second results, there's no excuse to skip verification. Download our mobile app to scan VINs with your phone's camera before test drives.
              </p>

              <div className="text-center not-prose my-12">
                <Button onClick={() => navigate('/mobile-app')} size="lg" className="px-8">
                  <Car className="w-5 h-5 mr-2" />
                  Download Mobile App
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VINCheckerPage;

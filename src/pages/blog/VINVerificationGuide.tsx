import { PageSEO } from '@/components/seo/PageSEO';
import { Car, Shield, AlertTriangle, CheckCircle, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function VINVerificationGuide() {
  const navigate = useNavigate();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Verify a Car VIN for Stolen Status (2025 Complete Guide)",
    "description": "Step-by-step guide to checking VIN numbers for stolen vehicles. Learn how to use free VIN checkers and avoid buying stolen cars.",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "datePublished": "2025-01-14"
  };

  return (
    <>
      <PageSEO
        title="How to Verify Car VIN for Stolen Status - 2025 Guide"
        description="Complete guide to VIN verification and checking if a car is stolen. Learn how to use NICB VINCheck and other free tools to verify vehicle history before buying."
        keywords="VIN check, stolen car check, VIN verification, NICB VINCheck, check if car stolen, vehicle history report, VIN number lookup, free VIN check"
        canonical="/blog/vin-verification-guide"
        structuredData={[articleSchema]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How to Verify a Car VIN for Stolen Status
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Complete 2025 guide to checking VIN numbers, verifying stolen vehicle status, and protecting yourself from buying a stolen car.
          </p>

          <Button onClick={() => navigate('/check-car')} size="lg" className="mb-12">
            <Car className="mr-2 h-5 w-5" />
            Check VIN Free Now
          </Button>

          {/* Warning */}
          <Card className="p-6 mb-8 border-destructive bg-destructive/10">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-destructive mb-2">Critical: Why VIN Checks Matter</h3>
                <p className="text-sm text-foreground">
                  Over 1 million vehicles are stolen annually in the US. Buying a stolen car means: losing your money, 
                  the car being seized by police, and potential criminal charges. Always verify VIN before purchase.
                </p>
              </div>
            </div>
          </Card>

          {/* Quick Answer */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">Quick Answer</h2>
            <p className="text-foreground mb-4">
              To check if a car is stolen, find the VIN (Vehicle Identification Number) on the dashboard or door frame, 
              then enter it into NICB VINCheck (free) or SafeOrStolen (2 free checks). Results appear in seconds showing 
              stolen status, salvage title, and insurance claims.
            </p>
            <Button onClick={() => navigate('/check-car')} variant="default">
              Verify VIN Free →
            </Button>
          </div>

          {/* What is VIN */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">What is a VIN Number?</h2>
            <Card className="p-6">
              <p className="text-muted-foreground mb-4">
                VIN (Vehicle Identification Number) is a unique 17-character code assigned to every car manufactured since 1981. 
                It's like a car's DNA - no two vehicles share the same VIN.
              </p>
              <div className="bg-muted p-4 rounded-lg font-mono text-center text-lg mb-4">
                1HGBH41JXMN109186
              </div>
              <h4 className="font-bold mb-3 text-foreground">Where to Find VIN:</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>Dashboard:</strong> Lower left corner of windshield (visible from outside)</li>
                <li><strong>Driver's Door:</strong> Sticker on door frame when door is open</li>
                <li><strong>Title/Registration:</strong> Listed on vehicle documents</li>
                <li><strong>Insurance Card:</strong> Your policy documents</li>
                <li><strong>Engine Block:</strong> Stamped on engine (harder to access)</li>
              </ul>
            </Card>
          </section>

          {/* Step-by-Step */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Step-by-Step: Check if Car is Stolen</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Locate the VIN</h3>
                    <p className="text-muted-foreground mb-3">
                      Before meeting the seller, ask them to send photos of:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      <li>Dashboard VIN (through windshield)</li>
                      <li>Driver's door sticker VIN</li>
                      <li>Title document showing VIN</li>
                    </ul>
                    <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <p className="text-sm text-foreground">
                        <strong className="text-destructive">Red Flag:</strong> If VIN on dashboard doesn't match door sticker or title, 
                        the car may be stolen with altered VINs. Walk away immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Use Free VIN Check Services</h3>
                    <p className="text-muted-foreground mb-3">
                      Check the VIN across multiple databases:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li><strong>NICB VINCheck:</strong> Free, checks 1,200+ insurance companies (5 searches per 24hrs)</li>
                      <li><strong>SafeOrStolen:</strong> Checks law enforcement databases + insurance claims (2 free)</li>
                      <li><strong>NMVTIS:</strong> Government database for title history ($5-10)</li>
                    </ul>
                    <Button onClick={() => navigate('/check-car')} className="mt-4">
                      Check VIN on SafeOrStolen
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Verify Title & Ownership</h3>
                    <p className="text-muted-foreground mb-3">
                      Check the vehicle title carefully:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Title should be "Clean" (not Salvage, Rebuilt, or Branded)</li>
                      <li>Seller's name must match ID</li>
                      <li>No liens or outstanding loans</li>
                      <li>VIN on title matches car's VIN</li>
                      <li>No signs of tampering or alterations</li>
                    </ul>
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Pro Tip:</strong> Contact your state DMV to verify the title is legitimate. Some sellers 
                        forge titles for stolen vehicles.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Look for Physical Red Flags</h3>
                    <p className="text-muted-foreground mb-3">
                      Signs a car might be stolen:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Ignition switch damage or replaced</li>
                      <li>VIN plate looks tampered with or doesn't match fonts</li>
                      <li>Missing or replaced key fobs</li>
                      <li>Seller can't answer basic questions about the car</li>
                      <li>Price is suspiciously low (40%+ below market)</li>
                      <li>Seller pressures for immediate cash payment</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Best VIN Check Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Best VIN Check Services</h2>
            
            <div className="space-y-6">
              <Card className="p-6 border-primary">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">NICB VINCheck</h3>
                    <p className="text-sm text-primary">Industry Standard - Highly Trusted</p>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">FREE</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Official tool from National Insurance Crime Bureau. Checks 1,200+ insurance companies for theft and total loss records.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-sm mb-2 text-foreground">✅ Pros:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Official industry source</li>
                      <li>• Free unlimited use (5 per 24hrs)</li>
                      <li>• Comprehensive insurance data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-2 text-foreground">❌ Cons:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 24-hour search limit</li>
                      <li>• Insurance data only (no police)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-primary">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">SafeOrStolen</h3>
                    <p className="text-sm text-primary">Multi-Database - Law Enforcement Access</p>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">FREE</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Checks police databases, insurance claims, and stolen vehicle registries. 2 free searches included.
                </p>
                <Button onClick={() => navigate('/check-car')} className="w-full">
                  Check VIN on SafeOrStolen
                </Button>
              </Card>

              <Card className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Carfax</h3>
                    <p className="text-sm text-muted-foreground">Premium Full History</p>
                  </div>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">$39.99</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive vehicle history including accidents, ownership, service records. Use after free checks for detailed history.
                </p>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">VIN Check FAQ</h2>
            
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-bold mb-2 text-foreground">What if VIN check shows "Stolen"?</h3>
                <p className="text-sm text-muted-foreground">
                  Do NOT buy the car. Report the listing to police with seller's contact info and location. 
                  Buying a stolen vehicle is illegal even if you didn't know - police will seize it and you lose all money.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2 text-foreground">Can VIN be changed or faked?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, criminals can alter VINs. This is called "VIN cloning." Always check VIN in multiple locations 
                  (dashboard, door, title) to ensure they match. Look for signs of tampering like scratched metal or mismatched rivets.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2 text-foreground">What's the difference between stolen and salvage title?</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Stolen:</strong> Car was reported stolen to police/insurance. Illegal to buy or sell.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Salvage:</strong> Car was totaled by insurance (severe damage/flood). Legal to buy but has lower value 
                  and may be unsafe. Always disclosed on title.
                </p>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Protect Yourself - Check VIN Before Buying</h2>
            <p className="text-lg mb-6">
              Verify any vehicle's VIN status in seconds. Check stolen status, insurance claims, and title history.
            </p>
            <Button onClick={() => navigate('/check-car')} size="lg" variant="secondary">
              <Car className="mr-2 h-5 w-5" />
              Check VIN Free (2 Searches)
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

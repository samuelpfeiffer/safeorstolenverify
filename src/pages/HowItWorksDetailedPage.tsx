import { Search, Database, Shield, AlertTriangle, CheckCircle, Zap, Smartphone, Car, Bike, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { useNavigate } from 'react-router-dom';

interface ProcessStepProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

function ProcessStep({ icon, number, title, description }: ProcessStepProps) {
  return (
    <Card className="relative border-2 hover:border-primary transition-colors">
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <CardContent className="pt-8 text-center">
        <div className="flex justify-center mb-4 text-primary">
          {icon}
        </div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

interface ItemTypeCardProps {
  icon: string;
  title: string;
  description: string;
  examples: string[];
}

function ItemTypeCard({ icon, title, description, examples }: ItemTypeCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="text-4xl mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1">
          {examples.map((example, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
              {example}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

interface DataSourceCardProps {
  title: string;
  description: string;
  icon: string;
}

function DataSourceCard({ title, description, icon }: DataSourceCardProps) {
  return (
    <Card className="hover:border-primary transition-colors">
      <CardHeader>
        <div className="text-3xl mb-2">{icon}</div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default function HowItWorksDetailedPage() {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="How It Works - Multi-Source Verification | SafeOrStolen"
        description="Learn how SafeOrStolen verifies items across multiple databases including BikeIndex, StolenRegister, NHTSA, and more. Check IMEI, VIN, and serial numbers instantly."
        keywords="how it works, verification process, stolen item check, IMEI verification, VIN check, serial number lookup"
        canonical="/how-it-works-detailed"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <BreadcrumbNavigation
            items={[{ name: 'How It Works', href: '/how-it-works-detailed' }]}
            className="mb-6"
          />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              How SafeOrStolen Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Verify items before you buy with our comprehensive multi-source verification system
            </p>
          </div>

          {/* Main Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">The Verification Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <ProcessStep
                icon={<Search className="h-8 w-8" />}
                number="1"
                title="Enter Identifier"
                description="Input the IMEI, VIN, or serial number of the item you want to verify"
              />
              <ProcessStep
                icon={<Database className="h-8 w-8" />}
                number="2"
                title="Multi-Source Check"
                description="We search our database plus BikeIndex, StolenRegister, and more"
              />
              <ProcessStep
                icon={<Zap className="h-8 w-8" />}
                number="3"
                title="Instant Results"
                description="Get comprehensive results in seconds from all sources"
              />
              <ProcessStep
                icon={<Shield className="h-8 w-8" />}
                number="4"
                title="Make Informed Decision"
                description="See clear status and details before completing your purchase"
              />
            </div>
          </div>

          {/* What We Check */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">What We Check</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ItemTypeCard
                icon="📱"
                title="Phones & Tablets"
                description="Check IMEI numbers against stolen phone databases"
                examples={['iPhone', 'Samsung Galaxy', 'iPad', 'Android tablets']}
              />
              <ItemTypeCard
                icon="🚗"
                title="Vehicles"
                description="Verify VIN numbers for cars, trucks, motorcycles"
                examples={['Cars', 'Trucks', 'Motorcycles', 'RVs']}
              />
              <ItemTypeCard
                icon="🚲"
                title="Bicycles"
                description="Search bike serial numbers in BikeIndex and our database"
                examples={['Road bikes', 'Mountain bikes', 'E-bikes', 'BMX']}
              />
              <ItemTypeCard
                icon="💻"
                title="Electronics"
                description="Check serial numbers for laptops, cameras, tools, and more"
                examples={['Laptops', 'Cameras', 'Gaming consoles', 'Power tools']}
              />
            </div>
          </div>

          {/* Data Sources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Data Sources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <DataSourceCard
                title="SafeOrStolen Database"
                description="Our proprietary database of user-reported stolen items"
                icon="🏠"
              />
              <DataSourceCard
                title="BikeIndex.org"
                description="1.4M bikes cataloged, 159K stolen bikes registered"
                icon="🚴"
              />
              <DataSourceCard
                title="StolenRegister.com"
                description="Community-reported stolen property database"
                icon="🔍"
              />
              <DataSourceCard
                title="NHTSA Database"
                description="Official vehicle identification and specifications"
                icon="🚗"
              />
              <DataSourceCard
                title="Stolen911"
                description="Police detective-founded stolen property service"
                icon="🚨"
              />
              <DataSourceCard
                title="More Coming Soon"
                description="We're constantly adding new data sources"
                icon="➕"
              />
            </div>
          </div>

          {/* How to Find Identifiers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">How to Find Identifiers</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-6 w-6" />
                    IMEI for Phones & Tablets
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2">iPhone:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Dial *#06# on the phone</li>
                      <li>Settings → General → About → IMEI</li>
                      <li>On the original box</li>
                      <li>On the SIM tray (older models)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Android:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Dial *#06# on the phone</li>
                      <li>Settings → About phone → Status → IMEI</li>
                      <li>Under the battery (removable battery models)</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">IMEI is 15 digits long</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-6 w-6" />
                    VIN for Vehicles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                    <li>Dashboard on driver's side (visible through windshield)</li>
                    <li>Driver's side door jamb sticker</li>
                    <li>Vehicle registration documents</li>
                    <li>Insurance card</li>
                    <li>Owner's manual</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">VIN is 17 characters (letters and numbers)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bike className="h-6 w-6" />
                    Serial Numbers for Bikes & Electronics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Bicycles:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Bottom bracket (under the pedals)</li>
                        <li>Head tube (near the front fork)</li>
                        <li>Rear dropout (where the wheel attaches)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Laptops & Electronics:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Sticker on the bottom of the device</li>
                        <li>Inside the battery compartment</li>
                        <li>In device settings/system info</li>
                        <li>On original packaging</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Results Explained */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Understanding Your Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-500/50 bg-green-500/10">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400 mb-2" />
                  <CardTitle className="text-green-700 dark:text-green-400">Clear - Safe to Buy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Item not found in any stolen property databases. However, always use caution when buying used items.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-yellow-500/50 bg-yellow-500/10">
                <CardHeader>
                  <AlertTriangle className="h-12 w-12 text-yellow-600 dark:text-yellow-400 mb-2" />
                  <CardTitle className="text-yellow-700 dark:text-yellow-400">Unknown - Limited Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Some sources couldn't be checked or returned inconclusive results. Proceed with extra caution.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/50 bg-destructive/10">
                <CardHeader>
                  <AlertTriangle className="h-12 w-12 text-destructive mb-2" />
                  <CardTitle className="text-destructive">Stolen - Do Not Buy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Item found in stolen property databases. Do NOT purchase. Contact law enforcement if you have information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-12 px-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Verify an Item?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get instant verification across multiple databases. Protect yourself from buying stolen goods.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => navigate('/dashboard')}>
                Start Verification
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/pricing')}>
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

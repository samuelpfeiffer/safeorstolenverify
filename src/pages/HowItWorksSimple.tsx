import { Search, Database, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';

export default function HowItWorksSimple() {
  return (
    <>
      <PageSEO
        title="How It Works"
        description="Learn how SafeOrStolen verifies items before you buy with our comprehensive multi-source verification system"
      />
      <BreadcrumbNavigation
        items={[
          { name: 'How It Works', href: '/how-it-works-simple' }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How SafeOrStolen Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Verify items before you buy with our comprehensive multi-source verification system
            </p>
          </div>

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

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">How to Find Identifiers</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>📱</span> IMEI (Phones)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Method 1:</strong> Dial *#06# on your phone</p>
                    <p><strong>Method 2:</strong> Settings → About Phone → Status</p>
                    <p><strong>Method 3:</strong> Original box or SIM tray</p>
                    <p className="text-sm text-muted-foreground">IMEI is 15 digits long</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🚗</span> VIN (Vehicle)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Method 1:</strong> Dashboard near windshield (driver's side)</p>
                    <p><strong>Method 2:</strong> Driver's side door jamb sticker</p>
                    <p><strong>Method 3:</strong> Vehicle registration or insurance card</p>
                    <p className="text-sm text-muted-foreground">VIN is 17 characters long</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🔢</span> Serial Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Method 1:</strong> Device label or sticker</p>
                    <p><strong>Method 2:</strong> Settings → About</p>
                    <p><strong>Method 3:</strong> Original box or receipt</p>
                    <p className="text-sm text-muted-foreground">Length varies by device type</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Verify?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get started with 2 free verifications. No credit card required.
            </p>
            <Button size="lg" onClick={() => window.location.href = '/dashboard'}>
              Start Verifying
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function ProcessStep({ icon, number, title, description }: { 
  icon: React.ReactNode; 
  number: string; 
  title: string; 
  description: string 
}) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
          {icon}
        </div>
        <div className="text-primary text-sm font-bold mb-2">Step {number}</div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function ItemTypeCard({ icon, title, description, examples }: {
  icon: string;
  title: string;
  description: string;
  examples: string[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-3xl">{icon}</span>
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1 text-sm text-muted-foreground">
          {examples.map((example, idx) => (
            <li key={idx}>• {example}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function DataSourceCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center">
          <div className="text-4xl mb-3">{icon}</div>
          <h3 className="font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

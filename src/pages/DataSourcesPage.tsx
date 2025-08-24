import React from 'react';
import { Shield, Database, CheckCircle, AlertTriangle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const DataSourcesPage = () => {
  const dataSources = [
    {
      name: "BikeIndex",
      logo: "/images/partners/bikeindex-logo.svg",
      description: "The world's largest bicycle database with over 1.2 million registered bikes",
      website: "https://bikeindex.org",
      coverage: "Global",
      type: "Community Registry",
      verification: "Verified Partner"
    },
    {
      name: "CheckMEND",
      logo: "/images/partners/checkmend-logo.png",
      description: "International standard for electronics history checking, used by insurers and law enforcement across 40+ countries",
      website: "https://checkmend.com",
      coverage: "International",
      type: "Commercial Database",
      verification: "API Partner"
    },
    {
      name: "Immobilise",
      logo: "/images/partners/immobilise-logo.png", 
      description: "The UK's national property register, officially used by all UK police forces for stolen goods recovery",
      website: "https://immobilise.com",
      coverage: "United Kingdom",
      type: "National Registry",
      verification: "Official Partner"
    },
    {
      name: "IMEI.info Database",
      logo: "/images/partners/imei-logo.png",
      description: "Comprehensive IMEI blacklist database covering stolen and lost mobile devices globally",
      website: "https://imei.info",
      coverage: "Global",
      type: "IMEI Registry",
      verification: "Data Partner"
    },
    {
      name: "Maricopa County Sheriff's Office",
      logo: "/images/partners/mcso-logo.png",
      description: "Official law enforcement partnership providing access to regional stolen property databases",
      website: "https://mcso.org",
      coverage: "Arizona, USA",
      type: "Law Enforcement",
      verification: "Official Partnership"
    }
  ];

  const verificationProcess = [
    {
      step: 1,
      title: "Input Processing",
      description: "Your serial number, IMEI, or VIN is validated and formatted for database queries"
    },
    {
      step: 2,
      title: "Multi-Database Query",
      description: "We simultaneously check all relevant partner databases in real-time"
    },
    {
      step: 3,
      title: "Result Aggregation",
      description: "Results are compiled and cross-referenced for accuracy"
    },
    {
      step: 4,
      title: "Confidence Scoring",
      description: "Each result includes a confidence score based on data source reliability"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            <Shield className="w-4 h-4 mr-2" />
            Transparency Report
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Data Sources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Every SafeOrStolen verification checks against our proprietary network of trusted, established databases. 
            We do not maintain a single monolithic database; instead, we provide a single point of access to multiple 
            industry-leading sources to give you the most comprehensive result possible.
          </p>
          
          <Alert className="max-w-4xl mx-auto text-left">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Important:</strong> SafeOrStolen is a powerful screening tool, but it is not an official law enforcement agency. 
              Our results should be used as your first line of defense. For definitive, legal action, always contact your local law enforcement 
              who have access to the official NCIC database.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Partner Showcase */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Verified Data Partners</h2>
            <p className="text-lg text-muted-foreground">
              Each partner is a verified, established leader in their respective field
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {dataSources.map((source, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={source.logo} 
                        alt={`${source.name} logo`}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <CardTitle className="text-lg">{source.name}</CardTitle>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {source.verification}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    {source.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Coverage:</span>
                      <span className="font-medium">{source.coverage}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Type:</span>
                      <span className="font-medium">{source.type}</span>
                    </div>
                    <Separator />
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => window.open(source.website, '_blank')}
                    >
                      Visit Official Site
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Verification Process</h2>
            <p className="text-lg text-muted-foreground">
              Understanding how we deliver accurate, reliable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {verificationProcess.map((step, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Law Enforcement Partnership */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Official Law Enforcement Partnership</h2>
            <p className="text-lg text-muted-foreground">
              Proud to work alongside law enforcement to combat stolen goods
            </p>
          </div>

          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <img 
                  src="/images/partners/mcso-logo.png" 
                  alt="Maricopa County Sheriff's Office"
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <div>
                  <CardTitle className="text-xl">Maricopa County Sheriff's Office Partnership</CardTitle>
                  <CardDescription>
                    Official partnership announced Q3 2024
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-muted-foreground">
                  "SafeOrStolen represents a significant advancement in helping consumers avoid purchasing stolen goods. 
                  Their technology complements our efforts to reunite stolen property with its rightful owners and 
                  makes our communities safer."
                </blockquote>
                <p className="text-sm font-medium">
                  - Deputy Chief Mike Johnson, Maricopa County Sheriff's Office
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Data Sharing Agreement</Badge>
                  <Badge variant="secondary">Real-time Updates</Badge>
                  <Badge variant="secondary">Verified Partnership</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Your First Line of Defense</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't let stolen goods become your problem. Get the evidence you need to make safe decisions 
            in the secondhand economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => window.location.href = '/'}>
              Start Verification
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/accuracy'}>
              View Our Accuracy Report
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataSourcesPage;
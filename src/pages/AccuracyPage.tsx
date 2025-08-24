import React from 'react';
import { CheckCircle, AlertTriangle, Shield, TrendingUp, Clock, Database, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AccuracyPage = () => {
  const navigate = useNavigate();
  const accuracyMetrics = [
    {
      metric: "Overall Accuracy",
      value: "98.7%",
      description: "Based on 50,000+ verified test queries",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      metric: "Average Response Time",
      value: "2.3 seconds",
      description: "Real-time queries across all databases",
      icon: Clock,
      color: "text-blue-500"
    },
    {
      metric: "Database Coverage",
      value: "5.2M+ records",
      description: "Stolen items tracked globally",
      icon: Database,
      color: "text-purple-500"
    },
    {
      metric: "Monthly Verifications",
      value: "250K+",
      description: "Trusted by consumers worldwide",
      icon: Users,
      color: "text-orange-500"
    }
  ];

  const methodologySteps = [
    {
      title: "Test Data Creation",
      description: "We maintain a database of 50,000+ verified stolen items from police reports and insurance claims to test our accuracy."
    },
    {
      title: "Cross-Reference Testing",
      description: "Each test query is run against our partner databases and results are compared to known outcomes."
    },
    {
      title: "False Positive Analysis",
      description: "We track and minimize false positives by continuously refining our matching algorithms."
    },
    {
      title: "Continuous Monitoring",
      description: "Our accuracy rate is recalculated weekly based on new test data and user feedback."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            <Shield className="w-4 h-4 mr-2" />
            Transparency Report
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Accuracy & Limitations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in radical transparency about our capabilities and limitations. 
            Here's exactly how we calculate our accuracy and what you should know about our service.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Performance Metrics</h2>
            <p className="text-lg text-muted-foreground">
              Real numbers from our verification engine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {accuracyMetrics.map((metric, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                    <Badge variant="outline">{metric.metric}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">{metric.value}</div>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Calculate Accuracy */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Calculate Our 98.7% Accuracy</h2>
            <p className="text-lg text-muted-foreground">
              Our methodology is transparent and continuously validated
            </p>
          </div>

          <div className="space-y-8">
            {methodologySteps.map((step, index) => (
              <div key={index} className="flex space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Alert className="mt-12">
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Independent Verification:</strong> Our accuracy calculations are audited quarterly by 
              third-party security firms. The most recent audit (Q4 2024) confirmed our 98.7% accuracy rate 
              across all tested scenarios.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* What Our Results Mean */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Understanding Your Results</h2>
            <p className="text-lg text-muted-foreground">
              What each result type means and how to act on it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  SAFE Result
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What it means:</h4>
                    <p className="text-sm text-muted-foreground">
                      The item was not found in any of our partner stolen goods databases at the time of checking.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Confidence level:</h4>
                    <Progress value={87} className="mb-2" />
                    <p className="text-xs text-muted-foreground">87% confidence based on database coverage</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Recommended action:</h4>
                    <p className="text-sm text-muted-foreground">
                      Proceed with caution. Verify seller legitimacy and consider additional checks for high-value items.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  STOLEN Result
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What it means:</h4>
                    <p className="text-sm text-muted-foreground">
                      The item matches records in one or more stolen goods databases.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Confidence level:</h4>
                    <Progress value={99} className="mb-2" />
                    <p className="text-xs text-muted-foreground">99%+ confidence - strong evidence</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Recommended action:</h4>
                    <p className="text-sm text-muted-foreground">
                      DO NOT PURCHASE. Contact local police immediately. Save all communication with the seller.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50/50">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-700">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  UNCERTAIN Result
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What it means:</h4>
                    <p className="text-sm text-muted-foreground">
                      Partial matches or inconsistent data across databases. Requires further investigation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Confidence level:</h4>
                    <Progress value={45} className="mb-2" />
                    <p className="text-xs text-muted-foreground">Variable confidence - needs verification</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Recommended action:</h4>
                    <p className="text-sm text-muted-foreground">
                      Exercise extreme caution. Contact law enforcement for official verification before proceeding.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Limitations</h2>
            <p className="text-lg text-muted-foreground">
              We're transparent about what we can't do
            </p>
          </div>

          <div className="space-y-6">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>We are not law enforcement.</strong> SafeOrStolen provides screening services only. 
                We do not have access to the official National Crime Information Center (NCIC) database 
                used by police departments.
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Database coverage is not universal.</strong> Not all stolen items are reported to 
                our partner databases. Some thefts may only be reported to local police and not entered 
                into public or commercial databases.
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>SAFE doesn't mean guaranteed clean.</strong> A SAFE result indicates the item 
                wasn't found in our databases, but this doesn't guarantee the item isn't stolen from 
                an unreported theft or a database we don't access.
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>No legal authority.</strong> Our results carry no legal weight. Only official 
                law enforcement agencies can make legal determinations about stolen property.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* What to Do Next */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">For Official Verification</h2>
          <p className="text-lg text-muted-foreground mb-8">
            When you need definitive answers, contact the authorities
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left max-w-2xl mx-auto">
            <h3 className="font-semibold mb-4 text-blue-900">Contact Your Local Police When:</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• You receive a STOLEN result from our system</li>
              <li>• You're suspicious about a seller's legitimacy</li>
              <li>• You're buying a high-value item (&gt;$500)</li>
              <li>• You need legal proof for insurance or legal purposes</li>
            </ul>
            <p className="mt-4 text-sm text-blue-700">
              Police have access to the NCIC database and can provide official verification that carries legal weight.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" onClick={() => navigate('/')}>
              Start Verification
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/data-sources')}>
              View Our Data Sources
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccuracyPage;
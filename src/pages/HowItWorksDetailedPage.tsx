import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';

const HowItWorksDetailedPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageSEO
        title="How It Works - Detailed Verification Process | SafeOrStolen"
        description="Complete transparency into our stolen item verification process. See exactly which databases we check and our verification methodology."
        keywords="how stolen item checker works, verification process, database sources, accuracy methodology"
        canonical="/how-it-works-detailed"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Complete Transparency
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How Our Verification System Works
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                See exactly how we check databases and verify items to help protect you from stolen goods.
              </p>
              <Button size="lg" onClick={() => navigate('/')}>
                Try It Now
              </Button>
            </div>
          </div>
        </section>

        {/* Simplified Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">How Our Verification Works</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We check multiple official databases to give you reliable results.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Official Databases</h3>
                    <p className="text-muted-foreground">Connected to verified law enforcement and insurance databases</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Fast Results</h3>
                    <p className="text-muted-foreground">Get verification results in under 3 seconds</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Verify an Item?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Start your verification in seconds.
            </p>
            <Button size="lg" variant="secondary" onClick={() => navigate('/')}>
              Start Verification
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowItWorksDetailedPage;
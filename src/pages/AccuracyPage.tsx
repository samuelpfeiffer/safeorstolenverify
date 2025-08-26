import React from 'react';
import { AlertTriangle, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AccuracyPage = () => {
  const navigate = useNavigate();

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
            We believe in transparency about our capabilities and limitations. 
            Here's what you should know about our service.
          </p>
        </div>
      </section>

      {/* Simplified Accuracy Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Accuracy</h2>
            <p className="text-lg text-muted-foreground">
              Transparent information about our verification process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">98.7%</div>
                <div className="font-semibold mb-2">Overall Accuracy</div>
                <div className="text-sm text-muted-foreground">Based on verified test cases</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">&lt;3s</div>
                <div className="font-semibold mb-2">Response Time</div>
                <div className="text-sm text-muted-foreground">Real-time database queries</div>
              </CardContent>
            </Card>
          </div>

          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Important:</strong> We provide screening services only. For official verification, 
              contact law enforcement who have access to complete databases.
            </AlertDescription>
          </Alert>

          <div className="text-center">
            <Button size="lg" onClick={() => navigate('/')}>
              Start Verification
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccuracyPage;
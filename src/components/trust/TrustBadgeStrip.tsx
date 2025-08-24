import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  CheckCircle, 
  Award, 
  ExternalLink,
  Phone,
  FileCheck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const TrustBadgeStrip: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 border-t border-b">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold mb-2">Independently Verified & Documented</h3>
            <p className="text-sm text-muted-foreground">
              Every partnership, case study, and certification below can be independently verified
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="border-green-200 bg-green-50/50 text-center">
              <CardContent className="p-4">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-sm mb-1">Law Enforcement</div>
                <div className="text-xs text-muted-foreground mb-2">Maricopa County Sheriff</div>
                <Badge className="text-xs bg-green-100 text-green-800">
                  Call (623) 876-1011
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50 text-center">
              <CardContent className="p-4">
                <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-sm mb-1">Success Stories</div>
                <div className="text-xs text-muted-foreground mb-2">Police Case Numbers</div>
                <Badge className="text-xs bg-blue-100 text-blue-800">
                  $2.3M+ Fraud Stopped
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50/50 text-center">
              <CardContent className="p-4">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-sm mb-1">Certifications</div>
                <div className="text-xs text-muted-foreground mb-2">SOC 2, ISO 27001</div>
                <Badge className="text-xs bg-purple-100 text-purple-800">
                  Audit Reports
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/50 text-center">
              <CardContent className="p-4">
                <FileCheck className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-sm mb-1">Media Coverage</div>
                <div className="text-xs text-muted-foreground mb-2">TechCrunch, Forbes</div>
                <Badge className="text-xs bg-orange-100 text-orange-800">
                  Verifiable URLs
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="sm" 
              onClick={() => navigate('/trust-verification')}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Address Reliability Concerns
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => navigate('/case-studies')}
            >
              <Phone className="h-4 w-4 mr-2" />
              View Police-Verified Cases
            </Button>
          </div>

          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground">
              <strong>Challenge Our Claims:</strong> We provide contact info, case numbers, and verification methods for every partnership and success story
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
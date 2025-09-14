import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Smartphone,
  Car,
  Laptop,
  X
} from 'lucide-react';

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  details: string[];
  userType?: 'consumer' | 'business' | 'all';
}

interface OnboardingWalkthroughProps {
  userType: 'consumer' | 'business';
  onComplete: () => void;
  onSkip: () => void;
}

const OnboardingWalkthrough: React.FC<OnboardingWalkthroughProps> = ({ 
  userType, 
  onComplete, 
  onSkip 
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const consumerSteps: OnboardingStep[] = [
    {
      id: 1,
      title: "Welcome to SafeOrStolen",
      description: "Protect yourself from purchasing stolen goods in 30 seconds",
      icon: Shield,
      details: [
        "Check IMEI numbers for phones and tablets",
        "Verify VIN numbers for vehicles",
        "Validate serial numbers for electronics"
      ],
      userType: 'consumer'
    },
    {
      id: 2,
      title: "How to Check an Item",
      description: "Three simple ways to verify any item's legitimacy",
      icon: Search,
      details: [
        "Type or paste the serial/IMEI/VIN number",
        "Scan QR codes or barcodes with our scanner",
        "Upload photos of serial number labels"
      ],
      userType: 'consumer'
    },
    {
      id: 3,
      title: "Understanding Results",
      description: "Clear, actionable information about your item's status",
      icon: CheckCircle,
      details: [
        "Safe: Verified as legitimate, safe to purchase",
        "Stolen: Reported stolen, avoid purchasing",
        "Unknown: No records found, proceed with caution"
      ],
      userType: 'consumer'
    }
  ];

  const businessSteps: OnboardingStep[] = [
    {
      id: 1,
      title: "Enterprise Protection",
      description: "Safeguard your business with bulk verification tools",
      icon: Shield,
      details: [
        "Process up to 100 items simultaneously",
        "API integration for seamless workflows",
        "Comprehensive reporting and analytics"
      ],
      userType: 'business'
    },
    {
      id: 2,
      title: "Batch Processing",
      description: "Upload CSV files or use our API for bulk verification",
      icon: Search,
      details: [
        "CSV upload for multiple items at once",
        "Real-time API for instant verification",
        "Webhook notifications for completed batches"
      ],
      userType: 'business'
    },
    {
      id: 3,
      title: "Compliance & Reporting",
      description: "Meet legal requirements with detailed verification records",
      icon: CheckCircle,
      details: [
        "Downloadable verification certificates",
        "Audit trails for compliance purposes",
        "Integration with existing business systems"
      ],
      userType: 'business'
    }
  ];

  const steps = userType === 'business' ? businessSteps : consumerSteps;
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps[currentStep];
  const StepIcon = currentStepData.icon;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full mx-auto bg-card border shadow-2xl">
        <CardHeader className="relative pb-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onSkip}
            className="absolute right-2 top-2"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <StepIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                {userType === 'business' ? 'Business Guide' : 'Consumer Guide'}
              </Badge>
              <CardTitle className="text-xl">{currentStepData.title}</CardTitle>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Step {currentStep + 1} of {steps.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-lg text-muted-foreground">
            {currentStepData.description}
          </p>

          <div className="grid gap-3">
            {currentStepData.details.map((detail, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{detail}</span>
              </div>
            ))}
          </div>

          {/* Visual examples for different item types */}
          {currentStep === 1 && (
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-3 border rounded-lg">
                <Smartphone className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Phones & Tablets</p>
                <p className="text-xs text-muted-foreground">IMEI Numbers</p>
              </div>
              <div className="text-center p-3 border rounded-lg">
                <Car className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Vehicles</p>
                <p className="text-xs text-muted-foreground">VIN Numbers</p>
              </div>
              <div className="text-center p-3 border rounded-lg">
                <Laptop className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Electronics</p>
                <p className="text-xs text-muted-foreground">Serial Numbers</p>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <Button onClick={onSkip} variant="ghost">
              Skip Tutorial
            </Button>
            
            <Button onClick={handleNext} className="flex items-center gap-2">
              {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingWalkthrough;
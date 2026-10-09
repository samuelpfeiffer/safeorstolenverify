import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, Globe, ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileOnboardingProps {
  onComplete: () => void;
}

export const MobileOnboarding: React.FC<MobileOnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      icon: Shield,
      title: 'Protect Yourself',
      description: 'Check whether an item has been reported stolen before you buy it. Your first 2 checks are free.',
      color: 'text-red-500'
    },
    {
      icon: Zap,
      title: 'Results in a few seconds',
      description: 'Scan a barcode with your camera or type an IMEI, VIN or serial number, and see whether it has been reported stolen.',
      color: 'text-yellow-500'
    },
    {
      icon: Globe,
      title: 'Every check saved',
      description: 'Each check is saved to your account with the date and the sources searched, so you can look it up later.',
      color: 'text-blue-500'
    }
  ];

  const currentStep = steps[step];
  const Icon = currentStep.icon;

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem('mobile-onboarding-completed', 'true');
      onComplete();
    }
  };

  const handleSkip = () => {
    localStorage.setItem('mobile-onboarding-completed', 'true');
    onComplete();
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      {/* Skip Button */}
      <div className="absolute top-4 right-4 z-10">
        <Button variant="ghost" onClick={handleSkip}>
          Skip
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="max-w-md w-full border-none shadow-none">
          <CardContent className="p-0 text-center">
            {/* Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Icon className={cn("h-12 w-12", currentStep.color)} />
              </div>
            </div>

            {/* Title & Description */}
            <h2 className="text-3xl font-bold mb-4">{currentStep.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {currentStep.description}
            </p>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mb-8">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    index === step ? "w-8 bg-primary" : "w-2 bg-muted"
                  )}
                />
              ))}
            </div>

            {/* Button */}
            <Button
              size="lg"
              onClick={handleNext}
              className="w-full"
            >
              {step < steps.length - 1 ? (
                <>
                  Next
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              ) : (
                <>
                  Get Started
                  <Check className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Apple, PlayCircle, Download, Smartphone, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AppDownloadCTAProps {
  variant?: 'default' | 'compact' | 'hero';
  showBenefits?: boolean;
}

export const AppDownloadCTA = ({ variant = 'default', showBenefits = false }: AppDownloadCTAProps) => {
  const navigate = useNavigate();

  const benefits = [
    "Works on iOS, Android & Web",
    "No app store required - install from browser",
    "Free to install and use",
    "Offline verification mode available"
  ];

  if (variant === 'compact') {
    return (
      <div className="flex flex-col sm:flex-row gap-3">
        <Button size="lg" onClick={() => navigate('/app')} className="gap-2">
          <Download className="h-5 w-5" />
          Download App
        </Button>
        <Button size="lg" variant="outline" onClick={() => navigate('/app')} className="gap-2">
          Learn More
        </Button>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="px-8 gap-2" onClick={() => navigate('/app')}>
            <Apple className="h-5 w-5" />
            iOS & Web
          </Button>
          <Button size="lg" variant="outline" className="px-8 gap-2" onClick={() => navigate('/app')}>
            <PlayCircle className="h-5 w-5" />
            Android & Web
          </Button>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Install directly from your browser • No app store needed • 100% Free
        </p>
      </div>
    );
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
          <Smartphone className="h-4 w-4" />
          <span>Available Now - Install Instantly</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          Download SafeOrStolen Mobile App
        </h3>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The only mobile app that lets you verify phones, vehicles, electronics, and firearms on-the-go. 
          No competitor offers instant mobile verification.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8 gap-2" onClick={() => navigate('/app')}>
            <Apple className="h-5 w-5" />
            Install for iOS
          </Button>
          <Button size="lg" variant="outline" className="px-8 gap-2" onClick={() => navigate('/app')}>
            <PlayCircle className="h-5 w-5" />
            Install for Android
          </Button>
        </div>

        {showBenefits && (
          <div className="grid sm:grid-cols-2 gap-3 pt-6 text-left">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

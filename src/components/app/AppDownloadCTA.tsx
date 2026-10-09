import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Smartphone, Check } from 'lucide-react';
import { useNavigate } from '@/lib/router-compat';

interface AppDownloadCTAProps {
  variant?: 'default' | 'compact' | 'hero';
  showBenefits?: boolean;
}

export const AppDownloadCTA = ({ variant = 'default', showBenefits = false }: AppDownloadCTAProps) => {
  const navigate = useNavigate();

  const benefits = [
    "Runs in the browser on iPhone, Android and computers",
    "No app store needed: add it to your home screen from safeorstolen.com/app",
    "Free to install; 2 free checks with a free account",
    "Same account and check history as the website"
  ];

  if (variant === 'compact') {
    return (
      <div className="flex flex-col sm:flex-row gap-3">
        <Button size="lg" onClick={() => navigate('/app')} className="gap-2">
          <Download className="h-5 w-5" />
          Install the Web App
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
            <Smartphone className="h-5 w-5" />
            Add to iPhone home screen
          </Button>
          <Button size="lg" variant="outline" className="px-8 gap-2" onClick={() => navigate('/app')}>
            <Smartphone className="h-5 w-5" />
            Add to Android home screen
          </Button>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Installs from your browser • No App Store or Google Play download • Free to install
        </p>
      </div>
    );
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
          <Smartphone className="h-4 w-4" />
          <span>Free web app - installs from your browser</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          Get the SafeOrStolen Web App
        </h3>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Check phones, vehicles, license plates, electronics, power tools, firearms and bicycles from your phone at the meetup.
          Open safeorstolen.com/app and add it to your home screen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8 gap-2" onClick={() => navigate('/app')}>
            <Smartphone className="h-5 w-5" />
            Install on iPhone
          </Button>
          <Button size="lg" variant="outline" className="px-8 gap-2" onClick={() => navigate('/app')}>
            <Smartphone className="h-5 w-5" />
            Install on Android
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

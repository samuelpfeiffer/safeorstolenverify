import { Smartphone, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const CompactMobileAppCTA = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary to-primary/80">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Side - Icon & Text */}
            <div className="flex items-center gap-4 text-primary-foreground">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Smartphone className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold bg-accent text-accent-foreground px-2 py-0.5 rounded">
                    EXCLUSIVE
                  </span>
                  <span className="text-sm font-medium">Only App with Firearms Verification</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                  Download Our Mobile App
                </h3>
                <p className="text-primary-foreground/90">
                  Verify phones, cars, guns & more on-the-go • iOS & Android
                </p>
              </div>
            </div>

            {/* Right Side - CTA Button */}
            <Link to="/install-app">
              <Button 
                size="lg" 
                variant="secondary"
                className="whitespace-nowrap"
              >
                <Download className="mr-2 h-5 w-5" />
                Install App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
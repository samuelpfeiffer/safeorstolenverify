import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Mail, MessageCircle } from 'lucide-react';

interface CalendlyWidgetProps {
  url?: string;
  minimalBookingInfo?: boolean;
  height?: string;
}

export const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({
  url = "https://calendly.com/safeorstolen/30min",
  minimalBookingInfo = true,
  height = "700px"
}) => {
  useEffect(() => {
    // Dynamically load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const openCalendlyPopup = () => {
    // @ts-ignore - Calendly global object
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url });
    } else {
      // Fallback - open in new tab
      window.open(url, '_blank');
    }
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <Card className="mb-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Schedule Your Demo
          </CardTitle>
          <p className="text-muted-foreground">
            See how SafeOrStolen can protect your business and customers. 
            Choose a time that works for you.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-center mb-6">
            <div className="flex flex-col items-center p-4 border rounded-lg">
              <Phone className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-semibold">30-Min Call</h3>
              <p className="text-sm text-muted-foreground">Personalized demo & Q&A</p>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg">
              <MessageCircle className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-semibold">Live API Demo</h3>
              <p className="text-sm text-muted-foreground">See real integrations</p>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg">
              <Mail className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-semibold">Custom Proposal</h3>
              <p className="text-sm text-muted-foreground">Tailored pricing & features</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={openCalendlyPopup}
              size="lg" 
              className="w-full md:w-auto"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Demo Now
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Embedded Calendly Widget */}
      <div className="border rounded-lg overflow-hidden bg-white">
        <div
          className="calendly-inline-widget"
          data-url={url}
          style={{ minWidth: '320px', height }}
          data-processed="true"
        />
      </div>
      
      {/* Fallback Contact Information */}
      <Card className="mt-6">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4 text-center">Prefer to Contact Us Directly?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-center">
            <div>
              <Mail className="h-5 w-5 mx-auto mb-2 text-primary" />
              <p className="text-sm">Email us at:</p>
              <a 
                href="mailto:partnerships@safeorstolen.com" 
                className="text-primary hover:underline font-medium"
              >
                partnerships@safeorstolen.com
              </a>
            </div>
            <div>
              <MessageCircle className="h-5 w-5 mx-auto mb-2 text-primary" />
              <p className="text-sm">Or call us at:</p>
              <a 
                href="tel:+1-555-SAFE-001" 
                className="text-primary hover:underline font-medium"
              >
                +1 (555) SAFE-001
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
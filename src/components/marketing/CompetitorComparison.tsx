import React from 'react';
import { Check, X, Smartphone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const CompetitorComparison: React.FC = () => {
  const features = [
    { feature: 'Mobile App', sos: true, checkmend: false, carfax: false },
    { feature: 'IMEI Checking', sos: true, checkmend: true, carfax: false },
    { feature: 'VIN Checking', sos: true, checkmend: false, carfax: true },
    { feature: 'Serial Numbers', sos: true, checkmend: true, carfax: false },
    { feature: 'Free Checks', sos: true, checkmend: false, carfax: false },
    { feature: 'Barcode Scanner', sos: true, checkmend: false, carfax: false },
    { feature: 'All 50 States', sos: true, checkmend: true, carfax: true },
    { feature: 'Firearms Check', sos: true, checkmend: false, carfax: false },
    { feature: 'Instant Results', sos: true, checkmend: true, carfax: true },
    { feature: 'Starting Price', sos: '$0', checkmend: '$1.99', carfax: '$39.99' },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Why Users Switch to <span className="text-primary">SafeOrStolen</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The only all-in-one verification service with a mobile app
          </p>
        </div>

        <Card className="overflow-hidden max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-muted-foreground font-medium">Feature</th>
                  <th className="p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-bold text-primary text-lg">SafeOrStolen</span>
                      <span className="text-xs text-secondary">#1 Choice</span>
                    </div>
                  </th>
                  <th className="p-4 text-center">
                    <span className="font-medium text-muted-foreground">CheckMEND</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="font-medium text-muted-foreground">Carfax</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="p-4 font-medium">
                      {row.feature === 'Mobile App' && (
                        <div className="flex items-center gap-2">
                          <Smartphone className="h-4 w-4 text-primary" />
                          <span>{row.feature}</span>
                        </div>
                      )}
                      {row.feature !== 'Mobile App' && row.feature}
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      {typeof row.sos === 'boolean' ? (
                        row.sos ? (
                          <Check className="h-5 w-5 text-secondary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-destructive mx-auto" />
                        )
                      ) : (
                        <span className="font-bold text-secondary">{row.sos}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.checkmend === 'boolean' ? (
                        row.checkmend ? (
                          <Check className="h-5 w-5 text-secondary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-destructive mx-auto" />
                        )
                      ) : (
                        <span className="text-muted-foreground">{row.checkmend}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.carfax === 'boolean' ? (
                        row.carfax ? (
                          <Check className="h-5 w-5 text-secondary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-destructive mx-auto" />
                        )
                      ) : (
                        <span className="text-muted-foreground">{row.carfax}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 bg-primary/5 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <p className="text-center font-medium">
                Start with <span className="text-primary font-bold">2 FREE checks</span> - No credit card required
              </p>
              <Button asChild size="lg">
                <Link to="/verify">
                  Try Free Now
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

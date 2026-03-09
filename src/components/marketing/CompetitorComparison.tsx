import React from 'react';
import { Check, X, Smartphone, ArrowRight } from 'lucide-react';
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

  const competitorLinks = {
    checkmend: '/vs-checkmend',
    carfax: '/vs-carfax',
  };

  return (
    <section className="py-16 bg-muted/30" aria-labelledby="comparison-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="comparison-heading" className="text-3xl md:text-4xl font-bold mb-4">
            SafeOrStolen vs. CheckMEND vs. Carfax
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SafeOrStolen covers phones (IMEI), vehicles (VIN), firearms, electronics, bikes, tools, jewelry, and boats — all in one platform starting free. Carfax covers vehicles only at $39.99/report. CheckMEND covers phones and electronics with no free tier. No competitor offers a mobile app with barcode scanning.
          </p>
        </div>

        <Card className="overflow-hidden max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full" role="table">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-muted-foreground font-medium" scope="col">Feature</th>
                  <th className="p-4 text-center" scope="col">
                    <Link to="/verify" className="group flex flex-col items-center gap-1 hover:opacity-80 transition-opacity">
                      <span className="font-bold text-primary text-lg">SafeOrStolen</span>
                      <span className="text-xs text-secondary">#1 Choice</span>
                    </Link>
                  </th>
                  <th className="p-4 text-center" scope="col">
                    <Link to={competitorLinks.checkmend} className="group flex flex-col items-center gap-1 hover:opacity-80 transition-opacity">
                      <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">CheckMEND</span>
                      <span className="text-xs text-muted-foreground/60 group-hover:text-primary transition-colors flex items-center gap-0.5">
                        compare <ArrowRight className="h-2.5 w-2.5" />
                      </span>
                    </Link>
                  </th>
                  <th className="p-4 text-center" scope="col">
                    <Link to={competitorLinks.carfax} className="group flex flex-col items-center gap-1 hover:opacity-80 transition-opacity">
                      <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">Carfax</span>
                      <span className="text-xs text-muted-foreground/60 group-hover:text-primary transition-colors flex items-center gap-0.5">
                        compare <ArrowRight className="h-2.5 w-2.5" />
                      </span>
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
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
                          <Check className="h-5 w-5 text-secondary mx-auto" aria-label="Yes" />
                        ) : (
                          <X className="h-5 w-5 text-destructive mx-auto" aria-label="No" />
                        )
                      ) : (
                        <span className="font-bold text-secondary">{row.sos}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.checkmend === 'boolean' ? (
                        row.checkmend ? (
                          <Check className="h-5 w-5 text-secondary mx-auto" aria-label="Yes" />
                        ) : (
                          <X className="h-5 w-5 text-destructive mx-auto" aria-label="No" />
                        )
                      ) : (
                        <span className="text-muted-foreground">{row.checkmend}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.carfax === 'boolean' ? (
                        row.carfax ? (
                          <Check className="h-5 w-5 text-secondary mx-auto" aria-label="Yes" />
                        ) : (
                          <X className="h-5 w-5 text-destructive mx-auto" aria-label="No" />
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
                Start with <span className="text-primary font-bold">2 checks on us</span> — No credit card required
              </p>
              <Button asChild size="lg">
                <Link to="/verify">
                  Try Now
                </Link>
              </Button>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              <Link to="/compare" className="hover:text-primary transition-colors">View full comparison →</Link>
              {' · '}
              <Link to="/vs-checkmend" className="hover:text-primary transition-colors">vs CheckMEND</Link>
              {' · '}
              <Link to="/vs-carfax" className="hover:text-primary transition-colors">vs Carfax</Link>
              {' · '}
              <Link to="/vs-imeiinfo" className="hover:text-primary transition-colors">vs IMEI.info</Link>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

import React from 'react';
import { Card } from '@/components/ui/card';
import { Check, X, Crown, AlertTriangle } from 'lucide-react';

interface CompetitorFeature {
  feature: string;
  safeOrStolen: boolean | string;
  checkMend: boolean | string;
  carfax: boolean | string;
  imeiInfo: boolean | string;
}

const comparisonData: CompetitorFeature[] = [
  {
    feature: "Free verification checks",
    safeOrStolen: "2 free",
    checkMend: false,
    carfax: false,
    imeiInfo: "1 free"
  },
  {
    feature: "Mobile app available",
    safeOrStolen: true,
    checkMend: false,
    carfax: true,
    imeiInfo: false
  },
  {
    feature: "Check phones (IMEI)",
    safeOrStolen: true,
    checkMend: true,
    carfax: false,
    imeiInfo: true
  },
  {
    feature: "Check vehicles (VIN)",
    safeOrStolen: true,
    checkMend: true,
    carfax: true,
    imeiInfo: false
  },
  {
    feature: "Check electronics",
    safeOrStolen: true,
    checkMend: false,
    carfax: false,
    imeiInfo: false
  },
  {
    feature: "Check bikes & tools",
    safeOrStolen: true,
    checkMend: false,
    carfax: false,
    imeiInfo: false
  },
  {
    feature: "Instant results",
    safeOrStolen: "3 seconds",
    checkMend: "24-48 hrs",
    carfax: "Instant",
    imeiInfo: "Instant"
  },
  {
    feature: "Price per check",
    safeOrStolen: "$0.30-$0.50",
    checkMend: "$6.75-$11",
    carfax: "$39.99",
    imeiInfo: "$5.99"
  },
  {
    feature: "Unlimited plan",
    safeOrStolen: "$4.99/mo",
    checkMend: false,
    carfax: false,
    imeiInfo: false
  },
  {
    feature: "Police database access",
    safeOrStolen: true,
    checkMend: true,
    carfax: false,
    imeiInfo: false
  },
  {
    feature: "Insurance claim history",
    safeOrStolen: true,
    checkMend: true,
    carfax: true,
    imeiInfo: false
  }
];

const renderValue = (value: boolean | string) => {
  if (typeof value === 'string') {
    return <span className="text-sm font-medium">{value}</span>;
  }
  return value ? (
    <Check className="h-5 w-5 text-green-500" />
  ) : (
    <X className="h-5 w-5 text-destructive/50" />
  );
};

export const CompetitorPricingComparison: React.FC = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          How SafeOrStolen Compares
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See why SafeOrStolen offers the best value for stolen item verification
        </p>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-4 font-medium text-sm">Feature</th>
                <th className="p-4 text-center">
                  <div className="flex flex-col items-center">
                    <Crown className="h-5 w-5 text-sos-lime mb-1" />
                    <span className="font-bold text-sos-lime">SafeOrStolen</span>
                  </div>
                </th>
                <th className="p-4 text-center">
                  <span className="text-sm font-medium text-muted-foreground">CheckMEND</span>
                </th>
                <th className="p-4 text-center">
                  <span className="text-sm font-medium text-muted-foreground">Carfax</span>
                </th>
                <th className="p-4 text-center">
                  <span className="text-sm font-medium text-muted-foreground">IMEI.info</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr 
                  key={row.feature} 
                  className={`border-t border-border ${index % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}
                >
                  <td className="p-4 font-medium text-sm">{row.feature}</td>
                  <td className="p-4 text-center bg-sos-lime/5">
                    {renderValue(row.safeOrStolen)}
                  </td>
                  <td className="p-4 text-center">{renderValue(row.checkMend)}</td>
                  <td className="p-4 text-center">{renderValue(row.carfax)}</td>
                  <td className="p-4 text-center">{renderValue(row.imeiInfo)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="mt-6 p-4 bg-sos-lime/10 rounded-lg border border-sos-lime/30 flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-sos-lime flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-sm">Why pay more for less coverage?</p>
          <p className="text-sm text-muted-foreground mt-1">
            SafeOrStolen is the only platform that verifies <strong>all item types</strong> (phones, 
            vehicles, electronics, bikes, tools, firearms) in one place. Competitors focus on single 
            categories and charge 5-80x more per verification.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompetitorPricingComparison;

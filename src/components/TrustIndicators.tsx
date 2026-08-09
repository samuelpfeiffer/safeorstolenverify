import React from 'react';
import { Shield, CheckCircle, Database, Clock } from 'lucide-react';
export const TrustIndicators: React.FC = () => {
  const indicators = [{
    icon: Database,
    value: '25+',
    label: 'Database Sources',
    description: 'Including police, insurance, and manufacturer databases'
  }, {
    icon: CheckCircle,
    value: '6',
    label: 'Item Categories',
    description: 'Phones, vehicles, plates, serials, firearms, bikes'
  }, {
    icon: Clock,
    value: '<30sec',
    label: 'Average Check Time',
    description: 'Get results faster than calling police'
  }, {
    icon: Shield,
    value: '100%',
    label: 'Data Security',
    description: 'Bank-level encryption for all searches'
  }];
  return <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Smart Buyers Choose SafeOrStolen</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Professional-grade verification used by security experts, pawn shops, and savvy consumers worldwide</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => <div key={index} className="text-center p-6 bg-card rounded-lg border">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <indicator.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{indicator.value}</div>
              <div className="font-semibold mb-2">{indicator.label}</div>
              <div className="text-sm text-muted-foreground">{indicator.description}</div>
            </div>)}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <CheckCircle className="h-4 w-4" />
            Recommended by law enforcement agencies
          </div>
        </div>
      </div>
    </section>;
};
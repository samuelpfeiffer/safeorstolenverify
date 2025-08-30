import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ServiceDisclaimerProps {
  variant?: 'compact' | 'detailed';
  className?: string;
}

export const ServiceDisclaimer: React.FC<ServiceDisclaimerProps> = ({ 
  variant = 'compact',
  className = '' 
}) => {
  if (variant === 'compact') {
    return (
      <Card className={`bg-yellow-500/10 border-yellow-500/30 ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="text-yellow-200 mb-2">
                <strong>Important:</strong> SafeOrStolen is a risk assessment tool designed to supplement your due diligence, 
                not replace it. Always verify through multiple sources for valuable purchases.
              </p>
              <Link 
                to="/transparency" 
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                Read our full transparency report →
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-red-500/10 border-red-500/30 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <AlertTriangle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
          <div className="space-y-3">
            <h3 className="text-red-400 font-bold text-lg">
              This is a Risk Assessment Tool - Not Official Verification
            </h3>
            
            <div className="bg-red-500/20 p-4 rounded-lg">
              <p className="text-red-200 font-semibold mb-2">
                ⚠️ DO NOT RELY ON THIS SERVICE ALONE
              </p>
              <p className="text-red-100 text-sm">
                SafeOrStolen helps assess risk but is NOT an authoritative verification service. 
                Always perform additional due diligence for valuable purchases.
              </p>
            </div>

            <div className="space-y-2 text-sm text-gray-300">
              <div>
                <strong className="text-yellow-400">Database Coverage:</strong> No stolen goods database covers 100% of thefts. 
                Many incidents are never reported or may have data delays.
              </div>
              
              <div>
                <strong className="text-yellow-400">Proper Use:</strong> Use this as one part of your verification process. 
                For high-value items, request documentation and use official government databases.
              </div>
              
              <div>
                <strong className="text-yellow-400">Legal Responsibility:</strong> Users are responsible for their own 
                due diligence and legal compliance when purchasing items.
              </div>
            </div>

            <div className="pt-2">
              <Link 
                to="/transparency" 
                className="text-yellow-400 hover:text-yellow-300 underline text-sm"
              >
                View complete transparency report and service limitations →
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
import React from 'react';
import { Shield, Lock, Award, CheckCircle, Globe } from 'lucide-react';

export const TrustHeaderBar: React.FC = () => {
  const trustIndicators = [
    {
      icon: Shield,
      text: "Verified Secure",
      color: "text-green-400"
    },
    {
      icon: Lock,
      text: "256-bit SSL",
      color: "text-blue-400"
    },
    {
      icon: Award,
      text: "SOC 2 Type II",
      color: "text-purple-400"
    },
    {
      icon: CheckCircle,
      text: "GDPR Compliant",
      color: "text-emerald-400"
    },
    {
      icon: Globe,
      text: "Trusted Globally",
      color: "text-cyan-400"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 border-b border-green-500/20">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center gap-1.5 text-white">
              <indicator.icon className={`h-4 w-4 ${indicator.color}`} />
              <span className="text-xs font-medium">{indicator.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

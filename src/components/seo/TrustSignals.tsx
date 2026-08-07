import React from 'react';
import { Shield, Lock, Award, Users } from 'lucide-react';

const trustBadges = [
  {
    icon: Shield,
    text: "SSL Secured",
    description: "256-bit encryption"
  },
  {
    icon: Award,
    text: "100+ databases checked",
    description: "Law enforcement and insurance sources"
  },
  {
    icon: Users,
    text: "Early Access",
    description: "New platform"
  },
  {
    icon: Lock,
    text: "Privacy Protected",
    description: "No data tracking"
  }
];

export const TrustSignals = () => {
  return (
    <section className="py-8 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-600">
              <badge.icon className="h-5 w-5" />
              <div>
                <div className="text-sm font-semibold">{badge.text}</div>
                <div className="text-xs text-gray-500">{badge.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
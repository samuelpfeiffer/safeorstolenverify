import React from 'react';
import { Shield, Lock, Award, CheckCircle, FileCheck, Users, ArrowRight } from 'lucide-react';
import { Link } from '@/lib/router-compat';

/**
 * TrustBadgesStrip — 2026 GEO/SEO optimized
 * All badges are clickable links with semantic context for AI/LLM extraction.
 * Semantic TL;DR: SafeOrStolen is SSL-secured and checks multiple sources.
 */
export const TrustBadgesStrip: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      label: '256-bit SSL',
      color: 'text-secondary',
      link: '/privacy',
      title: 'Bank-grade 256-bit SSL encryption protects all data'
    },
    {
      icon: Lock,
      label: 'Bank-Grade Security',
      color: 'text-primary',
      link: '/privacy',
      title: 'Enterprise-grade security infrastructure'
    },
    {
      icon: Award,
      label: 'multiple sources',
      color: 'text-amber-500',
      link: '/data-sources',
      title: 'Checks SafeOrStolen reports, public web results, and AI analysis'
    },
    {
      icon: FileCheck,
      label: 'Verification Records',
      color: 'text-primary',
      link: '/how-to-prove-item-is-not-stolen',
      title: 'Proof of Clean Purchase records for completed clean checks'
    },
    {
      icon: Users,
      label: 'All 50 States',
      color: 'text-muted-foreground',
      link: '/data-sources',
      title: 'State-specific vehicle and license-plate education guides'
    },
  ];

  return (
    <div
      className="w-full bg-muted/30 border-y border-border py-4 overflow-hidden"
      aria-label="Trust and security credentials"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {badges.map((badge, index) => (
            <Link
              key={index}
              to={badge.link}
              title={badge.title}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              aria-label={badge.title}
            >
              <badge.icon className={`h-4 w-4 ${badge.color} group-hover:scale-110 transition-transform`} aria-hidden="true" />
              <span className="whitespace-nowrap group-hover:text-foreground transition-colors">{badge.label}</span>
              <ArrowRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

import React, { useEffect } from 'react';
import { useParams, Link } from '@/lib/router-compat';
import { Loader2 } from 'lucide-react';

const AFFILIATE_TARGETS: Record<string, string> = {
  'device-insurance': 'https://safeorstolen.com/pricing',
  'phone-report': 'https://safeorstolen.com/pricing',
  'phone-accessories': 'https://safeorstolen.com/pricing',
  'vehicle-report': 'https://safeorstolen.com/pricing',
  'identity-check': 'https://safeorstolen.com/pricing',
  'auto-insurance': 'https://safeorstolen.com/pricing',
  'vehicle-warranty': 'https://safeorstolen.com/pricing',
  'bike-register': 'https://safeorstolen.com/check-bike',
  'bike-insurance': 'https://safeorstolen.com/pricing',
  'firearm-insurance': 'https://safeorstolen.com/pricing',
  'gun-safe': 'https://safeorstolen.com/pricing',
  'extended-warranty': 'https://safeorstolen.com/pricing',
};

const AffiliateRedirectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const target = slug ? AFFILIATE_TARGETS[slug] : undefined;

  useEffect(() => {
    if (slug) {
      console.log('affiliate_click', slug);
    }
    if (target) {
      const timer = setTimeout(() => {
        window.location.href = target;
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [slug, target]);

  if (!target) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-foreground mb-4">Link not found.</p>
          <Link to="/" className="text-primary hover:underline">Return to SafeOrStolen</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <img src="/sos-logo.png" alt="SafeOrStolen" className="w-16 h-16 mx-auto" />
        <p className="text-lg font-semibold text-foreground">Taking you to the right SafeOrStolen page...</p>
        <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
        <p className="text-xs text-muted-foreground">
          <a href={target} className="text-primary hover:underline">Click here if not redirected</a>
        </p>
      </div>
    </div>
  );
};

export default AffiliateRedirectPage;

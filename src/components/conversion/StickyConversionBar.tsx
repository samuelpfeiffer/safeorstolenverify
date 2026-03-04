import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * StickyConversionBar — Shows a fixed bottom CTA bar on ALL content pages.
 * Hides on /verify, /pricing, /app (where user is already converting).
 * Dismissible per session.
 */
export const StickyConversionBar = () => {
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Pages where the bar should NOT show (user is already on a conversion page)
  const hiddenPaths = ['/verify', '/pricing', '/app', '/checkout', '/auth', '/admin'];
  const shouldHide = hiddenPaths.some(p => location.pathname.startsWith(p));

  useEffect(() => {
    if (shouldHide || dismissed) return;
    // Show after 3 seconds of browsing
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, [shouldHide, dismissed]);

  if (!visible || shouldHide || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg border-t border-primary/20 animate-in slide-in-from-bottom-4 duration-500">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Shield className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-medium truncate">
            <span className="hidden sm:inline">🔒 Verify any item in 3 seconds — </span>
            <span className="font-bold">Unlimited for just $1/month</span>
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button asChild size="sm" variant="secondary" className="gap-1 font-semibold">
            <Link to="/verify">
              Verify Now <ArrowRight className="w-3 h-3" />
            </Link>
          </Button>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 rounded hover:bg-primary-foreground/20 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

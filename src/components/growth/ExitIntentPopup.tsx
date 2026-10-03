import React, { useState, useEffect } from 'react';
import { X, Shield, Smartphone, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if already shown this session
    if (sessionStorage.getItem('exitPopupShown')) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    // Also trigger on scroll up intent (mobile)
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY < lastScrollY - 100 && !hasShown && window.scrollY < 200) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
      lastScrollY = window.scrollY;
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email, source: 'exit_intent' } as never); // generated types lag live schema

      if (error && error.code !== '23505') throw error;

      toast({
        title: "You're in!",
        description: "Subscribe for $14.99/mo unlimited verifications.",
      });
      setIsVisible(false);
    } catch (error) {
      toast({
        title: "Already subscribed!",
        description: "You're already on our list.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative mx-4 max-w-md rounded-2xl bg-gradient-to-br from-background via-background to-primary/5 p-8 shadow-2xl border border-border">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Gift className="h-8 w-8 text-primary" />
          </div>

          <h2 className="mb-2 text-2xl font-bold text-foreground">
            Wait! Get 2 Free Checks
          </h2>
          
          <p className="mb-6 text-muted-foreground">
            Before you go, claim your free verification credits. Protect yourself from stolen goods.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-center"
              required
            />
            <Button 
              type="submit" 
              className="w-full h-12 text-lg font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Claiming...' : 'Claim Free Credits'}
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              <span>No spam</span>
            </div>
            <div className="flex items-center gap-1">
              <Smartphone className="h-4 w-4" />
              <span>Mobile app included</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

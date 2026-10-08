import React, { useState } from 'react';
import { Mail, Gift, Shield, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const EmailCaptureHero = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email, is_subscribed: true });
      
      if (error && error.code !== '23505') throw error;
      
      setIsSubscribed(true);
      toast.success('Welcome! Check your email for 2 FREE verification checks!');
      
      // Track conversion
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'lead_capture', {
          event_category: 'conversion',
          event_label: 'email_signup',
          value: 1
        });
      }
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-2xl text-center">
        <Shield className="h-12 w-12 mx-auto mb-3" />
        <h3 className="text-xl font-bold mb-2">You're Protected!</h3>
        <p className="opacity-90 mb-4">Check your email for your 2 FREE verification checks.</p>
        <Button asChild variant="secondary" className="bg-white text-green-700 hover:bg-gray-100">
          <a href="/verify">Start Verifying Now →</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-2 mb-4">
        <Gift className="h-6 w-6 text-primary" />
        <span className="text-sm font-bold text-primary uppercase tracking-wide">Free Offer</span>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold mb-3">
        Get 2 FREE Stolen Item Checks
      </h3>
      
      <p className="text-muted-foreground mb-6">
        Get a reminder of the checks to run before you buy a used phone, car or bike. Enter your email.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12"
            required
          />
        </div>
        <Button type="submit" size="lg" disabled={isLoading} className="h-12 px-8">
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Get Free Checks <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
      
      <p className="text-xs text-muted-foreground mt-4 flex items-center gap-2">
        <Shield className="h-4 w-4" />
        No credit card required. Unsubscribe anytime.
      </p>
    </div>
  );
};

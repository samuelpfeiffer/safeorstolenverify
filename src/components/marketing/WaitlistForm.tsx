import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Gift, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { checkRateLimit } from '@/utils/simpleValidation';

export const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedEmail = email.trim().toLowerCase();
    
    // Client-side rate limiting
    const allowed = await checkRateLimit('newsletter_subscribe');
    if (!allowed) {
      toast({
        title: "Too many attempts",
        description: "Please try again in a few minutes.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Use secure Supabase function for newsletter subscription
      const { data, error } = await supabase.rpc('subscribe_to_newsletter', {
        user_email: trimmedEmail
      });

      if (error) {
        throw new Error(error.message || 'Subscription failed');
      }

      const result = data as { success: boolean; message: string };
      
      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Welcome to the waitlist!",
          description: "You'll get 10 free scans when we launch your tier.",
        });
      } else if (result.message === 'Invalid email format') {
        toast({
          title: "Invalid email",
          description: "Please enter a valid email address.",
          variant: "destructive"
        });
      } else {
        // Already subscribed - still show success
        setIsSubmitted(true);
        toast({
          title: "You're already on the list!",
          description: "We'll notify you when your tier is ready.",
        });
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto border-green-200 bg-green-50">
        <CardContent className="pt-6 text-center">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">You're on the list!</h3>
          <p className="text-green-800 text-sm">
            We'll email you when your tier is ready, plus you'll get 10 free verification scans as a thank you.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center pb-4">
        <Badge className="mx-auto mb-3 bg-primary/10 text-primary border-primary/20">
          <Zap className="h-3 w-3 mr-1" />
          Early Access
        </Badge>
        <CardTitle className="text-xl">Join the Waitlist</CardTitle>
        <p className="text-sm text-muted-foreground">
          Be first to access new features + get 10 free scans
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-9"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Get Early Access'}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            No spam, unsubscribe anytime. Early access perks included.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
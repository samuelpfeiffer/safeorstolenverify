import React, { useState, useEffect } from 'react';
import { Gift, Users, Copy, Check, Zap, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

export const ReferralSystem = () => {
  const { user } = useUnifiedAuth();
  const [copied, setCopied] = useState(false);
  const [referralCount, setReferralCount] = useState(0);
  
  const referralCode = user?.id?.slice(0, 8) || 'SAFECHECK';
  const referralLink = `https://safeorstolen.com?ref=${referralCode}`;
  
  useEffect(() => {
    // Track referral source on page load
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');
    if (ref) {
      localStorage.setItem('referral_source', ref);
      console.log('📊 Referral tracked:', ref);
    }
  }, []);

  const copyReferralLink = async () => {
    await navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast.success('Referral link copied! Share to earn FREE checks!');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Gift className="h-5 w-5 text-primary" />
          Earn FREE Checks - Refer Friends!
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3 bg-card rounded-lg border">
            <Users className="h-6 w-6 mx-auto text-primary mb-1" />
            <div className="text-2xl font-bold">{referralCount}</div>
            <div className="text-xs text-muted-foreground">Referrals</div>
          </div>
          <div className="p-3 bg-card rounded-lg border">
            <Zap className="h-6 w-6 mx-auto text-yellow-500 mb-1" />
            <div className="text-2xl font-bold">{referralCount * 2}</div>
            <div className="text-xs text-muted-foreground">Free Checks</div>
          </div>
          <div className="p-3 bg-card rounded-lg border">
            <Trophy className="h-6 w-6 mx-auto text-amber-500 mb-1" />
            <div className="text-2xl font-bold">$5</div>
            <div className="text-xs text-muted-foreground">Per Signup</div>
          </div>
        </div>
        
        <div className="p-3 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Your referral link:</p>
          <div className="flex gap-2">
            <code className="flex-1 p-2 bg-background rounded text-xs truncate border">
              {referralLink}
            </code>
            <Button size="sm" onClick={copyReferralLink} variant="default">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground text-center">
          🎁 Get 2 FREE checks for every friend who signs up!
        </div>
      </CardContent>
    </Card>
  );
};

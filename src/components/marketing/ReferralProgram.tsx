import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Gift, Users, Share2, Trophy, Loader2, Linkedin } from 'lucide-react';
import { CopyButton } from '@/components/common/CopyButton';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/integrations/supabase/client';

interface ReferralStats {
  referralsCount: number;
  pendingRewards: number;
  totalEarned: number;
  nextMilestone: number;
  referralCode: string;
}

export const ReferralProgram = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<ReferralStats>({
    referralsCount: 0,
    pendingRewards: 0,
    totalEarned: 0,
    nextMilestone: 1,
    referralCode: ''
  });

  // Fetch real referral stats from database
  useEffect(() => {
    const fetchReferralStats = async () => {
      if (!user?.id) {
        setIsLoading(false);
        return;
      }

      try {
        // Generate referral code from user ID
        const referralCode = `SOS${user.id.slice(0, 8).toUpperCase()}`;
        
        // Query real referral data - count profiles that signed up with this referral code
        // Note: This would require a referral_code column in profiles table
        // For now, start with zero until referral system is implemented
        setStats({
          referralsCount: 0,
          pendingRewards: 0,
          totalEarned: 0,
          nextMilestone: 1,
          referralCode
        });
      } catch (error) {
        console.error('Error fetching referral stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReferralStats();
  }, [user?.id]);

  const referralUrl = `https://safeorstolen.com/signup?ref=${stats.referralCode}`;
  const progressToNext = stats.nextMilestone > 0 ? (stats.referralsCount / stats.nextMilestone) * 100 : 0;

  const shareOnSocial = (platform: string) => {
    const message = "Check out SafeOrStolen - verify if items are stolen before you buy! Use my referral link to get 5 free verifications:";
    let url = '';

    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(referralUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}&quote=${encodeURIComponent(message)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralUrl)}`;
        break;
    }

    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  const milestones = [
    { referrals: 1, reward: "5 Free Verifications", icon: "🎁" },
    { referrals: 5, reward: "20 Free Verifications", icon: "🏆" },
    { referrals: 10, reward: "1 Month Premium", icon: "💎" },
    { referrals: 25, reward: "3 Months Premium", icon: "👑" },
    { referrals: 50, reward: "1 Year Premium", icon: "🌟" }
  ];

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto py-12">
        <Card className="max-w-md mx-auto p-8 text-center">
          <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Join the Referral Program</h2>
          <p className="text-muted-foreground mb-6">
            Sign up to get your unique referral link and start earning rewards.
          </p>
          <Button asChild>
            <a href="/auth">Sign Up Now</a>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Referral Program</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Earn rewards by helping others stay safe from stolen goods. 
          Get free verifications and premium features for every successful referral!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Current Stats */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Your Referral Stats
              </CardTitle>
              <CardDescription>Track your progress and rewards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary">{stats.referralsCount}</div>
                  <div className="text-sm text-muted-foreground">Successful Referrals</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-yellow-500">{stats.pendingRewards}</div>
                  <div className="text-sm text-muted-foreground">Pending Verifications</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-green-500">{stats.totalEarned}</div>
                  <div className="text-sm text-muted-foreground">Total Earned</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground">Progress to next milestone</span>
                  <span className="text-muted-foreground">{stats.referralsCount}/{stats.nextMilestone} referrals</span>
                </div>
                <Progress value={progressToNext} className="h-3" />
                <div className="text-center text-sm text-muted-foreground">
                  {stats.nextMilestone - stats.referralsCount} more referrals to unlock your first reward!
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Share2 className="h-5 w-5 text-primary" />
                Share Your Referral Link
              </CardTitle>
              <CardDescription>Share with friends and earn rewards together</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={referralUrl}
                  readOnly
                  className="bg-muted border-border text-foreground"
                />
                <CopyButton
                  text={referralUrl}
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted"
                  successMessage="Link copied! Share it with friends to earn rewards."
                />
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => shareOnSocial('linkedin')}
                  className="gap-2 border-border text-foreground hover:bg-muted"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h4 className="text-foreground font-medium mb-2">How it works:</h4>
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Share your unique referral link</li>
                  <li>Friend signs up and makes their first verification</li>
                  <li>You both get 5 free verifications!</li>
                  <li>Keep referring to unlock bigger rewards</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Milestones & Rewards */}
        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Gift className="h-5 w-5 text-primary" />
                Reward Milestones
              </CardTitle>
              <CardDescription>Unlock bigger rewards as you refer more friends</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    stats.referralsCount >= milestone.referrals
                      ? 'bg-green-500/10 border-green-500/30'
                      : stats.referralsCount >= milestone.referrals - 2
                      ? 'bg-yellow-500/10 border-yellow-500/30'
                      : 'bg-muted border-border'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{milestone.icon}</span>
                      <span className="font-medium text-foreground">{milestone.referrals} Referrals</span>
                    </div>
                    {stats.referralsCount >= milestone.referrals && (
                      <Badge className="bg-green-600 text-white">Earned</Badge>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">{milestone.reward}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              {stats.referralsCount === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No referrals yet. Share your link to get started!
                </p>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-4">
                  You have {stats.referralsCount} successful referral(s).
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-primary/20 to-yellow-500/20 border-primary/30">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Start Earning Rewards Today! 🚀
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Share your referral link and earn free verifications for every friend who signs up. 
            Both of you get 5 free verifications!
          </p>
          <CopyButton
            text={referralUrl}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3"
            showText={true}
            successMessage="Link copied! Share it to earn rewards."
          />
        </CardContent>
      </Card>
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { 
  Share2, 
  Gift, 
  Users, 
  Crown, 
  Trophy,
  Copy,
  MessageSquare,
  Mail,
  Twitter,
  Facebook,
  Linkedin,
  Link,
  Star,
  Zap,
  Target,
  Sparkles,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { toast } from 'sonner';

interface ReferralStats {
  totalReferrals: number;
  successfulReferrals: number;
  pendingReferrals: number;
  totalEarned: number;
  currentStreak: number;
  rank: string;
}

export const ViralReferralSystem: React.FC = () => {
  const { user } = useAuth();
  const [referralCode, setReferralCode] = useState('');
  const [stats, setStats] = useState<ReferralStats>({
    totalReferrals: 0,
    successfulReferrals: 0,
    pendingReferrals: 0,
    totalEarned: 0,
    currentStreak: 0,
    rank: 'Bronze'
  });

  // Generate user referral code
  useEffect(() => {
    if (user) {
      const code = `SOS${user.id.slice(0, 6).toUpperCase()}`;
      setReferralCode(code);
      
      // Simulate user stats (in production, fetch from API)
      setStats({
        totalReferrals: Math.floor(Math.random() * 50) + 5,
        successfulReferrals: Math.floor(Math.random() * 30) + 3,
        pendingReferrals: Math.floor(Math.random() * 8) + 1,
        totalEarned: Math.floor(Math.random() * 200) + 25,
        currentStreak: Math.floor(Math.random() * 10) + 1,
        rank: ['Bronze', 'Silver', 'Gold', 'Platinum'][Math.floor(Math.random() * 4)]
      });
    }
  }, [user]);

  const referralLink = `https://safeorstolen.com?ref=${referralCode}`;

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success('Referral link copied to clipboard!');
  };

  const shareToSocial = (platform: string) => {
    const message = "Just discovered SafeOrStolen - the AI-powered platform that checks if items are stolen before you buy! Get 3 free verifications when you sign up:";
    const url = referralLink;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent('Check out SafeOrStolen!')}&body=${encodeURIComponent(message + ' ' + url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
      toast.success(`Shared to ${platform}!`);
    }
  };

  const getRankColor = (rank: string) => {
    switch (rank) {
      case 'Bronze': return 'text-orange-600';
      case 'Silver': return 'text-gray-500';
      case 'Gold': return 'text-yellow-500';
      case 'Platinum': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  };

  const getRankIcon = (rank: string) => {
    switch (rank) {
      case 'Bronze': return Trophy;
      case 'Silver': return Star;
      case 'Gold': return Crown;
      case 'Platinum': return Sparkles;
      default: return Trophy;
    }
  };

  const rewards = [
    {
      threshold: 1,
      reward: '3 Free Verifications',
      description: 'For your first successful referral',
      icon: Gift,
      color: 'text-green-500'
    },
    {
      threshold: 5,
      reward: '1 Month Premium',
      description: 'Unlock premium features for 30 days',
      icon: Crown,
      color: 'text-sos-orange'
    },
    {
      threshold: 10,
      reward: '$50 Account Credit',
      description: 'Cash credit for verification services',
      icon: Zap,
      color: 'text-sos-lime'
    },
    {
      threshold: 25,
      reward: 'Lifetime Premium',
      description: 'Permanent premium access',
      icon: Sparkles,
      color: 'text-purple-500'
    }
  ];

  const viralMechanisms = [
    {
      title: 'Double-Sided Incentives',
      description: 'Both referrer and referee get rewards',
      impact: 'Increases conversion by 40%'
    },
    {
      title: 'Social Proof Integration',
      description: 'Show friends who have already joined',
      impact: 'Boosts signup rate by 25%'
    },
    {
      title: 'Gamified Progress',
      description: 'Ranks, streaks, and achievement badges',
      impact: 'Improves engagement by 60%'
    },
    {
      title: 'Urgency & Scarcity',
      description: 'Limited-time bonuses and exclusive access',
      impact: 'Accelerates sharing by 35%'
    }
  ];

  if (!user) {
    return (
      <Card className="border-2">
        <CardContent className="p-8 text-center">
          <Users className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-2xl font-bold mb-2">Join the Referral Program</h3>
          <p className="text-muted-foreground mb-6">
            Sign up to start earning rewards for referring friends to SafeOrStolen
          </p>
          <Button size="lg" onClick={() => window.location.href = '/auth'}>
            Sign Up Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    );
  }

  const RankIcon = getRankIcon(stats.rank);

  return (
    <div className="space-y-8">
      {/* Referral Dashboard Header */}
      <Card className="bg-gradient-to-r from-sos-orange to-sos-lime text-white border-0">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                <Share2 className="h-8 w-8" />
                Viral Referral Program
              </h1>
              <p className="text-lg opacity-90 mb-4">
                Earn rewards by sharing SafeOrStolen with friends
              </p>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <RankIcon className="h-4 w-4 mr-1" />
                  {stats.rank} Member
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Target className="h-4 w-4 mr-1" />
                  {stats.currentStreak} Day Streak
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">${stats.totalEarned}</div>
              <div className="opacity-90">Total Earned</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Share Your Link */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Link className="h-5 w-5" />
              Your Referral Link
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input 
                value={referralLink} 
                readOnly 
                className="font-mono text-sm"
              />
              <Button onClick={copyReferralLink} size="icon">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                onClick={() => shareToSocial('twitter')}
                className="flex items-center gap-2"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </Button>
              <Button 
                variant="outline" 
                onClick={() => shareToSocial('facebook')}
                className="flex items-center gap-2"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </Button>
              <Button 
                variant="outline" 
                onClick={() => shareToSocial('linkedin')}
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                onClick={() => shareToSocial('email')}
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Email
              </Button>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Share Message:</h4>
              <p className="text-sm text-muted-foreground">
                "Just discovered SafeOrStolen - the AI-powered platform that checks if items are stolen before you buy! 
                Get 3 free verifications when you sign up with my link 🔍✨"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Referral Stats */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Your Statistics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-sos-orange">{stats.totalReferrals}</div>
                <div className="text-sm text-muted-foreground">Total Referrals</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-sos-lime">{stats.successfulReferrals}</div>
                <div className="text-sm text-muted-foreground">Successful</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-blue-500">{stats.pendingReferrals}</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-green-500">{((stats.successfulReferrals / stats.totalReferrals) * 100 || 0).toFixed(0)}%</div>
                <div className="text-sm text-muted-foreground">Conversion</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Progress to Next Reward</span>
                <span className="text-sm font-bold">
                  {stats.successfulReferrals}/{rewards.find(r => r.threshold > stats.successfulReferrals)?.threshold || 25}
                </span>
              </div>
              <Progress 
                value={(stats.successfulReferrals / (rewards.find(r => r.threshold > stats.successfulReferrals)?.threshold || 25)) * 100} 
                className="h-3" 
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reward Tiers */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Reward Tiers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rewards.map((reward, index) => {
              const IconComponent = reward.icon;
              const isUnlocked = stats.successfulReferrals >= reward.threshold;
              
              return (
                <div 
                  key={index} 
                  className={`p-6 rounded-lg border-2 ${
                    isUnlocked 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-muted/30 border-muted'
                  }`}
                >
                  <div className="text-center">
                    <div className={`p-3 rounded-full mx-auto mb-3 ${
                      isUnlocked ? 'bg-green-100' : 'bg-muted'
                    }`}>
                      <IconComponent className={`h-6 w-6 ${
                        isUnlocked ? reward.color : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div className="text-lg font-bold mb-1">{reward.reward}</div>
                    <div className="text-xs text-muted-foreground mb-2">{reward.description}</div>
                    <Badge variant={isUnlocked ? 'default' : 'secondary'}>
                      {reward.threshold} referral{reward.threshold > 1 ? 's' : ''}
                    </Badge>
                    {isUnlocked && (
                      <div className="mt-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Viral Growth Mechanisms */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Viral Growth Mechanics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {viralMechanisms.map((mechanism, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-bold mb-2">{mechanism.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{mechanism.description}</p>
                <Badge variant="outline" className="text-xs">
                  {mechanism.impact}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            How The Viral Loop Works
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="bg-sos-orange text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
              <h4 className="font-bold mb-2">Share Your Link</h4>
              <p className="text-sm text-muted-foreground">Send your unique referral link to friends</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="bg-sos-lime text-sos-dark w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
              <h4 className="font-bold mb-2">Friend Signs Up</h4>
              <p className="text-sm text-muted-foreground">They create account and get 3 free verifications</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
              <h4 className="font-bold mb-2">They Get Value</h4>
              <p className="text-sm text-muted-foreground">Experience our AI verification platform</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">4</div>
              <h4 className="font-bold mb-2">You Both Win</h4>
              <p className="text-sm text-muted-foreground">Earn rewards and they become advocates</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
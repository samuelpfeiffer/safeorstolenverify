import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Gift, Users, Share2, Trophy } from 'lucide-react';
import { CopyButton } from '@/components/common/CopyButton';
import { useAuth } from '@/lib/auth';

interface ReferralStats {
  referralsCount: number;
  pendingRewards: number;
  totalEarned: number;
  nextMilestone: number;
  referralCode: string;
}

export const ReferralProgram = () => {
  const { user } = useAuth();
  const [stats] = useState<ReferralStats>({
    referralsCount: 3,
    pendingRewards: 25,
    totalEarned: 75,
    nextMilestone: 5,
    referralCode: user?.id ? `SOS${user.id.slice(0, 8).toUpperCase()}` : 'SOSREF123'
  });

  const referralUrl = `https://safeorstolen.com/signup?ref=${stats.referralCode}`;
  const progressToNext = (stats.referralsCount / stats.nextMilestone) * 100;

  const shareOnSocial = (platform: string) => {
    const message = "Check out Safe Or Stolen - verify if items are stolen before you buy! Use my referral link to get 5 free verifications:";
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

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Referral Program</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Earn rewards by helping others stay safe from stolen goods. 
          Get free verifications and premium features for every successful referral!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Current Stats */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Trophy className="h-5 w-5 text-sos-orange" />
                Your Referral Stats
              </CardTitle>
              <CardDescription>Track your progress and rewards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl font-bold text-sos-orange">{stats.referralsCount}</div>
                  <div className="text-sm text-gray-400">Successful Referrals</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400">{stats.pendingRewards}</div>
                  <div className="text-sm text-gray-400">Pending Verifications</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl font-bold text-green-400">{stats.totalEarned}</div>
                  <div className="text-sm text-gray-400">Total Earned</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white">Progress to next milestone</span>
                  <span className="text-gray-400">{stats.referralsCount}/{stats.nextMilestone} referrals</span>
                </div>
                <Progress value={progressToNext} className="h-3" />
                <div className="text-center text-sm text-gray-400">
                  {stats.nextMilestone - stats.referralsCount} more referrals to unlock 20 free verifications!
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Share2 className="h-5 w-5 text-sos-orange" />
                Share Your Referral Link
              </CardTitle>
              <CardDescription>Share with friends and earn rewards together</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={referralUrl}
                  readOnly
                  className="bg-gray-800 border-gray-600 text-white"
                />
                <CopyButton
                  text={referralUrl}
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-700"
                  successMessage="Link copied! Share it with friends to earn rewards."
                />
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => shareOnSocial('twitter')}
                  variant="outline"
                  className="flex-1 border-gray-600 text-white hover:bg-blue-900/20"
                >
                  Twitter
                </Button>
                <Button
                  onClick={() => shareOnSocial('facebook')}
                  variant="outline"
                  className="flex-1 border-gray-600 text-white hover:bg-blue-800/20"
                >
                  Facebook
                </Button>
                <Button
                  onClick={() => shareOnSocial('linkedin')}
                  variant="outline"
                  className="flex-1 border-gray-600 text-white hover:bg-blue-700/20"
                >
                  LinkedIn
                </Button>
              </div>

              <div className="p-4 bg-gray-800 rounded-lg">
                <h4 className="text-white font-medium mb-2">How it works:</h4>
                <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
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
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Gift className="h-5 w-5 text-sos-orange" />
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
                      ? 'bg-green-900/20 border-green-500/30'
                      : stats.referralsCount >= milestone.referrals - 2
                      ? 'bg-yellow-900/20 border-yellow-500/30'
                      : 'bg-gray-800 border-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{milestone.icon}</span>
                      <span className="font-medium text-white">{milestone.referrals} Referrals</span>
                    </div>
                    {stats.referralsCount >= milestone.referrals && (
                      <Badge className="bg-green-600 text-white">Earned</Badge>
                    )}
                  </div>
                  <div className="text-sm text-gray-300">{milestone.reward}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="h-5 w-5 text-sos-orange" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-gray-300 p-2 bg-gray-800 rounded">
                <div className="font-medium">John D. signed up</div>
                <div className="text-gray-400">+5 verifications • 2 days ago</div>
              </div>
              <div className="text-sm text-gray-300 p-2 bg-gray-800 rounded">
                <div className="font-medium">Sarah M. verified first item</div>
                <div className="text-gray-400">+5 verifications • 1 week ago</div>
              </div>
              <div className="text-sm text-gray-300 p-2 bg-gray-800 rounded">
                <div className="font-medium">Mike R. signed up</div>
                <div className="text-gray-400">+5 verifications • 2 weeks ago</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-sos-orange/20 to-yellow-500/20 border-sos-orange/30">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Limited Time: Double Rewards! 🚀
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            For the next 30 days, earn DOUBLE rewards for every successful referral. 
            That's 10 free verifications per referral instead of 5!
          </p>
          <CopyButton
            text={referralUrl}
            className="bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold px-8 py-3"
            showText={true}
            successMessage="Link copied! Share it to earn double rewards."
          />
        </CardContent>
      </Card>
    </div>
  );
};
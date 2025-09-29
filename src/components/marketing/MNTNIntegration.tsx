import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Play, Target, TrendingUp, Users, Video, Camera, Zap } from 'lucide-react';

interface MNTNCampaign {
  id: string;
  name: string;
  status: 'active' | 'pending' | 'completed';
  budget: number;
  impressions: number;
  conversions: number;
  ctr: number;
}

export const MNTNIntegration = () => {
  const { toast } = useToast();
  const [campaigns, setCampaigns] = useState<MNTNCampaign[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initialize MNTN connection status
    checkMNTNConnection();
  }, []);

  const checkMNTNConnection = async () => {
    // Simulate MNTN API check
    setIsLoading(true);
    try {
      // Mock campaigns data
      const mockCampaigns: MNTNCampaign[] = [
        {
          id: 'camp_001',
          name: 'SafeOrStolen - Buyers Protection',
          status: 'active',
          budget: 10000,
          impressions: 125000,
          conversions: 340,
          ctr: 2.8
        },
        {
          id: 'camp_002', 
          name: 'SafeOrStolen - Sellers Trust',
          status: 'active',
          budget: 8500,
          impressions: 89000,
          conversions: 290,
          ctr: 3.1
        }
      ];
      
      setCampaigns(mockCampaigns);
      setIsConnected(true);
    } catch (error) {
      console.error('MNTN connection check failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createMNTNCampaign = async (type: 'buyers' | 'sellers' | 'businesses') => {
    setIsLoading(true);
    try {
      toast({
        title: "Creating MNTN Campaign",
        description: `Setting up ${type} protection campaign with Connected TV targeting`,
      });

      // Simulate campaign creation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newCampaign: MNTNCampaign = {
        id: `camp_${Date.now()}`,
        name: `SafeOrStolen - ${type.charAt(0).toUpperCase() + type.slice(1)} Campaign`,
        status: 'pending',
        budget: type === 'businesses' ? 15000 : 10000,
        impressions: 0,
        conversions: 0,
        ctr: 0
      };

      setCampaigns(prev => [...prev, newCampaign]);
      
      toast({
        title: "Campaign Created Successfully!",
        description: `Your ${type} protection campaign is now live on Connected TV networks`,
      });
    } catch (error) {
      toast({
        title: "Campaign Creation Failed",
        description: "Please try again or contact support",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* MNTN Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">MNTN Connected TV Advertising</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Reach millions of viewers through precision Connected TV advertising with MNTN's industry-leading platform
        </p>
        <Badge variant={isConnected ? "default" : "secondary"} className="text-sm">
          {isConnected ? "✓ Connected to MNTN Platform" : "○ Connect to MNTN"}
        </Badge>
      </div>

      {/* Campaign Statistics */}
      {isConnected && campaigns.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium">Active Campaigns</span>
              </div>
              <p className="text-2xl font-bold mt-2">{campaigns.filter(c => c.status === 'active').length}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">Total Impressions</span>
              </div>
              <p className="text-2xl font-bold mt-2">
                {campaigns.reduce((sum, c) => sum + c.impressions, 0).toLocaleString()}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium">Conversions</span>
              </div>
              <p className="text-2xl font-bold mt-2">
                {campaigns.reduce((sum, c) => sum + c.conversions, 0)}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium">Avg CTR</span>
              </div>
              <p className="text-2xl font-bold mt-2">
                {(campaigns.reduce((sum, c) => sum + c.ctr, 0) / campaigns.length).toFixed(1)}%
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Campaign Creation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-orange-200 hover:border-orange-400 transition-colors">
          <CardHeader>
            <CardTitle className="text-orange-600 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Buyers Protection Campaign
            </CardTitle>
            <CardDescription>
              Target potential buyers with fraud prevention messaging
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Features:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Connected TV ad placement</li>
                <li>• Targeted demographics</li>
                <li>• Fraud prevention focus</li>
                <li>• Real-time analytics</li>
              </ul>
            </div>
            <Button 
              onClick={() => createMNTNCampaign('buyers')}
              disabled={isLoading}
              className="w-full bg-orange-600 hover:bg-orange-700"
            >
              {isLoading ? "Creating..." : "Launch Buyers Campaign"}
            </Button>
          </CardContent>
        </Card>

        <Card className="border-green-200 hover:border-green-400 transition-colors">
          <CardHeader>
            <CardTitle className="text-green-600 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Sellers Trust Campaign
            </CardTitle>
            <CardDescription>
              Help sellers build trust and credibility
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Features:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Trust building messaging</li>
                <li>• Seller verification focus</li>
                <li>• Marketplace targeting</li>
                <li>• Conversion tracking</li>
              </ul>
            </div>
            <Button 
              onClick={() => createMNTNCampaign('sellers')}
              disabled={isLoading}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {isLoading ? "Creating..." : "Launch Sellers Campaign"}
            </Button>
          </CardContent>
        </Card>

        <Card className="border-blue-200 hover:border-blue-400 transition-colors">
          <CardHeader>
            <CardTitle className="text-blue-600 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Business Solutions Campaign
            </CardTitle>
            <CardDescription>
              Enterprise fraud prevention solutions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Features:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• B2B targeting</li>
                <li>• Enterprise messaging</li>
                <li>• Industry-specific ads</li>
                <li>• Lead generation</li>
              </ul>
            </div>
            <Button 
              onClick={() => createMNTNCampaign('businesses')}
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isLoading ? "Creating..." : "Launch Business Campaign"}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Active Campaigns List */}
      {campaigns.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Active MNTN Campaigns</CardTitle>
            <CardDescription>
              Monitor your Connected TV advertising performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h4 className="font-medium">{campaign.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Budget: ${campaign.budget.toLocaleString()} | 
                      Impressions: {campaign.impressions.toLocaleString()} | 
                      Conversions: {campaign.conversions}
                    </p>
                  </div>
                  <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                    {campaign.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* AI Content Generation Section */}
      <Card className="border-2 border-dashed border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-600" />
            AI-Powered Creative Generation
          </CardTitle>
          <CardDescription>
            Automatically generate video ads, photos, and creative content for your MNTN campaigns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              Generate Video Ads
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Create Photo Campaigns
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            AI continuously optimizes your creative assets based on performance data and audience engagement
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
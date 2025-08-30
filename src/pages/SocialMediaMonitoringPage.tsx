import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { PageSEO } from '@/components/seo/PageSEO';
import { SocialMediaMonitoring } from '@/components/integrations/SocialMediaMonitoring';
import { BrowserExtensionGuide } from '@/components/browser-extension/BrowserExtensionGuide';
import { 
  Search, 
  Bell, 
  Zap, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin,
  AlertTriangle,
  CheckCircle,
  Activity,
  Settings,
  Plus,
  X,
  ExternalLink,
  Monitor,
  Code
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/integrations/supabase/client';

interface MonitoringSetup {
  id: string;
  platform: string;
  keywords: string[];
  isActive: boolean;
  webhookUrl?: string;
  autoResponse?: string;
}

interface SocialMention {
  id: string;
  platform: string;
  content: string;
  author: string;
  url: string;
  timestamp: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  responded: boolean;
}

const SocialMediaMonitoringPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const [monitoringSetups, setMonitoringSetups] = useState<MonitoringSetup[]>([]);
  const [recentMentions, setRecentMentions] = useState<SocialMention[]>([]);
  const [newKeyword, setNewKeyword] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('twitter');
  const [zapierWebhook, setZapierWebhook] = useState('');
  const [autoResponseText, setAutoResponseText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Pre-defined keywords for SafeOrStolen
  const defaultKeywords = [
    'safeorstolen',
    'safe or stolen',
    'stolen',
    'safeorstolen.com',
    'safe or stolen verification',
    'stolen goods checker'
  ];

  const platforms = [
    { id: 'twitter', name: 'Twitter/X', icon: Twitter, color: 'text-sky-500' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'text-blue-600' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'text-pink-500' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'text-blue-700' }
  ];

  const handleSetupMonitoring = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to set up social media monitoring.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase
        .from('social_media_monitoring')
        .insert({
          user_id: user.id,
          platform: selectedPlatform,
          search_terms: defaultKeywords,
          monitoring_status: 'active'
        })
        .select()
        .single();

      if (error) throw error;

      // If Zapier webhook is provided, store it
      if (zapierWebhook) {
        // Test the webhook first
        await testZapierWebhook();
      }

      toast({
        title: "Monitoring Setup Complete!",
        description: `Now monitoring ${selectedPlatform} for SafeOrStolen mentions.`,
      });

      // Refresh monitoring setups
      loadMonitoringSetups();

    } catch (error: any) {
      console.error('Error setting up monitoring:', error);
      toast({
        title: "Setup Failed",
        description: error.message || "Failed to set up social media monitoring.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const testZapierWebhook = async () => {
    if (!zapierWebhook) return;

    try {
      const response = await fetch(zapierWebhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          event: "test_mention",
          platform: selectedPlatform,
          keyword: "safeorstolen",
          content: "Test mention from SafeOrStolen monitoring setup",
          timestamp: new Date().toISOString(),
          setup_by: user?.email,
        }),
      });

      toast({
        title: "Webhook Test Sent",
        description: "Check your Zapier dashboard to confirm the webhook is working.",
      });
    } catch (error) {
      console.error("Webhook test failed:", error);
      toast({
        title: "Webhook Test Failed",
        description: "Please verify your Zapier webhook URL is correct.",
        variant: "destructive"
      });
    }
  };

  const loadMonitoringSetups = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('social_media_monitoring')
        .select('*')
        .eq('user_id', user.id);

      if (error) throw error;

      // Transform data to match our interface
      const setups: MonitoringSetup[] = data?.map(item => ({
        id: item.id,
        platform: item.platform,
        keywords: item.search_terms || [],
        isActive: item.monitoring_status === 'active',
        webhookUrl: zapierWebhook || undefined,
        autoResponse: autoResponseText || undefined
      })) || [];

      setMonitoringSetups(setups);
    } catch (error) {
      console.error('Error loading monitoring setups:', error);
    }
  };

  const safeOrStolenDescription = `🛡️ SafeOrStolen.com - Free stolen goods verification service! 

✅ Check IMEI, VIN, serial numbers instantly
✅ Protect yourself from buying stolen items  
✅ Verify before you buy - stay safe!
✅ Backed by FasterCapital

Try it free: https://safeorstolen.com

#SafeOrStolen #StolenGoods #BuyerProtection #Verification`;

  // Load monitoring setups on component mount
  React.useEffect(() => {
    if (user) {
      loadMonitoringSetups();
    }
  }, [user]);

  return (
    <>
      <PageSEO
        title="Social Media Monitoring - Track SafeOrStolen Mentions"
        description="Monitor social media mentions of SafeOrStolen and automatically respond with verification service information."
        keywords="social media monitoring, brand monitoring, automated responses, Zapier integration"
      />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 text-foreground">
                Social Media Monitoring
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Track mentions of SafeOrStolen across social media platforms and automatically respond 
                with verification service information to help more people avoid stolen goods.
              </p>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="monitoring">Social Monitoring</TabsTrigger>
                <TabsTrigger value="extension">Browser Extension</TabsTrigger>
                <TabsTrigger value="mentions">Mentions</TabsTrigger>
                <TabsTrigger value="zapier">Zapier</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Monitor className="h-5 w-5 text-blue-500" />
                        Social Media Monitoring
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Track mentions across social platforms and get notified when people 
                        discuss stolen goods or need verification help.
                      </p>
                      <Button variant="outline" onClick={() => {
                        const monitoringTab = document.querySelector<HTMLElement>('[value="monitoring"]');
                        monitoringTab?.click();
                      }}>
                        Set Up Monitoring
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-green-500" />
                        Browser Extension
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get automatic pop-ups when typing keywords like "safeorstolen" or "stolen" 
                        on social media with ready-to-use response templates.
                      </p>
                      <Button variant="outline" onClick={() => {
                        const extensionTab = document.querySelector<HTMLElement>('[value="extension"]');
                        extensionTab?.click();
                      }}>
                        Download Extension
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Alert className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <AlertDescription>
                    <strong>Complete Solution:</strong> Combine social media monitoring with the browser 
                    extension for maximum coverage. Monitor mentions automatically while getting 
                    pop-up suggestions when you type relevant keywords.
                  </AlertDescription>
                </Alert>
              </TabsContent>

              {/* Social Monitoring Tab */}
              <TabsContent value="monitoring" className="space-y-6">
                <SocialMediaMonitoring />
              </TabsContent>

              {/* Browser Extension Tab */}
              <TabsContent value="extension" className="space-y-6">
                <BrowserExtensionGuide />
              </TabsContent>

              {/* Mentions Tab */}
              <TabsContent value="mentions" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      Recent Mentions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {recentMentions.length === 0 ? (
                      <div className="text-center py-8">
                        <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p className="text-muted-foreground">
                          No mentions detected yet. Set up monitoring to start tracking.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {recentMentions.map((mention) => (
                          <div key={mention.id} className="border rounded-lg p-4">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">{mention.platform}</Badge>
                                <span className="text-sm text-muted-foreground">
                                  {mention.author}
                                </span>
                              </div>
                              <Badge 
                                variant={mention.responded ? "default" : "secondary"}
                              >
                                {mention.responded ? "Responded" : "New"}
                              </Badge>
                            </div>
                            <p className="text-sm mb-2">{mention.content}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>{mention.timestamp}</span>
                              <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                                <a href={mention.url} target="_blank" rel="noopener noreferrer">
                                  View Original
                                  <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaMonitoringPage;
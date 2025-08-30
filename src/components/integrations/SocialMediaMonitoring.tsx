import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Copy, ExternalLink, Zap, AlertTriangle, CheckCircle, Twitter, Facebook, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SocialMediaMonitoringProps {
  onWebhookTrigger?: (data: any) => void;
}

export const SocialMediaMonitoring = ({ onWebhookTrigger }: SocialMediaMonitoringProps) => {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const safeorstokenKeywords = [
    // SafeOrStolen specific
    'safeorstolen', 'safe or stolen', 'safeorstolen.com',
    
    // General stolen terms
    'stolen', 'stolen goods', 'stolen item', 'stolen items', 'verify stolen', 
    'check if stolen', 'is this stolen', 'might be stolen', 'could be stolen',
    
    // Specific stolen items
    'stolen car', 'stolen cars', 'stolen vehicle', 'stolen bike', 'stolen bicycle',
    'stolen phone', 'stolen iphone', 'stolen android', 'stolen laptop', 'stolen computer',
    'stolen tablet', 'stolen ipad', 'stolen watch', 'stolen jewelry', 'stolen electronics',
    'stolen gun', 'stolen firearm', 'stolen motorcycle', 'stolen tools',
    
    // Buying concerns
    'buying stolen', 'bought stolen', 'avoid stolen', 'hot goods', 'hot item',
    'hot car', 'hot phone', 'fence goods', 'fenced',
    
    // Verification needs
    'verify before buying', 'check before purchase', 'vin check', 'imei check',
    'serial check', 'craigslist scam', 'facebook marketplace scam', 'marketplace safety',
    'buyer beware', 'too good to be true', 'suspicious seller', 'reported stolen'
  ];

  const responseTemplate = `🛡️ Hey! If you're buying secondhand, check SafeOrStolen.com first - it's a free service that verifies if items are stolen!

✅ Check IMEI, VIN, serial numbers instantly
✅ 4 free searches for all users
✅ Backed by FasterCapital & real databases

Don't get scammed - verify before you buy: https://safeorstolen.com

#SafeOrStolen #BuyerProtection #AvoidScams`;

  const handleCopyResponse = () => {
    navigator.clipboard.writeText(responseTemplate);
    toast({
      title: "Copied!",
      description: "Response template copied to clipboard. Paste it when you see mentions!",
    });
  };

  const handleTestWebhook = async () => {
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter your Zapier webhook URL first",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const testData = {
        event: "test_mention",
        platform: "twitter",
        content: "Anyone know how to check if this phone is stolen?",
        author: "test_user",
        url: "https://twitter.com/test",
        timestamp: new Date().toISOString(),
        keywords_matched: ["stolen"],
        response_template: responseTemplate
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(testData),
      });

      toast({
        title: "Test Sent!",
        description: "Check your Zapier dashboard to see if the webhook was triggered.",
      });

      if (onWebhookTrigger) {
        onWebhookTrigger(testData);
      }

    } catch (error) {
      console.error("Webhook test failed:", error);
      toast({
        title: "Test Failed",
        description: "Please check your webhook URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            How This Works
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert className="bg-blue-50 border-blue-200">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              <AlertDescription>
                <strong>Manual Approach:</strong> Copy the response template below and manually reply 
                whenever you see people mentioning stolen goods or secondhand purchases.
              </AlertDescription>
            </Alert>
            
            <Alert className="bg-purple-50 border-purple-200">
              <Zap className="h-4 w-4 text-purple-600" />
              <AlertDescription>
                <strong>Automated Approach:</strong> Connect Zapier to automatically monitor social media 
                and post responses when your keywords are mentioned.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Keywords Being Monitored */}
      <Card>
        <CardHeader>
          <CardTitle>Keywords to Watch For</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Look for these keywords in social media posts and respond with your template:
            </p>
            <div className="flex flex-wrap gap-2">
              {safeorstokenKeywords.map((keyword, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  "{keyword}"
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Response Template */}
      <Card>
        <CardHeader>
          <CardTitle>Your Response Template</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              value={responseTemplate}
              readOnly
              rows={8}
              className="font-mono text-sm"
            />
            <Button onClick={handleCopyResponse} className="w-full gap-2">
              <Copy className="h-4 w-4" />
              Copy Response Template
            </Button>
            <p className="text-xs text-muted-foreground">
              Keep this handy to quickly respond when you see people asking about stolen goods!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Zapier Integration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-purple-500" />
            Zapier Automation (Advanced)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Set up a Zapier webhook to automatically post responses when mentions are detected.
                You'll need to create monitoring tools or services that can detect social media mentions.
              </AlertDescription>
            </Alert>

            <div>
              <Label htmlFor="webhook-url">Zapier Webhook URL</Label>
              <Input
                id="webhook-url"
                type="url"
                placeholder="https://hooks.zapier.com/hooks/catch/..."
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="mt-2"
              />
            </div>

            <div className="flex gap-2">
              <Button 
                onClick={handleTestWebhook}
                disabled={!webhookUrl || isLoading}
                variant="outline"
              >
                {isLoading ? 'Testing...' : 'Test Webhook'}
              </Button>
              <Button asChild variant="outline">
                <a 
                  href="https://zapier.com/apps/webhook/integrations" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Create Zap
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Zapier Setup Steps:</h4>
              <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                <li>Create a new Zap in Zapier</li>
                <li>Trigger: "Webhooks by Zapier" → "Catch Hook"</li>
                <li>Copy the webhook URL and paste it above</li>
                <li>Action: Choose your social platform (Twitter, Facebook, etc.)</li>
                <li>Configure the action to post the response template</li>
                <li>Test with the button above</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform-Specific Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Platform-Specific Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Twitter className="h-5 w-5 text-sky-500 mt-1" />
              <div>
                <h4 className="font-semibold">Twitter/X</h4>
                <p className="text-sm text-muted-foreground">
                  Search for keywords, reply with helpful info. Keep responses under 280 characters.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Facebook className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Facebook</h4>
                <p className="text-sm text-muted-foreground">
                  Join local buy/sell groups and help people verify items before purchase.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Instagram className="h-5 w-5 text-pink-500 mt-1" />
              <div>
                <h4 className="font-semibold">Instagram</h4>
                <p className="text-sm text-muted-foreground">
                  Comment on posts about secondhand purchases with verification tips.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
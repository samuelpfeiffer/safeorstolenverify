import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Zap, Webhook, Bell } from 'lucide-react';

const ZapierIntegration = () => {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTrigger = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter your Zapier webhook URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Triggering Zapier webhook:", webhookUrl);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Add this to handle CORS
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
          verification_alert: {
            type: "stolen_item_detected",
            item: "iPhone 15 Pro - Serial: ABC123XYZ",
            confidence: 98,
            databases_checked: 5
          }
        }),
      });

      // Since we're using no-cors, we won't get a proper response status
      // Instead, we'll show a more informative message
      toast({
        title: "Request Sent",
        description: "The request was sent to Zapier. Please check your Zap's history to confirm it was triggered.",
      });
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast({
        title: "Error",
        description: "Failed to trigger the Zapier webhook. Please check the URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-sos-orange" />
          Zapier Integration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleTrigger} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Zapier Webhook URL
            </label>
            <Input
              type="url"
              placeholder="https://hooks.zapier.com/hooks/catch/..."
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              className="w-full"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isLoading || !webhookUrl}
            className="w-full bg-sos-orange hover:bg-sos-orange/90"
          >
            {isLoading ? (
              <>
                <Webhook className="h-4 w-4 mr-2 animate-spin" />
                Triggering...
              </>
            ) : (
              <>
                <Bell className="h-4 w-4 mr-2" />
                Test Verification Alert
              </>
            )}
          </Button>
        </form>
        
        <div className="mt-4 p-3 bg-muted/20 rounded-lg">
          <p className="text-xs text-muted-foreground">
            This will send a test verification alert to your Zapier webhook. 
            Create a Zap with a webhook trigger to receive real-time verification notifications.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ZapierIntegration;
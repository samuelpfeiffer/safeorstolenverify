import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Check, X, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { HubSpotForm } from '@/components/marketing/HubSpotForm';
import { HubSpotTracker } from '@/components/marketing/HubSpotTracker';

interface HubSpotConfig {
  portalId: string;
  isEnabled: boolean;
  trackingEnabled: boolean;
  formsEnabled: boolean;
  leadFormId: string;
  contactFormId: string;
}

export const HubSpotIntegration = () => {
  const [config, setConfig] = useState<HubSpotConfig>({
    portalId: '',
    isEnabled: false,
    trackingEnabled: true,
    formsEnabled: true,
    leadFormId: '',
    contactFormId: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'disconnected' | 'connected' | 'testing'>('disconnected');
  const { toast } = useToast();

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = () => {
    const savedConfig = localStorage.getItem('hubspot_config');
    if (savedConfig) {
      const parsed = JSON.parse(savedConfig);
      setConfig(parsed);
      setConnectionStatus(parsed.isEnabled ? 'connected' : 'disconnected');
    }
  };

  const saveConfig = async () => {
    setIsLoading(true);
    try {
      localStorage.setItem('hubspot_config', JSON.stringify(config));
      
      if (config.isEnabled && config.portalId) {
        setConnectionStatus('testing');
        
        // Test HubSpot connection by loading the tracking script
        const testScript = document.createElement('script');
        testScript.src = `//js.hs-scripts.com/${config.portalId}.js`;
        testScript.onload = () => {
          setConnectionStatus('connected');
          toast({
            title: "Success",
            description: "HubSpot integration configured successfully",
          });
        };
        testScript.onerror = () => {
          setConnectionStatus('disconnected');
          toast({
            title: "Error",
            description: "Invalid HubSpot Portal ID",
            variant: "destructive",
          });
        };
        
        document.head.appendChild(testScript);
      } else {
        setConnectionStatus('disconnected');
        toast({
          title: "Success",
          description: "HubSpot integration disabled",
        });
      }
    } catch (error) {
      console.error('Error saving config:', error);
      toast({
        title: "Error",
        description: "Failed to save configuration",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const testConnection = async () => {
    if (!config.portalId) {
      toast({
        title: "Error",
        description: "Please enter a Portal ID first",
        variant: "destructive",
      });
      return;
    }

    setConnectionStatus('testing');
    
    try {
      // Test the HubSpot API endpoint
      const response = await fetch(`https://api.hubapi.com/content/api/v2/pages?portalId=${config.portalId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.status === 401 || response.status === 403) {
        // Expected for unauthenticated requests - Portal ID is valid
        setConnectionStatus('connected');
        toast({
          title: "Success",
          description: "HubSpot Portal ID is valid",
        });
      } else if (response.status === 404) {
        setConnectionStatus('disconnected');
        toast({
          title: "Error",
          description: "Invalid HubSpot Portal ID",
          variant: "destructive",
        });
      }
    } catch (error) {
      setConnectionStatus('disconnected');
      toast({
        title: "Error",
        description: "Unable to connect to HubSpot",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>HubSpot Integration</CardTitle>
              <CardDescription>
                Connect SafeOrStolen.com to HubSpot for automated marketing and lead management
              </CardDescription>
            </div>
            <Badge 
              variant={connectionStatus === 'connected' ? 'default' : 'secondary'}
              className="flex items-center gap-1"
            >
              {connectionStatus === 'connected' && <Check className="w-3 h-3" />}
              {connectionStatus === 'disconnected' && <X className="w-3 h-3" />}
              {connectionStatus === 'testing' && <Settings className="w-3 h-3 animate-spin" />}
              {connectionStatus.charAt(0).toUpperCase() + connectionStatus.slice(1)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Configuration */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Basic Configuration</h3>
            
            <div className="space-y-2">
              <Label htmlFor="portalId">HubSpot Portal ID</Label>
              <Input
                id="portalId"
                placeholder="e.g., 12345678"
                value={config.portalId}
                onChange={(e) => setConfig(prev => ({ ...prev, portalId: e.target.value }))}
              />
              <p className="text-sm text-muted-foreground">
                Find your Portal ID in HubSpot Settings → Account Setup → Account Defaults
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="enabled"
                checked={config.isEnabled}
                onCheckedChange={(checked) => setConfig(prev => ({ ...prev, isEnabled: checked }))}
              />
              <Label htmlFor="enabled">Enable HubSpot Integration</Label>
            </div>
          </div>

          {/* Features Configuration */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Features</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="tracking"
                  checked={config.trackingEnabled}
                  onCheckedChange={(checked) => setConfig(prev => ({ ...prev, trackingEnabled: checked }))}
                  disabled={!config.isEnabled}
                />
                <Label htmlFor="tracking">Website Tracking</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="forms"
                  checked={config.formsEnabled}
                  onCheckedChange={(checked) => setConfig(prev => ({ ...prev, formsEnabled: checked }))}
                  disabled={!config.isEnabled}
                />
                <Label htmlFor="forms">HubSpot Forms</Label>
              </div>
            </div>
          </div>

          {/* Form Configuration */}
          {config.formsEnabled && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Form Configuration</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="leadFormId">Lead Capture Form ID</Label>
                  <Input
                    id="leadFormId"
                    placeholder="e.g., 12345678-1234-1234-1234-123456789012"
                    value={config.leadFormId}
                    onChange={(e) => setConfig(prev => ({ ...prev, leadFormId: e.target.value }))}
                    disabled={!config.isEnabled}
                  />
                </div>
                
                <div>
                  <Label htmlFor="contactFormId">Contact Form ID</Label>
                  <Input
                    id="contactFormId"
                    placeholder="e.g., 87654321-4321-4321-4321-210987654321"
                    value={config.contactFormId}
                    onChange={(e) => setConfig(prev => ({ ...prev, contactFormId: e.target.value }))}
                    disabled={!config.isEnabled}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2">
            <Button onClick={saveConfig} disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Save Configuration'}
            </Button>
            <Button variant="outline" onClick={testConnection} disabled={!config.portalId}>
              Test Connection
            </Button>
            <Button variant="outline" asChild>
              <a 
                href="https://app.hubspot.com/reports-dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Open HubSpot <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Live Preview */}
      {config.isEnabled && config.portalId && (
        <Card>
          <CardHeader>
            <CardTitle>Integration Preview</CardTitle>
            <CardDescription>
              Live preview of HubSpot integration components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {config.trackingEnabled && (
              <div>
                <h4 className="font-medium mb-2">Website Tracking</h4>
                <Badge variant="outline">Active - Tracking visitor behavior</Badge>
                <HubSpotTracker portalId={config.portalId} />
              </div>
            )}

            {config.formsEnabled && config.leadFormId && (
              <div>
                <h4 className="font-medium mb-2">Lead Capture Form</h4>
                <HubSpotForm
                  portalId={config.portalId}
                  formId={config.leadFormId}
                  onFormSubmit={(data) => {
                    toast({
                      title: "Form Submitted",
                      description: "Lead captured successfully in HubSpot",
                    });
                  }}
                />
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
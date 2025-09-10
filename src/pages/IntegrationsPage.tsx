import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ApiKeyManager } from '@/components/integrations/ApiKeyManager';
import { HubSpotIntegration } from '@/components/integrations/HubSpotIntegration';
import { ZapierAutomation } from '@/components/integrations/ZapierAutomation';
import { Badge } from '@/components/ui/badge';
import { Key, Zap, Target, Globe, Shield, BarChart } from 'lucide-react';

const IntegrationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Integrations & API</h1>
              <p className="text-muted-foreground mt-2">
                Connect SafeOrStolen.com with your existing tools and automate workflows
              </p>
            </div>
            <Badge variant="outline" className="text-sm">
              <Shield className="w-3 h-3 mr-1" />
              Enterprise Ready
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="api" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="api" className="flex items-center gap-2">
              <Key className="w-4 h-4" />
              API Keys
            </TabsTrigger>
            <TabsTrigger value="zapier" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Zapier
            </TabsTrigger>
            <TabsTrigger value="hubspot" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              HubSpot
            </TabsTrigger>
          </TabsList>

          <TabsContent value="api" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    API Endpoint
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">RESTful API</p>
                  <p className="text-muted-foreground text-sm">
                    Verify items via HTTP requests
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <BarChart className="w-4 h-4" />
                    Usage Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">Real-time</p>
                  <p className="text-muted-foreground text-sm">
                    Monitor API usage and limits
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">Enterprise</p>
                  <p className="text-muted-foreground text-sm">
                    Secure API key authentication
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <ApiKeyManager />
          </TabsContent>

          <TabsContent value="zapier" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Lead Capture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">Auto-sync leads</p>
                  <p className="text-muted-foreground text-sm">
                    Every verification becomes a lead
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Email Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">Nurture campaigns</p>
                  <p className="text-muted-foreground text-sm">
                    Automated follow-up sequences
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">CRM Sync</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">Customer data</p>
                  <p className="text-muted-foreground text-sm">
                    Sync to any CRM system
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">Real-time alerts</p>
                  <p className="text-muted-foreground text-sm">
                    Slack, SMS, email notifications
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <ZapierAutomation />
          </TabsContent>

          <TabsContent value="hubspot" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">AI Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">Automated CMO</p>
                  <p className="text-muted-foreground text-sm">
                    HubSpot AI manages your marketing
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Lead Scoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">Smart prioritization</p>
                  <p className="text-muted-foreground text-sm">
                    AI-powered lead qualification
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Revenue Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">ROI tracking</p>
                  <p className="text-muted-foreground text-sm">
                    Complete attribution analysis
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <HubSpotIntegration />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IntegrationsPage;
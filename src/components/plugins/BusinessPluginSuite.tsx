import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plug, 
  Code, 
  Download, 
  Building, 
  Smartphone,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const BusinessPluginSuite = () => {
  const [selectedPlugin, setSelectedPlugin] = useState<string | null>(null);

  const plugins = [
    {
      id: 'pos-integration',
      name: 'POS System Plugin',
      description: 'Seamless integration with point-of-sale systems for real-time verification',
      category: 'Retail',
      platforms: ['Windows', 'macOS', 'Linux'],
      features: ['Real-time API calls', 'Batch processing', 'Receipt integration', 'Compliance reporting'],
      downloadUrl: '/plugins/safeorstolen-pos-plugin.zip',
      documentation: '/docs/pos-integration'
    },
    {
      id: 'pawn-shop',
      name: 'Pawn Shop Suite',
      description: 'Complete verification workflow for pawn shop operations and compliance',
      category: 'Pawn Shops',
      platforms: ['Web', 'Mobile', 'Desktop'],
      features: ['Compliance automation', 'Bulk verification', 'Regulatory reporting', 'Customer tracking'],
      downloadUrl: '/plugins/safeorstolen-pawn-suite.zip',
      documentation: '/docs/pawn-shop-integration'
    },
    {
      id: 'auction-house',
      name: 'Auction House Pro',
      description: 'Enterprise-grade verification for high-value auctions and consignments',
      category: 'Auction Houses',
      platforms: ['Web', 'Mobile'],
      features: ['Provenance tracking', 'High-value item alerts', 'Insurance integration', 'Catalog verification'],
      downloadUrl: '/plugins/safeorstolen-auction-pro.zip',
      documentation: '/docs/auction-integration'
    },
    {
      id: 'law-enforcement',
      name: 'Law Enforcement Portal',
      description: 'Specialized tools for law enforcement agencies and investigations',
      category: 'Law Enforcement',
      platforms: ['Secure Web', 'Mobile'],
      features: ['Case management', 'Evidence tracking', 'Multi-agency coordination', 'Secure reporting'],
      downloadUrl: '/plugins/safeorstolen-leo.zip',
      documentation: '/docs/law-enforcement'
    },
    {
      id: 'marketplace',
      name: 'Marketplace Widget',
      description: 'Embeddable verification widget for online marketplaces',
      category: 'E-commerce',
      platforms: ['Web', 'JavaScript', 'React', 'Vue'],
      features: ['Embeddable widget', 'API integration', 'Custom branding', 'Mobile responsive'],
      downloadUrl: '/plugins/safeorstolen-marketplace-widget.js',
      documentation: '/docs/marketplace-widget'
    },
    {
      id: 'mobile-sdk',
      name: 'Mobile SDK',
      description: 'Native mobile integration for iOS and Android applications',
      category: 'Mobile Development',
      platforms: ['iOS', 'Android', 'React Native', 'Flutter'],
      features: ['Native performance', 'Offline capability', 'Camera integration', 'QR scanning'],
      downloadUrl: '/plugins/safeorstolen-mobile-sdk.zip',
      documentation: '/docs/mobile-sdk'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="border-sos-orange/20 bg-gradient-to-r from-sos-orange/5 to-transparent">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Plug className="h-8 w-8 text-sos-orange" />
            <div>
              <h2 className="text-3xl font-bold">Business Plugin Ecosystem</h2>
              <p className="text-muted-foreground font-normal">
                First-to-market plugin architecture for seamless business integration
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <Building className="h-8 w-8 text-sos-orange mx-auto mb-2" />
              <p className="font-semibold">Enterprise Ready</p>
              <p className="text-sm text-muted-foreground">Scalable solutions</p>
            </div>
            <div className="text-center">
              <Code className="h-8 w-8 text-sos-lime mx-auto mb-2" />
              <p className="font-semibold">Developer Friendly</p>
              <p className="text-sm text-muted-foreground">RESTful APIs</p>
            </div>
            <div className="text-center">
              <Smartphone className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <p className="font-semibold">Mobile Native</p>
              <p className="text-sm text-muted-foreground">iOS & Android</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="font-semibold">Secure by Design</p>
              <p className="text-sm text-muted-foreground">Enterprise security</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plugin Tabs */}
      <Tabs defaultValue="retail" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="retail">Retail & POS</TabsTrigger>
          <TabsTrigger value="enforcement">Law Enforcement</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplaces</TabsTrigger>
          <TabsTrigger value="development">Developers</TabsTrigger>
        </TabsList>

        <TabsContent value="retail" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plugins.filter(p => ['Retail', 'Pawn Shops', 'Auction Houses'].includes(p.category)).map(plugin => (
              <Card key={plugin.id} className="border-sos-orange/20 hover:border-sos-orange/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{plugin.name}</span>
                    <Badge variant="outline">{plugin.category}</Badge>
                  </CardTitle>
                  <p className="text-muted-foreground">{plugin.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {plugin.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-sos-lime" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-sos-orange hover:bg-sos-orange/90">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <Code className="mr-2 h-4 w-4" />
                        Docs
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="enforcement" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plugins.filter(p => p.category === 'Law Enforcement').map(plugin => (
              <Card key={plugin.id} className="border-red-500/20 hover:border-red-500/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{plugin.name}</span>
                    <Badge variant="outline" className="border-red-500/30 text-red-500">
                      {plugin.category}
                    </Badge>
                  </CardTitle>
                  <p className="text-muted-foreground">{plugin.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2">Specialized Features:</h5>
                      <ul className="space-y-1">
                        {plugin.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Shield className="h-4 w-4 text-red-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-red-500 hover:bg-red-500/90">
                        <Download className="mr-2 h-4 w-4" />
                        Request Access
                      </Button>
                      <Button size="sm" variant="outline">
                        <Shield className="mr-2 h-4 w-4" />
                        Security Info
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="marketplace" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plugins.filter(p => p.category === 'E-commerce').map(plugin => (
              <Card key={plugin.id} className="border-sos-lime/20 hover:border-sos-lime/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{plugin.name}</span>
                    <Badge variant="outline" className="border-sos-lime/30 text-sos-lime">
                      {plugin.category}
                    </Badge>
                  </CardTitle>
                  <p className="text-muted-foreground">{plugin.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2">Integration Options:</h5>
                      <ul className="space-y-1">
                        {plugin.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Globe className="h-4 w-4 text-sos-lime" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-sos-lime text-sos-dark hover:bg-sos-lime/90">
                        <Download className="mr-2 h-4 w-4" />
                        Get Widget
                      </Button>
                      <Button size="sm" variant="outline">
                        <Code className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="development" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plugins.filter(p => p.category === 'Mobile Development').map(plugin => (
              <Card key={plugin.id} className="border-blue-500/20 hover:border-blue-500/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{plugin.name}</span>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-500">
                      {plugin.category}
                    </Badge>
                  </CardTitle>
                  <p className="text-muted-foreground">{plugin.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2">Developer Tools:</h5>
                      <ul className="space-y-1">
                        {plugin.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Smartphone className="h-4 w-4 text-blue-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-blue-500 hover:bg-blue-500/90">
                        <Download className="mr-2 h-4 w-4" />
                        Download SDK
                      </Button>
                      <Button size="sm" variant="outline">
                        <Code className="mr-2 h-4 w-4" />
                        API Docs
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* CTA Section */}
      <Card className="border-sos-orange/20 bg-gradient-to-r from-sos-orange/5 to-sos-lime/5">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Custom Enterprise Solutions</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Need a custom integration? Our team builds bespoke solutions for enterprise clients with specific requirements.
          </p>
          <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
            Contact Enterprise Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
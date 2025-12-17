import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Zap, 
  Shield, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Globe,
  Clock
} from 'lucide-react';

export const IntegrationShowcase: React.FC = () => {
  const integrationFeatures = [
    {
      icon: Code,
      title: "RESTful API",
      description: "Easy-to-integrate API with comprehensive documentation and SDKs for major platforms",
      highlight: "99.9% Uptime"
    },
    {
      icon: Zap,
      title: "Real-time Webhooks",
      description: "Get instant notifications when items are reported stolen or verification status changes",
      highlight: "Sub-second response"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption, SOC 2 compliance, and enterprise-grade data protection",
      highlight: "SOC 2 Certified"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into verification patterns, fraud prevention, and ROI metrics",
      highlight: "Real-time insights"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Platforms",
      description: "Integrate pre-purchase verification to protect buyers and reduce chargebacks",
      icon: "🛒"
    },
    {
      title: "Marketplace Apps",
      description: "Add trust layers to peer-to-peer transactions with automated verification",
      icon: "📱"
    },
    {
      title: "Resale Stores",
      description: "Verify inventory authenticity and avoid legal issues from stolen goods",
      icon: "🏪"
    },
    {
      title: "Insurance Companies",
      description: "Reduce fraudulent claims and improve investigation capabilities",
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sos-dark to-sos">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-sos-lime text-sos-lime">
            Developer-First Platform
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Powerful API Integration
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Integrate stolen goods verification directly into your platform with our enterprise-grade API. 
            Built for scale, designed for developers.
          </p>
        </div>

        {/* API Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {integrationFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-sos-orange/50 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-sos-orange/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-sos-orange" />
                </div>
                <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                <Badge variant="outline" className="border-sos-lime text-sos-lime text-xs">
                  {feature.highlight}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Code Example */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Simple Integration, Powerful Results
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-sos-lime" />
                <span className="text-gray-300">5-minute setup with comprehensive docs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-sos-lime" />
                <span className="text-gray-300">SDKs for JavaScript, Python, PHP, and more</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-sos-lime" />
                <span className="text-gray-300">24/7 developer support and documentation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-sos-lime" />
                <span className="text-gray-300">Sandbox environment for testing</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/for-businesses">
                <Button className="bg-sos-orange hover:bg-sos-orange/90">
                  Get API Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Documentation
              </Button>
            </div>
          </div>
          
          <Card className="bg-sos-dark/50 border-sos-orange/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-sos-orange" />
                <span className="text-white font-medium">API Example</span>
              </div>
            </CardHeader>
            <CardContent>
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Verify an item in seconds
const verification = await fetch('/api/verify', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    serialNumber: 'ABC123',
    itemType: 'electronics'
  })
});

const result = await verification.json();
// { status: 'clean', confidence: 0.987 }`}
              </pre>
            </CardContent>
          </Card>
        </div>

        {/* Use Cases */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">
            Trusted by Leading Platforms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">{useCase.icon}</div>
                  <h4 className="text-white font-semibold mb-2">{useCase.title}</h4>
                  <p className="text-gray-400 text-sm">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-sos-orange mb-2">99.9%</div>
            <div className="text-gray-300">API Uptime</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-sos-lime mb-2">&lt;300ms</div>
            <div className="text-gray-300">Average Response Time</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-sos-orange mb-2">1M+</div>
            <div className="text-gray-300">API Calls Daily</div>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, Bell, Code, Upload, Shield, Download, 
  TrendingUp, Users, Award, Zap, CheckCircle 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { StructuredData } from '@/components/seo/StructuredData';

export default function PremiumFeaturesPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: FileText,
      title: 'PDF Verification Certificates',
      description: 'Generate professional, legally-valid verification certificates for every check',
      tier: 'Personal+',
      benefits: [
        'Downloadable PDF reports',
        'Share via email or social media',
        'Include in item listings for buyer confidence',
        'Court-admissible documentation'
      ]
    },
    {
      icon: Bell,
      title: 'Real-Time Alert Monitoring',
      description: 'Get instant notifications if your items are reported stolen after purchase',
      tier: 'Personal+',
      benefits: [
        'Monitor up to 10 items (Personal) or unlimited (Pro)',
        'Email + SMS alerts',
        'Daily automated scans',
        'Immediate theft notifications'
      ]
    },
    {
      icon: Upload,
      title: 'Bulk Verification Tools',
      description: 'Verify hundreds of items at once with CSV upload',
      tier: 'Professional',
      benefits: [
        'Upload CSV with up to 100 items',
        'Parallel processing (all items verified simultaneously)',
        'Export results to Excel/CSV',
        'Perfect for inventory management'
      ]
    },
    {
      icon: Code,
      title: 'API Access',
      description: 'Integrate SafeOrStolen verification into your platform or software',
      tier: 'Professional',
      benefits: [
        '10,000 API calls/month included',
        'RESTful API with detailed documentation',
        'Webhook support for async processing',
        'Sub-second response times'
      ]
    },
    {
      icon: Shield,
      title: 'White-Label Certificates',
      description: 'Brand verification certificates with your business logo and colors',
      tier: 'Professional',
      benefits: [
        'Custom branding on all reports',
        'Your business logo on certificates',
        'Remove SafeOrStolen branding',
        'Professional appearance for clients'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Track verification trends, risk scores, and business insights',
      tier: 'Professional+',
      benefits: [
        'Verification history dashboard',
        'Risk trend analysis',
        'Fraud prevention metrics',
        'Export reports for compliance'
      ]
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Add team members with role-based access control',
      tier: 'Professional',
      benefits: [
        'Up to 5 team members (Pro) or unlimited (Enterprise)',
        'Role-based permissions',
        'Shared verification history',
        'Centralized billing'
      ]
    },
    {
      icon: Award,
      title: 'Priority Support',
      description: 'Get help when you need it with dedicated support channels',
      tier: 'Personal+',
      benefits: [
        'Priority email support (Personal)',
        'Phone support (Professional)',
        'Dedicated account manager (Enterprise)',
        '24/7 emergency line (Enterprise)'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Premium Features - Advanced Verification Tools | SafeOrStolen</title>
        <meta 
          name="description" 
          content="Unlock premium features: PDF certificates, alert monitoring, bulk verification, API access, white-label branding. Professional tools for businesses and power users." 
        />
        <meta 
          name="keywords" 
          content="verification certificates, stolen item alerts, bulk verification, verification API, white-label verification, business verification tools" 
        />
      </Helmet>

      <StructuredData
        type="Service"
        data={{
          name: 'Premium Verification Services',
          description: 'Advanced stolen item verification tools for businesses and professionals',
          offers: features.map(f => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: f.title,
              description: f.description
            }
          }))
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premium Verification Features
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Professional tools to protect your business and scale your operations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                onClick={() => navigate('/subscriptions')}
                className="bg-gradient-to-r from-sos-lime to-sos-orange"
              >
                View Plans & Pricing
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/verify')}
              >
                Try Free Verification
              </Button>
            </div>
          </header>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <span className="text-xs bg-muted px-2 py-1 rounded whitespace-nowrap">
                        {feature.tier}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-2">{feature.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Comparison Section */}
          <Card className="p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Compare Plans
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Feature</th>
                    <th className="p-4">Free</th>
                    <th className="p-4">Personal</th>
                    <th className="p-4 bg-primary/5">Professional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Monthly Verifications</td>
                    <td className="p-4 text-center">2</td>
                    <td className="p-4 text-center">50</td>
                    <td className="p-4 text-center bg-primary/5">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">PDF Certificates</td>
                    <td className="p-4 text-center">✗</td>
                    <td className="p-4 text-center">✓</td>
                    <td className="p-4 text-center bg-primary/5">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Alert Monitoring</td>
                    <td className="p-4 text-center">✗</td>
                    <td className="p-4 text-center">10 items</td>
                    <td className="p-4 text-center bg-primary/5">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Bulk Verification</td>
                    <td className="p-4 text-center">✗</td>
                    <td className="p-4 text-center">✗</td>
                    <td className="p-4 text-center bg-primary/5">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">API Access</td>
                    <td className="p-4 text-center">✗</td>
                    <td className="p-4 text-center">✗</td>
                    <td className="p-4 text-center bg-primary/5">10k calls/mo</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Price</td>
                    <td className="p-4 text-center">$0</td>
                    <td className="p-4 text-center">$9.99/mo</td>
                    <td className="p-4 text-center bg-primary/5">$29.99/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Upgrade?
            </h2>
            <p className="text-muted-foreground mb-6">
              7-day free trial • Cancel anytime • No contracts
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/subscriptions')}
              className="bg-gradient-to-r from-sos-lime to-sos-orange"
            >
              <Zap className="h-5 w-5 mr-2" />
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Rocket, CheckCircle, Clock, Calendar, Smartphone, Globe, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProductRoadmapPage: React.FC = () => {
  const roadmapItems = [
    {
      status: 'live',
      icon: Globe,
      title: 'Web Platform Launch',
      date: 'October 2024',
      description: 'Full-featured web application with IMEI, VIN, and serial number verification',
      features: [
        'Real-time verification searches',
        'User accounts and search history',
        'Mobile-responsive design',
        'Multi-source data aggregation'
      ]
    },
    {
      status: 'in-progress',
      icon: Shield,
      title: 'Law Enforcement Partnerships',
      date: 'Q1 2025',
      description: 'Direct API integration with law enforcement databases in Arizona',
      features: [
        'Partnership with Peoria PD',
        'Direct access to NCIC data',
        'Verified badge for official data',
        'Expanded state coverage'
      ]
    },
    {
      status: 'in-progress',
      icon: Smartphone,
      title: 'Mobile Applications',
      date: 'Q2 2025',
      description: 'Native iOS and Android apps with enhanced features',
      features: [
        'Barcode scanning',
        'Camera-based VIN recognition',
        'Offline search history',
        'Push notifications for alerts'
      ]
    },
    {
      status: 'planned',
      icon: Zap,
      title: 'Marketplace Integration',
      date: 'Q3 2025',
      description: 'Direct integration with major online marketplaces',
      features: [
        'eBay verification plugin',
        'Facebook Marketplace integration',
        'Craigslist safety badge',
        'One-click verification'
      ]
    },
    {
      status: 'planned',
      icon: Globe,
      title: 'International Expansion',
      date: 'Q4 2025',
      description: 'Global database coverage and partnerships',
      features: [
        'European IMEI databases',
        'International VIN systems',
        'Multi-language support',
        'Regional compliance'
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Live</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">In Progress</Badge>;
      case 'planned':
        return <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">Planned</Badge>;
      default:
        return null;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'live':
        return <CheckCircle className="h-6 w-6 text-green-600" />;
      case 'in-progress':
        return <Clock className="h-6 w-6 text-blue-600" />;
      case 'planned':
        return <Calendar className="h-6 w-6 text-gray-600" />;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Platform Roadmap - Safe or Stolen | Development Timeline & Features</title>
        <meta name="description" content="View our platform development roadmap, upcoming features, and launch timeline for SafeOrStolen.com service and mobile applications." />
        {/* Canonical tag handled by PageSEO component to prevent duplicates */}
      </Helmet>

      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <Rocket className="h-16 w-16 mx-auto mb-4 text-white" />
            <h1 className="text-5xl font-bold text-white mb-6">
              Platform Roadmap
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our transparent development timeline and upcoming features
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4 max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">What's Available & What's Coming</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in complete transparency about our platform development. Here's exactly 
              what's live, what we're building, and what's on our roadmap.
            </p>
          </div>

          <div className="space-y-6">
            {roadmapItems.map((item, index) => (
              <Card key={index} className={item.status === 'live' ? 'border-green-500 border-2' : ''}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="bg-muted p-3 rounded-lg">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          {getStatusBadge(item.status)}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {item.date}
                        </div>
                      </div>
                    </div>
                    {getStatusIcon(item.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Key Features:</p>
                    <ul className="space-y-1">
                      {item.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          {item.status === 'live' ? (
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          ) : (
                            <div className="h-4 w-4 flex-shrink-0 rounded-full border-2 border-muted" />
                          )}
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-2 text-blue-900 dark:text-blue-100">
              Stay Updated
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
              Want to know when new features launch? Follow our progress and get notified about major updates.
            </p>
            <Badge className="bg-blue-600 text-white">
              Subscribe to our newsletter for updates
            </Badge>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductRoadmapPage;

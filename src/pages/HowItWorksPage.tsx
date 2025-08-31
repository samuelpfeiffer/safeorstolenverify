import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';
import { createBreadcrumbSchema, createFAQSchema } from '@/utils/seo/structuredData';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Search, CheckCircle, Database, Brain, Zap, Lock, Globe, TrendingUp, Cpu, Cloud, Activity } from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: "Advanced Input Processing",
      description: "Our AI-powered system validates and processes serial numbers, IMEI, VIN, and unique identifiers using pattern recognition and machine learning algorithms.",
      icon: Brain,
      color: "text-blue-500"
    },
    {
      step: 2,
      title: "Multi-Database Analysis",
      description: "Real-time distributed queries across enterprise-grade databases including law enforcement, insurance, registry, and proprietary datasets using advanced indexing and caching systems.",
      icon: Database,
      color: "text-sos-orange"
    },
    {
      step: 3,
      title: "AI-Enhanced Results",
      description: "Machine learning models analyze verification data, calculate risk scores, and provide intelligent recommendations with confidence metrics and detailed insights.",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      step: 4,
      title: "Deep Analysis Processing",
      description: "Advanced AI thinking engines perform multi-layered analysis, cross-reference multiple data sources, and generate comprehensive verification reports.",
      icon: Cpu,
      color: "text-purple-500"
    }
  ];

  const technologies = [
    {
      title: "Advanced AI & Machine Learning",
      description: "Proprietary deep learning algorithms analyze verification patterns, detect anomalies, and continuously improve accuracy through adaptive learning systems.",
      icon: Brain,
      features: ["Neural Network Analysis", "Pattern Recognition", "Predictive Analytics", "Adaptive Learning"]
    },
    {
      title: "Enterprise Database Architecture",
      description: "Distributed database systems with real-time synchronization, advanced indexing, and fault-tolerant infrastructure ensuring 99.9% uptime.",
      icon: Database,
      features: ["Real-time Synchronization", "Advanced Indexing", "Distributed Architecture", "High Availability"]
    },
    {
      title: "Cloud Security Infrastructure",
      description: "Military-grade encryption, secure API protocols, and compliance with international data protection standards including SOC 2 and ISO 27001.",
      icon: Lock,
      features: ["End-to-End Encryption", "SOC 2 Compliance", "Multi-layer Security", "Data Protection"]
    },
    {
      title: "Global CDN & Performance",
      description: "Worldwide content delivery network with edge computing, intelligent caching, and sub-second response times across all geographic regions.",
      icon: Globe,
      features: ["Edge Computing", "Intelligent Caching", "Global Coverage", "Sub-second Response"]
    }
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'How It Works', url: '/how-it-works' }
  ]);
  const faqSchema = createFAQSchema();

  return (
    <>
      <EnhancedSEOHead 
        title="Advanced AI Verification Technology - How SafeOrStolen Works | Enterprise-Grade Security"
        description="Discover SafeOrStolen's cutting-edge AI verification technology. Advanced machine learning, enterprise databases, military-grade security, and global infrastructure power our IMEI, VIN & serial number verification system."
        keywords="AI verification technology, machine learning verification, enterprise database systems, advanced security verification, neural network analysis, real-time verification API, cloud-based verification platform, distributed database architecture, military-grade encryption verification, global CDN verification system"
        canonical="/how-it-works"
        additionalSchemas={[breadcrumbSchema, faqSchema]}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sos-dark to-sos">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-6 border-sos-orange text-sos-orange">
              How It Works
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced AI Verification Technology
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powered by cutting-edge artificial intelligence, machine learning algorithms, and enterprise-grade infrastructure, SafeOrStolen delivers the world's most advanced verification system for IMEI, VIN, and serial number authentication.
            </p>
            <div className="text-lg text-gray-300 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <p>✓ AI-Powered Deep Analysis</p>
              <p>✓ Enterprise Database Architecture</p>
              <p>✓ Military-Grade Security</p>
              <p>✓ Global CDN Infrastructure</p>
              <p>✓ Real-Time ML Processing</p>
              <p>✓ 99.9% System Uptime</p>
            </div>
            <Link to="/dashboard">
              <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/80">
                Try Verification Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced 4-Stage Verification Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our sophisticated verification pipeline combines artificial intelligence, machine learning, and enterprise-grade databases to deliver unparalleled accuracy and speed in stolen item detection.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <Card key={step.step} className="relative overflow-hidden border-2 hover:border-sos-orange transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800`}>
                        <step.icon className={`h-6 w-6 ${step.color}`} />
                      </div>
                      <Badge variant="secondary" className="text-sm bg-sos-orange text-white">
                        Step {step.step}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Infrastructure Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Enterprise-Grade Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                SafeOrStolen leverages cutting-edge technology including advanced AI, distributed computing, enterprise security, and global infrastructure to deliver the world's most reliable verification platform.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {technologies.map((tech, index) => (
                <Card key={index} className="border-2 hover:border-sos-orange transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-sos-orange/10">
                        <tech.icon className="h-8 w-8 text-sos-orange" />
                      </div>
                      <CardTitle className="text-xl">{tech.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{tech.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {tech.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Comprehensive Data Sources & Analytics
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Our advanced system aggregates and analyzes data from multiple authoritative sources using sophisticated algorithms and real-time processing capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-sos-orange transition-colors">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Law Enforcement APIs</h4>
                  <p className="text-sm text-muted-foreground">Real-time integration with official police, FBI, and international crime databases</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-sos-orange transition-colors">
                <CardContent className="p-6 text-center">
                  <Database className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Enterprise Insurance Networks</h4>
                  <p className="text-sm text-muted-foreground">Advanced API connections to major insurance company theft and fraud databases</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-sos-orange transition-colors">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Global Registry Systems</h4>
                  <p className="text-sm text-muted-foreground">International vehicle, device, and property registration database integrations</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-sos-orange transition-colors">
                <CardContent className="p-6 text-center">
                  <Activity className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">AI Analytics Engine</h4>
                  <p className="text-sm text-muted-foreground">Machine learning algorithms analyze patterns and generate risk assessments</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Performance & Security Metrics */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-2 hover:border-green-500 transition-colors">
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-green-500 mb-2">99.9%</div>
                  <h4 className="font-semibold mb-2">System Uptime</h4>
                  <p className="text-sm text-muted-foreground">Enterprise-grade infrastructure with redundant systems and failover protection</p>
                </CardContent>
              </Card>
              <Card className="text-center border-2 hover:border-blue-500 transition-colors">
                <CardContent className="p-6">
                  <Cloud className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-blue-500 mb-2">&lt;200ms</div>
                  <h4 className="font-semibold mb-2">Response Time</h4>
                  <p className="text-sm text-muted-foreground">Global CDN and edge computing deliver sub-second verification results worldwide</p>
                </CardContent>
              </Card>
              <Card className="text-center border-2 hover:border-purple-500 transition-colors">
                <CardContent className="p-6">
                  <TrendingUp className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-purple-500 mb-2">95%+</div>
                  <h4 className="font-semibold mb-2">AI Accuracy</h4>
                  <p className="text-sm text-muted-foreground">Advanced machine learning models continuously improve verification accuracy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Advanced Technology FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Advanced Technology & Security</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-sos-orange" />
                    How does AI enhance verification accuracy?
                  </h3>
                  <p className="text-muted-foreground">Our proprietary neural networks analyze verification patterns, detect anomalies, and cross-reference multiple data sources using advanced machine learning algorithms. The AI continuously learns from new data to improve accuracy and reduce false positives.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-sos-orange" />
                    What security measures protect user data?
                  </h3>
                  <p className="text-muted-foreground">Military-grade AES-256 encryption, zero-knowledge architecture, SOC 2 compliance, and multi-layer security protocols ensure your searches remain completely private and secure. We never store personal information or search queries.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Database className="h-5 w-5 text-sos-orange" />
                    How does the distributed database system work?
                  </h3>
                  <p className="text-muted-foreground">Our enterprise-grade distributed architecture uses advanced indexing, real-time synchronization, and intelligent caching across multiple data centers. This ensures 99.9% uptime and sub-200ms response times globally.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-sos-orange" />
                    What makes the deep analysis processing unique?
                  </h3>
                  <p className="text-muted-foreground">Our advanced thinking engines perform multi-layered analysis, utilizing parallel processing, pattern recognition, and predictive analytics to generate comprehensive verification reports with confidence scores and risk assessments.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-sos-orange" />
                    How does global infrastructure ensure reliability?
                  </h3>
                  <p className="text-muted-foreground">Our worldwide CDN with edge computing nodes, intelligent load balancing, and redundant systems across multiple geographic regions ensures optimal performance and reliability regardless of user location.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Activity className="h-5 w-5 text-sos-orange" />
                    What analytics and monitoring systems are in place?
                  </h3>
                  <p className="text-muted-foreground">Real-time performance monitoring, automated anomaly detection, comprehensive logging systems, and advanced analytics dashboards ensure optimal system performance and continuous improvement of verification accuracy.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-sos-orange" />
                    How does cloud architecture support scalability?
                  </h3>
                  <p className="text-muted-foreground">Auto-scaling cloud infrastructure with containerized microservices, API rate limiting, and elastic load balancing handles millions of verification requests while maintaining consistent performance and reliability.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-sos-orange" />
                    What compliance standards does the platform meet?
                  </h3>
                  <p className="text-muted-foreground">Full compliance with SOC 2, ISO 27001, GDPR, CCPA, and international data protection regulations. Regular security audits and penetration testing ensure the highest security standards are maintained.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-sos-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience Enterprise-Grade Verification Technology
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses and individuals who rely on SafeOrStolen's advanced AI-powered verification platform. Experience the most sophisticated stolen item detection technology available today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/80">
                  <Shield className="mr-2 h-5 w-5" />
                  Start Free Verification
                </Button>
              </Link>
              <Link to="/subscriptions">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sos-dark">
                  View Subscription Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowItWorksPage;
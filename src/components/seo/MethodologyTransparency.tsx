import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Database, Shield, CheckCircle, AlertTriangle, Users } from 'lucide-react';
import { useNavigate } from '@/lib/router-compat';

const verificationSteps = [
 {
 step: 1,
 title: "Input Validation",
 description: "Serial number, IMEI, or VIN is validated and formatted",
 icon: Search,
 details: "Advanced algorithms clean and verify input format"
 },
 {
 step: 2,
 title: "Multi-Database Query",
 description: "Simultaneous search across verified partner databases",
 icon: Database,
 details: "Stolen property reports from all 50 states, IMEI.info, stolen bicycle databases, Stolen Firearms Databases, and more"
 },
 {
 step: 3,
 title: "Cross-Reference Analysis",
 description: "Results compared and validated across sources",
 icon: Shield,
 details: "AI-powered analysis prevents false positives"
 },
 {
 step: 4,
 title: "Confidence Scoring",
 description: "Risk assessment based on data quality and sources",
 icon: CheckCircle,
 details: "Transparent confidence levels with source attribution"
 }
];

const transparencyMetrics = [
 {
 metric: "24/7",
 label: "Always Available",
 description: "Continuous access to verification sources"
 },
 {
 metric: "15+",
 label: "Data Sources",
 description: "Official registries and community theft registries"
 },
 {
 metric: "<2 sec",
 label: "Response Time",
 description: "Real-time verification results"
 },
 {
 metric: "250k+",
 label: "Items Checked",
 description: "Trusted by consumers and businesses"
 }
];

export const MethodologyTransparency: React.FC = () => {
 const navigate = useNavigate();

 return (
 <section className="py-16 bg-muted/30" id="methodology">
 <div className="container mx-auto px-4">
 {/* Header */}
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-bold mb-4">
 Transparent Verification Methodology
 </h2>
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
 Unlike services with unclear data sourcing, we provide complete transparency 
 about our verification process, data sources, and methodology. Every check 
 is backed by official databases and verifiable sources.
 </p>
 </div>

 {/* Verification Process */}
 <div className="mb-16">
 <h3 className="text-2xl font-bold text-center mb-8">How Our Verification Works</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {verificationSteps.map((step, index) => (
 <Card key={index} className="relative border-primary/20 hover:border-primary/40 transition-colors">
 <CardHeader className="text-center pb-2">
 <div className="mx-auto mb-2 relative">
 <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
 <step.icon className="h-6 w-6 text-primary" />
 </div>
 <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs bg-primary">
 {step.step}
 </Badge>
 </div>
 <CardTitle className="text-lg">{step.title}</CardTitle>
 </CardHeader>
 <CardContent className="text-center pt-0">
 <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
 <p className="text-xs text-muted-foreground italic">{step.details}</p>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>

 {/* Transparency Metrics */}
 <div className="mb-12">
 <h3 className="text-2xl font-bold text-center mb-8">Verification Performance Metrics</h3>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
 {transparencyMetrics.map((item, index) => (
 <Card key={index} className="text-center border-primary/10">
 <CardContent className="p-6">
 <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
 <div className="font-semibold mb-1">{item.label}</div>
 <div className="text-xs text-muted-foreground">{item.description}</div>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>

 {/* Addressing Concerns */}
 <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
 <CardContent className="p-8">
 <div className="flex items-start gap-4 mb-6">
 <AlertTriangle className="h-8 w-8 text-orange-600 mt-1 flex-shrink-0" />
 <div>
 <h3 className="text-xl font-bold mb-2">Addressing Reliability Concerns</h3>
 <p className="text-muted-foreground mb-4">
 We understand concerns about newer verification services. Here's what sets us apart:
 </p>
 </div>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
 <div>
 <h4 className="font-semibold mb-2 flex items-center">
 <Database className="h-4 w-4 mr-2 text-primary" />
 Clear Data Sourcing
 </h4>
 <p className="text-sm text-muted-foreground">
 Every verification clearly shows which official databases were checked, 
 including stolen property reports from all 50 states network access, verified registries, and law enforcement partnerships.
 </p>
 </div>
 <div>
 <h4 className="font-semibold mb-2 flex items-center">
 <Shield className="h-4 w-4 mr-2 text-primary" />
 Verifiable Partnerships
 </h4>
 <p className="text-sm text-muted-foreground">
 Our partnerships with IMEI.info, stolen bicycle databases, Stolen Firearms Databases, and others are publicly 
 verifiable and documented with direct API integrations.
 </p>
 </div>
 <div>
 <h4 className="font-semibold mb-2 flex items-center">
 <Users className="h-4 w-4 mr-2 text-primary" />
 Growing Track Record
 </h4>
 <p className="text-sm text-muted-foreground">
 With 250k+ items verified and growing enterprise partnerships, 
 we're building a proven track record of accuracy and reliability.
 </p>
 </div>
 <div>
 <h4 className="font-semibold mb-2 flex items-center">
 <CheckCircle className="h-4 w-4 mr-2 text-primary" />
 Transparent Results
 </h4>
 <p className="text-sm text-muted-foreground">
 Every verification result shows confidence scores, sources checked, 
 and methodology used - complete transparency in our process.
 </p>
 </div>
 </div>

 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button 
 onClick={() => navigate('/about')}
 className="bg-primary hover:bg-primary/90"
 >
 Learn About Our Data Sources
 </Button>
 <Button 
 variant="outline"
 onClick={() => navigate('/how-it-works')}
 className="border-primary text-primary hover:bg-primary/5"
 >
 See How It Works
 </Button>
 </div>
 </CardContent>
 </Card>
 </div>
 </section>
 );
};
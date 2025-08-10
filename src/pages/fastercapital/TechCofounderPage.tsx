import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Smartphone, 
  Users, 
  Rocket,
  ArrowRight,
  Zap,
  Brain,
  Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TechCofounderPage = () => {
  const navigate = useNavigate();

  const technologies = [
    "React & Next.js",
    "Node.js & Express",
    "Python & Django", 
    "Mobile Development",
    "Cloud Infrastructure",
    "AI/ML Integration",
    "Blockchain",
    "DevOps & CI/CD"
  ];

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Complete web and mobile application development"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Machine learning and AI-powered features"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native iOS and Android application development"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance standards"
    }
  ];

  return (
    <div className="min-h-screen bg-sos text-white pt-20">
      <div className="container mx-auto container-padding py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-sos-lime/10 text-sos-lime border-sos-lime/20 inline-flex items-center gap-2">
            <img src="/images/partners/fastercapital-logo.png" alt="FasterCapital logo" className="h-4 w-auto" />
            <span className="fc-gradient-text font-semibold">FasterCapital</span>
            <span>Program</span>
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your <span className="text-gradient">Tech Cofounder</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get technical cofounders and development teams to bring your startup idea to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-sos-lime/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-sos-lime/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-sos-lime" />
                  </div>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-sos-orange" />
                What You Get
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-6">
                FasterCapital provides experienced technical cofounders who become equity partners 
                in your startup and help build your technology from the ground up.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-sos-orange/10 rounded-lg border border-sos-orange/20">
                  <h4 className="font-semibold text-sos-orange mb-2">Technical Leadership</h4>
                  <p className="text-sm text-muted-foreground">
                    Experienced CTOs and technical leads who understand startup challenges
                  </p>
                </div>
                
                <div className="p-4 bg-sos-lime/10 rounded-lg border border-sos-lime/20">
                  <h4 className="font-semibold text-sos-lime mb-2">Development Team</h4>
                  <p className="text-sm text-muted-foreground">
                    Full development team including designers, developers, and QA engineers
                  </p>
                </div>
                
                <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <h4 className="font-semibold text-blue-400 mb-2">Equity Partnership</h4>
                  <p className="text-sm text-muted-foreground">
                    True cofounders who share in the success and growth of your startup
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-sos-lime/10 to-sos-orange/10 border-sos-lime/20">
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Our technical cofounders are experts in modern technologies:
              </p>
              
              <div className="grid grid-cols-2 gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="justify-center py-2">
                    <Zap className="h-3 w-3 mr-1" />
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="p-4 bg-card rounded-lg">
                <h4 className="font-semibold mb-2">Requirements</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Clear business idea and market opportunity</li>
                  <li>• Committed to building a technology startup</li>
                  <li>• Open to technical cofounder partnership</li>
                  <li>• Scalable business model</li>
                </ul>
              </div>
              
              <Button className="w-full bg-sos-lime hover:bg-sos-lime/90 text-black">
                <ArrowRight className="h-4 w-4 mr-2" />
                Find Your Tech Cofounder
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="border-muted text-muted-foreground hover:bg-muted/10"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TechCofounderPage;
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Car, 
  Bike, 
  Shield, 
  Brain, 
  Mic, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const tools = [
  {
    id: 'imei-check',
    title: 'IMEI Checker',
    description: 'Verify phone/tablet blacklist status using IMEI.info API',
    icon: Smartphone,
    href: '/tools/imei-check',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    id: 'vin-check',
    title: 'VIN Verification',
    description: 'Check vehicle theft history via NICB/NHTSA databases',
    icon: Car,
    href: '/tools/vin-check',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10'
  },
  {
    id: 'bike-check',
    title: 'Bike Serial Lookup',
    description: 'Search Bike Index stolen bicycle registry',
    icon: Bike,
    href: '/tools/bike-check',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10'
  },
  {
    id: 'firearm-check',
    title: 'Firearm Serial Check',
    description: 'Verify against HotGunz stolen firearms database',
    icon: Shield,
    href: '/tools/firearm-check',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10'
  },
  {
    id: 'ai-analyzer',
    title: 'AI Fraud Analyzer',
    description: 'AI-powered risk assessment and fraud pattern detection',
    icon: Brain,
    href: '/tools/ai-analyzer',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    id: 'voice-search',
    title: 'Voice Search',
    description: 'Hands-free verification using voice commands',
    icon: Mic,
    href: '/tools/voice-search',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10'
  },
  {
    id: 'report-stolen',
    title: 'Report Stolen Item',
    description: 'Report a stolen item to help protect other buyers',
    icon: AlertTriangle,
    href: '/tools/report-stolen',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10'
  }
];

const ToolsHubPage = () => {
  return (
    <>
      <Helmet>
        <title>Verification Tools | SafeOrStolen</title>
        <meta name="description" content="Access specialized verification tools for IMEI, VIN, bicycles, firearms, and more. Free stolen item checking tools." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Verification Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access our complete suite of specialized verification tools. Each tool connects directly to authoritative databases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tools.map((tool) => (
              <Link key={tool.id} to={tool.href}>
                <Card className="h-full hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer border-border/50 hover:border-primary/50">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${tool.bgColor} flex items-center justify-center mb-3`}>
                      <tool.icon className={`w-6 h-6 ${tool.color}`} />
                    </div>
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="p-0 h-auto text-primary">
                      Use Tool <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Need to verify an item quickly? Use our universal search.
            </p>
            <Link to="/verify">
              <Button size="lg">
                Go to Universal Verification
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolsHubPage;

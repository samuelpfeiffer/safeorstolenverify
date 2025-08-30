import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageSEO } from '@/components/seo/PageSEO';
import { 
  Shield, 
  Users, 
  Download, 
  Monitor, 
  ArrowRight, 
  Heart,
  Star,
  Quote,
  CheckCircle,
  Zap,
  Globe,
  Code,
  AlertTriangle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CommunityWatchPage = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      text: "The browser extension is brilliant! I've already helped two people on Twitter avoid scams by quickly sharing the SafeOrStolen link.",
      author: "Sarah M.",
      role: "Community Member",
      platform: "Twitter"
    },
    {
      text: "As a pawn shop owner, the social monitoring dashboard helps me stay on top of conversations about stolen goods in my area. Essential tool!",
      author: "Mike R.",
      role: "Business Owner",
      platform: "Facebook"
    },
    {
      text: "I caught someone trying to sell a 'hot' phone on Craigslist and was able to warn other buyers. This extension makes me feel like a digital neighborhood watch!",
      author: "Jennifer L.",
      role: "Marketplace Buyer",
      platform: "Craigslist"
    }
  ];

  const stats = [
    { number: "2,847", label: "Stolen Items Prevented", icon: Shield },
    { number: "850+", label: "Community Members", icon: Users },
    { number: "15K+", label: "Daily Mentions Monitored", icon: Monitor },
    { number: "95%", label: "Positive Impact Rate", icon: Star }
  ];

  return (
    <>
      <PageSEO
        title="Join the SafeOrStolen Community Watch - Fight Fraud Together"
        description="Be a force for a safer marketplace. Use our free browser extension and monitoring tools to help protect buyers and hold dishonest sellers accountable."
        keywords="community watch, browser extension, social monitoring, marketplace safety, anti-fraud, stolen goods prevention"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "SafeOrStolen Community Watch",
          "description": "Community-driven tools to fight stolen goods and marketplace fraud",
          "url": "https://safeorstolen.com/community-watch"
        }}
      />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-sos-dark via-sos to-sos-dark/80">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Shield className="h-16 w-16 text-sos-lime" />
                  <Heart className="h-8 w-8 text-sos-orange absolute -top-2 -right-2 bg-sos-dark rounded-full p-1" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Be a Force for a <span className="text-sos-lime">Safer Marketplace</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Our community is our strength. Together, we can protect buyers and hold dishonest sellers accountable. 
                Use our free tools to help spread awareness and make second-hand shopping safe for everyone.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-sos-lime text-sos-dark hover:bg-sos-lime/90 font-semibold px-8 py-4"
                  onClick={() => navigate('/social-media-monitoring')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Get Community Tools
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-sos-dark font-semibold px-8 py-4"
                  onClick={() => navigate('/dashboard')}
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Start Verifying Items
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-8 w-8 text-sos-orange" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Free Tools for Community Safety
                </h2>
                <p className="text-lg text-muted-foreground">
                  Choose the tool that fits your level of involvement in keeping marketplaces safe.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Browser Extension */}
                <Card className="border-sos-lime/20 hover:border-sos-lime/40 transition-all duration-300 hover:shadow-lg hover:shadow-sos-lime/10">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-sos-lime/10 p-3 rounded-full">
                        <Code className="h-8 w-8 text-sos-lime" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">SafeOrStolen Browser Extension</CardTitle>
                        <Badge variant="secondary" className="mt-1">Free Forever</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Get our free plugin for Chrome and Firefox. It automatically alerts you when someone 
                      is talking about stolen goods on social media and helps you quickly share a link to our verification tool.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-sos-lime mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Smart Detection</h4>
                          <p className="text-sm text-muted-foreground">Detects 95+ keywords like "stolen car", "hot goods", "marketplace scam"</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-sos-lime mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Instant Response</h4>
                          <p className="text-sm text-muted-foreground">One-click copy of helpful SafeOrStolen response template</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-sos-lime mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Platform Support</h4>
                          <p className="text-sm text-muted-foreground">Works on Twitter, Facebook, Instagram, Craigslist, and more</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-sos-lime text-sos-dark hover:bg-sos-lime/90"
                      onClick={() => navigate('/social-media-monitoring?tab=extension')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download the Extension
                    </Button>
                  </CardContent>
                </Card>

                {/* Social Monitoring Dashboard */}
                <Card className="border-sos-orange/20 hover:border-sos-orange/40 transition-all duration-300 hover:shadow-lg hover:shadow-sos-orange/10">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-sos-orange/10 p-3 rounded-full">
                        <Monitor className="h-8 w-8 text-sos-orange" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Social Media Monitoring Dashboard</CardTitle>
                        <Badge variant="outline" className="mt-1">Power Users</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      See real-time mentions and trends. For businesses and power users, this dashboard 
                      helps you stay on top of the conversation and respond strategically.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-sos-orange mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Real-Time Alerts</h4>
                          <p className="text-sm text-muted-foreground">Get notified when stolen goods are mentioned in your area</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-sos-orange mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Zapier Integration</h4>
                          <p className="text-sm text-muted-foreground">Automate responses across multiple platforms</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-sos-orange mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Team Collaboration</h4>
                          <p className="text-sm text-muted-foreground">Perfect for businesses, pawn shops, and security teams</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full border-sos-orange text-sos-orange hover:bg-sos-orange hover:text-white"
                      onClick={() => navigate('/social-media-monitoring')}
                    >
                      <Monitor className="mr-2 h-4 w-4" />
                      View the Dashboard
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Community Heroes Making a Difference
                </h2>
                <p className="text-lg text-muted-foreground">
                  Real stories from community members protecting others from stolen goods and scams.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="relative">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-sos-lime/20 mb-4" />
                      <p className="text-muted-foreground mb-4 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="bg-sos-lime/10 p-2 rounded-full">
                          <Users className="h-4 w-4 text-sos-lime" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          <Badge variant="outline" className="text-xs mt-1">{testimonial.platform}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-sos-dark to-sos">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Join the Movement?
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Every person who uses our tools makes the secondhand marketplace safer for everyone. 
                Start with our browser extension or dive deep with our monitoring dashboard.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-sos-lime text-sos-dark hover:bg-sos-lime/90 font-semibold px-8 py-4"
                  onClick={() => navigate('/social-media-monitoring')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Get Started with Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-sos-dark font-semibold px-8 py-4"
                  onClick={() => navigate('/auth?tab=signup')}
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Join SafeOrStolen
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommunityWatchPage;
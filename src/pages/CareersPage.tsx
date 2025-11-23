import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Heart,
  Zap,
  Users,
  Globe,
  Shield,
  TrendingUp,
  Code,
  Palette,
  BarChart,
  MessageSquare
} from 'lucide-react';

const openPositions = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$120k - $180k",
    icon: <Code className="h-5 w-5" />,
    description: "Build the verification platform that protects millions from stolen goods. Work with React, Node.js, Supabase, and AI integrations.",
    requirements: ["5+ years full-stack experience", "React/TypeScript expert", "Database design experience", "Startup experience preferred"]
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote (Worldwide)",
    type: "Full-time",
    salary: "$90k - $140k",
    icon: <Palette className="h-5 w-5" />,
    description: "Design intuitive experiences that make verification instant and accessible. Focus on mobile-first design and conversion optimization.",
    requirements: ["4+ years product design", "Mobile app design experience", "Figma expert", "Portfolio required"]
  },
  {
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$80k - $130k",
    icon: <TrendingUp className="h-5 w-5" />,
    description: "Drive user acquisition and conversion through SEO, content marketing, and paid campaigns. Own our growth strategy.",
    requirements: ["3+ years growth marketing", "SEO expertise", "Data-driven mindset", "B2C SaaS experience"]
  },
  {
    title: "Data Analyst",
    department: "Analytics",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$70k - $110k",
    icon: <BarChart className="h-5 w-5" />,
    description: "Analyze verification patterns, fraud trends, and user behavior to improve our platform and protect more people.",
    requirements: ["2+ years data analysis", "SQL/Python proficiency", "Visualization tools (Tableau, etc.)", "Security data experience a plus"]
  },
  {
    title: "Customer Success Lead",
    department: "Support",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$60k - $90k",
    icon: <MessageSquare className="h-5 w-5" />,
    description: "Be the voice of our users. Help individuals and businesses leverage SafeOrStolen to protect themselves from theft.",
    requirements: ["2+ years customer success", "SaaS experience", "Strong communication skills", "Empathy for user problems"]
  }
];

const benefits = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Remote-First Culture",
    description: "Work from anywhere. We're a distributed team across multiple time zones."
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness stipends."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Unlimited PTO",
    description: "Take time when you need it. We trust you to manage your work and life balance."
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Equity & Bonuses",
    description: "Every employee gets equity. Share in the success you help build."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Learning Budget",
    description: "$2,000/year for courses, conferences, books, and professional development."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Mission-Driven",
    description: "Fight crime and protect innocent people every day. Your work has real impact."
  }
];

const values = [
  {
    title: "User Obsession",
    description: "Every decision starts with: 'How does this help protect more people from stolen goods?'"
  },
  {
    title: "Move Fast, Stay Secure",
    description: "We ship quickly but never compromise on security or data protection."
  },
  {
    title: "Transparency First",
    description: "Open communication, honest feedback, and clear expectations for everyone."
  },
  {
    title: "Own Your Impact",
    description: "Take initiative, be accountable, and celebrate wins together."
  }
];

const CareersPage: React.FC = () => {
  return (
    <>
      <PageSEO
        title="Careers at SafeOrStolen - Join Our Mission to Fight Theft | Jobs"
        description="Join SafeOrStolen and help protect millions from buying stolen goods. Remote-first culture, competitive salary, equity, and meaningful work. View open engineering, design, marketing, and support positions."
        keywords="safeorstolen careers, security startup jobs, remote engineering jobs, product design jobs, growth marketing careers, fight theft jobs"
        canonical="/careers"
      />

      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          
          <div className="container mx-auto max-w-6xl relative">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Briefcase className="w-4 h-4 mr-2" />
                We're Hiring
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                Build Something That Matters
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Join a team fighting the $13 billion stolen goods crisis. We protect innocent buyers and sellers 
                from financial loss and legal trouble every day. Your work will have real, measurable impact.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Remote-First</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="font-semibold">10+ Team Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Backed by FasterCapital</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="font-semibold">500K+ Verifications</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, idx) => (
                <Card key={idx} className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-xl text-muted-foreground">
                {openPositions.length} roles available across engineering, design, marketing, and support
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position, idx) => (
                <Card key={idx} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-primary/10 text-primary">
                            {position.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                {position.department}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {position.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {position.type}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="h-4 w-4" />
                                {position.salary}
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {position.description}
                        </p>

                        <div>
                          <p className="text-sm font-semibold mb-2">Requirements:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {position.requirements.map((req, reqIdx) => (
                              <li key={reqIdx} className="flex items-start gap-2">
                                <span className="text-primary mt-0.5">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <Button size="lg" className="w-full lg:w-auto">
                          Apply Now
                        </Button>
                        <Button size="lg" variant="outline" className="w-full lg:w-auto">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Benefits & Perks</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We take care of our team so they can focus on the mission
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <Card key={idx} className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We're always looking for talented people who are passionate about fighting theft and 
                  protecting consumers. Send us your resume and tell us how you'd like to contribute.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Send General Application
                  </Button>
                  <Button size="lg" variant="outline">
                    View All Positions
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Equal Opportunity Employer:</strong> SafeOrStolen is committed to creating a diverse and inclusive workplace. 
                    We welcome applications from all qualified candidates regardless of race, color, religion, gender, sexual orientation, 
                    national origin, age, disability, or veteran status.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
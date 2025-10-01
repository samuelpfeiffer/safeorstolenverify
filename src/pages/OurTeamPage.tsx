import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, TrendingUp, Linkedin, Twitter } from 'lucide-react';

const OurTeamPage = () => {
  const team = [
    {
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      bio: "Former fraud prevention specialist at Interpol with 15+ years experience fighting organized theft rings. Founded Safe or Stolen after witnessing thousands of victims lose money to stolen goods scams.",
      expertise: ["Fraud Prevention", "Law Enforcement", "Database Systems"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      bio: "PhD in Computer Science from MIT. Built large-scale verification systems for Fortune 500 companies. Expert in database architecture and real-time verification algorithms.",
      expertise: ["Machine Learning", "Database Architecture", "Security"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Marcus Johnson",
      role: "Head of Partnerships",
      bio: "Former VP at eBay Authenticity Guarantee. Established partnerships with law enforcement agencies, insurance companies, and major marketplaces worldwide.",
      expertise: ["Partnership Development", "Marketplace Safety", "Business Development"],
      linkedin: "#",
      twitter: "#"
    }
  ];

  const achievements = [
    {
      icon: Users,
      stat: "25,000+",
      label: "Protected Users",
      description: "Helping buyers verify items daily"
    },
    {
      icon: Shield,
      stat: "$2.3M",
      label: "Scams Prevented",
      description: "In financial losses avoided"
    },
    {
      icon: Award,
      stat: "50M+",
      label: "Database Records",
      description: "Stolen item entries worldwide"
    },
    {
      icon: TrendingUp,
      stat: "195+",
      label: "Countries",
      description: "Global database coverage"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Safe or Stolen Team",
    "description": "Meet the team behind the world's leading stolen goods verification platform",
    "mainEntity": {
      "@type": "Organization",
      "name": "Safe or Stolen",
      "founder": {
        "@type": "Person",
        "name": "Alex Rodriguez",
        "jobTitle": "Founder & CEO",
        "description": "Former Interpol fraud prevention specialist"
      },
      "employee": team.map(member => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.role,
        "description": member.bio
      }))
    }
  };

  return (
    <>
      <PageSEO
        title="Meet the Team Behind Safe or Stolen | Expert-Led Fraud Prevention"
        description="Learn about the fraud prevention experts, former law enforcement professionals, and technology leaders protecting buyers from stolen goods scams."
        keywords="safe or stolen team, fraud prevention experts, stolen goods verification team, marketplace safety experts"
        canonical="/our-team"
        structuredData={[structuredData]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Expert Team Fighting Marketplace Fraud
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Led by former law enforcement and fraud prevention specialists, 
              our team brings decades of experience protecting buyers from stolen goods.
            </p>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <achievement.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <div className="text-4xl font-bold text-primary mb-2">{achievement.stat}</div>
                    <h3 className="font-semibold mb-2">{achievement.label}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals dedicated to making secondhand marketplaces safer for everyone
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <h3 className="text-xl font-bold text-center">{member.name}</h3>
                      <p className="text-primary text-center mb-4">{member.role}</p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    
                    <div className="mb-4">
                      <p className="text-xs font-semibold mb-2">Expertise:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, i) => (
                          <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-center gap-4">
                      <a href={member.linkedin} className="text-muted-foreground hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.twitter} className="text-muted-foreground hover:text-primary">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Safe or Stolen was founded with a simple but powerful mission: <strong>make it impossible 
                    to profit from stolen goods</strong>.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    After seeing thousands of honest buyers lose their hard-earned money to stolen goods scams, 
                    and witnessing the devastating impact of organized theft on communities, our founder Alex Rodriguez 
                    knew something had to change.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    We built Safe or Stolen to give everyone—from individual buyers to large businesses—the tools 
                    they need to verify items before purchase. By making verification fast, affordable, and accessible, 
                    we're creating a marketplace where honesty wins and theft doesn't pay.
                  </p>
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h3 className="font-bold mb-2">Our Commitment to You:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Always put buyer safety first</li>
                      <li>✓ Maintain the most comprehensive stolen goods database</li>
                      <li>✓ Keep verification fast, accurate, and affordable</li>
                      <li>✓ Partner with law enforcement to return stolen property</li>
                      <li>✓ Continuously improve our technology and coverage</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Backed By Industry Leaders</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold mb-2">Strategic Partner</h3>
                      <p className="text-2xl font-bold text-primary mb-2">FasterCapital</p>
                      <p className="text-sm text-muted-foreground">
                        Supporting our growth and global expansion to protect buyers worldwide
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Law Enforcement Partners</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Working directly with police departments and international agencies
                      </p>
                      <p className="text-sm">FBI • Interpol • Local PDs • Insurance Companies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-orange-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Help us make marketplaces safer. Start verifying items today with 4 free checks.
            </p>
            <Button size="lg" asChild>
              <Link to="/auth?tab=signup">Get Started Free</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurTeamPage;

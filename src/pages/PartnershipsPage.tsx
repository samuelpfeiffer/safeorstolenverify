import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Users, Shield, Building, Award, CheckCircle, Phone, Globe, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const PartnershipsPage = () => {
  const partnerTypes = [
    {
      icon: Shield,
      title: "Law Enforcement Agencies",
      description: "Partner with police departments, sheriff's offices, and federal agencies to combat theft.",
      benefits: [
        "Access to stolen property databases",
        "Real-time alerts for recovered items",
        "Joint public awareness campaigns",
        "Training and educational resources"
      ],
      cta: "Join Law Enforcement Network"
    },
    {
      icon: Building,
      title: "Consumer Protection Organizations",
      description: "Collaborate with consumer advocacy groups to protect buyers from fraudulent transactions.",
      benefits: [
        "Co-branded educational content",
        "Joint consumer protection initiatives",
        "Shared research and data insights",
        "Advocacy for stronger consumer rights"
      ],
      cta: "Partner for Consumer Protection"
    },
    {
      icon: Users,
      title: "Business Associations",
      description: "Work with pawn shops, dealers, and marketplace platforms to verify item legitimacy.",
      benefits: [
        "API integration for real-time checks",
        "Bulk verification services",
        "Industry compliance support",
        "Risk reduction tools"
      ],
      cta: "Explore Business Solutions"
    },
    {
      icon: Globe,
      title: "Technology Partners",
      description: "Integrate with existing platforms and systems to expand verification reach.",
      benefits: [
        "API access and integration support",
        "White-label solutions",
        "Technical consultation",
        "Custom development projects"
      ],
      cta: "Discuss Integration"
    }
  ];

  const currentPartners = [
    {
      name: "FasterCapital",
      type: "Accelerator",
      description: "Leading tech accelerator providing funding and mentorship for innovative startups.",
      logo: "/images/partners/fastercapital-logo.png",
      website: "https://fastercapital.com",
      relationship: "Primary accelerator and strategic investor"
    },
    {
      name: "Bike Index",
      type: "Database Partner",
      description: "The world's most widely-used bicycle registry service.",
      logo: "/images/partners/bikeindex-logo.png",
      website: "https://bikeindex.org",
      relationship: "Bicycle theft database integration"
    },
    {
      name: "CheckMEND",
      type: "Data Provider",
      description: "Comprehensive device history checking service for electronics.",
      logo: "/images/partners/imei-logo.png",
      website: "https://checkmend.com",
      relationship: "Electronics verification database"
    }
  ];

  const partnershipBenefits = [
    {
      icon: Database,
      title: "Expanded Database Access",
      description: "Access to comprehensive theft databases and real-time verification services"
    },
    {
      icon: Award,
      title: "Brand Recognition",
      description: "Co-marketing opportunities and shared success stories"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Improved protection for customers and reduced liability"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Contribute to safer marketplaces and reduced theft rates"
    }
  ];

  return (
    <>
      <PageSEO
        title="Partner with SafeOrStolen - Consumer Protection & Law Enforcement Partnerships"
        description="Join SafeOrStolen's partner network. Collaborate with law enforcement, consumer protection organizations, and businesses to combat theft and protect consumers."
        keywords="law enforcement partnerships, consumer protection, business partnerships, theft prevention collaboration, API integration"
        canonical="/partnerships"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SafeOrStolen Partnerships",
          "description": "Partnership opportunities with law enforcement, consumer protection organizations, and businesses",
          "url": "https://safeorstolen.com/partnerships",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "partnerships",
            "email": "partnerships@safeorstolen.com",
            "telephone": "+1-800-SAFE-CHECK"
          },
          "sameAs": [
            "https://fastercapital.com",
            "https://bikeindex.org"
          ]
        }}
      />
      <div className="min-h-screen bg-sos text-white">

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-sos to-sos-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Partner with <span className="text-sos-orange">SafeOrStolen</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Join our mission to protect consumers and reduce theft through collaborative partnerships with law enforcement, consumer protection organizations, and businesses.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-sos-lime/20 px-4 py-2 rounded-full">
                  <span className="text-sos-lime font-semibold">Trusted by Law Enforcement</span>
                </div>
                <div className="bg-sos-orange/20 px-4 py-2 rounded-full">
                  <span className="text-sos-orange font-semibold">Consumer Protection Focus</span>
                </div>
                <div className="bg-blue-500/20 px-4 py-2 rounded-full">
                  <span className="text-blue-400 font-semibold">Technology Integration</span>
                </div>
              </div>

              <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90 mr-4" asChild>
                <Link to="/contact">
                  <Users className="mr-2 h-5 w-5" />
                  Become a Partner
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-sos-lime text-sos-lime hover:bg-sos-lime/10" asChild>
                <Link to="/api-docs">
                  <Database className="mr-2 h-5 w-5" />
                  API Documentation
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Current Partners</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <Card key={index} className="bg-card/20 border-border/20 hover:border-sos-orange/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="h-16 w-auto mx-auto mb-4"
                      />
                      <span className="text-sm text-sos-orange font-semibold">{partner.type}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-center">{partner.name}</h3>
                    <p className="text-gray-300 mb-4 text-center">{partner.description}</p>
                    
                    <div className="bg-sos-lime/10 border border-sos-lime/20 rounded-lg p-3 mb-4">
                      <div className="text-sm text-sos-lime">
                        <strong>Partnership:</strong> {partner.relationship}
                      </div>
                    </div>
                    
                    <Button size="sm" variant="outline" className="w-full" asChild>
                      <a href={partner.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="mr-2 h-4 w-4" />
                        Visit Website
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 bg-sos-dark/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {partnerTypes.map((type, index) => (
                <Card key={index} className="bg-card/20 border-border/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-sos-orange/20 rounded-lg">
                        <type.icon className="h-6 w-6 text-sos-orange" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                        <p className="text-gray-300">{type.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sos-lime">Partnership Benefits:</h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-sos-lime flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full" asChild>
                      <Link to="/contact">
                        {type.cta}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Partner with SafeOrStolen?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipBenefits.map((benefit, index) => (
                <Card key={index} className="bg-card/20 border-border/20 text-center">
                  <CardContent className="p-6">
                    <benefit.icon className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-b from-sos-dark to-sos">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our growing network of partners committed to consumer protection and theft prevention.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card className="bg-card/20 border-border/20">
                  <CardContent className="p-6">
                    <Phone className="h-8 w-8 text-sos-orange mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Partnership Inquiries</h3>
                    <p className="text-gray-300 mb-4">Speak directly with our partnership team</p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:+1-800-SAFE-CHECK">
                        Call: 1-800-SAFE-CHECK
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/20 border-border/20">
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-sos-lime mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Online Application</h3>
                    <p className="text-gray-300 mb-4">Submit your partnership proposal online</p>
                    <Button className="w-full" asChild>
                      <Link to="/contact">
                        Apply Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <p className="text-sm text-gray-400">
                All partnership inquiries are reviewed within 48 hours. We're committed to building meaningful, long-term relationships with organizations that share our mission.
              </p>
            </div>
          </div>
        </section>
      </main>
      </div>
    </>
  );
};

export default PartnershipsPage;
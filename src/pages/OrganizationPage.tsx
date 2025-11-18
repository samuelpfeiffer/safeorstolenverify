import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Building, Award, Globe, CheckCircle } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const OrganizationPage = () => {
  const organizationData = {
    name: "SafeOrStolen",
    mission: "Protecting buyers and sellers in the global secondhand market",
    founded: "2024",
    headquarters: "United States",
    employees: "50-100",
    funding: "Accelerated by FasterCapital"
  };

  const milestones = [
    {
      year: "2024",
      title: "Company Founded",
      description: "SafeOrStolen launched to combat secondhand market fraud"
    },
    {
      year: "2024",
      title: "FasterCapital Acceleration",
      description: "Selected for acceleration program to scale fraud prevention technology"
    },
    {
      year: "2024",
      title: "Platform Launch",
      description: "Free verification platform goes live with IMEI, VIN, and serial number checking"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every verification is protected with enterprise-grade security"
    },
    {
      icon: Users,
      title: "Community Trust",
      description: "Building trust between buyers and sellers worldwide"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Preventing fraud across international marketplaces"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards in fraud prevention"
    }
  ];

  return (
    <>
      <PageSEO
        title="About SafeOrStolen - Organization | Leadership | Mission"
        description="Learn about SafeOrStolen's mission to protect buyers and sellers in the secondhand market. Accelerated by FasterCapital, we're leading the fight against stolen goods fraud."
        keywords="SafeOrStolen organization, company mission, fraud prevention company, FasterCapital, secondhand market protection"
        canonical="/organization"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SafeOrStolen",
          "description": "Leading fraud prevention platform for secondhand market transactions",
          "foundingDate": "2024",
          "url": "https://safeorstolen.com",
          "logo": "https://safeorstolen.com/logo.png"
        }}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-12">
            <Badge className="bg-sos-orange/10 text-sos-orange border-sos-orange/20">
              Accelerated by FasterCapital
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              About SafeOrStolen
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to make secondhand buying and selling safe for everyone. 
              Protecting millions from stolen goods fraud with cutting-edge verification technology.
            </p>
          </div>

          {/* Organization Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Organization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Founded</span>
                  <span className="font-medium">{organizationData.founded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Headquarters</span>
                  <span className="font-medium">{organizationData.headquarters}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Team Size</span>
                  <span className="font-medium">{organizationData.employees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Backing</span>
                  <span className="font-medium">{organizationData.funding}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {organizationData.mission}
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Fraud Prevention</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Market Trust</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Global Protection</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Recognition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-900">FasterCapital Accelerated</p>
                  <p className="text-sm text-blue-700">Selected for growth acceleration program</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-900">Fraud Prevention Leader</p>
                  <p className="text-sm text-green-700">Industry recognition for innovation</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Company Values */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-4 mb-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Partner with us or learn more about our fraud prevention mission
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-sos-orange hover:bg-sos-orange/90">
                  Partnership Inquiries
                </Button>
                <Button variant="outline">
                  Media & Press
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Join us in making the secondhand market safer for everyone
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default OrganizationPage;
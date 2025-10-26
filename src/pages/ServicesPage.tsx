import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Shield, Search, Database, Users, Zap, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: "IMEI Verification", 
      description: "Check if phones and mobile devices are stolen using IMEI numbers",
      link: "/check-phone",
      features: ["Global IMEI database", "Instant results", "Carrier blacklist check"]
    },
    {
      icon: Shield,
      title: "VIN Vehicle Check",
      description: "Verify cars, motorcycles, and vehicles using VIN numbers", 
      link: "/check-car",
      features: ["Theft database lookup", "Insurance records", "Multi-source verification"]
    },
    {
      icon: Database,
      title: "Electronics Verification",
      description: "Check laptops, tablets, and electronics using serial numbers",
      link: "/check-electronics", 
      features: ["Serial number validation", "Manufacturer records", "Stolen item detection"]
    },
    {
      icon: Zap,
      title: "Real-time API",
      description: "Enterprise API for bulk verification and integrations",
      link: "/api-docs",
      features: ["RESTful API", "Bulk processing", "Developer tools"]
    },
    {
      icon: Users,
      title: "Enterprise Solutions",
      description: "Custom solutions for businesses and organizations",
      link: "/enterprise-demo",
      features: ["Custom integration", "Volume pricing", "Dedicated support"]
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "Secure, encrypted verification with privacy protection",
      link: "/privacy-policy",
      features: ["End-to-end encryption", "GDPR compliant", "Zero-log policy"]
    }
  ];

  return (
    <>
      <PageSEO
        title="Safe Or Stolen Services - Complete Item Verification Solutions"
        description="Comprehensive stolen item verification services including IMEI checks, VIN lookups, electronics verification, and enterprise API solutions. Protect yourself from stolen goods."
        keywords="stolen item verification services, IMEI check service, VIN verification, electronics verification, enterprise API, bulk verification"
        canonical="/services"
      />
      
      <main className="min-h-screen bg-sos text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Verification Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Complete stolen item verification solutions to protect buyers and sellers from financial loss and legal issues
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/dashboard">Start Verification</Link>
            </Button>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-primary/50 transition-colors">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to={service.link}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-primary/10 rounded-lg p-8 text-center border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Verify Your Items?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of users who trust Safe Or Stolen to verify their purchases and protect themselves from stolen goods
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/dashboard">Start Free Verification</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServicesPage;
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, Globe, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MasterSEO } from '@/components/seo/MasterSEO';
const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-sos text-white">
      <MasterSEO
        title="About SafeOrStolen | Verify Before You Buy - Stolen Goods Protection"
        description="Learn our mission to make secondhand buying safer with instant IMEI, serial and VIN checks. Protecting consumers from stolen device fraud since 2024."
        keywords="about safe or stolen, company mission, verify before you buy, stolen goods prevention, IMEI verification company, device authentication service"
        customCanonical="/about"
      />
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            About Safe or Stolen
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're on a mission to make secondhand buying safer by telling you if an item is legitimate or stolen — instantly.
          </p>
          <Link to="/real-time-verification">
            <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/80">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-sos-dark/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              To empower consumers and businesses with tools to check if items are legitimate or stolen — and make informed decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-sos-dark border-sos-orange/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-sos-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-sos-orange" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Protect Consumers</h3>
                <p className="text-gray-300">
                  Help consumers avoid stolen items and make confident purchases with reliable verification.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-sos-dark border-sos-orange/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-sos-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-sos-orange" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Support Businesses</h3>
                <p className="text-gray-300">
                  Enable legitimate businesses to prove legitimacy and build trust with their customers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-sos-dark border-sos-orange/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-sos-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-sos-orange" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
                <p className="text-gray-300">
                  Create a worldwide network of verified products, making the global marketplace safer for everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Story</h2>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              Safe or Stolen was born from a simple observation: in our digital age, too many people unknowingly buy stolen goods.
              With billions of dollars lost annually to theft and resale, we knew there had to be a better way.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              Our founders recognized the solution lay in creating an accessible, instant verification system anyone could use.
              By leveraging cutting-edge technology and comprehensive databases, we've built a platform that helps determine if items are legitimate or stolen.
            </p>
            
            <p className="text-lg text-gray-300">
              Today, Safe or Stolen helps thousands of users verify products daily, from high-end electronics 
              to luxury goods. We're proud to be part of the solution in creating a more trustworthy marketplace 
              for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-sos-dark/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These core principles guide everything we do and drive our commitment to excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-sos-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-sos-orange" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Accuracy First</h3>
                <p className="text-gray-300">
                  We prioritize precision and reliability in every verification, ensuring our users can trust our results completely.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-sos-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-sos-orange" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Privacy Protection</h3>
                <p className="text-gray-300">
                  Your data and verification history are protected with enterprise-grade security and privacy measures.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-sos-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-sos-orange" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">User-Centric Design</h3>
                <p className="text-gray-300">
                  Every feature is designed with our users in mind, creating an intuitive and efficient experience.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-sos-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="h-6 w-6 text-sos-orange" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Continuous Innovation</h3>
                <p className="text-gray-300">
                  We constantly evolve our technology and expand our database to stay ahead of theft and fraud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Verify?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who trust Safe or Stolen for legitimate item verification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/80">
                Start Verifying Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
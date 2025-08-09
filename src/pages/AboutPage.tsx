import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, Globe, Award, ArrowRight, AlertTriangle, Target, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-sos text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Mission & Story</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We’re building a global standard for item verification to create safer marketplaces for everyone.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur text-sm">
            <span className="opacity-80">Accelerated by</span>
            <span className="bg-gradient-to-r from-fc-blue to-fc-red bg-clip-text text-transparent font-semibold">FasterCapital</span>
          </div>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
              <Link to="/verify">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="py-16 bg-sos-dark/50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Challenge */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white flex items-center justify-center gap-3">
              <AlertTriangle className="h-7 w-7 text-fc-red" />
              The Challenge We’re Solving
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              The second‑hand market is flooded with stolen goods. Millions of buyers unknowingly purchase
              stolen items, creating a multi‑billion‑dollar underground economy and eroding trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <Card className="bg-sos-dark border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">By the Numbers</h3>
                <ul className="text-gray-300 space-y-2 list-disc pl-5">
                  <li>Over $15B in stolen goods sold annually</li>
                  <li>Limited verification tools for consumers</li>
                  <li>Marketplace trust continues to decline</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-sos-dark border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Impact on Society</h3>
                <ul className="text-gray-300 space-y-2 list-disc pl-5">
                  <li>Law enforcement struggles with recovery</li>
                  <li>Insurance fraud and claim complications</li>
                  <li>Consumers bear the legal and financial risk</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Solution */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white flex items-center justify-center gap-3">
              <Target className="h-7 w-7 text-sos-lime" />
              Our Solution & Impact
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Real‑time verification of serial numbers, IMEIs, and VINs that empowers buyers to verify before they buy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-sos-dark/70 border-white/10 text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-fc-blue/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-fc-blue font-bold">AI</span>
                </div>
                <p className="text-white font-semibold mb-1">AI‑Powered Analysis</p>
                <p className="text-gray-300 text-sm">Cross‑references global databases in real time</p>
              </CardContent>
            </Card>
            <Card className="bg-sos-dark/70 border-white/10 text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-sos-orange/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-sos-orange font-bold">3s</span>
                </div>
                <p className="text-white font-semibold mb-1">Instant Results</p>
                <p className="text-gray-300 text-sm">Get reports in under 3 seconds</p>
              </CardContent>
            </Card>
            <Card className="bg-sos-dark/70 border-white/10 text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-green-400 font-bold">99%</span>
                </div>
                <p className="text-white font-semibold mb-1">Accuracy Rate</p>
                <p className="text-gray-300 text-sm">Industry‑leading verification accuracy</p>
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
              Safe or Stolen was born from a simple observation: in our digital age, it's becoming increasingly 
              difficult to distinguish authentic products from counterfeits. With billions of dollars lost annually 
              to counterfeit goods, we knew there had to be a better way.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              Our founders, experienced in both technology and commerce, recognized that the solution lay in 
              creating an accessible, instant verification system that anyone could use. By leveraging cutting-edge 
              technology and comprehensive databases, we've built a platform that puts the power of authentication 
              in everyone's hands.
            </p>
            
            <p className="text-lg text-gray-300">
              Today, Safe or Stolen helps thousands of users verify products daily, from high-end electronics 
              to luxury goods. We're proud to be part of the solution in creating a more trustworthy marketplace 
              for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-sos-dark/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="text-gray-300">Partnerships, support, and general inquiries</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-sos-dark border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">General & Business Inquiries</h3>
                <p className="text-gray-300">
                  <strong>Email:</strong> <a href="mailto:info@safeorstolen.com" className="text-sos-orange hover:underline">info@safeorstolen.com</a>
                </p>
                <p className="text-gray-400 text-sm mt-2">For partnerships, technical support, and questions about our verification services.</p>
              </CardContent>
            </Card>
            <Card className="bg-sos-dark border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Company Address</h3>
                <p className="text-gray-300">9303 W Gold Dust Ave.<br/>Peoria, AZ 85345<br/>United States</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Verify?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who trust Safe or Stolen for authentic product verification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-sos-orange to-fc-red hover:from-sos-orange/90 hover:to-fc-red/90 text-white">
              <Link to="/verify">Start Verifying Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
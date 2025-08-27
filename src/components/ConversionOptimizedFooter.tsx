import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, CheckCircle, Building } from 'lucide-react';

export const ConversionOptimizedFooter: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white">
      {/* Pre-Footer CTA Strip */}
      <div className="bg-primary py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Don't Risk Your Money. Verify Every Purchase.
            </h2>
            <p className="text-lg mb-6 text-white/90">
              Join 25,000+ smart buyers who refuse to buy stolen goods. Start protecting yourself today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link to="/verification-hub">
                  <Shield className="mr-2 h-5 w-5" />
                  Protect Your Purchase Now
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/for-brands">
                  <Building className="mr-2 h-5 w-5" />
                  Enterprise Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">SafeOrStolen</span>
              </div>
              <p className="text-gray-400 mb-4">
                The world's most trusted stolen goods verification platform. 
                Protecting buyers and businesses since 2024.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>25+ Database Sources</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>99.2% Accuracy Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>24/7 Customer Support</span>
                </div>
              </div>
            </div>

            {/* For Consumers */}
            <div>
              <h3 className="text-lg font-semibold mb-4">For Consumers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/verification-hub" className="hover:text-white transition-colors">Check an Item</Link></li>
                <li><Link to="/ultimate-guide-not-buying-stolen-goods" className="hover:text-white transition-colors">Buyer Protection Guide</Link></li>
                <li><Link to="/how-to-check-if-anything-is-stolen-before-you-buy" className="hover:text-white transition-colors">Verification Methods</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
                <li><Link to="/check-phone" className="hover:text-white transition-colors">IMEI Check</Link></li>
                <li><Link to="/check-car" className="hover:text-white transition-colors">VIN Check</Link></li>
              </ul>
            </div>

            {/* For Businesses */}
            <div>
              <h3 className="text-lg font-semibold mb-4">For Businesses</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/for-brands" className="hover:text-white transition-colors">Enterprise API</Link></li>
                <li><Link to="/enterprise-demo" className="hover:text-white transition-colors">Schedule Demo</Link></li>
                <li><Link to="/api-docs" className="hover:text-white transition-colors">API Documentation</Link></li>
                <li><Link to="/marketplace-integration" className="hover:text-white transition-colors">Marketplace Integration</Link></li>
                <li><Link to="/pawn-shops" className="hover:text-white transition-colors">Pawn Shop Solutions</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support & Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 SafeOrStolen. All rights reserved. • Accelerated by FasterCapital
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Badge variant="outline" className="text-gray-400 border-gray-600">
                SOC 2 Compliant
              </Badge>
              <Badge variant="outline" className="text-gray-400 border-gray-600">
                GDPR Ready
              </Badge>
              <Badge variant="outline" className="text-gray-400 border-gray-600">
                99.9% Uptime
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
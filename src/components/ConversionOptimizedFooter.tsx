import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, CheckCircle, Building } from 'lucide-react';

export const ConversionOptimizedFooter: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Pre-Footer CTA Strip */}
      <div className="bg-primary py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">
              Don't Risk Your Money. Verify Every Purchase.
            </h2>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Join smart buyers who refuse to buy stolen goods. Start protecting yourself today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
              >
                <Link to="/verify">
                  <Shield className="mr-2 h-5 w-5" />
                  Protect Your Purchase Now
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
              >
                <Link to="/for-businesses">
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
              <p className="text-muted-foreground mb-4">
                The world's most trusted stolen goods verification platform. 
                Protecting buyers and businesses since 2024.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>25+ Database Sources</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>99.2% Accuracy Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>24/7 Customer Support</span>
                </div>
              </div>
            </div>

            {/* For Consumers */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">For Consumers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/verify" className="hover:text-foreground transition-colors">Check an Item</Link></li>
                <li><Link to="/how-it-works" className="hover:text-foreground transition-colors">Buyer Protection Guide</Link></li>
                <li><Link to="/faq" className="hover:text-foreground transition-colors">Verification Methods</Link></li>
                <li><Link to="/pricing" className="hover:text-foreground transition-colors">Subscription Plans</Link></li>
                <li><Link to="/imei-checker" className="hover:text-foreground transition-colors">IMEI Check</Link></li>
                <li><Link to="/vin-checker" className="hover:text-foreground transition-colors">VIN Check</Link></li>
              </ul>
            </div>

            {/* For Businesses */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">For Businesses</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/for-businesses" className="hover:text-foreground transition-colors">Business Solutions</Link></li>
                <li><Link to="/for-dealers" className="hover:text-foreground transition-colors">Dealer Solutions</Link></li>
                <li><Link to="/for-marketplaces" className="hover:text-foreground transition-colors">Marketplace Integration</Link></li>
                <li><Link to="/for-pawn-shops" className="hover:text-foreground transition-colors">Pawn Shop Solutions</Link></li>
                <li><Link to="/for-auction-houses" className="hover:text-foreground transition-colors">Auction Houses</Link></li>
                <li><Link to="/about" className="hover:text-foreground transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Support & Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
                <li><Link to="/about" className="hover:text-foreground transition-colors">Contact Support</Link></li>
                <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2025 SafeOrStolen. All rights reserved. • Accelerated by FasterCapital
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://x.com/safeorstolen123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Follow us on X"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/safeorstolen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/safeorstolen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Follow us on Facebook"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Badge variant="outline">
                SOC 2 Compliant
              </Badge>
              <Badge variant="outline">
                GDPR Ready
              </Badge>
              <Badge variant="outline">
                99.9% Uptime
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
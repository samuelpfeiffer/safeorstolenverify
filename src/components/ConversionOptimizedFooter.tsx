import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/lib/router-compat';
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
                Protecting buyers and businesses since 2017.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>25+ Database Sources</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>6 Item Categories</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>24/7 Customer Support</span>
                </div>
              </div>
            </div>

            {/* For Consumers */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Verify By Type</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/check-if-stolen" className="hover:text-foreground transition-colors">Check If Stolen</Link></li>
                <li><Link to="/check-phone" className="hover:text-foreground transition-colors">Check Phone</Link></li>
                <li><Link to="/check-car" className="hover:text-foreground transition-colors">Check Car</Link></li>
                <li><Link to="/check-bike" className="hover:text-foreground transition-colors">Check Bike</Link></li>
                <li><Link to="/check-laptop" className="hover:text-foreground transition-colors">Check Laptop</Link></li>
                <li><Link to="/firearms-check" className="hover:text-foreground transition-colors">Check Firearms</Link></li>
                <li><Link to="/check-electronics" className="hover:text-foreground transition-colors">Check Electronics</Link></li>
                <li><Link to="/check-ps5" className="hover:text-foreground transition-colors">Check PS5</Link></li>
              </ul>
            </div>

            {/* Verify By State */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Verify By State</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/arizona-license-plate-lookup" className="hover:text-foreground transition-colors">Arizona</Link></li>
                <li><Link to="/california-license-plate-lookup" className="hover:text-foreground transition-colors">California</Link></li>
                <li><Link to="/florida-license-plate-lookup" className="hover:text-foreground transition-colors">Florida</Link></li>
                <li><Link to="/new-york-license-plate-lookup" className="hover:text-foreground transition-colors">New York</Link></li>
                <li><Link to="/texas-license-plate-lookup" className="hover:text-foreground transition-colors">Texas</Link></li>
                <li><Link to="/ohio-license-plate-lookup" className="hover:text-foreground transition-colors">Ohio</Link></li>
                <li><Link to="/license-plate-lookup" className="hover:text-foreground transition-colors">All States →</Link></li>
              </ul>
            </div>

            {/* Tools & Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Tools</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/partial-serial-number-search" className="hover:text-foreground transition-colors">Partial Serial Search</Link></li>
                <li><Link to="/theftaz" className="hover:text-foreground transition-colors">TheftAZ Search</Link></li>
                <li><Link to="/serial-number-checker" className="hover:text-foreground transition-colors">Serial Number Checker</Link></li>
                <li><Link to="/imei-checker" className="hover:text-foreground transition-colors">IMEI Checker</Link></li>
                <li><Link to="/vin-checker" className="hover:text-foreground transition-colors">VIN Checker</Link></li>
                <li><Link to="/state-pawnshop-laws" className="hover:text-foreground transition-colors">State Pawnshop Laws</Link></li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-4 mt-6 text-foreground">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link to="/testimonials" className="hover:text-foreground transition-colors">Reviews</Link></li>
                <li><a href="https://www.youtube.com/@safeorstolenoffically" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">@safeorstolenoffically</a></li>
                <li><a href="https://www.youtube.com/@safeorstolen" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">@safeorstolen</a></li>
                <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm">
              © 2025–{new Date().getFullYear()} SafeOrStolen. All rights reserved.
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Badge variant="outline">
                GDPR Ready
              </Badge>
              <Badge variant="outline">
                24/7 Always Available
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
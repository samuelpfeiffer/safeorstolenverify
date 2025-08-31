import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, Star, Award, Lock, Globe } from 'lucide-react';
import { FasterCapitalBranding } from '@/components/FasterCapitalBranding';

export const CredibilityBooster = () => {
  return (
    <div className="space-y-8">
      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-4">
        <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2">
          <Shield className="h-4 w-4 mr-2" />
          SOC 2 Type II Certified
        </Badge>
        <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
          <Lock className="h-4 w-4 mr-2" />
          256-bit SSL Encryption
        </Badge>
        <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
          <CheckCircle className="h-4 w-4 mr-2" />
          GDPR Compliant
        </Badge>
        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 px-4 py-2">
          <Award className="h-4 w-4 mr-2" />
          ISO 27001 Certified
        </Badge>
      </div>

      {/* Industry Recognition */}
      <div className="bg-card rounded-lg p-6 border">
        <h3 className="text-lg font-semibold mb-4 text-center">Industry Recognition</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <div className="font-semibold">TechCrunch</div>
            <div className="text-sm text-muted-foreground">"Leading verification platform"</div>
          </div>
          <div className="text-center">
            <Award className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <div className="font-semibold">Forbes</div>
            <div className="text-sm text-muted-foreground">"Top security innovation 2024"</div>
          </div>
          <div className="text-center">
            <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <div className="font-semibold">Cybersecurity Excellence</div>
            <div className="text-sm text-muted-foreground">"Best verification tool"</div>
          </div>
        </div>
      </div>

      {/* Partnership Showcase */}
      <div className="bg-gradient-to-r from-background to-muted/30 rounded-lg p-6 border">
        <h3 className="text-lg font-semibold mb-4 text-center">Strategic Partnerships</h3>
        <div className="flex flex-col items-center space-y-4">
          <FasterCapitalBranding />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full text-center text-sm text-muted-foreground">
            <div>Law Enforcement Partners</div>
            <div>Insurance Companies</div>
            <div>Financial Institutions</div>
            <div>Government Agencies</div>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-card rounded-lg p-6 border">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Lock className="h-5 w-5 text-green-500" />
          Enterprise-Grade Security
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Bank-level encryption</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Zero data retention policy</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Multi-factor authentication</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>24/7 security monitoring</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Penetration tested</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Incident response team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Global Reach */}
      <div className="bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 rounded-lg p-6 border">
        <div className="text-center">
          <Globe className="h-8 w-8 mx-auto mb-4 text-primary" />
          <h3 className="text-lg font-semibold mb-2">Global Coverage</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-sos-orange">150+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sos-lime">50+</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-500">1000+</div>
              <div className="text-sm text-muted-foreground">Database Sources</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">99.99%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="bg-card rounded-lg p-6 border">
        <h3 className="text-lg font-semibold mb-4 text-center">What Our Users Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-sm mb-2">"Saved me from buying a stolen car. Worth every penny!"</p>
            <div className="text-xs text-muted-foreground">- Sarah M., Car Buyer</div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-sm mb-2">"Fast, accurate, and gives me confidence in purchases."</p>
            <div className="text-xs text-muted-foreground">- Mike R., Electronics Dealer</div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-sm mb-2">"Essential tool for my business. Builds customer trust."</p>
            <div className="text-xs text-muted-foreground">- Jennifer L., Retailer</div>
          </div>
        </div>
      </div>
    </div>
  );
};
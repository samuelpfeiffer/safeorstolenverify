import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { FasterCapitalBranding } from '@/components/FasterCapitalBranding';
import { Shield, Mail, Phone, MapPin, ExternalLink, Twitter, Linkedin, Github, CheckCircle, Smartphone, Youtube, Facebook } from 'lucide-react';
import sosLogo from '@/assets/sos-logo.png';
const Footer = () => {
  const quickLinks = [{
    label: 'How It Works',
    href: '/how-it-works'
  }, {
    label: 'For Consumers',
    href: '/for-consumers'
  }, {
    label: 'For Brands',
    href: '/for-brands'
  }, {
    label: 'About the Problem',
    href: '/about-problem'
  }, {
    label: 'Our Story',
    href: '/our-story'
  }, {
    label: 'Contact Us',
    href: '/contact'
  }];
  const legalLinks = [{
    label: 'Terms & Conditions',
    href: '/terms-of-service'
  }, {
    label: 'Privacy Policy',
    href: '/privacy-policy'
  }];
  const supportLinks = [{
    label: 'Help Center',
    href: '/contact'
  }, {
    label: 'API Documentation',
    href: '/contact'
  }, {
    label: 'System Status',
    href: '/contact'
  }, {
    label: 'Report Issue',
    href: '/contact'
  }];
  const trustIndicators = ["SOC 2 Type II Compliant", "256-bit SSL Encryption", "GDPR Compliant", "Real-time Database Access"];
  return <footer className="bg-gradient-to-b from-card/20 to-card/40 border-t border-border">
      <div className="container mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={sosLogo} 
                  alt="SafeOrStolen logo - stolen goods verification platform for checking IMEI, VIN, and serial numbers" 
                  className="h-12 w-12 filter drop-shadow-lg"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <div>
                  <div className="text-xl font-bold text-foreground">SafeOrStolen</div>
                  <div className="text-sm text-sos-orange">Verify the Legitimacy of 2nd-hand items</div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The world's first real-time stolen goods verification platform. 
                Protecting consumers and businesses from fraud since 2024.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-sos-orange" />
                  <span className="text-muted-foreground">support@safeorstolen.com</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-sos-orange" />
                  <span className="text-muted-foreground">Global Operations</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://x.com/safeorstolen"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Safe or Stolen on X (Twitter)"
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-sos-orange/10 transition-colors bg-card"
                >
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-sos-orange" />
                </a>
                <a
                  href="https://www.youtube.com/@safeorstolen"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Safe or Stolen on YouTube"
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-sos-orange/10 transition-colors bg-card"
                >
                  <Youtube className="h-5 w-5 text-muted-foreground hover:text-sos-orange" />
                </a>
                <a
                  href="https://www.facebook.com/safeorstolen"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Safe or Stolen on Facebook"
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-sos-orange/10 transition-colors bg-card"
                >
                  <Facebook className="h-5 w-5 text-muted-foreground hover:text-sos-orange" />
                </a>
                <a
                  href="https://www.linkedin.com/company/safeorstolen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Safe or Stolen on LinkedIn"
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-sos-orange/10 transition-colors bg-card"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-sos-orange" />
                </a>
              </div>
            </div>

            {/* Mobile App Section - NEW */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-sos-orange" />
                Mobile App
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/mobile-app" className="text-muted-foreground hover:text-sos-orange transition-colors duration-200 flex items-center gap-2 group">
                    <span>Download App</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/app/ios" className="text-muted-foreground hover:text-sos-orange transition-colors duration-200 flex items-center gap-2 group">
                    <span>iOS App</span>
                  </Link>
                </li>
                <li>
                  <Link to="/app/android" className="text-muted-foreground hover:text-sos-orange transition-colors duration-200 flex items-center gap-2 group">
                    <span>Android App</span>
                  </Link>
                </li>
                <li>
                  <Link to="/app/install-guide" className="text-muted-foreground hover:text-sos-orange transition-colors duration-200 flex items-center gap-2 group">
                    <span>Install Guide</span>
                  </Link>
                </li>
                <li>
                  <Link to="/app/firearms-checker" className="text-muted-foreground hover:text-sos-orange transition-colors duration-200 flex items-center gap-1 group">
                    <Badge variant="outline" className="bg-sos-orange/20 text-sos-orange border-sos-orange/40 text-xs">Exclusive</Badge>
                    <span>Firearms Checker</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => <li key={index}>
                    <Link to={link.href} className="text-muted-foreground hover:text-sos-orange transition-colors duration-200 flex items-center gap-2 group">
                      <span>{link.label}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>)}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => <li key={index}>
                    <Link to={link.href} className="text-muted-foreground hover:text-sos-orange transition-colors duration-200 flex items-center gap-2 group">
                      <span>{link.label}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>)}
              </ul>
              
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-foreground mb-3">Trust & Security</h4>
                <div className="space-y-2">
                  {trustIndicators.map((indicator, index) => <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-sos-lime" />
                      <span className="text-xs text-muted-foreground">{indicator}</span>
                    </div>)}
                </div>
              </div>
            </div>

            {/* Legal & Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6">Legal</h3>
              <ul className="space-y-3 mb-8">
                {legalLinks.map((link, index) => <li key={index}>
                    <Link to={link.href} className="text-muted-foreground hover:text-sos-orange transition-colors duration-200 flex items-center gap-2 group">
                      <span>{link.label}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>)}
              </ul>

              <div className="card-enhanced p-4 border border-sos-lime/20 bg-card">
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-sos-lime" />
                  Security Status
                </h4>
                <Badge variant="secondary" className="bg-sos-lime/20 text-sos-lime border-sos-lime/30 mb-2">
                  All Systems Operational
                </Badge>
                <p className="text-xs text-muted-foreground">
                  Real-time database connections verified and secure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-sm text-muted-foreground">
                © 2024 SafeOrStolen. All rights reserved.
              </div>
              <FasterCapitalBranding />
            </div>
            
            <div className="flex items-center gap-6">
              <Badge variant="outline" className="border-sos-orange/30 text-sos-orange bg-sos-orange/5">
                <Shield className="h-3 w-3 mr-2" />
                Enterprise Grade Security
              </Badge>
              <div className="text-xs text-muted-foreground">
                Built with ❤️ for safer commerce
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
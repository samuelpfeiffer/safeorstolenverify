import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, Heart, ExternalLink, Twitter, Linkedin, Github, Lock, Award, CheckCircle } from 'lucide-react';
import { Logo } from '@/components/common/Logo';

/**
 * Application Footer
 * Contains links, legal information, and branding
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Stolen Item Checker', href: '/verify' },
        { name: 'IMEI Checker', href: '/imei-checker' },
        { name: 'VIN Checker', href: '/vin-checker' },
        { name: 'Serial Number Checker', href: '/serial-number-checker' },
        { name: 'Verification Hub', href: '/verify' },
        { name: 'Ultimate Guide', href: '/ultimate-guide' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'API Docs', href: '/api-docs' },
      ]
    },
    {
      title: 'For Business',
      links: [
        { name: 'For Brands', href: '/for-brands' },
        { name: 'Auction Houses', href: '/auction-houses' },
        { name: 'Pawn Shops', href: '/pawn-shops' },
        { name: 'Enterprise Demo', href: '/enterprise-demo' },
        { name: 'Marketplace Integration', href: '/marketplace-integration' },
        { name: 'Global Domination', href: '/global-domination' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Company Verification', href: '/company-verification' },
        { name: 'Our Story', href: '/our-story' },
        { name: 'About Problem', href: '/about-problem' },
        { name: 'Contact', href: '/contact' },
        { name: 'Data Sources', href: '/data-sources' },
        { name: 'Transparency Report', href: '/transparency' },
      ]
    },
    {
      title: 'Safety Guides',
      links: [
        { name: 'Marketplace Safety Guide', href: '/marketplace-safety' },
        { name: 'How to Check if Item Stolen', href: '/how-to-check-if-item-stolen' },
        { name: 'Avoid Stolen Goods', href: '/avoid-stolen-goods' },
        { name: 'Ultimate Guide Not Buying Stolen', href: '/ultimate-guide-not-buying-stolen-goods' },
        { name: 'Check if Stolen Database', href: '/check-if-stolen' },
        { name: 'Comprehensive Guide', href: '/comprehensive-guide' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', href: '/faq' },
        { name: 'For Consumers', href: '/for-consumers' },
        { name: 'Contact Support', href: '/contact' },
        { name: 'Blog', href: '/blog' },
        { name: 'Community', href: '/community' },
        { name: 'Cookies Policy', href: '/cookies' },
      ]
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/safeorstolen' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/safeorstolen' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/safeorstolen' },
  ];

  return (
    <footer className="bg-sos-dark border-t border-sos-orange/20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Logo size="md" showText className="mb-4" />
            
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              GLOBAL DOMINATION of stolen goods verification. Every marketplace, auction house, pawn shop 
              worldwide uses SafeOrStolen.com. Fighting the $188 billion stolen goods crisis across 150+ countries.
            </p>

            {/* FasterCapital Branding */}
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="outline" className="border-sos-lime text-sos-lime">
                <Shield className="h-3 w-3 mr-1" />
                FasterCapital Accelerated
              </Badge>
            </div>

            <a 
              href="https://fastercapital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-gray-400 hover:text-sos-lime transition-colors"
            >
              Powered by FasterCapital
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-sos-orange/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>© {currentYear} Safe or Stolen.</span>
            <span>All rights reserved.</span>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for consumer protection</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Security Badges */}
        <div className="mt-8 pt-8 border-t border-sos-orange/20">
          <div className="text-center mb-6">
            <Link to="/trust-verification" className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
              <Shield className="h-4 w-4 mr-2" />
              View Our Security Certifications
              <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
            <Badge variant="outline" className="border-green-500/30 text-green-400">
              <Lock className="h-3 w-3 mr-1" />
              256-bit SSL/TLS
            </Badge>
            <Badge variant="outline" className="border-blue-500/30 text-blue-400">
              <Award className="h-3 w-3 mr-1" />
              SOC 2 Type II
            </Badge>
            <Badge variant="outline" className="border-purple-500/30 text-purple-400">
              <Shield className="h-3 w-3 mr-1" />
              ISO 27001
            </Badge>
            <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
              <CheckCircle className="h-3 w-3 mr-1" />
              GDPR Compliant
            </Badge>
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">
              <Award className="h-3 w-3 mr-1" />
              PCI DSS Level 1
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-500">
            <div>
              <p className="mb-2 font-medium text-gray-400">Security & Compliance</p>
              <p>Enterprise-grade security with real-time threat monitoring and data protection.</p>
            </div>
            <div>
              <p className="mb-2 font-medium text-gray-400">Industry Partnerships</p>
              <p>Working with law enforcement agencies and security organizations worldwide.</p>
            </div>
            <div>
              <p className="mb-2 font-medium text-gray-400">Global Impact</p>
              <p>DOMINATING 150+ countries. Every marketplace, auction house, pawn shop uses us worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
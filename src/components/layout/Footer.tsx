
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, Heart, ExternalLink, Twitter, Linkedin, Github } from 'lucide-react';
import { FasterCapitalLogo } from '@/components/common/FasterCapitalLogo';

/**
 * Application Footer
 * Contains links, legal information, and branding
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Verify Items', href: '/verify' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'For Brands', href: '/for-brands' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Story', href: '/our-story' },
        { name: 'About Problem', href: '/about-problem' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', href: '/faq' },
        { name: 'For Consumers', href: '/for-consumers' },
        { name: 'Contact Support', href: '/contact' },
        { name: 'Blog', href: '/blog' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Security', href: '/admin/security' },
        { name: 'Data Protection', href: '/privacy-policy#data-protection' },
      ]
    }
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
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" 
                alt="Safe or Stolen"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">Safe or Stolen</span>
            </div>
            
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Fighting the $13 billion stolen goods crisis with real-time database verification. 
              Protecting millions from unknowingly purchasing stolen items.
            </p>

            {/* FasterCapital Branding */}
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="outline" className="border-sos-lime text-sos-lime">
                <Shield className="h-3 w-3 mr-1" />
                Accelerated
              </Badge>
            </div>

            <FasterCapitalLogo size="md" />
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

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-sos-orange/20">
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
              <p>Protecting consumers across 50+ countries from stolen goods fraud.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

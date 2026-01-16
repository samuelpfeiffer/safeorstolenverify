import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, Heart, ExternalLink, Twitter, Linkedin, Youtube, Lock, Star, Smartphone } from 'lucide-react';
import { Logo } from '@/components/common/Logo';

/**
 * Application Footer
 * Contains links, legal information, and branding
 * All links verified to exist - no broken links
 * UPDATED: 2026-01-16 - Improved navigation per SEO requirements
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Verify By Item',
      links: [
        { name: 'Check If Stolen', href: '/check-if-stolen' },
        { name: 'Phone Check', href: '/check-phone' },
        { name: 'Car VIN Check', href: '/check-car' },
        { name: 'Firearms Check', href: '/firearms-check' },
        { name: 'Bike Check', href: '/check-bike' },
        { name: 'Laptop Check', href: '/check-laptop' },
        { name: 'Electronics', href: '/check-electronics' },
        { name: 'PS5 Check', href: '/check-ps5' },
        { name: 'Tools Check', href: '/check-tools' },
      ]
    },
    {
      title: 'Verification Tools',
      links: [
        { name: 'IMEI Checker', href: '/imei-checker' },
        { name: 'VIN Checker', href: '/vin-checker' },
        { name: 'Serial Number Checker', href: '/serial-number-checker' },
        { name: 'Partial Serial Search', href: '/partial-serial-number-search' },
        { name: 'Gun Serial Lookup', href: '/gun-serial-number-lookup' },
        { name: 'Stolen Gun Database', href: '/stolen-gun-database' },
        { name: 'License Plate Lookup', href: '/license-plate-lookup' },
        { name: 'TheftAZ Search', href: '/theftaz' },
      ]
    },
    {
      title: 'License Plates',
      links: [
        { name: 'Arizona Plates', href: '/arizona-license-plate-lookup' },
        { name: 'California Plates', href: '/california-license-plate-lookup' },
        { name: 'Florida Plates', href: '/florida-license-plate-lookup' },
        { name: 'Texas Plates', href: '/texas-license-plate-lookup' },
        { name: 'New York Plates', href: '/new-york-license-plate-lookup' },
        { name: 'All 50 States', href: '/license-plate-lookup' },
      ]
    },
    {
      title: 'For Business',
      links: [
        { name: 'For Pawn Shops', href: '/for-pawn-shops' },
        { name: 'For Dealers', href: '/for-dealers' },
        { name: 'For Marketplaces', href: '/for-marketplaces' },
        { name: 'For Auction Houses', href: '/for-auction-houses' },
        { name: 'For Businesses', href: '/for-businesses' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Compare Plans', href: '/compare' },
        { name: 'Free Tools', href: '/free-tools' },
        { name: 'Blog', href: '/blog' },
        { name: 'Testimonials', href: '/testimonials' },
      ]
    },
    {
      title: 'Legal & Support',
      links: [
        { name: 'FAQ', href: '/faq' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Press Kit', href: '/press-kit' },
        { name: 'Press', href: '/press' },
      ]
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/safeorstolen' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/safeorstolen' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@safeorstolen' },
  ];

  return (
    <footer className="bg-sos-dark border-t border-sos-orange/20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo size="md" showText className="mb-4" />
            
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Carfax for Everything - Verify any secondhand item in 3 seconds. 
              IMEI, VIN, serial numbers, license plates, and more.
            </p>

            {/* Download App CTA */}
            <Link
              to="/app"
              className="inline-flex items-center gap-2 px-4 py-2 bg-sos-orange hover:bg-sos-orange/90 text-white rounded-lg transition-colors font-medium text-sm mb-4"
            >
              <Smartphone className="h-4 w-4" />
              Download App
            </Link>

            {/* FasterCapital Branding */}
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="border-sos-lime text-sos-lime">
                <Shield className="h-3 w-3 mr-1" />
                FasterCapital Partnership
              </Badge>
            </div>
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

        {/* Social Media & External Profiles Section */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect With Us</p>
          <div className="flex flex-wrap gap-3">
            {/* YouTube Button - links to indexable page */}
            <Link
              to="/youtube"
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium text-sm"
            >
              <Youtube className="h-5 w-5" />
              YouTube
            </Link>
            
            {/* Crunchbase Button - links to indexable page */}
            <Link
              to="/crunchbase"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              Crunchbase
            </Link>
            
            {/* Trustpilot Button */}
            <a
              href="https://www.trustpilot.com/review/safeorstolen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors font-medium text-sm"
            >
              <Star className="h-4 w-4" />
              Trustpilot
            </a>
            
            {/* PRLog Button */}
            <a
              href="https://biz.prlog.org/SafeOrStolen/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              PRLog
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>© {currentYear} SafeOrStolen.</span>
            <span>All rights reserved.</span>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>to protect buyers & sellers</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-8 pt-8 border-t border-sos-orange/20">
          <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
            <Badge variant="outline" className="border-green-500/30 text-green-400">
              <Lock className="h-3 w-3 mr-1" />
              256-bit SSL Encryption
            </Badge>
            <Badge variant="outline" className="border-blue-500/30 text-blue-400">
              <Shield className="h-3 w-3 mr-1" />
              100+ Databases
            </Badge>
            <Badge variant="outline" className="border-purple-500/30 text-purple-400">
              <Smartphone className="h-3 w-3 mr-1" />
              Mobile App Available
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-500">
            <div>
              <p className="mb-2 font-medium text-gray-400">Security</p>
              <p>Enterprise-grade encryption protecting your data and searches.</p>
            </div>
            <div>
              <p className="mb-2 font-medium text-gray-400">Database Access</p>
              <p>Multi-database cross-reference verification for accurate results.</p>
            </div>
            <div>
              <p className="mb-2 font-medium text-gray-400">Mobile App</p>
              <p>Only stolen item verification service with dedicated mobile app and barcode scanning.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

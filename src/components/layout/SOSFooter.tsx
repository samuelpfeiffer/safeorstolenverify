import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Twitter, Linkedin, Mail, Shield } from 'lucide-react';
import { handleExternalNavigation } from '@/utils/navigationUtils';
import { Logo } from '@/components/common/Logo';

export const SOSFooter: React.FC = () => {
  const year = new Date().getFullYear();
  
  const footerSections = [
    {
      title: 'Verification',
      links: [
        { label: 'Verify Items', to: '/verify' },
        { label: 'IMEI Checker', to: '/imei-checker' },
        { label: 'VIN Checker', to: '/vin-checker' },
        { label: 'Serial Checker', to: '/serial-number-checker' },
        { label: 'Mobile App', to: '/mobile-app' },
      ]
    },
    {
      title: 'For Businesses',
      links: [
        { label: 'Pawn Shops', to: '/for-pawn-shops' },
        { label: 'Dealers', to: '/for-dealers' },
        { label: 'Marketplaces', to: '/for-marketplaces' },
        { label: 'Auction Houses', to: '/for-auction-houses' },
        { label: 'All Businesses', to: '/for-businesses' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog & Guides', to: '/blog' },
        { label: 'How It Works', to: '/how-it-works' },
        { label: 'FAQ', to: '/faq' },
        { label: 'State VIN Lookups', to: '/california-vin-lookup' },
        { label: 'Verification Guide', to: '/blog/complete-verification-guide' },
        { label: 'Safety Tips', to: '/blog/ultimate-marketplace-buyers-guide' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' },
        { label: 'Careers', to: '/careers' },
        { label: 'Press', to: '/press' },
        { label: 'For Brands', to: '/for-brands' },
        { label: 'Transparency', to: '/transparency' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', to: '/terms' },
        { label: 'Privacy Policy', to: '/privacy' },
        { label: 'Disclaimer', to: '/disclaimer' },
        { label: 'Cookies', to: '/cookies' },
        { label: 'Security', to: '/security' },
      ]
    }
  ];

  return (
    <footer className="bg-sos-dark border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Logo & Description Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Logo size="md" linkTo="/" />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                The only mobile app that verifies stolen phones, vehicles, electronics, and firearms instantly.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>Protecting buyers & sellers</span>
              </div>
            </div>

            {/* Footer Links Columns */}
            {footerSections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.to}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Section */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-center sm:text-left">
                <p className="text-xs text-muted-foreground mb-1">Accelerated By</p>
                <a
                  href="https://fastercapital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold hover:text-primary transition-colors fc-gradient-text"
                  title="FasterCapital - Accelerating our mission"
                  aria-label="Visit FasterCapital website"
                >
                  FasterCapital
                </a>
              </div>
              <img
                src="/images/partners/fastercapital-logo.png"
                alt="FasterCapital official logo"
                className="w-12 h-12 object-contain"
                loading="lazy"
              />
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleExternalNavigation('https://www.youtube.com/@safeorstolenofficially', true)}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit SafeOrStolen YouTube channel"
              >
                <Youtube className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleExternalNavigation('https://twitter.com/safeorstolen', true)}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit SafeOrStolen on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleExternalNavigation('https://linkedin.com/company/safeorstolen', true)}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit SafeOrStolen on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Contact SafeOrStolen"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {year} SafeOrStolen. All rights reserved.
            </p>
            <p className="text-xs">
              Protecting buyers and sellers worldwide. Verify before you buy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

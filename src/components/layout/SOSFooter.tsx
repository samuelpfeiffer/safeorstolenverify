import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Twitter, Linkedin, Mail, Shield, ExternalLink } from 'lucide-react';
import { handleExternalNavigation } from '@/utils/navigationUtils';
import { Logo } from '@/components/common/Logo';
import { TrustpilotBadge } from '@/components/social-proof/TrustpilotBadge';

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
        { label: 'Check Phone', to: '/check-phone' },
        { label: 'Check Car', to: '/check-car' },
        { label: 'Check Bike', to: '/check-bike' },
        { label: 'Mobile App', to: '/app' },
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
        { label: 'Pricing', to: '/pricing' },
        { label: 'Testimonials', to: '/testimonials' },
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

        {/* Featured In Section */}
        <div className="border-t border-border py-6">
          <div className="text-center mb-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Featured In & Verified By</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <TrustpilotBadge variant="footer" />
            <button
              onClick={() => handleExternalNavigation('https://www.crunchbase.com/organization/safe-or-stolen', true)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 hover:bg-background/80 transition-colors border border-border"
              aria-label="View SafeOrStolen on Crunchbase"
            >
              <span className="text-xs font-bold text-blue-500">Crunchbase</span>
              <ExternalLink className="h-3 w-3 text-muted-foreground" />
            </button>
            <button
              onClick={() => handleExternalNavigation('https://biz.prlog.org/SafeOrStolen/', true)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 hover:bg-background/80 transition-colors border border-border"
              aria-label="View SafeOrStolen Press Room"
            >
              <span className="text-xs font-bold text-purple-500">PRLog</span>
              <ExternalLink className="h-3 w-3 text-muted-foreground" />
            </button>
            <div className="flex items-center gap-2">
              <img
                src="/images/partners/fastercapital-logo.png"
                alt="FasterCapital official logo"
                className="w-8 h-8 object-contain"
                loading="lazy"
              />
              <a
                href="https://fastercapital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold hover:text-primary transition-colors fc-gradient-text"
                title="FasterCapital - Accelerating our mission"
              >
                FasterCapital
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleExternalNavigation('https://www.youtube.com/@safeorstolen', true)}
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
            <p className="text-xs text-muted-foreground">
              Follow us for updates and safety tips
            </p>
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

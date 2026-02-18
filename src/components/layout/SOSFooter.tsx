import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Twitter, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { handleExternalNavigation } from '@/utils/navigationUtils';
import { Logo } from '@/components/common/Logo';

export const SOSFooter: React.FC = () => {
  const year = new Date().getFullYear();
  const [showAllLinks, setShowAllLinks] = useState(false);
  
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
        { label: 'Firearms Check', to: '/firearms-check' },
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
        { label: 'Compare Plans', to: '/compare' },
        { label: 'Testimonials', to: '/testimonials' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', to: '/about' },
        { label: 'Press Kit', to: '/press-kit' },
        { label: 'Terms', to: '/terms' },
        { label: 'Privacy', to: '/privacy' },
      ]
    },
  ];

  const sitemapSections = [
    {
      title: 'State VIN Checks',
      links: [
        { label: 'California', to: '/california-vin-lookup' },
        { label: 'Texas', to: '/texas-vin-lookup' },
        { label: 'Florida', to: '/florida-vin-lookup' },
        { label: 'New York', to: '/new-york-vin-lookup' },
        { label: 'Illinois', to: '/illinois-vin-lookup' },
        { label: 'Georgia', to: '/georgia-vin-lookup' },
        { label: 'Pennsylvania', to: '/pennsylvania-vin-lookup' },
        { label: 'Ohio', to: '/ohio-vin-lookup' },
        { label: 'North Carolina', to: '/north-carolina-vin-lookup' },
        { label: 'Washington', to: '/washington-vin-lookup' },
      ]
    },
    {
      title: 'License Plates',
      links: [
        { label: 'California', to: '/california-license-plate-lookup' },
        { label: 'Texas', to: '/texas-license-plate-lookup' },
        { label: 'Florida', to: '/florida-license-plate-lookup' },
        { label: 'New York', to: '/new-york-license-plate-lookup' },
        { label: 'Illinois', to: '/illinois-license-plate-lookup' },
      ]
    },
    {
      title: 'Marketplaces',
      links: [
        { label: 'Facebook Marketplace', to: '/facebook-marketplace-stolen-check' },
        { label: 'Craigslist', to: '/craigslist-safety-verification' },
        { label: 'OfferUp', to: '/offerup-verify-not-stolen' },
        { label: 'eBay', to: '/ebay-stolen-item-check' },
      ]
    },
    {
      title: 'Compare',
      links: [
        { label: 'vs CheckMEND', to: '/vs-checkmend' },
        { label: 'vs IMEI.info', to: '/vs-imeiinfo' },
        { label: 'vs Swappa', to: '/vs-swappa' },
        { label: 'vs Carfax', to: '/vs-carfax' },
        { label: 'vs AutoCheck', to: '/vs-autocheck' },
      ]
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <Logo size="md" linkTo="/" />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
                The verification platform for secondhand buyers, sellers, and businesses. Results in 3 seconds.
              </p>
              
              {/* Social */}
              <div className="mt-6 flex items-center gap-3">
                {[
                  { icon: Youtube, url: 'https://www.youtube.com/@safeorstolen', label: 'YouTube' },
                  { icon: Twitter, url: 'https://x.com/SafeOrStolen123', label: 'X' },
                  { icon: Linkedin, url: 'https://linkedin.com/company/safeorstolen', label: 'LinkedIn' },
                ].map((social) => (
                  <button
                    key={social.label}
                    onClick={() => handleExternalNavigation(social.url, true)}
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {footerSections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.to}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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

        {/* Expandable Sitemap */}
        <div className="border-t border-border">
          <button
            onClick={() => setShowAllLinks(!showAllLinks)}
            className="w-full py-4 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {showAllLinks ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            {showAllLinks ? 'Hide Site Map' : 'View Full Site Map'}
          </button>
          
          {showAllLinks && (
            <div className="pb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {sitemapSections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link to={link.to} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {year} SafeOrStolen. All rights reserved.</p>
            <p className="text-xs">Protecting buyers and sellers across the United States.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

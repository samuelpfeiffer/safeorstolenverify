import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Twitter, Linkedin, Shield, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { handleExternalNavigation } from '@/utils/navigationUtils';
import { Logo } from '@/components/common/Logo';
import { TrustpilotBadge } from '@/components/social-proof/TrustpilotBadge';

export const SOSFooter: React.FC = () => {
  const year = new Date().getFullYear();
  const [showAllLinks, setShowAllLinks] = useState(false);
  
  // Main footer sections - always visible
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
        { label: 'Free Tools', to: '/free-tools' },
        { label: 'Testimonials', to: '/testimonials' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', to: '/about' },
        { label: 'App Features', to: '/app/features' },
        { label: 'Download App', to: '/download' },
        { label: 'Press Kit', to: '/press-kit' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', to: '/terms' },
        { label: 'Privacy Policy', to: '/privacy' },
      ]
    }
  ];

  // Comprehensive sitemap links - shown when expanded
  const sitemapSections = [
    {
      title: 'State VIN Checks',
      links: [
        { label: 'California VIN', to: '/california-vin-lookup' },
        { label: 'Texas VIN', to: '/texas-vin-lookup' },
        { label: 'Florida VIN', to: '/florida-vin-lookup' },
        { label: 'New York VIN', to: '/new-york-vin-lookup' },
        { label: 'Illinois VIN', to: '/illinois-vin-lookup' },
        { label: 'Georgia VIN', to: '/georgia-vin-lookup' },
        { label: 'Pennsylvania VIN', to: '/pennsylvania-vin-lookup' },
        { label: 'Ohio VIN', to: '/ohio-vin-lookup' },
        { label: 'North Carolina VIN', to: '/north-carolina-vin-lookup' },
        { label: 'Washington VIN', to: '/washington-vin-lookup' },
      ]
    },
    {
      title: 'License Plate Lookup',
      links: [
        { label: 'California Plates', to: '/california-license-plate-lookup' },
        { label: 'Texas Plates', to: '/texas-license-plate-lookup' },
        { label: 'Florida Plates', to: '/florida-license-plate-lookup' },
        { label: 'New York Plates', to: '/new-york-license-plate-lookup' },
        { label: 'Illinois Plates', to: '/illinois-license-plate-lookup' },
        { label: 'Georgia Plates', to: '/georgia-license-plate-lookup' },
        { label: 'Pennsylvania Plates', to: '/pennsylvania-license-plate-lookup' },
        { label: 'Ohio Plates', to: '/ohio-license-plate-lookup' },
        { label: 'NC Plates', to: '/north-carolina-license-plate-lookup' },
        { label: 'Washington Plates', to: '/washington-license-plate-lookup' },
      ]
    },
    {
      title: 'City Verification',
      links: [
        { label: 'Los Angeles', to: '/stolen-check-los-angeles' },
        { label: 'New York City', to: '/stolen-check-new-york-city' },
        { label: 'Chicago', to: '/stolen-check-chicago' },
        { label: 'Houston', to: '/stolen-check-houston' },
        { label: 'Phoenix', to: '/stolen-check-phoenix' },
        { label: 'Philadelphia', to: '/stolen-check-philadelphia' },
        { label: 'San Antonio', to: '/stolen-check-san-antonio' },
        { label: 'San Diego', to: '/stolen-check-san-diego' },
        { label: 'Dallas', to: '/stolen-check-dallas' },
        { label: 'San Jose', to: '/stolen-check-san-jose' },
      ]
    },
    {
      title: 'Marketplace Safety',
      links: [
        { label: 'Facebook Marketplace', to: '/facebook-marketplace-stolen-check' },
        { label: 'Craigslist Safety', to: '/craigslist-safety-verification' },
        { label: 'OfferUp Verify', to: '/offerup-verify-not-stolen' },
        { label: 'eBay Check', to: '/ebay-stolen-item-check' },
      ]
    },
    {
      title: 'Item Checks',
      links: [
        { label: 'Check Bike', to: '/check-bike' },
        { label: 'Check Laptop', to: '/check-laptop' },
        { label: 'Check Electronics', to: '/check-electronics' },
        { label: 'Check E-Bike', to: '/check-ebike' },
        { label: 'Check Tools', to: '/check-tools' },
        { label: 'Check Jewelry', to: '/check-jewelry' },
        { label: 'Check Boat', to: '/check-boat' },
        { label: 'Check Appliances', to: '/check-appliances' },
        { label: 'License Plates', to: '/license-plate-lookup' },
      ]
    },
    {
      title: 'Compare Services',
      links: [
        { label: 'vs CheckMEND', to: '/vs-checkmend' },
        { label: 'vs IMEI.info', to: '/vs-imeiinfo' },
        { label: 'vs Swappa', to: '/vs-swappa' },
        { label: 'vs Carfax', to: '/vs-carfax' },
        { label: 'vs AutoCheck', to: '/vs-autocheck' },
      ]
    },
    {
      title: 'Popular Guides',
      links: [
        { label: 'Check if Phone Stolen', to: '/blog/how-to-check-if-phone-stolen' },
        { label: 'Check if iPhone Stolen', to: '/blog/how-to-check-if-iphone-stolen' },
        { label: 'Complete VIN Guide', to: '/blog/complete-vin-guide' },
        { label: 'Complete IMEI Guide', to: '/blog/complete-imei-guide-protect-yourself' },
        { label: 'Marketplace Safety', to: '/blog/ultimate-marketplace-buyers-guide' },
        { label: 'FB Marketplace Scams', to: '/blog/facebook-marketplace-scams' },
        { label: 'Scammer Tactics', to: '/blog/scammer-tactics-exposed' },
        { label: 'Pawn Shop Guide', to: '/blog/pawn-shop-stolen-item-verification' },
      ]
    },
    {
      title: 'More Resources',
      links: [
        { label: 'Is My Phone Stolen?', to: '/is-my-phone-stolen' },
        { label: 'Is This Car Stolen?', to: '/is-this-car-stolen' },
        { label: 'Is This Laptop Stolen?', to: '/is-this-laptop-stolen' },
        { label: 'Is This Bike Stolen?', to: '/is-this-bike-stolen' },
        { label: 'Is This Gun Stolen?', to: '/is-this-gun-stolen' },
        { label: 'Report Stolen', to: '/report-stolen' },
        { label: 'Stolen Database', to: '/database' },
        { label: 'YouTube Channel', to: '/youtube' },
      ]
    },
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
                Carfax for Everything - Buy and Sell. Verify any secondhand item in 3 seconds.
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

        {/* Expanded Sitemap Links */}
        <div className="border-t border-border">
          <button
            onClick={() => setShowAllLinks(!showAllLinks)}
            className="w-full py-4 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {showAllLinks ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Hide Site Map
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                View Full Site Map (100+ Pages)
              </>
            )}
          </button>
          
          {showAllLinks && (
            <div className="py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {sitemapSections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          to={link.to}
                          className="text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
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

        {/* Featured In Section */}
        <div className="border-t border-border py-6">
          <div className="text-center mb-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Find Us On</p>
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
            <a
              href="https://fastercapital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 hover:bg-background/80 transition-colors border border-border"
              title="FasterCapital Partnership"
            >
              <span className="text-xs font-bold text-emerald-500">FasterCapital</span>
              <ExternalLink className="h-3 w-3 text-muted-foreground" />
            </a>
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
              Protecting buyers and sellers worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
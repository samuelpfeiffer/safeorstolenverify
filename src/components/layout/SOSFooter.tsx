import React, { useState } from 'react';
import { Link } from '@/lib/router-compat';
import { Youtube, Twitter, ChevronDown, ChevronUp } from 'lucide-react';
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
 { label: 'License Plates', to: '/license-plate-lookup' },
 { label: 'Check Phone', to: '/check-phone' },
 { label: 'Check Car', to: '/vin-checker' },
 { label: 'Firearms Check', to: '/firearms-check' },
 { label: 'URL Checker', to: '/marketplace-url-checker' },
 { label: 'Scam Checker', to: '/scam-checker' },
 { label: 'Seller Badge', to: '/seller-badge' },
 { label: 'Mobile App', to: '/app' },
 ]
 },
 {
 title: 'For Businesses',
 links: [
 { label: 'All Businesses', to: '/for-businesses' },
 { label: 'Pawn Shops', to: '/for-pawn-shops' },
 { label: 'Dealers', to: '/for-dealers' },
 { label: 'Marketplaces', to: '/for-marketplaces' },
 { label: 'Auction Houses', to: '/for-auction-houses' },
 { label: 'For Sellers', to: '/for-sellers' },
 { label: 'Electronics Resellers', to: '/for-electronics-resellers' },
 { label: 'Insurance', to: '/for-insurance-companies' },
 { label: 'Law Enforcement', to: '/for-law-enforcement' },
 { label: 'API Docs', to: '/api' },
 ]
 },
 {
 title: 'Resources',
 links: [
 { label: 'Blog & Guides', to: '/blog' },
 { label: 'How It Works', to: '/how-it-works' },
 { label: 'FAQ', to: '/faq' },
 { label: 'Pricing', to: '/pricing' },
 { label: 'Compare Services', to: '/compare' },
 { label: 'Testimonials', to: '/testimonials' },
 { label: 'Data Sources', to: '/data-sources' },
 { label: 'Resource Center', to: '/resource-center' },
 { label: 'News', to: '/news' },
 { label: 'Stolen Database', to: '/stolen-database' },
 ]
 },
 {
 title: 'Company',
 links: [
 { label: 'About Us', to: '/about' },
 { label: 'Press Kit', to: '/press-kit' },
 { label: 'Press Release', to: '/press-release' },
 { label: 'Community', to: '/community' },
 { label: 'Terms', to: '/terms' },
 { label: 'Privacy', to: '/privacy' },
 { label: 'Sitemap', to: '/sitemap' },
 ]
 },
 ];

 const sitemapSections = [
 {
 title: 'Item Checks',
 links: [
 { label: 'Check iPhone', to: '/check-iphone-stolen' },
 { label: 'Check Samsung', to: '/check-samsung-stolen' },
 { label: 'Check Android', to: '/check-android' },
 { label: 'Check Laptop', to: '/check-laptop' },
 { label: 'Check Bike', to: '/check-bike' },
 { label: 'Check E-Bike', to: '/check-ebike' },
 { label: 'Check Xbox', to: '/check-xbox' },
 { label: 'Check PS5', to: '/check-ps5' },
 { label: 'Check Boat', to: '/check-boat' },
 { label: 'Check Jewelry', to: '/check-jewelry' },
 { label: 'Check Tools', to: '/check-tools' },
 { label: 'Check Appliances', to: '/check-appliances' },
 { label: 'Check Electronics', to: '/check-electronics' },
 { label: 'Check Camera', to: '/check-camera-stolen' },
 { label: 'Check Watch', to: '/check-watch-stolen' },
 ]
 },
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
 title: 'License Plates (Top 11)',
 links: [
 { label: 'California', to: '/california-license-plate-lookup' },
 { label: 'Texas', to: '/texas-license-plate-lookup' },
 { label: 'Florida', to: '/florida-license-plate-lookup' },
 { label: 'New York', to: '/new-york-license-plate-lookup' },
 { label: 'Illinois', to: '/illinois-license-plate-lookup' },
 { label: 'Georgia', to: '/georgia-license-plate-lookup' },
 { label: 'Pennsylvania', to: '/pennsylvania-license-plate-lookup' },
 { label: 'Ohio', to: '/ohio-license-plate-lookup' },
 { label: 'North Carolina', to: '/north-carolina-license-plate-lookup' },
 { label: 'Washington', to: '/washington-license-plate-lookup' },
 { label: 'Arizona', to: '/arizona-license-plate-lookup' },
 ]
 },
 {
 title: 'All Marketplaces',
 links: [
 { label: 'Facebook Marketplace', to: '/facebook-marketplace-stolen-check' },
 { label: 'Craigslist', to: '/craigslist-safety-verification' },
 { label: 'OfferUp', to: '/offerup-verify-not-stolen' },
 { label: 'eBay', to: '/ebay-stolen-item-check' },
 { label: 'Mercari', to: '/mercari-stolen-check' },
 { label: 'Poshmark', to: '/poshmark-stolen-check' },
 { label: 'StockX', to: '/stockx-verification' },
 { label: 'Letgo', to: '/letgo-stolen-check' },
 ]
 },
 {
 title: 'Compare Services',
 links: [
 { label: 'Why choose SafeOrStolen', to: '/vs-checkmend' },
 { label: 'vs IMEI.info', to: '/vs-imeiinfo' },
 { label: 'vs Swappa', to: '/vs-swappa' },
 { label: 'vs Carfax', to: '/vs-carfax' },
 { label: 'vs AutoCheck', to: '/vs-autocheck' },
 { label: 'vs StolenRegister', to: '/vs-stolenregister' },
 { label: 'Bike Check Alternative', to: '/vs-bikeindex' },
 { label: 'vs DeviceCheck', to: '/vs-devicecheck-ca' },
 { label: 'vs FastBound', to: '/vs-fastbound' },
 { label: 'Carfax Alternative', to: '/carfax-alternative-free' },
 { label: 'Vehicle Check Alternative', to: '/nicb-alternative' },
 { label: 'Firearm Check Comparison', to: '/hotgunz-alternative' },
 { label: 'Best Checkers 2026', to: '/best-stolen-item-checkers-2026' },
 ]
 },
 {
 title: 'City Checks',
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
 { label: 'Miami', to: '/stolen-check-miami' },
 ]
 },
 {
 title: 'Hub Pages',
 links: [
 { label: 'Firearms Serial Check', to: '/firearms-serial-number-check' },
 { label: 'Free Vehicle Check', to: '/vin-checker' },
 { label: 'Serial Number Check', to: '/serial-number-stolen-check' },
 { label: 'Stolen Gun Database', to: '/stolen-gun-database' },
 { label: 'Gun Serial Lookup', to: '/gun-serial-number-lookup' },
 { label: 'Stolen Phone Checker', to: '/stolen-phone-checker' },
 { label: 'Phone Blacklist Check', to: '/phone-blacklist-check' },
 { label: 'Is My Phone Stolen?', to: '/is-my-phone-stolen' },
 { label: 'Is This Car Stolen?', to: '/vin-checker' },
 { label: 'TheftAZ', to: '/theftaz' },
 ]
 },
 {
 title: 'Guides',
 links: [
 { label: 'eBay Buyer Protection', to: '/guides/ebay-buyer-protection' },
 { label: 'Craigslist Verification', to: '/guides/verify-craigslist-items' },
 { label: 'OfferUp Scam Protection', to: '/guides/offerup-scam-protection' },
 { label: 'FB Marketplace Safety', to: '/facebook-marketplace-safety' },
 { label: 'OfferUp Safety', to: '/offerup-safety' },
 { label: 'Comprehensive Guide', to: '/comprehensive-guide' },
 { label: 'How to Check Phone', to: '/how-to-check-if-phone-stolen' },
 { label: 'How to Check Car', to: '/how-to-check-if-car-stolen' },
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
 <p>© 2025–{year} SafeOrStolen. All rights reserved.</p>
 <p className="text-xs">Protecting buyers and sellers across the United States.</p>
 </div>
 </div>
 </div>
 </footer>
 );
};
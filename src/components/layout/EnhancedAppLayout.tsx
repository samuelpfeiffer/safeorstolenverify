import React from 'react';
import { Outlet } from 'react-router-dom';
import { EnhancedNavigation } from '@/components/navigation/EnhancedNavigation';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { InternalLinking } from '@/components/navigation/InternalLinking';
import { OptimizedContent } from '@/components/seo/OptimizedContent';
import { SitemapGenerator } from '@/components/seo/SitemapGenerator';
import { EnhancedFAQ } from '@/components/seo/EnhancedFAQ';

export const EnhancedAppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      {/* Enhanced Navigation */}
      <EnhancedNavigation />
      
      {/* Breadcrumb Navigation */}
      <Breadcrumbs />
      
      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Internal Linking Component (contextual) */}
      <InternalLinking />
      
      {/* Enhanced Footer with SEO Links */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Verification Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Verification Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/imei-check" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Free IMEI Check
                  </a>
                </li>
                <li>
                  <a href="/vin-verification" className="text-gray-300 hover:text-blue-400 transition-colors">
                    VIN Verification
                  </a>
                </li>
                <li>
                  <a href="/serial-number-checker" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Serial Number Lookup
                  </a>
                </li>
                <li>
                  <a href="/stolen-item-checker" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Stolen Item Checker
                  </a>
                </li>
                <li>
                  <a href="/check-phone" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Phone Verification
                  </a>
                </li>
                <li>
                  <a href="/check-car" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Car History Check
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources & Guides */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Resources & Guides
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/buyer-guide" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Buyer's Guide
                  </a>
                </li>
                <li>
                  <a href="/seller-guide" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Seller's Guide
                  </a>
                </li>
                <li>
                  <a href="/download-app" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Download Mobile App
                  </a>
                </li>
                <li>
                  <a href="/ultimate-guide-buying-safely" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Ultimate Buying Guide
                  </a>
                </li>
                <li>
                  <a href="/how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">
                    FAQ & Help
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Blog & Insights
                  </a>
                </li>
                <li>
                  <a href="/vs/checkmend" className="text-gray-300 hover:text-blue-400 transition-colors">
                    vs CheckMEND
                  </a>
                </li>
              </ul>
            </div>

            {/* Business Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Business Solutions
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/marketplace-integration" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Marketplace API
                  </a>
                </li>
                <li>
                  <a href="/pawn-shops" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Pawn Shop Tools
                  </a>
                </li>
                <li>
                  <a href="/auction-houses" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Auction House Solutions
                  </a>
                </li>
                <li>
                  <a href="/enterprise-demo" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Enterprise Demo
                  </a>
                </li>
                <li>
                  <a href="/api-docs" className="text-gray-300 hover:text-blue-400 transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Pricing Plans
                  </a>
                </li>
              </ul>
            </div>

            {/* Company & Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Company & Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                    About SafeOrStolen
                  </a>
                </li>
                <li>
                  <a href="/our-story" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="/transparency" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Trust & Transparency
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2025 SafeOrStolen. Protecting buyers and sellers from $2.3M+ in prevented fraud.
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <a 
                  href="/stolen-item-checker" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Quick Verify - Free
                </a>
                <a href="/sitemap" className="text-gray-400 hover:text-white text-sm">
                  Sitemap
                </a>
                <a href="/feed.xml" className="text-gray-400 hover:text-white text-sm">
                  RSS
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Hidden SEO and Sitemap Components */}
      <SitemapGenerator />
    </div>
  );
};
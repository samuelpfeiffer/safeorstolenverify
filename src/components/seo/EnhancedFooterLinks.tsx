import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Search, FileText, Users, Phone, Car, Laptop } from 'lucide-react';

interface FooterSection {
  title: string;
  icon: React.ReactNode;
  links: Array<{
    href: string;
    text: string;
    external?: boolean;
  }>;
}

export const EnhancedFooterLinks: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: 'Quick Verify',
      icon: <Search className="h-5 w-5" />,
      links: [
        { href: '/imei-checker', text: 'IMEI Check - Verify Phone' },
        { href: '/vin-checker', text: 'VIN Check - Verify Car' },
        { href: '/serial-number-checker', text: 'Serial Number Checker' },
        { href: '/verify', text: 'General Item Checker' },
        { href: '/check-electronics', text: 'Check Electronics' }
      ]
    },
    {
      title: 'Safety Guides',
      icon: <Shield className="h-5 w-5" />,
      links: [
        { href: '/blog/how-to-check-if-phone-stolen', text: 'How to Check if Stolen' },
        { href: '/blog/scammer-tactics-exposed', text: 'Avoid Stolen Goods' },
        { href: '/blog/complete-verification-guide', text: 'Ultimate Safety Guide' },
        { href: '/blog/theft-trends-report-2024', text: '2026 Theft Statistics' },
        { href: '/how-it-works', text: 'Comprehensive Guide' }
      ]
    },
    {
      title: 'User Stories',
      icon: <Users className="h-5 w-5" />,
      links: [
        { href: '/testimonials', text: 'Success Stories' },
        { href: '/blog/real-user-stories', text: 'Real User Stories' },
        { href: '/about', text: 'About Us' },
        { href: '/about', text: 'Data Sources' },
        { href: '/about', text: 'Accuracy Guarantee' }
      ]
    },
    {
      title: 'Help & Support',
      icon: <FileText className="h-5 w-5" />,
      links: [
        { href: '/faq', text: 'FAQ - Common Questions' },
        { href: '/how-it-works', text: 'How It Works' },
        { href: '/about', text: 'Contact Support' },
        { href: '/about', text: 'API Documentation' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: <Users className="h-5 w-5" />,
      links: [
        { href: '/for-businesses', text: 'Enterprise Demo' },
        { href: '/for-marketplaces', text: 'Marketplace Integration' },
        { href: '/pricing', text: 'Pricing Plans' },
        { href: '/for-dealers', text: 'Partnerships' },
        { href: '/about', text: 'Developer API' }
      ]
    }
  ];

  const quickAccessItems = [
    { href: '/check-phone', text: 'Check Phone', icon: <Phone className="h-4 w-4" /> },
    { href: '/check-car', text: 'Check Car', icon: <Car className="h-4 w-4" /> },
    { href: '/check-electronics', text: 'Check Electronics', icon: <Laptop className="h-4 w-4" /> }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Quick Access Bar */}
        <div className="mb-12 p-6 bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-center">Quick Verification Access</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {quickAccessItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-white font-medium"
              >
                {item.icon}
                {item.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 flex items-center gap-2 text-primary">
                {section.icon}
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link.text}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <h4 className="font-semibold mb-4">Trusted Verification Service</h4>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Helping Prevent Scams</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-400" />
                <span>Growing Community</span>
              </div>
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-yellow-400" />
                <span>Items Verified Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-purple-400" />
                <span>Real-time Results</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="text-2xl font-bold text-primary">
                SafeOrStolen
              </Link>
              <p className="text-gray-300 text-sm mt-1">
                Verify before you buy - protecting consumers from stolen goods
              </p>
            </div>
            <div className="flex gap-6 text-sm text-gray-300">
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/about" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400 mt-6">
            © {new Date().getFullYear()} SafeOrStolen. All rights reserved.
            <br />
            Protecting consumers from stolen goods and marketplace fraud since 2017.
          </div>
        </div>
      </div>
    </footer>
  );
};
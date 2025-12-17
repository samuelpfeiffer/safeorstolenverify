import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSafeLocation } from '@/hooks/useSafeLocation';
import { Menu, X, Shield, ChevronDown, Search, Globe, FileText, Users, Settings, Zap, Download, Smartphone } from 'lucide-react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { trackSEOInteraction } from '@/utils/seo/analyticsOptimizer';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  isExternal?: boolean;
  keywords?: string[];
  children?: NavigationItem[];
}

export const EnhancedNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isAuthenticated, user, signOut } = useUnifiedAuth();
  const location = useSafeLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location?.pathname]);

  // SEO-optimized navigation structure
  const verificationServices: NavigationItem[] = [
    {
      label: 'IMEI Checker App',
      href: '/imei-check',
      description: 'Instant phone verification with barcode scanning',
      icon: Shield,
      keywords: ['IMEI checker app', 'stolen phone check', 'mobile device verification']
    },
    {
      label: 'VIN Checker', 
      href: '/vin-checker',
      description: 'Check vehicle theft status instantly',
      icon: Search,
      keywords: ['VIN checker app', 'stolen car check', 'vehicle verification']
    },
    {
      label: 'Serial Number Lookup',
      href: '/serial-number-checker',
      description: 'Verify electronics with barcode scanner',
      icon: FileText,
      keywords: ['serial number check', 'barcode stolen checker', 'instant verification']
    },
    {
      label: 'Barcode Stolen Checker',
      href: '/verify',
      description: 'Instant scanning - 3 second verification',
      keywords: ['barcode stolen checker', 'instant stolen verification', 'scan serial number']
    },
    {
      label: 'License Plate Lookup',
      href: '/license-plate-lookup',
      description: 'All 50 US states coverage',
      keywords: ['license plate lookup', 'stolen car check', 'vehicle plate verification']
    },
    {
      label: 'Firearms Verification',
      href: '/firearms-check',
      description: 'Only app with gun serial verification',
      keywords: ['firearms verification', 'gun serial check', 'firearms stolen checker']
    }
  ];

  const resourcesAndGuides: NavigationItem[] = [
    {
      label: 'Download Stolen Verification App',
      href: '/app',
      description: 'FREE iOS/Android app with barcode scanning',
      icon: Download,
      keywords: ['stolen verification app download', 'IMEI checker app', 'mobile app']
    },
    {
      label: 'How It Works',
      href: '/how-it-works',
      description: 'Learn our instant verification process',
      icon: Settings,
      keywords: ['how verification works', 'stolen goods process', 'safety guide']
    },
    {
      label: 'CheckMEND Alternative',
      href: '/vs-checkmend',
      description: 'Why we\'re better (and have an app)',
      keywords: ['CheckMEND alternative', 'better than CheckMEND', 'free CheckMEND']
    },
    {
      label: 'Blog - Verification Guides',
      href: '/blog',
      description: 'Expert guides and tips',
      keywords: ['verification guides', 'stolen item tips', 'safety articles']
    },
    {
      label: 'FAQ',
      href: '/faq',
      description: 'Common questions answered',
      keywords: ['verification FAQ', 'stolen goods questions', 'help center']
    },
    {
      label: 'Statistics 2024',
      href: '/stolen-goods-statistics-2024',
      description: 'Current theft and fraud data',
      keywords: ['theft statistics', 'fraud data', 'crime prevention stats']
    }
  ];

  const businessSolutions: NavigationItem[] = [
    {
      label: 'For Pawn Shops',
      href: '/for-pawn-shops',
      description: 'Instant verification for pawn businesses',
      icon: Globe,
      keywords: ['pawn shop verification', 'retail fraud prevention', 'business tools']
    },
    {
      label: 'For Dealers',
      href: '/for-dealers',
      description: 'Vehicle & electronics dealer protection',
      keywords: ['dealer verification', 'business protection', 'dealer tools']
    },
    {
      label: 'For Marketplaces',
      href: '/for-marketplaces',
      description: 'API integration for platforms',
      keywords: ['marketplace API', 'business integration', 'enterprise verification']
    },
    {
      label: 'For Auction Houses',
      href: '/for-auction-houses',
      description: 'Auction verification services',
      keywords: ['auction verification', 'consignment safety', 'high-value authentication']
    }
  ];

  const companyInfo: NavigationItem[] = [
    {
      label: 'About SafeOrStolen',
      href: '/about',
      description: 'The only stolen verification app globally',
      keywords: ['about SafeOrStolen', 'company mission', 'fraud prevention leader']
    },
    {
      label: 'Pricing - Free Trial',
      href: '/pricing',
      description: '2 free checks - no credit card',
      keywords: ['free trial', 'pricing plans', 'CheckMEND alternative pricing']
    },
    {
      label: 'FAQ',
      href: '/faq',
      description: 'Common questions answered',
      keywords: ['verification FAQ', 'stolen goods questions', 'help center']
    },
    {
      label: 'Contact Us',
      href: '/contact',
      description: 'Get expert help',
      keywords: ['contact support', 'expert help', 'fraud assistance']
    }
  ];

  const handleNavigationClick = (item: NavigationItem) => {
    trackSEOInteraction('navigation_click', `${item.label} - ${item.href}`, item.description);
  };

  const isActivePath = (path: string): boolean => {
    if (!location) return false;
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path));
  };

  const NavDropdown: React.FC<{
    title: string;
    items: NavigationItem[];
    triggerIcon?: React.ComponentType<{ className?: string }>;
  }> = ({ title, items, triggerIcon: TriggerIcon }) => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 h-10 px-4 py-2 text-sm font-medium transition-colors">
            <div className="flex items-center gap-2">
              {TriggerIcon && <TriggerIcon className="w-4 h-4" />}
              {title}
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-1 p-4 w-[400px] lg:w-[500px] lg:grid-cols-2">
              {items.map((item) => (
                <NavigationMenuLink key={item.href} asChild>
                  <Link
                    to={item.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                    onClick={() => handleNavigationClick(item)}
                  >
                    <div className="flex items-center gap-2 text-sm font-medium leading-none">
                      {item.icon && <item.icon className="w-4 h-4 text-blue-600 group-hover:text-blue-700" />}
                      {item.label}
                    </div>
                    {item.description && (
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  const MobileMenuItem: React.FC<{ item: NavigationItem; level?: number }> = ({ 
    item, 
    level = 0 
  }) => (
    <div className={`${level > 0 ? 'ml-4 border-l border-gray-200 dark:border-gray-700 pl-4' : ''}`}>
      <Link
        to={item.href}
        className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
          isActivePath(item.href)
            ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20'
            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800'
        }`}
        onClick={() => {
          handleNavigationClick(item);
          setIsMobileMenuOpen(false);
        }}
      >
        <div className="flex items-center gap-2">
          {item.icon && <item.icon className="w-4 h-4" />}
          {item.label}
        </div>
        {item.description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {item.description}
          </p>
        )}
      </Link>
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => trackSEOInteraction('logo_click', 'Homepage Navigation')}
            >
              <img src="/assets/SOS_logo.png" alt="SafeOrStolen Logo" className="w-8 h-8" />
              <span>SafeOrStolen</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <NavDropdown 
              title="Verification Services" 
              items={verificationServices}
              triggerIcon={Shield}
            />
            <NavDropdown 
              title="Guides & Resources"
              items={resourcesAndGuides}
              triggerIcon={FileText}
            />
            <NavDropdown 
              title="Business Solutions"
              items={businessSolutions}
              triggerIcon={Users}
            />
            <NavDropdown 
              title="Company"
              items={companyInfo}
              triggerIcon={Globe}
            />

            {/* Pricing Link */}
            <Link
              to="/pricing"
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isActivePath('/pricing')
                  ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800'
              }`}
              onClick={() => handleNavigationClick({ label: 'Pricing', href: '/pricing' })}
            >
              Pricing
            </Link>

            {/* Download App Link - NEW */}
            <Link
              to="/app"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm"
              onClick={() => handleNavigationClick({ label: 'Download Stolen Verification App', href: '/app' })}
            >
              <Smartphone className="w-4 h-4" />
              Download App
            </Link>
          </div>

          {/* User Menu and CTA */}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-md transition-colors">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs">
                        {user?.email?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="flex items-center gap-2">
                      <Search className="w-4 h-4" />
                      Search History
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/auth"
                  className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => trackSEOInteraction('auth_click', 'Sign In Navigation')}
                >
                  Sign In
                </Link>
                <Link
                  to="/verify"
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                  onClick={() => trackSEOInteraction('cta_click', 'Check Now - Free Navigation')}
                >
                  Check Now - Free
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-[80vh] overflow-y-auto">
            <div className="space-y-4">
              {/* Verification Services */}
              <div>
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Verification Services
                </h3>
                {verificationServices.map((item) => (
                  <MobileMenuItem key={item.href} item={item} />
                ))}
              </div>

              {/* Guides & Resources */}
              <div>
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Guides & Resources
                </h3>
                {resourcesAndGuides.map((item) => (
                  <MobileMenuItem key={item.href} item={item} />
                ))}
              </div>

              {/* Business Solutions */}
              <div>
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Business Solutions
                </h3>
                {businessSolutions.map((item) => (
                  <MobileMenuItem key={item.href} item={item} />
                ))}
              </div>

              {/* Company */}
              <div>
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Company
                </h3>
                {companyInfo.map((item) => (
                  <MobileMenuItem key={item.href} item={item} />
                ))}
              </div>

              {/* Pricing */}
              <div>
                <MobileMenuItem item={{ label: 'Pricing', href: '/pricing', description: 'Simple, transparent pricing' }} />
              </div>

              {/* Download App - NEW */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
                <Link
                  to="/app"
                  className="flex items-center justify-center gap-2 mx-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm"
                  onClick={() => {
                    handleNavigationClick({ label: 'Download App', href: '/app' });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Smartphone className="w-5 h-5" />
                  Download Mobile App
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
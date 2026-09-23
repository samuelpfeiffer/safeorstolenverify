import React from 'react';
import { Link } from '@/lib/router-compat';
import { trackSEOInteraction } from '@/utils/seo/analyticsOptimizer';
import { ExternalLink, ArrowRight, Shield, Search, FileText, Users } from 'lucide-react';

interface InternalLink {
  href: string;
  text: string;
  description?: string;
  category: 'verification' | 'guides' | 'business' | 'company';
  keywords?: string[];
  isHighPriority?: boolean;
}

interface InternalLinkingProps {
  currentPage?: string;
  relatedLinks?: InternalLink[];
  showCategoryIcons?: boolean;
  maxLinks?: number;
  layout?: 'horizontal' | 'vertical' | 'grid';
}

export const InternalLinking: React.FC<InternalLinkingProps> = ({
  currentPage = '',
  relatedLinks,
  showCategoryIcons = true,
  maxLinks = 6,
  layout = 'grid'
}) => {
  
  // Comprehensive internal linking strategy
  const allInternalLinks: InternalLink[] = [
    // High-priority verification services
    {
      href: '/verify',
      text: 'Free IMEI Verification',
      description: 'Check if phone is stolen in 30 seconds',
      category: 'verification',
      keywords: ['IMEI check', 'phone verification', 'stolen phone'],
      isHighPriority: true
    },
    {
      href: '/verify',
      text: 'VIN Lookup Service',
      description: 'Verify vehicle history and theft status',
      category: 'verification',
      keywords: ['VIN check', 'car verification', 'stolen vehicle'],
      isHighPriority: true
    },
    {
      href: '/verify',
      text: 'Serial Number Verification',
      description: 'Check electronics and equipment legitimacy',
      category: 'verification',
      keywords: ['serial number', 'electronics check', 'device verification'],
      isHighPriority: true
    },
    
    // Essential guides
    {
      href: '/blog/complete-verification-guide',
      text: 'Ultimate Safe Buying Guide 2025',
      description: 'Complete protection from stolen goods fraud',
      category: 'guides',
      keywords: ['safe buying', 'avoid stolen goods', 'purchase protection'],
      isHighPriority: true
    },
    {
      href: '/blog/carfax-vs-free-vin-alternatives',
      text: 'Carfax vs Free VIN Alternatives',
      description: 'Compare Carfax to free VIN check services',
      category: 'guides',
      keywords: ['carfax alternative', 'free carfax', 'free vin check'],
      isHighPriority: true
    },
    {
      href: '/how-it-works',
      text: 'How SafeOrStolen Works',
      description: 'Learn our verification process',
      category: 'guides',
      keywords: ['verification process', 'how it works', 'stolen goods detection']
    },
    {
      href: '/faq',
      text: 'Verification FAQ',
      description: 'Common questions about stolen goods verification',
      category: 'guides',
      keywords: ['verification FAQ', 'stolen goods questions', 'help']
    },
    
    // Business solutions
    {
      href: '/for-marketplaces',
      text: 'Marketplace API Integration',
      description: 'Protect your platform from stolen goods',
      category: 'business',
      keywords: ['marketplace API', 'business integration', 'fraud prevention']
    },
    {
      href: '/for-pawn-shops',
      text: 'Pawn Shop Verification Tools',
      description: 'Specialized tools for pawn industry',
      category: 'business',
      keywords: ['pawn shop tools', 'retail verification', 'business solutions']
    },
    {
      href: '/for-businesses',
      text: 'Enterprise Demo',
      description: 'See our business verification features',
      category: 'business',
      keywords: ['enterprise demo', 'business verification', 'API preview']
    },
    
    // Company and trust
    {
      href: '/testimonials',
      text: 'Success Stories & Testimonials',
      description: 'Real fraud prevention success stories',
      category: 'company',
      keywords: ['testimonials', 'success stories', 'fraud prevention results']
    },
    {
      href: '/about',
      text: 'Trust & Company Info',
      description: 'How we maintain accuracy and trust',
      category: 'company',
      keywords: ['about us', 'accuracy', 'trust factors']
    },
    {
      href: '/blog/theft-trends-report-2024',
      text: 'Theft Statistics 2024',
      description: 'Latest fraud and theft data insights',
      category: 'company',
      keywords: ['theft statistics', 'fraud data', 'crime trends']
    },
    
    // Additional verification services
    {
      href: '/check-phone',
      text: 'Check Phone Legitimacy',
      description: 'Comprehensive mobile device verification',
      category: 'verification',
      keywords: ['phone check', 'mobile verification', 'device safety']
    },
    {
      href: '/vin-checker',
      text: 'Check Car History',
      description: 'Vehicle verification and safety check',
      category: 'verification', 
      keywords: ['car check', 'vehicle safety', 'auto verification']
    },
    {
      href: '/check-electronics',
      text: 'Check Electronics Safety',
      description: 'Verify gadgets and electronics legitimacy',
      category: 'verification',
      keywords: ['electronics check', 'gadget verification', 'tech safety']
    },
    {
      href: '/firearms-check',
      text: 'Gun Serial Number Lookup Free',
      description: 'Free pistol and firearm serial number verification',
      category: 'verification',
      keywords: ['gun serial number lookup', 'firearm check', 'pistol serial lookup'],
      isHighPriority: true
    }
  ];

  // Filter out current page and select relevant links
  const getRelevantLinks = (): InternalLink[] => {
    let filteredLinks = allInternalLinks.filter(link => link.href !== currentPage);
    
    if (relatedLinks) {
      return relatedLinks.slice(0, maxLinks);
    }
    
    // Intelligent link selection based on current page
    const currentCategory = getCurrentPageCategory(currentPage);
    
    // Prioritize high-priority links and same category
    const prioritizedLinks = filteredLinks.sort((a, b) => {
      if (a.isHighPriority && !b.isHighPriority) return -1;
      if (!a.isHighPriority && b.isHighPriority) return 1;
      if (a.category === currentCategory && b.category !== currentCategory) return -1;
      if (a.category !== currentCategory && b.category === currentCategory) return 1;
      return 0;
    });
    
    return prioritizedLinks.slice(0, maxLinks);
  };

  const getCurrentPageCategory = (page: string): string => {
    if (page.includes('check') || page.includes('imei') || page.includes('vin') || page.includes('serial')) {
      return 'verification';
    }
    if (page.includes('guide') || page.includes('how') || page.includes('faq') || page.includes('blog')) {
      return 'guides';
    }
    if (page.includes('marketplace') || page.includes('enterprise') || page.includes('api') || page.includes('pawn')) {
      return 'business';
    }
    return 'company';
  };

  const getCategoryIcon = (category: string) => {
    const iconMap = {
      verification: Shield,
      guides: FileText,
      business: Users,
      company: Search
    };
    const Icon = iconMap[category as keyof typeof iconMap] || Search;
    return <Icon className="w-4 h-4" />;
  };

  const handleLinkClick = (link: InternalLink) => {
    trackSEOInteraction('internal_link_click', `${link.text} - ${link.href}`, link.description);
  };

  const relevantLinks = getRelevantLinks();

  if (relevantLinks.length === 0) {
    return null;
  }

  const layoutClasses = {
    horizontal: 'flex flex-wrap gap-2',
    vertical: 'space-y-2',
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
  };

  return (
    <div className="py-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Related Verification Services & Resources
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Explore more ways SafeOrStolen protects your purchases
          </p>
        </div>
        
        <div className={layoutClasses[layout]}>
          {relevantLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200"
              onClick={() => handleLinkClick(link)}
            >
              <div className="flex items-start gap-3">
                {showCategoryIcons && (
                  <div className="flex-shrink-0 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md text-blue-600 dark:text-blue-400">
                    {getCategoryIcon(link.category)}
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {link.text}
                    </h4>
                    {link.isHighPriority && (
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-xs font-medium rounded-[0.25rem]">
                        Popular
                      </span>
                    )}
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  
                  {link.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {link.description}
                    </p>
                  )}
                  
                  {link.keywords && link.keywords.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {link.keywords.slice(0, 3).map((keyword) => (
                        <span 
                          key={keyword}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-[0.25rem]"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Call-to-action for main verification */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Ready to Verify an Item?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Check IMEI, VIN, or serial numbers instantly - completely free
              </p>
            </div>
            <Link
              to="/verify"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => trackSEOInteraction('cta_click', 'Verify Now - Internal Linking')}
            >
              Verify Now - Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
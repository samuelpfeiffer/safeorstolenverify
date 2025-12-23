import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Car, Laptop, ShoppingBag, MapPin, FileText, Scale } from 'lucide-react';

type PageCategory = 'item' | 'marketplace' | 'business' | 'blog' | 'city' | 'comparison' | 'general';

interface RelatedPage {
  title: string;
  href: string;
  category: PageCategory;
}

interface RelatedPagesSectionProps {
  currentPage: string;
  currentCategory?: PageCategory;
  maxLinks?: number;
}

const allRelatedPages: RelatedPage[] = [
  // Item pages
  { title: 'Check iPhone IMEI', href: '/check-iphone-stolen', category: 'item' },
  { title: 'Check Samsung IMEI', href: '/check-samsung-stolen', category: 'item' },
  { title: 'VIN Checker', href: '/vin-checker', category: 'item' },
  { title: 'IMEI Checker', href: '/imei-checker', category: 'item' },
  { title: 'Car Stolen Check', href: '/check-car-stolen-vin', category: 'item' },
  { title: 'Laptop Serial Check', href: '/check-laptop-stolen', category: 'item' },
  { title: 'Bicycle Serial Check', href: '/check-bicycle-stolen', category: 'item' },
  
  // Marketplace pages
  { title: 'Facebook Marketplace Safety', href: '/facebook-marketplace-stolen-check', category: 'marketplace' },
  { title: 'Craigslist Verification', href: '/craigslist-safety-verification', category: 'marketplace' },
  { title: 'OfferUp Verification', href: '/offerup-verify-not-stolen', category: 'marketplace' },
  { title: 'eBay Stolen Check', href: '/ebay-stolen-item-check', category: 'marketplace' },
  
  // Comparison pages
  { title: 'Best IMEI Checkers 2025', href: '/comparisons/best-free-imei-checkers-2025', category: 'comparison' },
  { title: 'Top VIN Check Services', href: '/comparisons/top-vin-check-services-2025', category: 'comparison' },
  { title: 'SafeOrStolen vs IMEI.info', href: '/comparisons/safeorstolen-vs-imeiinfo', category: 'comparison' },
  { title: 'SafeOrStolen vs Swappa', href: '/comparisons/safeorstolen-vs-swappa', category: 'comparison' },
  { title: 'NICB VINCheck Alternative', href: '/comparisons/nicb-vincheck-alternative', category: 'comparison' },
  { title: 'Compare All Checkers', href: '/compare', category: 'comparison' },
  
  // Blog posts
  { title: 'How to Check if Phone is Stolen', href: '/blog/how-to-check-if-phone-stolen', category: 'blog' },
  { title: 'Complete VIN Guide', href: '/blog/complete-vin-guide', category: 'blog' },
  { title: 'Facebook Marketplace Scams', href: '/blog/facebook-marketplace-scams', category: 'blog' },
  { title: 'Verify Item Before Meetup', href: '/blog/verify-item-before-meetup', category: 'blog' },
  
  // City pages
  { title: 'Los Angeles Stolen Check', href: '/stolen-check-los-angeles', category: 'city' },
  { title: 'New York City Stolen Check', href: '/stolen-check-new-york-city', category: 'city' },
  { title: 'Chicago Stolen Check', href: '/stolen-check-chicago', category: 'city' },
  { title: 'Houston Stolen Check', href: '/stolen-check-houston', category: 'city' },
  
  // Business pages
  { title: 'For Pawn Shops', href: '/for-pawn-shops', category: 'business' },
  { title: 'For Dealers', href: '/for-dealers', category: 'business' },
  { title: 'For Law Enforcement', href: '/for-law-enforcement', category: 'business' },
];

const categoryIcons: Record<PageCategory, React.ReactNode> = {
  item: <Phone className="w-4 h-4" />,
  marketplace: <ShoppingBag className="w-4 h-4" />,
  business: <Scale className="w-4 h-4" />,
  blog: <FileText className="w-4 h-4" />,
  city: <MapPin className="w-4 h-4" />,
  comparison: <ArrowRight className="w-4 h-4" />,
  general: <ArrowRight className="w-4 h-4" />,
};

const getRelatedPages = (currentPage: string, currentCategory?: PageCategory, maxLinks: number = 5): RelatedPage[] => {
  // Filter out current page
  const available = allRelatedPages.filter(page => page.href !== currentPage);
  
  // Prioritize same category, then mix from others
  const sameCategory = available.filter(p => p.category === currentCategory);
  const otherCategories = available.filter(p => p.category !== currentCategory);
  
  // Get 2-3 from same category, rest from others
  const sameCategoryCount = Math.min(Math.ceil(maxLinks * 0.4), sameCategory.length);
  const otherCount = maxLinks - sameCategoryCount;
  
  const result = [
    ...sameCategory.slice(0, sameCategoryCount),
    ...otherCategories.sort(() => Math.random() - 0.5).slice(0, otherCount)
  ];
  
  return result.slice(0, maxLinks);
};

export const RelatedPagesSection: React.FC<RelatedPagesSectionProps> = ({
  currentPage,
  currentCategory = 'general',
  maxLinks = 5
}) => {
  const relatedPages = getRelatedPages(currentPage, currentCategory, maxLinks);
  
  if (relatedPages.length === 0) return null;
  
  return (
    <section className="py-12 px-4 bg-muted/30 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-6">Related Verification Tools</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {relatedPages.map((page, index) => (
            <Link key={index} to={page.href}>
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2 h-auto py-3 text-left"
              >
                {categoryIcons[page.category]}
                <span className="truncate">{page.title}</span>
              </Button>
            </Link>
          ))}
        </div>
        
        {/* Additional contextual links for SEO */}
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          <span className="text-muted-foreground">Quick links:</span>
          <Link to="/verify" className="text-primary hover:underline">Free Verification</Link>
          <span className="text-muted-foreground">•</span>
          <Link to="/app" className="text-primary hover:underline">Mobile App</Link>
          <span className="text-muted-foreground">•</span>
          <Link to="/pricing" className="text-primary hover:underline">Pricing</Link>
          <span className="text-muted-foreground">•</span>
          <Link to="/blog" className="text-primary hover:underline">Blog</Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedPagesSection;

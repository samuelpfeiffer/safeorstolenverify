import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useSafeLocation } from '@/hooks/useSafeLocation';

const routeNames: Record<string, string> = {
  'imei-check': 'IMEI Checker',
  'vin-verification': 'VIN Verification',
  'stolen-item-checker': 'Stolen Item Checker',
  'serial-number-checker': 'Serial Number Checker',
  'how-it-works': 'How It Works',
  'pricing': 'Pricing',
  'about': 'About Us',
  'contact': 'Contact',
  'blog': 'Blog',
  'features': 'Features'
};

export const BreadcrumbSchema = () => {
  const location = useSafeLocation();
  
  if (!location) return null;
  
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (pathSegments.length === 0) return null;

  const breadcrumbList = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://safeorstolen.com"
    },
    ...pathSegments.map((segment, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": routeNames[segment] || segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      "item": `https://safeorstolen.com/${pathSegments.slice(0, index + 1).join('/')}`
    }))
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbList
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="py-4 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li>
              <Link 
                to="/" 
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </li>
            {pathSegments.map((segment, index) => (
              <li key={segment} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                {index === pathSegments.length - 1 ? (
                  <span className="font-medium text-foreground">
                    {routeNames[segment] || segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </span>
                ) : (
                  <Link
                    to={`/${pathSegments.slice(0, index + 1).join('/')}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {routeNames[segment] || segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};
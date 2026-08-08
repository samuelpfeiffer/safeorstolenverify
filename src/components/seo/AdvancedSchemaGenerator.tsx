import { Helmet } from 'react-helmet-async';
import { useSafeLocation } from '@/hooks/useSafeLocation';

/**
 * Advanced Schema Markup Generator - Page-Specific Schemas Only
 * 
 * IMPORTANT: Organization, WebSite, Service, HowTo, and MobileApplication schemas
 * are defined in index.html as static JSON-LD. This component ONLY adds:
 * - Dynamic BreadcrumbList (page-aware)
 * - ItemList for service directory
 * 
 * HowTo, ProfessionalService, Product, and Speakable schemas were removed
 * to eliminate duplication with index.html (caused GSC "Duplicate field" errors).
 * 
 * Last Updated: 2026-02-18
 */

export const AdvancedSchemaGenerator = () => {
  const location = useSafeLocation();
  const currentPath = location?.pathname || '/';

  // Generate dynamic BreadcrumbList based on current path
  const generateBreadcrumbs = () => {
    const pathParts = currentPath.split('/').filter(Boolean);
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://safeorstolen.com/"
      }
    ];

    let currentPathBuilder = '';
    pathParts.forEach((part, index) => {
      currentPathBuilder += `/${part}`;
      const name = part
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `https://safeorstolen.com${currentPathBuilder}`
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
  };

  // ItemList Schema for service directory
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SafeOrStolen Verification Services",
    "description": "Complete list of stolen item verification services offered by SafeOrStolen",
    "numberOfItems": 8,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "IMEI Phone Checker", "url": "https://safeorstolen.com/imei-checker", "description": "Verify phones against carrier and manufacturer blacklists, carrier records, and community theft registries" },
      { "@type": "ListItem", "position": 2, "name": "VIN Vehicle Lookup", "url": "https://safeorstolen.com/vin-checker", "description": "Check vehicles against NICB, DMV, and stolen vehicle databases" },
      { "@type": "ListItem", "position": 3, "name": "Serial Number Checker", "url": "https://safeorstolen.com/serial-number-checker", "description": "Verify electronics, laptops, and equipment serial numbers" },
 { "@type": "ListItem", "position": 4, "name": "Firearm Serial Check", "url": "https://safeorstolen.com/firearms-check", "description": "Check gun serial numbers against stolen firearms databases" },
      { "@type": "ListItem", "position": 5, "name": "Bicycle Check", "url": "https://safeorstolen.com/check-bike", "description": "Verify bicycle serial numbers via BikeIndex integration" },
      { "@type": "ListItem", "position": 6, "name": "Xbox/Console Check", "url": "https://safeorstolen.com/check-xbox", "description": "Verify gaming consoles against stolen property and ban databases" },
      { "@type": "ListItem", "position": 7, "name": "License Plate Lookup", "url": "https://safeorstolen.com/license-plate-lookup", "description": "Vehicle registration and theft verification for all 50 states" },
      { "@type": "ListItem", "position": 8, "name": "Laptop Check", "url": "https://safeorstolen.com/check-laptop", "description": "Verify laptop serial numbers against stolen property databases" }
    ]
  };

  return (
    <Helmet>
      {/* Dynamic Breadcrumbs - only on non-homepage routes */}
      {currentPath !== '/' && (
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbs())}
        </script>
      )}

      {/* ItemList Schema - service directory */}
      <script type="application/ld+json">
        {JSON.stringify(itemListSchema)}
      </script>
    </Helmet>
  );
};

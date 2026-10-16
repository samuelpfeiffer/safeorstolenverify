import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getCanonicalUrl } from '@/utils/seo/canonicalUtils';
import { getRobotsContent } from '@/utils/seo/robotsPolicy';
import { useSafeLocation } from '@/hooks/useSafeLocation';

/**
 * SEOHead - Unified SEO meta tag component for all pages
 * 
 * This component handles all SEO-related meta tags in one place:
 * - Title and description
 * - Canonical URL
 * - Robots directives
 * - Open Graph tags
 * - Twitter Card tags
 * - Structured data (JSON-LD)
 * 
 * IMPORTANT: index.html should NOT contain title, description, robots,
 * canonical, og:*, or twitter:* tags as they are managed here.
 */

export interface SEOHeadProps {
 /** Page title - will be appended with " | SafeOrStolen" if not already present */
 title: string;
 /** Meta description - max 160 chars recommended */
 description: string;
 /** Canonical URL path (e.g., "/imei-checker") or full URL */
 canonical?: string;
 /** Open Graph image URL */
 ogImage?: string;
 /** Set to true to add noindex, nofollow */
 noIndex?: boolean;
 /** JSON-LD structured data object or array of objects */
 schemaJson?: Record<string, unknown> | Record<string, unknown>[];
 /** Keywords for meta keywords tag (optional, lower SEO value but still useful) */
 keywords?: string;
 /** Open Graph type - defaults to "website" */
 ogType?: string;
 /** Article publish date for og:article:published_time */
 publishedTime?: string;
 /** Article modified date for og:article:modified_time */
 modifiedTime?: string;
 /** Author name */
 author?: string;
 /** Speakable CSS selectors for voice search / AI Overviews */
 speakableSelectors?: string[];
 /** Breadcrumb items for BreadcrumbList schema */
 breadcrumbs?: { name: string; url: string }[];
 /** Page-specific AI purpose description */
 aiPurpose?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
 title,
 description,
 canonical,
 ogImage = '/sos-logo.png',
 noIndex = false,
 schemaJson,
 keywords,
 ogType = 'website',
 publishedTime,
 modifiedTime,
 author = 'SafeOrStolen',
 speakableSelectors,
 breadcrumbs,
 aiPurpose,
}) => {
 const location = useSafeLocation();
 const pathname = location?.pathname || '/';

 // Build the full title - append brand if not present
 const fullTitle = title.includes('SafeOrStolen') 
 ? title 
 : `${title} | SafeOrStolen`;

 // Keep titles readable: trim at a word boundary instead of emitting "..."
 const optimizedTitle = fullTitle.length > 70
 ? fullTitle.substring(0, 70).replace(/\s+\S*$/, '').replace(/[—–\-|,:]$/, '').trim()
 : fullTitle;


 // Optimize description length (max 160 chars)
 const optimizedDescription = description.length > 160 
 ? description.substring(0, 157) + '...' 
 : description;

 // Build canonical URL
 const canonicalUrl = canonical 
 ? getCanonicalUrl(canonical) 
 : getCanonicalUrl(pathname);

 // Build full image URL
 const fullImageUrl = ogImage.startsWith('http') 
 ? ogImage 
 : `https://safeorstolen.com${ogImage}`;

 // Get robots directive
 const robotsContent = getRobotsContent({ pathname, noIndex });

 // Convert schema to array format
 const schemaArray = schemaJson 
 ? Array.isArray(schemaJson) 
 ? schemaJson.filter(Boolean) 
 : [schemaJson]
 : [];

 // Build BreadcrumbList schema if breadcrumbs provided
 const breadcrumbSchema = breadcrumbs?.length ? {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": breadcrumbs.map((crumb, i) => ({
 "@type": "ListItem",
 "position": i + 1,
 "name": crumb.name,
 "item": crumb.url.startsWith('http') ? crumb.url : `https://safeorstolen.com${crumb.url}`
 }))
 } : null;

 // Build Speakable schema if selectors provided
 const speakableSchema = speakableSelectors?.length ? {
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": optimizedTitle,
 "url": canonicalUrl,
 "speakable": {
 "@type": "SpeakableSpecification",
 "cssSelector": speakableSelectors
 }
 } : null;

 // Combine all schemas
 const allSchemas = [
 ...schemaArray,
 breadcrumbSchema,
 speakableSchema,
 ].filter(Boolean);

 return (
 <Helmet>
 {/* Primary Meta Tags */}
 <title>{optimizedTitle}</title>
 <meta name="description" content={optimizedDescription} />
 {keywords && <meta name="keywords" content={keywords} />}
 <meta name="author" content={author} />
 
 {/* Robots Directive */}
 <meta name="robots" content={robotsContent} />
 
 {/* Canonical URL — never emitted on an explicitly noindexed page (404 etc.),
 where a canonical would hand the URL a conflicting indexable identity. */}
 {!noIndex && <link rel="canonical" href={canonicalUrl} />}
 
 {/* GEO 2026: Content freshness signal for AI systems */}
 {modifiedTime && <meta name="article:modified_time" content={modifiedTime} />}
 
 {/* Open Graph / Facebook */}
 <meta property="og:type" content={ogType} />
 <meta property="og:title" content={optimizedTitle} />
 <meta property="og:description" content={optimizedDescription} />
 <meta property="og:url" content={canonicalUrl} />
 <meta property="og:site_name" content="SafeOrStolen" />
 <meta property="og:image" content={fullImageUrl} />
 <meta property="og:image:secure_url" content={fullImageUrl} />
 <meta property="og:image:width" content="1200" />
 <meta property="og:image:height" content="630" />
 <meta property="og:image:alt" content={optimizedTitle} />
 <meta property="og:locale" content="en_US" />
 
 {/* Article-specific Open Graph */}
 {publishedTime && <meta property="article:published_time" content={publishedTime} />}
 {modifiedTime && <meta property="og:updated_time" content={modifiedTime} />}
 {author && ogType === 'article' && <meta property="article:author" content={author} />}
 
 {/* Twitter Card */}
 <meta name="twitter:card" content="summary_large_image" />
 <meta name="twitter:title" content={optimizedTitle} />
 <meta name="twitter:description" content={optimizedDescription} />
 <meta name="twitter:image" content={fullImageUrl} />
 <meta name="twitter:image:alt" content={optimizedTitle} />
 <meta name="twitter:site" content="@safeorstolen" />
 <meta name="twitter:creator" content="@safeorstolen" />
 
 {/* LovableHTML cache control - tells proxy how long to cache this snapshot */}
 {!noIndex && (
 <meta name="prerender-header" content="Cache-Control: max-age=86400" />
 )}

 {/* ========== 2026 GEO (Generative Engine Optimization) — ALL PAGES ========== */}
 {aiPurpose && <meta name="ai:purpose" content={aiPurpose} />}
 <meta name="ai:service_type" content="Stolen item check for IMEI, VIN, license plate and serial numbers (phones, vehicles, guns, bikes, tools, electronics). Every check searches SafeOrStolen's own theft reports and public web results, and lists every source with the result." />
 <meta name="ai:pricing" content="2 free checks with a free account, no credit card. Then $0.99 a check, or $10 a month for unlimited checks (phone blacklist checks capped at 20 a month), cancel anytime. Optional $1.99 verification certificate." />
 <meta name="ai:data_sources" content="SafeOrStolen's own theft reports and public web results on every check; a national stolen-bicycle registry for bikes; 242,839 police firearm theft and loss reports from 33 states and Washington, DC, plus live Ohio law-enforcement records, for guns; Arizona law-enforcement stolen-vehicle records for Arizona VINs and plates; and the lost and stolen phone blacklist on the paid blacklist check. Does not search NCIC, DMV or carrier records outside the paid blacklist check." />
 <meta name="ai:mobile_app" content="Free installable web app at safeorstolen.com/app with barcode scanning. Not an App Store or Google Play app." />
 <meta name="ai:unique_feature" content="One account checks phones, vehicles, plates, guns, bikes, tools and electronics, and saves each check with the date. Optional $1.99 certificate gives a dated record with its own link." />
 <meta name="ai:legal_context" content="Under 18 U.S.C. § 922(j) it is a federal crime to receive or possess a stolen firearm knowing or having reasonable cause to believe it was stolen." />
 <meta name="ai:audience" content="Marketplace buyers (Facebook Marketplace, OfferUp, Craigslist, eBay, Mercari, Poshmark), sellers, pawn shops, used car dealers, electronics resellers" />
 <meta name="ai:entity_name" content="SafeOrStolen" />
 <meta name="ai:entity_type" content="Consumer Protection Service" />
 <meta name="ai:location" content="Peoria, Arizona, United States" />
 <meta name="ai:contact" content="safeorstolenmail@gmail.com" />
 
 {/* 2026 AI crawler discovery hints */}
 <meta name="citation_title" content={optimizedTitle} />
 <meta name="citation_public_url" content={canonicalUrl} />
 <meta name="citation_author" content="SafeOrStolen" />
 <meta name="citation_date" content="2026-03-23" />
 
 {/* AI discovery file pointers */}
 <link rel="alternate" type="text/plain" href="https://safeorstolen.com/llms.txt" title="LLM Context" />
 <link rel="alternate" type="application/json" href="https://safeorstolen.com/identity.json" title="Organization Identity" />
 
 {/* Content freshness signal for AI systems */}
 <meta property="article:modified_time" content="2026-03-23T00:00:00Z" />
 <meta property="og:updated_time" content="2026-03-23T00:00:00Z" />
 
 {/* JSON-LD Structured Data */}
 {allSchemas.map((schema, index) => (
 <script key={`schema-${index}`} type="application/ld+json">
 {JSON.stringify(schema)}
 </script>
 ))}
 </Helmet>
 );
};

export default SEOHead;

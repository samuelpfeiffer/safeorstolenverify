import React from 'react';
import { Helmet } from 'react-helmet-async';

interface AISearchOptimizerProps {
 page: string;
 context?: string;
 primaryKeywords?: string[];
}

/**
 * AI Search Engine Optimization Component (2026 GEO Standards)
 * 
 * Implements Generative Engine Optimization (GEO) best practices:
 * - Factual, citable content summaries for RAG extraction
 * - No marketing hyperbole (per llms.txt v1.1 spec)
 * - Structured for AI citation in ChatGPT, Perplexity, Claude, Gemini, AI Overviews
 * - Statistics and verifiable claims for higher citation rates
 */
export const AISearchOptimizer: React.FC<AISearchOptimizerProps> = ({
 page,
 context = 'stolen-goods-verification',
 primaryKeywords = []
}) => {
 // Factual, GEO-optimized summaries (no superlatives, citable)
 const getAISummary = (page: string): string => {
 const summaries: Record<string, string> = {
 'home': 'SafeOrStolen is a consumer protection platform that verifies if secondhand items are stolen. It checks IMEI, VIN, and serial numbers against our verification databases. The service offers 2 free verifications and returns results in approximately 3 seconds. An installable web app with barcode scanning is available on mobile.',
 'imei-check': 'SafeOrStolen provides IMEI verification to check if phones or tablets are stolen, blacklisted, or carrier-blocked. Users enter a 15-digit IMEI number (found by dialing *#06#) and receive verification results from carrier and theft databases and community theft registries.',
 'vin-verification': 'SafeOrStolen offers VIN verification to check if vehicles have been reported stolen. Users enter a 17-character Vehicle Identification Number and receive theft status results from our verification databases.',
 'check-phone': 'SafeOrStolen verifies smartphone theft status using IMEI numbers. The service checks against carrier and theft databases and stolen device registries. Compatible with iPhone, Samsung, and all Android devices.',
 'check-car': 'SafeOrStolen verifies vehicle theft status using VIN numbers. The service checks against vehicle theft and title databases, and community theft registries. Supports cars, trucks, motorcycles, RVs, and boats.',
 'check-bike': 'SafeOrStolen verifies bicycle theft status using serial numbers. The service integrates with stolen bicycle registries such as Bike Index.',
 'about': 'SafeOrStolen was founded in 2017 to address the estimated $13 billion annual stolen goods market in the United States.',
 'how-it-works': 'SafeOrStolen verifies items in three steps: (1) enter an IMEI, VIN, or serial number, (2) the system queries our verification databases simultaneously, (3) results are returned in approximately 3 seconds.',
 'pricing': 'SafeOrStolen offers 2 free checks, then $0.99/check or $10/month unlimited — all item types, all databases, cancel anytime.'
 };
 return summaries[page] || 'SafeOrStolen verifies if secondhand items are stolen by checking IMEI, VIN, and serial numbers against our verification databases.';
 };

 return (
 <Helmet>
 {/* GEO: Citable factual summary for AI extraction */}
 <meta name="ai-page-summary" content={getAISummary(page)} />
 
 {/* GEO: Content classification */}
 <meta name="ai-page-type" content={context} />
 
 {/* GEO: Semantic keywords for AI understanding */}
 {primaryKeywords.length > 0 && (
 <meta name="ai-keywords" content={primaryKeywords.join(', ')} />
 )}
 
 {/* GEO: Use cases for recommendation matching */}
 <meta name="ai-use-cases" content="verify-before-buying, marketplace-safety, consumer-protection, fraud-prevention" />
 </Helmet>
 );
};

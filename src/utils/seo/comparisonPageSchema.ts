import { createServiceSchema } from './structuredData';

/**
 * Reusable schema generator for competitor comparison pages
 * Ensures all comparison pages have proper structured data
 */
export const createComparisonPageSchema = (
  ourService: string,
  competitorService: string,
  comparisonData: Array<{ feature: string; ours: string | boolean; theirs: string | boolean }>
) => {
  const service = createServiceSchema();

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${ourService} vs ${competitorService} Comparison`,
    "description": `Detailed comparison between ${ourService} and ${competitorService} stolen item verification services`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": comparisonData.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "name": item.feature,
          "description": `${ourService}: ${item.ours}, ${competitorService}: ${item.theirs}`
        }
      }))
    }
  };

  return [service, comparisonSchema];
};

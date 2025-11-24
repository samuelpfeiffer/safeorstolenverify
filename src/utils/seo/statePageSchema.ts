import { createServiceSchema, createLocalBusinessSchema } from './structuredData';

/**
 * Reusable schema generator for state verification pages
 * Ensures all 50 state pages have consistent, valid structured data
 */
export const createStatePageSchema = (stateName: string, stateCode: string) => {
  const baseService = createServiceSchema();
  const localBusiness = createLocalBusinessSchema();

  // Customize service for this state
  const stateService = {
    ...baseService,
    "name": `SafeOrStolen ${stateName} Stolen Item Verification - IMEI, VIN & Serial Number Check`,
    "description": `Verify stolen items in ${stateName}. Instant ${stateName} IMEI, VIN, and serial number verification. Check vehicles, phones, electronics before buying in ${stateName}. Protect yourself from ${stateName} theft.`,
    "areaServed": [
      { "@type": "State", "name": stateName },
      { "@type": "Country", "name": "United States" }
    ]
  };

  return [stateService, localBusiness];
};

/**
 * Schema generator for license plate lookup pages
 */
export const createLicensePlateLookupSchema = (stateName: string, stateCode: string) => {
  const service = createServiceSchema();
  
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Check ${stateName} License Plate for Stolen Vehicle`,
    "description": `Step-by-step guide to verify if a vehicle is stolen using ${stateName} license plate lookup`,
    "step": [
      {"@type": "HowToStep", "name": "Enter License Plate", "text": `Input the ${stateName} license plate number`},
      {"@type": "HowToStep", "name": "Select State", "text": "Choose the issuing state"},
      {"@type": "HowToStep", "name": "Search Database", "text": `Check ${stateName} stolen vehicle database`},
      {"@type": "HowToStep", "name": "Review Results", "text": "Check if vehicle is reported stolen"}
    ]
  };

  return [service, howToSchema];
};

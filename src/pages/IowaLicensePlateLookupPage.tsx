import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const IowaLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Iowa License Plate Lookup - Check IA Stolen Vehicle"
      metaDescription="Iowa license plate lookup. Free IA plate search. 3-second results."
      h1="Iowa License Plate Lookup"
      itemType="Vehicle"
      keywords={['iowa license plate lookup', 'IA plate search']}
      content={{intro: "Verify Iowa vehicles in 3 seconds.", whatIs: "IA plate lookup verifies theft.", howItWorks: "Query IA DMV.", whyCheck: "Screen IA vehicles.", benefits: ["Free lookup"], process: ["Record IA plate", "Verify"], faqs: [{question: "Check IA stolen?", answer: "Yes. Verify VIN."}]}}
    />
  );
};

export default IowaLicensePlateLookupPage;
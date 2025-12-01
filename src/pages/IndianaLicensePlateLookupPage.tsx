import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const IndianaLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Indiana License Plate Lookup - Check IN Stolen Vehicle"
      metaDescription="Indiana license plate lookup. Free IN plate search. 3-second results."
      h1="Indiana License Plate Lookup"
      itemType="Vehicle"
      keywords={['indiana license plate lookup', 'IN plate search']}
      content={{intro: "Verify Indiana vehicles in 3 seconds.", whatIs: "IN plate lookup verifies theft status.", howItWorks: "Query IN DMV databases.", whyCheck: "Screen Indianapolis vehicles.", benefits: ["Free lookup", "3-second results"], process: ["Record IN plate", "Verify"], faqs: [{question: "Check IN stolen?", answer: "Yes. Verify VIN too."}]}}
    />
  );
};

export default IndianaLicensePlateLookupPage;
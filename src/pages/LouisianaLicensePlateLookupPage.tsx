import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const LouisianaLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Louisiana License Plate Lookup - Check LA Stolen Vehicle"
      metaDescription="Louisiana license plate lookup. Free LA plate search."
      h1="Louisiana License Plate Lookup"
      itemType="Vehicle"
      keywords={['louisiana license plate lookup', 'LA plate search', 'new orleans vehicle check']}
      content={{intro: "Verify Louisiana vehicles. New Orleans coverage.", whatIs: "LA plate lookup.", howItWorks: "Query LA DMV.", whyCheck: "Screen LA vehicles.", benefits: ["Free"], process: ["Record LA plate"], faqs: [{question: "Check LA?", answer: "Yes."}]}}
    />
  );
};

export default LouisianaLicensePlateLookupPage;
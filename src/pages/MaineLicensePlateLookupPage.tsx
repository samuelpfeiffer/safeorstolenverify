import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const MaineLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Maine License Plate Lookup - Check ME Stolen Vehicle"
      metaDescription="Maine license plate lookup. Free ME plate search."
      h1="Maine License Plate Lookup"
      itemType="Vehicle"
      keywords={['maine license plate lookup', 'ME plate search']}
      content={{intro: "Verify Maine vehicles.", whatIs: "ME plate lookup.", howItWorks: "Query ME DMV.", whyCheck: "Screen ME vehicles.", benefits: ["Free"], process: ["Record ME plate"], faqs: [{question: "Check ME?", answer: "Yes."}]}}
    />
  );
};

export default MaineLicensePlateLookupPage;
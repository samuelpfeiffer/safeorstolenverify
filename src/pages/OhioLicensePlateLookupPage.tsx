import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const OhioLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Ohio License Plate Lookup - Check OH Stolen Vehicle"
      metaDescription="Ohio license plate lookup. Free OH plate search. Columbus coverage."
      h1="Ohio License Plate Lookup"
      itemType="Vehicle"
      keywords={['ohio license plate lookup', 'OH plate search', 'columbus vehicle check']}
      content={{
        intro: "Verify Ohio vehicles. Columbus coverage.",
        whatIs: "OH plate lookup.",
        howItWorks: "Query OH DMV.",
        whyCheck: "Screen OH vehicles.",
        benefits: ["Free"],
        process: ["Record OH plate"],
        faqs: [{question: "Check OH?", answer: "Yes."}]
      }}
    />
  );
};

export default OhioLicensePlateLookupPage;

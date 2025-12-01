import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const NewYorkLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="New York License Plate Lookup - Check NY Stolen Vehicle"
      metaDescription="New York license plate lookup. Free NY plate search. NYC coverage."
      h1="New York License Plate Lookup"
      itemType="Vehicle"
      keywords={['new york license plate lookup', 'NY plate search', 'nyc vehicle check']}
      content={{
        intro: "Verify New York vehicles. NYC coverage.",
        whatIs: "NY plate lookup.",
        howItWorks: "Query NY DMV.",
        whyCheck: "Screen NY vehicles.",
        benefits: ["Free"],
        process: ["Record NY plate"],
        faqs: [{question: "Check NY?", answer: "Yes."}]
      }}
    />
  );
};

export default NewYorkLicensePlateLookupPage;

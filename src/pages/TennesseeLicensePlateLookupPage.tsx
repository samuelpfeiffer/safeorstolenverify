import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const TennesseeLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Tennessee License Plate Lookup - Check TN Stolen Vehicle"
      metaDescription="Tennessee license plate lookup. Free TN plate search. Nashville coverage."
      h1="Tennessee License Plate Lookup"
      itemType="Vehicle"
      keywords={['tennessee license plate lookup', 'TN plate search', 'nashville vehicle check']}
      content={{
        intro: "Verify Tennessee vehicles. Nashville coverage.",
        whatIs: "TN plate lookup.",
        howItWorks: "Query TN DMV.",
        whyCheck: "Screen TN vehicles.",
        benefits: ["Free"],
        process: ["Record TN plate"],
        faqs: [{question: "Check TN?", answer: "Yes."}]
      }}
    />
  );
};

export default TennesseeLicensePlateLookupPage;

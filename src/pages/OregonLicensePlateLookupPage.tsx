import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const OregonLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Oregon License Plate Lookup - Check OR Stolen Vehicle"
      metaDescription="Oregon license plate lookup. Free OR plate search. Portland coverage."
      h1="Oregon License Plate Lookup"
      itemType="Vehicle"
      keywords={['oregon license plate lookup', 'OR plate search', 'portland vehicle check']}
      content={{
        intro: "Verify Oregon vehicles. Portland coverage.",
        whatIs: "OR plate lookup.",
        howItWorks: "Query OR DMV.",
        whyCheck: "Screen OR vehicles.",
        benefits: ["Free"],
        process: ["Record OR plate"],
        faqs: [{question: "Check OR?", answer: "Yes."}]
      }}
    />
  );
};

export default OregonLicensePlateLookupPage;

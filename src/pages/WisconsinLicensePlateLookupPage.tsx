import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const WisconsinLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Wisconsin License Plate Lookup - Check WI Stolen Vehicle"
      metaDescription="Wisconsin license plate lookup. Free WI plate search."
      h1="Wisconsin License Plate Lookup"
      itemType="Vehicle"
      keywords={['wisconsin license plate lookup', 'WI plate search']}
      content={{
        intro: "Verify Wisconsin vehicles.",
        whatIs: "WI plate lookup.",
        howItWorks: "Query WI DMV.",
        whyCheck: "Screen WI vehicles.",
        benefits: ["Free"],
        process: ["Record WI plate"],
        faqs: [{question: "Check WI?", answer: "Yes."}]
      }}
    />
  );
};

export default WisconsinLicensePlateLookupPage;

import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const NewMexicoLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="New Mexico License Plate Lookup - Check NM Stolen Vehicle"
      metaDescription="New Mexico license plate lookup. Free NM plate search."
      h1="New Mexico License Plate Lookup"
      itemType="Vehicle"
      keywords={['new mexico license plate lookup', 'NM plate search']}
      content={{
        intro: "Verify New Mexico vehicles.",
        whatIs: "NM plate lookup.",
        howItWorks: "Query NM DMV.",
        whyCheck: "Screen NM vehicles.",
        benefits: ["Free"],
        process: ["Record NM plate"],
        faqs: [{question: "Check NM?", answer: "Yes."}]
      }}
    />
  );
};

export default NewMexicoLicensePlateLookupPage;

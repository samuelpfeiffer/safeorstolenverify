import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const NewHampshireLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="New Hampshire License Plate Lookup - Check NH Stolen Vehicle"
      metaDescription="New Hampshire license plate lookup. Free NH plate search."
      h1="New Hampshire License Plate Lookup"
      itemType="Vehicle"
      keywords={['new hampshire license plate lookup', 'NH plate search']}
      content={{
        intro: "Verify New Hampshire vehicles.",
        whatIs: "NH plate lookup.",
        howItWorks: "Query NH DMV.",
        whyCheck: "Screen NH vehicles.",
        benefits: ["Free"],
        process: ["Record NH plate"],
        faqs: [{question: "Check NH?", answer: "Yes."}]
      }}
    />
  );
};

export default NewHampshireLicensePlateLookupPage;

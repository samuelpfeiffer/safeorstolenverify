import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const NorthCarolinaLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="North Carolina License Plate Lookup - Check NC Stolen Vehicle"
      metaDescription="North Carolina license plate lookup. Free NC plate search."
      h1="North Carolina License Plate Lookup"
      itemType="Vehicle"
      keywords={['north carolina license plate lookup', 'NC plate search']}
      content={{
        intro: "Verify North Carolina vehicles.",
        whatIs: "NC plate lookup.",
        howItWorks: "Query NC DMV.",
        whyCheck: "Screen NC vehicles.",
        benefits: ["Free"],
        process: ["Record NC plate"],
        faqs: [{question: "Check NC?", answer: "Yes."}]
      }}
    />
  );
};

export default NorthCarolinaLicensePlateLookupPage;

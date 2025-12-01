import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const KentuckyLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Kentucky License Plate Lookup - Check KY Stolen Vehicle"
      metaDescription="Kentucky license plate lookup. Free KY plate search."
      h1="Kentucky License Plate Lookup"
      itemType="Vehicle"
      keywords={['kentucky license plate lookup', 'KY plate search']}
      content={{intro: "Verify Kentucky vehicles.", whatIs: "KY plate lookup.", howItWorks: "Query KY DMV.", whyCheck: "Screen KY vehicles.", benefits: ["Free"], process: ["Record KY plate"], faqs: [{question: "Check KY?", answer: "Yes."}]}}
    />
  );
};

export default KentuckyLicensePlateLookupPage;
import { PageSEO } from '@/components/seo/PageSEO';
import { RichContentHub } from '@/components/seo/RichContentHub';
import { ComprehensiveFAQSection } from '@/components/seo/ComprehensiveFAQSection';
import { BookOpen } from 'lucide-react';

const ResourceCenterPage = () => {
  return (
    <>
      <PageSEO
        title="Verification Resource Center - Free Guides & Tools | SafeOrStolen"
        description="Complete resource center with 150+ free guides for checking stolen phones, cars, laptops, bikes. IMEI lookup tutorials, VIN verification, marketplace safety tips."
        keywords="verification guides, IMEI check tutorial, VIN lookup guide, stolen item checker, marketplace safety, buyer protection resources, serial number lookup help"
        canonical="/resource-center"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Verification Resource Center
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything you need to verify items, avoid scams, and buy safely. Over 150+ free guides, tutorials, and resources.
            </p>
          </div>
        </section>

        <RichContentHub />
        <ComprehensiveFAQSection />
      </div>
    </>
  );
};

export default ResourceCenterPage;
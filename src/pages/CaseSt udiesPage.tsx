import { PageSEO } from '@/components/seo/PageSEO';

export default function CaseStudiesPage() {
  return (
    <>
      <PageSEO
        title="Success Stories | Real Cases of Avoided Stolen Goods Purchases"
        description="Read real success stories of buyers who used SafeOrStolen to avoid purchasing stolen property and saved thousands of dollars."
        keywords="stolen goods case studies, verification success stories, avoided stolen purchase stories"
        canonical="/case-studies"
      />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Success Stories & Case Studies</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Real People Protected from Stolen Goods</h2>
          <p className="text-lg mb-4">
            Thousands of buyers have avoided purchasing stolen property using SafeOrStolen. Here are their stories.
          </p>
        </section>
        
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-3">Case Study 1: The Facebook Marketplace iPhone</h3>
          <p className="text-lg mb-4">
            Sarah was about to buy a "barely used" iPhone 14 Pro for $400 (50% off retail). Before meeting the seller, she checked the IMEI on SafeOrStolen and discovered it was reported stolen 3 days earlier. She avoided losing $400 and potential criminal charges.
          </p>
        </section>
        
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-3">Case Study 2: The Craigslist Used Car</h3>
          <p className="text-lg mb-4">
            Mike found a 2020 Honda Civic listed for $12,000 (below market value). The VIN check revealed it had been reported stolen and the VIN partially altered. He reported it to police and avoided a $12,000 loss.
          </p>
        </section>
        
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-3">Case Study 3: The Pawn Shop MacBook</h3>
          <p className="text-lg mb-4">
            A pawn shop owner verified a MacBook Pro before purchasing it from a customer. The serial number matched a theft report from 2 weeks earlier. They declined the purchase and notified authorities, protecting their business from liability.
          </p>
        </section>
        
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-3">Case Study 4: The eBay Gaming Console</h3>
          <p className="text-lg mb-4">
            Jennifer bought a PlayStation 5 on eBay. When it arrived, she verified the serial number and discovered it was stolen. eBay's buyer protection refunded her money, and the seller was removed from the platform.
          </p>
        </section>
      </div>
    </>
  );
}

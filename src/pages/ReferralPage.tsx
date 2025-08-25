import { ReferralProgram } from '@/components/marketing/ReferralProgram';
import { PageSEO } from '@/components/seo/PageSEO';

export default function ReferralPage() {
  return (
    <div className="bg-sos min-h-screen">
      <SEOHead 
        title="Referral Program - Earn Rewards | Safe Or Stolen"
        description="Earn rewards by helping others stay safe from stolen goods. Get free verifications and premium features for every successful referral to our verification service!"
        keywords="referral program, rewards, free verifications, earn money, affiliate program, stolen goods verification, IMEI verification rewards"
        ogType="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Safe Or Stolen Referral Program",
          "description": "Earn rewards by referring others to our stolen goods verification service",
          "url": "https://safeorstolen.com/referral"
        }}
      />
      <ReferralProgram />
    </div>
  );
}
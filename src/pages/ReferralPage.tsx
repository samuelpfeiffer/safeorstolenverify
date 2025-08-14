import { ReferralProgram } from '@/components/marketing/ReferralProgram';
import { SEOHead } from '@/components/seo/SEOHead';

export default function ReferralPage() {
  return (
    <div className="bg-sos min-h-screen">
      <SEOHead 
        title="Referral Program | Safe Or Stolen"
        description="Earn rewards by helping others stay safe from stolen goods. Get free verifications and premium features for every successful referral!"
        keywords="referral program, rewards, free verifications, earn money, affiliate program"
        ogType="website"
      />
      <ReferralProgram />
    </div>
  );
}
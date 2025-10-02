

import { PageSEO } from '@/components/seo/PageSEO';
import { HeroSection } from "@/components/problem/HeroSection";
import { StatisticsSection } from "@/components/problem/StatisticsSection";
import { ConsequencesSection } from "@/components/problem/ConsequencesSection";
import { CaseStudySection } from "@/components/problem/CaseStudySection";
import { CurrentSolutionsSection } from "@/components/problem/CurrentSolutionsSection";
import { SolutionSection } from "@/components/problem/SolutionSection";
import { ParanoiaAd } from '@/components/advertising/ParanoiaAd';
import devilDeal from '@/assets/ads/devil-deal.jpg';

const ProblemPage = () => {
  return (
    <>
      <PageSEO
        title="The $13 Billion Stolen Goods Crisis - Protect Buyers and Sellers | Safe Or Stolen"
        description="Learn about the massive stolen goods crisis affecting millions. Discover why 2.3M people unknowingly buy stolen items yearly. Safe secondhand buying solutions to avoid stolen goods."
        keywords="stolen goods crisis, secondhand fraud, protect buyers and sellers, safe secondhand buying, avoid stolen goods, consumer protection, resale security, marketplace safety, anti-theft register, property legitimacy"
      />
      <div className="bg-sos text-white min-h-screen">
        <HeroSection />
        <ParanoiaAd 
          src={devilDeal} 
          alt="Deal too good to be true? Better check it on SafeOrStolen.com" 
          size="large"
        />
        <SolutionSection />
      </div>
    </>
  );
};

export default ProblemPage;

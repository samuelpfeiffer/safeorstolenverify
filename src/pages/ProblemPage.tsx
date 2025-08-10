

import { SEOHead } from "@/components/seo/SEOHead";
import { HeroSection } from "@/components/problem/HeroSection";
import { StatisticsSection } from "@/components/problem/StatisticsSection";
import { ConsequencesSection } from "@/components/problem/ConsequencesSection";
import { CaseStudySection } from "@/components/problem/CaseStudySection";
import { CurrentSolutionsSection } from "@/components/problem/CurrentSolutionsSection";
import { SolutionSection } from "@/components/problem/SolutionSection";

const ProblemPage = () => {
  return (
    <>
      <SEOHead
        title="The $13 Billion Stolen Goods Crisis - Safe Or Stolen"
        description="Learn about the massive stolen goods problem affecting millions of Americans. Discover why 2.3M people unknowingly buy stolen items yearly and how to protect yourself."
        keywords="stolen goods crisis, secondhand fraud, NICB statistics, stolen property market, consumer protection"
        canonical="/problem"
      />
      <div className="bg-sos text-white min-h-screen">
        <HeroSection />
        <StatisticsSection />
        <ConsequencesSection />
        <CaseStudySection />
        <CurrentSolutionsSection />
        <SolutionSection />
        
      </div>
    </>
  );
};

export default ProblemPage;

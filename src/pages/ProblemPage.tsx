

import { PageSEO } from '@/components/seo/PageSEO';
import { HeroSection } from "@/components/problem/HeroSection";
import { StatisticsSection } from "@/components/problem/StatisticsSection";
import { ConsequencesSection } from "@/components/problem/ConsequencesSection";
import { CaseStudySection } from "@/components/problem/CaseStudySection";
import { CurrentSolutionsSection } from "@/components/problem/CurrentSolutionsSection";
import { SolutionSection } from "@/components/problem/SolutionSection";

const ProblemPage = () => {
  return (
    <>
      <PageSEO
        title="The $13 Billion Stolen Goods Crisis - Safe Or Stolen"
        description="Learn about the massive stolen goods problem affecting millions of Americans. Discover why 2.3M people unknowingly buy stolen items yearly and how to protect yourself."
        keywords="stolen goods crisis, secondhand fraud, NICB statistics, stolen property market, consumer protection"
      />
      <div className="bg-sos text-white min-h-screen">
        <HeroSection />
        <SolutionSection />
      </div>
    </>
  );
};

export default ProblemPage;


import { SEOHead } from "@/components/seo/SEOHead";
import { HeroSection } from "@/components/about-problem/HeroSection";
import { StatsSection } from "@/components/about-problem/StatsSection";
import { ProblemAreasSection } from "@/components/about-problem/ProblemAreasSection";
import { MarketImpactSection } from "@/components/about-problem/MarketImpactSection";
import { SolutionSection } from "@/components/about-problem/SolutionSection";
import { ImpactMetricsSection } from "@/components/about-problem/ImpactMetricsSection";
import { CallToActionSection } from "@/components/about-problem/CallToActionSection";

const AboutProblemPage = () => {
  return (
    <>
      <SEOHead
        title="About the Problem - The $13 Billion Stolen Goods Crisis"
        description="Understanding the massive stolen goods problem: $13B market, 2.3M victims yearly, and why innocent buyers need protection from criminal enterprises."
        keywords="stolen goods crisis, secondhand market problems, consumer protection, criminal marketplace, NICB statistics"
        canonical="/about-problem"
      />
      <div className="bg-sos text-white min-h-screen pt-16">
        <HeroSection />
        <StatsSection />
        <ProblemAreasSection />
        <MarketImpactSection />
        <SolutionSection />
        <ImpactMetricsSection />
        <CallToActionSection />
      </div>
    </>
  );
};

export default AboutProblemPage;

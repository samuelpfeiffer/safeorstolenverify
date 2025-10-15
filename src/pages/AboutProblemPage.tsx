
import { PageSEO } from '@/components/seo/PageSEO';
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
      <PageSEO
        title="Mobile App to Check Stolen Items - Protect Buyers & Sellers, Reduce Crime"
        description="Only mobile app for stolen item verification. Protects buyers AND sellers from financial loss and legal issues while helping reduce crime globally. Check phones, cars, electronics anywhere."
        keywords="mobile stolen item checker app, protect buyers sellers financial loss, prevent legal issues stolen goods, crime reduction technology, mobile IMEI VIN checker, marketplace safety app, buyer seller protection, How to check if something is stolen on phone, mobile app check stolen items, prevent buying stolen goods legal trouble, seller protection stolen goods"
      />
      <div className="bg-sos text-white min-h-screen pt-16">
        <HeroSection />
        <SolutionSection />
        <CallToActionSection />
      </div>
    </>
  );
};

export default AboutProblemPage;

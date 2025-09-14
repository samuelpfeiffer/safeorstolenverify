

import { TeamProfiles } from "@/components/team/TeamProfiles";
import { MasterSEO } from "@/components/seo/MasterSEO";
import { getPageMetadata } from "@/utils/seo/metadata";
import { HeroSection } from "@/components/our-story/HeroSection";
import { FounderJourneySection } from "@/components/our-story/FounderJourneySection";
import { ProblemIdentificationSection } from "@/components/our-story/ProblemIdentificationSection";
import { SolutionDevelopmentSection } from "@/components/our-story/SolutionDevelopmentSection";
import { TimelineSection } from "@/components/our-story/TimelineSection";
import { MissionSection } from "@/components/our-story/MissionSection";
import { AcknowledgmentsSection } from "@/components/our-story/AcknowledgmentsSection";
import { VideoMarketingSection } from "@/components/marketing/VideoMarketingSection";

const OurStoryPage = () => {
  const metadata = getPageMetadata('our-story');

  return (
    <>
      <MasterSEO
        title="Our Story - SafeOrStolen Mission to Combat Stolen Goods Market"
        description="Learn about SafeOrStolen's mission to combat the stolen goods market and protect consumers from purchasing stolen items. Our journey to create comprehensive verification services."
        customCanonical="/our-story"
        keywords="company story, stolen goods prevention, consumer protection, mission, SafeOrStolen history, verification service development"
      />
      <div className="bg-sos text-white min-h-screen">
        
        <HeroSection 
          title="Our Story: Fighting the $13B Stolen Goods Crisis"
          description="How recognizing the global stolen goods epidemic led to building the world's first real-time verification platform, protecting millions of innocent consumers from unknowingly purchasing stolen items."
        />

        <FounderJourneySection />

        <ProblemIdentificationSection />

        <SolutionDevelopmentSection />

        <VideoMarketingSection />

        <TimelineSection />

        <MissionSection />

        <TeamProfiles />

        <AcknowledgmentsSection />

        
      </div>
    </>
  );
};

export default OurStoryPage;

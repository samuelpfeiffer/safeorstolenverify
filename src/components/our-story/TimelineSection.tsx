
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Target, Rocket, TrendingUp } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const timeline: TimelineItem[] = [
  {
    year: "2023",
    title: "The Problem Recognition",
    description: "Samuel Pfeiffer identified the critical gap in secondhand market verification after personal experience with the uncertainty of purchasing used electronics. Research revealed the staggering $13 billion stolen goods crisis affecting millions globally.",
    icon: <Lightbulb className="h-6 w-6" />
  },
  {
    year: "2023",
    title: "Market Research & Validation",
    description: "Comprehensive analysis revealed that 2.3 million Americans unknowingly purchase stolen goods annually, with no reliable verification system available to consumers, businesses, or law enforcement agencies.",
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    year: "2024",
    title: "Team Formation", 
    description: "Samuel partnered with Kelly McEvoy, a research expert passionate about consumer protection. Together, they committed to building a comprehensive solution to protect millions of consumers worldwide from marketplace fraud.",
    icon: <Users className="h-6 w-6" />
  },
  {
    year: "2024",
    title: "Platform Development",
    description: "Development began on the world's most comprehensive verification database, establishing partnerships with law enforcement agencies, insurance companies, and manufacturers to create a global verification network.",
    icon: <Target className="h-6 w-6" />
  },
  {
    year: "2025",
    title: "Platform Launch",
    description: "Launched the live platform, expanding verification across phones, vehicles, license plates, serial-numbered goods, firearms, and bicycles against 100+ databases.",
    icon: <Rocket className="h-6 w-6" />
  }
];

export const TimelineSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey to Protect Millions</h2>
          <div className="space-y-8">
            {timeline.map((milestone, index) => (
              <Card key={index} className="bg-secondary/50 backdrop-blur-lg border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-sos-orange/20 rounded-full flex items-center justify-center">
                        <div className="text-sos-orange">
                          {milestone.icon}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sos-orange font-bold text-lg">{milestone.year}</span>
                        <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

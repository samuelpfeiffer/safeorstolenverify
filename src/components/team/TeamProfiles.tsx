
import { TeamMemberCard } from './TeamMemberCard';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Rocket, TrendingUp } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  linkedin?: string;
  email?: string;
  photo: string;
}

const teamMembers = [
  {
    name: "Samuel Pfeiffer",
    role: "Founder & CEO",
    bio: "Experienced entrepreneur and platform strategist who founded SafeOrStolen after recognizing the critical need to protect innocent consumers from the $13 billion stolen goods crisis. Samuel leads the company's mission to revolutionize marketplace safety through real-time verification technology.",
    expertise: ["Platform Strategy", "Fraud Prevention", "Business Development", "Consumer Protection", "Entrepreneurship"],
    linkedinUrl: "https://linkedin.com/in/samuelpfeiffer-safeorstolen",
    email: "support@safeorstolen.com",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Kelly McEvoy",
    role: "Co-Founder & Research Officer",
    bio: "Research expert and data analyst specializing in consumer protection and fraud patterns. Kelly conducts comprehensive research on the stolen goods crisis and develops data-driven strategies to combat marketplace fraud. Based in Arizona, she leads our research initiatives and partners with law enforcement agencies.",
    expertise: ["Research & Analysis", "Consumer Protection", "Data Analytics", "Fraud Patterns", "Law Enforcement Relations"],
    linkedinUrl: "https://linkedin.com/in/kellymcevoy-safeorstolen",
    email: "support@safeorstolen.com", 
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Partnerships & Growth",
    bio: "Former retail security director with extensive experience in loss prevention and vendor relations across major retail chains. Michael builds strategic partnerships with law enforcement agencies, retailers, and technology partners to expand our global reach in fighting the stolen goods crisis.",
    expertise: ["Retail Security", "Loss Prevention", "Partnership Development", "Business Growth", "Strategic Alliances"],
    linkedinUrl: "https://linkedin.com/in/michaelrodriguez-safeorstolen",
    email: "michael@safeorstolen.com",
    image: "/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
  }
];

export const TeamProfiles = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-sos/95 to-sos">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-sos-orange/20 text-sos-orange border-sos-orange/30">
            <Award className="h-4 w-4 mr-2" />
            Our Expert Team
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Meet the Team Fighting the $13B Fraud Crisis
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our expert team combines entrepreneurship, research excellence, and industry partnerships 
            to protect millions from unknowingly purchasing stolen goods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>

        {/* Team Stats & FasterCapital */}
        <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
          <div className="p-6 bg-white/5 rounded-2xl border border-sos-orange/20">
            <div className="text-4xl font-bold text-sos-orange mb-2">25+</div>
            <div className="text-gray-300">Years Combined Experience</div>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-sos-lime/20">
            <div className="text-4xl font-bold text-sos-lime mb-2">500K+</div>
            <div className="text-gray-300">Users Protected</div>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-sos-orange/20">
            <div className="text-4xl font-bold text-sos-orange mb-2">24/7</div>
            <div className="text-gray-300">Real-time Monitoring</div>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-sos-lime/20">
            <div className="flex items-center justify-center mb-2">
              <Rocket className="h-8 w-8 text-sos-lime" />
            </div>
            <div className="text-gray-300">FasterCapital Accelerated</div>
          </div>
        </div>

        {/* FasterCapital Recognition */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 rounded-2xl p-8 border border-sos-orange/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket className="h-6 w-6 text-sos-orange" />
              <h3 className="text-2xl font-bold text-white">Accelerated by FasterCapital</h3>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
              We're proud to be part of the FasterCapital acceleration program, 
              working together to scale our mission of protecting consumers from 
              the global stolen goods crisis.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-sos-orange" />
                <span className="text-white font-medium">Global Scaling</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-sos-lime" />
                <span className="text-white font-medium">Strategic Partnerships</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-sos-orange" />
                <span className="text-white font-medium">Industry Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

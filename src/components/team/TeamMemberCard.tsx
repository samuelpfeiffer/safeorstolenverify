import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedinUrl?: string;
  email?: string;
  expertise: string[];
}

export const TeamMemberCard = ({ 
  name, 
  role, 
  bio, 
  image, 
  linkedinUrl, 
  email, 
  expertise 
}: TeamMemberCardProps) => {
  return (
    <Card className="bg-white/5 border-sos-orange/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
      <CardContent className="p-8 text-center">
        <div className="relative mb-6">
          <img 
            src={image} 
            alt={`${name} - ${role}`}
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-sos-orange/20 group-hover:border-sos-orange/40 transition-colors"
          />
          <div className="absolute -inset-2 bg-sos-orange/10 rounded-full blur-xl group-hover:bg-sos-orange/20 transition-colors"></div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-sos-orange font-medium mb-4">{role}</p>
        
        <p className="text-gray-300 leading-relaxed mb-6">{bio}</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {expertise.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-sos-lime/20 text-sos-lime border-sos-lime/30"
            >
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-center gap-4">
          {linkedinUrl && (
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-sos-orange/20 rounded-full hover:bg-sos-orange/30 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-sos-orange" />
            </a>
          )}
          {email && (
            <a 
              href={`mailto:${email}`}
              className="p-3 bg-sos-lime/20 rounded-full hover:bg-sos-lime/30 transition-colors"
            >
              <Mail className="h-5 w-5 text-sos-lime" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, Smartphone, Award, Building, Quote } from 'lucide-react';

/**
 * Social proof section for homepage
 * Shows badges, testimonials, and trust signals
 */
export const SocialProofSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Badges Row */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <a 
              href="https://fastercapital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:border-primary/50 transition-colors"
            >
              <Award className="h-4 w-4 text-amber-500" />
              <span className="text-sm font-medium">Accelerated by FasterCapital</span>
            </a>
            
            <a 
              href="https://www.trustpilot.com/review/safeorstolen.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:border-primary/50 transition-colors"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-green-500 text-green-500" />
                ))}
              </div>
              <span className="text-sm font-medium">5-Star Reviews on Trustpilot</span>
            </a>
            
            <a 
              href="https://www.crunchbase.com/organization/safe-or-stolen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:border-primary/50 transition-colors"
            >
              <Building className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">Featured on Crunchbase</span>
            </a>
          </div>

          {/* Mobile App Highlight */}
          <div className="flex justify-center mb-8">
            <Badge 
              variant="outline" 
              className="px-4 py-2 text-base border-sos-orange/50 bg-sos-orange/10 text-sos-orange"
            >
              <Smartphone className="h-4 w-4 mr-2" />
              The ONLY Stolen Item Checker With A Mobile App
            </Badge>
          </div>

          {/* Mini Testimonials */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Card className="p-4 bg-card/50">
              <div className="flex gap-3">
                <Quote className="h-6 w-6 text-primary/50 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    "I am part owner of a little pawn shop, so after discovering this app, I have to call it my absolute favorite. It makes my job a thousand times easier!"
                  </p>
                  <p className="text-xs font-medium text-foreground">— Pawn Shop Owner</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-card/50">
              <div className="flex gap-3">
                <Quote className="h-6 w-6 text-primary/50 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    "I buy cars constantly from online marketplaces and I use this app to make sure I'm not buying a stolen vehicle. It's definitely saved my ass a few times."
                  </p>
                  <p className="text-xs font-medium text-foreground">— Car Buyer</p>
                </div>
              </div>
            </Card>
          </div>

          {/* YouTube Link */}
          <div className="flex justify-center">
            <a 
              href="https://www.youtube.com/@SafeOrStolen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              📺 Watch Our Videos on YouTube
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

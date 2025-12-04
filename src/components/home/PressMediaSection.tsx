import { ExternalLink, Award, Users, Globe, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import billboardImage from '@/assets/billboard-campaign.jpg';
import { TrustpilotBadge } from '@/components/social-proof/TrustpilotBadge';

export const PressMediaSection = () => {
  const pressItems = [
    {
      outlet: "Trustpilot",
      headline: "4.1★ Rating - Verified Customer Reviews",
      url: "https://www.trustpilot.com/review/safeorstolen.com",
      date: "2024",
      icon: "⭐"
    },
    {
      outlet: "Crunchbase",
      headline: "Company Profile & Funding",
      url: "https://www.crunchbase.com/organization/safe-or-stolen",
      date: "2024",
      icon: "📊"
    },
    {
      outlet: "PRLog Press Room",
      headline: "Press Releases & News",
      url: "https://biz.prlog.org/SafeOrStolen/",
      date: "2024",
      icon: "📰"
    },
    {
      outlet: "FasterCapital",
      headline: "Partnership & Acceleration",
      url: "https://fastercapital.com",
      date: "2024",
      icon: "🚀"
    }
  ];

  const stats = [
    { icon: Globe, label: "50M+ Records", description: "Stolen item database" },
    { icon: Star, label: "4.1★ Trustpilot", description: "Verified reviews" },
    { icon: Award, label: "Global Mission", description: "Reducing crime worldwide" }
  ];

  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Press Coverage Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              As Featured In
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by media and backed by leading accelerators
            </p>
          </div>

          {/* Press Items Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pressItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="text-4xl">{item.icon}</div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {item.outlet}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.headline}
                    </p>
                    <div className="flex items-center text-xs text-primary group-hover:underline">
                      Read More <ExternalLink className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          {/* Billboard Campaign Visual */}
          <div className="mt-12">
            <img 
              src={billboardImage}
              alt="SafeOrStolen billboard campaign - Person viewing verification message"
              className="rounded-xl shadow-2xl w-full max-w-4xl mx-auto object-cover"
              loading="lazy"
              decoding="async"
              width="1200"
              height="675"
            />
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-border">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Press Quote */}
          <div className="mt-12 text-center">
            <blockquote className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
              "SafeOrStolen partners with FasterCapital to revolutionize secondhand market safety through advanced verification technology"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

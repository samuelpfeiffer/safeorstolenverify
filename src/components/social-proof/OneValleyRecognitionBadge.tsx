import React from 'react';
import { Trophy, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OneValleyRecognitionBadgeProps {
  variant?: 'default' | 'compact' | 'strip';
  showLink?: boolean;
}

/**
 * OneValley / Entrepreneurship World Cup 2020 Recognition Badge
 * 
 * SafeOrStolen was recognized by OneValley (global partners of the Entrepreneurship World Cup 2020)
 * for "innovative solutions and approach to disruption in the SaaS/Enterprise Software space"
 * while representing the United States.
 */
export const OneValleyRecognitionBadge: React.FC<OneValleyRecognitionBadgeProps> = ({ 
  variant = 'default',
  showLink = true 
}) => {
  const content = {
    title: "Entrepreneurship World Cup 2020",
    subtitle: "Recognized by OneValley",
    description: "Innovative solutions and approach to disruption in SaaS/Enterprise Software",
    country: "Representing the United States"
  };

  if (variant === 'compact') {
    return (
      <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
        <Trophy className="h-3.5 w-3.5 text-amber-500" />
        <span>EWC 2020 · OneValley Recognition</span>
      </div>
    );
  }

  if (variant === 'strip') {
    return (
      <section className="py-4 bg-gradient-to-r from-amber-500/5 via-background to-amber-500/5 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <Trophy className="h-5 w-5 text-amber-500 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              Recognized by <strong className="text-foreground">OneValley</strong> and the{' '}
              <strong className="text-foreground">Entrepreneurship World Cup 2020</strong> for innovative 
              SaaS/Enterprise disruption · Representing the United States
            </p>
            {showLink && (
              <Link 
                to="/news/onevalley-recognition" 
                className="text-xs text-primary hover:underline whitespace-nowrap"
              >
                Learn more →
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Default variant - full card
  return (
    <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-background to-amber-500/5 border border-amber-500/20">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-amber-500/10">
          <Award className="h-6 w-6 text-amber-500" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground">{content.title}</h3>
          </div>
          <p className="text-sm text-primary font-medium mb-1">{content.subtitle}</p>
          <p className="text-sm text-muted-foreground mb-2">{content.description}</p>
          <p className="text-xs text-muted-foreground">{content.country}</p>
          {showLink && (
            <Link 
              to="/news/onevalley-recognition" 
              className="inline-block mt-3 text-sm text-primary hover:underline"
            >
              Read more about this recognition →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

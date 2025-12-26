import { User, Shield, Award } from 'lucide-react';

interface AuthorBioProps {
  author?: {
    name: string;
    role: string;
    credentials: string;
    bio: string;
  };
}

const defaultAuthor = {
  name: "SafeOrStolen Editorial Team",
  role: "Stolen Property Verification Experts",
  credentials: "10+ years combined experience in property verification, law enforcement partnerships, and consumer protection",
  bio: "Our editorial team consists of verification specialists, former law enforcement advisors, and consumer protection advocates dedicated to helping buyers and sellers avoid stolen goods."
};

/**
 * Author bio component for blog posts - improves E-E-A-T signals
 * Shows author credentials and expertise for Google's quality assessment
 */
export function AuthorBio({ author = defaultAuthor }: AuthorBioProps) {
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "jobTitle": author.role,
    "description": author.bio,
    "worksFor": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    }
  };

  return (
    <aside className="border border-border rounded-lg p-6 bg-muted/30 my-8" aria-label="About the author">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <User className="h-8 w-8 text-primary" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-foreground">{author.name}</h4>
            <Shield className="h-4 w-4 text-primary" aria-label="Verified author" />
          </div>
          
          <p className="text-sm text-primary font-medium mb-2">{author.role}</p>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <Award className="h-3 w-3" />
            <span>{author.credentials}</span>
          </div>
          
          <p className="text-sm text-muted-foreground">{author.bio}</p>
        </div>
      </div>
    </aside>
  );
}

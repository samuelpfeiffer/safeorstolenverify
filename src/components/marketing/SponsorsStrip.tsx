import React from 'react';

export const SponsorsStrip: React.FC = () => {
 return (
 <section aria-label="Trusted partners and sponsors" className="border-t border-border bg-background/60">
 <div className="container mx-auto px-4 py-6">
 <div className="w-full flex items-center justify-center mb-4">
 <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">
 Data sources we use
 </p>
 </div>
 <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
 {['Lost & stolen phone blacklist', 'National stolen-bicycle registry', 'Law-enforcement vehicle records'].map((t) => (
 <span key={t} className="inline-flex items-center px-3 py-1 rounded-md border border-border text-sm font-semibold text-muted-foreground">{t}</span>
 ))}

 {/* Stolen Firearms Databases */}
 <a
 href="https://www.safeorstolen.com/firearms-check"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center"
 aria-label="Visit Stolen Firearms Databases"
 title="Stolen Firearms Databases"
 >
 <img
 src="/lovable-uploads/03461ed0-873b-46ba-8871-8ed6fd1c51b2.png"
 alt="stolen firearms databases logo"
 loading="lazy"
 className="h-8 md:h-10 w-auto"
 />
 </a>
 </div>
 </div>
 </section>
 );
};

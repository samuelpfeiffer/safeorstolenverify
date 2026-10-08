import React from 'react';
import { Database, Shield, CheckCircle, Globe, Lock, Server } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DataPartnerBadgesProps {
 variant?: 'compact' | 'full' | 'minimal';
 className?: string;
}

// Oct 7 2026: only sources a check actually searches. The old list claimed a "national gun
// registry" (none exists), title history, insurer data, "1.4M+ bikes" and "50+ sources".
const DATA_PARTNERS = [
 { name: 'SafeOrStolen theft reports', description: 'Items owners reported stolen here', icon: Shield, verified: true },
 { name: 'Public web results', description: 'Listings and posts that mention the number', icon: Globe, verified: true },
 { name: 'Police gun theft reports', description: '33 states and Washington, DC, plus live Ohio records', icon: Server, verified: true },
 { name: 'Stolen-bicycle registry', description: 'National registry, searched by frame serial', icon: Database, verified: true },
 { name: 'Vehicle records', description: 'VIN decode, safety recalls, Arizona stolen-vehicle records', icon: CheckCircle, verified: true },
 { name: 'Phone blacklist', description: 'Lost and stolen phone blacklist (paid check)', icon: Lock, verified: true },
];

export const DataPartnerBadges: React.FC<DataPartnerBadgesProps> = ({ 
 variant = 'compact',
 className 
}) => {
 if (variant === 'minimal') {
 return (
 <div className={cn("flex flex-wrap items-center justify-center gap-3", className)}>
 <span className="text-xs text-muted-foreground font-medium">Searches:</span>
 {DATA_PARTNERS.slice(0, 4).map((partner, index) => (
 <span 
 key={index}
 className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
 >
 {partner.name}
 </span>
 ))}
  </div>
 );
 }

 if (variant === 'compact') {
 return (
 <div className={cn("bg-muted/30 border border-border rounded-lg p-4", className)}>
 <div className="flex items-center gap-2 mb-3">
 <Database className="h-4 w-4 text-primary" />
 <span className="text-sm font-semibold">What a check searches</span>
 </div>
 <div className="flex flex-wrap gap-2">
 {DATA_PARTNERS.map((partner, index) => (
 <div 
 key={index}
 className="flex items-center gap-1.5 px-2 py-1 bg-card border border-border rounded-[0.25rem] text-xs"
 >
 {partner.verified && <CheckCircle className="h-3 w-3 text-secondary" />}
 <span className="font-medium">{partner.name}</span>
 </div>
 ))}
 </div>
 </div>
 );
 }

 // Full variant
 return (
 <div className={cn("bg-gradient-to-br from-card to-muted/20 border border-border rounded-xl p-6", className)}>
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-2">
 <Database className="h-5 w-5 text-primary" />
 <h3 className="text-lg font-bold">What a check searches</h3>
 </div>
 </div>
 <p className="text-sm text-muted-foreground mb-4">
 Every check searches SafeOrStolen theft reports and public web results. Guns, bikes, phones and vehicles add the sources below. Each result lists exactly which sources were searched.
 </p>
 <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
 {DATA_PARTNERS.map((partner, index) => (
 <div 
 key={index}
 className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
 >
 <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
 <partner.icon className="h-4 w-4 text-primary" />
 </div>
 <div className="min-w-0">
 <div className="flex items-center gap-1">
 <span className="text-sm font-semibold truncate">{partner.name}</span>
 {partner.verified && (
 <CheckCircle className="h-3 w-3 text-secondary flex-shrink-0" />
 )}
 </div>
 <span className="text-xs text-muted-foreground">{partner.description}</span>
 </div>
 </div>
 ))}
 </div>
 </div>
 );
};

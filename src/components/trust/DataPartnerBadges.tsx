import React from 'react';
import { Database, Shield, CheckCircle, Globe, Lock, Server } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DataPartnerBadgesProps {
 variant?: 'compact' | 'full' | 'minimal';
 className?: string;
}

const DATA_PARTNERS = [
 { name: 'Stolen Property Registry', description: 'Verified Theft Reports', icon: Shield, verified: true },
 { name: 'Insurance Bureau', description: 'National Theft Reports', icon: Lock, verified: true },
 { name: 'carrier and theft databases', description: 'Global IMEI Blacklists', icon: Globe, verified: true },
 { name: 'Bicycle Registry', description: '1.4M+ Bikes Cataloged', icon: Database, verified: true },
 { name: 'Firearms Database', description: 'National Gun Registry', icon: Server, verified: true },
 { name: 'Vehicle Records', description: 'VIN & Title History', icon: CheckCircle, verified: true },
];

export const DataPartnerBadges: React.FC<DataPartnerBadgesProps> = ({ 
 variant = 'compact',
 className 
}) => {
 if (variant === 'minimal') {
 return (
 <div className={cn("flex flex-wrap items-center justify-center gap-3", className)}>
 <span className="text-xs text-muted-foreground font-medium">Data from:</span>
 {DATA_PARTNERS.slice(0, 4).map((partner, index) => (
 <span 
 key={index}
 className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
 >
 {partner.name}
 </span>
 ))}
 <span className="text-xs text-muted-foreground">+50 more</span>
 </div>
 );
 }

 if (variant === 'compact') {
 return (
 <div className={cn("bg-muted/30 border border-border rounded-lg p-4", className)}>
 <div className="flex items-center gap-2 mb-3">
 <Database className="h-4 w-4 text-primary" />
 <span className="text-sm font-semibold">Verified Data Sources</span>
 <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full">100+ Databases</span>
 </div>
 <div className="flex flex-wrap gap-2">
 {DATA_PARTNERS.map((partner, index) => (
 <div 
 key={index}
 className="flex items-center gap-1.5 px-2 py-1 bg-card border border-border rounded text-xs"
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
 <h3 className="text-lg font-bold">Our Data Partners</h3>
 </div>
 <span className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-medium">
 50+ Verified Sources
 </span>
 </div>
 <p className="text-sm text-muted-foreground mb-4">
 We aggregate data from stolen-property registries, carrier blacklists, and manufacturer databases in real-time.
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

import React from 'react';
import { ShieldLogo } from '@/components/brand/ShieldLogo';
import { Smartphone, Car, Hash, IdCard, Link2, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
 onPick: (text: string) => void;
}

const EXAMPLES = [
 {
 Icon: Smartphone,
 title: 'Verify a phone IMEI',
 text: '359123456789012',
 hint: 'Paste any 15-digit IMEI',
 },
 {
 Icon: Car,
 title: 'Check a vehicle VIN',
 text: '1HGBH41JXMN109186',
 hint: '17-character VIN',
 },
 {
 Icon: Hash,
 title: 'Look up a serial number',
 text: 'C7XJK2P9LMN0',
 hint: 'Electronics, tools, bikes',
 },
 {
 Icon: IdCard,
 title: 'Run a license plate',
 text: '7XYZ123',
 hint: 'Any US state',
 },
 {
 Icon: Link2,
 title: 'Analyze a marketplace listing',
 text: 'https://www.facebook.com/marketplace/item/',
 hint: 'Facebook, eBay, Craigslist, OfferUp',
 },
];

const FEATURES = [
 { Icon: ShieldCheck, label: 'multiple sources', sub: 'SafeOrStolen reports · public web results · AI analysis · specialized item databases' },
 { Icon: Zap, label: '~3 second results', sub: 'Real-time aggregated checks' },
 { Icon: Sparkles, label: 'AI follow-ups', sub: 'Ask anything about your result' },
];

export const WelcomeScreen: React.FC<Props> = ({ onPick }) => {
 return (
 <motion.div
 initial={{ opacity: 0, y: 12 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4 }}
 className="max-w-2xl mx-auto px-4 py-10 text-center"
 >
 <div className="flex items-center justify-center mx-auto mb-5">
 <ShieldLogo size={64} glow />
 </div>

 <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
 How can I help you verify today?
 </h1>
 <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
 Paste an identifier, upload a photo, or drop a marketplace URL. I'll cross-check it against
 multiple sources and explain the result in plain English.
 </p>

 {/* Examples grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
 {EXAMPLES.map((ex) => (
 <button
 key={ex.title}
 onClick={() => onPick(ex.text)}
 className="group text-left rounded-xl border border-border/60 bg-card/40 hover:bg-card hover:border-primary/40 transition-all p-3.5 flex items-start gap-3"
 >
 <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
 <ex.Icon className="w-4 h-4 text-primary" />
 </div>
 <div className="flex-1 min-w-0">
 <div className="text-xs font-semibold text-foreground">{ex.title}</div>
 <div className="text-[11px] text-muted-foreground mt-0.5">{ex.hint}</div>
 </div>
 </button>
 ))}
 </div>

 {/* Trust strip */}
 <div className="grid grid-cols-3 gap-2 max-w-lg mx-auto">
 {FEATURES.map((f) => (
 <div
 key={f.label}
 className="rounded-lg border border-border/40 bg-card/30 p-2.5 text-center"
 >
 <f.Icon className="w-4 h-4 text-primary mx-auto mb-1" />
 <div className="text-[11px] font-semibold text-foreground">{f.label}</div>
 <div className="text-[9px] text-muted-foreground leading-tight mt-0.5">{f.sub}</div>
 </div>
 ))}
 </div>
 </motion.div>
 );
};

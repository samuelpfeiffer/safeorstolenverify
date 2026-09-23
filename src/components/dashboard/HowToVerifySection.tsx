import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, FileCheck, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from '@/lib/router-compat';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { HowToSchema } from '@/components/seo/schemas/HowToSchema';
import { getItemTypeDisplayName } from '@/utils/itemTypeDetector';

interface HowToVerifySectionProps {
 detectedType?: string | null;
}

const FAQS = [
 {
 question: 'How does SafeOrStolen verify if an item is stolen?',
 answer: 'SafeOrStolen cross-references your IMEI, VIN, or serial number against its own stolen-item reports, public web results, and AI analysis. Additionally, it checks BikeIndex for bicycles and HotGunz for firearms. Results return in approximately 3 seconds with a Trust Score from 0-100 and source-level detail.'
 },
 {
 question: 'How much does it cost to check if a phone is stolen?',
 answer: 'SafeOrStolen offers 2 free checks, then $0.99 per check or $10/month unlimited — including downloadable PDF certificates and priority database access. This is significantly less than Carfax ($44.99/report) or CheckMEND ($1.99+/check).'
 },
 {
 question: 'What happens if I accidentally buy a stolen item?',
 answer: 'Under U.S. law (18 U.S.C. § 2315), possession of stolen property — even if purchased unknowingly — can result in criminal charges and up to 10 years imprisonment for interstate transport. Law enforcement can seize the item without reimbursement. Always verify before buying to establish due diligence and legal protection.'
 },
 {
 question: 'Can I verify a used car before buying it?',
 answer: 'Yes. Enter the 17-character VIN (found on the driver-side dashboard or door jamb) to check against SafeOrStolen\'s reports, public web results, and AI analysis. Results appear in 3 seconds. Unlike Carfax ($44.99/report), SafeOrStolen VIN checks are included in the free tier and unlimited plans.'
 },
 {
 question: 'Can I check a firearm serial number for stolen status?',
 answer: 'Yes. SafeOrStolen checks firearm serial numbers against stolen firearms databases. Possession of a stolen firearm is a federal crime under 18 U.S.C. § 922(j) carrying up to 10 years imprisonment. Always verify before any private firearm sale.'
 },
];

const STEPS = [
 {
 name: 'Enter identifier',
 text: 'Type or scan your IMEI (phones), VIN (vehicles), or serial number (electronics, firearms, bikes, tools) into the universal search bar. The system auto-detects the input format.',
 link: '/verify',
 linkText: 'Open the verification tool'
 },
 {
 name: 'Database scan',
 text: 'SafeOrStolen queries its own stolen-item reports, public web results, and AI analysis. Additionally, it checks BikeIndex for bicycles and HotGunz for firearms.',
 link: '/data-sources',
 linkText: 'See all multiple sources'
 },
 {
 name: 'Get Trust Score & Certificate',
 text: 'Receive a Trust Score (0-100) with a detailed source-level report in under 3 seconds. Download a PDF verification certificate as legal proof of due diligence for buyers and sellers.',
 link: '/pricing',
 linkText: 'See certificate plans'
 },
];

const stepIcons = [Search, Shield, FileCheck];

/**
 * HowToVerifySection — 2026 GEO/LLM/SEO optimized
 * All step cards are clickable. FAQ answers cite federal statutes for E-E-A-T.
 * Semantic TL;DR: SafeOrStolen verifies IMEI, VIN, and serial numbers in 3 steps against multiple sources.
 */
export const HowToVerifySection: React.FC<HowToVerifySectionProps> = ({ detectedType }) => {
 const itemLabel = detectedType ? getItemTypeDisplayName(detectedType) : 'Items';

 return (
 <section className="py-16 border-t border-border/50" aria-label={`How to verify if ${itemLabel} are stolen`}>
 <FAQSchema faqs={FAQS} />
 <HowToSchema
 name={`How to Check If a ${itemLabel} Is Stolen Using SafeOrStolen`}
 description={`Step-by-step guide to verify ${itemLabel.toLowerCase()} using SafeOrStolen's reports, public web results, and AI analysis.`}
 totalTime="PT1M"
 steps={STEPS}
 />

 <div className="container mx-auto px-4">
 <div className="max-w-3xl mx-auto">
 <div className="text-center mb-10">
 <h2 className="mb-3">How to Verify {itemLabel}</h2>
 <p className="text-muted-foreground">
 Three steps to know if an item is safe to buy or sell — takes under 60 seconds.
 Used by buyers, sellers, pawn shops, and law enforcement across all 50 states.
 </p>
 </div>

 {/* Steps — each clickable */}
 <div className="space-y-4 mb-14">
 {STEPS.map((step, i) => {
 const Icon = stepIcons[i];
 return (
 <motion.div
 key={i}
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.15, duration: 0.4 }}
 >
 <Link
 to={step.link}
 className="modern-card p-5 flex items-start gap-4 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group block"
 aria-label={`Step ${i + 1}: ${step.name} — ${step.linkText}`}
 >
 <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
 <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
 </div>
 <div className="flex-1 min-w-0">
 <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
 Step {i + 1}: {step.name}
 </h3>
 <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
 <span className="inline-flex items-center gap-1 mt-2 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
 {step.linkText} <ArrowRight className="w-3 h-3" aria-hidden="true" />
 </span>
 </div>
 <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-1" aria-hidden="true" />
 </Link>
 </motion.div>
 );
 })}
 </div>

 {/* FAQ */}
 <div>
 <h2 className="text-center mb-8 flex items-center justify-center gap-2">
 <BookOpen className="w-5 h-5 text-primary" aria-hidden="true" />
 Frequently Asked Questions
 </h2>
 <div className="space-y-3">
 {FAQS.map((faq, i) => (
 <details key={i} className="modern-card group">
 <summary className="p-5 cursor-pointer list-none flex items-center justify-between text-foreground font-medium text-sm hover:text-primary transition-colors">
 {faq.question}
 <span className="text-muted-foreground group-open:rotate-45 transition-transform text-lg ml-4 shrink-0">+</span>
 </summary>
 <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
 {faq.answer}
 </div>
 </details>
 ))}
 </div>

 <div className="mt-6 text-center">
 <Link
 to="/faq"
 className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
 >
 <BookOpen className="w-4 h-4" aria-hidden="true" />
 View all 50+ frequently asked questions
 <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
};

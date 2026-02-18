import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, FileCheck } from 'lucide-react';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { HowToSchema } from '@/components/seo/schemas/HowToSchema';
import { getItemTypeDisplayName } from '@/utils/itemTypeDetector';

interface HowToVerifySectionProps {
  detectedType?: string | null;
}

const FAQS = [
  {
    question: 'How does SafeOrStolen verify if an item is stolen?',
    answer: 'SafeOrStolen cross-references your IMEI, VIN, or serial number against 100+ databases including NCIC, GSMA, NICB, state police records, and insurance claims. Results are returned in approximately 3 seconds with a Trust Score from 0-100.'
  },
  {
    question: 'Is it free to check if a phone is stolen?',
    answer: 'Yes. SafeOrStolen offers 2 free verification checks. After that, premium plans start at $4.99/month for unlimited checks, downloadable certificates, and priority database access.'
  },
  {
    question: 'What happens if I accidentally buy a stolen item?',
    answer: 'Under U.S. law, possession of stolen property — even if purchased unknowingly — can result in criminal charges. Law enforcement can seize the item without reimbursement. Always verify before buying.'
  },
  {
    question: 'Can I verify a used car before buying it?',
    answer: 'Yes. Enter the 17-character VIN to check against NHTSA, NICB theft records, state DMV databases, and insurance total-loss records. SafeOrStolen provides a comprehensive vehicle history check.'
  },
];

const STEPS = [
  { name: 'Enter identifier', text: 'Type or scan your IMEI, VIN, or serial number into the universal search bar. The system auto-detects the input type.' },
  { name: 'Database scan', text: 'SafeOrStolen queries 100+ law enforcement, insurance, and manufacturer databases simultaneously in real-time.' },
  { name: 'Get Trust Score', text: 'Receive a Trust Score (0-100) with a detailed report. Download a verification certificate as proof of due diligence.' },
];

export const HowToVerifySection: React.FC<HowToVerifySectionProps> = ({ detectedType }) => {
  const itemLabel = detectedType ? getItemTypeDisplayName(detectedType) : 'Items';

  return (
    <section className="py-16 border-t border-border/50" aria-label={`How to verify ${itemLabel}`}>
      <FAQSchema faqs={FAQS} />
      <HowToSchema
        name={`How to Check If a ${itemLabel} Is Stolen`}
        description={`Step-by-step guide to verify ${itemLabel.toLowerCase()} using SafeOrStolen's database.`}
        totalTime="PT1M"
        steps={STEPS}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="mb-3">How to Verify {itemLabel}</h2>
            <p className="text-muted-foreground">
              Three steps to know if an item is safe to buy.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4 mb-14">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                className="modern-card p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  {i === 0 ? <Search className="w-5 h-5 text-primary" /> :
                   i === 1 ? <Shield className="w-5 h-5 text-primary" /> :
                   <FileCheck className="w-5 h-5 text-primary" />}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Step {i + 1}: {step.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details key={i} className="modern-card group">
                  <summary className="p-5 cursor-pointer list-none flex items-center justify-between text-foreground font-medium text-sm hover:text-primary transition-colors">
                    {faq.question}
                    <span className="text-muted-foreground group-open:rotate-45 transition-transform text-lg ml-4">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

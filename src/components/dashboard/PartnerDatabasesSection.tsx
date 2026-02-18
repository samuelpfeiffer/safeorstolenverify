import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Lock } from 'lucide-react';

const PARTNERS = [
  { name: 'NCIC / FBI', category: 'Law Enforcement', type: 'government' },
  { name: 'GSMA IMEI Registry', category: 'Telecom', type: 'industry' },
  { name: 'NICB', category: 'Insurance', type: 'insurance' },
  { name: 'NHTSA', category: 'Vehicle Safety', type: 'government' },
  { name: 'BikeIndex', category: 'Bicycle Registry', type: 'nonprofit' },
  { name: 'State Police DBs', category: 'Law Enforcement', type: 'government' },
  { name: 'Swappa', category: 'Device Verification', type: 'industry' },
  { name: 'CTIA / Cellular', category: 'Carrier Blacklist', type: 'industry' },
];

export const PartnerDatabasesSection: React.FC = () => {
  return (
    <section className="py-16 bg-muted/10 border-t border-border/50" aria-label="Partner databases for E-E-A-T trust">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="mb-3">Partner Databases</h2>
            <p className="text-muted-foreground">
              We cross-reference 100+ law enforcement, insurance, and manufacturer databases.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {PARTNERS.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="modern-card p-4 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center">
                  {partner.type === 'government' ? <Shield className="w-5 h-5 text-primary/60" /> :
                   partner.type === 'insurance' ? <Lock className="w-5 h-5 text-primary/60" /> :
                   <Database className="w-5 h-5 text-primary/60" />}
                </div>
                <p className="text-sm font-medium text-foreground">{partner.name}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

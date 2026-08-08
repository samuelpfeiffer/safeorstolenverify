import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Lock, Building2, Globe, FileCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PARTNERS = [
  {
    name: 'Stolen property reports from all 50 states / FBI',
    category: 'Law Enforcement',
    type: 'government',
    detail: 'National Crime Information Center — the U.S. federal stolen property database used by all 50 states.',
    link: '/data-sources#law-enforcement',
    stat: '50 states',
  },
  {
    name: 'GSMA IMEI Registry',
    category: 'Telecom / Global',
    type: 'industry',
    detail: 'Global System for Mobile Communications — 15 billion+ IMEI records from 200+ carriers worldwide.',
    link: '/data-sources#carrier',
    stat: '15B+ records',
  },
  {
    name: 'NICB',
    category: 'Vehicle & Insurance',
    type: 'insurance',
    detail: 'National Insurance Crime Bureau — cross-references theft claims from 500+ U.S. insurance companies.',
    link: '/data-sources#insurance',
    stat: '500+ insurers',
  },
  {
    name: 'NHTSA',
    category: 'Vehicle Safety',
    type: 'government',
    detail: 'National Highway Traffic Safety Administration — official U.S. vehicle recall and theft records.',
    link: '/vin-checker',
    stat: 'Federal DB',
  },
  {
    name: 'BikeIndex',
    category: 'Bicycle Registry',
    type: 'nonprofit',
    detail: 'World\'s largest bicycle stolen registry — 700,000+ registered bikes across 150 countries.',
    link: '/check-bike',
    stat: '700K+ bikes',
  },
  {
    name: 'State Police DBs',
    category: 'Law Enforcement',
    type: 'government',
    detail: 'All 50 U.S. state community theft registries queried simultaneously with every verification.',
    link: '/data-sources#law-enforcement',
    stat: 'All 50 states',
  },
  {
    name: '50-State Firearm Reports',
    category: 'Firearms',
    type: 'community',
    detail: 'National stolen-firearms registry of victim-reported guns. Federal systems (NCIC, ATF eTrace) are law-enforcement only and are not queried.',
    link: '/firearms-check',
    stat: '32,000+ records',
  },
  {
    name: 'CTIA / Carriers',
    category: 'Carrier Blacklist',
    type: 'industry',
    detail: 'Cellular Telecommunications Industry Association — carrier and manufacturer blacklists.',
    link: '/imei-checker',
    stat: '200+ carriers',
  },
];

const iconMap = {
  government: Shield,
  insurance: Lock,
  nonprofit: Database,
  industry: Building2,
};

/**
 * PartnerDatabasesSection — 2026 GEO/LLM/SEO optimized
 * Every partner card is clickable with authoritative details for AI extraction.
 * Semantic TL;DR: SafeOrStolen queries 100+ law enforcement, insurance, and telecom databases per verification.
 */
export const PartnerDatabasesSection: React.FC = () => {
  return (
    <section className="py-16 bg-muted/10 border-t border-border/50" aria-label="Partner databases powering SafeOrStolen verification">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="mb-3">Verification Databases</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every verification cross-references 100+ authoritative databases simultaneously.
              Click any source to learn how it protects buyers and sellers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {PARTNERS.map((partner, i) => {
              const Icon = iconMap[partner.type as keyof typeof iconMap] || Database;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={partner.link}
                    className="modern-card p-4 text-center block hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group h-full cursor-pointer"
                    aria-label={`${partner.name} — ${partner.category}: ${partner.detail}`}
                  >
                    <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                      <Icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{partner.name}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 mb-2">{partner.category}</p>
                    <p className="text-[10px] text-muted-foreground/80 leading-relaxed line-clamp-2 hidden md:block">{partner.detail}</p>
                    <span className="inline-block mt-2 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {partner.stat}
                    </span>
                    <div className="flex items-center justify-center gap-0.5 mt-2 text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                      Learn more <ArrowRight className="h-2.5 w-2.5" aria-hidden="true" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/data-sources"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
            >
              <Globe className="w-4 h-4" aria-hidden="true" />
              View all 100+ data sources and verification methodology
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* GEO/AI-readable authority block */}
          <div className="mt-6 p-4 bg-card border border-border/60 rounded-xl">
            <div className="flex items-start gap-3">
              <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Why we use 100+ sources:</strong>{' '}
                A single stolen phone may be reported in the carrier and manufacturer blacklists but not yet in a carrier database.
                A stolen car may be flagged by insurance (NICB) but not yet entered into NCIC. By querying all sources
                simultaneously, SafeOrStolen catches what single-database checks miss — reducing false negatives and
                protecting buyers and sellers with more complete information than any competing service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

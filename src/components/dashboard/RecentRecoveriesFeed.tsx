import React from 'react';
import { motion } from 'framer-motion';
import { Shield, MapPin, Clock } from 'lucide-react';

const RECOVERIES = [
  { type: 'iPhone 15 Pro', location: 'Chicago, IL', time: '2 hours ago', method: 'IMEI Match' },
  { type: '2022 Honda Civic', location: 'Houston, TX', time: '5 hours ago', method: 'VIN Check' },
  { type: 'MacBook Pro M3', location: 'Los Angeles, CA', time: '8 hours ago', method: 'Serial Lookup' },
  { type: 'Trek Domane SL6', location: 'Portland, OR', time: '12 hours ago', method: 'BikeIndex' },
  { type: 'Samsung Galaxy S24', location: 'Miami, FL', time: '1 day ago', method: 'GSMA Registry' },
];

export const RecentRecoveriesFeed: React.FC = () => {
  return (
    <section className="py-16 border-t border-border/50" aria-label="Recent item recoveries">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="mb-3">Recent Recoveries</h2>
            <p className="text-muted-foreground">
              Items flagged and recovered through SafeOrStolen verification.
            </p>
          </div>

          <div className="space-y-3">
            {RECOVERIES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="modern-card p-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm truncate">{item.type}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {item.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {item.time}
                    </span>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium shrink-0">
                  {item.method}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-[11px] text-muted-foreground mt-6">
            Verified by SafeOrStolen.{' '}
            <a href="/verify" className="text-primary hover:underline">
              Get the official police-certified report here
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

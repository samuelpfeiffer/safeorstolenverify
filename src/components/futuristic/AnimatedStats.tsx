import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Zap, TrendingUp } from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: Shield,
    value: '1.2M+',
    label: 'Items Verified',
    color: 'text-neon-cyan',
  },
  {
    icon: Users,
    value: '250K+',
    label: 'Active Users',
    color: 'text-neon-green',
  },
  {
    icon: Zap,
    value: '99.9%',
    label: 'Accuracy Rate',
    color: 'text-neon-purple',
  },
  {
    icon: TrendingUp,
    value: '$13B+',
    label: 'Fraud Prevented',
    color: 'text-neon-pink',
  },
];

export const AnimatedStats: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-cyber">
            Live Platform Statistics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time data showing our impact in protecting the secondhand market
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="cyber-border rounded-xl p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 cyber-float pulse-glow">
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 rounded-full bg-gradient-glow mb-4 ${stat.color}`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  
                  <motion.div
                    className={`text-4xl font-bold mb-2 ${stat.color}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200 
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <p className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
                
                {/* Animated background glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-glow opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real-time indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mt-8 gap-2 text-sm text-muted-foreground"
        >
          <motion.div
            className="w-2 h-2 bg-neon-green rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <span>Updated in real-time</span>
        </motion.div>
      </div>
    </section>
  );
};
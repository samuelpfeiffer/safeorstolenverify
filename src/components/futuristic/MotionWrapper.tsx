import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface MotionWrapperProps extends MotionProps {
  children: React.ReactNode;
  variant?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'cyber';
  delay?: number;
  duration?: number;
}

const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  cyber: {
    initial: { 
      opacity: 0, 
      scale: 0.9,
      filter: 'blur(10px) hue-rotate(0deg)',
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      filter: 'blur(0px) hue-rotate(0deg)',
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      filter: 'blur(10px) hue-rotate(180deg)',
    },
  },
};

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  variant = 'fadeIn',
  delay = 0,
  duration = 0.5,
  ...motionProps
}) => {
  const selectedVariant = variants[variant];

  return (
    <motion.div
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      exit={selectedVariant.exit}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

// Specialized components for common use cases
export const FadeIn: React.FC<Omit<MotionWrapperProps, 'variant'>> = (props) => (
  <MotionWrapper variant="fadeIn" {...props} />
);

export const SlideUp: React.FC<Omit<MotionWrapperProps, 'variant'>> = (props) => (
  <MotionWrapper variant="slideUp" {...props} />
);

export const CyberReveal: React.FC<Omit<MotionWrapperProps, 'variant'>> = (props) => (
  <MotionWrapper variant="cyber" duration={0.8} {...props} />
);
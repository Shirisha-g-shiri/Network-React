
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import AnimatedGlobe from '@/components/AnimatedGlobe.jsx';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 animated-gradient-bg">
      <div className="absolute inset-0 digital-grid-bg opacity-30"></div>
      <motion.div
        className="container mx-auto flex flex-col lg:flex-row items-center justify-between text-center lg:text-left relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="lg:w-1/2 mb-12 lg:mb-0" variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
            variants={itemVariants}
          >
            <span className="gradient-text">Powering Business</span>
            <br />
            Through Secure Connectivity
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0"
            variants={itemVariants}
          >
            Next-generation network solutions providing unparalleled security, scalability, and performance for businesses of all sizes.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <Button size="lg" variant="premium" className="group">
              Get Started <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline-glow">
              See Network Plans
            </Button>
          </motion.div>
        </motion.div>
        <motion.div className="lg:w-1/2 flex justify-center lg:justify-end" variants={itemVariants}>
          <AnimatedGlobe />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
  
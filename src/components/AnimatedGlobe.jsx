
import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const AnimatedGlobe = () => {
  return (
    <motion.div
      className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue/30 via-brand-purple/30 to-brand-pink/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-2 rounded-full border-2 border-brand-cyan/50"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-4 rounded-full border border-brand-pink/50"
        animate={{ scale: [1, 0.95, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <Globe className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 text-brand-cyan cyber-glow-hard" />
      
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-brand-cyan rounded-full shadow-glow-sm"
          style={{
            top: `${50 + 40 * Math.sin(i * Math.PI / 4)}%`,
            left: `${50 + 40 * Math.cos(i * Math.PI / 4)}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default AnimatedGlobe;
  
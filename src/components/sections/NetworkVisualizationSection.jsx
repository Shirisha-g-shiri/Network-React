
import React from 'react';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';

const NetworkVisualizationSection = () => {
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.2, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: i * 0.2, duration: 0.01 }
      }
    })
  };

  return (
    <section className="py-20 px-4 bg-dark-2 digital-grid-bg">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Global Network Backbone
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Visualizing the interconnectedness and resilience of our advanced network infrastructure, ensuring high-speed, secure data transit worldwide.
        </motion.p>
        
        <motion.div 
          className="relative w-full max-w-3xl mx-auto aspect-video p-4 rounded-lg glassmorphic border-primary/30"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "anticipate" }}
        >
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <defs>
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{stopColor: 'var(--brand-cyan)', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor: 'var(--brand-blue)', stopOpacity:0.8}} />
              </radialGradient>
               <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {[
              { cx: 50, cy: 100 }, { cx: 150, cy: 50 }, { cx: 150, cy: 150 },
              { cx: 250, cy: 50 }, { cx: 250, cy: 150 }, { cx: 350, cy: 100 }
            ].map((node, i) => (
              <motion.circle
                key={`node-${i}`}
                cx={node.cx}
                cy={node.cy}
                r="8"
                fill="url(#nodeGradient)"
                filter="url(#glow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 150 }}
              />
            ))}
            
            {[
              { x1: 50, y1: 100, x2: 150, y2: 50 }, { x1: 50, y1: 100, x2: 150, y2: 150 },
              { x1: 150, y1: 50, x2: 150, y2: 150 }, { x1: 150, y1: 50, x2: 250, y2: 50 },
              { x1: 150, y1: 150, x2: 250, y2: 150 }, { x1: 250, y1: 50, x2: 250, y2: 150 },
              { x1: 250, y1: 50, x2: 350, y2: 100 }, { x1: 250, y1: 150, x2: 350, y2: 100 },
              { x1: 150, y1: 50, x2: 250, y2: 150 }, { x1: 150, y1: 150, x2: 250, y2: 50 }
            ].map((line, i) => (
              <motion.line
                key={`line-${i}`}
                x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                stroke="hsl(var(--primary) / 0.7)"
                strokeWidth="1.5"
                strokeLinecap="round"
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true }}
              />
            ))}
             <Network className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-brand-purple opacity-20" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
             <motion.div 
                className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-brand-cyan opacity-50"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkVisualizationSection;
  
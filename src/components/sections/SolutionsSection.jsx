
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Truck, HeartPulse, GraduationCap } from 'lucide-react';

const solutions = [
  { name: 'Retail & E-commerce', icon: <Briefcase className="w-12 h-12 mx-auto mb-4 text-brand-pink" />, description: "Secure POS, inventory management, and customer data networks." },
  { name: 'Logistics & Supply Chain', icon: <Truck className="w-12 h-12 mx-auto mb-4 text-brand-pink" />, description: "Real-time tracking, fleet management, and warehouse connectivity." },
  { name: 'Healthcare Providers', icon: <HeartPulse className="w-12 h-12 mx-auto mb-4 text-brand-pink" />, description: "HIPAA-compliant networks for patient data and telehealth." },
  { name: 'EdTech & Institutions', icon: <GraduationCap className="w-12 h-12 mx-auto mb-4 text-brand-pink" />, description: "Reliable campus networks and secure remote learning platforms." },
];

const SolutionsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section className="py-20 px-4 bg-dark-1">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Tailored Network Solutions
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            We serve a diverse range of industries with specialized networking solutions designed to meet unique operational demands and security requirements.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution) => (
              <motion.div
                key={solution.name}
                className="p-8 rounded-lg text-center transition-all duration-300 hover:bg-dark-3/50 border border-transparent hover:border-secondary/50 hover:shadow-glow-md"
                variants={itemVariants}
              >
                {solution.icon}
                <h3 className="text-xl font-semibold mb-2 text-foreground">{solution.name}</h3>
                <p className="text-muted-foreground text-sm">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
  

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { ChevronRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Start Your Secure Network Journey
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Ready to elevate your business with unparalleled network security and performance? Get in touch with our experts today.
          </p>
          <Button size="lg" variant="default" className="bg-white text-brand-purple hover:bg-white/90 group text-lg px-10 py-6">
            Request a Consultation <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
  
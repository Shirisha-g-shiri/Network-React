
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card.jsx';
import { ShieldCheck, Zap, TrendingUp, Cpu } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-brand-cyan mb-4" />,
    title: 'Unrivaled Security',
    description: 'State-of-the-art encryption and threat detection protocols to safeguard your critical data and operations.',
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-brand-cyan mb-4" />,
    title: 'Infinite Scalability',
    description: 'Our network infrastructure grows with your business, ensuring seamless performance at any scale.',
  },
  {
    icon: <Zap className="w-10 h-10 text-brand-cyan mb-4" />,
    title: 'Maximum Uptime',
    description: 'Redundant systems and proactive maintenance guarantee near-100% uptime for your business continuity.',
  },
  {
    icon: <Cpu className="w-10 h-10 text-brand-cyan mb-4" />,
    title: 'AI-Powered Monitoring',
    description: 'Intelligent network monitoring and predictive analytics to optimize performance and prevent issues.',
  },
];

const WhyChooseUsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 50 } },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 0 25px rgba(0, 224, 255, 0.7), 0 0 40px rgba(138, 43, 226, 0.5)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-20 px-4 bg-dark-2">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            We provide cutting-edge networking solutions designed for the future of business. Experience the difference with our core advantages.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="h-full flex flex-col text-center items-center border-primary/30 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    {feature.icon}
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-foreground/70">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
  
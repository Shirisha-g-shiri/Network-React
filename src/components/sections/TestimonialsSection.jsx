
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Star, UserCircle } from 'lucide-react';

const testimonials = [
  {
    quote: "Their network solutions revolutionized our operations. Unmatched speed and reliability!",
    name: 'Alex Chen',
    title: 'CTO, Innovatech Ltd.',
    avatarText: "AC",
    rating: 5,
  },
  {
    quote: "The security features are top-notch. We feel completely safe with our data in their hands.",
    name: 'Maria Rodriguez',
    title: 'CEO, SecureSoft Inc.',
    avatarText: "MR",
    rating: 5,
  },
  {
    quote: "Scalability was crucial for us, and they delivered beyond expectations. Seamless growth!",
    name: 'John B. Anderson',
    title: 'COO, ScaleUp Dynamics',
    avatarText: "JA",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50, rotateX: -20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      boxShadow: "0px 20px 30px rgba(0, 224, 255, 0.2), 0px 10px 15px rgba(138, 43, 226, 0.15)",
      transition: { duration: 0.3, ease: "circOut" }
    }
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
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Hear what our clients have to say about our transformative network solutions and dedicated support.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.custom
                key={index}
                custom={index}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, amount: 0.5 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col justify-between border-secondary/30 hover:border-secondary transition-all duration-300 p-6">
                  <CardContent className="p-0">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-foreground/90 italic mb-6 text-lg">"{testimonial.quote}"</p>
                  </CardContent>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonial.avatarText || <UserCircle className="w-8 h-8"/>}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </Card>
              </motion.custom>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
  
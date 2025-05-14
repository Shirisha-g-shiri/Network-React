
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Zap } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconVariants = {
    hover: { scale: 1.2, color: 'hsl(var(--primary))', transition: { duration: 0.2 } }
  };

  const footerLinks = [
    { name: 'Home', href: '#' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github />, href: '#', name: 'GitHub' },
    { icon: <Linkedin />, href: '#', name: 'LinkedIn' },
    { icon: <Twitter />, href: '#', name: 'Twitter' },
  ];

  return (
    <footer className="bg-dark-3 text-muted-foreground py-16 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div 
            initial={{ opacity:0, x: -20 }} 
            whileInView={{ opacity:1, x: 0 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center mb-4">
              <Zap className="w-10 h-10 text-primary mr-2 cyber-glow-hard" />
              <span className="text-2xl font-bold text-foreground">NetCore</span>
            </div>
            <p className="text-sm text-center md:text-left">Powering Business Through Secure Connectivity.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity:0, y: 20 }} 
            whileInView={{ opacity:1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h5 className="text-lg font-semibold text-foreground mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors duration-200 text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity:0, y: 20 }} 
            whileInView={{ opacity:1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h5 className="text-lg font-semibold text-foreground mb-4">Stay Updated</h5>
            <p className="text-sm mb-4">Get the latest news on network security and our innovative solutions.</p>
            <NewsletterSignup />
          </motion.div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm mb-4 sm:mb-0">&copy; {currentYear} NetCore Inc. All rights reserved.</p>
          <div className="flex space-x-4">
            {socialLinks.map(social => (
              <motion.a 
                key={social.name} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="text-muted-foreground hover:text-primary"
                aria-label={social.name}
              >
                {React.cloneElement(social.icon, { className: "w-6 h-6" })}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast.jsx';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      localStorage.setItem('newsletter_signup_email', email);
      toast({
        title: "Subscribed!",
        description: "Thanks for signing up for our newsletter.",
        variant: "default",
      });
      setEmail('');
    } else {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Label htmlFor="newsletter-email" className="sr-only">Email for newsletter</Label>
      <Input
        id="newsletter-email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow bg-dark-3/70 border-border focus:border-primary"
        aria-label="Email for newsletter"
      />
      <Button type="submit" variant="premium" size="default" className="shrink-0">
        Subscribe <Send className="w-4 h-4 ml-2" />
      </Button>
    </motion.form>
  );
};

export default NewsletterSignup;
  
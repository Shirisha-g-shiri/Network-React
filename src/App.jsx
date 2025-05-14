
import React from 'react';
import HomePage from '@/pages/HomePage.jsx';
import { Toaster } from '@/components/ui/toaster.jsx';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-dark-1 digital-grid-bg"
    >
      <HomePage />
      <Toaster />
    </motion.div>
  );
}

export default App;
  
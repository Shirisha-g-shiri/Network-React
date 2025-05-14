
import React from 'react';
import HeroSection from '@/components/sections/HeroSection.jsx';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection.jsx';
import SolutionsSection from '@/components/sections/SolutionsSection.jsx';
import NetworkVisualizationSection from '@/components/sections/NetworkVisualizationSection.jsx';
import TestimonialsSection from '@/components/sections/TestimonialsSection.jsx';
import CtaSection from '@/components/sections/CtaSection.jsx';
import Footer from '@/components/Footer.jsx';
import Navbar from '../components/sections/Navbar';
const HomePage = () => {
  return (
    <div className="flex-grow">
      <main>
        <Navbar />
        <HeroSection />
        <WhyChooseUsSection />
        <SolutionsSection />
        <NetworkVisualizationSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
  
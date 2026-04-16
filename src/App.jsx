import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/home/HeroSection';
import TechStackMarquee from './components/home/TechStackMarquee';
import ServicesOverview from './components/home/ServicesOverview';
import WhyChooseUs from './components/home/WhyChooseUs';
import ProcessTimeline from './components/home/ProcessTimeline';
import Portfolio from './components/home/Portfolio';
import Testimonials from './components/home/Testimonials';
import ContactSection from './components/home/ContactSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <TechStackMarquee />
      <ServicesOverview />
      <Portfolio />
      <WhyChooseUs />
      <ProcessTimeline />
      <Testimonials />
      <ContactSection />
    </Layout>
  );
}

export default App;

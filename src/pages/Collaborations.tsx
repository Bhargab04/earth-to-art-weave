
import React from 'react';
import Navbar from '@/components/Navbar';
import BrandCollaboration from '@/components/BrandCollaboration';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Collaborations = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-charcoal mb-6">
              Iconic <span className="text-gold">Collaborations</span>
            </h1>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Trusted by the world's most prestigious brands and visionary designers. 
              Discover the stories behind our most celebrated partnerships.
            </p>
          </div>
        </div>
        <BrandCollaboration />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Collaborations;

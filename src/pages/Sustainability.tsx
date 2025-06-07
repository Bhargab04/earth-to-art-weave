
import React from 'react';
import Navbar from '@/components/Navbar';
import EcoMetrics from '@/components/EcoMetrics';
import Footer from '@/components/Footer';

const Sustainability = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-charcoal mb-6">
              Luxury Without <span className="text-gold">Compromise</span>
            </h1>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our commitment to the planet runs as deep as our dedication to craftsmanship. 
              Discover how we're redefining luxury through sustainable innovation.
            </p>
          </div>
        </div>
        <EcoMetrics />
      </div>
      <Footer />
    </div>
  );
};

export default Sustainability;


import React from 'react';
import Navbar from '@/components/Navbar';
import PaintCollections from '@/components/PaintCollections';
import Footer from '@/components/Footer';

const Collections = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-ivory mb-6">
              Crafted <span className="text-gold">Collections</span>
            </h1>
            <p className="text-xl text-ivory/80 max-w-3xl mx-auto">
              Every collection tells a story of natural beauty, scientific precision, and global sourcing. 
              Discover finishes that transform spaces into works of art.
            </p>
          </div>
        </div>
        <PaintCollections />
      </div>
      <Footer />
    </div>
  );
};

export default Collections;

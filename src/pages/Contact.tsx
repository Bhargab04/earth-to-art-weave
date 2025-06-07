
import React from 'react';
import Navbar from '@/components/Navbar';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-charcoal mb-6">
              Let's Create <span className="text-gold">Together</span>
            </h1>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Ready to transform your space? Our design consultants are here to guide you 
              from concept to completion.
            </p>
          </div>
        </div>
        <ContactCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

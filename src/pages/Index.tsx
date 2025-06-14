
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FromSoilToSurface from '@/components/FromSoilToSurface';
import GlobalJourney from '@/components/GlobalJourney';
import MaterialAlchemy from '@/components/MaterialAlchemy';
import AutoRotatingBrands from '@/components/AutoRotatingBrands';
import AutoRotatingCollections from '@/components/AutoRotatingCollections';
import BrandCollaboration from '@/components/BrandCollaboration';
import EcoMetrics from '@/components/EcoMetrics';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FromSoilToSurface />
      <GlobalJourney />
      <MaterialAlchemy />
      <AutoRotatingBrands />
      <AutoRotatingCollections />
      <BrandCollaboration />
      <EcoMetrics />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;

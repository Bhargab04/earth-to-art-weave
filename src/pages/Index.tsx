
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FromSoilToSurface from '@/components/FromSoilToSurface';
import GlobalJourney from '@/components/GlobalJourney';
import MaterialAlchemy from '@/components/MaterialAlchemy';
import EcoMetrics from '@/components/EcoMetrics';
import PaintCollections from '@/components/PaintCollections';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FromSoilToSurface />
      <GlobalJourney />
      <MaterialAlchemy />
      <EcoMetrics />
      <PaintCollections />
    </div>
  );
};

export default Index;

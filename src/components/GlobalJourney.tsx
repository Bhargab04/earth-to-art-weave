
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface Region {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
  materials: string[];
}

const GlobalJourney = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeRegion, setActiveRegion] = useState(0);

  const regions: Region[] = [
    {
      name: "Asia",
      subtitle: "Clay & Spice Pigments",
      description: "Ancient clays and mineral-rich soils from the foothills of the Himalayas create our most coveted earth tones.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2000&auto=format&fit=crop",
      color: "from-terracotta to-gold",
      materials: ["Himalayan Clay", "Turmeric Essence", "Vermillion Oxide"]
    },
    {
      name: "Africa",
      subtitle: "Earth Minerals",
      description: "Deep ochres and iron-rich laterites from the heart of the continent bring warmth and authenticity to every finish.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2000&auto=format&fit=crop",
      color: "from-terracotta to-charcoal",
      materials: ["Red Ochre", "Iron Laterite", "Kalahari Sand"]
    },
    {
      name: "Europe",
      subtitle: "Historic Hues",
      description: "Limestone powders and ancient pigments from Mediterranean quarries carry centuries of artistic heritage.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000&auto=format&fit=crop",
      color: "from-ivory to-graphene",
      materials: ["Carrara Marble Dust", "Provence Lavender", "Alpine Limestone"]
    },
    {
      name: "South America",
      subtitle: "Botanical Dyes",
      description: "Vibrant plant-based pigments from the Amazon rainforest create our most sustainable and vivid color palettes.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2000&auto=format&fit=crop",
      color: "from-forest to-gold",
      materials: ["Açaí Berry Extract", "Brazil Nut Oil", "Rainforest Minerals"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.scrollWidth / regions.length;
      const newActiveRegion = Math.round(scrollLeft / itemWidth);
      setActiveRegion(Math.max(0, Math.min(regions.length - 1, newActiveRegion)));
    };

    const scrollElement = scrollRef.current;
    scrollElement?.addEventListener('scroll', handleScroll);
    return () => scrollElement?.removeEventListener('scroll', handleScroll);
  }, [regions.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-ivory to-graphene/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6">
            A Journey Across <span className="text-gradient-gold">Continents</span>
          </h2>
          <p className="text-xl text-graphene/80 max-w-3xl mx-auto font-light">
            Our pigments travel from sacred soils to your sanctuary, carrying the essence of their origins.
          </p>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {regions.map((region, index) => (
            <div
              key={region.name}
              className="flex-none w-80 md:w-96 snap-center"
            >
              <div className="relative group hover-lift cursor-pointer">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${region.color} opacity-60`} />
                  
                  {/* Region overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h3 className="font-playfair text-3xl font-bold text-ivory mb-2">
                      {region.name}
                    </h3>
                    <p className="text-ivory/90 text-lg font-medium">
                      {region.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-graphene/80 leading-relaxed">
                    {region.description}
                  </p>
                  
                  {/* Materials */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gold">Key Materials:</p>
                    <div className="flex flex-wrap gap-2">
                      {region.materials.map((material) => (
                        <span
                          key={material}
                          className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 gap-2">
          {regions.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeRegion ? 'bg-gold scale-125' : 'bg-graphene/30'
              }`}
              onClick={() => {
                if (scrollRef.current) {
                  const itemWidth = scrollRef.current.scrollWidth / regions.length;
                  scrollRef.current.scrollTo({
                    left: index * itemWidth,
                    behavior: 'smooth'
                  });
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalJourney;

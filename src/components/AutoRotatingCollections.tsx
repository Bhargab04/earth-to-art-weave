
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

const AutoRotatingCollections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const collections = [
    {
      id: 1,
      name: 'Terracotta Heritage',
      source: 'Moroccan Clay Deposits',
      color: 'bg-terracotta',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop',
      label: 'Botanical'
    },
    {
      id: 2,
      name: 'Forest Essence',
      source: 'Amazon Botanical Extracts',
      color: 'bg-forest',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop',
      label: 'New'
    },
    {
      id: 3,
      name: 'Graphene Precision',
      source: 'Scandinavian Graphite',
      color: 'bg-graphene',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
      label: 'Premium'
    },
    {
      id: 4,
      name: 'Antique Gold',
      source: 'Ethiopian Minerals',
      color: 'bg-gold',
      image: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?q=80&w=800&auto=format&fit=crop',
      label: 'Luxury'
    }
  ];

  useEffect(() => {
    if (!carouselRef.current) return;

    const cards = carouselRef.current.children;
    const cardWidth = 320; // width + gap
    let currentIndex = 0;

    const rotateCarousel = () => {
      currentIndex = (currentIndex + 1) % collections.length;
      gsap.to(carouselRef.current, {
        x: -currentIndex * cardWidth,
        duration: 1,
        ease: "power2.inOut"
      });
    };

    const interval = setInterval(rotateCarousel, 4000);

    // Pause on hover
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseenter', () => clearInterval(interval));
      container.addEventListener('mouseleave', () => {
        const newInterval = setInterval(rotateCarousel, 4000);
        return () => clearInterval(newInterval);
      });
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Crafted <span className="text-gold">Collections</span>
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
            Each collection rotates to reveal the story of natural beauty and scientific precision
          </p>
        </div>

        <div ref={containerRef} className="relative">
          <div className="overflow-hidden">
            <div ref={carouselRef} className="flex space-x-8 transition-transform">
              {[...collections, ...collections].map((collection, index) => (
                <div
                  key={`${collection.id}-${index}`}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg bg-charcoal/5 backdrop-blur-sm border border-gold/20 hover:border-gold/40 transition-all duration-500 hover:shadow-2xl">
                    {/* Label */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-medium">
                        {collection.label}
                      </span>
                    </div>

                    <div className="aspect-square relative">
                      <img 
                        src={collection.image} 
                        alt={collection.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 ${collection.color} opacity-40 mix-blend-overlay`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                    </div>

                    <div className="p-6">
                      <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-charcoal/70 text-sm mb-4">
                        {collection.source}
                      </p>
                      <Button 
                        size="sm" 
                        className="bg-gold hover:bg-gold/90 text-charcoal font-medium shine-effect"
                      >
                        Explore Collection
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {collections.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-charcoal/20 hover:bg-gold/60 transition-colors cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoRotatingCollections;
